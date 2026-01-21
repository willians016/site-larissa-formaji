export default function FAQ() {
  const faqs = [
    {
      q: "Qual público você atende?",
      a: "Atendo jovens adultos, adultos e idosos. O foco do trabalho é apoiar você a lidar com questões emocionais e comportamentais, sempre respeitando sua história e seu momento de vida.",
    },
    {
      q: "O atendimento é por convênio ou particular?",
      a: "O atendimento é particular. Caso você tenha convênio, posso emitir recibo/nota fiscal para que você verifique a possibilidade de reembolso diretamente com o seu plano.",
    },
    {
      q: "Quanto custa a sessão e quais as formas de pagamento?",
      a: "Os valores e as formas de pagamento são informados pelo WhatsApp. Você pode me chamar para que eu explique com calma e tire suas dúvidas.",
    },
    {
      q: "Como faço para agendar uma sessão?",
      a: "O agendamento é feito pelo WhatsApp. Você me chama, combinamos um horário e eu envio as orientações para a primeira sessão.",
    },
    {
      q: "Como funciona o atendimento online?",
      a: "As sessões são realizadas online pelo Google Meet, com duração de 50 minutos. Você recebe um link para acessar no horário combinado, de forma simples e segura.",
    },
    {
      q: "Minha privacidade está garantida?",
      a: "Sim. O sigilo profissional é um princípio fundamental da psicoterapia e do código de ética. Tudo o que é conversado em sessão é confidencial, com as exceções previstas em lei.",
    },
    {
      q: "Qual a duração e frequência das sessões?",
      a: "As sessões duram 50 minutos. Em geral, a frequência é semanal, mas isso pode ser ajustado de acordo com suas necessidades e objetivos terapêuticos.",
    },
    {
      q: "Preciso de encaminhamento médico para iniciar a terapia?",
      a: "Não. Você pode iniciar a psicoterapia diretamente, sem encaminhamento. Se em algum momento for necessário um cuidado em conjunto com outro profissional, conversamos durante o processo.",
    },
    {
      q: "E se eu precisar cancelar ou remarcar uma sessão?",
      a: "Caso precise cancelar ou remarcar, peço que avise com antecedência. Assim conseguimos reorganizar a agenda e manter o cuidado com o seu processo.",
    },
  ];

  return (
    <section id="duvidas" style={styles.section}>
      <div style={styles.container}>
        <h2 style={styles.title}>Dúvidas frequentes</h2>
        <p style={styles.subtitle}>
          Separei algumas respostas para ajudar você a entender como funciona o
          atendimento e se sentir mais seguro(a) para iniciar.
        </p>

        <div style={styles.list}>
          {faqs.map((item, i) => (
            <details key={i} style={styles.item}>
              <summary style={styles.question}>
                <span style={styles.qText}>{item.q}</span>
                <span style={styles.icon} aria-hidden="true">
                  ▾
                </span>
              </summary>
              <div style={styles.answer}>{item.a}</div>
            </details>
          ))}
        </div>


      </div>
    </section>
  );
}

const PRIMARY = "#BEAB9C";
const TEXT = "#2b2b2b";
const MUTED = "#5f5a54";
const SECTION_BG = "#f6f2ed";
const SOFT = "#f3efe9";

const styles = {
  section: {
    padding: "90px 0",
    background: SECTION_BG, // ✅ BEGE CLARO (igual HowItWorks)
  },
  container: {
    maxWidth: 950,
    margin: "0 auto",
    padding: "0 16px",
    textAlign: "center",
  },
  title: {
    fontSize: 32,
    marginBottom: 10,
    fontFamily: "'Cormorant Garamond', serif",
    fontWeight: 600,
    color: TEXT,
  },
  subtitle: {
    color: MUTED,
    marginBottom: 32,
    fontFamily: "'DM Sans', sans-serif",
    lineHeight: 1.7,
    maxWidth: 760,
    marginLeft: "auto",
    marginRight: "auto",
    fontSize: 16,
  },

  list: {
    textAlign: "left",
    maxWidth: 840,
    margin: "0 auto",
    display: "flex",
    flexDirection: "column",
    gap: 12,
  },

  item: {
    background: "#fff",
    borderRadius: 16,
    border: "1px solid rgba(0,0,0,0.06)",
    boxShadow: "0 10px 22px rgba(0,0,0,0.06)",
    overflow: "hidden",
  },

  question: {
    cursor: "pointer",
    padding: "16px 18px",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    gap: 12,
    listStyle: "none",
    userSelect: "none",
    fontFamily: "'DM Sans', sans-serif",
    fontWeight: 800,
    color: TEXT,
    background: "rgba(190,171,156,0.10)", // faixa suave da paleta
  },
  qText: {
    fontSize: 15,
    lineHeight: 1.4,
  },
  icon: {
    width: 34,
    height: 34,
    borderRadius: 12,
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    background: SOFT,
    color: TEXT,
    border: "1px solid rgba(0,0,0,0.06)",
    fontSize: 16,
    flexShrink: 0,
  },

  answer: {
    padding: "14px 18px 18px",
    color: MUTED,
    lineHeight: 1.7,
    fontFamily: "'DM Sans', sans-serif",
    fontSize: 15,
    background: "#fff",
  },

  ctaBox: {
    marginTop: 34,
    background: SOFT,
    borderRadius: 18,
    padding: 22,
    maxWidth: 840,
    marginLeft: "auto",
    marginRight: "auto",
    border: "1px solid rgba(0,0,0,0.06)",
  },
  ctaText: {
    color: MUTED,
    margin: "0 0 14px",
    fontFamily: "'DM Sans', sans-serif",
    lineHeight: 1.7,
    fontSize: 15,
  },
  button: {
    display: "inline-block",
    padding: "12px 22px",
    background: PRIMARY,
    color: "#fff",
    borderRadius: 999,
    textDecoration: "none",
    fontWeight: 800,
    fontFamily: "'DM Sans', sans-serif",
    boxShadow: "0 12px 22px rgba(0,0,0,0.10)",
    border: "1px solid rgba(0,0,0,0.06)",
  },
  microcopy: {
    marginTop: 10,
    marginBottom: 0,
    fontFamily: "'DM Sans', sans-serif",
    fontSize: 13,
    color: "#7a6a5c",
  },
};
