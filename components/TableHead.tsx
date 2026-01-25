import { flexRender, Table } from "@tanstack/react-table";
import clsx from "clsx";

const density = ["py-2", "py-4", "py-6"];

function TableHead<TData>({ table, densityIndex }: { table: Table<TData>; densityIndex: number }) {
    return (
        <thead>
            {table.getHeaderGroups().map((headerGroup) => (
                <tr key={headerGroup.id} className="bg-invert sticky top-39">
                    {headerGroup.headers.map((header) => (
                        <th
                            key={header.id}
                            className={clsx(
                                "relative px-2 not-last:border-r",
                                density[densityIndex],
                                //排序
                                header.column.getCanSort() ? "cursor-pointer select-none" : "",
                            )}
                            //点击排序
                            onClick={header.column.getToggleSortingHandler()}
                            title={
                                header.column.getCanSort()
                                    ? header.column.getNextSortingOrder() === "asc"
                                        ? "Sort ascending"
                                        : header.column.getNextSortingOrder() === "desc"
                                          ? "Sort descending"
                                          : "Clear sort"
                                    : undefined
                            }
                            colSpan={header.colSpan}
                            style={{
                                width: header.getSize(),
                            }}>
                            {/* 套一层div，调整排序ui位置 */}
                            <div className="flex justify-center gap-x-2">
                                {header.isPlaceholder
                                    ? null
                                    : flexRender(
                                          header.column.columnDef.header,
                                          header.getContext(),
                                      )}

                                {/* 排序ui     */}
                                {{
                                    asc: " 🔼",
                                    desc: " 🔽",
                                }[header.column.getIsSorted() as string] ?? null}
                            </div>
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
    );
}

export default TableHead;

export function CreateHeader({ headerText }: { headerText: string }) {
    return <div className="whitespace-nowrap">{headerText}</div>;
}
