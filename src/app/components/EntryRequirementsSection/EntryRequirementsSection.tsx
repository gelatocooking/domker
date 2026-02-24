import styles from "./EntryRequirementsSection.module.css";

const requirements = [
  "Lokalizacja: miasto / adres.",
  "Skala: metraż / liczba lokali / liczba mieszkań (jeśli dotyczy).",
  "Cel: przed odbiorem urzędowym / przed odbiorem inwestorskim / przed otwarciem lokalu.",
  "Termin: data + okno wejścia.",
  "Ograniczenia: np. zakaz nożyków do szyb, praca nocą, procedury dostępu.",
  "Zalecana kolejność prac: np. najpierw witryny/okna, potem posadzki, na końcu detale i sanitariaty.",
];

export default function EntryRequirementsSection() {
  return (
    <section
      className={`section ${styles.section}`}
      aria-labelledby="entry-requirements-title"
    >
      <div className={`container ${styles.container}`}>
        <header className={styles.header}>
          <h2 id="entry-requirements-title">
            Co potrzebujemy, żeby szybko podać widełki i termin
          </h2>
        </header>

        <ul className={styles.list}>
          {requirements.map((requirement) => (
            <li key={requirement} className={`card ${styles.item}`}>
              {requirement}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

