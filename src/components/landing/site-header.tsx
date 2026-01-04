"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";
import { motion, useScroll, useMotionValueEvent } from "motion/react";
import { useState, useEffect } from "react";

export function SiteHeader() {
    const pathname = usePathname();
    const isHomePage = pathname === "/";
    const { scrollY } = useScroll();
    const [scrolled, setScrolled] = useState(false);
    const [mounted, setMounted] = useState(false);
    useEffect(() => {
        setMounted(true);
    }, []);

    useMotionValueEvent(scrollY, "change", (latest) => {
        setScrolled(latest > 20);
    });

    // Navigation Logic:
    // Only Show Beranda (Home) and Tema (Themes)
    const navLinks = [
        { name: "Beranda", href: "/" },
        { name: "Tema", href: "/themes" },
        { name: "Paket", href: "/pricing" },
        { name: "Artikel", href: "/articles" },
    ];

    const isActive = (path: string) => {
        if (path === "/") return pathname === "/";
        if (path === "/articles") return pathname.startsWith("/articles");
        if (path === "/pricing") return pathname.startsWith("/pricing");
        return pathname === path;
    };

    return (
        <>
            {/* Top Header - Desktop & Mobile Logo */}
            <motion.header
                className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b ${scrolled
                    ? "bg-white/80 backdrop-blur-md border-gray-100 py-3 shadow-sm"
                    : "bg-white/50 backdrop-blur-sm border-transparent py-5"
                    }`}
            >
                <div className="container mx-auto px-6 md:px-12 flex items-center justify-between">
                    {/* Logo */}
                    <Link href="/" className="flex items-center gap-2 z-50 group">
                        <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-pink-500 to-purple-600 flex items-center justify-center text-white font-bold text-xl shadow-lg group-hover:shadow-pink-500/50 transition-all duration-300">
                            W
                        </div>
                        <span className="font-bold text-2xl text-gray-900 tracking-tight">
                            Wedify
                        </span>
                    </Link>

                    {/* Desktop Nav */}
                    <nav className="hidden md:flex items-center gap-8 bg-white/50 px-6 py-2 rounded-full border border-gray-100/50 backdrop-blur-sm shadow-sm transition-all duration-300 hover:shadow-md hover:border-gray-200/80">
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                href={link.href}
                                className={`text-sm font-medium transition-colors relative ${isActive(link.href)
                                    ? "text-pink-600"
                                    : "text-gray-500 hover:text-gray-900"
                                    }`}
                            >
                                {link.name}
                                {isActive(link.href) && mounted && (
                                    <motion.div
                                        layoutId="nav-underline"
                                        className="absolute -bottom-1 left-0 right-0 h-0.5 bg-pink-600"
                                        transition={{ type: "spring", stiffness: 300, damping: 30 }}
                                    />
                                )}
                            </Link>
                        ))}
                    </nav>

                    {/* Desktop Actions */}
                    <div className="hidden md:flex items-center gap-4">
                        <Link href="/dashboard">
                            <Button size="sm" className="rounded-full bg-pink-600 text-white hover:bg-pink-700 transition-colors px-6 shadow-lg shadow-pink-200">
                                Buat Undangan
                            </Button>
                        </Link>
                    </div>
                </div>
            </motion.header>

            {/* Mobile Bottom Navigation - Sticky Dock */}
            <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-[100] md:hidden">
                <nav className="flex items-center gap-1 bg-white/90 backdrop-blur-xl px-3 py-2.5 rounded-full border border-gray-200/50 shadow-2xl shadow-gray-300/30">
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            href={link.href}
                            className={`relative px-4 py-2 text-xs font-semibold transition-colors ${isActive(link.href)
                                ? "text-pink-600"
                                : "text-gray-400 hover:text-gray-900"
                                }`}
                        >
                            {link.name}
                            {isActive(link.href) && mounted && (
                                <motion.div
                                    layoutId="mobile-nav-underline"
                                    className="absolute bottom-0 left-2 right-2 h-[2px] bg-pink-600 rounded-full"
                                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                                />
                            )}
                        </Link>
                    ))}
                </nav>
            </div>
        </>
    );
}
