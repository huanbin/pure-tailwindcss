import {
    ColumnDef,
    getCoreRowModel,
    getFilteredRowModel,
    getSortedRowModel,
    InitialTableState,
    useReactTable,
    VisibilityState,
} from "@tanstack/react-table";
import React, { useState } from "react";
import TableCaption from "./TableCaption";
import TableHead from "./TableHead";
import TableBody from "./TableBody";

//排序
type SortingState = {
    id: string;
    desc: boolean;
};

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
        //"select-row": false,
        createDate: false,
        updateDate: false,
    });

    const [sorting, setSorting] = useState<SortingState[]>([
        { id: "createDate", desc: false },
        { id: "taxCode", desc: false },
    ]); // can set initial sorting state here

    // 注意initialState 和 state同时设置，则 state 初始化将优先，而 initialState 将被忽略。
    const table = useReactTable({
        data,
        columns,
        getCoreRowModel: getCoreRowModel(), //row model
        //列宽度更新模式
        columnResizeMode: "onChange",
        //启用表行选择
        enableRowSelection: true,
        enableMultiRowSelection: true,
        //全局过滤
        getFilteredRowModel: getFilteredRowModel(),
        //全局过滤函数: 忽略大小写的字符串包含
        globalFilterFn: "includesString",
        //排序
        getSortedRowModel: getSortedRowModel(),
        //启用所有列多列排序
        //enableMultiSort: true,
        //normal click triggers multi-sorting
        isMultiSortEvent: (e) => true,
        // only allow 3 columns to be sorted at once
        maxMultiSortColCount: 3,
        state: {
            columnVisibility,
            sorting,
        },
        onSortingChange: setSorting,
        onColumnVisibilityChange: setColumnVisibility,
        // initialState: {
        //     columnVisibility: {
        //         email: false,
        //         createDate: false,
        //         updateDate: false,
        //     },
        // },
        initialState: initState,
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
