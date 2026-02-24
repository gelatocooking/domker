import styles from "./FaqSection.module.css";

const faqItems = [
  {
    question:
      "Czy pracujecie na obiektach z procedurami dostępu (umowa o zachowaniu poufności, rejestry wejść, przepustki)?",
    answer:
      "Tak — wdrażamy umowę o zachowaniu poufności na życzenie, rejestr wejść i procedury dostępu zgodnie z wymaganiami obiektu.",
  },
  {
    question: "Czy wystawiacie fakturę VAT?",
    answer: "Tak, jesteśmy czynnymi płatnikami VAT.",
  },
  {
    question: "Jak wygląda ubezpieczenie? Czy obejmuje też powierzone mienie?",
    answer:
      "Tak — mamy OC: pół miliona złotych. Zakres i suma ubezpieczenia są opisane w ofercie, a jeśli obiekt ma dodatkowe wymagania (np. mienie powierzone), dopasowujemy dokumenty do procedur Zleceniodawcy. Przy niestandardowym zleceniu możliwe jest wykupienie dodatkowego ubezpieczenia na życzenie klienta.",
  },
  {
    question: "Jakie są terminy płatności za usługę?",
    answer:
      "Standardowo 14 dni. Jeżeli potrzebujesz 30/60 dni albo rozliczenia etapami — ustalimy to wprost w umowie.",
  },
  {
    question: "Jak wygląda odbiór?",
    answer:
      "Przeprowadzamy odbiór wewnętrzny checklistą, a potem finalizujemy usługę protokołem odbioru i zdjęciami. Jeśli coś odkryjemy — dostajesz też protokół usterek.",
  },
  {
    question: "Czy działacie w całej Polsce i jak rozliczacie logistykę?",
    answer:
      "Tak — działamy na terenie całej Polski. Logistykę ustalamy w wycenie (lokalizacja, termin, okno wejścia, zasady dostępu).",
  },
  {
    question: "Czy wejdziecie na już?",
    answer:
      "Tak — jeśli mamy minimum danych i jasne warunki wejścia, wracamy szybko z widełkami i terminem. Nawet na następny dzień. W pilnych sprawach najlepiej zadzwonić: +48 502 992 002.",
  },
];

export default function FaqSection() {
  return (
    <section className={`section ${styles.section}`} aria-labelledby="faq-title">
      <div className={`container ${styles.container}`}>
        <header className={styles.header}>
          <h2 id="faq-title">Pytania, które padają w B2B</h2>
        </header>

        <div className={styles.list}>
          {faqItems.map((item) => (
            <details key={item.question} className={`card ${styles.item}`}>
              <summary className={styles.question}>{item.question}</summary>
              <p className={styles.answer}>{item.answer}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}

