"use client";

import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { motion } from "motion/react";
import { Star, Quote } from "lucide-react";

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

const container = {
    hidden: { opacity: 0 },
    show: {
        opacity: 1,
        transition: {
            staggerChildren: 0.2
        }
    }
};

const item = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { type: "spring", damping: 25, stiffness: 500 } }
} as const;

export function TestimonialSection() {
    // Quadruple testimonials for smoother infinite loop
    const loopTestimonials = [...testimonials, ...testimonials, ...testimonials, ...testimonials];

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

            {/* Marquee Container */}
            <div className="relative w-full overflow-hidden py-12">
                {/* Gradient Masks for Smooth Fade Edge */}
                <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-white to-transparent z-10" />
                <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-white to-transparent z-10" />

                <motion.div
                    className="flex w-max px-4"
                    animate={{ x: ["0%", "-25%"] }}
                    transition={{
                        repeat: Infinity,
                        ease: "linear",
                        duration: 30, // Adjust speed here
                    }}
                    whileHover={{ animationPlayState: "paused" }}
                >
                    {loopTestimonials.map((testimonial, index) => (
                        <div key={index} className="w-[350px] md:w-[400px] flex-shrink-0 pr-8">
                            <Card className="h-full border-none shadow-lg hover:shadow-xl transition-shadow duration-300 bg-white relative overflow-visible group">
                                <div className="absolute -top-6 left-8 bg-gradient-to-br from-pink-500 to-purple-600 text-white p-3 rounded-xl shadow-lg transform group-hover:-translate-y-1 transition-transform duration-300">
                                    <Quote className="w-5 h-5 fill-current" />
                                </div>

                                <CardContent className="pt-12 pb-6 px-8">
                                    <div className="flex gap-1 mb-4">
                                        {[...Array(testimonial.rating)].map((_, i) => (
                                            <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                                        ))}
                                    </div>
                                    <p className="text-gray-600 leading-relaxed italic relative z-10">
                                        "{testimonial.content}"
                                    </p>
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
                </motion.div>
            </div>
        </section>
    );
}
