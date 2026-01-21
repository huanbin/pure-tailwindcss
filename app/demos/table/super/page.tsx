"use client";
import SuperTable from '@/components/SuperTable'
import { faker } from '@faker-js/faker';
import { createColumnHelper } from '@tanstack/react-table';
import React from 'react'

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
        cell: (props) => <div>{props.row.id}</div>,
    }),
    columnHelper.accessor("id", {
        // cell: Used for formatting cells.
        cell: (info) =>
            <div>{info.getValue()}</div>,
        //aggregatedCell: Used for formatting cells when aggregated
        // header: Used for formatting headers.
        header: "ID",
        // footer: Used for formatting footers.
        //footer: (props) => props.column.id,
    }),
    {
        accessorKey: "name",
        // header: "名称",
        header: () => {
            // 修改宽度
            return <div>名称</div>;
        },
    },
    {
        accessorKey: "taxCode",
        header: () => {
            return <div>纳税识别号</div>;
        },
        // header: "纳税识别号",
    },
    {
        accessorKey: "bankName",
        // header: "银行名称",
        header: () => {
            return <div>银行名称</div>;
        },
    },
    {
        accessorKey: "bankAccount",
        // header: "银行账号",
        header: () => {
            return (
                <div>
                    银行账号
                </div>
            );
        },
    },
    {
        accessorKey: "email",
        // header: "邮箱",
        header: () => {
            return (
                <div>
                    邮箱
                </div>
            );
        },
    },
    {
        accessorKey: "phone",
        // header: "电话",
        header: () => {
            return (
                <div >
                    电话
                </div>
            );
        },
    },
    {
        accessorKey: "address",
        // header: "地址",
        header: () => {
            return (
                <div>
                    地址
                </div>
            );
        },
    },
    {
        //第一次交易
        accessorKey: "createDate",
        header: () => {
            return (
                <div>
                    创建日期
                </div>
            );
        },
    },
    {
        // 最后一次交易
        accessorKey: "updateDate",
        header: () => {
            return (
                <div>
                    更新日期
                </div>
            );
        },
    },
];


function SuperTablePage1() {

    const [columns] = React.useState<typeof defaultColumns>(() => [...defaultColumns]);


    return (
        <SuperTable data={data} columns={columns} />
    )
}

export default SuperTablePage1
