"use client";
import React from "react";
import { faker } from "@faker-js/faker";
import {
    createColumnHelper,
    flexRender,
    getCoreRowModel,
    useReactTable,
} from "@tanstack/react-table";
import { maxHeaderSize } from "http";

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

const columns = [
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
                <div className="min-w-[500px]">
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
                <div className="min-w-[500px]">
                    <p>更新日期</p>
                </div>
            );
        },
    },
];

function BasicTable() {
    const table = useReactTable({
        data,
        columns,
        getCoreRowModel: getCoreRowModel(), //row model
    });

    return (
        // table-fixed
        // 表格和列的宽度是由 table 和 col 元素的宽度或第一行单元格的宽度来设置的。后续行中的单元格不会影响列的宽度。
        <table className="table-fixed border-separate border-spacing-0 rounded-2xl border-[0.5px]">
            <caption>
                <div>
                    <h2>VendorPage</h2>
                    <p>
                        select * from table_user where concat(`name`,`age`,`address`) like
                        `%hello%`;
                    </p>
                </div>
            </caption>
            <thead>
                {/*
                 const headers = useMemo(() => table.getHeaderGroups(), [table]);
                 */}
                {table.getHeaderGroups().map((headerGroup) => (
                    <tr key={headerGroup.id}>
                        {headerGroup.headers.map((header) => (
                            <th key={header.id} className="px-2 py-4 not-last:border-r">
                                {header.isPlaceholder
                                    ? null
                                    : flexRender(
                                          header.column.columnDef.header,
                                          header.getContext(),
                                      )}
                            </th>
                        ))}
                    </tr>
                ))}
            </thead>
            <tbody>
                {table.getRowModel().rows.map((row) => (
                    <tr key={row.id}>
                        {row.getVisibleCells().map((cell) => (
                            <td key={cell.id} className="border-t px-4 py-2 not-last:border-r">
                                {flexRender(cell.column.columnDef.cell, cell.getContext())}
                            </td>
                        ))}
                    </tr>
                ))}
            </tbody>
        </table>
    );
}

export default BasicTable;
