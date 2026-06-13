import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { COLORS, NAME, LINKS, CONTENT } from "../data/constants";

export default function Navbar({ lang, setLang }) {
  const [scrolled, setScrolled] = useState(false);
  const t = CONTENT[lang];

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const anchors = ["about", "projects", "skills", "contact"];

  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
      style={{
        position: "fixed", top: 0, left: 0, right: 0, zIndex: 50,
        padding: "1rem 1.5rem",
        display: "flex", alignItems: "center", justifyContent: "space-between",
        background: scrolled ? "rgba(6,9,21,0.92)" : "transparent",
        backdropFilter: scrolled ? "blur(16px)" : "none",
        borderBottom: scrolled ? `1px solid ${COLORS.border}` : "none",
        transition: "all 0.35s ease",
      }}
    >
      {/* Logo */}
      <motion.a
        href="#"
        style={{ fontFamily: "'Syne', sans-serif", color: COLORS.white, fontWeight: 800, fontSize: "0.875rem", textDecoration: "none" }}
        whileHover={{ color: COLORS.amber }}
        transition={{ duration: 0.2 }}
      >
        KW<span style={{ color: COLORS.amber }}>.</span>
      </motion.a>

      {/* Nav links */}
      <div style={{ display: "none" }} className="md:flex gap-8 items-center hidden">
        {t.navLinks.map((link, i) => (
          <motion.a
            key={link}
            href={`#${anchors[i]}`}
            style={{ color: COLORS.textDim, fontSize: "0.7rem", fontFamily: "'JetBrains Mono', monospace", letterSpacing: "0.2em", textTransform: "uppercase", textDecoration: "none" }}
            whileHover={{ color: COLORS.white }}
          >
            {link}
          </motion.a>
        ))}
      </div>

      <div style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}>
        {/* Language toggle */}
        <div style={{ display: "flex", alignItems: "center", borderRadius: "9999px", border: `1px solid ${COLORS.border}`, overflow: "hidden", fontSize: "0.7rem", fontFamily: "'JetBrains Mono', monospace" }}>
          {["fr", "en"].map((l) => (
            <button
              key={l}
              onClick={() => setLang(l)}
              style={{
                padding: "0.375rem 0.75rem",
                textTransform: "uppercase",
                letterSpacing: "0.1em",
                background: lang === l ? COLORS.amber : "transparent",
                color: lang === l ? COLORS.bg : COLORS.textMuted,
                fontWeight: lang === l ? 700 : 400,
                border: "none",
                cursor: "pointer",
                transition: "all 0.2s",
              }}
            >
              {l}
            </button>
          ))}
        </div>

        {/* GitHub */}
        <motion.a
          href={LINKS.github}
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          style={{
            display: "flex", alignItems: "center", gap: "0.5rem",
            padding: "0.5rem 1rem", borderRadius: "9999px",
            fontSize: "0.7rem", fontFamily: "'JetBrains Mono', monospace",
            border: `1px solid ${COLORS.border}`,
            color: COLORS.textDim,
            background: "rgba(255,255,255,0.02)",
            textDecoration: "none",
          }}
          className="hidden md:flex"
        >
          GitHub ↗
        </motion.a>
      </div>
    </motion.nav>
  );
}
