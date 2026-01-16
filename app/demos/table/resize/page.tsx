"use client";
import React, { useState } from "react";
import { faker } from "@faker-js/faker";
import {
    createColumnHelper,
    flexRender,
    getCoreRowModel,
    useReactTable,
} from "@tanstack/react-table";
import clsx from "clsx";
import { Rows4Icon, SearchIcon } from "lucide-react";

type Vendor = {
    id: string;
    name: string;
    taxCode: string;
    bankName: string;
    bankAccount: string;
    email?: string;
    phone?: string;
    address?: string;
    createDate?: Date;
    updateDate?: Date;
};

const data = new Array<Vendor>(100).fill({
    id: faker.string.uuid(),
    name: faker.internet.username(),
    taxCode: faker.string.nanoid(),
    bankName: faker.company.name(),
    bankAccount: faker.internet.mac(),
    email: faker.internet.email(),
    phone: faker.phone.number(),
    address: faker.location.city(),
    createDate: faker.date.past(),
    updateDate: faker.date.past(),
});

const columnHelper = createColumnHelper<Vendor>();

const defaultColumns = [
    columnHelper.display({
        id: "actions",
        header: "序号",
        cell: (props) => <span>{props.row.id}</span>,
    }),
    columnHelper.accessor("id", {
        // cell: Used for formatting cells.
        cell: (info) => info.getValue(),
        //aggregatedCell: Used for formatting cells when aggregated
        // header: Used for formatting headers.
        header: () => <span>ID</span>,
        // footer: Used for formatting footers.
        //footer: (props) => props.column.id,
    }),
    {
        accessorKey: "name",
        // header: "名称",
        header: () => {
            // 修改宽度
            return <div className="min-w-45">名称</div>;
        },
    },
    {
        accessorKey: "taxCode",
        header: () => {
            return <div className="min-w-45">纳税识别号</div>;
        },
        // header: "纳税识别号",
    },
    {
        accessorKey: "bankName",
        // header: "银行名称",
        header: () => {
            return <div className="min-w-45">银行名称</div>;
        },
    },
    {
        accessorKey: "bankAccount",
        header: "银行账号",
    },
    {
        accessorKey: "email",
        header: "邮箱",
    },
    {
        accessorKey: "phone",
        header: "电话",
    },
    {
        accessorKey: "address",
        header: "地址",
    },
    {
        //第一次交易
        accessorKey: "createDate",
        header: () => {
            return (
                <div className="min-w-125">
                    <p>创建日期</p>
                </div>
            );
        },
    },
    {
        // 最后一次交易
        accessorKey: "updateDate",
        header: () => {
            return (
                <div className="min-w-125">
                    <p>更新日期</p>
                </div>
            );
        },
    },
];

const density = ["py-2", "py-4", "py-6", "py-8", "py-10"];

// column
function ResizeTable() {
    const [densityIndex, setDensityIndex] = useState(2);
    const [columns] = React.useState<typeof defaultColumns>(() => [...defaultColumns]);

    const table = useReactTable({
        data,
        columns,
        getCoreRowModel: getCoreRowModel(), //row model
        //列宽度更新模式
        columnResizeMode: "onChange",
    });

    const densityHandler = () => {
        setDensityIndex((densityIndex + 1) % 5);
    };

    return (
        // table-fixed
        // 表格和列的宽度是由 table 和 col 元素的宽度或第一行单元格的宽度来设置的。后续行中的单元格不会影响列的宽度。
        // table-auto 表格及其单元格的宽度会根据内容自动调整大小
        <table
            className="border-separate border-spacing-0 rounded-2xl border-[0.5px]"
            {...{
                style: {
                    width: table.getCenterTotalSize(),
                },
            }}
        >
            <caption>
                <div className="mb-4 space-y-3">
                    <div className="text-left">
                        <h2>VendorPage</h2>
                        <p>
                            select * from table_user where concat(`name`,`age`,`address`) like
                            `%hello%`;
                        </p>
                    </div>
                    <div className="flex flex-row space-x-3">
                        <form className="border-foreground relative flex w-120 items-center justify-center overflow-hidden rounded-md border">
                            <input
                                name="keyword"
                                placeholder="请输入关键字"
                                className="w-full pl-3 focus:outline-0"
                            />
                            <button
                                type="submit"
                                className="bg-foreground/10 hover:bg-foreground/30 absolute inset-y-0 right-0 flex items-center p-4"
                            >
                                <SearchIcon className="h-4 w-4" />
                            </button>
                        </form>

                        <div>
                            <button
                                className="btn btn-circle bg-white/10 hover:bg-white/30"
                                onClick={densityHandler}
                            >
                                <Rows4Icon className="text-foreground h-4 w-4" />
                            </button>
                        </div>
                    </div>
                </div>
            </caption>
            <thead>
                {table.getHeaderGroups().map((headerGroup) => (
                    <tr key={headerGroup.id}>
                        {headerGroup.headers.map((header) => (
                            <th
                                key={header.id}
                                className={clsx(
                                    "relative px-2 not-last:border-r",
                                    density[densityIndex],
                                )}
                                colSpan={header.colSpan}
                                style={{
                                    width: header.getSize(),
                                }}
                            >
                                {header.isPlaceholder
                                    ? null
                                    : flexRender(
                                          header.column.columnDef.header,
                                          header.getContext(),
                                      )}

                                <div
                                    className={clsx(
                                        "absolute top-0 right-0 h-full w-1.5 cursor-col-resize touch-none opacity-0 transition duration-300 ease-in-out select-none hover:opacity-100",
                                        `${header.column.getIsResizing() ? "bg-teal-500 opacity-100" : ""}`,
                                    )}
                                    onDoubleClick={() => header.column.resetSize()}
                                    onMouseDown={header.getResizeHandler()}
                                    onTouchStart={header.getResizeHandler()}
                                />
                            </th>
                        ))}
                    </tr>
                ))}
            </thead>
            <tbody>
                {table.getRowModel().rows.map((row) => (
                    <tr key={row.id}>
                        {row.getVisibleCells().map((cell) => (
                            <td
                                key={cell.id}
                                className={clsx(
                                    "border-t px-2 not-last:border-r",
                                    density[densityIndex],
                                )}
                                style={{
                                    width: cell.column.getSize(),
                                }}
                            >
                                {flexRender(cell.column.columnDef.cell, cell.getContext())}
                            </td>
                        ))}
                    </tr>
                ))}
            </tbody>
        </table>
    );
}

export default ResizeTable;
