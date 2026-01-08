import Sidebar from "@/components/Sidebar";
import React from "react";

function Layout({ children }: Readonly<{ children: React.ReactNode }>) {
	return (
		<div className="min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black overflow-hidden">
			<div className="h-screen flex overflow-hidden">
				<Sidebar />
				{/* Main Content Area */}
				<div className="flex-1 p-8">{children}</div>
			</div>
		</div>
	);
}

export default Layout;
