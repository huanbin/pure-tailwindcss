"use client";

import { use, useState } from "react";
import {
    BarChart,
    LucidePersonStanding as People,
    Settings,
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
            className={`bg-background shadow-foreground sticky top-0 flex flex-col shadow transition-all duration-300 ease-in-out ${collapsed ? "w-16" : "w-64"} `}
        >
            {/* Header */}
            <div className="flex items-center justify-between px-4 py-4">
                {!collapsed && (
                    <span
                        className={clsx(
                            "text-foreground animate-slide-in-left text-lg font-semibold uppercase",
                        )}
                    >
                        Inventory
                    </span>
                )}
                <button
                    onClick={() => setCollapsed(!collapsed)}
                    className="hover:bg-hover-background rounded-lg p-1.5"
                >
                    <ChevronRight
                        className={clsx(
                            "text-foreground h-4 w-4 transition-transform duration-300 ease-in-out",
                            collapsed ? "rotate-180" : "",
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
                                    "group hover:bg-hover-background flex items-center gap-3 rounded-lg px-3 py-2 text-sm font-medium",
                                    item.url == pathname && "bg-brand text-foreground",
                                )}
                            >
                                <item.icon className="text-foreground animate-scale-in h-4 w-4 shrink-0" />

                                {/* Label */}
                                <span
                                    className={clsx(
                                        "text-foreground whitespace-nowrap transition-all duration-300 ease-in-out group-hover:font-bold",
                                        collapsed
                                            ? "pointer-events-none translate-x-2 opacity-0"
                                            : "translate-x-0 opacity-100",
                                    )}
                                >
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
