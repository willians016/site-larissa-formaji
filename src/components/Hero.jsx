import foto from "../assets/imagem.jpeg";
import instagramIcon from "../assets/inst.png";

export default function Hero() {
  return (
    <section id="inicio" style={styles.section}>
      <div style={styles.container}>
        {/* Esquerda */}
        <div style={styles.left}>
          <p style={styles.kicker}>Psicoterapia online • adultos e idosos</p>

          <h1 style={styles.title}>
            <span style={styles.highlight}>
              Terapia Cognitivo-Comportamental
            </span>
          </h1>

          <p style={styles.text}>
            Um espaço acolhedor e sem julgamentos para você falar sobre suas
            angústias, medos e preocupações — e construir mudanças reais, com
            ferramentas práticas para o dia a dia.
          </p>

          {/* Prova social */}
          <div style={styles.trustRow}>
            <span style={styles.tag}>CRP 06/176877</span>
            <span style={styles.tag}>Atendimento online</span>
            <span style={styles.tag}>São Paulo – SP</span>
            <span style={styles.tag}>Brasil e exterior</span>
          </div>


          {/* CTAs */}
          <div style={styles.ctaRow}>
            <a
              href="https://api.whatsapp.com/send/?phone=5511932514545&text=Ol%C3%A1%21+Gostaria+de+agendar+uma+sess%C3%A3o+de+psicoterapia.&type=phone_number&app_absent=0"
              target="_blank"
              rel="noreferrer"
              style={styles.primaryBtn}
            >
              Falar no WhatsApp
            </a>

                        {/* Instagram – só ícone */}
            <a
              href="https://www.instagram.com/psi.formaji"
              target="_blank"
              rel="noreferrer"
              style={styles.instagramBtn}
              aria-label="Instagram"
            >
              <img
                src={instagramIcon}
                alt="Instagram"
                style={styles.instagramIcon}
              />
            </a>

            <a href="#como-funciona" style={styles.primaryBtn}>
              Ver como funciona
            </a>

          </div>

          <p style={styles.microcopy}>
            Agendamento pelo WhatsApp • Sessões de 50 min via Google Meet
        
          </p>
        </div>

        {/* Direita */}
        <div style={styles.right}>
          <div style={styles.photoWrapper}>
            <img src={foto} alt="Foto profissional" style={styles.photo} />
          </div>
        </div>
      </div>
    </section>
  );
}

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
  trustPill: {
    fontFamily: "'DM Sans', sans-serif",
    fontSize: 13,
    color: "#3f3a34",
    background: "rgba(255,255,255,0.65)",
    border: "1px solid rgba(0,0,0,0.06)",
    padding: "8px 12px",
    borderRadius: 999,
  },

  tags: {
    display: "flex",
    gap: 12,
    flexWrap: "wrap",
    marginBottom: 22,
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
  },
  secondaryBtn: {
    padding: "13px 22px",
    background: "rgba(255,255,255,0.65)",
    color: "#3f3a34",
    borderRadius: 999,
    textDecoration: "none",
    fontWeight: 600,
    fontFamily: "'DM Sans', sans-serif",
    border: "1px solid rgba(0,0,0,0.10)",
  },

  /* Instagram no Hero */
  instagramBtn: {
    width: 44,
    height: 44,
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
    width: 22,
    height: 22,
    objectFit: "contain",
  },

  microcopy: {
    marginTop: 10,
    fontFamily: "'DM Sans', sans-serif",
    fontSize: 13,
    color: CHIP_TEXT,
  },

  right: {
    display: "flex",
    justifyContent: "flex-end",
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
};
