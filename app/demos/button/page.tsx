import React from "react";

const ButtonPage = () => {
    return (
        <div className="flex h-screen items-center justify-center space-x-2">
            <button className="rounded bg-teal-500 px-4 py-2 text-white transition-colors duration-300 ease-in-out hover:bg-teal-600">
                Click Me
            </button>

            <button className="rounded border-2 border-teal-600 px-4 py-2 text-zinc-700 transition-colors duration-300 ease-in-out hover:bg-teal-600 hover:text-white">
                Click Me
            </button>

            {/* input search */}
            <div className="group relative w-2/10">
                <input
                    type="text"
                    placeholder="Search..."
                    className="w-full rounded border-2 border-gray-300 py-2 pr-4 pl-10 transition-all duration-300 ease-in-out focus:border-transparent focus:ring-2 focus:ring-teal-500 focus:outline-none"
                />
                <button className="absolute inset-y-0 right-0 flex cursor-pointer items-center rounded bg-teal-500 px-6 text-white transition-colors duration-300 ease-in-out hover:bg-teal-600">
                    Go
                </button>
                <div className="foucus-within:hidden pointer-events-none absolute top-1/2 left-3 -translate-y-1/2">
                    {/* group-focus-within 选择当前元素或者任意子元素 */}
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5 text-gray-400 group-focus-within:text-teal-500"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                        />
                    </svg>
                </div>
            </div>
        </div>
    );
};

export default ButtonPage;
