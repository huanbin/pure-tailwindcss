import { flexRender, Table } from "@tanstack/react-table";
import clsx from "clsx";

const density = ["py-2", "py-4", "py-6"];

function TableBody<TData>({ table, densityIndex }: { table: Table<TData>; densityIndex: number }) {
    return (
        <tbody>
            {table.getRowModel().rows.map((row) => (
                <tr
                    key={row.id}
                    className={clsx("hover:bg-invert", row.getIsSelected() && "bg-invert")}>
                    {row.getVisibleCells().map((cell) => (
                        <td
                            key={cell.id}
                            className={clsx(
                                "border-t px-2 not-last:border-r",
                                "whitespace-nowrap",
                                density[densityIndex],
                            )}
                            style={{
                                width: cell.column.getSize(),
                            }}>
                            {flexRender(cell.column.columnDef.cell, cell.getContext())}
                        </td>
                    ))}
                </tr>
            ))}
        </tbody>
    );
}

export default TableBody;
