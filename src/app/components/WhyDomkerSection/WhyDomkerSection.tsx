import Link from "next/link";
import styles from "./WhyDomkerSection.module.css";

const groups = [
  {
    title: "Kierownicy budowy / wykonawcy",
    description:
      "Gdy jesteś na końcówce, nie potrzebujesz „ładnego sprzątania” — potrzebujesz gotowości pod odbiór w realnym oknie wejścia. Najczęściej problemem nie jest sam brud, tylko: nachodzące ekipy, detale wychodzące „pod światło”, pył technologiczny wracający po kolejnych pracach i ryzyko uszkodzeń świeżych powierzchni złą technologią.",
    intro: "W praktyce pomagamy, gdy:",
    bullets: [
      "odbiór inwestorski / urzędowy jest blisko i nie ma miejsca na poprawki,",
      "sprzątanie musi wejść „między robotami” albo po godzinach,",
      "trzeba dopiąć strefy krytyczne (wejścia, komunikacja, sanitariaty, witryny/okna) i zgłosić gotowość dopiero po kontroli checklistą.",
    ],
    ctaLabel: "Kierownik budowy",
    ctaHref: "/sprzatanie-po-budowie/kierownik-budowy",
    footnote: "Domker — sprzątanie po budowie…",
  },
  {
    title: "Zarządcy nieruchomości / koordynacja sieci / office",
    description:
      "Tu zwykle nie wygrywa „opis zakresu”. Wygrywa powtarzalność, przewidywalność i brak losowości ekip — szczególnie gdy masz wiele lokalizacji, procedury dostępu i stałe wymagania co do standardu. Domker działa ogólnopolsko i prowadzi realizacje tak, żebyś miał jasny punkt kontaktu, kontrolę wykonania i ciągłość serwisu.",
    intro: "To ma sens, gdy:",
    bullets: [
      "odpowiadasz za uruchomienia/odświeżenia wielu punktów w krótkim czasie,",
      "potrzebujesz jednego podejścia w wielu lokalizacjach (checklisty, kontrola, zastępstwa),",
      "temat ma być „do przekazania dalej” w organizacji — dlatego oferta jest przygotowana jako PDF/HTML gotowy do wysłania do przełożonego / zarządu / działu zakupów.",
    ],
    ctaLabel: "Koordynacja sieci / zarządca",
    ctaHref: "/sprzatanie-po-budowie/zarzadca-nieruchomosci",
  },
  {
    title: "Firmy wykończeniowe",
    description:
      "Jeśli robisz prace wykończeniowe i zależy Ci, żeby etap sprzątania nie cofnął harmonogramu ani nie zrobił szkody na nowych powierzchniach — Domker wchodzi jako partner operacyjny. Ustalamy kolejność działań pod obiekt i materiał, tak żeby nie generować wtórnego pylenia, smug i poprawek na końcu.",
    intro: "Najczęstsze scenariusze:",
    bullets: [
      "sprzątanie po pracach wykończeniowych przed przekazaniem / otwarciem,",
      "doczyszczenie detali po montażu (ślady po foliach i klejach, pył po szlifach, newralgiczne strefy przy listwach i profilach),",
      "przygotowanie obiektu w takim standardzie, który przechodzi odbiór bez „jeszcze jednego wejścia”.",
    ],
    ctaLabel: "Prace wykończeniowe / biuro / office",
    ctaHref: "/sprzatanie-po-budowie/zarzadca-nieruchomosci",
  },
];

export default function WhyDomkerSection() {
  return (
    <section className={`section ${styles.section}`} aria-labelledby="why-domker-title">
      <div className={`container ${styles.container}`}>
        <header className={styles.header}>
          <h2 id="why-domker-title">Dla kogo to jest</h2>
          <p>
            Jeśli sprzątanie ma być elementem procesu inwestycyjnego (odbiór, przekazanie,
            otwarcie albo powtarzalny standard w wielu lokalizacjach), ta sekcja jest dla Ciebie.
            Domker pracuje operacyjnie: ustalamy cel, okno wejścia, kolejność prac bezpieczną dla
            nowych wykończeń (posadzki, szyby albo okna, armatura) i finalizujemy realizację
            dopiero po kontroli wewnętrznej.
          </p>
        </header>

        <div className={styles.grid}>
          {groups.map((group) => (
            <article key={group.title} className={`card ${styles.card}`}>
              <h3>{group.title}</h3>
              <p>{group.description}</p>
              <p className={styles.listIntro}>{group.intro}</p>
              <ul className={styles.list}>
                {group.bullets.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
              <Link href={group.ctaHref} className={styles.microCta}>
                {group.ctaLabel}
              </Link>
              {group.footnote && <p className={styles.footnote}>{group.footnote}</p>}
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
