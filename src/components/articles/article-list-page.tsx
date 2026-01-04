"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "motion/react";
import { Calendar, User, Clock, ArrowRight, Search, ChevronLeft, ChevronRight, X, Sparkles } from "lucide-react";
import { useState, useMemo } from "react";
import { articles } from "@/lib/articles";
import { Button } from "@/components/ui/button";

const ITEMS_PER_PAGE = 6;

export function ArticleListPage() {
    const [searchQuery, setSearchQuery] = useState("");
    const [selectedCategory, setSelectedCategory] = useState("Semua");
    const [currentPage, setCurrentPage] = useState(1);

    // Get unique categories
    const categories = useMemo(() => {
        const cats = articles.map(a => a.category);
        return ["Semua", ...Array.from(new Set(cats))];
    }, []);

    // Filter logic
    const filteredArticles = useMemo(() => {
        return articles.filter(article => {
            const matchesSearch = article.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                article.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
            const matchesCategory = selectedCategory === "Semua" || article.category === selectedCategory;
            return matchesSearch && matchesCategory;
        });
    }, [searchQuery, selectedCategory]);

    // Pagination logic
    const totalPages = Math.ceil(filteredArticles.length / ITEMS_PER_PAGE);
    const startIdx = (currentPage - 1) * ITEMS_PER_PAGE;
    const paginatedArticles = filteredArticles.slice(startIdx, startIdx + ITEMS_PER_PAGE);

    const handlePageChange = (page: number) => {
        setCurrentPage(page);
        window.scrollTo(0, 0);
    };

    const handleCategoryChange = (cat: string) => {
        setSelectedCategory(cat);
        setCurrentPage(1);
    };

    const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearchQuery(e.target.value);
        setCurrentPage(1);
    };

    return (
        <div className="pt-28 md:pt-36 pb-20 bg-white min-h-screen">
            {/* Header Section */}
            <section className="container mx-auto px-6 md:px-12 mb-16">
                <div className="text-center max-w-2xl mx-auto space-y-4">
                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-pink-50 text-pink-600 text-sm font-medium"
                    >
                        <Sparkles className="w-3 h-3" />
                        <span>Inspirasi & Tips 2026</span>
                    </motion.div>
                    <motion.h1
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-3xl md:text-5xl font-bold text-gray-900 tracking-tight"
                    >
                        Artikel & <span className="text-pink-600">Inspirasi</span>
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="text-gray-500 text-lg font-light leading-relaxed"
                    >
                        Temukan tips, tren, dan cerita menarik seputar persiapan pernikahan Anda. <br className="hidden md:block" /> Sesuaikan dengan gaya pernikahanmu.
                    </motion.p>
                </div>
            </section>

            {/* Filter & Search Bar */}
            <section className="container mx-auto px-6 md:px-12 mb-12 sticky top-24 z-40 bg-white/80 backdrop-blur-xl py-4 px-4 rounded-2xl border-b border-gray-100/50 transition-all">
                <div className="flex flex-col lg:flex-row justify-between items-center gap-6">
                    {/* Categories: Minimalist Underline Style */}
                    <div className="flex flex-wrap gap-1 justify-center lg:justify-start">
                        {categories.map((category) => (
                            <button
                                key={category}
                                onClick={() => handleCategoryChange(category)}
                                className={`group relative px-4 py-2 text-sm font-medium transition-colors ${selectedCategory === category
                                    ? "text-pink-600"
                                    : "text-gray-500 hover:text-pink-600"
                                    }`}
                            >
                                {category}
                                {selectedCategory === category && (
                                    <motion.div
                                        layoutId="underline-article"
                                        className="absolute left-0 right-0 bottom-0 h-0.5 bg-pink-600"
                                    />
                                )}
                            </button>
                        ))}
                    </div>

                    {/* Search Bar */}
                    <div className="relative w-full lg:w-80 group">
                        <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 group-hover:text-pink-500 transition-colors" />
                        <input
                            type="text"
                            placeholder="Cari artikel..."
                            value={searchQuery}
                            onChange={handleSearch}
                            className="w-full pl-10 pr-10 py-2.5 rounded-xl border border-gray-200 bg-gray-50/50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-pink-500/20 focus:border-pink-500 transition-all text-sm font-medium"
                        />
                        {searchQuery && (
                            <button
                                onClick={() => { setSearchQuery(""); setCurrentPage(1); }}
                                className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 rounded-full bg-gray-200 hover:bg-pink-500 text-gray-600 hover:text-white transition-all flex items-center justify-center"
                            >
                                <X className="w-3 h-3" />
                            </button>
                        )}
                    </div>
                </div>
            </section>

            {/* Articles Grid */}
            <section className="container mx-auto px-6 md:px-12">
                <AnimatePresence mode="wait">
                    {paginatedArticles.length > 0 ? (
                        <motion.div
                            key={selectedCategory + searchQuery + currentPage}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            transition={{ duration: 0.3 }}
                            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                        >
                            {paginatedArticles.map((article, index) => (
                                <article
                                    key={article.id}
                                    className="group bg-white rounded-[2.5rem] overflow-hidden border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-500 flex flex-col h-full"
                                >
                                    <Link href={`/articles/${article.slug}`} className="relative h-64 overflow-hidden">
                                        <Image
                                            src={article.image}
                                            alt={article.title}
                                            fill
                                            unoptimized
                                            className="object-cover transition-transform duration-700 group-hover:scale-110"
                                        />
                                        <div className="absolute top-6 left-6">
                                            <span className="px-4 py-1.5 rounded-full bg-white/95 backdrop-blur-md text-pink-600 text-[11px] font-black uppercase tracking-widest shadow-sm">
                                                {article.category}
                                            </span>
                                        </div>
                                    </Link>

                                    <div className="p-8 flex flex-col flex-grow">
                                        <div className="flex items-center gap-4 text-[11px] text-gray-400 font-bold uppercase tracking-wider mb-4">
                                            <div className="flex items-center gap-1.5">
                                                <Calendar className="w-3.5 h-3.5" />
                                                <span>{article.date}</span>
                                            </div>
                                            <div className="flex items-center gap-1.5">
                                                <Clock className="w-3.5 h-3.5" />
                                                <span>{article.readTime}</span>
                                            </div>
                                        </div>

                                        <Link href={`/articles/${article.slug}`}>
                                            <h2 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-pink-600 transition-colors leading-snug">
                                                {article.title}
                                            </h2>
                                        </Link>

                                        <p className="text-gray-500 text-sm leading-relaxed mb-6 font-medium line-clamp-3">
                                            {article.excerpt}
                                        </p>

                                        <div className="mt-auto pt-6 border-t border-gray-50 flex items-center justify-between">
                                            <div className="flex items-center gap-2">
                                                <div className="w-7 h-7 rounded-full bg-pink-50 flex items-center justify-center text-pink-600">
                                                    <User className="w-3.5 h-3.5" />
                                                </div>
                                                <span className="text-[11px] text-gray-700 font-bold tracking-tight">{article.author}</span>
                                            </div>

                                            <Link
                                                href={`/articles/${article.slug}`}
                                                className="text-pink-600 font-black text-[11px] uppercase tracking-widest flex items-center gap-1.5 group/link"
                                            >
                                                Baca
                                                <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover/link:translate-x-1" />
                                            </Link>
                                        </div>
                                    </div>
                                </article>
                            ))}
                        </motion.div>
                    ) : (
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            className="py-20 text-center"
                        >
                            <div className="relative w-64 h-64 mx-auto mb-8 rounded-full bg-pink-50 flex items-center justify-center overflow-hidden">
                                <Image
                                    src="https://images.unsplash.com/photo-1510076857177-7470076d4098?q=80&w=600&auto=format&fit=crop"
                                    alt="No Articles Found"
                                    fill
                                    className="object-cover opacity-80"
                                />
                                <div className="absolute inset-0 bg-pink-900/10" />
                            </div>

                            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-pink-50 text-pink-600 text-xs font-bold uppercase tracking-widest mb-6">
                                <Search className="w-3.5 h-3.5" />
                                <span>Tidak Ditemukan</span>
                            </div>

                            <h3 className="text-3xl font-bold text-gray-900 mb-4 tracking-tight">
                                Artikel tidak ditemukan
                            </h3>

                            <p className="text-gray-500 text-lg leading-relaxed mb-8 max-w-md mx-auto">
                                Maaf, kami tidak dapat menemukan artikel yang cocok dengan pencarian Anda.
                            </p>

                            <Button
                                onClick={() => { setSearchQuery(""); handleCategoryChange("Semua"); }}
                                className="inline-flex items-center gap-2 px-8 py-6 rounded-full bg-pink-600 text-white font-bold hover:bg-pink-700 hover:shadow-lg hover:shadow-pink-200 transition-all active:scale-95 group"
                            >
                                <Sparkles className="w-4 h-4" />
                                Lihat Semua Artikel
                            </Button>
                        </motion.div>
                    )}
                </AnimatePresence>

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
            </section>
        </div>
    );
}
