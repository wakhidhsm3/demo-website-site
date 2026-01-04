import type { Metadata } from "next";
import { ThemeCatalog } from "@/components/themes/theme-catalog";

export const metadata: Metadata = {
    title: "Katalog Tema - Wedify Invitation",
    description: "Jelajahi koleksi tema undangan pernikahan digital premium kami. Desain elegan, modern, dan dapat disesuaikan dengan gayamu.",
};

export default function ThemesPage() {
    return (
        <div className="pt-16">
            <ThemeCatalog />
        </div>
    );
}
