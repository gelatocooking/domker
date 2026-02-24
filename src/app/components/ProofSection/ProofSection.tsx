import Link from "next/link";
import styles from "./ProofSection.module.css";

const cases = [
  {
    title: "Mini-case 1: Obiekt pod odbiór na już",
    goal: "domknąć standard pod odbiór i nie wracać do poprawek",
    scope: "sprzątanie po pracach + dopięcie detali",
    effect:
      "zgłoszenie gotowości dopiero po wewnętrznej kontroli checklistą",
  },
  {
    title: "Mini-case 2: Kilka lokalizacji w krótkim czasie",
    goal: "dowieźć standard w wielu punktach bez losowych ekip",
    scope: "koordynacja + realizacje równolegle",
    effect:
      "termin dowieziony mimo przeszkód dzięki backupowi ludzi/sprzętu i kontroli",
  },
  {
    title: "Mini-case 3: Jednorazowe › stała obsługa",
    goal: "jednorazowe doczyszczenie standardu",
    scope: "posadzki / detale",
    effect: "przejście w cykliczne utrzymanie",
  },
];

export default function ProofSection() {
  return (
    <section className={`section ${styles.section}`} aria-labelledby="proof-title">
      <div className={`container ${styles.container}`}>
        <header className={styles.header}>
          <h2 id="proof-title">Nie obiecujemy — pokazujemy</h2>
        </header>

        <div className={styles.actions}>
          <Link href="/realizacje" className={`btn btnPrimary ${styles.cta}`}>
            Realizacje
          </Link>
          <Link href="/referencje" className={`btn btnGhost ${styles.cta}`}>
            Referencje / opinie
          </Link>
        </div>

        <div className={styles.cases}>
          {cases.map((item) => (
            <article key={item.title} className={`card ${styles.caseCard}`}>
              <h3>{item.title}</h3>
              <p>
                <strong>Cel:</strong> {item.goal}.
              </p>
              <p>
                <strong>Zakres:</strong> {item.scope}.
              </p>
              <p>
                <strong>Efekt:</strong> {item.effect}.
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

