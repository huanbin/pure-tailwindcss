"use client";
import clsx from "clsx";
import { ArrowRight } from "lucide-react";
import React from "react";

function AnimalsPage() {
    const [opened, setOpened] = React.useState(false);

    return (
        <div className="flex flex-col items-center justify-center space-y-5">
            <h1 className="bg-linear-to-r from-pink-300 text-2xl font-bold text-white text-shadow-md">
                Animals Page
            </h1>

            <ArrowRight
                className={clsx(
                    "h-4 w-4 text-blue-400 transition-transform duration-300 ease-in-out hover:bg-zinc-100",
                    opened ? "rotate-180" : "",
                )}
            />
            <button
                onClick={(e) => {
                    setOpened(!opened);
                }}
                className="rounded bg-blue-500 px-4 py-2 text-white hover:bg-blue-600"
            >
                click
            </button>
        </div>
    );
}

export default AnimalsPage;
