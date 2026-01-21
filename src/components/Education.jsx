export default function Education() {
  return (
    <section id="formacao" style={styles.section}>
      <div style={styles.container}>
        <h2 style={styles.title}>Formação e experiência</h2>

        <div style={styles.columns}>
          <div style={styles.card}>
            <div style={styles.cardHeader}>
              <span style={styles.badge}>Formação</span>
              <h3 style={styles.subtitle}>Formação acadêmica</h3>
            </div>

            <ul style={styles.list}>
              <li>Graduação em Psicologia — Universidade Federal do Triângulo Mineiro (UFTM)</li>
              <li>Formação em Transtornos de Ansiedade na Terapia Cognitivo-Comportamental — USP</li>
              <li>Especialização em Psicopatologia, Neurociência e Comportamento — PUC</li>
            </ul>
          </div>

          <div style={styles.card}>
            <div style={styles.cardHeader}>
              <span style={styles.badge}>Atuação</span>
              <h3 style={styles.subtitle}>Experiência clínica</h3>
            </div>

            <p style={styles.lead}>
              Atendo principalmente pessoas que buscam apoio para lidar com:
            </p>

            <ul style={styles.list}>
              <li>Dificuldades nos relacionamentos (familiares, sociais e amorosos)</li>
              <li>Ansiedade e episódios de humor deprimido</li>
              <li>Maternidade e desafios emocionais associados</li>
              <li>Insegurança, baixa autoestima e medo de errar</li>
              <li>Organização de rotina, trabalho e sobrecarga mental</li>
              <li>TDAH em adultos (procrastinação, foco e manejo do tempo)</li>
            </ul>
          </div>
        </div>

        <div style={styles.philosophy}>
          <h3 style={styles.philosophyTitle}>Como eu conduzo o processo</h3>

          <p style={styles.text}>
            Busco oferecer um espaço acolhedor, claro e colaborativo, onde você
            possa compreender o que está por trás do seu sofrimento e desenvolver
            recursos emocionais com consistência — respeitando seu ritmo e sua
            singularidade.
          </p>

          <p style={styles.text}>
            O objetivo é construir um caminho terapêutico com direção e sentido,
            combinando técnicas baseadas em evidências com uma escuta atenta e
            humana, para que as mudanças sejam aplicáveis à sua vida real.
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
  },
  title: {
    textAlign: "center",
    fontSize: 32,
    marginBottom: 44,
    fontFamily: "'Cormorant Garamond', serif",
    fontWeight: 600,
    color: TEXT,
  },
  columns: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
    gap: 24,
    marginBottom: 26,
  },
  card: {
    background: CARD_BG,
    padding: 26,
    borderRadius: 16,
    boxShadow: "0 10px 22px rgba(0,0,0,0.06)",
    border: "1px solid rgba(0,0,0,0.04)",
  },
  cardHeader: {
    marginBottom: 14,
  },
  badge: {
    display: "inline-block",
    background: SOFT_CARD,
    color: "#7a6a5c",
    border: "1px solid rgba(0,0,0,0.05)",
    padding: "7px 12px",
    borderRadius: 999,
    fontSize: 12,
    fontFamily: "'DM Sans', sans-serif",
    marginBottom: 12,
  },
  subtitle: {
    margin: 0,
    fontSize: 20,
    fontFamily: "'DM Sans', sans-serif",
    fontWeight: 700,
    color: TEXT,
  },
  lead: {
    margin: "12px 0 12px",
    color: MUTED,
    fontFamily: "'DM Sans', sans-serif",
    lineHeight: 1.7,
    fontSize: 15,
  },
  list: {
    margin: 0,
    paddingLeft: 18,
    color: MUTED,
    lineHeight: 1.75,
    fontFamily: "'DM Sans', sans-serif",
    fontSize: 15,
  },

  philosophy: {
    background: SOFT_CARD,
    padding: 26,
    borderRadius: 16,
    border: "1px solid rgba(0,0,0,0.04)",
    maxWidth: 980,
    margin: "0 auto",
  },
  philosophyTitle: {
    margin: "0 0 12px",
    fontSize: 18,
    fontFamily: "'DM Sans', sans-serif",
    fontWeight: 700,
    color: TEXT,
  },
  text: {
    color: MUTED,
    lineHeight: 1.75,
    margin: "0 0 12px",
    fontFamily: "'DM Sans', sans-serif",
    fontSize: 15,
  },
};
