import type { Metadata } from "next";
import { articles } from "@/lib/articles";
import { ArticleDetailContent } from "@/components/articles/article-detail-content";
import Link from "next/link";
import { ArrowLeft, Search } from "lucide-react";
import Image from "next/image";

interface ArticleDetailPageProps {
    params: Promise<{
        slug: string;
    }>;
}

export async function generateMetadata(props: ArticleDetailPageProps): Promise<Metadata> {
    const params = await props.params;
    const slug = params.slug;
    const article = articles.find((a) => a.slug === slug);

    if (!article) {
        return {
            title: "Artikel Tidak Ditemukan - Wedify",
        };
    }

    return {
        title: `${article.title} - Wedify Articles`,
        description: article.excerpt,
    };
}

export default async function ArticleDetailPage(props: ArticleDetailPageProps) {
    const params = await props.params;
    const { slug } = params;
    const article = articles.find((a) => a.slug === slug);

    if (!article) {
        const recommendedArticles = articles.slice(0, 3);

        return (
            <div className="min-h-screen pt-32 pb-20 bg-gradient-to-b from-pink-50/50 via-white to-white">
                <div className="container px-6 mx-auto">
                    {/* Hero Section */}
                    <div className="max-w-2xl mx-auto text-center mb-20">
                        <div className="relative w-40 h-40 mx-auto mb-8 rounded-full bg-white p-2 shadow-xl shadow-pink-100 ring-1 ring-pink-50">
                            <div className="w-full h-full rounded-full overflow-hidden relative">
                                <Image
                                    src="https://images.unsplash.com/photo-1510076857177-7470076d4098?q=80&w=600&auto=format&fit=crop"
                                    alt="Article Not Found"
                                    fill
                                    className="object-cover opacity-90 hover:scale-110 transition-transform duration-700"
                                />
                            </div>
                            <div className="absolute -bottom-2 -right-2 bg-white p-2 rounded-full shadow-lg">
                                <Search className="w-5 h-5 text-pink-600" />
                            </div>
                        </div>

                        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 tracking-tight font-heading">
                            Artikel Tidak Ditemukan
                        </h1>

                        <p className="text-gray-500 text-lg leading-relaxed mb-10 max-w-md mx-auto">
                            Halaman yang Anda cari mungkin telah dipindahkan atau tidak tersedia saat ini.
                        </p>

                        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                            <Link
                                href="/articles"
                                className="w-full sm:w-auto px-8 py-3.5 rounded-full bg-pink-600 text-white font-bold hover:bg-pink-700 hover:shadow-lg hover:shadow-pink-200 transition-all active:scale-95 flex items-center justify-center gap-2"
                            >
                                <ArrowLeft className="w-4 h-4" />
                                Lihat Semua Artikel
                            </Link>
                            <Link
                                href="/"
                                className="w-full sm:w-auto px-8 py-3.5 rounded-full bg-white text-gray-700 font-bold border border-gray-200 hover:bg-gray-50 hover:border-gray-300 transition-all active:scale-95 flex items-center justify-center"
                            >
                                Kembali ke Beranda
                            </Link>
                        </div>
                    </div>

                    {/* Divider */}
                    <div className="relative py-8 mb-12">
                        <div className="absolute inset-0 flex items-center">
                            <div className="w-full border-t border-gray-100"></div>
                        </div>
                        <div className="relative flex justify-center text-xs uppercase tracking-widest text-gray-400 font-semibold">
                            <span className="bg-white px-4">Mungkin Anda Suka</span>
                        </div>
                    </div>

                    {/* Recommended Articles */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
                        {recommendedArticles.map((item) => (
                            <Link
                                key={item.id}
                                href={`/articles/${item.slug}`}
                                className="group block bg-white rounded-2xl overflow-hidden hover:shadow-xl hover:shadow-pink-100/50 transition-all duration-300 border border-gray-100 hover:border-pink-100 hover:-translate-y-1"
                            >
                                <div className="relative aspect-[16/10] overflow-hidden">
                                    <Image
                                        src={item.image}
                                        alt={item.title}
                                        fill
                                        className="object-cover group-hover:scale-105 transition-transform duration-700"
                                    />
                                    <div className="absolute top-4 left-4">
                                        <span className="bg-white/90 backdrop-blur text-xs font-bold px-3 py-1 rounded-full shadow-sm text-gray-900">
                                            {item.category}
                                        </span>
                                    </div>
                                </div>
                                <div className="p-6">
                                    <div className="flex items-center gap-2 text-xs text-gray-400 mb-3 font-medium">
                                        <span className="text-pink-600">{item.author}</span>
                                        <span>•</span>
                                        <span>{item.date}</span>
                                    </div>
                                    <h3 className="text-lg font-bold text-gray-900 mb-2 leading-snug group-hover:text-pink-600 transition-colors line-clamp-2">
                                        {item.title}
                                    </h3>
                                    <p className="text-gray-500 text-sm line-clamp-2 leading-relaxed">
                                        {item.excerpt}
                                    </p>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </div>
        );
    }

    return <ArticleDetailContent article={article} />;
}
