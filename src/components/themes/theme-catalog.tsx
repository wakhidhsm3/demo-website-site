"use client";

import { useState, useRef } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Badge } from "../ui/badge";
import { Search, Filter, ArrowRight, Eye, Heart, Sparkles, X, Users, Check, Clock, ShieldCheck, MapPin } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import themeFloral from "../../../public/theme_floral.png";
import themeMinimalist from "../../../public/theme_minimalist.png";
import themeGold from "../../../public/theme_gold_luxury.png";
import themeRustic from "../../../public/theme_rustic.png";

// Mock Data
// Mock Data
type Category = "All" | "Basic" | "Premium" | "Exclusive";

interface Theme {
    id: string;
    name: string;
    category: Category;
    image: any; // StaticImageData
    price: string;
    isNew?: boolean;
    usageCount: string;
    description: string;
}

const customThemes: Theme[] = [
    {
        id: "1",
        name: "Floral Elegance",
        category: "Basic",
        image: themeFloral,
        price: "Free",
        usageCount: "1.2k",
        description: "Desain bunga yang elegan dan natural, cocok untuk pernikahan tema garden atau outdoor yang romantis.",
    },
    {
        id: "2",
        name: "Modern Minimalist",
        category: "Premium",
        image: themeMinimalist,
        price: "Rp 149.000",
        isNew: true,
        usageCount: "850",
        description: "Tampilan bersih dan modern dengan fokus pada tipografi yang indah. Cocok untuk pasangan yang menyukai kesederhanaan.",
    },
    {
        id: "3",
        name: "Golden Luxury",
        category: "Exclusive",
        image: themeGold,
        price: "Rp 299.000",
        usageCount: "2.1k",
        description: "Sentuhan emas yang mewah dan font serif klasik untuk memberikan kesan eksklusif dan megah pada undangan Anda.",
    },
    {
        id: "4",
        name: "Rustic Charm",
        category: "Premium",
        image: themeRustic,
        price: "Rp 149.000",
        usageCount: "1.5k",
        description: "Paduan elemen kayu dan tekstur kertas craft yang memberikan suasana hangat dan intim pada undangan pernikahan.",
    },
    {
        id: "5",
        name: "Classic Romance",
        category: "Basic",
        image: themeFloral,
        price: "Free",
        usageCount: "920",
        description: "Gaya klasik yang abadi dengan ilustrasi bunga yang lembut, melambangkan kasih sayang yang tulus.",
    },
    {
        id: "6",
        name: "Bohemian Dream",
        category: "Premium",
        image: themeRustic,
        price: "Rp 149.000",
        isNew: true,
        usageCount: "640",
        description: "Gaya boho yang unik dengan warna-warna earthy dan motif etnik yang artistik untuk pasangan yang berjiwa bebas.",
    },
    {
        id: "7",
        name: "Dark Elegant",
        category: "Exclusive",
        image: themeGold,
        price: "Rp 299.000",
        usageCount: "1.1k",
        description: "Background gelap dengan aksen foil emas/perak yang memberikan kesan misterius namun sangat berkelas.",
    },
    {
        id: "8",
        name: "Ocean Breeze",
        category: "Premium",
        image: themeMinimalist,
        price: "Rp 149.000",
        usageCount: "730",
        description: "Nuansa biru laut yang menenangkan dengan elemen kerang atau ombak yang cantik untuk pernikahan pesisir.",
    },
];

const categories: Category[] = ["All", "Basic", "Premium", "Exclusive"];

