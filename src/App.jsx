import { useState } from "react";
import { COLORS } from "./data/constants";

import AnimatedBackground from "./components/AnimatedBackground";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import TerminalContact from "./components/TerminalContact";
import Footer from "./components/Footer";

export default function App() {
  const [lang, setLang] = useState("fr");

  return (
    <div style={{ minHeight: "100vh", position: "relative", background: COLORS.bg, color: COLORS.text }}>
      <AnimatedBackground />
      <Navbar lang={lang} setLang={setLang} />
      <main style={{ position: "relative", zIndex: 10 }}>
        <Hero lang={lang} />
        <About lang={lang} />
        <Projects lang={lang} />
        <Skills lang={lang} />
        <TerminalContact lang={lang} />
      </main>
      <Footer lang={lang} />
    </div>
  );
}
