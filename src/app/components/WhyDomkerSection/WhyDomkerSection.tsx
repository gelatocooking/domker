import Link from "next/link";
import styles from "./WhyDomkerSection.module.css";

const scopeCards = [
  {
    id: "zakres-po-budowie",
    title: "Po budowie",
    microcopy: "Przygotowanie obiektu pod odbiór lub przekazanie.",
    bullets: [
      "pył i zabrudzenia po robotach",
      "mycie powierzchni i detali",
      "przygotowanie do odbioru/przekazania",
    ],
    ctaLabel: "Zobacz szczegóły",
    ctaHref: "/sprzatanie-po-budowie",
    icon: "build",
  },
  {
    id: "zakres-witryny",
    title: "Witryny",
    microcopy: "Stały standard dla sieci i punktów handlowych.",
    bullets: [
      "szybka wycena ze zdjęć",
      "warianty częstotliwości",
      "stały standard",
      "ryczałtowa cena dla sieci handlowych",
    ],
    ctaLabel: "Zobacz szczegóły",
    ctaHref: "/mycie-okien-i-witryn",
    icon: "window",
  },
  {
    id: "zakres-posadzki",
    title: "Posadzki",
    microcopy: "Doczyszczanie techniczne i dobór właściwej technologii.",
    bullets: [
      "dobór technologii do posadzki",
      "doczyszczanie zabrudzeń technicznych",
      "specjalistyczne odplamianie",
      "odbiór efektu",
    ],
    ctaLabel: "Zobacz szczegóły",
    ctaHref: "/maszynowe-czyszczenie-posadzek",
    icon: "floor",
  },
  {
    id: "zakres-cykliczne",
    title: "Cykliczne",
    microcopy: "Utrzymanie czystości z kontrolą jakości i zastępstwami.",
    bullets: [
      "harmonogram i zakres",
      "checklisty + kontrola wykonania",
      "zastępstwa (ciągłość)",
      "ryczałtowa cena dla sieci handlowych",
    ],
    ctaLabel: "Zobacz szczegóły",
    ctaHref: "/utrzymanie-czystosci",
    icon: "cycle",
  },
] as const;

function renderCardIcon(icon: (typeof scopeCards)[number]["icon"]) {
  if (icon === "build") {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M4.5 17.8h15M7 17.8V10h10v7.8M10.5 10V7.8h3V10" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
      </svg>
    );
  }
  if (icon === "window") {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <rect x="5.2" y="5.2" width="13.6" height="13.6" rx="1.6" fill="none" stroke="currentColor" strokeWidth="1.8" />
        <path d="M12 5.2v13.6M5.2 12h13.6" fill="none" stroke="currentColor" strokeWidth="1.8" />
      </svg>
    );
  }
  if (icon === "floor") {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M5 7.4h14M5 12h14M5 16.6h14M9.3 7.4V12M14.7 12v4.6" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
      </svg>
    );
  }
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M12 4.8v2.8M12 16.4v2.8M4.8 12h2.8M16.4 12h2.8M7.1 7.1l2 2M14.9 14.9l2 2M7.1 16.9l2-2M14.9 9.1l2-2" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
    </svg>
  );
}

export default function WhyDomkerSection() {
  return (
    <section className={`section ${styles.section}`} aria-labelledby="why-domker-title">
      <div className={`container ${styles.container}`}>
        <header className={styles.header}>
          <h2 id="why-domker-title">Zakres na start (krótko)</h2>
          <p className={styles.footnote}>Szczegóły na podstronach usług.</p>
        </header>

        <div className={styles.grid}>
          {scopeCards.map((group) => (
            <article key={group.id} id={group.id} className={`card ${styles.card}`}>
              <header className={styles.cardHeader}>
                <span className={styles.cardIcon} aria-hidden="true">
                  {renderCardIcon(group.icon)}
                </span>
                <div className={styles.cardHeadCopy}>
                  <h3>{group.title}</h3>
                  <p className={styles.microcopy}>{group.microcopy}</p>
                </div>
              </header>

              <ul className={styles.list}>
                {group.bullets.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>

              <footer className={styles.cardFooter}>
                <Link href={group.ctaHref} className={styles.cardLink}>
                  {group.ctaLabel}
                  <span className={styles.cardLinkArrow} aria-hidden="true">
                    →
                  </span>
                </Link>
              </footer>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
