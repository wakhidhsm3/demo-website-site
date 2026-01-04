import Link from "next/link";
import { Facebook, Instagram, Twitter, Linkedin } from "lucide-react";

export function SiteFooter() {
    return (
        <footer className="bg-white border-t border-gray-100 pt-12 pb-22 md:pb-10">
            <div className="container mx-auto px-6 md:px-12 lg:px-20">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
                    {/* Brand Column */}
                    <div className="space-y-4">
                        <div className="flex items-center gap-3">
                            <div className="w-9 h-9 rounded-full bg-gray-900 flex items-center justify-center text-white font-bold text-xl shadow-lg ring-1 ring-gray-900">
                                W
                            </div>
                            <span className="font-bold text-2xl text-gray-900 tracking-tighter italic">Wedify</span>
                        </div>
                        <p className="text-gray-400 text-sm leading-relaxed max-w-[280px]">
                            Platform undangan pernikahan digital premium. Buat momen bahagiamu abadi dengan desain elegan dan fitur modern.
                        </p>
                    </div>

                    {/* Product Links */}
                    <div className="lg:pl-6">
                        <h4 className="font-bold text-gray-900 mb-5 uppercase tracking-widest text-xs">Product</h4>
                        <ul className="space-y-3 text-sm text-gray-400">
                            <li><Link href="#" className="hover:text-pink-600 transition-colors">Tema Premium</Link></li>
                            <li><Link href="#" className="hover:text-pink-600 transition-colors">Fitur Lengkap</Link></li>
                            <li><Link href="#" className="hover:text-pink-600 transition-colors">Harga Paket</Link></li>
                            <li><Link href="#" className="hover:text-pink-600 transition-colors">Portofolio</Link></li>
                        </ul>
                    </div>

                    {/* Support Links */}
                    <div className="lg:pl-6">
                        <h4 className="font-bold text-gray-900 mb-5 uppercase tracking-widest text-xs">Support</h4>
                        <ul className="space-y-3 text-sm text-gray-400">
                            <li><Link href="#" className="hover:text-pink-600 transition-colors">Help Center</Link></li>
                            <li><Link href="#" className="hover:text-pink-600 transition-colors">Privacy Policy</Link></li>
                            <li><Link href="#" className="hover:text-pink-600 transition-colors">Terms of Service</Link></li>
                        </ul>
                    </div>

                    {/* Social Media Column */}
                    <div className="lg:pl-6">
                        <h4 className="font-bold text-gray-900 mb-5 uppercase tracking-widest text-xs">Follow Us</h4>
                        <ul className="space-y-3">
                            {[
                                { icon: <Instagram size={14} />, label: "@wedify.id", href: "#" },
                                { icon: <Twitter size={14} />, label: "@wedify_id", href: "#" },
                                { icon: <Facebook size={14} />, label: "Wedify Indonesia", href: "#" },
                            ].map((social, i) => (
                                <li key={i}>
                                    <Link
                                        href={social.href}
                                        className="flex items-center gap-2.5 text-sm text-gray-400 hover:text-pink-600 group transition-all"
                                    >
                                        <div className="w-7 h-7 rounded-full bg-gray-50 flex items-center justify-center group-hover:bg-gray-900 group-hover:text-white transition-all border border-gray-100">
                                            {social.icon}
                                        </div>
                                        <span>{social.label}</span>
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                <div className="border-t border-gray-100 pt-10 flex flex-col items-center text-center gap-1.5">
                    <p className="text-sm text-gray-400 font-medium">
                        © 2026 Wedify Inc. All rights reserved.
                    </p>
                    <p className="text-sm text-gray-400 font-medium">
                        Made with ❤️ in Indonesia
                    </p>
                </div>
            </div>
        </footer>
    );
}
