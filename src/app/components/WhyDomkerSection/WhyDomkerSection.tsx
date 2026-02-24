import Link from "next/link";
import styles from "./WhyDomkerSection.module.css";

const quickScopeLinks = [
  {
    label: "Sprzątanie po budowie i po pracach wykończeniowych",
    href: "#zakres-po-budowie",
  },
  { label: "Mycie witryn", href: "#zakres-witryny" },
  { label: "Maszynowe czyszczenie posadzek", href: "#zakres-posadzki" },
  { label: "Cykliczne utrzymanie czystości", href: "#zakres-cykliczne" },
];

const scopeCards = [
  {
    id: "zakres-po-budowie",
    title: "Po budowie / po pracach",
    bullets: [
      "pył i zabrudzenia po robotach",
      "mycie powierzchni i detali",
      "przygotowanie do odbioru/przekazania",
    ],
  },
  {
    id: "zakres-witryny",
    title: "Witryny",
    bullets: [
      "szybka wycena ze zdjęć",
      "warianty częstotliwości",
      "stały standard",
      "ryczałtowa cena dla sieci handlowych",
    ],
  },
  {
    id: "zakres-posadzki",
    title: "Posadzki",
    bullets: [
      "dobór technologii do posadzki",
      "doczyszczanie zabrudzeń technicznych",
      "specjalistyczne odplamianie",
      "odbiór efektu",
    ],
  },
  {
    id: "zakres-cykliczne",
    title: "Cykliczne",
    bullets: [
      "harmonogram i zakres",
      "checklisty + kontrola wykonania",
      "zastępstwa (ciągłość)",
      "ryczałtowa cena dla sieci handlowych",
    ],
  },
];

export default function WhyDomkerSection() {
  return (
    <section className={`section ${styles.section}`} aria-labelledby="why-domker-title">
      <div className={`container ${styles.container}`}>
        <header className={styles.header}>
          <h2 id="why-domker-title">Zakres na start (krótko)</h2>
        </header>

       
        <div className={styles.grid}>
          {scopeCards.map((group) => (
            <article key={group.id} id={group.id} className={`card ${styles.card}`}>
              <h3>{group.title}</h3>
              <ul className={styles.list}>
                {group.bullets.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>

        <p className={styles.footnote}>(Szczegóły zakresu są na podstronach usług.)</p>
      </div>
    </section>
  );
}
