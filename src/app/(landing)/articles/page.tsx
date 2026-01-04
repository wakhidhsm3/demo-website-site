import type { Metadata } from "next";
import { ArticleListPage } from "@/components/articles/article-list-page";

export const metadata: Metadata = {
    title: "Artikel & Inspirasi - Wedify Invitation",
    description: "Temukan tips, tren terbaru, dan inspirasi pernikahan di blog Wedify. Panduan lengkap untuk persiapan hari bahagiamu.",
};

export default function ArticlesPage() {
    return <ArticleListPage />;
}
