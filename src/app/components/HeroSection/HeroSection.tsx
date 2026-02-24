import Link from "next/link";
import styles from "./HeroSection.module.css";

const trustBadges = [
  "Odpowiedź na zapytanie w godzinach pracy biura: do 15 minut",
  "Dla sieci: SLA 24h* (kontakt operacyjny)",
  "Widełki / wstępna wycena: tego samego dnia po skompletowaniu informacji",
  "Oferta do przekazania dalej (PDF/HTML) — od razu gotowa do wysłania",
  "Mycie witryn dla sieci handlowych: do 800 witryn miesięcznie w całej Polsce",
  "Gotowość do startu prac: nawet w 3 dni*",
];

export default function HeroSection() {
  return (
    <section className={`section hero ${styles.section}`} aria-labelledby="hero-title">
      <div className={`container ${styles.container}`}>
        <div className={styles.content}>
          <p className={styles.eyebrow}>Usługi dla firm</p>
          <h1 id="hero-title" className={styles.title}>
            Sprzątanie dla firm i sieci handlowych — pod odbiory i przekazanie obiektu
            (po budowie, po remontach, utrzymanie)
          </h1>
          <p className={`lead ${styles.lead}`}>
            Domker to firma sprzątająca, która myśli jak wykonawca — szczególnie tam,
            gdzie liczą się odbiory, terminy i standard w wielu lokalizacjach w całej
            Polsce. Dopasowujemy się do dynamicznego harmonogramu prac, chronimy nowe
            wykończenia (posadzki, szyby albo okna, armaturę) i zostawiamy obiekt gotowy
            do odbioru, otwarcia albo przekazania.
          </p>
          <p>
            Realizujemy sprzątanie po budowie i po pracach wykończeniowych, cykliczne
            utrzymanie czystości biur i lokali handlowo-usługowych, maszynowe czyszczenie
            posadzek oraz mycie witryn dla firm.
          </p>

          <div className={styles.actions}>
            <Link href="/kontakt" className={`btn btnPrimary ${styles.actionMain}`}>
              Odbierz ofertę do wysłania (PDF/HTML)
            </Link>
            <a
              href="tel:+48502992002"
              className={`btn btnGhost ${styles.actionSecondary}`}
            >
              Zadzwoń (minimum danych)
            </a>
          </div>

          <ul className={styles.trustBadges} aria-label="Wyróżniki Domker">
            {trustBadges.map((badge) => (
              <li key={badge} className={styles.badge}>
                <span>{badge}</span>
              </li>
            ))}
          </ul>

          <p className={styles.urgent}>
            *po spełnieniu warunków. W pilnych sprawach zadzwoń: {" "}
            <a className={styles.phone} href="tel:+48502992002">
              +48 502 992 002
            </a>
            .
          </p>
        </div>
      </div>
    </section>
  );
}

