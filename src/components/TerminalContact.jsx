import { useState, useRef, useEffect, useCallback } from "react";
import { motion, useInView } from "framer-motion";
import { COLORS, NAME, LINKS, CONTENT } from "../data/constants";
import { IconTerminal } from "../icons/Icons";

const fadeUp = { hidden: { opacity: 0, y: 28 }, visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] } } };
const stagger = { visible: { transition: { staggerChildren: 0.12 } } };

export default function TerminalContact({ lang }) {
  const t = CONTENT[lang];
  const [input, setInput] = useState("");
  const [history, setHistory] = useState([
    { type: "output", text: t.terminalWelcome(NAME) },
  ]);
  const inputRef = useRef(null);
  const bottomRef = useRef(null);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  const isFirstLangRender = useRef(true);
  useEffect(() => {
    if (isFirstLangRender.current) {
      isFirstLangRender.current = false;
      return;
    }
    setHistory([{ type: "output", text: t.terminalWelcome(NAME) }]);
    setInput("");
  }, [lang]);

  const isFirstRender = useRef(true);
  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false;
      return;
    }
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [history]);

  const runCommand = useCallback((cmd) => {
    const trimmed = cmd.trim().toLowerCase();
    const result = t.terminalCommands[trimmed];
    setHistory((prev) => [...prev, { type: "input", text: cmd }]);
    if (!result) {
      setHistory((prev) => [...prev, { type: "error", text: t.terminalUnknown(trimmed) }]);
      return;
    }
    if (result === "__CLEAR__") { setHistory([]); return; }
    if (trimmed === "cv") window.open(LINKS.cv, "_blank");
    setHistory((prev) => [...prev, { type: "output", text: result }]);
  }, [t]);

  const onKeyDown = (e) => {
    if (e.key === "Enter" && input.trim()) {
      runCommand(input);
      setInput("");
    }
  };

  return (
    <section id="contact" ref={ref} style={{ padding: "8rem 1.5rem" }}>
      <div style={{ maxWidth: "48rem", margin: "0 auto" }}>
        <motion.div variants={stagger} initial="hidden" animate={inView ? "visible" : "hidden"}>
          <motion.p
            variants={fadeUp}
            style={{ fontSize: "0.65rem", fontFamily: "'JetBrains Mono', monospace", letterSpacing: "0.3em", textTransform: "uppercase", color: COLORS.amber, marginBottom: "0.75rem" }}
          >
            Contact
          </motion.p>
          <motion.h2
            variants={fadeUp}
            style={{ fontFamily: "'Syne', sans-serif", fontSize: "clamp(2rem, 4vw, 3.5rem)", fontWeight: 800, lineHeight: 1.1, color: COLORS.white, marginBottom: "3rem" }}
          >
            {t.contactTitle}
          </motion.h2>

          {/* Social links */}
          <motion.div variants={fadeUp} style={{ display: "flex", flexWrap: "wrap", gap: "0.75rem", marginBottom: "2.5rem" }}>
            {[
              { href: LINKS.github, label: "GitHub ↗" },
              { href: LINKS.linkedin, label: "LinkedIn ↗" },
              { href: `mailto:${LINKS.email}`, label: LINKS.email },
            ].map((link) => (
              <motion.a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.03, borderColor: COLORS.amber, color: COLORS.amber }}
                style={{
                  display: "inline-flex", alignItems: "center",
                  padding: "0.625rem 1.125rem",
                  borderRadius: "9999px",
                  fontSize: "0.72rem",
                  fontFamily: "'JetBrains Mono', monospace",
                  border: `1px solid ${COLORS.border}`,
                  color: COLORS.textDim,
                  background: COLORS.bgCard,
                  textDecoration: "none",
                  transition: "all 0.2s",
                }}
              >
                {link.label}
              </motion.a>
            ))}
          </motion.div>

          {/* Terminal */}
          <motion.div
            variants={fadeUp}
            style={{
              borderRadius: "1rem",
              overflow: "hidden",
              border: `1px solid ${COLORS.border}`,
              background: "#040710",
            }}
            onClick={() => inputRef.current?.focus()}
          >
            {/* Title bar */}
            <div style={{
              display: "flex", alignItems: "center", gap: "0.5rem",
              padding: "0.75rem 1.25rem",
              borderBottom: `1px solid ${COLORS.border}`,
              background: "#070a16",
            }}>
              <span style={{ width: 10, height: 10, borderRadius: "50%", background: "#ff5f57", display: "inline-block" }} />
              <span style={{ width: 10, height: 10, borderRadius: "50%", background: "#ffbd2e", display: "inline-block" }} />
              <span style={{ width: 10, height: 10, borderRadius: "50%", background: "#28c840", display: "inline-block" }} />
              <span style={{ marginLeft: "1rem", fontSize: "0.7rem", fontFamily: "'JetBrains Mono', monospace", color: COLORS.textMuted, display: "flex", alignItems: "center", gap: "0.4rem" }}>
                <IconTerminal size={11} />
                <span style={{ color: COLORS.amber }}>portfolio</span>@{NAME.split(" ")[1]?.toLowerCase() || "user"}:~
              </span>
            </div>

            {/* Output */}
            <div style={{ padding: "1.25rem", height: "14rem", overflowY: "auto", fontFamily: "'JetBrains Mono', monospace", fontSize: "0.72rem" }}>
              {history.map((line, i) => (
                <div key={i} style={{ marginBottom: "0.5rem" }}>
                  {line.type === "input" && (
                    <div style={{ display: "flex", gap: "0.5rem" }}>
                      <span style={{ color: COLORS.amber }}>❯</span>
                      <span style={{ color: COLORS.white }}>{line.text}</span>
                    </div>
                  )}
                  {line.type === "output" && (
                    <pre style={{ whiteSpace: "pre-wrap", lineHeight: 1.7, color: COLORS.textDim, fontFamily: "inherit", margin: 0 }}>
                      {line.text}
                    </pre>
                  )}
                  {line.type === "error" && (
                    <div style={{ color: "#f87171" }}>{line.text}</div>
                  )}
                </div>
              ))}
              <div ref={bottomRef} />
            </div>

            {/* Input */}
            <div style={{
              display: "flex", alignItems: "center", gap: "0.5rem",
              padding: "0.75rem 1.25rem",
              borderTop: `1px solid ${COLORS.border}`,
            }}>
              <span style={{ color: COLORS.amber }}>❯</span>
              <input
                ref={inputRef}
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={onKeyDown}
                placeholder={t.terminalPlaceholder}
                style={{
                  flex: 1, background: "transparent", outline: "none",
                  border: "none",
                  fontFamily: "'JetBrains Mono', monospace",
                  fontSize: "0.72rem",
                  color: COLORS.white,
                  caretColor: COLORS.amber,
                }}
                spellCheck={false}
                autoComplete="off"
              />
            </div>
          </motion.div>

          {/* Quick chips */}
          <motion.div variants={fadeUp} style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem", marginTop: "1rem" }}>
            {t.quickCmds.map((cmd) => (
              <motion.button
                key={cmd}
                onClick={() => runCommand(cmd)}
                whileHover={{ scale: 1.05, borderColor: COLORS.amber, color: COLORS.amber }}
                style={{
                  padding: "0.3rem 0.75rem",
                  borderRadius: "9999px",
                  fontSize: "0.7rem",
                  fontFamily: "'JetBrains Mono', monospace",
                  border: `1px solid ${COLORS.border}`,
                  color: COLORS.textMuted,
                  background: COLORS.bgCard,
                  cursor: "pointer",
                  transition: "all 0.2s",
                }}
              >
                {cmd}
              </motion.button>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
