"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";

function DemosPage() {
	const menus = [
		{ name: "Animals Page Demo", href: "/demos/animals" },
		{ name: "Button Page Demo", href: "/demos/button" },
	];

	return (
		<div className="flex h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
			<div className="p-8">
				<h1 className="text-3xl font-bold mb-4">Demos List</h1>
				<ul className="list-none space-y-2">
					{menus.map((menu) => (
						<li
							key={menu.href}
							className="group border border-blue-400  rounded-md">
							<Link key={menu.href} href={menu.href}>
								<div className="flex items-center justify-between px-4 py-2 ">
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
