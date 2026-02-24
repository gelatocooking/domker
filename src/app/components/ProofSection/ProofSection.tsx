import Link from "next/link";
import styles from "./ProofSection.module.css";

const cases = [
  {
    title: "Obiekt pod odbiór na już",
    tags: ["Pilne", "Odbiór"],
    metrics: [
      { icon: "building", label: "1 obiekt" },
      { icon: "flash", label: "tryb ekspresowy" },
      { icon: "check", label: "checklista" },
    ],
    summary: "Domknięcie standardu pod odbiór bez wracania do poprawek.",
    goal: "domknąć standard pod odbiór i nie wracać do poprawek",
    scope: ["sprzątanie po pracach", "dopięcie detali"],
    effect: "zgłoszenie gotowości dopiero po wewnętrznej kontroli checklistą",
  },
  {
    title: "Kilka lokalizacji w krótkim czasie",
    tags: ["Sieci", "Multi-site"],
    metrics: [
      { icon: "building", label: "wiele punktów" },
      { icon: "flow", label: "prace równoległe" },
      { icon: "check", label: "backup ekip" },
    ],
    summary: "Dowiezienie jednego standardu w wielu punktach bez losowych ekip.",
    goal: "dowieźć standard w wielu punktach bez losowych ekip",
    scope: ["koordynacja", "realizacje równolegle"],
    effect: "termin dowieziony mimo przeszkód dzięki backupowi ludzi/sprzętu i kontroli",
  },
  {
    title: "Jednorazowe -> stała obsługa",
    tags: ["Skalowanie", "Utrzymanie"],
    metrics: [
      { icon: "flash", label: "start jednorazowy" },
      { icon: "check", label: "doczyszczenie" },
      { icon: "flow", label: "tryb cykliczny" },
    ],
    summary: "Od jednorazowego wejścia do stabilnego utrzymania czystości.",
    goal: "jednorazowe doczyszczenie standardu",
    scope: ["posadzki", "detale"],
    effect: "przejście w cykliczne utrzymanie",
  },
] as const;

function renderMetricIcon(icon: (typeof cases)[number]["metrics"][number]["icon"]) {
  if (icon === "building") {
    return (
      <svg viewBox="0 0 16 16" aria-hidden="true">
        <path
          d="M2.2 13.4h11.6M3.8 13.4V4.8h8.4v8.6M6 6.6h1.2M8.8 6.6H10M6 8.8h1.2M8.8 8.8H10"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.3"
          strokeLinecap="round"
        />
      </svg>
    );
  }
  if (icon === "flash") {
    return (
      <svg viewBox="0 0 16 16" aria-hidden="true">
        <path
          d="M8.8 1.8 3.9 8h3.4L6.8 14.2 12.1 7.6H8.5l.3-5.8Z"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.3"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  }
  if (icon === "flow") {
    return (
      <svg viewBox="0 0 16 16" aria-hidden="true">
        <path
          d="M3 4.2h4.5M7.5 2.8 9 4.2 7.5 5.6M13 11.8H8.5M8.5 10.4 7 11.8l1.5 1.4"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.3"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  }
  return (
    <svg viewBox="0 0 16 16" aria-hidden="true">
      <path
        d="M3.8 8.2 6.3 10.6 12.2 4.8"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default function ProofSection() {
  return (
    <section className={`section ${styles.section}`} aria-labelledby="proof-title">
      <div className={`container ${styles.container}`}>
        <header className={styles.header}>
          <h2 id="proof-title">Nie obiecujemy - pokazujemy</h2>
        </header>

        <div className={styles.cases}>
          {cases.map((item) => (
            <article key={item.title} className={`card ${styles.caseCard}`}>
              <header className={styles.cardHeader}>
                <h3>{item.title}</h3>
                <div className={styles.tags}>
                  {item.tags.map((tag) => (
                    <span key={tag} className={styles.tag}>
                      {tag}
                    </span>
                  ))}
                </div>
              </header>

              <div className={styles.metrics}>
                {item.metrics.map((metric) => (
                  <span key={metric.label} className={styles.metric}>
                    <span className={styles.metricIcon}>{renderMetricIcon(metric.icon)}</span>
                    <span>{metric.label}</span>
                  </span>
                ))}
              </div>

              <p className={styles.summary}>{item.summary}</p>

              <p className={styles.goalLead}>{item.goal}</p>

              <div className={styles.scope}>
                {item.scope.map((scopeItem) => (
                  <span key={scopeItem} className={styles.scopeChip}>
                    {scopeItem}
                  </span>
                ))}
              </div>

              <p className={styles.effectBar}>
                <span className={styles.effectBarLabel}>Efekt</span>
                <span>{item.effect}</span>
              </p>

              <footer className={styles.cardActions}>
                <Link href="/realizacje" className={`btn btnPrimary btnSm ${styles.cta}`}>
                  Zobacz realizację
                </Link>
                <Link href="/kontakt" className={`btn btnGhost btnSm ${styles.cta}`}>
                  Poproś o podobny plan
                </Link>
              </footer>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
