import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { COLORS, NAME, LINKS, CONTENT } from "../data/constants";

function TypewriterText({ words }) {
  const [idx, setIdx] = useState(0);
  const [displayed, setDisplayed] = useState("");
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const word = words[idx];
    let timeout;
    if (!deleting && displayed.length < word.length) {
      timeout = setTimeout(() => setDisplayed(word.slice(0, displayed.length + 1)), 75);
    } else if (!deleting && displayed.length === word.length) {
      timeout = setTimeout(() => setDeleting(true), 2200);
    } else if (deleting && displayed.length > 0) {
      timeout = setTimeout(() => setDisplayed(displayed.slice(0, -1)), 38);
    } else if (deleting && displayed.length === 0) {
      setDeleting(false);
      setIdx((prev) => (prev + 1) % words.length);
    }
    return () => clearTimeout(timeout);
  }, [displayed, deleting, idx, words]);

  return (
    <span>
      <span style={{ color: COLORS.amber }}>{displayed}</span>
      <motion.span
        animate={{ opacity: [1, 0, 1] }}
        transition={{ duration: 0.75, repeat: Infinity }}
        style={{ color: COLORS.amberDim }}
      >
        _
      </motion.span>
    </span>
  );
}

export default function Hero({ lang }) {
  const t = CONTENT[lang];

  return (
    <section style={{ position: "relative", minHeight: "100vh", display: "flex", alignItems: "center", padding: "6rem 1.5rem 4rem" }}>
      {/* Horizontal amber accent line */}
      <motion.div
        style={{
          position: "absolute", left: 0, right: 0, top: "42%",
          height: "1px",
          background: `linear-gradient(90deg, transparent 0%, ${COLORS.amber}28 30%, ${COLORS.amber}14 70%, transparent 100%)`,
          pointerEvents: "none",
        }}
        initial={{ scaleX: 0, opacity: 0 }}
        animate={{ scaleX: 1, opacity: 1 }}
        transition={{ delay: 1.2, duration: 1.4, ease: "easeOut" }}
      />

      <div style={{ maxWidth: "72rem", width: "100%", margin: "0 auto" }}>
        {/* Available badge */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          style={{
            display: "inline-flex", alignItems: "center", gap: "0.625rem",
            padding: "0.5rem 1rem", borderRadius: "9999px",
            fontSize: "0.7rem", fontFamily: "'JetBrains Mono', monospace",
            border: `1px solid ${COLORS.amber}30`,
            color: COLORS.textDim,
            background: `${COLORS.amber}08`,
            marginBottom: "2.5rem",
          }}
        >
          <motion.span
            style={{ width: 6, height: 6, borderRadius: "50%", background: "#22c55e", display: "inline-block" }}
            animate={{ opacity: [1, 0.3, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
          {t.heroAvailable}
        </motion.div>

        {/* Name — editorial split */}
        <div style={{ position: "relative", marginBottom: "1.5rem" }}>
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.35, duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
            style={{
              fontFamily: "'Syne', sans-serif",
              fontSize: "clamp(3.5rem, 11vw, 9rem)",
              fontWeight: 800,
              lineHeight: 1,
              letterSpacing: "-0.02em",
              color: COLORS.white,
              margin: 0,
            }}
          >
            Kevin
          </motion.h1>
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.48, duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
            style={{
              fontFamily: "'Syne', sans-serif",
              fontSize: "clamp(3.5rem, 11vw, 9rem)",
              fontWeight: 800,
              lineHeight: 1,
              letterSpacing: "-0.02em",
              WebkitTextStroke: `2px ${COLORS.white}`,
              color: "transparent",
              margin: 0,
            }}
          >
            William
          </motion.h1>

          {/* Amber slash accent — desktop only */}
          <motion.div
            className="hidden md:block"
            style={{
              position: "absolute",
              right: "8%", top: "15%",
              width: "3px", height: "58%",
              background: COLORS.amber,
              transform: "rotate(12deg)",
              transformOrigin: "top center",
            }}
            initial={{ scaleY: 0, opacity: 0 }}
            animate={{ scaleY: 1, opacity: 1 }}
            transition={{ delay: 0.9, duration: 0.5 }}
          />
        </div>

        {/* Typewriter role */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
          style={{
            fontSize: "clamp(1rem, 2.5vw, 1.75rem)",
            fontFamily: "'JetBrains Mono', monospace",
            color: COLORS.textDim,
            marginBottom: "2rem",
          }}
        >
          {t.bioIntro}<TypewriterText words={t.roleWords} />
        </motion.div>

        {/* Bio */}
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.88 }}
          style={{
            fontSize: "0.875rem",
            maxWidth: "36rem",
            marginBottom: "3rem",
            lineHeight: 1.75,
            color: COLORS.textDim,
            fontFamily: "'JetBrains Mono', monospace",
          }}
        >
          {t.bio}
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.05 }}
          style={{ display: "flex", flexWrap: "wrap", gap: "1rem", alignItems: "center" }}
        >
          <motion.a
            href="#projects"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            style={{
              display: "inline-flex", alignItems: "center", gap: "0.5rem",
              padding: "0.875rem 1.75rem", borderRadius: "9999px",
              fontFamily: "'Syne', sans-serif", fontWeight: 700, fontSize: "0.875rem",
              background: COLORS.amber, color: COLORS.bg,
              textDecoration: "none",
            }}
          >
            {t.heroCta} →
          </motion.a>
          <motion.a
            href={LINKS.github}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.03 }}
            style={{
              display: "inline-flex", alignItems: "center", gap: "0.5rem",
              padding: "0.875rem 1.75rem", borderRadius: "9999px",
              fontFamily: "'JetBrains Mono', monospace", fontSize: "0.875rem",
              border: `1px solid ${COLORS.border}`,
              color: COLORS.textDim,
              textDecoration: "none",
            }}
          >
            GitHub ↗
          </motion.a>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.8 }}
        style={{
          position: "absolute", bottom: "2.5rem", left: "50%",
          transform: "translateX(-50%)",
          display: "flex", flexDirection: "column", alignItems: "center", gap: "0.5rem",
        }}
      >
        <span style={{ fontSize: "0.65rem", fontFamily: "'JetBrains Mono', monospace", letterSpacing: "0.25em", textTransform: "uppercase", color: COLORS.textMuted }}>
          scroll
        </span>
        <motion.div
          style={{ width: "1px", height: "2.5rem", background: `linear-gradient(to bottom, ${COLORS.amber}60, transparent)` }}
          animate={{ scaleY: [0, 1, 0], originY: 0 }}
          transition={{ duration: 1.6, repeat: Infinity }}
        />
      </motion.div>
    </section>
  );
}
