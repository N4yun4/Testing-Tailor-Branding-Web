export type Garment = {
  index: string;
  title: string;
  origin: string;
  img: string;
  alt: string;
  feature?: boolean;
};

// Curated, verified couture imagery (kept intentionally — relevant to the craft).
export const garments: Garment[] = [
  {
    index: "01",
    title: "Furina",
    origin: "Genshin Impact",
    img: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/84/Cosplay_of_Furina%2C_Genshin_Impact.jpg/500px-Cosplay_of_Furina%2C_Genshin_Impact.jpg",
    alt: "Cosplay Furina dari Genshin Impact dalam setelan biru putih dengan pose elegan",
    feature: true,
  },
  {
    index: "02",
    title: "Hu tao",
    origin: "Genshin Impact",
    img: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/45/Cosplay_of_Hu_Tao_at_Cos-Gen_2022.jpg/500px-Cosplay_of_Hu_Tao_at_Cos-Gen_2022.jpg",
    alt: "Cosplay Hu Tao dari Genshin Impact menggunakan mantel gelap dengan topi ikoniknya di pelataran mall",
  },
  {
    index: "03",
    title: "Yae Miko",
    origin: "Genshin Impact",
    img: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e4/Kumo_as_Yae_Miko_sitting%2C_left_side_20221016b.jpg/500px-Kumo_as_Yae_Miko_sitting%2C_left_side_20221016b.jpg",
    alt: "Cosplay Yae Miko dari Genshin Impact berpose duduk menyamping mengenakan pakaian kuil merah-putih tradisional",
  },
  {
    index: "04",
    title: "Asuna SAO",
    origin: "Sword Art Online",
    img: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/32/Asuna_%2832300052106%29.jpg/500px-Asuna_%2832300052106%29.jpg",
    alt: "Cosplay Asuna dari Sword Art Online (SAO) dengan gaun merah putih bergaris",
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
