import {
    ColumnDef,
    getCoreRowModel,
    InitialTableState,
    useReactTable,
    VisibilityState,
} from "@tanstack/react-table";
import React, { useState } from "react";
import TableCaption from "./TableCaption";
import TableHead from "./TableHead";
import TableBody from "./TableBody";

function SuperTable<TData>({
    data,
    columns,
    initState,
}: {
    data: TData[];
    columns: ColumnDef<TData, any>[];
    initState?: InitialTableState;
}) {
    const [columnVisibility, setColumnVisibility] = React.useState<VisibilityState>({
        createDate: false,
        updateDate: false,
    });

    // 注意initialState 和 state同时设置，则 state 初始化将优先，而 initialState 将被忽略。
    const table = useReactTable({
        data,
        columns,
        getCoreRowModel: getCoreRowModel(), //row model
        //列宽度更新模式
        columnResizeMode: "onChange",
        state: {
            columnVisibility,
        },
        onColumnVisibilityChange: setColumnVisibility,
        // initialState: {
        //     columnVisibility: {
        //         email: false,
        //         createDate: false,
        //         updateDate: false,
        //     },
        // },
    });

    const [densityIndex, setDensityIndex] = useState(1);

    const densityHandler = () => {
        setDensityIndex((densityIndex + 1) % 3);
    };

    return (
        <table
            className="min-w-full border-separate border-spacing-0 rounded border-[0.5px]"
            {...{
                style: {
                    width: table.getCenterTotalSize(),
                },
            }}>
            <TableCaption
                densityIndex={densityIndex}
                densityHandler={densityHandler}
                table={table}
            />
            <TableHead table={table} densityIndex={densityIndex} />
            <TableBody table={table} densityIndex={densityIndex} />
        </table>
    );
}

export default SuperTable;
