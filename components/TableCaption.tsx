import { Rows2Icon, Rows3Icon, Rows4Icon, SearchIcon } from 'lucide-react'

function TableCaption({ densityIndex, densityHandler }: { densityIndex: number, densityHandler: () => void }) {
    return (
        <caption className="sticky top-0 border bg-invert p-4">
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
                            className="bg-foreground/10 hover:bg-foreground/30 absolute inset-y-0 right-0 flex items-center p-4"
                        >
                            <SearchIcon className="h-4 w-4" />
                        </button>
                    </form>

                    <div>
                        <button
                            className="btn btn-circle bg-white/10 hover:bg-white/30"
                            onClick={densityHandler}
                        >
                            {densityIndex == 0 && (
                                <Rows4Icon className="text-foreground h-4 w-4" />
                            )}
                            {densityIndex == 1 && (
                                <Rows3Icon className="text-foreground h-4 w-4" />
                            )}
                            {densityIndex == 2 && (
                                <Rows2Icon className="text-foreground h-4 w-4" />
                            )}
                        </button>
                    </div>
                </div>
            </div>
        </caption>
    )
}

export default TableCaption