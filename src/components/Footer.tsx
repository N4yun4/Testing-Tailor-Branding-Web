const links = [
  { label: "Instagram", href: "https://instagram.com" },
  { label: "X", href: "https://x.com" },
  { label: "TikTok", href: "https://tiktok.com" },
  { label: "Panduan Ukuran", href: "#sizing" },
];

export function Footer() {
  return (
    <footer className="relative">
      <div aria-hidden className="mx-auto h-px max-w-[1240px] bg-[var(--hairline-soft)]" />
      <div className="mx-auto flex max-w-[1240px] flex-col items-start justify-between gap-6 px-5 py-12 sm:px-8 md:flex-row md:items-center md:py-16">
        <p className="text-[0.85rem] text-[var(--muted)]">
          &copy; {new Date().getFullYear()} Atelier Noctra.
          <span className="ml-1.5 font-serif italic text-[var(--gold)]">
            &ldquo;Tuhan ada di setiap jahitan.&rdquo;
          </span>
        </p>
        <nav className="flex flex-wrap gap-x-7 gap-y-2 text-[0.85rem]" aria-label="Tautan footer">
          {links.map((l) => (
            <a
              key={l.label}
              href={l.href}
              target={l.href.startsWith("http") ? "_blank" : undefined}
              rel={l.href.startsWith("http") ? "noopener" : undefined}
              className="text-[var(--muted)] transition-colors duration-300 hover:text-[var(--silk)]"
            >
              {l.label}
            </a>
          ))}
        </nav>
      </div>
    </footer>
  );
}
