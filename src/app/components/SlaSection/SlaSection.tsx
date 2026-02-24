import styles from "./SlaSection.module.css";

const standards = [
  "Pracujemy technologią dopasowaną do materiału (posadzki, szyby albo okna, armatura, fronty) i warunków na obiekcie.",
  "Chemia i narzędzia dobierane do powierzchni.",
  "Procedury dostępu i formalności wdrażane przed startem.",
  "Protokoły i zdjęcia do odbioru.",
  "OC: pół miliona złotych.",
];

export default function SlaSection() {
  return (
    <section className={`section breakpoint ${styles.section}`} aria-labelledby="sla-title">
      <div className={`container ${styles.container}`}>
        <header className={styles.header}>
          <h2 id="sla-title">Bezpiecznie dla wykończeń i przewidywalnie dla odbioru</h2>
        </header>

        <ul className={styles.list}>
          {standards.map((point) => (
            <li key={point} className={`card ${styles.item}`}>
              {point}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

