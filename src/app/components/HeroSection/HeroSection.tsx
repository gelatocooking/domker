import Link from "next/link";
import styles from "./HeroSection.module.css";

const heroScopePoints = ["Po budowie", "Po remontach", "Utrzymanie"];

const trustRow = [
  { label: "Odpowiedź", text: "do 15 min (w godzinach biura)", icon: "clock" },
  { label: "Wycena", text: "tego samego dnia po podaniu danych", icon: "quote" },
  { label: "Oferta", text: "gotowa do wysłania dalej", icon: "offer" },
] as const;

function renderTrustRowIcon(icon: (typeof trustRow)[number]["icon"]) {
  if (icon === "clock") {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <circle cx="12" cy="12" r="8" fill="none" stroke="currentColor" strokeWidth="1.8" />
        <path d="M12 8V12L15 13.8" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
      </svg>
    );
  }

  if (icon === "quote") {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M7 9H10V12H7V15H4V12C4 10.3 5.3 9 7 9Z" fill="none" stroke="currentColor" strokeWidth="1.8" />
        <path d="M16 9H19V12H16V15H13V12C13 10.3 14.3 9 16 9Z" fill="none" stroke="currentColor" strokeWidth="1.8" />
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <rect x="5" y="4.5" width="14" height="15" rx="2" fill="none" stroke="currentColor" strokeWidth="1.8" />
      <path d="M8.5 9H15.5M8.5 13H13.5" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
    </svg>
  );
}

export default function HeroSection() {
  return (
    <section className={`section ${styles.section}`} aria-labelledby="hero-title">
      <div className={styles.wrapper}>
        <div className={styles.content}>
          <div className={styles.mainGrid}>
            <div className={styles.leftCol}>
              <p className={styles.eyebrow}>Usługi dla firm</p>
              <h1 id="hero-title" className={styles.title}>
                Sprzątanie dla firm i sieci handlowych <br></br> pod odbiory i przekazanie obiektu
              </h1>
              <p className={styles.heroMeta} aria-label="Zakres w skrócie">
                {heroScopePoints.join(" • ")}
              </p>
              <div className={styles.leadScopeGrid}>
                <div className={styles.leadCopy}>
                  <p className={styles.leadPrimary}>
                    Domker to <strong>firma sprzątająca</strong>, która <strong>myśli jak wykonawca</strong>.
                  </p>
                  <p className={styles.leadSupport}>
                    <strong>Odbiory, terminy i standard</strong> w wielu lokalizacjach w całej Polsce.
                    Dopasowujemy się do dynamicznego harmonogramu prac, chronimy
                    <strong> nowe wykończenia</strong> i zostawiamy obiekt
                    <strong> gotowy do odbioru, otwarcia albo przekazania</strong>.
                  </p>
                </div>
                <div className={styles.scopeLine}>
                  <h3 className={styles.scopeHeading}>Zakres w skrócie</h3>
                  <p className={styles.scopeMicrocopy}>
                    Usługi domykające przygotowanie obiektu do odbioru.
                  </p>
                  <ul className={styles.scopeList}>
                    <li><strong>sprzątanie po budowie</strong> i po pracach wykończeniowych</li>
                    <li><strong>cykliczne utrzymanie czystości</strong> biur i lokali handlowo-usługowych</li>
                    <li><strong>maszynowe czyszczenie</strong> posadzek</li>
                    <li><strong>mycie witryn</strong> dla firm</li>
                  </ul>
                </div>
              </div>

              <div className={styles.actions}>
                <Link href="/kontakt" className={`btn btnPrimary ${styles.actionMain}`}>
                  Odbierz ofertę do wysłania
                </Link>
                <a
                  href="tel:+48502992002"
                  className={`btn btnGhost ${styles.actionSecondary}`}
                >
                  Kontakt operacyjny
                </a>
              </div>

              <ul className={styles.trustRow} aria-label="Szybkość obsługi">
                {trustRow.map((item) => (
                  <li key={item.label} className={styles.trustRowItem}>
                    <span className={styles.trustRowIcon} aria-hidden="true">
                      {renderTrustRowIcon(item.icon)}
                    </span>
                    <span className={styles.trustRowText}>
                      <strong>{item.label}:</strong> {item.text}
                    </span>
                  </li>
                ))}
              </ul>

              <a className={styles.phoneLink} href="tel:+48502992002">
                <svg viewBox="0 0 24 24" aria-hidden="true">
                  <path
                    d="M6.4 4.8H9L10.2 8.2L8.7 9.7C9.5 11.3 10.8 12.6 12.4 13.4L13.9 11.9L17.3 13.1V15.7C17.3 16.3 16.8 16.8 16.2 16.8C10 16.8 4.9 11.7 4.9 5.5C4.9 4.9 5.4 4.4 6 4.4"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.7"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                W pilnych sprawach: +48 502 992 002
              </a>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
