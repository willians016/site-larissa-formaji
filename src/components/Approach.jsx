export default function Approach() {
  return (
    <section id="abordagem" style={styles.section}>
      <div style={styles.container}>
        <h2 style={styles.title}>Terapia Cognitivo-Comportamental</h2>

        <p style={styles.intro}>
          A Terapia Cognitivo-Comportamental é uma abordagem estruturada e baseada
          em evidências científicas, que auxilia na compreensão da relação entre
          pensamentos, emoções e comportamentos, favorecendo mudanças práticas e
          conscientes no dia a dia.
        </p>

        <div style={styles.cards}>
          <div style={styles.card}>
            <h3 style={styles.cardTitle}>Colaboração</h3>
            <p style={styles.cardText}>
              O processo terapêutico é construído em conjunto, de forma clara e
              participativa, respeitando seus objetivos, seu ritmo e suas
              necessidades individuais.
            </p>
          </div>

          <div style={styles.card}>
            <h3 style={styles.cardTitle}>Processo</h3>
            <p style={styles.cardText}>
              Trabalhamos na identificação de padrões de pensamento e
              comportamento que impactam suas emoções, ajudando a compreender
              como eles se desenvolvem e se mantêm ao longo do tempo.
            </p>
          </div>

          <div style={styles.card}>
            <h3 style={styles.cardTitle}>Técnicas</h3>
            <p style={styles.cardText}>
              São utilizadas intervenções validadas cientificamente, adaptadas à
              sua realidade, com foco em desenvolver habilidades práticas para
              lidar com situações desafiadoras.
            </p>
          </div>
        </div>

        <div style={styles.benefits}>
          <h3 style={styles.benefitsTitle}>Benefícios da abordagem</h3>
          <ul style={styles.list}>
            <li>Atendimento baseado em evidências científicas</li>
            <li>Estrutura clara com flexibilidade no processo</li>
            <li>Desenvolvimento de autonomia emocional</li>
            <li>Maior compreensão dos padrões emocionais e comportamentais</li>
            <li>Ferramentas práticas aplicáveis no cotidiano</li>
            <li>Promoção de mudanças consistentes e duradouras</li>
          </ul>
        </div>
      </div>
    </section>
  );
}

const styles = {
  section: {
    padding: "90px 0",
    background: "#fff",
  },
  container: {
    maxWidth: 1000,
    margin: "0 auto",
    padding: "0 16px",
    textAlign: "center",
  },
  title: {
    fontSize: 32,
    marginBottom: 24,
    fontFamily: "'Cormorant Garamond', serif",
    fontWeight: 600,
    color: "#2b2b2b",
  },
  intro: {
    color: "#5f5a54",
    fontSize: 16,
    lineHeight: 1.7,
    marginBottom: 48,
    fontFamily: "'DM Sans', sans-serif",
    maxWidth: 820,
    marginLeft: "auto",
    marginRight: "auto",
  },
  cards: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
    gap: 28,
    marginBottom: 52,
  },
  card: {
    background: "#f6f2ed",
    padding: 28,
    borderRadius: 16,
    textAlign: "left",
  },
  cardTitle: {
    fontSize: 18,
    marginBottom: 10,
    fontFamily: "'DM Sans', sans-serif",
    fontWeight: 600,
    color: "#2b2b2b",
  },
  cardText: {
    fontSize: 15,
    lineHeight: 1.6,
    color: "#5f5a54",
    fontFamily: "'DM Sans', sans-serif",
  },
  benefits: {
    background: "#f3efe9",
    padding: 28,
    borderRadius: 16,
    textAlign: "left",
    maxWidth: 620,
    margin: "0 auto",
  },
  benefitsTitle: {
    fontSize: 18,
    marginBottom: 16,
    fontFamily: "'DM Sans', sans-serif",
    fontWeight: 600,
    color: "#2b2b2b",
  },
  list: {
    paddingLeft: 18,
    lineHeight: 1.7,
    color: "#5f5a54",
    fontFamily: "'DM Sans', sans-serif",
    fontSize: 15,
  },
};
