import { useEffect, useState } from "react";

export default function Header() {
  const [open, setOpen] = useState(false);

  const links = [
    { href: "#inicio", label: "Início" },
    { href: "#sobre", label: "Sobre" },
    { href: "#formacao", label: "Formação" },
    { href: "#abordagem", label: "Abordagem" },
    { href: "#como-funciona", label: "Como funciona" },
    { href: "#avaliacoes", label: "Avaliações" },
    { href: "#duvidas", label: "Dúvidas" },
    { href: "#contato", label: "Contato" },
  ];

  // trava o scroll do body quando o menu mobile estiver aberto
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "auto";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [open]);

  return (
    <header style={styles.header}>
      <div style={styles.container}>
        <a href="#inicio" style={styles.logo} onClick={() => setOpen(false)}>
          Larissa <span style={styles.logoAccent}>Formaji</span>
        </a>

        {/* Desktop nav */}
        <nav style={styles.navDesktop}>
          {links.map((link) => (
            <a key={link.href} href={link.href} style={styles.link}>
              {link.label}
            </a>
          ))}
        </nav>

        {/* Desktop CTA */}
        <div style={styles.ctaDesktop}>
          <a
            href="https://api.whatsapp.com/send/?phone=5511932514545&text=Ol%C3%A1%21+Gostaria+de+agendar+uma+sess%C3%A3o+de+psicoterapia.&type=phone_number&app_absent=0"
            target="_blank"
            rel="noreferrer"
            style={styles.ctaBtn}
          >
            Agendar
          </a>
        </div>

        {/* Mobile button */}
        <button
          style={styles.menuBtn}
          onClick={() => setOpen(!open)}
          aria-label={open ? "Fechar menu" : "Abrir menu"}
        >
          {open ? "✕" : "☰"}
        </button>
      </div>

      {/* Mobile overlay + menu */}
      {open && (
        <div style={styles.mobileOverlay} onClick={() => setOpen(false)}>
          <div style={styles.mobileMenu} onClick={(e) => e.stopPropagation()}>
            <div style={styles.mobileHeader}>
              <span style={styles.mobileTitle}>Menu</span>
              <button
                style={styles.mobileClose}
                onClick={() => setOpen(false)}
                aria-label="Fechar menu"
              >
                ✕
              </button>
            </div>

            <div style={styles.mobileLinks}>
              {links.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  style={styles.mobileLink}
                  onClick={() => setOpen(false)}
                >
                  {link.label}
                </a>
              ))}
            </div>

            <a
              href="https://api.whatsapp.com/send/?phone=5511932514545&text=Ol%C3%A1%21+Gostaria+de+agendar+uma+sess%C3%A3o+de+psicoterapia.&type=phone_number&app_absent=0"
              target="_blank"
              rel="noreferrer"
              style={styles.mobileCta}
              onClick={() => setOpen(false)}
            >
              Agendar pelo WhatsApp
            </a>

            <p style={styles.mobileHint}>
              Sessões online • 50 min • Google Meet
            </p>
          </div>
        </div>
      )}
    </header>
  );
}

const PRIMARY = "#BEAB9C";
const TEXT = "#2b2b2b";
const MUTED = "#5f5a54";
const SURFACE = "rgba(255,255,255,0.78)";

const styles = {
  header: {
    position: "fixed",
    top: 0,
    width: "100%",
    zIndex: 1000,
    background: SURFACE,
    backdropFilter: "blur(10px)",
    borderBottom: "1px solid rgba(0,0,0,0.06)",
  },
  container: {
    maxWidth: 1180,
    margin: "0 auto",
    padding: "14px 18px",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    gap: 14,
  },

  logo: {
    textDecoration: "none",
    fontFamily: "'Cormorant Garamond', serif",
    fontWeight: 700,
    fontSize: 22,
    color: TEXT,
    letterSpacing: 0.2,
  },
  logoAccent: {
    color: PRIMARY,
  },

  navDesktop: {
    display: "flex",
    gap: 18,
    alignItems: "center",
  },
  link: {
    textDecoration: "none",
    color: MUTED,
    fontFamily: "'DM Sans', sans-serif",
    fontSize: 14,
    fontWeight: 600,
    padding: "8px 10px",
    borderRadius: 999,
    transition: "all 150ms ease",
  },

  ctaDesktop: {
    display: "block",
  },
  ctaBtn: {
    textDecoration: "none",
    background: PRIMARY,
    color: "#fff",
    padding: "10px 18px",
    borderRadius: 999,
    fontFamily: "'DM Sans', sans-serif",
    fontWeight: 700,
    fontSize: 14,
    boxShadow: "0 12px 22px rgba(0,0,0,0.10)",
    border: "1px solid rgba(0,0,0,0.06)",
    whiteSpace: "nowrap",
  },

  menuBtn: {
    display: "none", // aparece só no mobile via media query (abaixo)
    fontSize: 22,
    background: "transparent",
    border: "1px solid rgba(0,0,0,0.10)",
    borderRadius: 12,
    width: 42,
    height: 42,
    cursor: "pointer",
    color: TEXT,
  },

  mobileOverlay: {
    position: "fixed",
    inset: 0,
    background: "rgba(0,0,0,0.35)",
    display: "flex",
    justifyContent: "flex-end",
  },
  mobileMenu: {
    width: "86%",
    maxWidth: 360,
    height: "100%",
    background: "#fff",
    padding: 18,
    boxShadow: "-18px 0 40px rgba(0,0,0,0.15)",
    display: "flex",
    flexDirection: "column",
    gap: 14,
  },
  mobileHeader: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    paddingBottom: 10,
    borderBottom: "1px solid rgba(0,0,0,0.06)",
  },
  mobileTitle: {
    fontFamily: "'DM Sans', sans-serif",
    fontWeight: 800,
    color: TEXT,
  },
  mobileClose: {
    fontSize: 18,
    background: "transparent",
    border: "1px solid rgba(0,0,0,0.10)",
    borderRadius: 12,
    width: 40,
    height: 40,
    cursor: "pointer",
    color: TEXT,
  },
  mobileLinks: {
    display: "flex",
    flexDirection: "column",
    gap: 8,
    paddingTop: 6,
  },
  mobileLink: {
    textDecoration: "none",
    color: TEXT,
    fontFamily: "'DM Sans', sans-serif",
    fontSize: 15,
    fontWeight: 700,
    padding: "12px 12px",
    borderRadius: 14,
    background: "rgba(190,171,156,0.12)",
    border: "1px solid rgba(0,0,0,0.06)",
  },
  mobileCta: {
    marginTop: 6,
    textDecoration: "none",
    background: PRIMARY,
    color: "#fff",
    padding: "14px 16px",
    borderRadius: 14,
    fontFamily: "'DM Sans', sans-serif",
    fontWeight: 800,
    textAlign: "center",
    boxShadow: "0 14px 24px rgba(0,0,0,0.12)",
  },
  mobileHint: {
    marginTop: 6,
    fontFamily: "'DM Sans', sans-serif",
    fontSize: 13,
    color: MUTED,
    lineHeight: 1.6,
  },
};

/**
 * ✅ IMPORTANTE:
 * Como você está usando estilos inline, não dá pra usar media query direto aqui.
 * Então vamos resolver o mobile com 2 passos:
 *
 * 1) Abra o arquivo src/index.css (ou src/App.css se for o seu)
 * 2) Cole este CSS no final:
 *
 * @media (max-width: 900px) {
 *   header nav { display: none !important; }
 * }
 *
 * MAS eu posso te dar a forma certinha sem gambiarra:
 * A melhor é colocar classes e controlar no CSS.
 */
