import Link from "next/link";
import styles from "./ScenariosSection.module.css";

const services = [
  {
    title:
      "Sprzątanie po budowie / przed otwarciem punktu / po odświeżeniach lokalu (refit)",
    description:
      "Odbiory, przekazanie, presja terminów. Sprzątanie po budowie i po pracach wykończeniowych — bez ryzyka uszkodzeń wykończonych powierzchni.",
    bullets: [
      "Pracujemy w skali od pojedynczych lokali po duże obiekty — dobieramy zespoły i sprzęt do terminu.",
      "Maksymalne moce przerobowe: do 5000 m2 dziennie lub do 300 doczyszczonych okien dziennie.*",
      "Wejścia między robotami i po godzinach — dopasowujemy okno prac do harmonogramu na obiekcie.",
      "Usługa dostępna w całej Polsce.",
      "Legalnie zatrudnieni i przeszkoleni pracownicy.",
      "Protokoły odbioru i zdjęcia + protokoły odkrytych usterek dla Zleceniodawcy.",
      "Koordynator w trakcie realizacji: wsparcie merytoryczne + kontakt po stronie Zleceniodawcy do osoby decyzyjnej.",
    ],
    href: "/sprzatanie-po-budowie",
    cta: "Dowiedz się więcej",
    isFeatured: true,
    personas: [
      {
        href: "/sprzatanie-po-budowie/kierownik-budowy",
        label: "Kierownik budowy",
      },
      {
        href: "/sprzatanie-po-budowie/zarzadca-nieruchomosci",
        label: "Koordynacja sieci / zarządca nieruchomości / office / wykończeniówka",
      },
    ],
    footnote:
      "*To są maksima organizacyjne i terminowe — zależą od warunków na obiekcie, zakresu prac i okna realizacji.",
  },
  {
    title: "Mycie witryn (dla sieci handlowych i pojedynczych lokali) + okna (w mieszkaniach i domach prywatnych)",
    description:
      "Mycie witryn dla firm — szybka wycena ze zdjęć i logistyka po naszej stronie.",
    href: "/mycie-okien-i-witryn",
    cta: "Zobacz usługę",
  },
  {
    title: "Maszynowe czyszczenie posadzek (B2B)",
    description:
      "Doczyszczanie posadzek w obiektach komercyjnych. Technologia dobrana do typu posadzki i rodzaju zabrudzeń — plus ekspertyza zabrudzeń i specjalistyczne odplamianie.",
    href: "/maszynowe-czyszczenie-posadzek",
    cta: "Dowiedz się więcej",
  },
  {
    title: "Cykliczne utrzymanie czystości (B2B)",
    description:
      "Sprzątanie biur i lokali handlowo-usługowych. Stały standard, kontrola wykonania i zastępstwa — także w lokalach w sieciach handlowych.",
    href: "/utrzymanie-czystosci",
    cta: "Dowiedz się więcej",
    personas: [
      { href: "/utrzymanie-czystosci/biura", label: "Biura" },
      {
        href: "/utrzymanie-czystosci/lokale-handlowo-uslugowe",
        label: "Lokale handlowo-usługowe",
      },
    ],
  },
];

export default function ScenariosSection() {
  return (
    <section className={`section ${styles.section}`} aria-labelledby="scenarios-title">
      <div className={`container ${styles.container}`}>
        <header className={styles.header}>
          <h2 id="scenarios-title">Wybierz usługę — i przejdź od problemu do decyzji</h2>
        </header>

        <div className={styles.grid}>
          {services.map((service) => (
            <article className={`card ${styles.card}`} key={service.title}>
              {service.isFeatured && (
                <p className={styles.featuredBadge}>
                  <svg
                    className={styles.featuredIcon}
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    aria-hidden="true"
                  >
                    <path
                      d="M5 3.5V20.5"
                      stroke="currentColor"
                      strokeWidth="2.2"
                      strokeLinecap="round"
                    />
                    <path d="M6.5 5.5H18L15.8 9L18 12.5H6.5V5.5Z" fill="currentColor" />
                  </svg>
                </p>
              )}
              <h3>{service.title}</h3>
              <p>{service.description}</p>

              {service.bullets && (
                <ul className={styles.bullets}>
                  {service.bullets.map((bullet) => (
                    <li key={bullet}>{bullet}</li>
                  ))}
                </ul>
              )}

              {service.personas && (
                <div className={styles.personas}>
                  {service.personas.map((persona) => (
                    <Link key={persona.href} href={persona.href} className={styles.personaLink}>
                      {persona.label}
                    </Link>
                  ))}
                </div>
              )}

              {service.footnote && <p className={styles.footnote}>{service.footnote}</p>}

              <Link href={service.href} className={`btn btnPrimary ${styles.cta}`}>
                {service.cta}
              </Link>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
