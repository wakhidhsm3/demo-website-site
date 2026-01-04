"use client";

import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";
import { motion } from "motion/react";

const faqs = [
    {
        question: "Apakah saya bisa mencoba gratis?",
        answer: "Tentu! Paket Basic kami 100% gratis selamanya. Anda bisa membuat undangan, menggunakan tema premium, dan mengundang hingga 50 tamu tanpa biaya sepeserpun."
    },
    {
        question: "Berapa lama masa aktif undangan?",
        answer: "Untuk paket Basic, masa aktif adalah 3 bulan. Paket Premium aktif selama 1 tahun, dan paket Exclusive aktif selamanya (lifetime)."
    },
    {
        question: "Apakah bisa custom domain (namawebsite.com)?",
        answer: "Ya, fitur custom domain tersedia di paket Exclusive. Tim kami akan membantu proses setup domain pilihan Anda sampai aktif."
    },
    {
        question: "Bagaimana cara menyebarkan undangannya?",
        answer: "Setelah undangan jadi, Anda akan mendapatkan link unik. Kami juga menyediakan fitur 'Kirim WhatsApp' yang otomatis membuat pesan personal untuk setiap tamu undangan."
    },
    {
        question: "Apakah bisa ganti tema setelah undangan dibuat?",
        answer: "Bisa banget! Anda bisa mengganti tema kapan saja tanpa perlu memasukkan ulang data. Semua konten akan otomatis menyesuaikan dengan desain tema baru."
    },
    {
        question: "Apakah data tamu dan angpao aman?",
        answer: "Keamanan adalah prioritas kami. Semua data tamu terenkripsi, dan informasi rekening/angpao digital hanya tampil untuk tamu yang memiliki akses."
    }
];

export function FAQSection() {
    return (
        <section id="faq" className="py-24 md:py-32 bg-slate-50">
            <div className="container px-4 mx-auto max-w-3xl">
                <motion.div
                    className="text-center mb-16"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <div className="inline-block rounded-full bg-white px-4 py-1.5 text-sm font-semibold text-pink-600 shadow-sm border border-pink-100 mb-6">
                        Pusat Bantuan
                    </div>
                    <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-gray-900 mb-6">
                        Pertanyaan Umum
                    </h2>
                    <p className="text-gray-500 text-lg">
                        Jawaban untuk pertanyaan yang paling sering diajukan oleh calon mempelai.
                    </p>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                >
                    <Accordion type="single" collapsible className="w-full space-y-4">
                        {faqs.map((faq, index) => (
                            <AccordionItem
                                key={index}
                                value={`item-${index}`}
                                className="group border-none bg-white rounded-2xl px-6 data-[state=open]:pb-4 shadow-sm hover:shadow-md transition-all duration-200"
                            >
                                <AccordionTrigger className="text-left text-gray-900 font-semibold text-lg py-6 hover:no-underline group-data-[state=open]:text-pink-600 transition-colors">
                                    {faq.question}
                                </AccordionTrigger>
                                <AccordionContent className="text-gray-500 text-base leading-relaxed">
                                    {faq.answer}
                                </AccordionContent>
                            </AccordionItem>
                        ))}
                    </Accordion>
                </motion.div>
            </div>
        </section>
    );
}
