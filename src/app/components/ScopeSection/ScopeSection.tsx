import Link from "next/link";
import styles from "./ScopeSection.module.css";

const scopeCards = [
  {
    title: "Po budowie - standard obejmuje",
    items: [
      "pył i zabrudzenia po pracach",
      "mycie powierzchni i detali",
      "doczyszczanie sanitariatów",
      "przygotowanie pod odbiór",
    ],
    href: "/sprzatanie-po-budowie",
    cta: "Pełny zakres + przykłady",
  },
  {
    title: "Posadzki - standard obejmuje",
    items: [
      "dobór technologii do typu posadzki",
      "doczyszczanie zabrudzeń technicznych",
      "prace na m² + odbiór",
      "zabezpieczenie stref roboczych",
    ],
    href: "/maszynowe-czyszczenie-posadzek",
    cta: "Pełny zakres + przykłady",
  },
  {
    title: "Cykliczne - standard obejmuje",
    items: [
      "harmonogram i checklisty",
      "kontrole jakości",
      "zastępstwa",
      "stały kontakt operacyjny",
    ],
    href: "/utrzymanie-czystosci",
    cta: "Pełny zakres + przykłady",
  },
];

export default function ScopeSection() {
  return (
    <section className={`section ${styles.section}`} aria-labelledby="scope-title">
      <div className={`container ${styles.container}`}>
        <header className={styles.header}>
          <h2 id="scope-title">Co jest w standardzie, a co jest opcją</h2>
          <p className="lead">
            Krótka próbka zakresu, żebyś od razu wiedział, co realnie kupujesz.
          </p>
        </header>

        <div className={styles.grid}>
          {scopeCards.map((card) => (
            <article key={card.title} className={`card ${styles.card}`}>
              <h3>{card.title}</h3>

              <ul className={styles.list}>
                {card.items.map((item) => (
                  <li key={item} className={styles.item}>
                    {item}
                  </li>
                ))}
              </ul>

              <Link href={card.href} className={styles.link}>
                {card.cta}
              </Link>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
