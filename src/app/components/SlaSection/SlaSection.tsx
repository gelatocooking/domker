import styles from "./SlaSection.module.css";

const standards = [
  "Dyspozycyjność i dowiezienie terminu Ustalamy okno realizacji, a do każdego zlecenia zabezpieczamy backup ludzi/sprzętu, żeby dowieźć termin. Gotowość startu prac: nawet w 3 dni. Dla sieci: SLA 24h* (kontakt operacyjny)",
  "Bezpieczna praca na świeżo wykończonych powierzchniach Dobieramy technologię do materiału i warunków na obiekcie. Jeśli jest ryzyko — robimy test w niewidocznym miejscu.",
  "BHP i analiza zagrożeń Zaczynamy zlecenie od analizy zagrożeń i przygotowania ludzi na obiekcie — żeby praca była bezpieczna i bez przestojów.",
  "Formalności i odpowiedzialność Umowa / faktura VAT, umowa o zachowaniu poufności na życzenie, rejestr wejść (jeśli wymagany). OC: do końca marca 2026: pół miliona złotych + protokoły odbioru i zdjęcia.",

];

export default function SlaSection() {
  return (
    <section className={`section breakpoint ${styles.section}`} aria-labelledby="sla-title">
      <div className={`container ${styles.container}`}>
        <header className={styles.header}>
          <h2 id="sla-title">Proces + bezpieczeństwo + formalności</h2>
        </header>

        <ul className={styles.list}>
          {standards.map((point) => (
            <li key={point} className={`card ${styles.item}`}>
              {point}
            </li>
          ))}
        </ul>

        <p className="textSm mt4">
          *SLA do 24h liczymy od momentu, gdy mamy potwierdzony zakres i warunki wejścia oraz
          przyjęte zlecenie (akceptacja). Dotyczy uruchomienia i koordynacji realizacji - nie czasu
          odpowiedzi na pierwszą wiadomość.
        </p>
      </div>
    </section>
  );
}

