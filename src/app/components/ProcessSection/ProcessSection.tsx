import Link from "next/link";
import styles from "./ProcessSection.module.css";

const steps = [
  "Kontakt — wybierasz kanał. W godzinach pracy biura odpowiadamy do 15 minut.",
  "Minimum danych — zbieramy informacje potrzebne do widełek i kolejnego kroku.",
  "Rozpoznanie / wizja (gdy ma sens) — przy większych zleceniach stan szyb i detali potrafi znacząco zmienić czas i technologię, dlatego potwierdzamy wycenę po rozpoznaniu.",
  "Wejście + przygotowanie ludzi — szkolenie na obiekcie, analiza zagrożeń, ustalenie zalecanej kolejności prac.",
  "Realizacja + kontrola — zanim powiemy „gotowe”, robimy odbiór wewnętrzny checklistą.",
  "Odbiór i domknięcie — protokoły odbioru i zdjęcia, rozliczenie, koniec tematu.",
];

export default function ProcessSection() {
  return (
    <section id="proces" className={`section ${styles.section}`} aria-labelledby="process-title">
      <div className={`container ${styles.container}`}>
        <header className={styles.header}>
          <h2 id="process-title">Jak zamawiasz usługę i jak dowozimy efekt</h2>
        </header>

        <ol className={styles.steps}>
          {steps.map((step, index) => (
            <li key={step} className={`card ${styles.step}`}>
              <p className={styles.index}>Krok {index + 1}</p>
              <p>{step}</p>
            </li>
          ))}
        </ol>

        <Link href="/kontakt" className={`btn btnAccent ${styles.cta}`}>
          Zamów ofertę do zatwierdzenia — gotową do wysłania do przełożonego / zarządu / działu zakupów
        </Link>
      </div>
    </section>
  );
}

