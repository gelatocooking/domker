import styles from "./PainPointsSection.module.css";

const painPoints = [
  "odbiór jest blisko, a smugi i pył wychodzą dopiero w świetle dziennym,",
  "ekipy wchodzą sobie w drogę, a sprzątanie odbywa się między robotami,",
  "świeże powierzchnie (posadzki, szyby albo okna, armatura) łatwo uszkodzić złą technologią,",
  "podwykonawca nie odbiera, nie dojeżdża albo przesuwa termin — a odpowiedzialność i tak spada na Ciebie.",
];

export default function PainPointsSection() {
  return (
    <section className={`section ${styles.section}`} aria-labelledby="pain-points-title">
      <div className={`container ${styles.container}`}>
        <header className={styles.header}>
          <h2 id="pain-points-title">
            Jeśli celem jest odbiór, przekazanie albo otwarcie — „czysto” to dopiero
            początek
          </h2>
          <p className="lead">
            Największe ryzyko w sprzątaniu po budowie nie jest w brudzie. Jest w chaosie
            i terminach.
          </p>
          <p>
            W praktyce sprzątanie po budowie / po remoncie rzadko przegrywa jakością —
            częściej przegrywa organizacją. A kiedy celem jest odbiór / przekazanie,
            liczy się przewidywalność:
          </p>
        </header>

        <ul className={styles.list}>
          {painPoints.map((item) => (
            <li key={item} className={`card ${styles.item}`}>
              {item}
            </li>
          ))}
        </ul>

        <p className={styles.summary}>
          <strong>Domker:</strong> porządkujemy ten etap: zakres › termin › realizacja ›
          odbiór.
        </p>
      </div>
    </section>
  );
}

