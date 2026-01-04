"use client";

import { Zap, Heart, Users, BarChart3, Image, Moon } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { motion } from "motion/react";

const features = [
    {
        title: "Love Story Timeline",
        description: "Ceritakan perjalanan cinta Anda dalam tampilan timeline yang estetis dan romantis.",
        icon: Heart,
    },
    {
        title: "Digital Envelope",
        description: "Terima hadiah pernikahan dengan mudah melalui transfer bank atau QRIS (Digital Gift).",
        icon: Zap,
    },
    {
        title: "Live Streaming",
        description: "Ajak tamu yang berhalangan hadir untuk tetap menyaksikan momen sakral Anda secara virtual.",
        icon: Image,
    },
    {
        title: "Manajemen Tamu",
        description: "Kelola daftar tamu undangan dengan mudah, kirim link unik dan pantau status pengiriman.",
        icon: Users,
    },
    {
        title: "Real-time RSVP",
        description: "Dapatkan notifikasi kehadiran tamu secara instan dan rekap otomatis di dashboard.",
        icon: BarChart3,
    },
    {
        title: "Dynamic Themes",
        description: "Pilih dari berbagai tema premium yang dapat disesuaikan dengan warna pernikahan Anda.",
        icon: Moon,
    },
    {
        title: "Galeri & Media",
        description: "Bagikan momen prewedding dalam galeri interaktif dengan musik latar pilihan.",
        icon: Image,
    },
    {
        title: "Ucapan Digital",
        description: "Tamu dapat mengirimkan doa dan ucapan selamat secara langsung melalui undangan.",
        icon: Heart,
    },
    {
        title: "Akses Cepat",
        description: "Loading super cepat dengan teknologi Next.js terbaru untuk pengalaman tamu terbaik.",
        icon: Zap,
    },
];

const container = {
    hidden: { opacity: 0 },
    show: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1
        }
    }
};

const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 50 } }
} as const;

export function FeaturesSection() {
    return (
        <section id="features" className="py-20 md:py-24 lg:py-32 bg-slate-50">
            <div className="container px-4 md:px-6 mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6 }}
                    className="flex flex-col items-center justify-center space-y-4 text-center mb-12"
                >
                    <div className="inline-block rounded-lg bg-purple-100 px-3 py-1 text-sm text-purple-700 font-medium">
                        Fitur Unggulan
                    </div>
                    <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                        Solusi Lengkap Undangan Digital
                    </h2>
                    <p className="max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                        Semua yang Anda butuhkan untuk membuat, menyebarkan, dan memantau undangan pernikahan Anda ada di sini.
                    </p>
                </motion.div>
                <motion.div
                    variants={container}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, margin: "-50px" }}
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                >
                    {features.map((feature, index) => (
                        <motion.div key={index} variants={item}>
                            <Card className="border-none shadow-md hover:shadow-xl transition-shadow duration-300 bg-white h-full">
                                <CardHeader>
                                    <div className="p-3 w-12 h-12 rounded-lg bg-pink-100 text-pink-600 flex items-center justify-center mb-4">
                                        <feature.icon className="w-6 h-6" />
                                    </div>
                                    <CardTitle className="text-xl">{feature.title}</CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <CardDescription className="text-base text-gray-500">
                                        {feature.description}
                                    </CardDescription>
                                </CardContent>
                            </Card>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
