import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { COLORS, CONTENT } from "../data/constants";

const fadeUp = { hidden: { opacity: 0, y: 28 }, visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] } } };
const stagger = { visible: { transition: { staggerChildren: 0.12 } } };

export default function About({ lang }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const t = CONTENT[lang];

  return (
    <section id="about" ref={ref} style={{ padding: "8rem 1.5rem" }}>
      <div style={{ maxWidth: "72rem", margin: "0 auto" }}>
        <motion.div variants={stagger} initial="hidden" animate={inView ? "visible" : "hidden"}>
          <motion.p
            variants={fadeUp}
            style={{ fontSize: "0.65rem", fontFamily: "'JetBrains Mono', monospace", letterSpacing: "0.3em", textTransform: "uppercase", color: COLORS.amber, marginBottom: "0.75rem" }}
          >
            {lang === "fr" ? "À propos" : "About"}
          </motion.p>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 28rem), 1fr))", gap: "4rem", alignItems: "start" }}>
            {/* Left */}
            <div>
              <motion.h2
                variants={fadeUp}
                style={{ fontFamily: "'Syne', sans-serif", fontSize: "clamp(2rem, 4vw, 3.5rem)", fontWeight: 800, lineHeight: 1.1, color: COLORS.white, marginBottom: "2rem" }}
              >
                {t.aboutTitle}
              </motion.h2>
              <motion.p
                variants={fadeUp}
                style={{ fontSize: "0.8rem", lineHeight: 1.8, color: COLORS.textDim, fontFamily: "'JetBrains Mono', monospace", marginBottom: "2rem" }}
              >
                {t.bio}
              </motion.p>

              {/* Info rows */}
              <motion.div variants={fadeUp}>
                {t.aboutItems.map(([label, value], i) => (
                  <div
                    key={label}
                    style={{
                      display: "flex", alignItems: "center", justifyContent: "space-between",
                      padding: "0.75rem 0",
                      borderBottom: `1px solid ${COLORS.border}`,
                    }}
                  >
                    <span style={{ fontSize: "0.65rem", fontFamily: "'JetBrains Mono', monospace", letterSpacing: "0.15em", textTransform: "uppercase", color: COLORS.textMuted }}>{label}</span>
                    <span style={{ fontSize: "0.8rem", fontFamily: "'JetBrains Mono', monospace", color: COLORS.textDim }}>{value}</span>
                  </div>
                ))}
              </motion.div>
            </div>

            {/* Right — stats bento */}
            <motion.div
              variants={stagger}
              style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1px", background: COLORS.border }}
            >
              {t.stats.map((stat) => (
                <motion.div
                  key={stat.label}
                  variants={fadeUp}
                  whileHover={{ background: COLORS.bgCardHover }}
                  style={{
                    padding: "2rem",
                    display: "flex", flexDirection: "column", justifyContent: "space-between",
                    background: COLORS.bgCard,
                    cursor: "default",
                    transition: "background 0.2s",
                  }}
                >
                  <div style={{ fontFamily: "'Syne', sans-serif", fontSize: "clamp(2.5rem, 4vw, 3.5rem)", fontWeight: 800, lineHeight: 1, color: COLORS.amber, marginBottom: "1rem" }}>
                    {stat.num}
                  </div>
                  <div style={{ fontSize: "0.65rem", fontFamily: "'JetBrains Mono', monospace", letterSpacing: "0.15em", textTransform: "uppercase", color: COLORS.textMuted }}>
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
