"use client";

import { use, useState } from "react";
import {
	Home,
	BarChart,
	LucidePersonStanding as People,
	Settings,
	ChevronLeft,
	ChevronRight,
	Outdent as Outbound,
	Inbox,
} from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import clsx from "clsx";

const navItems = [
	// { name: "Dashboard", icon: Home,url:"/" },
	{ name: "原材料库存", icon: BarChart, url: "/" },
	{ name: "原材料入库单", icon: Inbox, url: "/inbound" },
	{ name: "出库单", icon: Outbound, url: "/outbound" },
	{ name: "供应商", icon: People, url: "/vendor" },
	{ name: "设置", icon: Settings, url: "/settings" },
];

export default function Sidebar() {
	const pathname = usePathname();
	const [collapsed, setCollapsed] = useState(true);

	return (
		<aside
			className={`
        sticky top-0 flex  flex-col
        bg-gray-900 text-gray-200
        transition-all duration-300 ease-in-out
        ${collapsed ? "w-16" : "w-64"}
      `}>
			{/* Header */}
			<div className="flex items-center justify-between px-4 py-4">
				{!collapsed && (
					<span className="text-lg font-semibold text-white uppercase">
						Inventory
					</span>
				)}
				<button
					onClick={() => setCollapsed(!collapsed)}
					className="rounded-lg p-1.5 hover:bg-gray-800">
					<ChevronRight
						className={clsx(
							"h-4 w-4 transition-transform ease-in-out duration-300",
							collapsed ? "rotate-180" : ""
						)}
					/>
				</button>
			</div>

			{/* Navigation */}
			<nav className="flex-1 px-2">
				<ul className="space-y-1">
					{navItems.map((item) => (
						<li key={item.name}>
							<Link
								href={item.url}
								className={clsx(
									"group flex items-center gap-3 rounded-lg px-3 py-2 text-sm font-medium transition hover:bg-gray-800 hover:text-white",
									item.url == pathname &&
										"bg-gray-800 text-white"
								)}>
								<item.icon className="h-4 w-4 shrink-0 text-gray-400 group-hover:text-white" />

								{/* Label */}
								<span
									className={clsx(
										"whitespace-nowrap transition-all duration-300 ease-in-out",
										collapsed
											? "opacity-0 translate-x-2 pointer-events-none"
											: "opacity-100 translate-x-0"
									)}>
									{item.name}
								</span>
							</Link>
						</li>
					))}
				</ul>
			</nav>
		</aside>
	);
}
