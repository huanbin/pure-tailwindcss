import { Table } from "@tanstack/react-table";
import { Rows2Icon, Rows3Icon, Rows4Icon, SearchIcon, FileDown, FileUp } from "lucide-react";
import Dropdown from "./Dropdown";
import Tooltip from "./Tooltip";
import { json } from "node:stream/consumers";

function TableCaption<TData>({
    densityIndex,
    table,
    densityHandler,
}: {
    densityIndex: number;
    table: Table<TData>;
    densityHandler: () => void;
}) {
    const handleImportSheet = () => {};
    const handleDownloadSheet = () => {
        const datas = table.getSelectedRowModel();
        console.log(JSON.stringify(datas));
    };

    return (
        <caption className="bg-invert sticky top-0 z-1000 border-b p-4">
            <div className="mb-4 space-y-3">
                <div className="text-left">
                    <h2>VendorPage</h2>
                    <p>
                        select * from table_user where concat(`name`,`age`,`address`) like
                        `%hello%`;
                    </p>
                </div>
                <div className="flex flex-row space-x-3">
                    {/* has-focus根据子元素设置父元素样式 */}
                    <form className="border-foreground has-focus:border-accent relative flex w-120 items-center justify-center overflow-hidden rounded-md border transition duration-75 ease-in-out">
                        <input
                            name="keyword"
                            placeholder="请输入关键字"
                            className="w-full pl-3 focus:outline-0"
                        />
                        <button
                            type="submit"
                            className="bg-foreground/10 hover:bg-foreground/30 absolute inset-y-0 right-0 flex items-center p-4">
                            <SearchIcon className="h-4 w-4" />
                        </button>
                    </form>

                    <div className="space-x-3">
                        <button
                            className="btn btn-circle bg-white/10 hover:bg-white/30"
                            onClick={densityHandler}>
                            {densityIndex == 0 && <Rows4Icon className="text-foreground h-4 w-4" />}
                            {densityIndex == 1 && <Rows3Icon className="text-foreground h-4 w-4" />}
                            {densityIndex == 2 && <Rows2Icon className="text-foreground h-4 w-4" />}
                        </button>
                        <Tooltip tipText="下载excel文件">
                            <button
                                className="btn btn-circle bg-white/10 hover:bg-white/30"
                                onClick={handleDownloadSheet}>
                                <FileDown className="size-4" />
                            </button>
                        </Tooltip>
                        <Tooltip tipText="上传excel数据">
                            <button
                                className="btn btn-circle bg-white/10 hover:bg-white/30"
                                onClick={handleImportSheet}>
                                <FileUp className="size-4" />
                            </button>
                        </Tooltip>

                        <Dropdown
                            columns={table.getAllLeafColumns().map((column) => {
                                return column.id;
                            })}
                            onClickHandler={(columnId) =>
                                table.getColumn(columnId)?.toggleVisibility()
                            }
                            isVisible={(columnId) =>
                                table.getColumn(columnId)?.getIsVisible() as boolean
                            }
                        />
                    </div>
                </div>
            </div>
        </caption>
    );
}

export default TableCaption;
