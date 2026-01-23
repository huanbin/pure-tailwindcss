"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";

function DemosPage() {
    const menus = [
        { name: "Animals Page Demo", href: "/demos/animals" },
        { name: "Button Page Demo", href: "/demos/button" },
        { name: "Custom theme Page Demo", href: "/demos/custom" },
        { name: "Basic Table Page Demo", href: "/demos/table/basic" },
        { name: "Resize Table Page Demo", href: "/demos/table/resize" },
        { name: "Pin Table Page Demo", href: "/demos/table/pin" },
        { name: "Hide  Table Column Page Demo", href: "/demos/table/super/visible" },
    ];

    return (
        <div className="bg-background flex h-screen items-center justify-center font-sans">
            <div className="p-8">
                <h1 className="mb-4 text-3xl font-bold">Demos List</h1>
                <ul className="list-none space-y-2">
                    {menus.map((menu) => (
                        <li key={menu.href} className="group rounded-md border border-blue-400">
                            <Link key={menu.href} href={menu.href}>
                                <div className="flex items-center justify-between px-4 py-2">
                                    <span>{menu.name}</span>
                                    <ArrowRight className="h-4 w-4 text-blue-400 transition-transform duration-300 ease-in-out group-hover:translate-x-2" />
                                </div>
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}

export default DemosPage;
