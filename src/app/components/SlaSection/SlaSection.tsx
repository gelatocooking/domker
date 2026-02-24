import styles from "./SlaSection.module.css";

const standards = [
  {
    title: "Dyspozycyjność i dowiezienie terminu",
    bullets: [
      "Ustalamy okno realizacji + backup ludzi i sprzętu.",
      "Gotowość startu prac: nawet w 3 dni.",
    ],
  },
  {
    title: "Bezpieczna praca na świeżych wykończeniach",
    bullets: [
      "Technologię dobieramy do materiału i warunków na obiekcie.",
      "Przy ryzyku wykonujemy test w niewidocznym miejscu.",
    ],
  },
  {
    title: "BHP i analiza zagrożeń",
    bullets: [
      "Zaczynamy od analizy zagrożeń i przygotowania ludzi.",
      "Praca przebiega bezpiecznie i bez przestojów.",
    ],
  },
  {
    title: "Formalności i odpowiedzialność",
    bullets: [
      "Umowa, faktura VAT, umowa o zachowaniu poufności na życzenie, rejestr wejść (jeśli wymagany).",
      "OC do końca marca 2026: 500 000 zł + protokoły odbioru i zdjęcia.",
    ],
    featured: true,
  },
] as const;

export default function SlaSection() {
  return (
    <section className={`section ${styles.section}`} aria-labelledby="sla-title">
      <div className={`container ${styles.container}`}>
        <header className={styles.header}>
          <h2 id="sla-title">Proces + bezpieczeństwo + formalności</h2>
        </header>

        <ul className={styles.list}>
          {standards.map((pillar) => (
            <li
              key={pillar.title}
              className={`card ${styles.item} ${"featured" in pillar && pillar.featured ? styles.itemFeatured : ""}`}
            >
              <div className={styles.itemHead}>
                <span className={styles.itemIcon} aria-hidden="true">
                  <svg viewBox="0 0 24 24">
                    <path
                      d="M12 4.8 18 7.2v5.4c0 3.1-2.2 5.7-6 6.8-3.8-1.1-6-3.7-6-6.8V7.2l6-2.4Zm-2.6 7.3 1.8 1.8 3.4-3.5"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.8"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </span>
                <h3 className={styles.itemTitle}>{pillar.title}</h3>
              </div>
              <ul className={styles.itemList}>
                {pillar.bullets.map((bullet) => (
                  <li key={bullet}>{bullet}</li>
                ))}
              </ul>
            </li>
          ))}
        </ul>

        <details className={styles.slaNote}>
          <summary>Jak liczymy SLA 24h?</summary>
          <p>
            SLA do 24h liczymy od momentu, gdy mamy potwierdzony zakres i warunki wejścia oraz
            przyjęte zlecenie (akceptacja). Dotyczy uruchomienia i koordynacji realizacji - nie
            czasu odpowiedzi na pierwszą wiadomość.
          </p>
        </details>
      </div>
    </section>
  );
}
