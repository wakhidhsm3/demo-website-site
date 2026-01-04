"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { motion } from "motion/react";
import { ArrowRight, Sparkles, Heart } from "lucide-react";

export function HeroSection() {
    return (
        <section className="relative overflow-hidden bg-white pt-24 pb-20 md:pt-32 md:pb-24 lg:pt-40 lg:pb-32 min-h-screen flex items-center">
            {/* Abstract Background Shapes */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[600px] bg-pink-50/50 rounded-full blur-3xl -z-10 opacity-60"></div>
            <div className="absolute bottom-0 right-0 w-[800px] h-[800px] bg-purple-50/30 rounded-full blur-3xl -z-10 opacity-40"></div>

            <div className="container mx-auto px-6 md:px-12">
                <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">

                    {/* Text Content */}
                    <motion.div
                        className="flex-1 text-center lg:text-left space-y-8"
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                    >
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-pink-50 border border-pink-100/50 shadow-sm mx-auto lg:mx-0">
                            <Sparkles className="w-4 h-4 text-pink-500" />
                            <span className="text-sm font-medium text-pink-600 tracking-wide">Digital Wedding Platform #1</span>
                        </div>

                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-gray-900 leading-[1.1]">
                            Undangan Pernikahan Digital yang <br className="hidden lg:block" />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-600 via-purple-600 to-indigo-600">
                                Mengabadikan Kisah Cinta Kalian
                            </span>
                        </h1>

                        <p className="text-lg md:text-xl text-gray-500 leading-relaxed max-w-2xl mx-auto lg:mx-0 font-light">
                            Bagikan momen sakral dengan desain elegan, mudah dibagikan, dan penuh makna — <span className="underline decoration-pink-500/60 decoration-2 underline-offset-4 text-gray-900 font-medium">cukup satu link untuk semua tamu</span>.
                        </p>

                        <div className="flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start pt-4">
                            <Link href="/login" className="w-full sm:w-auto">
                                <Button size="lg" className="w-full h-14 rounded-full bg-gradient-to-r from-pink-600 to-purple-600 hover:from-pink-700 hover:to-purple-700 text-white px-8 text-base shadow-xl shadow-pink-200 transition-all hover:scale-105">
                                    Buat Undangan Impianmu
                                </Button>
                            </Link>
                            <Link href="#features" className="w-full sm:w-auto">
                                <Button size="lg" variant="outline" className="w-full h-14 rounded-full bg-white/80 backdrop-blur-md border-white/20 text-gray-700 hover:text-pink-600 hover:bg-white pl-8 pr-2 py-1 text-base shadow-lg shadow-gray-200/50 hover:shadow-xl hover:shadow-pink-100/50 transition-all duration-300 group flex items-center justify-between gap-6 overflow-visible ring-1 ring-gray-200/50 hover:ring-pink-100">
                                    <span className="font-semibold tracking-wide">Eksplorasi Fitur</span>
                                    <div className="w-10 h-10 rounded-full bg-gray-50 group-hover:bg-pink-50 flex items-center justify-center border border-gray-100 group-hover:border-pink-100 transition-all duration-300 group-hover:scale-105 group-hover:rotate-[-12deg]">
                                        <ArrowRight className="w-5 h-5 text-gray-400 group-hover:text-pink-500 transition-colors" />
                                    </div>
                                </Button>
                            </Link>
                        </div>


                    </motion.div>

                    {/* Visual Showcase */}
                    <motion.div
                        className="flex-1 w-full max-w-[600px] lg:max-w-none relative"
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 1, delay: 0.2, ease: "circOut" }}
                    >
                        <div className="relative z-10 rounded-2xl overflow-hidden shadow-2xl shadow-pink-100/50 bg-white border border-gray-100 p-2">
                            <div className="aspect-[4/5] md:aspect-[3/2] rounded-xl bg-gray-100 overflow-hidden relative group">
                                {/* Mockup Content */}
                                <div className="absolute inset-0 bg-neutral-900/5 transition-colors group-hover:bg-neutral-900/0 z-10" />
                                <div className="absolute inset-0 bg-[url('/hero-image.png')] bg-cover bg-center transition-transform duration-700 group-hover:scale-105"></div>

                                {/* Floating Elements Mockup */}
                                <div className="absolute top-8 right-8 bg-white/90 backdrop-blur-md p-4 rounded-xl shadow-lg z-20 max-w-[180px] hidden sm:block">
                                    <div className="text-xs font-semibold text-gray-400 mb-1">SAVE THE DATE</div>
                                    <div className="text-lg font-bold text-gray-900">24 . 12 . 24</div>
                                </div>

                                <div className="absolute bottom-8 left-8 bg-white/90 backdrop-blur-md p-4 rounded-xl shadow-lg z-20 flex items-center gap-3">
                                    <div className="w-10 h-10 rounded-full bg-pink-100 flex items-center justify-center text-pink-600">
                                        <Heart className="w-5 h-5 fill-current" />
                                    </div>
                                    <div>
                                        <div className="text-sm font-bold text-gray-900">Rizky & Anisa</div>
                                        <div className="text-xs text-gray-500">Just Married</div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Decorative Elements behind image */}
                        <div className="absolute -top-12 -right-12 w-64 h-64 bg-pink-100/50 rounded-full blur-3xl -z-10"></div>
                        <div className="absolute -bottom-8 -left-8 w-48 h-48 bg-purple-100/50 rounded-full blur-3xl -z-10"></div>
                    </motion.div>

                </div>
            </div>
        </section>
    );
}
