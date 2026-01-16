"use client";
import React from "react";
import { useTheme } from "next-themes";

const themes = [
    { name: "light", icon: "☀️" },
    { name: "dark", icon: "🌑" },
    { name: "midnight", icon: "🌌" },
];

function SwitchTheme() {
    const { theme, setTheme } = useTheme();

    const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setTheme(e.target.value);
    };

    return (
        <select
            id="theme-select"
            value={theme}
            onChange={handleChange}
            className="rounded border px-3 py-1"
        >
            {themes.map((theme) => (
                <option key={theme.name} value={theme.name} className="capitalize">
                    {theme.icon} {theme.name}
                </option>
            ))}
        </select>
    );
}

export default SwitchTheme;
