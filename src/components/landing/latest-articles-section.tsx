"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "motion/react";
import { Calendar, User, Clock, ArrowRight, Sparkles } from "lucide-react";
import { articles } from "@/lib/articles";
import { Button } from "@/components/ui/button";

export function LatestArticlesSection() {
    // Get the latest 3 articles (assuming the list is ordered or we just take the first 3)
    const latestArticles = articles.slice(0, 3);

    return (
        <section className="py-20 bg-gray-50/50">
            <div className="container mx-auto px-6 md:px-12">
                {/* Section Header */}
                <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-pink-50 text-pink-600 text-sm font-medium"
                    >
                        <Sparkles className="w-3 h-3" />
                        <span>Inspirasi & Tips</span>
                    </motion.div>
                    <motion.h2
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-3xl md:text-5xl font-bold text-gray-900 tracking-tight"
                    >
                        Artikel <span className="text-pink-600">Terbaru</span>
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="text-gray-500 text-lg font-light leading-relaxed"
                    >
                        Temukan ide menarik dan tips bermanfaat untuk persiapan pernikahan impianmu.
                    </motion.p>
                </div>

                {/* Articles Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
                    {latestArticles.map((article, index) => (
                        <motion.article
                            key={article.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="group bg-white rounded-[2.5rem] overflow-hidden border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-500 flex flex-col h-full hover:-translate-y-1"
                        >
                            <Link href={`/articles/${article.slug}?from=home`} className="relative h-60 overflow-hidden">
                                <Image
                                    src={article.image}
                                    alt={article.title}
                                    fill
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

                                <Link href={`/articles/${article.slug}?from=home`}>
                                    <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-pink-600 transition-colors leading-snug line-clamp-2">
                                        {article.title}
                                    </h3>
                                </Link>

                                <p className="text-gray-500 text-sm leading-relaxed mb-6 font-medium line-clamp-2">
                                    {article.excerpt}
                                </p>

                                <div className="mt-auto pt-6 border-t border-gray-50 flex items-center justify-between">
                                    <div className="flex items-center gap-2">
                                        <div className="w-7 h-7 rounded-full bg-pink-50 flex items-center justify-center text-pink-600">
                                            <User className="w-3.5 h-3.5" />
                                        </div>
                                        <span className="text-[11px] text-gray-700 font-bold tracking-tight">{article.author}</span>
                                    </div>
                                </div>
                            </div>
                        </motion.article>
                    ))}
                </div>

                {/* View All Button */}
                <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center"
                >
                    <Link href="/articles">
                        <Button className="h-14 px-8 rounded-full bg-pink-600 hover:bg-pink-700 text-white text-base font-bold shadow-lg shadow-pink-200 transition-all duration-300 hover:scale-[1.02] active:scale-95 group">
                            Lihat Semua Artikel
                            <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                        </Button>
                    </Link>
                </motion.div>
            </div>
        </section>
    );
}
