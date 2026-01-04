"use client";

import { motion } from "motion/react";
import { Button } from "@/components/ui/button";
import { Play, CheckCircle2 } from "lucide-react";
import { Card } from "@/components/ui/card";

const steps = [
    {
        number: "01",
        title: "Daftar & Pilih Tema",
        description: "Buat akun gratis dan jelajahi koleksi tema premium kami. Pilih yang paling cocok dengan gaya pernikahanmu.",
    },
    {
        number: "02",
        title: "Isi Detail Acara",
        description: "Lengkapi informasi mempelai, waktu, lokasi, dan galeri foto. Ceritakan kisah cintamu di fitur Love Story.",
    },
    {
        number: "03",
        title: "Sebarkan Undangan",
        description: "Undangan digitalmu siap! Bagikan link unik ke keluarga dan teman melalui WhatsApp atau media sosial.",
    },
];

export function HowItWorksSection() {
    return (
        <section id="how-it-works" className="py-20 md:py-28 bg-slate-50 relative overflow-hidden">
            <div className="container px-4 md:px-6 mx-auto">
                <div className="flex flex-col lg:flex-row items-center gap-16">

                    {/* Left Content: Text & Steps */}
                    <motion.div
                        className="flex-1 space-y-10"
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <div className="space-y-4">
                            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-pink-100 text-pink-600 text-sm font-medium">
                                <CheckCircle2 className="w-4 h-4" />
                                <span>Mudah & Cepat</span>
                            </div>
                            <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-gray-900 leading-tight">
                                Buat Undangan Impian <br />
                                <span className="text-pink-600">Dalam 3 Langkah</span>
                            </h2>
                            <p className="text-gray-500 text-lg max-w-lg">
                                Tidak perlu keahlian teknis. Platform kami dirancang untuk memudahkan kamu membuat undangan yang memukau dalam waktu singkat.
                            </p>
                        </div>

                        <div className="space-y-6">
                            {steps.map((step, index) => (
                                <motion.div
                                    key={index}
                                    className="flex gap-4 group"
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.2, duration: 0.5 }}
                                >
                                    <div className="flex-shrink-0 w-12 h-12 rounded-full bg-white border-2 border-pink-100 flex items-center justify-center text-pink-600 font-bold text-lg shadow-sm group-hover:border-pink-600 group-hover:bg-pink-600 group-hover:text-white transition-all duration-300">
                                        {step.number}
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-bold text-gray-900 mb-2">{step.title}</h3>
                                        <p className="text-gray-500 leading-relaxed">{step.description}</p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>

                        <Button size="lg" className="rounded-full bg-pink-600 text-white hover:bg-pink-700 px-8 h-12 shadow-lg shadow-pink-200">
                            Buat Undangan Impianmu
                        </Button>
                    </motion.div>

                    {/* Right Content: Video / Visual */}
                    <motion.div
                        className="flex-1 w-full"
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                    >
                        <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white bg-white">
                            {/* Fake Video Thumbnail Area */}
                            <div className="aspect-video bg-gray-100 relative group cursor-pointer">
                                <div className="absolute inset-0 bg-[url('/video-thumbnail.png')] bg-cover bg-center transition-transform duration-700 group-hover:scale-105"></div>
                                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-colors"></div>

                                {/* Play Button */}
                                <div className="absolute inset-0 flex items-center justify-center">
                                    <div className="w-20 h-20 rounded-full bg-white/30 backdrop-blur-md flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                                        <div className="w-14 h-14 rounded-full bg-white flex items-center justify-center shadow-lg">
                                            <Play className="w-6 h-6 text-pink-600 fill-current ml-1" />
                                        </div>
                                    </div>
                                </div>

                                {/* Floating Caption */}
                                <div className="absolute bottom-6 left-6 right-6">
                                    <div className="bg-white/90 backdrop-blur rounded-xl p-4 shadow-lg border border-white/50">
                                        <div className="flex items-center gap-3">
                                            <div className="w-10 h-10 rounded-full bg-pink-100 flex items-center justify-center">
                                                <Play className="w-5 h-5 text-pink-600" />
                                            </div>
                                            <div>
                                                <p className="text-sm font-bold text-gray-900">Tutorial Singkat</p>
                                                <p className="text-xs text-gray-500">Lihat betapa mudahnya membuat undangan.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Background Decorations */}
                        <div className="absolute top-1/2 -right-20 w-72 h-72 bg-purple-200/50 rounded-full blur-3xl -z-10 translate-y-20"></div>
                    </motion.div>

                </div>
            </div>
        </section>
    );
}
