import styles from "./EntryRequirementsSection.module.css";

const requirements = [
  { title: "Lokalizacja", detail: "miasto / adres.", icon: "pin" },
  {
    title: "Skala",
    detail: "metraż / liczba lokali / liczba mieszkań (jeśli dotyczy).",
    icon: "ruler",
  },
  {
    title: "Cel",
    detail: "przed odbiorem urzędowym / przed odbiorem inwestorskim / przed otwarciem lokalu.",
    icon: "flag",
  },
  { title: "Termin", detail: "data + okno wejścia.", icon: "calendar" },
  {
    title: "Ograniczenia",
    detail: "np. zakaz nożyków do szyb, praca nocą, procedury dostępu.",
    icon: "lock",
  },
  {
    title: "Kolejność prac",
    detail: "np. najpierw witryny/okna, potem posadzki, na końcu detale i sanitariaty.",
    icon: "list",
  },
] as const;

function renderIcon(icon: (typeof requirements)[number]["icon"]) {
  if (icon === "pin") {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M12 20s6-5.4 6-10a6 6 0 1 0-12 0c0 4.6 6 10 6 10Z" fill="none" stroke="currentColor" strokeWidth="1.8" />
        <circle cx="12" cy="10" r="2.1" fill="none" stroke="currentColor" strokeWidth="1.8" />
      </svg>
    );
  }

  if (icon === "ruler") {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M5 7.5h14v9H5zM8 7.5v3M11 7.5v2M14 7.5v3M17 7.5v2" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
      </svg>
    );
  }

  if (icon === "flag") {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M6 4.8v14.4M7.5 6.2h9.8l-1.9 3.2 1.9 3.1H7.5z" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
      </svg>
    );
  }

  if (icon === "calendar") {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <rect x="4.8" y="6.4" width="14.4" height="12.2" rx="1.8" fill="none" stroke="currentColor" strokeWidth="1.8" />
        <path d="M8 4.8v3.2M16 4.8v3.2M4.8 10h14.4" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
      </svg>
    );
  }

  if (icon === "lock") {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <rect x="6.6" y="11" width="10.8" height="7.8" rx="1.5" fill="none" stroke="currentColor" strokeWidth="1.8" />
        <path d="M9 11V8.8a3 3 0 1 1 6 0V11" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M6 7h12M6 12h12M6 17h8" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
    </svg>
  );
}

export default function EntryRequirementsSection() {
  return (
    <section className={`section ${styles.section}`} aria-labelledby="entry-requirements-title">
      <div className={`container ${styles.container}`}>
        <header className={styles.header}>
          <h2 id="entry-requirements-title">
            Co potrzebujemy, żeby szybko podać widełki i termin
          </h2>
        </header>

        <ul className={styles.list}>
          {requirements.map((requirement) => (
            <li key={requirement.title} className={`card ${styles.item}`}>
              <span className={styles.icon} aria-hidden="true">
                {renderIcon(requirement.icon)}
              </span>
              <div className={styles.itemCopy}>
                <p className={styles.itemTitle}>{requirement.title}</p>
                <p className={styles.itemDetail}>{requirement.detail}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