export function ThemeCatalog() {
    const [activeCategory, setActiveCategory] = useState<Category>("All");
    const [searchQuery, setSearchQuery] = useState("");
    const [currentPage, setCurrentPage] = useState(1);
    const [selectedTheme, setSelectedTheme] = useState<Theme | null>(null);
    const itemsPerPage = 6;
    const containerRef = useRef<HTMLDivElement>(null);
    const headerRef = useRef<HTMLDivElement>(null);
    const filterRef = useRef<HTMLDivElement>(null);
    const gridRef = useRef<HTMLDivElement>(null);

    // Filter Logic
    const filteredThemes = customThemes.filter((theme) => {
        const matchesCategory = activeCategory === "All" || theme.category === activeCategory;
        const matchesSearch = theme.name.toLowerCase().includes(searchQuery.toLowerCase());
        return matchesCategory && matchesSearch;
    });

    // Pagination Logic
    const totalPages = Math.ceil(filteredThemes.length / itemsPerPage);
    const startIndex = (currentPage - 1) * itemsPerPage;
    const paginatedThemes = filteredThemes.slice(startIndex, startIndex + itemsPerPage);

    const handlePageChange = (page: number) => {
        setCurrentPage(page);
        // Scroll to top of page - same behavior as navigating between pages
        window.scrollTo(0, 0);
    };

    return (
        <section ref={containerRef} className="py-12 md:py-20 bg-white min-h-screen">
            <div className="container px-4 md:px-6 mx-auto">

                {/* Header Section */}
                <div ref={headerRef} className="text-center max-w-2xl mx-auto mb-16 space-y-4">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-pink-50 text-pink-600 text-sm font-medium">
                        <Sparkles className="w-3 h-3" />
                        <span>Koleksi Terbaru 2026</span>
                    </div>
                    <h2 className="text-3xl md:text-5xl font-bold text-gray-900 tracking-tight">
                        Temukan Tema Impianmu
                    </h2>
                    <p className="text-gray-500 text-lg font-light leading-relaxed">
                        Eksplorasi ratusan desain undangan premium yang siap pakai. <br className="hidden md:block" /> Sesuaikan dengan gaya pernikahanmu.
                    </p>
                </div>

                {/* Filter & Search */}
                <div ref={filterRef} className="flex flex-col lg:flex-row justify-between items-center gap-6 mb-12 sticky top-24 z-40 bg-white/80 backdrop-blur-xl py-4 px-1 rounded-2xl border-b border-gray-100/50 transition-all">
                    {/* Categories: Minimalist Underline Style */}
                    <div className="flex flex-wrap gap-1 justify-center lg:justify-start">
                        {categories.map((category) => (
                            <button
                                key={category}
                                onClick={() => { setActiveCategory(category); setCurrentPage(1); }}
                                className={`group relative px-4 py-2 text-sm font-medium transition-colors ${activeCategory === category
                                    ? "text-pink-600"
                                    : "text-gray-500 hover:text-pink-600"
                                    }`}
                            >
                                {category}
                                {activeCategory === category && (
                                    <motion.div
                                        layoutId="underline"
                                        className="absolute left-0 right-0 bottom-0 h-0.5 bg-pink-600"
                                    />
                                )}
                            </button>
                        ))}
                    </div>

                    {/* Search: Glassmorphism Input */}
                    <div className="relative w-full lg:w-80 group">
                        <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 group-hover:text-pink-500 transition-colors" />
                        <input
                            type="text"
                            placeholder="Cari tema (e.g., Floral, Rustic)..."
                            value={searchQuery}
                            onChange={(e) => { setSearchQuery(e.target.value); setCurrentPage(1); }}
                            className="w-full pl-10 pr-10 py-2.5 rounded-xl border border-gray-200 bg-gray-50/50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-pink-500/20 focus:border-pink-500 transition-all text-sm"
                        />
                        {searchQuery && (
                            <button
                                onClick={() => { setSearchQuery(""); setCurrentPage(1); }}
                                className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 rounded-full bg-gray-200 hover:bg-pink-500 text-gray-600 hover:text-white transition-all flex items-center justify-center"
                                aria-label="Clear search"
                            >
                                <X className="w-3 h-3" />
                            </button>
                        )}
                    </div>
                </div>

                {paginatedThemes.length > 0 ? (
                    <motion.div
                        ref={gridRef}
                        layout
                        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 p-1"
                    >
                        <AnimatePresence mode="popLayout">
                            {paginatedThemes.map((theme) => (
                                <motion.div
                                    key={theme.id}
                                    layout
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, scale: 0.95 }}
                                    transition={{ duration: 0.4, ease: "easeOut" }}
                                >
                                    <Card
                                        onClick={() => setSelectedTheme(theme)}
                                        className="group overflow-hidden border-0 shadow-lg hover:shadow-2xl transition-all duration-500 bg-white h-full flex flex-col rounded-2xl ring-1 ring-gray-100 cursor-pointer"
                                    >
                                        {/* Image Area */}
                                        <div className="relative aspect-[4/5] bg-gray-50 overflow-hidden">
                                            <Image
                                                src={theme.image}
                                                alt={theme.name}
                                                fill
                                                className="object-cover transition-transform duration-700 group-hover:scale-110"
                                                loading="lazy"

                                            />

                                            {/* Overlay Gradient */}
                                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                                            {/* Badges */}
                                            <div className="absolute top-4 left-4 flex gap-2">
                                                <Badge variant="secondary" className="bg-white/90 backdrop-blur text-gray-900 shadow-sm font-semibold border-none">
                                                    {theme.category}
                                                </Badge>
                                                {theme.isNew && (
                                                    <Badge className="bg-pink-600 text-white border-none shadow-sm flex items-center gap-1">
                                                        <Sparkles className="w-3 h-3" /> New
                                                    </Badge>
                                                )}
                                            </div>

                                            {/* Price Tag removed from here */}
                                        </div>

                                        {/* Content Area */}
                                        <div className="p-5 flex justify-between items-center bg-white border-t border-gray-50/50">
                                            <div>
                                                <h3 className="text-lg font-bold text-gray-900 group-hover:text-pink-600 transition-colors">
                                                    {theme.name}
                                                </h3>
                                                <div className="flex items-center gap-1.5 mt-1 text-gray-500">
                                                    <Users className="w-3.5 h-3.5" />
                                                    <span className="text-xs font-medium">{theme.usageCount} Digunakan</span>
                                                </div>
                                            </div>
                                            <div className="flex flex-col items-end">
                                                <span className={`text-base font-bold px-3 py-1 rounded-full ${theme.price === "Free"
                                                    ? "bg-green-100 text-green-700"
                                                    : "bg-gray-100 text-gray-900"
                                                    }`}>
                                                    {theme.price === "Free" ? "Gratis" : theme.price}
                                                </span>
                                            </div>
                                        </div>
                                    </Card>
                                </motion.div>
                            ))}
                        </AnimatePresence>
                    </motion.div>
                ) : (
                    <div className="text-center py-20 bg-gray-50 rounded-3xl border border-dashed border-gray-200">
                        <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-white shadow-sm mb-4">
                            <Search className="w-8 h-8 text-gray-300" />
                        </div>
                        <h3 className="text-xl font-bold text-gray-900">Tidak ada tema ditemukan</h3>
                        <p className="text-gray-500 mt-2">Coba kata kunci lain atau reset filter.</p>
                        <Button
                            variant="outline"
                            className="mt-6 border-gray-200 hover:bg-white hover:border-gray-300"
                            onClick={() => { setActiveCategory("All"); setSearchQuery(""); }}
                        >
                            Reset Pencarian
                        </Button>
                    </div>
                )}

                {/* Minimalist Pagination */}
                {totalPages > 1 && (
                    <div className="flex justify-center items-center gap-3 mt-20">
                        <Button
                            variant="outline"
                            onClick={() => handlePageChange(Math.max(1, currentPage - 1))}
                            disabled={currentPage === 1}
                            className="rounded-full w-12 h-12 p-0 border-gray-200 hover:bg-gray-50 hover:text-gray-900 disabled:opacity-30 transition-all"
                        >
                            &larr;
                        </Button>

                        <div className="flex items-center gap-2 px-4 py-2 bg-gray-50 rounded-full">
                            <span className="text-sm font-medium text-gray-900">Halaman {currentPage}</span>
                            <span className="text-sm text-gray-400">/</span>
                            <span className="text-sm text-gray-500">{totalPages}</span>
                        </div>

                        <Button
                            variant="outline"
                            onClick={() => handlePageChange(Math.min(totalPages, currentPage + 1))}
                            disabled={currentPage === totalPages}
                            className="rounded-full w-12 h-12 p-0 border-gray-200 hover:bg-gray-50 hover:text-gray-900 disabled:opacity-30 transition-all"
                        >
                            &rarr;
                        </Button>
                    </div>
                )}

                {/* Theme Detail Modal */}
                <AnimatePresence>
                    {selectedTheme && (
                        <>
                            {/* Backdrop: Ultra-minimal blur */}
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                onClick={() => setSelectedTheme(null)}
                                className="fixed inset-0 bg-gray-900/40 backdrop-blur-[2px] z-[100] transition-all cursor-pointer"
                            />

                            {/* Modal: Modern & Elegant Panel */}
                            <motion.div
                                initial={{ opacity: 0, scale: 0.98, y: 10 }}
                                animate={{ opacity: 1, scale: 1, y: 0 }}
                                exit={{ opacity: 0, scale: 0.98, y: 10 }}
                                transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                                className="fixed left-4 right-4 top-1/2 -translate-y-1/2 max-h-[90vh] md:inset-x-auto md:left-1/2 md:-translate-x-1/2 md:w-full md:max-w-5xl md:h-[600px] bg-white rounded-3xl md:rounded-[2.5rem] shadow-[0_32px_64px_-16px_rgba(0,0,0,0.1)] z-[101] overflow-y-auto md:overflow-hidden flex flex-col md:flex-row border border-gray-100"
                            >
                                {/* Precise Close Button */}
                                <button
                                    onClick={() => setSelectedTheme(null)}
                                    className="absolute top-4 right-4 md:top-6 md:right-6 z-[102] w-10 h-10 md:w-12 md:h-12 rounded-full bg-white/80 backdrop-blur-md text-gray-400 hover:text-gray-900 flex items-center justify-center transition-all hover:scale-110 active:scale-95 border border-gray-100"
                                >
                                    <X className="w-4 h-4 md:w-5 md:h-5" />
                                </button>

                                {/* Visual Side: Modern Aspect */}
                                <div className="w-full md:w-[45%] relative h-[250px] md:h-full bg-gray-50 shrink-0">
                                    <Image
                                        src={selectedTheme.image}
                                        alt={selectedTheme.name}
                                        fill
                                        className="object-cover"
                                        priority
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-gray-900/20 via-transparent to-transparent" />

                                    {/* Category Floating Badge */}
                                    <div className="absolute bottom-4 left-4 md:bottom-8 md:left-8">
                                        <Badge className="bg-white/95 backdrop-blur-md text-gray-900 border-none px-3 py-1.5 md:px-4 md:py-2 rounded-full font-bold shadow-xl text-xs md:text-sm">
                                            {selectedTheme.category}
                                        </Badge>
                                    </div>
                                </div>

                                {/* Content Side: Minimalist & Breathable */}
                                <div className="flex-1 px-6 pt-6 pb-6 md:p-14 flex flex-col bg-white">
                                    <div className="space-y-6 md:space-y-10">
                                        {/* Header Info */}
                                        <div className="space-y-3 md:space-y-4">
                                            <div className="flex items-center gap-4 text-pink-600 font-bold tracking-widest text-[10px] uppercase">
                                                <div className="w-6 md:w-8 h-[1px] bg-pink-600" />
                                                Pratinjau Tema
                                            </div>
                                            <h2 className="text-2xl md:text-5xl font-black text-gray-900 tracking-tight leading-none">
                                                {selectedTheme.name}
                                            </h2>
                                            <div className="flex items-center gap-6 pt-1 md:pt-2">
                                                <div className="flex items-center gap-2 text-gray-400 text-xs md:text-sm font-medium">
                                                    <Users className="w-4 h-4 text-pink-500" />
                                                    <span>{selectedTheme.usageCount} Pengguna</span>
                                                </div>
                                            </div>
                                        </div>

                                        {/* Description */}
                                        <p className="text-gray-500 text-sm md:text-lg font-light leading-relaxed max-w-lg">
                                            {selectedTheme.description}
                                        </p>

                                        {/* Feature Grid */}
                                        <div className="grid grid-cols-2 gap-y-3 md:gap-y-5 gap-x-4 md:gap-x-8">
                                            {[
                                                { icon: <Clock className="w-4 h-4" />, text: "Aktif Selamanya" },
                                                { icon: <MapPin className="w-4 h-4" />, text: "Navigasi Maps" },
                                                { icon: <Heart className="w-4 h-4" />, text: "RSVP & Ucapan" },
                                                { icon: <Sparkles className="w-4 h-4" />, text: "Custom Musik" },
                                            ].map((feature, i) => (
                                                <motion.div
                                                    key={i}
                                                    initial={{ opacity: 0, x: -10 }}
                                                    animate={{ opacity: 1, x: 0 }}
                                                    transition={{ delay: 0.1 + (i * 0.05) }}
                                                    className="flex items-center gap-2 md:gap-3 text-gray-600 group"
                                                >
                                                    <div className="w-7 h-7 md:w-8 md:h-8 rounded-xl bg-pink-50/50 flex items-center justify-center text-pink-600 group-hover:bg-pink-600 group-hover:text-white transition-all duration-300">
                                                        {feature.icon}
                                                    </div>
                                                    <span className="text-xs md:text-sm font-medium">{feature.text}</span>
                                                </motion.div>
                                            ))}
                                        </div>
                                    </div>

                                    {/* Action Footer: Minimalist & Brand Pink */}
                                    <div className="mt-6 md:mt-10 flex items-center justify-between pt-5 md:pt-6 border-t border-gray-200">
                                        <div className="flex flex-col">
                                            <span className="text-[10px] text-gray-400 font-bold uppercase tracking-[0.2em] mb-1">Harga</span>
                                            <span className="text-xl md:text-2xl font-black text-gray-900 tracking-tight">
                                                {selectedTheme.price === "Free" ? "Gratis" : selectedTheme.price}
                                            </span>
                                        </div>
                                        <Button className="h-12 md:h-14 px-6 md:px-8 rounded-full bg-pink-600 hover:bg-pink-700 text-white text-sm md:text-base font-bold shadow-lg shadow-pink-200 transition-all duration-300 hover:scale-[1.02] active:scale-95 group">
                                            Pilih Tema Ini
                                            <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                                        </Button>
                                    </div>
                                </div>
                            </motion.div>
                        </>
                    )}
                </AnimatePresence>

            </div>
        </section>
    );
}
