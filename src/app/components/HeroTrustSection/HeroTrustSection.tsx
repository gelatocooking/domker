import styles from "./HeroTrustSection.module.css";

type TrustPoint = {
  text: string;
  icon: "sla" | "scale" | "start";
};

const points: TrustPoint[] = [
  { text: "Dla sieci: SLA 24h* (kontakt operacyjny)", icon: "sla" },
  {
    text: "Mycie witryn dla sieci handlowych: do 800 witryn miesięcznie w całej Polsce",
    icon: "scale",
  },
  { text: "Gotowość do startu prac: nawet w 3 dni*", icon: "start" },
];

function renderIcon(icon: TrustPoint["icon"]) {
  if (icon === "sla") {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M6 16L10 12L13 15L18 9" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
        <path d="M18 9H14.8" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
      </svg>
    );
  }

  if (icon === "scale") {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M12 6V18M7 9H17M6.5 9L4 13H9L6.5 9ZM17.5 9L15 13H20L17.5 9Z" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M6 16L10.5 11.5L13.5 14.5L19 9" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M19 9H15.5" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
    </svg>
  );
}

export default function HeroTrustSection() {
  return (
    <section className={`section ${styles.section}`}>
      <div className={`container ${styles.container}`}>
        <ul className={styles.grid} aria-label="Wyróżniki Domker">
          {points.map((point) => (
            <li key={point.text} className={`card ${styles.item}`}>
              <span className={styles.icon} aria-hidden="true">
                {renderIcon(point.icon)}
              </span>
              <span>{point.text}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
