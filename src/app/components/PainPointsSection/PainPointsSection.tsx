import Image from "next/image";
import styles from "./PainPointsSection.module.css";

const riskCards = [
  {
    title: "Smugi wychodzą dopiero w świetle",
    description: "odbiór jest blisko, a smugi i pył wychodzą dopiero w świetle dziennym.",
    impact: "Skutek: poprawki na ostatniej prostej.",
    icon: "light",
  },
  {
    title: "Sprzątanie między robotami",
    description: "ekipy wchodzą sobie w drogę, a sprzątanie odbywa się między robotami.",
    impact: "Skutek: przestoje i utrata płynności prac.",
    icon: "layers",
  },
  {
    title: "Ryzyko uszkodzeń nowych wykończeń",
    description:
      "świeże powierzchnie (posadzki, szyby albo okna, armatura) łatwo uszkodzić złą technologią.",
    impact: "Skutek: koszt napraw i opóźnienia odbioru.",
    icon: "shield",
  },
  {
    title: "Chaos terminów i odpowiedzialność",
    description:
      "podwykonawca nie odbiera, nie dojeżdża albo przesuwa termin — a odpowiedzialność i tak spada na Ciebie.",
    impact: "Skutek: presja operacyjna po Twojej stronie.",
    icon: "alert",
  },
] as const;

const processSteps = ["Zakres", "Termin", "Realizacja", "Odbiór"] as const;
const riskIconStroke = {
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.8,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
};

function renderRiskIcon(icon: (typeof riskCards)[number]["icon"]) {
  if (icon === "light") {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <circle cx="12" cy="12" r="4.2" {...riskIconStroke} />
        <path d="M12 4.2v2M12 17.8v2M4.2 12h2M17.8 12h2M6.6 6.6l1.4 1.4M16 16l1.4 1.4M6.6 17.4 8 16M16 8l1.4-1.4" {...riskIconStroke} />
      </svg>
    );
  }

  if (icon === "layers") {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M6 7.5h12M4.8 12h14.4M6 16.5h12" {...riskIconStroke} />
      </svg>
    );
  }

  if (icon === "shield") {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M12 4.2 6.8 6.3v5.2c0 3.8 2.2 6.7 5.2 8.1 3-1.4 5.2-4.3 5.2-8.1V6.3L12 4.2Z" {...riskIconStroke} />
        <path d="m9.6 12.1 1.6 1.6 3.2-3.2" {...riskIconStroke} />
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M12 5 4.5 18.5h15L12 5Z" {...riskIconStroke} />
      <path d="M12 10v4.1M12 16.7h.01" {...riskIconStroke} />
    </svg>
  );
}

function renderProcessIcon(step: (typeof processSteps)[number]) {
  if (step === "Zakres") {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M5 6.5h14M5 12h14M5 17.5h9" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
      </svg>
    );
  }

  if (step === "Termin") {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <circle cx="12" cy="12" r="8" fill="none" stroke="currentColor" strokeWidth="1.8" />
        <path d="M12 8.2v4l2.8 1.8" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
      </svg>
    );
  }

  if (step === "Realizacja") {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="m4.8 12 4.1 4.1L19.2 5.8" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M5.5 12.3 9.3 16l9.2-9.1" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M12 4v2.2M12 17.8V20M4 12h2.2M17.8 12H20" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
    </svg>
  );
}

export default function PainPointsSection() {
  return (
    <section className={`section ${styles.section}`} aria-labelledby="pain-points-title">
      <div className={`container ${styles.container}`}>
        <header className={styles.header}>
          <div className={styles.headerTop}>
            <div className={styles.headerCopy}>
              <h2 id="pain-points-title">
                Jeśli celem jest odbiór, przekazanie albo otwarcie — „czysto” to dopiero
                początek
              </h2>
              <p className={styles.leadLine}>
                Największe ryzyko w sprzątaniu po budowie nie jest w brudzie. Jest w chaosie
                i terminach.
              </p>
              <p className={styles.supportingLine}>
                W praktyce sprzątanie po budowie / po remoncie rzadko przegrywa jakością —
                częściej przegrywa organizacją. A kiedy celem jest odbiór / przekazanie,
                liczy się przewidywalność:
              </p>
            </div>

          
          </div>
        </header>

        <ul className={styles.list}>
          {riskCards.map((item) => (
            <li key={item.title} className={styles.item}>
              <span className={styles.icon} aria-hidden="true">
                {renderRiskIcon(item.icon)}
              </span>
              <h3 className={styles.itemTitle}>{item.title}</h3>
              <p className={styles.itemDescription}>{item.description}</p>
              <p className={styles.itemImpact}>{item.impact}</p>
            </li>
          ))}
        </ul>

        <ol className={styles.processStrip} aria-label="Proces Domker">
          {processSteps.map((step) => (
            <li key={step} className={styles.processStep}>
              <span className={styles.processIcon} aria-hidden="true">
                {renderProcessIcon(step)}
              </span>
              <span className={styles.processLabel}>{step}</span>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
