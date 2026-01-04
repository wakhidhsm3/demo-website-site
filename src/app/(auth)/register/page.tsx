"use client";

import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import { Eye, EyeOff, ArrowRight, ShieldCheck, Check } from "lucide-react";
import { motion } from "motion/react";

export default function RegisterPage() {
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
                        <h1 className="text-3xl font-bold tracking-tight text-gray-900">Buat Akun Baru</h1>
                        <p className="text-gray-500">Mulai perjalanan pernikahan impian Anda sekarang.</p>
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
                            <span className="z-10">Daftar dengan Google</span>
                            {/* Hover Effect */}
                            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-gray-100 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700" />
                        </Button>

                        <div className="relative">
                            <div className="absolute inset-0 flex items-center">
                                <span className="w-full border-t border-gray-100" />
                            </div>
                            <div className="relative flex justify-center text-xs uppercase">
                                <span className="bg-white px-2 text-gray-400 font-medium tracking-wider">atau daftar dengan email</span>
                            </div>
                        </div>

                        {/* Register Form */}
                        <div className="space-y-4">
                            <div className="space-y-2">
                                <label className="text-sm font-medium text-gray-700" htmlFor="email">
                                    Email
                                </label>
                                <Input
                                    id="email"
                                    type="email"
                                    placeholder="nama@email.com"
                                    className="h-12 rounded-xl bg-gray-50 border-gray-200 focus:bg-white focus:border-pink-500 focus:ring-pink-500/20 transition-all"
                                />
                            </div>

                            <div className="space-y-2">
                                <label className="text-sm font-medium text-gray-700" htmlFor="phone">
                                    Nomor WhatsApp
                                </label>
                                <Input
                                    id="phone"
                                    type="tel"
                                    placeholder="0812xxxx"
                                    className="h-12 rounded-xl bg-gray-50 border-gray-200 focus:bg-white focus:border-pink-500 focus:ring-pink-500/20 transition-all"
                                />
                            </div>

                            <div className="space-y-2">
                                <label className="text-sm font-medium text-gray-700" htmlFor="password">
                                    Password
                                </label>
                                <div className="relative">
                                    <Input
                                        id="password"
                                        type={showPassword ? "text" : "password"}
                                        placeholder="Min. 8 karakter"
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

                        <div className="text-xs text-gray-500 leading-relaxed">
                            Dengan mendaftar, Anda menyetujui <Link href="/terms" className="text-pink-600 hover:underline">Syarat & Ketentuan</Link> serta <Link href="/privacy" className="text-pink-600 hover:underline">Kebijakan Privasi</Link> kami.
                        </div>

                        <Button className="w-full h-12 rounded-xl bg-pink-600 hover:bg-pink-700 text-white font-bold shadow-lg shadow-pink-200 transition-all hover:scale-[1.02] active:scale-95 group">
                            Buat Akun Gratis
                            <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                        </Button>
                    </div>

                    <div className="text-center text-sm text-gray-500">
                        Sudah punya akun?{" "}
                        <Link href="/login" className="font-bold text-pink-600 hover:text-pink-700 hover:underline transition-all">
                            Masuk
                        </Link>
                    </div>
                </motion.div>

                <div className="absolute bottom-6 left-0 right-0 text-center pointer-events-none">
                    <p className="text-[10px] text-gray-300">
                        Secure Encrypted Connection
                    </p>
                </div>
            </div>

            {/* Right Side - Image/Banner */}
            <div className="hidden lg:block relative bg-gray-900 overflow-hidden">
                <Image
                    src="https://images.unsplash.com/photo-1606800052052-a08af7148866?q=80&w=2070&auto=format&fit=crop"
                    alt="Wedding Happiness"
                    fill
                    className="object-cover opacity-90"
                    priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-pink-900/60 to-purple-900/30 backdrop-blur-[1px]" />

                <div className="absolute bottom-16 left-16 right-16 text-white space-y-8">
                    <div className="space-y-4">
                        <div className="flex items-center gap-3">
                            <div className="w-12 h-12 rounded-2xl bg-white/20 backdrop-blur-md flex items-center justify-center text-white">
                                <ShieldCheck className="w-6 h-6" />
                            </div>
                            <div>
                                <h3 className="font-bold text-lg">Keamanan Data Terjamin</h3>
                                <p className="text-sm text-white/70">Privasi Anda adalah prioritas utama kami.</p>
                            </div>
                        </div>
                        <div className="w-full h-[1px] bg-white/10" />
                        <div className="flex items-center gap-3">
                            <div className="w-12 h-12 rounded-2xl bg-white/20 backdrop-blur-md flex items-center justify-center text-white">
                                <Check className="w-6 h-6" />
                            </div>
                            <div>
                                <h3 className="font-bold text-lg">Tanpa Kartu Kredit</h3>
                                <p className="text-sm text-white/70">Coba semua fitur premium secara gratis.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
