"use client";

import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { motion } from "motion/react";

const plans = [
    {
        name: "Basic",
        price: "Gratis",
        description: "Untuk pernikahan sederhana & intim",
        features: [
            "1 Tema Premium",
            "50 Tamu Undangan",
            "Masa Aktif 3 Bulan",
            "Musik Latar Standard",
            "Fitur RSVP Dasar",
        ],
        buttonText: "Buat Undangan",
        popular: false,
    },
    {
        name: "Premium",
        price: "Rp 149.000",
        description: "Pilihan favorit mempelai modern",
        features: [
            "Akses Semua Tema Premium",
            "Tanpa Batas Tamu",
            "Masa Aktif 1 Tahun",
            "Custom Music & Gallery",
            "Smart RSVP Dashboard",
            "Kirim Undangan via WhatsApp",
            "Peta Lokasi Interaktif",
        ],
        buttonText: "Buat Undangan",
        popular: true,
    },
    {
        name: "Exclusive",
        price: "Rp 299.000",
        description: "Fitur lengkap & prioritas support",
        features: [
            "Segala Fitur Premium",
            "Domain Custom (.com)",
            "Masa Aktif Selamanya",
            "Prioritas Support 24/7",
            "Video Invitation",
            "QR Code Check-in",
            "Export Data ke Excel",
        ],
        buttonText: "Buat Undangan",
        popular: false,
    },
];

export function PricingSection() {
    return (
        <section id="pricing" className="py-20 md:py-24 lg:py-32 bg-background">
            <div className="container px-4 md:px-6 mx-auto">
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="flex flex-col items-center justify-center space-y-4 text-center mb-16"
                >
                    <div className="inline-block rounded-lg bg-pink-100 px-3 py-1 text-sm text-pink-700 font-medium">
                        Penawaran Spesial
                    </div>
                    <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                        Pilih Paket Pernikahanmu
                    </h2>
                    <p className="max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                        Transparan, tanpa biaya tersembunyi. Mulai gratis dan upgrade kapan saja.
                    </p>
                </motion.div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                    {plans.map((plan, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                        >
                            <Card
                                className={`relative flex flex-col border-2 transition-all duration-300 hover:shadow-2xl h-full ${plan.popular
                                    ? "border-pink-600 shadow-xl scale-105 z-10 bg-white"
                                    : "border-transparent bg-slate-50 hover:bg-white hover:border-pink-100"
                                    }`}
                            >
                                {plan.popular && (
                                    <div className="absolute top-0 right-0 -mr-1 -mt-1 bg-gradient-to-r from-pink-600 to-purple-600 text-white text-xs font-bold px-3 py-1 rounded-bl-lg rounded-tr-lg shadow-sm">
                                        MOST POPULAR
                                    </div>
                                )}
                                <CardHeader>
                                    <CardTitle className="text-2xl font-bold">{plan.name}</CardTitle>
                                    <CardDescription className="text-sm text-gray-500 mt-2">
                                        {plan.description}
                                    </CardDescription>
                                    <div className="mt-4">
                                        <span className="text-4xl font-extrabold tracking-tight">{plan.price}</span>
                                        {plan.price !== "Gratis" && <span className="text-gray-500 ml-1">/event</span>}
                                    </div>
                                </CardHeader>
                                <CardContent className="flex-1">
                                    <ul className="space-y-3">
                                        {plan.features.map((feature, i) => (
                                            <li key={i} className="flex items-start">
                                                <Check className="h-5 w-5 text-green-500 mr-2 shrink-0" />
                                                <span className="text-sm text-gray-700">{feature}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </CardContent>
                                <CardFooter>
                                    <Link href="/login" className="w-full">
                                        <Button
                                            className={`w-full ${plan.popular
                                                ? "bg-gradient-to-r from-pink-600 to-purple-600 hover:from-pink-700 hover:to-purple-700 text-white shadow-lg shadow-pink-200"
                                                : "bg-white border-2 border-slate-200 hover:border-pink-300 hover:bg-pink-50 text-slate-900"
                                                }`}
                                            variant={plan.popular ? "default" : "outline"}
                                        >
                                            {plan.buttonText}
                                        </Button>
                                    </Link>
                                </CardFooter>
                            </Card>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
