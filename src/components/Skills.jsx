import { useState, useRef } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";
import { COLORS, SKILLS, SKILLS_MARQUEE, CONTENT } from "../data/constants";
import { IconGlobe, IconServer, IconWrench } from "../icons/Icons";

const fadeUp = { hidden: { opacity: 0, y: 28 }, visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] } } };
const stagger = { visible: { transition: { staggerChildren: 0.1 } } };

function SkillBar({ skill, delay }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: -16 }}
      animate={inView ? { opacity: 1, x: 0 } : {}}
      transition={{ delay, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}
    >
      <div style={{ display: "flex", justifyContent: "space-between", fontSize: "0.75rem", fontFamily: "'JetBrains Mono', monospace" }}>
        <span style={{ color: COLORS.textDim }}>{skill.name}</span>
        <span style={{ color: COLORS.textMuted }}>{skill.level}%</span>
      </div>
      <div style={{ height: "2px", borderRadius: "9999px", overflow: "hidden", background: COLORS.border }}>
        <motion.div
          style={{ height: "100%", borderRadius: "9999px", background: `linear-gradient(90deg, ${COLORS.amber}, ${COLORS.amberDim})` }}
          initial={{ width: 0 }}
          animate={inView ? { width: `${skill.level}%` } : {}}
          transition={{ duration: 1.1, delay: delay + 0.2, ease: "easeOut" }}
        />
      </div>
    </motion.div>
  );
}

function Marquee() {
  const items = [...SKILLS_MARQUEE, ...SKILLS_MARQUEE];
  return (
    <div style={{ overflow: "hidden", padding: "1.5rem 0", borderTop: `1px solid ${COLORS.border}`, borderBottom: `1px solid ${COLORS.border}` }}>
      <motion.div
        style={{ display: "flex", gap: "2.5rem", whiteSpace: "nowrap" }}
        animate={{ x: [0, -(50 * SKILLS_MARQUEE.length)] }}
        transition={{ duration: 22, repeat: Infinity, ease: "linear" }}
      >
        {items.map((s, i) => (
          <span
            key={i}
            style={{
              fontSize: "0.65rem",
              fontFamily: "'JetBrains Mono', monospace",
              letterSpacing: "0.2em",
              textTransform: "uppercase",
              flexShrink: 0,
              color: i % 4 === 0 ? COLORS.amber : COLORS.textMuted,
            }}
          >
            {s} <span style={{ color: COLORS.border, marginLeft: "0.5rem" }}>·</span>
          </span>
        ))}
      </motion.div>
    </div>
  );
}

export default function Skills({ lang }) {
  const [activeTab, setActiveTab] = useState("Frontend");
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const t = CONTENT[lang];

  const CATEGORY_ICONS = {
    Frontend: <IconGlobe size={13} />,
    Backend: <IconServer size={13} />,
    Outils: <IconWrench size={13} />,
  };

  return (
    <section id="skills" ref={ref} style={{ paddingBottom: "8rem" }}>
      <Marquee />

      <div style={{ maxWidth: "52rem", margin: "0 auto", padding: "6rem 1.5rem 0" }}>
        <motion.div variants={stagger} initial="hidden" animate={inView ? "visible" : "hidden"}>
          <motion.p
            variants={fadeUp}
            style={{ fontSize: "0.65rem", fontFamily: "'JetBrains Mono', monospace", letterSpacing: "0.3em", textTransform: "uppercase", color: COLORS.amber, marginBottom: "0.75rem" }}
          >
            {lang === "fr" ? "Compétences" : "Skills"}
          </motion.p>
          <motion.h2
            variants={fadeUp}
            style={{ fontFamily: "'Syne', sans-serif", fontSize: "clamp(2rem, 4vw, 3.5rem)", fontWeight: 800, lineHeight: 1.1, color: COLORS.white, marginBottom: "3rem" }}
          >
            {t.skillsTitle}
          </motion.h2>

          {/* Tab pills */}
          <motion.div variants={fadeUp} style={{ display: "flex", gap: "0.5rem", flexWrap: "wrap", marginBottom: "2.5rem" }}>
            {Object.keys(SKILLS).map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveTab(cat)}
                style={{
                  display: "inline-flex", alignItems: "center", gap: "0.4rem",
                  padding: "0.5rem 1rem",
                  borderRadius: "9999px",
                  fontSize: "0.7rem",
                  fontFamily: "'JetBrains Mono', monospace",
                  border: `1px solid ${activeTab === cat ? COLORS.amber : COLORS.border}`,
                  color: activeTab === cat ? COLORS.bg : COLORS.textMuted,
                  background: activeTab === cat ? COLORS.amber : "transparent",
                  fontWeight: activeTab === cat ? 700 : 400,
                  cursor: "pointer",
                  transition: "all 0.2s",
                }}
              >
                {CATEGORY_ICONS[cat]}
                {t.skillsCategories[cat] || cat}
              </button>
            ))}
          </motion.div>

          {/* Skill bars */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2 }}
              style={{
                display: "flex", flexDirection: "column", gap: "1.5rem",
                padding: "2rem",
                borderRadius: "1rem",
                border: `1px solid ${COLORS.border}`,
                background: COLORS.bgCard,
              }}
            >
              {SKILLS[activeTab].map((skill, i) => (
                <SkillBar key={skill.name} skill={skill} delay={i * 0.07} />
              ))}
            </motion.div>
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
