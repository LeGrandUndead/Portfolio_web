import { COLORS, NAME, CONTENT } from "../data/constants";

export default function Footer({ lang }) {
  const t = CONTENT[lang];
  return (
    <footer style={{
      padding: "2rem 1.5rem",
      borderTop: `1px solid ${COLORS.border}`,
      textAlign: "center",
    }}>
      <p style={{ fontSize: "0.7rem", fontFamily: "'JetBrains Mono', monospace", color: COLORS.textMuted }}>
        {t.footerText}{" "}
        <span style={{ color: COLORS.amber }}>{NAME}</span>
        {" · "}
        {new Date().getFullYear()}
      </p>
    </footer>
  );
}
