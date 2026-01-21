export default function Testimonials() {
  const reviews = [
    {
      text: "Me auxiliou de forma muito clara e acolhedora em questões relacionadas à família, casamento e trabalho.",
    },
    {
      text: "Profissional extremamente atenta, empática e ética. As sessões sempre foram muito produtivas.",
    },
    {
      text: "O processo terapêutico me ajudou a enxergar situações de uma forma totalmente diferente.",
    },
  ];

  return (
    <section id="avaliacoes" style={styles.section}>
      <div style={styles.container}>
        <h2 style={styles.title}>Avaliações de pacientes</h2>

        <div style={styles.ratingHeader}>
          <span style={styles.stars}>★★★★★</span>
          <p style={styles.ratingText}>Avaliação média 5.0 no Google</p>
        </div>

        <div style={styles.grid}>
          {reviews.map((review, index) => (
            <div key={index} style={styles.card}>
              <p style={styles.text}>“{review.text}”</p>
              <span style={styles.cardStars}>★★★★★</span>
            </div>
          ))}
        </div>

        <a
          href="https://share.google/0RkQjoJrtlvVy4f6d"
          target="_blank"
          rel="noreferrer"
          style={styles.button}
        >
          Ver todas as avaliações no Google
        </a>
      </div>
    </section>
  );
}

const PRIMARY = "#BEAB9C";
const TEXT = "#2b2b2b";
const MUTED = "#5f5a54";
const SECTION_BG = "#ffffff";
const CARD_BG = "#ffffff";



const styles = {
  section: {
    padding: "90px 0",
    background: SECTION_BG,
  },
  container: {
    maxWidth: 980,
    margin: "0 auto",
    padding: "0 16px",
    textAlign: "center",
  },
  title: {
    fontSize: 32,
    marginBottom: 12,
    fontFamily: "'Cormorant Garamond', serif",
    fontWeight: 600,
    color: TEXT,
  },
  ratingHeader: {
    marginBottom: 40,
  },
  stars: {
    fontSize: 28,
    color: PRIMARY,
    letterSpacing: 3,
  },
  ratingText: {
    marginTop: 6,
    fontFamily: "'DM Sans', sans-serif",
    fontSize: 14,
    color: MUTED,
  },
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
    gap: 24,
    marginBottom: 40,
  },
  card: {
    background: CARD_BG,
    padding: 26,
    borderRadius: 18,
    boxShadow: "0 10px 22px rgba(0,0,0,0.06)",
    border: "1px solid rgba(0,0,0,0.04)",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
  },
  text: {
    fontStyle: "italic",
    color: MUTED,
    marginBottom: 18,
    lineHeight: 1.7,
    fontFamily: "'DM Sans', sans-serif",
    fontSize: 15,
  },
  cardStars: {
    color: PRIMARY,
    letterSpacing: 2,
    fontSize: 16,
  },
  button: {
    display: "inline-block",
    padding: "14px 30px",
    background: PRIMARY,
    color: "#fff",
    borderRadius: 999,
    textDecoration: "none",
    fontWeight: 700,
    fontFamily: "'DM Sans', sans-serif",
    boxShadow: "0 12px 22px rgba(0,0,0,0.12)",
  },
};
