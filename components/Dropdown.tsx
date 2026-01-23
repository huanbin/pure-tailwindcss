"use client";
import { useState } from "react";
import { CheckIcon, ChevronUp } from "lucide-react";
import clsx from "clsx";

//多选下拉框
export default function Dropdown({
    columns,
    onClickHandler,
    isVisible,
}: {
    columns: string[];
    onClickHandler: (columnId: string) => void;
    isVisible: (columnId: string) => boolean;
}) {
    const [isOpen, setIsOpen] = useState(false);
    const [selectedLanguage, setSelectedLanguage] = useState(new Set(columns));

    // const languages = ['DSA Self Placed', 'JavaScript',
    //     'Python', 'Java', 'C++', 'Ruby',
    //     'Go', 'TypeScript'];

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };

    const handleSelect = (columnId: string) => {
        if (selectedLanguage.has(columnId)) {
            selectedLanguage.delete(columnId);
        } else {
            selectedLanguage.add(columnId);
        }
        setSelectedLanguage(selectedLanguage);
        setIsOpen(false);

        onClickHandler(columnId);
    };

    return (
        <div className="relative inline-block h-full text-center">
            {/* Dropdown button */}
            <button
                type="button"
                className="hover:text-foreground inline-flex h-full w-full items-center justify-center rounded-md border border-gray-300 bg-white/10 px-4 text-sm font-medium text-black shadow-sm hover:bg-white/30"
                onClick={toggleDropdown}>
                {/* {selectedLanguage} */}
                Hide Columns
                <ChevronUp
                    className={clsx(
                        "ml-2 size-4 rotate-180 transition-transform duration-300 ease-in-out",
                        isOpen ? "rotate-360" : "",
                    )}
                />
            </button>

            {/* Dropdown menu */}
            {isOpen && (
                <div className="animate-slide-in-bottom divide-invert bg-invert absolute top-full right-0 left-0 divide-y overflow-hidden rounded-md shadow">
                    {columns.map((columnId, index) => (
                        <div
                            key={index}
                            className="flex items-center justify-between truncate px-4 py-4 text-sm text-black hover:bg-gray-100/10"
                            onClick={() => handleSelect(columnId)}>
                            {columnId}
                            <CheckIcon
                                className={clsx(
                                    "size-4 opacity-0",
                                    isVisible(columnId) && "opacity-100",
                                )}
                            />
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}
