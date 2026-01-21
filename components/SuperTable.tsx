import { ColumnDef, getCoreRowModel, useReactTable } from '@tanstack/react-table';
import React, { useState } from 'react'
import TableCaption from './TableCaption';
import TableHead from './TableHead';
import TableBody from './TableBody';

function SuperTable<TData>({ data, columns }: { data: TData[], columns: ColumnDef<TData, any>[] }) {

    const table = useReactTable({
        data,
        columns,
        getCoreRowModel: getCoreRowModel(), //row model
        //列宽度更新模式
        columnResizeMode: "onChange",
    });

    const [densityIndex, setDensityIndex] = useState(1);

    const densityHandler = () => {
        setDensityIndex((densityIndex + 1) % 3);
    };

    return (
        <table
            className="border-separate border-spacing-0 rounded border-[0.5px]"
            {...{
                style: {
                    width: table.getCenterTotalSize(),
                },
            }}
        >
            <TableCaption densityIndex={densityIndex} densityHandler={densityHandler} />
            <TableHead table={table} densityIndex={densityIndex}></TableHead>
            <TableBody table={table} densityIndex={densityIndex} />
        </table>
    )
}

export default SuperTable