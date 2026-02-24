import Link from "next/link";
import styles from "./PricingSection.module.css";

const billingCards = [
  {
    title: "Po budowie",
    items: [
      "widełki zależne od metrażu i poziomu trudności",
      "zakres i warunki wejścia potwierdzane przed startem",
    ],
  },
  {
    title: "Posadzki",
    items: [
      "rozliczenie za m2",
      "stawka zależna od typu posadzki i technologii",
    ],
  },
  {
    title: "Okna / witryny + cykliczne",
    items: [
      "okna i witryny: rozliczenie czasem pracy",
      "cykliczne: abonament miesieczny + czestotliwosc",
    ],
  },
];

export default function PricingSection() {
  return (
    <section className={`section ${styles.section}`} aria-labelledby="pricing-title">
      <div className={`container ${styles.container}`}>
        <header className={styles.header}>
          <h2 id="pricing-title">Model rozliczen w 1 ekranie</h2>
          <p className="lead">
            Krotko i konkretnie. Widzisz jak liczymy usluge, zanim wejdziesz w szczegoly.
          </p>
        </header>

        <div className={styles.grid}>
          {billingCards.map((card) => (
            <article key={card.title} className={`card ${styles.card}`}>
              <h3>{card.title}</h3>
              <ul className={styles.list}>
                {card.items.map((item) => (
                  <li key={item} className={styles.item}>
                    {item}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>

        <Link href="/cennik" className={`btn btnPrimary ${styles.cta}`}>
          Zobacz szczegoly rozliczen i widelek
        </Link>
      </div>
    </section>
  );
}
