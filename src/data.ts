export type Garment = {
  index: string;
  title: string;
  origin: string;
  img: string;
  alt: string;
  feature?: boolean;
};

// Foto kostum/busana saja (tanpa model). Ganti dengan foto kostum hasil
// jahitanmu sendiri di /public untuk portofolio yang sesungguhnya.
export const garments: Garment[] = [
  {
    index: "01",
    title: "Furina",
    origin: "Genshin Impact",
    img: "https://images.unsplash.com/photo-1551232864-3f0890e580d9?q=80&w=1200&auto=format&fit=crop",
    alt: "Rak kostum dan busana terstruktur di atelier, tanpa model",
    feature: true,
  },
  {
    index: "02",
    title: "Hu tao",
    origin: "Genshin Impact",
    img: "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?q=80&w=900&auto=format&fit=crop",
    alt: "Koleksi busana tergantung rapi pada gantungan, tanpa model",
  },
  {
    index: "03",
    title: "Yae Miko",
    origin: "Genshin Impact",
    img: "https://images.unsplash.com/photo-1558769132-cb1aea458c5e?q=80&w=900&auto=format&fit=crop",
    alt: "Busana digantung pada dinding bertekstur, tanpa model",
  },
  {
    index: "04",
    title: "Asuna SAO",
    origin: "Sword Art Online",
    img: "https://images.unsplash.com/photo-1576995853123-5a10305d93c0?q=80&w=1200&auto=format&fit=crop",
    alt: "Busana tergantung pada gantungan kayu, tanpa model",
    feature: true,
  },
];

export type CraftStep = {
  index: string;
  title: string;
  copy: string;
  points: string[];
};

export const craftSteps: CraftStep[] = [
  {
    index: "01",
    title: "Pola & Pengepasan",
    copy: "Kami buat pola sesuai ukuran badanmu, lalu pengepasan dulu supaya hasilnya benar-benar pas dan nyaman dipakai berjam-jam saat event.",
    points: ["Pola sesuai ukuran badan", "Pengepasan sebelum dijahit", "Nyaman dipakai seharian"],
  },
  {
    index: "02",
    title: "Bahan & Konstruksi",
    copy: "Bahan kami pilih sesuai karakter dan budget-mu — dari drill, satin, sampai brokat. Bagian yang perlu tegak dikasih struktur biar bentuknya rapi dan tahan dipakai.",
    points: ["Bahan menyesuaikan budget", "Struktur di bagian yang perlu", "Jahitan kuat & rapi"],
  },
  {
    index: "03",
    title: "Detail & Finishing",
    copy: "Detail kecil yang bikin kostum hidup: aksen, bordir, dan finishing rapi. Kami kerjakan sampai semirip mungkin dengan referensi karaktermu.",
    points: ["Detail & aksen karakter", "Finishing rapi", "Gratis revisi sampai pas"],
  },
];

export const tiers = [
  "Kostum Lengkap (1 Set)",
  "Atasan / Gaun Saja",
  "Bagian Tertentu Saja",
];

export const budgets = [
  "Rp 100k – Rp 500k",
  "Rp 500k – Rp 1,5jt",
  "Rp 1,5jt – Rp 3jt",
  "Rp 3jt – Rp 5jt",
];

// NOTE: ganti angka ini dengan data aslimu biar tetap jujur.
export const heroStats = [
  { value: "50+", label: "kostum selesai" },
  { value: "Gratis", label: "revisi sampai pas" },
  { value: "100%", label: "jahit tangan & mesin" },
];

export const navLinks = [
  { href: "#archive", label: "Galeri" },
  { href: "#craft", label: "Proses" },
  { href: "#commission", label: "Pemesanan" },
  { href: "#sizing", label: "Panduan Ukuran" },
];
