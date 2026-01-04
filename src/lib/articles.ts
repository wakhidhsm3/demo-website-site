export interface Article {
    id: string;
    slug: string;
    title: string;
    excerpt: string;
    content: string;
    category: string;
    author: string;
    date: string;
    image: string;
    readTime: string;
}

export const articles: Article[] = [
    {
        id: "1",
        slug: "tips-mempercantik-undangan-digital",
        title: "Tips Mempercantik Undangan Digital Anda",
        excerpt: "Temukan cara sederhana namun efektif untuk membuat undangan pernikahan digital Anda terlihat lebih premium dan personal.",
        content: `
            <p>Undangan pernikahan digital bukan sekadar link yang disebarkan. Ia adalah representasi pertama dari hari bahagia Anda. Berikut adalah beberapa tips untuk membuatnya tampil memukau:</p>
            <h3>1. Pilih Foto Berkualitas Tinggi</h3>
            <p>Gunakan foto pre-wedding dengan resolusi tinggi. Foto yang tajam memberikan kesan profesional dan premium pada undangan Anda.</p>
            <h3>2. Harmonisasi Warna</h3>
            <p>Sesuaikan warna undang dengan tema pernikahan Anda. Jika tema Anda adalah Sage Green, pilihlah elemen desain yang senada agar terlihat estetik.</p>
            <h3>3. Personalisasi Nama Tamu</h3>
            <p>Salah satu keunggulan Wedify adalah fitur personalisasi nama tamu. Gunakan fitur ini untuk memberikan kesan eksklusif bagi setiap penerima.</p>
            <h3>4. Musik yang Pas</h3>
            <p>Pilihlah musik latar yang menggambarkan karakter Anda dan pasangan. Pastikan musik tidak terlalu keras dan memiliki opsi untuk dimatikan (mute).</p>
        `,
        category: "Tips & Trik",
        author: "Admin Wedify",
        date: "20 Jan 2026",
        image: "https://images.unsplash.com/photo-1522673607200-164d1b6ce486?auto=format&fit=crop&q=80&w=1000",
        readTime: "5 Menit"
    },
    {
        id: "2",
        slug: "tren-undangan-pernikahan-2026",
        title: "Tren Undangan Pernikahan Digital 2026",
        excerpt: "Apa saja yang populer di tahun 2026? Dari desain minimalis hingga fitur interaktif terbaru, mari kita ulas selengkapnya.",
        content: `
            <p>Tahun 2026 membawa angin segar dalam dunia desain undangan digital. Berikut adalah tren yang sedang naik daun:</p>
            <h3>1. Minimalisme Elegan</h3>
            <p>Desain yang bersih dengan banyak ruang kosong (white space) kini lebih diminati daripada desain yang terlalu ramai dengan ornamen.</p>
            <h3>2. Animasi Micro-Interactions</h3>
            <p>Sentuhan animasi kecil saat tombol diklik atau saat halaman di-scroll memberikan pengalaman pengguna yang lebih hidup dan modern.</p>
            <h3>3. Fitur RSVP Terintegrasi</h3>
            <p>Kecepatan dan kemudahan dalam konfirmasi kehadiran menjadi prioritas utama bagi pasangan modern.</p>
            <h3>4. Dark Mode Aesthetics</h3>
            <p>Tampilan gelap yang mewah dengan aksen emas atau silver memberikan kesan futuristik namun tetap romantis.</p>
        `,
        category: "Tren",
        author: "Editor Wedify",
        date: "15 Jan 2026",
        image: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&q=80&w=1000",
        readTime: "4 Menit"
    },
    {
        id: "3",
        slug: "manfaat-undangan-digital-vs-fisik",
        title: "Manfaat Undangan Digital Dibandingkan Undangan Fisik",
        excerpt: "Mengapa semakin banyak pasangan memilih undangan digital? Simak perbandingan lengkapnya di sini.",
        content: `
            <p>Memilih antara undangan digital dan fisik bisa menjadi keputusan yang sulit. Namun, berikut adalah beberapa alasan mengapa undangan digital menjadi pilihan cerdas:</p>
            <h3>1. Ramah Lingkungan</h3>
            <p>Tanpa kertas dan tinta fisik, Anda berkontribusi dalam menjaga lingkungan. Pilihan yang tepat untuk pasangan eco-conscious.</p>
            <h3>2. Efisiensi Biaya</h3>
            <p>Anda bisa menghemat jutaan rupiah yang biasanya dialokasikan untuk cetak dan kirim fisik, dan mengalihkannya untuk kebutuhan pernikahan lainnya.</p>
            <h3>3. Update Informasi Real-time</h3>
            <p>Jika ada perubahan jadwal atau lokasi, Anda bisa langsung mengupdatenya tanpa perlu mencetak ulang.</p>
            <h3>4. Jangkauan Global</h3>
            <p>Kirimkan undangan ke seluruh dunia hanya dalam hitungan detik melalui pesan instan atau email.</p>
        `,
        category: "Edukasi",
        author: "Team Wedify",
        date: "10 Jan 2026",
        image: "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&q=80&w=1000",
        readTime: "6 Menit"
    },
    {
        id: "4",
        slug: "persiapan-pernikahan-hemat-biaya",
        title: "Strategi Persiapan Pernikahan Hemat Biaya",
        excerpt: "Menikah tidak harus mahal. Pelajari cara merencanakan pernikahan impian dengan anggaran yang efisien.",
        content: "<p>Persiapan pernikahan seringkali menjadi sumber stres finansial. Dengan perencanaan yang tepat, Anda bisa menghemat banyak.</p>",
        category: "Tips & Trik",
        author: "Admin Wedify",
        date: "05 Jan 2026",
        image: "https://images.unsplash.com/photo-1510076857177-7470076d4098?auto=format&fit=crop&q=80&w=1000",
        readTime: "7 Menit"
    },
    {
        id: "5",
        slug: "memilih-lagu-pernikahan-terbaik",
        title: "Daftar Lagu Pernikahan Terbaik Sepanjang Masa",
        excerpt: "Bingung memilih lagu untuk prosesi atau resepsi? Kami telah mengumpulkan playlist terbaik untuk Anda.",
        content: "<p>Musik menciptakan suasana. Pilihan lagu yang tepat akan membuat momen pernikahan Anda semakin romantis dan berkesan.</p>",
        category: "Inspirasi",
        author: "Editor Wedify",
        date: "01 Jan 2026",
        image: "https://images.unsplash.com/photo-1516280440614-37939bbacd81?auto=format&fit=crop&q=80&w=1000",
        readTime: "5 Menit"
    },
    {
        id: "6",
        slug: "pentingnya-rsvp-digital",
        title: "Kenapa Anda Harus Menggunakan RSVP Digital?",
        excerpt: "Manajemen tamu menjadi lebih mudah dengan RSVP digital. Lihat bagaimana fitur ini menghemat waktu Anda.",
        content: "<p>RSVP manual seringkali merepotkan. Dengan RSVP digital, semua data tersentralisasi dan mudah diakses kapan saja.</p>",
        category: "Edukasi",
        author: "Team Wedify",
        date: "28 Des 2025",
        image: "https://images.unsplash.com/photo-1515934751635-c81c6bc9a2d8?auto=format&fit=crop&q=80&w=1000",
        readTime: "4 Menit"
    },
    {
        id: "7",
        slug: "konsep-pernikahan-outdoor",
        title: "Panduan Lengkap Konsep Pernikahan Outdoor",
        excerpt: "Merencanakan pernikahan di luar ruangan membutuhkan persiapan ekstra. Ini hal-hal penting yang harus diperhatikan.",
        content: "<p>Pernikahan outdoor menawarkan pemandangan yang indah, namun cuaca dan logistik menjadi tantangan tersendiri.</p>",
        category: "Tren",
        author: "Editor Wedify",
        date: "25 Des 2025",
        image: "https://images.unsplash.com/photo-1469334031218-e382a71b716b?auto=format&fit=crop&q=80&w=1000",
        readTime: "8 Menit"
    },
    {
        id: "8",
        slug: "memilih-font-undangan-elegan",
        title: "Cara Memilih Kombinasi Font Undangan yang Elegan",
        excerpt: "Font menentukan nuansa undangan Anda. Pelajari cara mengombinasikan font agar terlihat mewah.",
        content: "<p>Pemilihan font adalah seni. Jangan gunakan terlalu banyak jenis font dalam satu desain undangan.</p>",
        category: "Inspirasi",
        author: "Admin Wedify",
        date: "20 Des 2025",
        image: "https://images.unsplash.com/photo-1508921234172-b68ed335b3e6?auto=format&fit=crop&q=80&w=1000",
        readTime: "6 Menit"
    }
];
