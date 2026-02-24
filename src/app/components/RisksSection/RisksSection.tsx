import styles from "./RisksSection.module.css";

const risks = [
  {
    risk: "Przesunięcia ekip i chaos na obiekcie",
    action:
      "Jedno okno realizacji + potwierdzanie ustaleń + koordynator w trakcie prac.",
    effect: "Mniej przestojów i mniej gaszenia pożarów po stronie Zamawiającego.",
  },
  {
    risk: "Ograniczenia dostępu i formalności",
    action:
      "Umowa o zachowaniu poufności / rejestr wejść / procedury obiektu wdrażamy przed startem.",
    effect: "Szybsze wejście na obiekt i brak blokad w dniu realizacji.",
  },
  {
    risk: "Poprawki na końcu i niespodzianki przy odbiorze",
    action:
      "Odbiór wewnętrzny checklistą przed zgłoszeniem gotowości + protokoły odbioru i zdjęcia.",
    effect:
      "Oszczędza czas Zamawiającego na wytykanie poprawek i ponowne odbiory.",
  },
  {
    risk: "Usterki odkryte w trakcie",
    action: "Protokół usterek i szybka informacja do Zleceniodawcy.",
    effect: "Jasna decyzja co dalej i brak sporów kto to zrobił.",
  },
  {
    risk: "Ryzyko braku ludzi/sprzętu",
    action: "Backup do każdego zlecenia, żeby dowieźć termin.",
    effect: "Większa pewność terminu, nawet gdy wysypie się logistyka.",
  },
];

export default function RisksSection() {
  return (
    <section className={`section ${styles.section}`} aria-labelledby="risks-title">
      <div className={`container ${styles.container}`}>
        <header className={styles.header}>
          <h2 id="risks-title">Ryzyka i jak je gasimy</h2>
        </header>

        <div className={styles.grid}>
          {risks.map((item) => (
            <article key={item.risk} className={`card ${styles.card}`}>
              <h3>{item.risk}</h3>
              <p>
                <strong>Jak gasimy:</strong> {item.action}
              </p>
              <p>
                <strong>Efekt:</strong> {item.effect}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

