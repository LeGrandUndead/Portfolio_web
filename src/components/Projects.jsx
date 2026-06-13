import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { COLORS, PROJECTS, CONTENT } from "../data/constants";
import { IconLink, IconExternalLink } from "../icons/Icons";

const fadeUp = { hidden: { opacity: 0, y: 28 }, visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] } } };
const stagger = { visible: { transition: { staggerChildren: 0.1 } } };

const TAG_PALETTES = [
  { bg: `${COLORS.amber}12`, border: `${COLORS.amber}35`, color: COLORS.amber },
  { bg: "rgba(99,102,241,0.10)", border: "rgba(99,102,241,0.30)", color: "#818cf8" },
  { bg: "rgba(20,200,160,0.08)", border: "rgba(20,200,160,0.25)", color: "#34d399" },
];

function ProjectCard({ project, index, lang }) {
  const isLarge = project.size === "large";
  const palette = TAG_PALETTES[index % TAG_PALETTES.length];
  const [hovered, setHovered] = useRef ? [false, () => {}] : [false, () => {}];

  return (
    <motion.article
      variants={fadeUp}
      whileHover={{ y: -4 }}
      onHoverStart={() => {}}
      style={{
        position: "relative",
        display: "flex", flexDirection: "column",
        border: `1px solid ${COLORS.border}`,
        borderRadius: "1rem",
        overflow: "hidden",
        cursor: "default",
        background: COLORS.bgCard,
        minHeight: isLarge ? 280 : 220,
        gridColumn: isLarge ? "span 2" : "span 1",
        transition: "border-color 0.3s, box-shadow 0.3s",
      }}
      className="project-card"
    >
      {/* Left edge glow on hover (CSS handles it via group) */}
      <div style={{ padding: "1.5rem 2rem", display: "flex", flexDirection: "column", flex: 1 }}>
        {/* Header */}
        <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", marginBottom: "1.25rem" }}>
          <div>
            <div style={{ fontSize: "0.65rem", fontFamily: "'JetBrains Mono', monospace", letterSpacing: "0.2em", color: COLORS.amber, marginBottom: "0.4rem" }}>
              {String(index + 1).padStart(2, "0")}
            </div>
            <h3 style={{ fontFamily: "'Syne', sans-serif", fontSize: "1.1rem", fontWeight: 800, color: COLORS.white, margin: 0 }}>
              {project.title}
            </h3>
          </div>
          <div style={{ display: "flex", gap: "0.75rem", marginLeft: "1rem", flexShrink: 0 }}>
            {project.github && (
              <motion.a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.15, color: COLORS.white }}
                onClick={(e) => e.stopPropagation()}
                style={{ color: COLORS.textMuted, textDecoration: "none" }}
              >
                <IconLink size={16} />
              </motion.a>
            )}
            {project.live && (
              <motion.a
                href={project.live}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.15, color: COLORS.white }}
                style={{ color: COLORS.textMuted }}
                onClick={(e) => e.stopPropagation()}
              >
                <IconExternalLink size={16} />
              </motion.a>
            )}
          </div>
        </div>

        <p style={{ fontSize: "0.78rem", lineHeight: 1.75, color: COLORS.textDim, fontFamily: "'JetBrains Mono', monospace", flex: 1, marginBottom: "1.5rem" }}>
          {project.description[lang]}
        </p>

        {/* Tags */}
        <div style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem", marginTop: "auto" }}>
          {project.tags.map((tag) => (
            <span
              key={tag}
              style={{
                padding: "0.25rem 0.625rem",
                borderRadius: "0.375rem",
                fontSize: "0.65rem",
                fontFamily: "'JetBrains Mono', monospace",
                border: `1px solid ${palette.border}`,
                background: palette.bg,
                color: palette.color,
              }}
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </motion.article>
  );
}

export default function Projects({ lang }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const t = CONTENT[lang];

  return (
    <section id="projects" ref={ref} style={{ padding: "8rem 1.5rem" }}>
      <div style={{ maxWidth: "72rem", margin: "0 auto" }}>
        <motion.div variants={stagger} initial="hidden" animate={inView ? "visible" : "hidden"}>
          <motion.p
            variants={fadeUp}
            style={{ fontSize: "0.65rem", fontFamily: "'JetBrains Mono', monospace", letterSpacing: "0.3em", textTransform: "uppercase", color: COLORS.amber, marginBottom: "0.75rem" }}
          >
            {lang === "fr" ? "Projets" : "Work"}
          </motion.p>
          <motion.h2
            variants={fadeUp}
            style={{ fontFamily: "'Syne', sans-serif", fontSize: "clamp(2rem, 4vw, 3.5rem)", fontWeight: 800, lineHeight: 1.1, color: COLORS.white, marginBottom: "4rem" }}
          >
            {t.projectsTitle}
          </motion.h2>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: "1rem" }} className="projects-grid">
            {PROJECTS.map((project, i) => (
              <ProjectCard key={project.id} project={project} index={i} lang={lang} />
            ))}
          </div>
        </motion.div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .projects-grid { grid-template-columns: 1fr !important; }
          .projects-grid article { grid-column: span 1 !important; }
        }
        .project-card:hover {
          border-color: ${COLORS.amber}40 !important;
          box-shadow: 0 0 30px ${COLORS.amber}0a, inset 3px 0 0 ${COLORS.amber}60;
        }
      `}</style>
    </section>
  );
}
