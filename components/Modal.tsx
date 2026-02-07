import clsx from 'clsx';
import { X } from 'lucide-react';
import React from 'react'

function Modal({ isOpen, onClose, onSaveData, children }: { isOpen: boolean; onClose: () => void; onSaveData: () => void; children: React.ReactNode }) {
    if (!isOpen) return null;
    return (
        <div className={clsx("fixed inset-0  z-1000 flex items-center justify-center bg-gray-100/50 backdrop-brightness-50 transition-opacity duration-300",
            isOpen ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0"
        )}>

            <button className="absolute top-4 right-4 btn btn-circle  bg-white/10 hover:bg-white/30" onClick={onClose}>
                <X className="w-6 h-6 text-foreground" />
            </button>

            <div className="rounded-md p-6 shadow-lg bg-background w-full h-[calc(100vh-6rem)] m-10 overflow-auto">
                {children}
            </div>

            <button className="absolute top-16 right-16 btn btn-primary" onClick={onSaveData}>
                保存导入数据
            </button>

        </div>
    )
}

export default Modal