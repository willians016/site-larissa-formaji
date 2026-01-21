export default function HowItWorks() {
  return (
    <section id="como-funciona" style={styles.section}>
      <div style={styles.container}>
        <h2 style={styles.title}>Como funciona a psicoterapia?</h2>

        <p style={styles.intro}>
          O processo é organizado em etapas simples e bem definidas, para que
          você se sinta acolhido(a), orientado(a) e seguro(a) desde o primeiro
          contato — sempre respeitando o seu ritmo.
        </p>

        <div style={styles.steps}>
          <div style={styles.step}>
            <span style={styles.number}>1</span>
            <h3 style={styles.stepTitle}>Contato inicial</h3>
            <p style={styles.stepText}>
              Você me chama no WhatsApp para tirar dúvidas, entender a proposta e
              escolher o melhor horário para iniciar.
            </p>
          </div>

          <div style={styles.step}>
            <span style={styles.number}>2</span>
            <h3 style={styles.stepTitle}>Primeira sessão</h3>
            <p style={styles.stepText}>
              Uma sessão de 50 minutos para conhecer sua história, suas demandas
              atuais e alinhar expectativas com acolhimento e clareza.
            </p>
          </div>

          <div style={styles.step}>
            <span style={styles.number}>3</span>
            <h3 style={styles.stepTitle}>Plano terapêutico</h3>
            <p style={styles.stepText}>
              Definimos juntos objetivos e estratégias, com base na TCC e na
              Terapia do Esquema, adaptadas à sua realidade e necessidades.
            </p>
          </div>

          <div style={styles.step}>
            <span style={styles.number}>4</span>
            <h3 style={styles.stepTitle}>Acompanhamento</h3>
            <p style={styles.stepText}>
              Encontros semanais online via Google Meet, com continuidade,
              acompanhamento e ajustes ao longo do processo.
            </p>
          </div>
        </div>

        <div style={styles.noteBox}>
          <p style={styles.noteText}>
            As sessões têm duração de <strong>50 minutos</strong> e acontecem
            online pelo <strong>Google Meet</strong>. A frequência é definida em
            conjunto, mas geralmente é <strong>semanal</strong> para favorecer
            resultados consistentes.
          </p>
        </div>
      </div>
    </section>
  );
}

const PRIMARY = "#BEAB9C";
const TEXT = "#2b2b2b";
const MUTED = "#5f5a54";
const SECTION_BG = "#f6f2ed";
const CARD_BG = "#ffffff";
const SOFT_CARD = "#f3efe9";

const styles = {
  section: {
    padding: "90px 0",
    background: SECTION_BG,
  },
  container: {
    maxWidth: 1050,
    margin: "0 auto",
    padding: "0 16px",
    textAlign: "center",
  },
  title: {
    fontSize: 32,
    marginBottom: 18,
    fontFamily: "'Cormorant Garamond', serif",
    fontWeight: 600,
    color: TEXT,
  },
  intro: {
    color: MUTED,
    marginBottom: 44,
    fontFamily: "'DM Sans', sans-serif",
    lineHeight: 1.75,
    maxWidth: 820,
    marginLeft: "auto",
    marginRight: "auto",
    fontSize: 16,
  },
  steps: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(230px, 1fr))",
    gap: 24,
    marginBottom: 34,
  },
  step: {
    background: CARD_BG,
    padding: 26,
    borderRadius: 16,
    textAlign: "left",
    boxShadow: "0 10px 22px rgba(0,0,0,0.06)",
    border: "1px solid rgba(0,0,0,0.04)",
  },
  number: {
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    width: 38,
    height: 38,
    borderRadius: "50%",
    background: PRIMARY,
    color: "#fff",
    fontWeight: 700,
    fontFamily: "'DM Sans', sans-serif",
    marginBottom: 12,
    boxShadow: "0 10px 18px rgba(0,0,0,0.10)",
  },
  stepTitle: {
    margin: "0 0 8px",
    fontFamily: "'DM Sans', sans-serif",
    fontWeight: 700,
    color: TEXT,
    fontSize: 16,
  },
  stepText: {
    margin: 0,
    fontFamily: "'DM Sans', sans-serif",
    color: MUTED,
    lineHeight: 1.65,
    fontSize: 15,
  },
  noteBox: {
    background: SOFT_CARD,
    borderRadius: 16,
    padding: 22,
    maxWidth: 900,
    margin: "0 auto",
    border: "1px solid rgba(0,0,0,0.04)",
  },
  noteText: {
    margin: 0,
    color: MUTED,
    fontFamily: "'DM Sans', sans-serif",
    lineHeight: 1.7,
    fontSize: 14,
  },
};
