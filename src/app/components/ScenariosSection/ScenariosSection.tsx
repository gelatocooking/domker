import Link from "next/link";
import styles from "./ScenariosSection.module.css";

const services = [
  {
    title:
      "Sprzątanie po budowie",
    description:
      "Odbiory, przekazanie, presja terminów. Sprzątanie po budowie i po pracach wykończeniowych — bez ryzyka uszkodzeń wykończonych powierzchni.",
    facts: [
      { label: "Skala", value: "od pojedynczych lokali do dużych obiektów", icon: "scale" },
      { label: "Okna wejścia", value: "między robotami i po godzinach", icon: "time" },
      { label: "Zasięg", value: "usługa dostępna w całej Polsce", icon: "area" },
      { label: "Legalność", value: "legalnie zatrudnieni i przeszkoleni pracownicy", icon: "legal" },
      { label: "Dobór zespołu", value: "zespoły i sprzęt dobierane do terminu", icon: "team" },
      { label: "Bez ryzyka uszkodzeń", value: "technologia pod wykończone powierzchnie", icon: "safe" },
    ] as const,
    href: "/sprzatanie-po-budowie",
    cta: "Zobacz usługę",
    isFeatured: true,
    personas: [
      {
        href: "/sprzatanie-po-budowie/kierownik-budowy",
        label: "Kierownik budowy",
      },
      {
        href: "/sprzatanie-po-budowie/zarzadca-nieruchomosci",
        label: "Koordynacja sieci / zarządca nieruchomości / office",
      },
    ],
    footnote:
      "*To są maksima organizacyjne i terminowe — zależą od warunków na obiekcie, zakresu prac i okna realizacji.",
  },
  {
    title: "Mycie witryn i okien",
    description:
      "Dla sieci handlowych i pojedynczych lokali oraz dla mieszkań i domów prywatnych. Mycie witryn dla firm — szybka wycena ze zdjęć i logistyka po naszej stronie.",
    href: "/mycie-okien-i-witryn",
    cta: "Zobacz usługę",
    badges: ["B2B", "B2C"],
  },
  {
    title: "Maszynowe czyszczenie posadzek",
    description:
      "Doczyszczanie posadzek w obiektach komercyjnych. Technologia dobrana do typu posadzki i rodzaju zabrudzeń — plus ekspertyza zabrudzeń i specjalistyczne odplamianie.",
    href: "/maszynowe-czyszczenie-posadzek",
    cta: "Zobacz usługę",
    badges: ["B2B"],
  },
  {
    title: "Cykliczne utrzymanie czystości",
    description:
      "Sprzątanie biur i lokali handlowo-usługowych. Stały standard, kontrola wykonania i zastępstwa — także w lokalach w sieciach handlowych.",
    href: "/utrzymanie-czystosci",
    cta: "Zobacz usługę",
    badges: ["B2B"],
    
  },
];

function renderServiceTitle(title: string) {
  if (title === "Cykliczne utrzymanie czystości") {
    return (
      <>
        Cykliczne utrzymanie
        <br />
        czystości
      </>
    );
  }

  return title;
}

function renderFactIcon(icon: "scale" | "time" | "area" | "legal" | "team" | "safe") {
  if (icon === "scale") {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M12 5.5v12.5M7.2 18.4h9.6M6 8.2h12" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
      </svg>
    );
  }
  if (icon === "time") {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <circle cx="12" cy="12" r="7.8" fill="none" stroke="currentColor" strokeWidth="1.8" />
        <path d="M12 8.5v3.8l2.6 1.7" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
      </svg>
    );
  }
  if (icon === "area") {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M5.5 8.2 12 4.8l6.5 3.4v7.6L12 19.2l-6.5-3.4V8.2Z" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
      </svg>
    );
  }
  if (icon === "legal") {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M12 4.8 6.8 6.9v5.2c0 3.8 2.2 6.6 5.2 8 3-1.4 5.2-4.2 5.2-8V6.9L12 4.8Z" fill="none" stroke="currentColor" strokeWidth="1.8" />
        <path d="m9.5 12.1 1.6 1.6 3-3" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    );
  }
  if (icon === "team") {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <circle cx="9" cy="9" r="2.3" fill="none" stroke="currentColor" strokeWidth="1.8" />
        <circle cx="15.2" cy="9.8" r="2" fill="none" stroke="currentColor" strokeWidth="1.8" />
        <path d="M5.8 17.8c0-2.1 1.7-3.6 3.7-3.6s3.7 1.5 3.7 3.6M13.4 17.2c.2-1.5 1.4-2.6 2.9-2.6 1.5 0 2.7 1.1 2.9 2.6" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
      </svg>
    );
  }
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M12 5 4.8 18h14.4L12 5Z" fill="none" stroke="currentColor" strokeWidth="1.8" />
      <path d="M12 9.7v4.4M12 16.8h.01" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
    </svg>
  );
}

export default function ScenariosSection() {
  return (
    <section className={`section ${styles.section}`} aria-labelledby="scenarios-title">
      <div className={`container ${styles.container}`}>
        <header className={styles.header}>
          <h2 id="scenarios-title">Wybierz usługę — i przejdź od problemu do decyzji</h2>
        </header>

        <div className={styles.grid}>
          {services.map((service) => (
            <article
              className={`${styles.card} ${service.isFeatured ? styles.featuredCard : ""}`}
              key={service.title}
            >
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
              {service.isFeatured ? (
                <div className={styles.featuredLayout}>
                  <div className={styles.featuredMain}>
                    <div className={styles.titleRow}>
                      <h3 className={styles.featuredTitle}>{renderServiceTitle(service.title)}</h3>
                    </div>
                    
                    <p className={styles.featuredDescription}>{service.description}</p>
                    {service.facts && (
                      <ul className={styles.factGrid} aria-label="Kluczowe fakty realizacyjne">
                        {service.facts.map((fact) => (
                          <li key={fact.label} className={styles.factItem}>
                            <span className={styles.factHead}>
                              <span className={styles.factIcon} aria-hidden="true">
                                {renderFactIcon(fact.icon)}
                              </span>
                              <span className={styles.factLabel}>{fact.label}</span>
                            </span>
                            <span className={styles.factValue}>{fact.value}</span>
                          </li>
                        ))}
                      </ul>
                    )}
                    <p className={styles.featuredCallout}>
                      Działamy pod odbiory i przekazanie obiektu, z procesem dopiętym terminowo.
                    </p>
                  </div>
                </div>
              ) : (
                <>
                  <div className={styles.titleRow}>
                    <h3 className={styles.cardTitle}>{renderServiceTitle(service.title)}</h3>
                  </div>
                  <div className={styles.standardBody}>
                    {service.badges && (
                      <div className={styles.serviceBadges}>
                        {service.badges.map((badge) => (
                          <span key={badge} className={styles.serviceBadge}>
                            {badge}
                          </span>
                        ))}
                      </div>
                    )}
                    {service.personas && (
                      <div className={styles.personaChipsRow}>
                        <span className={styles.personaLabel}>Dla:</span>
                        <div className={styles.personas}>
                          {service.personas.map((persona) => (
                            <Link key={persona.href} href={persona.href} className={styles.personaLink}>
                              {persona.label}
                            </Link>
                          ))}
                        </div>
                      </div>
                    )}
                    <p>{service.description}</p>
                  </div>
                </>
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
