import { useEffect, useMemo, useState } from "react";
import foto from "../assets/imagem.jpeg";
import instagramIcon from "../assets/inst.png";

function useIsMobile(breakpoint = 900) {
  const mq = useMemo(
    () => window.matchMedia(`(max-width: ${breakpoint}px)`),
    [breakpoint]
  );
  const [isMobile, setIsMobile] = useState(mq.matches);

  useEffect(() => {
    const update = () => setIsMobile(mq.matches);

    window.addEventListener("resize", update);
    window.addEventListener("orientationchange", update);
    window.visualViewport?.addEventListener("resize", update);

    if (mq.addEventListener) mq.addEventListener("change", update);
    else mq.addListener(update);

    update();

    return () => {
      window.removeEventListener("resize", update);
      window.removeEventListener("orientationchange", update);
      window.visualViewport?.removeEventListener("resize", update);

      if (mq.removeEventListener) mq.removeEventListener("change", update);
      else mq.removeListener(update);
    };
  }, [mq]);

  return isMobile;
}

export default function Hero() {
  const isMobile = useIsMobile(900);

  return (
    <section id="inicio" style={styles.section}>
      <div
        style={{
          ...styles.container,
          ...(isMobile ? styles.containerMobile : {}),
        }}
      >
        {/* Direita (foto) no mobile primeiro pra ficar “marqueteiro” */}
        <div
          style={{
            ...styles.right,
            ...(isMobile ? styles.rightMobile : {}),
          }}
        >
          <div
            style={{
              ...styles.photoWrapper,
              ...(isMobile ? styles.photoWrapperMobile : {}),
            }}
          >
            <img src={foto} alt="Foto profissional" style={styles.photo} />
          </div>
        </div>

        {/* Esquerda */}
        <div style={{ ...styles.left, ...(isMobile ? styles.leftMobile : {}) }}>
          <p style={{ ...styles.kicker, ...(isMobile ? styles.kickerMobile : {}) }}>
            Psicoterapia online • adultos e idosos
          </p>

          <h1 style={{ ...styles.title, ...(isMobile ? styles.titleMobile : {}) }}>
            <span style={styles.highlight}>Terapia Cognitivo-Comportamental</span>
          </h1>

          <p style={{ ...styles.text, ...(isMobile ? styles.textMobile : {}) }}>
            Um espaço acolhedor e sem julgamentos para você falar sobre suas
            angústias, medos e preocupações — e construir mudanças reais, com
            ferramentas práticas para o dia a dia.
          </p>

          {/* Prova social */}
          <div style={{ ...styles.trustRow, ...(isMobile ? styles.trustRowMobile : {}) }}>
            <span style={styles.tag}>CRP 06/176877</span>
            <span style={styles.tag}>Atendimentos desde 2020</span>
            <span style={styles.tag}>Atendimento online</span>
            <span style={styles.tag}>São Paulo – SP</span>
            <span style={styles.tag}>Brasil e exterior</span>
          </div>

          {/* CTAs */}
          <div style={{ ...styles.ctaRow, ...(isMobile ? styles.ctaRowMobile : {}) }}>
            <a
              href="https://api.whatsapp.com/send/?phone=5511932514545&text=Ol%C3%A1%21+Gostaria+de+agendar+uma+sess%C3%A3o+de+psicoterapia.&type=phone_number&app_absent=0"
              target="_blank"
              rel="noreferrer"
              style={{
                ...styles.primaryBtn,
                ...(isMobile ? styles.primaryBtnMobile : {}),
              }}
            >
              Falar no WhatsApp
            </a>

            {/* Instagram – só ícone (maior) */}
            <a
              href="https://www.instagram.com/psi.formaji"
              target="_blank"
              rel="noreferrer"
              style={{
                ...styles.instagramBtn,
                ...(isMobile ? styles.instagramBtnMobile : {}),
              }}
              aria-label="Instagram"
              title="Instagram"
            >
              <img
                src={instagramIcon}
                alt="Instagram"
                style={{
                  ...styles.instagramIcon,
                  ...(isMobile ? styles.instagramIconMobile : {}),
                }}
              />
            </a>

            <a
              href="#como-funciona"
              style={{
                ...styles.secondaryBtn,
                ...(isMobile ? styles.secondaryBtnMobile : {}),
              }}
            >
              Ver como funciona
            </a>
          </div>

          <p style={{ ...styles.microcopy, ...(isMobile ? styles.microcopyMobile : {}) }}>
            Agendamento pelo WhatsApp • Sessões de 50 min via Google Meet
          </p>
        </div>
      </div>
    </section>
  );
}

/* PALETA */
const PRIMARY = "#BEAB9C";
const TEXT = "#2b2b2b";
const MUTED = "#5f5a54";
const SOFT_BG = "#f6f2ed";
const CHIP_BG = "#f3efe9";
const CHIP_TEXT = "#7a6a5c";

