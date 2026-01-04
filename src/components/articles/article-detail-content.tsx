"use client";

import Image from "next/image";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import { motion } from "motion/react";
import { useState } from "react";
import { ShareModal } from "@/components/articles/share-modal";
import { Calendar, User, Clock, ChevronLeft, ChevronRight, Share2, Sparkles } from "lucide-react";
import { articles } from "@/lib/articles";

export function ArticleDetailContent({ article }: { article: any }) {
    const router = useRouter();
    const searchParams = useSearchParams();
    const isFromHome = searchParams.get("from") === "home";
    const [isShareModalOpen, setIsShareModalOpen] = useState(false);

    const handleShare = () => {
        setIsShareModalOpen(true);
    };

    if (!article) return null;

    return (
        <div className="pt-28 md:pt-36 pb-20 bg-white min-h-screen">
            <div className="container mx-auto px-6 md:px-12">
                {/* Breadcrumbs */}
                <nav className="flex items-center gap-2 text-xs md:text-sm text-gray-500 mb-8 overflow-hidden whitespace-nowrap">
                    {isFromHome && (
                        <>
                            <Link href="/" className="hover:text-pink-600 transition-colors">Beranda</Link>
                            <ChevronRight className="w-3.5 h-3.5 flex-shrink-0 text-gray-400" />
                        </>
                    )}
                    <Link href="/articles" className="hover:text-pink-600 transition-colors">Artikel</Link>
                    <ChevronRight className="w-3.5 h-3.5 flex-shrink-0 text-gray-400" />
                    <span className="font-semibold text-gray-900 truncate">{article.title}</span>
                </nav>

                {/* Navigation & Actions */}
                <div className="flex items-center justify-between mb-12">
                    <button
                        onClick={() => router.back()}
                        className="flex items-center gap-2.5 text-gray-500 hover:text-pink-600 transition-all font-semibold text-sm group"
                    >
                        <div className="w-8 h-8 rounded-full border border-gray-100 flex items-center justify-center group-hover:border-pink-100 group-hover:bg-pink-50 transition-all">
                            <ChevronLeft className="w-4 h-4 transition-transform group-hover:-translate-x-0.5" />
                        </div>
                        Kembali
                    </button>

                    <div className="flex items-center gap-3">
                        <button
                            onClick={handleShare}
                            className="w-10 h-10 rounded-full border border-gray-100 flex items-center justify-center text-gray-500 hover:bg-gray-50 hover:text-pink-600 transition-all"
                        >
                            <Share2 className="w-4 h-4" />
                        </button>
                    </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">
                    {/* Main Content */}
                    <div className="lg:col-span-8">
                        <article>
                            {/* Header */}
                            <header className="mb-12">
                                <motion.div
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-pink-50 text-pink-600 text-[10px] font-bold uppercase tracking-widest mb-6"
                                >
                                    <Sparkles className="w-3 h-3" />
                                    <span>{article.category}</span>
                                </motion.div>

                                <motion.h1
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.1 }}
                                    className="text-3xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-8 leading-[1.1] tracking-tighter"
                                >
                                    {article.title}
                                </motion.h1>

                                <motion.div
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    transition={{ delay: 0.2 }}
                                    className="flex flex-wrap items-center gap-x-6 gap-y-4 text-[13px] text-gray-500 font-medium"
                                >
                                    <div className="flex items-center gap-3">
                                        <div className="w-9 h-9 rounded-full bg-gray-100 flex items-center justify-center">
                                            <User className="w-4 h-4 text-gray-600" />
                                        </div>
                                        <span className="text-gray-900 font-bold">{article.author}</span>
                                    </div>
                                    <div className="w-1 h-1 rounded-full bg-gray-300 hidden sm:block" />
                                    <div className="flex items-center gap-2">
                                        <Calendar className="w-4 h-4 text-gray-400" />
                                        <span>{article.date}</span>
                                    </div>
                                    <div className="w-1 h-1 rounded-full bg-gray-300 hidden sm:block" />
                                    <div className="flex items-center gap-2">
                                        <Clock className="w-4 h-4 text-gray-400" />
                                        <span>{article.readTime} Baca</span>
                                    </div>
                                </motion.div>
                            </header>

                            {/* Featured Image */}
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.3 }}
                                className="relative h-[300px] md:h-[450px] lg:h-[550px] rounded-3xl overflow-hidden mb-12 ring-1 ring-gray-100 shadow-xl shadow-gray-100/50"
                            >
                                <Image
                                    src={article.image}
                                    alt={article.title}
                                    fill
                                    unoptimized
                                    className="object-cover"
                                    priority
                                />
                            </motion.div>

                            {/* Content */}
                            <div
                                className="prose prose-lg prose-pink max-w-none 
                                prose-headings:font-bold prose-headings:text-gray-900 prose-headings:tracking-tight
                                prose-p:text-gray-600 prose-p:leading-relaxed prose-p:font-normal
                                prose-strong:text-gray-900 prose-strong:font-bold
                                prose-img:rounded-2xl prose-img:shadow-md mb-20"
                                dangerouslySetInnerHTML={{ __html: article.content }}
                            />
                        </article>
                    </div>

                    {/* Sidebar: Related Articles */}
                    <div className="lg:col-span-4 lg:pl-12 lg:border-l border-gray-100">
                        {/* Mobile Divider */}
                        <div className="w-full h-px bg-gray-100 mb-12 lg:hidden" />

                        <div className="sticky top-32 space-y-12">
                            <div>
                                <h2 className="text-[13px] font-bold text-gray-400 uppercase tracking-[0.2em] mb-10 flex items-center gap-4">
                                    Artikel Serupa
                                    <div className="h-px bg-gray-100 flex-grow" />
                                </h2>

                                <div className="space-y-10">
                                    {articles
                                        .filter(a => a.category === article.category && a.id !== article.id)
                                        .slice(0, 4)
                                        .map((related) => (
                                            <Link
                                                key={related.id}
                                                href={`/articles/${related.slug}`}
                                                className="group flex gap-5 items-center"
                                            >
                                                <div className="relative w-20 h-20 shrink-0 rounded-2xl overflow-hidden ring-1 ring-gray-100">
                                                    <Image
                                                        src={related.image}
                                                        alt={related.title}
                                                        fill
                                                        unoptimized
                                                        className="object-cover transition-transform duration-700 group-hover:scale-110"
                                                    />
                                                </div>
                                                <div className="space-y-1.5 flex-grow">
                                                    <h3 className="font-bold text-gray-900 text-sm leading-tight group-hover:text-pink-600 transition-colors line-clamp-2">
                                                        {related.title}
                                                    </h3>
                                                    <span className="text-[11px] text-gray-400 font-medium">{related.date}</span>
                                                </div>
                                            </Link>
                                        ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* CTA Footer */}
                <footer className="mt-24 border-t border-gray-100 pt-20 pb-10">
                    <div className="max-w-2xl mx-auto text-center">
                        <motion.div
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="flex justify-center mb-6"
                        >
                            <div className="w-10 h-1 px-4 rounded-full bg-pink-100" />
                        </motion.div>

                        <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-5 tracking-tighter">
                            Wujudkan <span className="text-pink-600 font-serif italic font-medium">Momen Indah</span> Anda
                        </h3>
                        <p className="text-gray-500 text-base font-medium mb-10 max-w-xl mx-auto leading-relaxed">
                            Mulai langkah pertama hari bahagia Anda dengan desain undangan yang merefleksikan keunikan cinta Anda.
                        </p>

                        <Link href="/">
                            <button className="h-14 px-12 rounded-full bg-pink-600 text-white font-bold text-xs uppercase tracking-[0.2em] hover:bg-pink-700 hover:shadow-2xl hover:shadow-pink-200 transition-all active:scale-95">
                                Mulai Sekarang
                            </button>
                        </Link>

                    </div>
                </footer>
            </div>

            <ShareModal
                isOpen={isShareModalOpen}
                onClose={() => setIsShareModalOpen(false)}
                url={typeof window !== "undefined" ? window.location.href : ""}
                title={article.title}
            />
        </div>
    );
}
