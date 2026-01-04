"use client";

import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { motion } from "motion/react";
import { Star, Quote } from "lucide-react";
import { VelocityScroll } from "@/components/ui/scroll-based-velocity";

const testimonials = [
    {
        name: "Sarah & Dimas",
        role: "Pengantin Baru",
        image: "https://images.unsplash.com/photo-1623184663110-89ba5b565eb6?q=80&w=200&auto=format&fit=crop",
        content: "Wedify sangat membantu kami dalam mengelola undangan tamu. Fitur RSVP-nya real-time dan desainnya sangat elegan. Teman-teman banyak yang memuji!",
        rating: 5,
    },
    {
        name: "Putri & Kevin",
        role: "Jakarta",
        image: "https://images.unsplash.com/photo-1535295972055-1c762f4483e5?q=80&w=200&auto=format&fit=crop",
        content: "Suka banget sama fitur Love Story-nya! Jadi bisa cerita perjalanan cinta kita dari awal ketemu sampai nikah. Tamu jadi lebih kenal sama kita.",
        rating: 5,
    },
    {
        name: "Amanda & Reza",
        role: "Surabaya",
        image: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?q=80&w=200&auto=format&fit=crop",
        content: "Awalnya ragu pakai undangan digital, tapi Wedify bikin semuanya jadi mudah dan terlihat mahal. Amplop digitalnya juga sangat berguna.",
        rating: 5,
    },
];

export function TestimonialSection() {
    // Double testimonials for seamless infinite loop
    const loopTestimonials = [...testimonials, ...testimonials];

    return (
        <section id="testimonials" className="py-20 md:py-28 bg-white relative overflow-hidden">
            {/* Decorative Background */}
            <div className="absolute top-0 left-0 w-full h-[500px] bg-gradient-to-b from-gray-50/50 to-transparent -z-10" />
            <div className="absolute -left-20 top-40 w-72 h-72 bg-pink-50 rounded-full blur-3xl opacity-60 -z-10" />
            <div className="absolute -right-20 bottom-40 w-72 h-72 bg-purple-50 rounded-full blur-3xl opacity-60 -z-10" />

            <div className="container px-4 md:px-6 mx-auto mb-16">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6 }}
                    className="text-center space-y-4"
                >
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-pink-50 text-pink-600 text-sm font-medium">
                        <Star className="w-3 h-3 fill-current" />
                        <span>Apa Kata Mereka</span>
                    </div>
                    <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-gray-900">
                        Dipercaya oleh Ribuan Pasangan
                    </h2>
                    <p className="max-w-2xl mx-auto text-gray-500 text-lg">
                        Bergabunglah dengan mereka yang telah merasakan kemudahan dan keindahan undangan pernikahan digital Wedify.
                    </p>
                </motion.div>
            </div>

            {/* Scroll Based Velocity Container */}
            <div className="relative w-full group">
                {/* Gradient Masks for Smooth Fade Edge */}
                <div className="absolute left-0 top-0 bottom-0 w-20 md:w-32 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
                <div className="absolute right-0 top-0 bottom-0 w-20 md:w-32 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />

                <VelocityScroll default_velocity={0.4} className="gap-8 py-8">
                    {loopTestimonials.map((testimonial, index) => (
                        <div key={index} className="w-[350px] md:w-[450px] flex-shrink-0 mr-8 whitespace-normal">
                            <Card className="h-full border-none shadow-lg hover:shadow-2xl transition-all duration-300 bg-white relative overflow-visible group/card">
                                <div className="absolute -top-6 left-8 bg-gradient-to-br from-pink-500 to-purple-600 text-white p-3 rounded-xl shadow-lg transform group-hover/card:-translate-y-2 transition-transform duration-300">
                                    <Quote className="w-5 h-5 fill-current" />
                                </div>

                                <CardContent className="pt-14 pb-8 px-8 flex flex-col justify-between h-full">
                                    <div>
                                        <div className="flex gap-1 mb-4">
                                            {[...Array(testimonial.rating)].map((_, i) => (
                                                <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                                            ))}
                                        </div>
                                        <p className="text-gray-600 leading-relaxed italic relative z-10 text-base">
                                            "{testimonial.content}"
                                        </p>
                                    </div>
                                </CardContent>

                                <CardFooter className="px-8 pb-8 pt-0 flex items-center gap-4">
                                    <Avatar className="w-12 h-12 border-2 border-white shadow-md">
                                        <AvatarImage src={testimonial.image} alt={testimonial.name} />
                                        <AvatarFallback>{testimonial.name.substring(0, 2)}</AvatarFallback>
                                    </Avatar>
                                    <div>
                                        <h4 className="font-bold text-gray-900 text-sm">{testimonial.name}</h4>
                                        <span className="text-xs text-gray-500 font-medium uppercase tracking-wider">{testimonial.role}</span>
                                    </div>
                                </CardFooter>
                            </Card>
                        </div>
                    ))}
                </VelocityScroll>
            </div>

            {/* Wave Divider */}
            <div className="absolute bottom-0 left-0 w-full leading-none z-10">
                <svg
                    className="relative block w-full h-[50px] md:h-[100px]"
                    data-name="Layer 1"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 1200 120"
                    preserveAspectRatio="none"
                >
                    <path
                        d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
                        className="fill-slate-50"
                        transform="rotate(180 600 60)"
                    ></path>
                </svg>
            </div>
        </section>
    );
}