const styles = {
  section: {
    padding: "120px 0 80px",
    background: `radial-gradient(800px 400px at 30% 20%, rgba(190,171,156,0.18), transparent 60%),
                 linear-gradient(135deg, #faf8f5, ${SOFT_BG})`,
  },

  /* Desktop */
  container: {
    maxWidth: 1180,
    margin: "0 auto",
    padding: "0 24px",
    display: "grid",
    gridTemplateColumns: "1.25fr 0.75fr",
    gap: 56,
    alignItems: "center",
  },
  left: { paddingRight: 10 },
  right: {
    display: "flex",
    justifyContent: "flex-end",
  },

  kicker: {
    display: "inline-block",
    fontFamily: "'DM Sans', sans-serif",
    fontSize: 13,
    letterSpacing: 0.6,
    textTransform: "uppercase",
    color: CHIP_TEXT,
    background: "rgba(255,255,255,0.55)",
    border: "1px solid rgba(0,0,0,0.06)",
    padding: "8px 12px",
    borderRadius: 999,
    marginBottom: 14,
  },

  title: {
    fontSize: 44,
    lineHeight: 1.12,
    marginBottom: 16,
    color: TEXT,
    fontFamily: "'Cormorant Garamond', serif",
    fontWeight: 600,
  },
  highlight: { color: PRIMARY },

  text: {
    fontSize: 17,
    color: MUTED,
    lineHeight: 1.75,
    marginBottom: 18,
    fontFamily: "'DM Sans', sans-serif",
    maxWidth: 720,
  },

  trustRow: {
    display: "flex",
    flexWrap: "wrap",
    gap: 10,
    marginBottom: 18,
  },

  tag: {
    background: CHIP_BG,
    padding: "9px 14px",
    borderRadius: 999,
    fontSize: 14,
    color: CHIP_TEXT,
    fontFamily: "'DM Sans', sans-serif",
    border: "1px solid rgba(0,0,0,0.04)",
  },

  ctaRow: {
    display: "flex",
    gap: 12,
    flexWrap: "wrap",
    alignItems: "center",
    marginBottom: 10,
  },

  primaryBtn: {
    padding: "14px 28px",
    background: PRIMARY,
    color: "#fff",
    borderRadius: 999,
    textDecoration: "none",
    fontWeight: 700,
    fontFamily: "'DM Sans', sans-serif",
    boxShadow: "0 14px 28px rgba(0,0,0,0.10)",
    border: "1px solid rgba(0,0,0,0.06)",
  },

  secondaryBtn: {
    padding: "13px 22px",
    background: "rgba(255,255,255,0.65)",
    color: "#3f3a34",
    borderRadius: 999,
    textDecoration: "none",
    fontWeight: 700,
    fontFamily: "'DM Sans', sans-serif",
    border: "1px solid rgba(0,0,0,0.10)",
  },

  instagramBtn: {
    width: 48,
    height: 48,
    borderRadius: "50%",
    background: "#fff",
    border: "1px solid rgba(0,0,0,0.12)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    boxShadow: "0 10px 22px rgba(0,0,0,0.08)",
    textDecoration: "none",
  },
  instagramIcon: {
    width: 24,
    height: 24,
    objectFit: "contain",
  },

  microcopy: {
    marginTop: 10,
    fontFamily: "'DM Sans', sans-serif",
    fontSize: 13,
    color: CHIP_TEXT,
  },

  photoWrapper: {
    width: 300,
    height: 300,
    borderRadius: "50%",
    background: CHIP_BG,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    boxShadow: "0 18px 40px rgba(0,0,0,0.08)",
    border: "8px solid rgba(255,255,255,0.75)",
  },
  photo: {
    width: "92%",
    height: "92%",
    borderRadius: "50%",
    objectFit: "cover",
  },

  /* Mobile */
  containerMobile: {
    display: "grid",
    gridTemplateColumns: "1fr",
    gap: 22,
    padding: "0 18px",
  },
  rightMobile: {
    justifyContent: "center",
    order: 0,
  },
  leftMobile: {
    textAlign: "left",
    order: 1,
  },
  kickerMobile: {
    fontSize: 12,
    marginBottom: 10,
  },
  titleMobile: {
    fontSize: 34,
    lineHeight: 1.08,
    marginBottom: 12,
  },
  textMobile: {
    fontSize: 16,
    marginBottom: 14,
  },
  trustRowMobile: {
    gap: 8,
    marginBottom: 14,
  },
  ctaRowMobile: {
    display: "grid",
    gridTemplateColumns: "1fr auto",
    gap: 12,
    alignItems: "center",
  },
  primaryBtnMobile: {
    width: "100%",
    textAlign: "center",
  },
  secondaryBtnMobile: {
    gridColumn: "1 / -1",
    width: "100%",
    textAlign: "center",
  },
  instagramBtnMobile: {
    width: 50,
    height: 50,
  },
  instagramIconMobile: {
    width: 26,
    height: 26,
  },
  microcopyMobile: {
    marginTop: 10,
  },
  photoWrapperMobile: {
    width: 240,
    height: 240,
    borderWidth: 6,
  },
};
