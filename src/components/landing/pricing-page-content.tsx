"use client";

import { motion } from "motion/react";
import { Sparkles, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";

// Reusing plans data from PricingSection to ensure consistency
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
        buttonText: "Mulai Gratis",
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
        buttonText: "Pilih Premium",
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
        buttonText: "Hubungi Kami",
        popular: false,
    },
];

export function PricingPageContent() {
    return (
        <div className="pt-28 md:pt-36 pb-10 bg-white min-h-screen">
            {/* Header Section - Matches Article & Theme Pages */}
            <section className="container mx-auto px-6 md:px-12 mb-6">
                <div className="text-center max-w-2xl mx-auto space-y-4">
                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-pink-50 text-pink-600 text-sm font-medium"
                    >
                        <Sparkles className="w-3 h-3" />
                        <span>Penawaran Spesial</span>
                    </motion.div>
                    <motion.h1
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-3xl md:text-5xl font-bold text-gray-900 tracking-tight"
                    >
                        Pilih Paket <span className="text-pink-600">Pernikahanmu</span>
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="text-gray-500 text-lg font-light leading-relaxed"
                    >
                        Transparan, tanpa biaya tersembunyi. Mulai gratis dan upgrade kapan saja. <br className="hidden md:block" /> Sesuaikan dengan kebutuhan acaramu.
                    </motion.p>
                </div>
            </section>

            {/* Pricing Grid */}
            <section className="container mx-auto px-6 md:px-12">
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
                                    <Button
                                        className={`w-full ${plan.popular
                                            ? "bg-gradient-to-r from-pink-600 to-purple-600 hover:from-pink-700 hover:to-purple-700 text-white shadow-lg shadow-pink-200"
                                            : "bg-white border-2 border-slate-200 hover:border-pink-300 hover:bg-pink-50 text-slate-900"
                                            }`}
                                        variant={plan.popular ? "default" : "outline"}
                                    >
                                        {plan.buttonText}
                                    </Button>
                                </CardFooter>
                            </Card>
                        </motion.div>
                    ))}
                </div>
            </section>
        </div>
    );
}
