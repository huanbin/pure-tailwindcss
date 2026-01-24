"use client";
import React from "react";
import SuperTable from "@/components/SuperTable";
import { faker } from "@faker-js/faker";
import { createColumnHelper } from "@tanstack/react-table";
import { CreateHeader } from "@/components/TableHead";

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
        id: "select-row",
        header: ({ table }) => (
            <input
                type="checkbox"
                checked={table.getIsAllRowsSelected()}
                // indeterminate={table.getIsSomeRowsSelected()}
                onChange={table.getToggleAllRowsSelectedHandler()} //or getToggleAllPageRowsSelectedHandler
            />
        ),
        cell: ({ row }) => (
            <input
                type="checkbox"
                checked={row.getIsSelected()}
                disabled={!row.getCanSelect()}
                onChange={row.getToggleSelectedHandler()}
            />
        ),
        enableHiding: false,
    }),
    columnHelper.display({
        id: "actions",
        //header: "序号",
        header: () => <CreateHeader headerText="序号" />,
        cell: (props) => <div className="text-center">{props.row.id}</div>,
        //禁止该列隐藏
        enableHiding: false,
    }),
    columnHelper.accessor("id", {
        // cell: Used for formatting cells.
        cell: (info) => <div>{info.getValue()}</div>,
        //aggregatedCell: Used for formatting cells when aggregated
        // header: Used for formatting headers.
        header: () => <CreateHeader headerText="ID" />,

        // footer: Used for formatting footers.
        //footer: (props) => props.column.id,
    }),
    {
        accessorKey: "name",
        // header: "名称",
        header: () => <CreateHeader headerText="名称" />,
    },
    {
        accessorKey: "taxCode",
        header: () => <CreateHeader headerText="纳税识别号" />,
        // header: "纳税识别号",
    },
    {
        accessorKey: "bankName",
        // header: "银行名称",
        header: () => <CreateHeader headerText="银行名称" />,
    },
    {
        accessorKey: "bankAccount",
        // header: "银行账号",
        header: () => <CreateHeader headerText="银行账号" />,
    },
    {
        accessorKey: "email",
        // header: "邮箱",
        header: () => <CreateHeader headerText="邮箱" />,
    },
    {
        accessorKey: "phone",
        // header: "电话",
        header: () => <CreateHeader headerText="电话" />,
    },
    {
        accessorKey: "address",
        // header: "地址",
        header: () => <CreateHeader headerText="地址" />,
    },
    {
        //第一次交易
        accessorKey: "createDate",
        header: () => <CreateHeader headerText="创建日期" />,
    },
    {
        // 最后一次交易
        accessorKey: "updateDate",
        header: () => <CreateHeader headerText="更新日期" />,
    },
];

function RowSelectTable() {
    const [columns] = React.useState<typeof defaultColumns>(() => [...defaultColumns]);

    return (
        <SuperTable
            data={data}
            columns={columns}
            initState={{
                columnVisibility: {
                    email: false,
                    createDate: false,
                    updateDate: false,
                },
            }}
        />
    );
}

export default RowSelectTable;
