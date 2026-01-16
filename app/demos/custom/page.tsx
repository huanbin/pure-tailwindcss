import SwitchTheme from "@/components/SwitchTheme";
import React from "react";

function CustomTailwindcssPage() {
    return (
        <div className="bg-background space-y-3">
            <div className="flex flex-row justify-between">
                <div>自定义主题</div>
                <div>
                    <SwitchTheme />
                </div>
            </div>
            <h1 className="text-foreground bg-background">Custom TailwindCSS Page</h1>
            <div className="flex space-x-4 max-md:flex-col max-md:space-y-4 max-md:space-x-0">
                <div className="bg-brand px-6 py-3 text-white">1</div>
                <div className="bg-brand px-6 py-3 text-white">2</div>
                <div className="bg-brand px-6 py-3 text-white">3</div>
                <div className="bg-brand px-6 py-3 text-white">4</div>
                <div className="bg-brand px-6 py-3 text-white">5</div>
            </div>
            <div className="border-brand mt-4 grid grid-cols-[200px_1fr_2fr] gap-3 rounded border-4 p-4">
                <div className="bg-brand text-white">1</div>
                <div className="bg-brand text-white">2</div>
                <div className="bg-brand text-white">3</div>
            </div>

            <div className="flex flex-row justify-between bg-amber-300">
                <button className="btn btn-primary">Primary Button</button>
                <button className="btn btn-outline">Outline Button</button>
            </div>

            <div className="card mt-10 flex flex-col lg:w-240 lg:flex-row lg:space-x-2">
                <div className="overflow-hidden rounded-tl-lg rounded-tr-lg bg-amber-300 lg:w-1/3 lg:rounded-tl-lg lg:rounded-tr-none lg:rounded-bl-lg">
                    <img src={"/BingWallpaper.jpg"} className="max-h-60 w-full object-center" />
                </div>
                <div className="m-2 flex justify-between lg:w-2/3 lg:flex-col">
                    <div>
                        <h2>transition duration-300 ease-in-out</h2>
                        <p>
                            Let’s build a comprehensive design system for a SaaS application, step
                            by step！
                        </p>
                    </div>
                    <div className="space-x-3">
                        <button className="btn btn-primary">action1</button>
                        <button className="btn btn-outline">action2</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CustomTailwindcssPage;
