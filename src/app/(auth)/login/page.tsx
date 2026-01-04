"use client";

import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import { Eye, EyeOff, ArrowRight, Sparkles } from "lucide-react";
import { motion } from "motion/react";

export default function LoginPage() {
    const [showPassword, setShowPassword] = useState(false);

    return (
        <div className="min-h-screen grid lg:grid-cols-2">
            {/* Left Side - Form */}
            <div className="flex flex-col justify-center px-8 md:px-16 lg:px-24 py-12 bg-white relative">
                <Link href="/" className="absolute top-8 left-8 flex items-center gap-2 group">
                    <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-pink-500 to-purple-600 flex items-center justify-center text-white font-bold text-sm shadow-md group-hover:shadow-pink-500/50 transition-all">
                        W
                    </div>
                    <span className="font-bold text-xl text-gray-900 tracking-tight">Wedify</span>
                </Link>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="max-w-md w-full mx-auto space-y-8"
                >
                    <div className="space-y-2">
                        <h1 className="text-3xl font-bold tracking-tight text-gray-900">Selamat Datang Kembali</h1>
                        <p className="text-gray-500">Masuk untuk melanjutkan membuat undangan impianmu.</p>
                    </div>

                    <div className="space-y-4">
                        {/* Google Login */}
                        <Button variant="outline" className="w-full h-12 rounded-xl border-gray-200 hover:bg-gray-50 hover:text-gray-900 font-medium transition-all gap-2 relative overflow-hidden group">
                            <svg className="w-5 h-5 z-10" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4" />
                                <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
                                <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05" />
                                <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335" />
                            </svg>
                            <span className="z-10">Masuk dengan Google</span>
                            {/* Hover Effect */}
                            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-gray-100 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700" />
                        </Button>

                        <div className="relative">
                            <div className="absolute inset-0 flex items-center">
                                <span className="w-full border-t border-gray-100" />
                            </div>
                            <div className="relative flex justify-center text-xs uppercase">
                                <span className="bg-white px-2 text-gray-400 font-medium tracking-wider">atau masuk dengan email</span>
                            </div>
                        </div>

                        {/* Email/Phone Input */}
                        <div className="space-y-4">
                            <div className="space-y-2">
                                <label className="text-sm font-medium text-gray-700" htmlFor="identifier">
                                    Email atau Nomor HP
                                </label>
                                <Input
                                    id="identifier"
                                    placeholder="nama@email.com atau 0812..."
                                    className="h-12 rounded-xl bg-gray-50 border-gray-200 focus:bg-white focus:border-pink-500 focus:ring-pink-500/20 transition-all"
                                />
                            </div>

                            <div className="space-y-2">
                                <div className="flex items-center justify-between">
                                    <label className="text-sm font-medium text-gray-700" htmlFor="password">
                                        Password
                                    </label>
                                    <Link
                                        href="/forgot-password"
                                        className="text-xs font-medium text-pink-600 hover:text-pink-700"
                                    >
                                        Lupa password?
                                    </Link>
                                </div>
                                <div className="relative">
                                    <Input
                                        id="password"
                                        type={showPassword ? "text" : "password"}
                                        placeholder="••••••••"
                                        className="h-12 rounded-xl bg-gray-50 border-gray-200 focus:bg-white focus:border-pink-500 focus:ring-pink-500/20 transition-all pr-10"
                                    />
                                    <button
                                        type="button"
                                        onClick={() => setShowPassword(!showPassword)}
                                        className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors"
                                    >
                                        {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                                    </button>
                                </div>
                            </div>
                        </div>

                        <Button className="w-full h-12 rounded-xl bg-pink-600 hover:bg-pink-700 text-white font-bold shadow-lg shadow-pink-200 transition-all hover:scale-[1.02] active:scale-95 group">
                            Masuk Sekarang
                            <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                        </Button>
                    </div>

                    <div className="text-center text-sm text-gray-500">
                        Belum punya akun?{" "}
                        <Link href="/register" className="font-bold text-pink-600 hover:text-pink-700 hover:underline transition-all">
                            Daftar Gratis
                        </Link>
                    </div>
                </motion.div>

                <div className="absolute bottom-8 left-0 right-0 text-center">
                    <p className="text-xs text-gray-400">
                        &copy; 2026 Wedify Inc. All rights reserved.
                    </p>
                </div>
            </div>

            {/* Right Side - Image/Banner */}
            <div className="hidden lg:block relative bg-gray-100 overflow-hidden">
                <Image
                    src="https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=2070&auto=format&fit=crop"
                    alt="Wedding Dashboard"
                    fill
                    className="object-cover"
                    priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-pink-900/40 to-purple-900/20 backdrop-blur-[2px]" />

                <div className="absolute bottom-16 left-16 right-16 text-white space-y-6">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2, duration: 0.6 }}
                        className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/20 backdrop-blur-md border border-white/30 text-xs font-semibold"
                    >
                        <Sparkles className="w-3 h-3" />
                        <span>Platform Undangan Digital #1</span>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3, duration: 0.6 }}
                    >
                        <h2 className="text-4xl font-bold leading-tight mb-4">
                            "Momen spesial Anda layak mendapatkan undangan yang tak terlupakan."
                        </h2>
                        <p className="text-lg text-white/80 font-light">
                            Bergabunglah dengan ribuan pasangan yang telah mempercayakan momen bahagia mereka bersama Wedify.
                        </p>
                    </motion.div>

                    {/* Testimonial Avatar Stack or similar social proof can act here */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.5 }}
                        className="flex items-center gap-4 pt-4"
                    >
                        <div className="flex -space-x-3">
                            {[1, 2, 3].map((i) => (
                                <div key={i} className="w-8 h-8 rounded-full border-2 border-white/50 bg-gray-200 overflow-hidden">
                                    <Image
                                        src={`https://i.pravatar.cc/100?img=${i + 10}`}
                                        alt="User" width={32} height={32}
                                    />
                                </div>
                            ))}
                        </div>
                        <div className="text-sm font-medium">
                            <span className="font-bold">2.5k+</span> Pasangan bergabung
                        </div>
                    </motion.div>
                </div>
            </div>
        </div>
    );
}
