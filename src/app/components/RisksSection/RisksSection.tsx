import styles from "./RisksSection.module.css";

const risks = [
  {
    risk: "Przesunięcia ekip i chaos na obiekcie",
    icon: "chaos",
    actions: [
      "jedno okno realizacji",
      "potwierdzanie ustaleń",
      "koordynator w trakcie prac",
    ],
    effect: "Mniej przestojów i mniej gaszenia pożarów po stronie Zamawiającego.",
  },
  {
    risk: "Ograniczenia dostępu i formalności",
    icon: "access",
    actions: [
      "umowa o zachowaniu poufności",
      "rejestr wejść",
      "procedury obiektu wdrażane przed startem",
    ],
    effect: "Szybsze wejście na obiekt i brak blokad w dniu realizacji.",
  },
  {
    risk: "Poprawki na końcu i niespodzianki przy odbiorze",
    icon: "clipboard",
    actions: [
      "odbiór wewnętrzny checklistą przed zgłoszeniem gotowości",
      "protokoły odbioru",
      "zdjęcia do odbioru",
    ],
    effect:
      "Oszczędza czas Zamawiającego na wytykanie poprawek i ponowne odbiory.",
  },
  {
    risk: "Usterki odkryte w trakcie",
    icon: "alert",
    actions: ["protokół usterek", "szybka informacja do Zleceniodawcy"],
    effect: "Jasna decyzja co dalej i brak sporów kto to zrobił.",
  },
  {
    risk: "Ryzyko braku ludzi/sprzętu",
    icon: "tools",
    actions: ["backup do każdego zlecenia", "dowiezienie terminu mimo problemów logistycznych"],
    effect: "Większa pewność terminu, nawet gdy wysypie się logistyka.",
  },
];

function renderRiskIcon(icon: (typeof risks)[number]["icon"]) {
  if (icon === "chaos") {
    return (
      <svg viewBox="0 0 24 24">
        <path
          d="M8 7.2h8M8 16.8h8M6 5.4c1.8 0 1.8 2.2 3.6 2.2s1.8-2.2 3.6-2.2 1.8 2.2 3.6 2.2M6 18.6c1.8 0 1.8-2.2 3.6-2.2s1.8 2.2 3.6 2.2 1.8-2.2 3.6-2.2"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  }

  if (icon === "access") {
    return (
      <svg viewBox="0 0 24 24">
        <path
          d="M7.2 11.2V9.8a4.8 4.8 0 1 1 9.6 0v1.4m-8.8 0h8a1 1 0 0 1 1 1V18a1 1 0 0 1-1 1H8a1 1 0 0 1-1-1v-5.8a1 1 0 0 1 1-1Z"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  }

  if (icon === "clipboard") {
    return (
      <svg viewBox="0 0 24 24">
        <path
          d="M9.2 6.8h5.6m-6.2 12.4h6.8a1 1 0 0 0 1-1V5.8a1 1 0 0 0-1-1h-1.8a1.8 1.8 0 0 0-3.2 0H8.6a1 1 0 0 0-1 1v12.4a1 1 0 0 0 1 1Zm1.4-6 1.7 1.7 3.3-3.3"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  }

  if (icon === "alert") {
    return (
      <svg viewBox="0 0 24 24">
        <path
          d="M12 4.9 20.2 18H3.8L12 4.9Zm0 4.6v4.9m0 3.3h.01"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 24 24">
      <path
        d="M6.2 7.8h11.6l-1.1 4.2H7.3L6.2 7.8Zm0 0-.6-1.8H4.2m3.4 10.2a1.6 1.6 0 1 1 0 3.2 1.6 1.6 0 0 1 0-3.2Zm8.8 0a1.6 1.6 0 1 1 0 3.2 1.6 1.6 0 0 1 0-3.2Z"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default function RisksSection() {
  return (
    <section className={`section ${styles.section}`} aria-labelledby="risks-title">
      <div className={`container ${styles.container}`}>
        <header className={styles.header}>
          <h2 id="risks-title">Ryzyka i jak je gasimy</h2>
        </header>

        <div className={styles.grid}>
          {risks.map((item, index) => {
            const isHighlight = index === risks.length - 1;
            return (
              <article
                key={item.risk}
                className={`card ${styles.card} ${isHighlight ? styles.cardHighlight : ""}`}
              >
                <header className={styles.cardHeader}>
                  <span className={styles.cardIcon} aria-hidden="true">
                    {renderRiskIcon(item.icon)}
                  </span>
                  <div className={styles.cardTitleWrap}>
                    <h3>{item.risk}</h3>
                    {isHighlight ? (
                      <span className={styles.highlightBadge}>Najczęstsze</span>
                    ) : null}
                  </div>
                </header>

                <div className={styles.actions}>
                  <ul className={styles.actionsList}>
                    {item.actions.map((action) => (
                      <li key={action}>{action}</li>
                    ))}
                  </ul>
                </div>

                <p className={styles.effect}>
                  <span className={styles.effectIcon} aria-hidden="true">
                    <svg viewBox="0 0 16 16">
                      <path
                        d="M4.8 8.2 7 10.3 11.2 6.1"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </span>
                  <span className={styles.effectLabel}>Efekt</span>
                  <span className={styles.effectText}>{item.effect}</span>
                </p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

