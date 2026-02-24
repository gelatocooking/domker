import Link from "next/link";
import styles from "./ContactSection.module.css";

export default function ContactSection() {
  return (
    <section className={`section ${styles.section}`} aria-labelledby="contact-title">
      <div className={`container ${styles.container}`}>
        <header className={styles.header}>
          <h2 id="contact-title">Kontakt — wybierz cel</h2>
          <p className="lead">
            Potrzebujesz oferty do zatwierdzenia (PDF/HTML)? Wyślij zapytanie.
            Zbieramy minimum danych i wracamy tego samego dnia z widełkami oraz
            ofertą, którą możesz od razu wysłać do przełożonego, zarządu lub działu
            zakupów.
          </p>
          <p>
            Potrzebujesz terminu, wejścia na już albo krótkiej rozmowy? Zadzwoń.
          </p>
        </header>
        <div className={styles.actions}>
          <Link href="/kontakt" className={`btn btnPrimary ${styles.cta}`}>
            Wyślij zapytanie
          </Link>
          <a href="tel:+48502992002" className={`btn btnGhost ${styles.cta}`}>
            Zadzwoń: +48 502 992 002
          </a>
        </div>
      </div>
    </section>
  );
}

