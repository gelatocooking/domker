"use client";

import { useMemo, useState, type FormEvent } from "react";
import styles from "./LeadFormSection.module.css";

const deliverables = [
  "Widełki + termin - tego samego dnia.",
  "Oferta PDF/HTML gotowa do przekazania dalej.",
  "Protokół i standard odbioru.",
  "Kontakt operacyjny (SLA 24h dla sieci).",
] as const;

const guidanceChips = ["Odbiór", "Otwarcie", "Noc", "Procedury dostępu", "Pilne"] as const;
const trustBadges = ["Faktura VAT",  "OC 500k+", "Protokół + zdjęcia"] as const;


type RequiredField = "companyName" | "contact" | "location";

export default function LeadFormSection() {
  const [companyName, setCompanyName] = useState("");
  const [contact, setContact] = useState("");
  const [location, setLocation] = useState("");
  const [message, setMessage] = useState("");
  const [touched, setTouched] = useState<Record<RequiredField, boolean>>({
    companyName: false,
    contact: false,
    location: false,
  });
  const [hasSubmitAttempt, setHasSubmitAttempt] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const isMinimumDataReady =
    companyName.trim().length > 0 && contact.trim().length > 0 && location.trim().length > 0;

  const errors = useMemo(
    () => ({
      companyName: companyName.trim() ? "" : "Podaj nazwę firmy lub inwestycji.",
      contact: contact.trim() ? "" : "Podaj e-mail lub telefon kontaktowy.",
      location: location.trim() ? "" : "Podaj lokalizację (minimum miasto).",
    }),
    [companyName, contact, location],
  );

  const showError = (field: RequiredField) => (touched[field] || hasSubmitAttempt) && !!errors[field];

  const appendGuidance = (value: string) => {
    setMessage((current) => (current.trim() ? `${current.trim()} • ${value}` : value));
  };

  const markTouched = (field: RequiredField) => {
    setTouched((current) => ({ ...current, [field]: true }));
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!isMinimumDataReady) {
      setHasSubmitAttempt(true);
      setTouched({ companyName: true, contact: true, location: true });
      return;
    }

    setIsSubmitted(true);
  };

  return (
    <section
      id="formularz"
      className={`section ${styles.section}`}
      aria-labelledby="lead-form-title"
    >
      <div className={`container ${styles.container}`}>
        <header className={styles.header}>
          <h2 id="lead-form-title">Oferta do zatwierdzenia - minimum danych</h2>
          <p className="lead">
            Uzupełnij podstawowe informacje. Wracamy tego samego dnia z widełkami,
            terminem i ofertą (PDF/HTML) gotową do przekazania dalej.
          </p>
        </header>

        <div className={styles.content}>
          {isSubmitted ? (
            <article className={`card ${styles.successCard}`} aria-live="polite">
              <h3>Zapytanie przyjęte</h3>
              <p>Pracujemy już nad Twoją wyceną. Co dalej:</p>
              <ol className={styles.successSteps}>
                <li>Weryfikujemy dane wejściowe i warunki dostępu.</li>
                <li>Wracamy tego samego dnia z widełkami i terminem.</li>
                <li>Dostarczamy ofertę gotową do przekazania dalej.</li>
              </ol>
            </article>
          ) : (
            <form className={`card ${styles.form}`} aria-label="Formularz zapytania" onSubmit={handleSubmit} noValidate>
              <div className="field">
                <label htmlFor="companyName" className="label">
                  Nazwa firmy*
                </label>
                <p className={styles.fieldHint}>Może być nazwa inwestycji / sieci.</p>
                <input
                  id="companyName"
                  name="companyName"
                  type="text"
                  className={`input ${showError("companyName") ? styles.inputError : ""}`}
                  value={companyName}
                  onChange={(event) => setCompanyName(event.target.value)}
                  onBlur={() => markTouched("companyName")}
                  aria-invalid={showError("companyName")}
                  aria-describedby={showError("companyName") ? "companyName-error" : undefined}
                  required
                />
                {showError("companyName") ? (
                  <p id="companyName-error" className={styles.fieldError}>
                    {errors.companyName}
                  </p>
                ) : null}
              </div>

              <div className="field">
                <label htmlFor="contact" className="label">
                  E-mail lub telefon*
                </label>
                <p className={styles.fieldHint}>Wystarczy jedno - oddzwonimy / odpiszemy.</p>
                <input
                  id="contact"
                  name="contact"
                  type="text"
                  className={`input ${showError("contact") ? styles.inputError : ""}`}
                  value={contact}
                  onChange={(event) => setContact(event.target.value)}
                  onBlur={() => markTouched("contact")}
                  aria-invalid={showError("contact")}
                  aria-describedby={showError("contact") ? "contact-error" : undefined}
                  required
                />
                {showError("contact") ? (
                  <p id="contact-error" className={styles.fieldError}>
                    {errors.contact}
                  </p>
                ) : null}
              </div>

              <div className="field">
                <label htmlFor="location" className="label">
                  Lokalizacja: miasto / adres*
                </label>
                <p className={styles.fieldHint}>Miasto wystarczy, jeśli adresu jeszcze nie ma.</p>
                <input
                  id="location"
                  name="location"
                  type="text"
                  className={`input ${showError("location") ? styles.inputError : ""}`}
                  value={location}
                  onChange={(event) => setLocation(event.target.value)}
                  onBlur={() => markTouched("location")}
                  aria-invalid={showError("location")}
                  aria-describedby={showError("location") ? "location-error" : undefined}
                  required
                />
                {showError("location") ? (
                  <p id="location-error" className={styles.fieldError}>
                    {errors.location}
                  </p>
                ) : null}
              </div>

              <div className="field">
              <label htmlFor="message" className="label">
                Szczegóły: metraż/skala, cel (odbiór/otwarcie), termin i okno wejścia,
                ograniczenia dostępu
              </label>
              <p className={styles.fieldHint}>
                metraż / liczba lokali • cel (odbiór/otwarcie) • termin i okno wejścia •
                ograniczenia dostępu • co jest najtrudniejsze
              </p>
              <textarea
                id="message"
                name="message"
                className="textarea"
                  value={message}
                  onChange={(event) => setMessage(event.target.value)}
                />
                <div className={styles.guidance}>
                  <p className={styles.guidanceLabel}>Szybkie wstawki</p>
                  <div className={styles.guidanceChips}>
                    {guidanceChips.map((chip) => (
                      <button
                        key={chip}
                        type="button"
                        className={styles.guidanceChip}
                        onClick={() => appendGuidance(chip)}
                      >
                        {chip}
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              <button type="submit" className={`btn btnAccent ${styles.submit}`} disabled={!isMinimumDataReady}>
                Wyślij zapytanie
              </button>

              <div className={styles.trustRow} aria-label="Potwierdzenia formalne">
                {trustBadges.map((badge) => (
                  <span key={badge} className={styles.trustBadge}>
                    {badge}
                  </span>
                ))}
              </div>
            </form>
          )}

          <aside className={`card ${styles.proof}`} aria-label="Co dostaniesz dziś">
            <h3>Co dostaniesz dziś</h3>
            <ul className={styles.proofList}>
              {deliverables.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </aside>
        </div>
      </div>
    </section>
  );
}
