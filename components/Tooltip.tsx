import React, { ReactNode } from "react";

function Tooltip({ tipText, children }: { tipText: string; children: ReactNode }) {
    return (
        <div className="group relative inline-block">
            <div className="text-foreground invisible absolute top-full p-2 whitespace-nowrap group-hover:visible">
                {tipText}
            </div>
            {children}
        </div>
    );
}

export default Tooltip;
