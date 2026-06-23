import { useState, type FormEvent } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { CheckCircle, CaretDown, ArrowUpRight } from "@phosphor-icons/react";
import { MagneticButton } from "./MagneticButton";
import { tiers, budgets, sizes } from "../data";

type Status = "idle" | "submitting" | "success";
type Errors = { nama?: string; whatsapp?: string; character?: string; budget?: string };

export function Commission() {
  const [nama, setNama] = useState("");
  const [whatsapp, setWhatsapp] = useState("");
  const [character, setCharacter] = useState("");
  const [tier, setTier] = useState(tiers[0]);
  const [size, setSize] = useState("M");
  const [budget, setBudget] = useState("");
  const [status, setStatus] = useState<Status>("idle");
  const [errors, setErrors] = useState<Errors>({});

  const reset = () => {
    setNama("");
    setWhatsapp("");
    setCharacter("");
    setTier(tiers[0]);
    setSize("M");
    setBudget("");
    setErrors({});
  };

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    const next: Errors = {};
    if (!nama.trim()) next.nama = "Isi nama lengkapmu, ya.";
    const digits = whatsapp.replace(/\D/g, "");
    if (!digits) next.whatsapp = "Isi nomor WhatsApp-mu, ya.";
    else if (digits.length < 9) next.whatsapp = "Nomor WhatsApp sepertinya kurang lengkap.";
    if (!character.trim()) next.character = "Isi nama karakter dan asalnya, ya.";
    if (!budget) next.budget = "Pilih kisaran budget dulu.";
    setErrors(next);
    if (Object.keys(next).length) return;

    setStatus("submitting");
    // Front-end demo — swap for a Formspree/Getform/WhatsApp endpoint.
    window.setTimeout(() => setStatus("success"), 1100);
  };

  const inputCls =
    "w-full rounded-[6px] border border-[var(--hairline)] bg-[var(--obsidian)] px-4 py-[0.85rem] text-[0.95rem] text-[var(--silk)] outline-none transition-[border-color,box-shadow] duration-300 placeholder:text-[var(--muted)]/70 focus:border-[var(--gold)] focus:shadow-[0_0_0_3px_rgba(var(--gold-rgb),0.12)]";
  const labelCls = "text-[0.74rem] uppercase tracking-[0.14em] text-[var(--muted)]";
  const errCls = "text-[0.78rem] text-[var(--gold)]";

  const pillCls = (active: boolean) =>
    `rounded-full border px-[1.05rem] py-[0.6rem] text-[0.8rem] transition-all duration-300 active:scale-[0.97] ${
      active
        ? "border-[var(--gold)] bg-[var(--gold)] text-[var(--on-gold)]"
        : "border-[var(--hairline)] bg-[var(--obsidian)] text-[var(--muted)] hover:border-[var(--gold)] hover:text-[var(--silk)]"
    }`;

  const GroupLabel = ({ children }: { children: string }) => (
    <div className="flex items-center gap-3 pt-1">
      <span className="text-[0.7rem] font-medium uppercase tracking-[0.2em] text-[var(--gold)]">{children}</span>
      <span aria-hidden className="h-px flex-1 bg-[var(--hairline-soft)]" />
    </div>
  );

  return (
    <section id="commission" className="relative">
      <div aria-hidden className="mx-auto h-px max-w-[1240px] bg-[var(--hairline-soft)]" />

      <div className="mx-auto grid max-w-[1240px] items-start gap-8 px-5 py-16 sm:px-8 md:grid-cols-[1fr_1.05fr] md:gap-20 md:py-32">
        <header className="md:sticky md:top-28">
          <p className="text-[0.72rem] font-medium uppercase tracking-[0.32em] text-[var(--muted)]">
            [ Buka Pesanan ]
          </p>
          <h2 className="mt-4 font-serif text-[clamp(2.1rem,5vw,3.4rem)] font-medium leading-[1.05] tracking-[-0.01em]">
            Wujudkan <span className="italic text-[var(--gold)]">Karaktermu</span>
          </h2>
          <p className="mt-5 max-w-[44ch] text-[var(--muted)]">
            Isi data diri dan detail kostumnya selengkap mungkin — makin lengkap, makin cepat
            kami bantu hitung dan carikan bahan yang pas.
          </p>
        </header>

        <div
          className="rounded-2xl border border-[var(--hairline)] bg-[var(--surface)] p-6 sm:p-9"
          style={{ boxShadow: "var(--shadow-diffuse), inset 0 1px 0 var(--glass-inner)" }}
        >
          <AnimatePresence mode="wait">
            {status === "success" ? (
              <motion.div
                key="success"
                initial={{ opacity: 0, scale: 0.97 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ type: "spring", stiffness: 120, damping: 18 }}
                className="flex min-h-[520px] flex-col items-center justify-center text-center"
              >
                <CheckCircle size={52} weight="thin" className="text-[var(--gold)]" />
                <h3 className="mt-5 font-serif text-[1.6rem] font-medium">Pesanan masuk!</h3>
                <p className="mt-3 max-w-[36ch] text-[var(--muted)]">
                  Terima kasih, <span className="text-[var(--silk)]">{nama.trim()}</span>! Pesanan
                  untuk <span className="text-[var(--silk)]">{character.trim()}</span> sudah kami
                  catat. Kami hubungi lewat WhatsApp dalam 3 hari kerja, ya.
                </p>
                <button
                  type="button"
                  onClick={() => setStatus("idle")}
                  className="mt-7 text-[0.82rem] tracking-[0.06em] text-[var(--gold)] underline-offset-4 hover:underline"
                >
                  Pesan lagi
                </button>
              </motion.div>
            ) : (
              <motion.form
                key="form"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onSubmit={onSubmit}
                noValidate
                className="flex flex-col gap-5"
              >
                <GroupLabel>Data Diri</GroupLabel>

                <div className="flex flex-col gap-2">
                  <label htmlFor="nama" className={labelCls}>Nama Lengkap</label>
                  <input
                    id="nama"
                    value={nama}
                    onChange={(e) => setNama(e.target.value)}
                    placeholder="mis. Sastia Ramadhani"
                    autoComplete="name"
                    className={inputCls}
                    aria-invalid={!!errors.nama}
                  />
                  {errors.nama && <span className={errCls}>{errors.nama}</span>}
                </div>

                <div className="flex flex-col gap-2">
                  <label htmlFor="whatsapp" className={labelCls}>Nomor WhatsApp</label>
                  <input
                    id="whatsapp"
                    type="tel"
                    inputMode="numeric"
                    value={whatsapp}
                    onChange={(e) => setWhatsapp(e.target.value)}
                    placeholder="mis. 0812-3456-7890"
                    autoComplete="tel"
                    className={inputCls}
                    aria-invalid={!!errors.whatsapp}
                  />
                  {errors.whatsapp && <span className={errCls}>{errors.whatsapp}</span>}
                </div>

                <GroupLabel>Detail Pesanan</GroupLabel>

                <div className="flex flex-col gap-2">
                  <label htmlFor="character" className={labelCls}>Nama Karakter &amp; Asalnya</label>
                  <input
                    id="character"
                    value={character}
                    onChange={(e) => setCharacter(e.target.value)}
                    placeholder="mis. Furina — Genshin Impact"
                    className={inputCls}
                    aria-invalid={!!errors.character}
                  />
                  {errors.character && <span className={errCls}>{errors.character}</span>}
                </div>

                <div className="flex flex-col gap-2">
                  <span className={labelCls}>Paket Kostum</span>
                  <div className="flex flex-wrap gap-2.5" role="radiogroup" aria-label="Paket kostum">
                    {tiers.map((t) => (
                      <button
                        type="button"
                        key={t}
                        role="radio"
                        aria-checked={t === tier}
                        onClick={() => setTier(t)}
                        className={pillCls(t === tier)}
                      >
                        {t}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="flex flex-col gap-2">
                  <div className="flex items-center justify-between gap-3">
                    <span className={labelCls}>Ukuran</span>
                    <a
                      href="#sizing"
                      className="flex items-center gap-1 text-[0.74rem] text-[var(--gold)] underline-offset-4 hover:underline"
                    >
                      Lihat panduan ukuran <ArrowUpRight size={12} weight="bold" />
                    </a>
                  </div>
                  <div className="flex flex-wrap gap-2.5" role="radiogroup" aria-label="Ukuran">
                    {sizes.map((s) => (
                      <button
                        type="button"
                        key={s}
                        role="radio"
                        aria-checked={s === size}
                        onClick={() => setSize(s)}
                        className={pillCls(s === size)}
                      >
                        {s}
                      </button>
                    ))}
                  </div>
                  {size === "Custom" && (
                    <span className="text-[0.78rem] text-[var(--muted)]">
                      Tulis ukuran badanmu (cm) di kolom catatan di bawah, ya.
                    </span>
                  )}
                </div>

                <div className="grid gap-5 sm:grid-cols-2">
                  <div className="flex flex-col gap-2">
                    <label htmlFor="deadline" className={labelCls}>Tanggal Acara / Deadline</label>
                    <input id="deadline" type="date" className={`${inputCls} [color-scheme:dark]`} />
                  </div>

                  <div className="flex flex-col gap-2">
                    <label htmlFor="budget" className={labelCls}>Kisaran Budget</label>
                    <div className="relative">
                      <select
                        id="budget"
                        value={budget}
                        onChange={(e) => setBudget(e.target.value)}
                        aria-invalid={!!errors.budget}
                        className={`${inputCls} cursor-pointer appearance-none pr-10 ${
                          budget ? "" : "text-[var(--muted)]/70"
                        }`}
                      >
                        <option value="" disabled>Pilih kisaran</option>
                        {budgets.map((b) => (
                          <option key={b} value={b} className="text-[var(--silk)]">{b}</option>
                        ))}
                      </select>
                      <CaretDown
                        size={15}
                        className="pointer-events-none absolute right-3.5 top-1/2 -translate-y-1/2 text-[var(--gold)]"
                      />
                    </div>
                    {errors.budget && <span className={errCls}>{errors.budget}</span>}
                  </div>
                </div>

                <div className="flex flex-col gap-2">
                  <label htmlFor="notes" className={labelCls}>
                    Catatan / Referensi <span className="lowercase tracking-normal opacity-70">(opsional)</span>
                  </label>
                  <textarea
                    id="notes"
                    rows={3}
                    placeholder="Referensi gambar, pilihan kain, ukuran custom, detail karakter…"
                    className={`${inputCls} min-h-[88px] resize-y`}
                  />
                </div>

                <MagneticButton type="submit" variant="solid" block strength={0.18} disabled={status === "submitting"}>
                  {status === "submitting" ? (
                    <span className="flex items-center gap-2">
                      <span className="h-3.5 w-3.5 animate-spin rounded-full border-[1.5px] border-[var(--on-gold)]/40 border-t-[var(--on-gold)]" />
                      Mengirim…
                    </span>
                  ) : (
                    "[ Kirim Pesanan ]"
                  )}
                </MagneticButton>

                <button
                  type="button"
                  onClick={reset}
                  className="-mt-1 self-center text-[0.76rem] text-[var(--muted)] underline-offset-4 transition-colors hover:text-[var(--silk)]"
                >
                  Bersihkan form
                </button>
              </motion.form>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
