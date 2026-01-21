import instagramIcon from "../assets/inst.png";

export default function Footer() {
  return (
    <footer style={styles.footer}>
      <div style={styles.container}>
        {/* Esquerda */}
        <div>
          <h3 style={styles.name}>Larissa Formaji</h3>
          <p style={styles.crp}>Psicóloga • CRP 06/176877</p>
        </div>
      </div>

      <div style={styles.bottom}>
        © {new Date().getFullYear()} Larissa Formaji. Todos os direitos reservados.
      </div>
    </footer>
  );
}

const BG = "rgb(190, 171, 156)";
const TEXT = "#3a332d";
const MUTED = "#5f554c";
const BOTTOM = "#6b5f54";

const styles = {
  footer: {
    background: BG,
    paddingTop: 60,
    paddingBottom: 24,
  },
  container: {
    maxWidth: 1100,
    margin: "0 auto",
    padding: "0 24px 40px",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    flexWrap: "wrap",
    gap: 24,
    borderBottom: "1px solid rgba(0,0,0,0.12)",
  },

  name: {
    fontFamily: "'Cormorant Garamond', serif",
    fontSize: 20,
    fontWeight: 600,
    color: TEXT,
    marginBottom: 4,
  },
  crp: {
    fontFamily: "'DM Sans', sans-serif",
    fontSize: 14,
    color: MUTED,
  },

  bottom: {
    textAlign: "center",
    marginTop: 18,
    fontFamily: "'DM Sans', sans-serif",
    fontSize: 13,
    color: BOTTOM,
  },
};
