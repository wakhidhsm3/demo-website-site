"use client";

import { motion, AnimatePresence } from "motion/react";
import { X, Copy, Check } from "lucide-react";
import { useState } from "react";

interface ShareModalProps {
    isOpen: boolean;
    onClose: () => void;
    url: string;
    title: string;
}

export function ShareModal({ isOpen, onClose, url, title }: ShareModalProps) {
    const [copied, setCopied] = useState(false);

    const handleCopy = async () => {
        await navigator.clipboard.writeText(url);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    const shareOptions = [
        {
            name: "WhatsApp",
            icon: <div className="w-5 h-5 bg-green-500 rounded-full flex items-center justify-center text-white"><span className="text-[10px]">WA</span></div>,
            href: `https://wa.me/?text=${encodeURIComponent(title + " " + url)}`,
            color: "hover:bg-green-50"
        },
        {
            name: "Twitter",
            icon: <div className="w-5 h-5 bg-black rounded-full flex items-center justify-center text-white"><span className="text-[10px]">X</span></div>,
            href: `https://twitter.com/intent/tweet?text=${encodeURIComponent(title)}&url=${encodeURIComponent(url)}`,
            color: "hover:bg-gray-50"
        },
        {
            name: "Facebook",
            icon: <div className="w-5 h-5 bg-blue-600 rounded-full flex items-center justify-center text-white"><span className="text-[10px]">FB</span></div>,
            href: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`,
            color: "hover:bg-blue-50"
        }
    ];

    return (
        <AnimatePresence>
            {isOpen && (
                <>
                    {/* Backdrop */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={onClose}
                        className="fixed inset-0 bg-black/20 backdrop-blur-md z-[100] cursor-pointer"
                    />

                    {/* Modal Container */}
                    <div className="fixed inset-0 flex items-center justify-center z-[101] pointer-events-none p-6">
                        <motion.div
                            initial={{ scale: 0.95, opacity: 0, y: 20 }}
                            animate={{ scale: 1, opacity: 1, y: 0 }}
                            exit={{ scale: 0.95, opacity: 0, y: 20 }}
                            transition={{ type: "spring", damping: 25, stiffness: 300 }}
                            className="w-full max-w-sm bg-white rounded-3xl shadow-2xl shadow-pink-200/20 pointer-events-auto overflow-hidden border border-gray-100"
                        >
                            {/* Header */}
                            <div className="px-8 pt-8 pb-4 flex items-center justify-between">
                                <h3 className="text-xl font-bold text-gray-900 tracking-tight">Bagikan Artikel</h3>
                                <button
                                    onClick={onClose}
                                    className="w-8 h-8 rounded-full bg-gray-50 flex items-center justify-center text-gray-400 hover:text-gray-900 hover:bg-gray-100 transition-all"
                                >
                                    <X className="w-4 h-4" />
                                </button>
                            </div>

                            {/* Social Icons */}
                            <div className="px-8 py-6 flex justify-between gap-4">
                                {shareOptions.map((option) => (
                                    <a
                                        key={option.name}
                                        href={option.href}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className={`flex-1 flex flex-col items-center gap-3 p-4 rounded-2xl border border-gray-50 transition-all group ${option.color}`}
                                    >
                                        <div className="transition-transform duration-300 group-hover:scale-110">
                                            {option.icon}
                                        </div>
                                        <span className="text-[11px] font-bold text-gray-500 uppercase tracking-widest leading-none">
                                            {option.name}
                                        </span>
                                    </a>
                                ))}
                            </div>

                            {/* Copy Link Section */}
                            <div className="px-8 pb-10">
                                <p className="text-[10px] font-bold text-gray-400 uppercase tracking-[0.2em] mb-3">Copy Link</p>
                                <div className="flex items-center gap-2 p-2 bg-gray-50 rounded-2xl border border-gray-100 group focus-within:border-pink-200 focus-within:bg-white transition-all">
                                    <div className="flex-grow px-3 overflow-hidden">
                                        <p className="text-xs text-gray-500 truncate font-medium">
                                            {url}
                                        </p>
                                    </div>
                                    <button
                                        onClick={handleCopy}
                                        className={`shrink-0 w-10 h-10 rounded-xl flex items-center justify-center transition-all ${copied
                                            ? "bg-green-500 text-white shadow-lg shadow-green-200"
                                            : "bg-white text-gray-400 hover:text-pink-600 shadow-sm border border-gray-100"
                                            }`}
                                    >
                                        {copied ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
                                    </button>
                                </div>
                            </div>


                        </motion.div>
                    </div>
                </>
            )}
        </AnimatePresence>
    );
}
