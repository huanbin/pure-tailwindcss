import Sidebar from "@/components/Sidebar";
import React from "react";

function Layout({ children }: Readonly<{ children: React.ReactNode }>) {
    return (
        <div className="bg-background min-h-screen items-center justify-center overflow-hidden">
            <div className="flex h-screen overflow-hidden">
                <Sidebar />
                {/* Main Content Area */}
                {/* overflow: auto 内容超出边界时添加滚动条 */}
                <div className="min-h-screen flex-1 overflow-auto px-10">{children}</div>
                {/* <div className="min-h-screen flex-1 p-8">{children}</div> */}
            </div>
        </div>
    );
}

export default Layout;
