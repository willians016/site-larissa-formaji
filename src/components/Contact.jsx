import instagramIcon from "../assets/inst.png";

export default function Contact() {
  return (
    <section id="contato" style={styles.section}>
      <div style={styles.container}>
        <h2 style={styles.title}>Entre em contato</h2>

        <p style={styles.text}>
          Se você sentir que este é o momento de cuidar da sua saúde emocional,
          ficarei feliz em te acompanhar nesse processo.
        </p>

        <p style={styles.subtext}>
          O contato e o agendamento são realizados pelo WhatsApp.
        </p>

        <div style={styles.buttons}>
          {/* WhatsApp */}
          <a
            href="https://api.whatsapp.com/send/?phone=5511932514545&text=Ol%C3%A1%21+Gostaria+de+agendar+uma+sess%C3%A3o+de+psicoterapia.&type=phone_number&app_absent=0"
            target="_blank"
            rel="noreferrer"
            style={styles.whatsappBtn}
          >
            💬 Falar no WhatsApp
          </a>

          {/* Instagram – somente ícone */}
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
        </div>

        <p style={styles.microcopy}>
          Atendimento online • Sessões de 50 minutos • Google Meet
        </p>
      </div>
    </section>
  );
}

const TEXT = "#2b2b2b";
const MUTED = "#5f5a54";

const styles = {
  section: {
    padding: "100px 0",
    background: "#ffffff",
  },
  container: {
    maxWidth: 820,
    margin: "0 auto",
    padding: "0 16px",
    textAlign: "center",
  },
  title: {
    fontSize: 32,
    marginBottom: 14,
    fontFamily: "'Cormorant Garamond', serif",
    fontWeight: 600,
    color: TEXT,
  },
  text: {
    color: TEXT,
    marginBottom: 10,
    lineHeight: 1.7,
    fontFamily: "'DM Sans', sans-serif",
    fontSize: 17,
  },
  subtext: {
    color: MUTED,
    marginBottom: 32,
    lineHeight: 1.7,
    fontFamily: "'DM Sans', sans-serif",
    fontSize: 15,
  },
  buttons: {
    display: "flex",
    gap: 14,
    justifyContent: "center",
    alignItems: "center",
    flexWrap: "wrap",
    marginBottom: 22,
  },

  /* WhatsApp */
  whatsappBtn: {
    display: "inline-flex",
    alignItems: "center",
    gap: 8,
    padding: "14px 26px",
    borderRadius: 999,
    background: "#25D366",
    color: "#fff",
    textDecoration: "none",
    fontWeight: 800,
    fontFamily: "'DM Sans', sans-serif",
    fontSize: 15,
    boxShadow: "0 14px 28px rgba(0,0,0,0.18)",
    border: "1px solid rgba(0,0,0,0.08)",
  },

  /* Instagram – só ícone */
  instagramBtn: {
    width: 52,
    height: 52,
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
    width: 26,
    height: 26,
    objectFit: "contain",
  },

  microcopy: {
    marginTop: 8,
    color: "#7a6a5c",
    fontFamily: "'DM Sans', sans-serif",
    fontSize: 13,
  },
};
