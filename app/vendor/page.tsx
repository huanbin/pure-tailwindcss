"use client";
import React from "react";
import { faker } from "@faker-js/faker";
import {
    createColumnHelper,
    flexRender,
    getCoreRowModel,
    useReactTable,
} from "@tanstack/react-table";

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
};

const data = new Array<Vendor>(100).fill({
    id: faker.string.uuid(),
    name: faker.internet.username(),
    taxCode: faker.string.alphanumeric(),
    bankName: faker.company.name(),
    bankAccount: faker.internet.mac(),
    email: faker.internet.email(),
    phone: faker.phone.number(),
    address: faker.location.city(),
    createDate: faker.date.past(),
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
        header: "名称",
    },
    {
        accessorKey: "taxCode",
        header: "纳税识别号",
    },
    {
        accessorKey: "bankName",
        header: "银行名称",
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
        accessorKey: "createDate",
        header: "创建日期",
    },
];

const VendorPage = () => {
    const table = useReactTable({
        data,
        columns,
        getCoreRowModel: getCoreRowModel(), //row model
    });

    return (
        <div>
            <div>
                <h2>VendorPage</h2>
                <p>select * from table_user where concat(`name`,`age`,`address`) like `%hello%`;</p>
            </div>
            <div>
                <table className="table-auto">
                    <thead>
                        {table.getHeaderGroups().map((headerGroup) => (
                            <tr key={headerGroup.id}>
                                {headerGroup.headers.map((header) => (
                                    <th key={header.id} className="border px-2 py-4">
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
                            <tr key={row.id} className="border">
                                {row.getVisibleCells().map((cell) => (
                                    <td key={cell.id} className="border px-4 py-2">
                                        {flexRender(cell.column.columnDef.cell, cell.getContext())}
                                    </td>
                                ))}
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default VendorPage;
