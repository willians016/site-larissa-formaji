export default function About() {
  return (
    <section id="sobre" style={styles.section}>
      <div style={styles.container}>
        <h2 style={styles.title}>Sobre meu trabalho</h2>

        <div style={styles.textBlock}>
          <p style={styles.text}>
            Atendo jovens adultos, adultos e idosos em um processo terapêutico que
            une acolhimento, clareza e objetividade, sempre respeitando a história,
            o momento de vida e as necessidades individuais de cada pessoa.
          </p>

          <p style={styles.text}>
            Ao longo da minha prática clínica, acompanho pessoas que lidam com
            ansiedade, alterações de humor, dificuldades nos relacionamentos,
            desafios na regulação emocional e no desenvolvimento pessoal.
          </p>

          <p style={styles.text}>
            Meu trabalho é fundamentado na Terapia Cognitivo-Comportamental e na
            Terapia do Esquema, utilizando intervenções baseadas em evidências
            científicas e adaptadas à realidade de cada paciente.
          </p>

          <p style={styles.text}>
            Acredito na psicoterapia como um espaço seguro, colaborativo e sem
            julgamentos, onde é possível compreender padrões, desenvolver recursos
            emocionais e construir mudanças consistentes, respeitando o ritmo e a
            singularidade de cada pessoa.
          </p>
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
    maxWidth: 900,
    margin: "0 auto",
    padding: "0 16px",
    textAlign: "center",
  },
  title: {
    fontSize: 32,
    marginBottom: 28,
    fontFamily: "'Cormorant Garamond', serif",
    fontWeight: 600,
    color: "#2b2b2b",
  },
  textBlock: {
    display: "flex",
    flexDirection: "column",
    gap: 16,
  },
  text: {
    fontSize: 16,
    color: "#5f5a54",
    lineHeight: 1.75,
    fontFamily: "'DM Sans', sans-serif",
  },
};
