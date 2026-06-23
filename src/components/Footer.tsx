import { InstagramLogo, WhatsappLogo, TiktokLogo, ArrowUpRight } from "@phosphor-icons/react";
import { navLinks, waLink } from "../data";

const waHref = waLink("Halo Atelier Noctra, saya mau tanya soal pesanan kostum.");

const socials = [
  { label: "Instagram", href: "https://instagram.com", Icon: InstagramLogo },
  { label: "WhatsApp", href: waHref, Icon: WhatsappLogo },
  { label: "TikTok", href: "https://tiktok.com", Icon: TiktokLogo },
];

const headingCls = "text-[0.7rem] font-medium uppercase tracking-[0.2em] text-[var(--gold)]";

export function Footer() {
  return (
    <footer className="relative">
      <div aria-hidden className="mx-auto h-px max-w-[1240px] bg-[var(--hairline-soft)]" />

      <div className="mx-auto max-w-[1240px] px-5 py-16 sm:px-8 md:py-20">
        <div className="grid gap-12 md:grid-cols-[1.6fr_1fr_1.1fr] md:gap-10">
          {/* Brand + socials */}
          <div>
            <a href="#top" className="font-serif text-[1.7rem] font-medium" aria-label="Atelier Noctra — beranda">
              Atelier <span className="italic text-[var(--gold)]">Noctra</span>
            </a>
            <p className="mt-4 max-w-[34ch] text-[0.92rem] leading-relaxed text-[var(--muted)]">
              Jahit kostum &amp; cosplay custom — rapi, pas di badan, dan harga ramah.
              Dari jaket sampai gaun, kami bantu wujudkan karaktermu.
            </p>
            <div className="mt-6 flex gap-3">
              {socials.map(({ label, href, Icon }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener"
                  aria-label={label}
                  className="grid h-11 w-11 place-items-center rounded-full border border-[var(--hairline)] text-[var(--silk)] transition-all duration-300 hover:-translate-y-0.5 hover:border-[var(--gold)] hover:text-[var(--gold)] active:scale-95"
                >
                  <Icon size={20} weight="regular" />
                </a>
              ))}
            </div>
          </div>

          {/* Navigation */}
          <nav aria-label="Tautan footer">
            <h3 className={headingCls}>Navigasi</h3>
            <ul className="mt-5 flex flex-col gap-3 text-[0.92rem]">
              {navLinks.map((l) => (
                <li key={l.href}>
                  <a
                    href={l.href}
                    className="group inline-flex items-center gap-1.5 text-[var(--muted)] transition-colors duration-300 hover:text-[var(--silk)]"
                  >
                    <span className="h-px w-0 bg-[var(--gold)] transition-all duration-300 group-hover:w-4" />
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* CTA */}
          <div>
            <h3 className={headingCls}>Mulai Pesan</h3>
            <p className="mt-5 max-w-[30ch] text-[0.92rem] leading-relaxed text-[var(--muted)]">
              Punya karakter incaran? Chat kami dulu — konsultasi &amp; estimasi gratis.
            </p>
            <a
              href={waHref}
              target="_blank"
              rel="noopener"
              className="mt-5 inline-flex items-center gap-2 rounded-[6px] border border-[var(--gold)] px-4 py-2.5 text-[0.82rem] font-medium tracking-[0.04em] text-[var(--silk)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[var(--gold)] hover:text-[var(--on-gold)] active:scale-[0.98]"
            >
              <WhatsappLogo size={17} weight="fill" />
              Chat via WhatsApp
              <ArrowUpRight size={13} weight="bold" />
            </a>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-14 flex flex-col gap-3 border-t border-[var(--hairline-soft)] pt-6 sm:flex-row sm:items-center sm:justify-between md:mt-16">
          <p className="text-[0.82rem] text-[var(--muted)]">
            &copy; {new Date().getFullYear()} Atelier Noctra.
            <span className="ml-1.5 font-serif italic text-[var(--gold)]">
              &ldquo;Tuhan ada di setiap jahitan.&rdquo;
            </span>
          </p>
          <p className="text-[0.78rem] tracking-[0.04em] text-[var(--muted)]">
            Dijahit dengan teliti di Indonesia.
          </p>
        </div>
      </div>
    </footer>
  );
}
