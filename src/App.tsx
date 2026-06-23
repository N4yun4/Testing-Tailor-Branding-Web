import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { Vault } from "./components/Vault";
import { Craft } from "./components/Craft";
import { Commission } from "./components/Commission";
import { SizingGuide } from "./components/SizingGuide";
import { Footer } from "./components/Footer";

export default function App() {
  return (
    <>
      {/* fixed grain overlay — never on a scrolling container (perf guardrail) */}
      <div aria-hidden className="grain pointer-events-none fixed inset-0 z-[60] opacity-[0.035] mix-blend-overlay" />
      <Header />
      <main>
        <Hero />
        <Vault />
        <Craft />
        <Commission />
        <SizingGuide />
      </main>
      <Footer />
    </>
  );
}
