import styles from "./LeadFormSection.module.css";

export default function LeadFormSection() {
  return (
    <section
      id="formularz"
      className={`section ${styles.section}`}
      aria-labelledby="lead-form-title"
    >
      <div className={`container ${styles.container}`}>
        <header className={styles.header}>
          <h2 id="lead-form-title">Oferta do zatwierdzenia — minimum danych</h2>
          <p className="lead">
            Uzupełnij podstawowe informacje. Wracamy tego samego dnia z widełkami,
            terminem i ofertą (PDF/HTML) gotową do przekazania dalej.
          </p>
        </header>

        <form className={`card ${styles.form}`} aria-label="Formularz zapytania">
          <div className="field">
            <label htmlFor="companyName" className="label">
              Nazwa firmy*
            </label>
            <input
              id="companyName"
              name="companyName"
              type="text"
              className="input"
              required
            />
          </div>

          <div className="field">
            <label htmlFor="contact" className="label">
              E-mail lub telefon*
            </label>
            <input
              id="contact"
              name="contact"
              type="text"
              className="input"
              required
            />
          </div>

          <div className="field">
            <label htmlFor="location" className="label">
              Lokalizacja: miasto / adres*
            </label>
            <input
              id="location"
              name="location"
              type="text"
              className="input"
              required
            />
          </div>

          <div className="field">
            <label htmlFor="message" className="label">
              Szczegóły: metraż/skala, cel (odbiór/otwarcie), termin i okno wejścia,
              ograniczenia dostępu
            </label>
            <textarea id="message" name="message" className="textarea" />
          </div>

          <button type="submit" className={`btn btnAccent ${styles.submit}`}>
            Wyślij zapytanie
          </button>
        </form>
      </div>
    </section>
  );
}

