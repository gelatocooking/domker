import type { Metadata } from "next";
import Link from "next/link";
import Header from "../components/Header/Header";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "Domker - Usługi dla firm",
  description:
    "Sprzątanie dla firm i sieci handlowych pod termin i standard. Oferta do zatwierdzenia (PDF/HTML), proces domknięcia, protokoły i zdjęcia.",
};

export default function UslugiDlaFirmPage() {
  return (
    <main className={`pageBg ${styles.page}`}>
      <Header />

      <section className={`section ${styles.hero}`} aria-labelledby="uslugi-title">
        <div className={`container ${styles.container}`}>
          <h1 id="uslugi-title">Sprzątanie dla firm i sieci handlowych - pod termin i standard</h1>
          <p>
            To nie jest opis jednej usługi. To jest hub współpracy B2B: wybierasz scenariusz,
            widzisz jak to prowadzimy operacyjnie i przechodzisz do właściwej podstrony.
          </p>
          <p>
            W praktyce firmy chcą jednego: żeby temat został zamknięty (bez poprawek i bez
            opóźnień) - tak, żeby można było sprawnie przekazać go dalej w organizacji,
            umożliwiając dalszą ekspansję sieci i rozwój firmy. Dlatego w Domker dostajesz ofertę
            do zatwierdzenia (PDF/HTML) i jasny proces domknięcia: protokoły odbioru i zdjęcia.
          </p>

          <div className={`card ${styles.block}`}>
            <h2>Najczęstsze scenariusze:</h2>
            <ul className={styles.list}>
              <li>
                sprzątanie "na już": po budowie / po remoncie / po pracach wykończeniowych / przed
                otwarciem / refit
              </li>
              <li>sieci: wiele lokalizacji, jedna jakość i ciągłość</li>
              <li>stała obsługa: biura i lokale handlowo-usługowe</li>
              <li>
                witryny: abonament, szybka wycena ze zdjęć, ryczałt dla sieci (zasięg
                ogólnopolski)
              </li>
            </ul>
          </div>

          <div className={styles.actions}>
            <Link href="/kontakt" className="btn btnAccent">
              Odbierz ofertę do zatwierdzenia (PDF/HTML) - gotową do wysłania do przełożonego /
              zarządu / działu zakupów
            </Link>
          </div>

          <p className={styles.altContact}>
            Alternatywnie: Potrzebujesz szybkiego kontaktu?{" "}
            <a href="tel:+48502992002">Zadzwoń: +48 502 992 002</a>
          </p>
          <p>
            Wolisz krótko? <a href="#minimum-danych">Wyślij minimum danych</a>
          </p>
        </div>
      </section>

      <section className={`section ${styles.section}`} aria-labelledby="jak-uzyc-title">
        <div className={`container ${styles.container}`}>
          <h2 id="jak-uzyc-title">Jak użyć tej strony</h2>
          <ul className={styles.list}>
            <li>
              Masz odbiór / termin "na już" - <Link href="/sprzatanie-po-budowie">/sprzatanie-po-budowie</Link>
            </li>
            <li>
              Masz sieć i wiele lokalizacji - <a href="#siec">#siec</a>
            </li>
            <li>
              Chcesz stałą obsługę - <Link href="/utrzymanie-czystosci">/utrzymanie-czystosci</Link>
            </li>
            <li>
              Szukasz obsługi witryn - <Link href="/mycie-okien-i-witryn">/mycie-okien-i-witryn</Link>
            </li>
          </ul>
        </div>
      </section>

      <section className={`section ${styles.section}`} aria-labelledby="dla-kogo-title">
        <div className={`container ${styles.container}`}>
          <h2 id="dla-kogo-title">Dla kogo to jest</h2>
          <p>
            Jeśli potrzebujesz wykonawcy, który zdejmie z Ciebie koordynację realizacji i weźmie
            ją po swojej stronie - to jest ta strona.
          </p>
          <p>Najczęściej pracujemy z:</p>
          <ul className={styles.list}>
            <li>generalnymi wykonawcami i kierownikami budów (oraz biurem: zakupy/zaopatrzenie)</li>
            <li>firmami rozwijającymi sieć lokali w wielu miastach</li>
            <li>
              obiektami, gdzie standard musi być powtarzalny (biura, punkty handlowo-usługowe)
            </li>
          </ul>
        </div>
      </section>

      <section className={`section ${styles.section}`} aria-labelledby="co-chca-title">
        <div className={`container ${styles.container}`}>
          <h2 id="co-chca-title">Co firmy realnie chcą mieć "załatwione"</h2>
          <p>W B2B zwykle nie wygrywa "najładniejszy opis zakresu". Wygrywa to, że:</p>
          <ul className={styles.list}>
            <li>da się wejść w konkretnym oknie (także po godzinach i "między robotami")</li>
            <li>nowe wykończenia są bezpieczne (podłogi, szkło, armatura)</li>
            <li>oferta jest gotowa do przekazania dalej bez 5. rund doprecyzowań</li>
            <li>
              w wielu lokalizacjach standard jest taki sam: stały zakres, checklisty i kontrola
              wykonania + zastępstwa (ciągłość serwisu)
            </li>
            <li>po realizacji masz materiał do zamknięcia tematu: protokoły odbioru i zdjęcia</li>
          </ul>
          <p>
            <strong>Micro-CTA:</strong>{" "}
            <Link href="/kontakt">
              Wyślij komplet informacji - wrócimy z widełkami i kolejnym krokiem
            </Link>
          </p>
          <p>
            Albo szybciej: <a href="tel:+48502992002">zadzwoń bezpośrednio: +48 502 992 002</a>
          </p>
        </div>
      </section>

      <section className={`section ${styles.section}`} aria-labelledby="scenariusze-title">
        <div className={`container ${styles.container}`}>
          <h2 id="scenariusze-title">Wybierz scenariusz</h2>

          <article className={`card ${styles.block}`}>
            <h3>Sprzątanie po budowie / przed otwarciem punktu / po odświeżeniach lokalu (refit)</h3>
            <p>
              Tu najczęściej wszystko rozbija się o czas: odbiór, przekazanie, otwarcie. Dlatego
              od startu ustawiamy priorytety i okno wejścia, żeby rozpocząć i zakończyć działania
              dokładnie wtedy, gdy tego potrzebujesz.
            </p>
            <ul className={styles.list}>
              <li>
                Kierownik budowy -{" "}
                <Link href="/sprzatanie-po-budowie/kierownik-budowy">
                  /sprzatanie-po-budowie/kierownik-budowy
                </Link>
              </li>
              <li>
                Biuro / koordynacja / wykończeniówka / office -{" "}
                <Link href="/sprzatanie-po-budowie/zarzadca-nieruchomosci">
                  /sprzatanie-po-budowie/zarzadca-nieruchomosci
                </Link>
              </li>
              <li>
                Strona usługi - <Link href="/sprzatanie-po-budowie">/sprzatanie-po-budowie</Link>
              </li>
            </ul>
            <p>
              <strong>Mini-proof:</strong> Pracujemy od pojedynczych lokali po większe obiekty -
              zespoły i sprzęt dobieramy pod termin i warunki wejścia.
            </p>
          </article>

          <article id="siec" className={`card ${styles.block}`}>
            <h3>Sieci (wiele lokalizacji)</h3>
            <p>
              W sieciach problemem rzadko jest "czy da się posprzątać". Problemem jest
              powtarzalność: ta sama jakość, to samo podejście, brak losowości ekip.
            </p>
            <p>Co robimy, żeby to dowieźć:</p>
            <ul className={styles.list}>
              <li>koordynacja realizacji i jasny punkt kontaktu</li>
              <li>backup ludzi/sprzętu (żeby termin się nie rozsypał)</li>
              <li>checklisty + kontrola wykonania</li>
              <li>formalności B2B i procedury obiektu (wejścia, poufność, rejestry)</li>
              <li>koordynacja zleceń i prac wykonawców po naszej stronie (dispatching)</li>
            </ul>
            <p>
              Mycie witryn dla sieci handlowych: do 800 witryn miesięcznie w całej Polsce
              (logistyka po naszej stronie).
            </p>
            <p>
              Start prac: nawet w 3 dni (po potwierdzeniu warunków wejścia i zakresu).
            </p>
            <p>
              <Link href="/kontakt">Zapytaj o obsługę sieci</Link>
            </p>
            <p>
              Dowiedz się więcej:{" "}
              <Link href="/sprzatanie-po-budowie/zarzadca-nieruchomosci">
                jak wygląda to operacyjnie po stronie koordynacji/zarządcy
              </Link>
            </p>
            <p>
              Dla przyspieszenia:{" "}
              <Link href="/kontakt">
                wyślij miasta + liczbę lokali/witryn + preferowaną częstotliwość
              </Link>
            </p>
            <p>
              Prowadzisz firmę sprzątającą obsługującą sieci handlowe i szukasz podwykonawcy?{" "}
              <Link href="/kontakt">
                Wyślij zakres obsługi, którego potrzebujesz lub podzleć nam na CITO zlecenie od
                sieci
              </Link>
            </p>
          </article>

          <article className={`card ${styles.block}`}>
            <h3>Cykliczne utrzymanie czystości (biura i lokale handlowo-usługowe)</h3>
            <p>
              Stała obsługa działa wtedy, kiedy jest poukładana: harmonogram, standard, kontrola i
              zastępstwa. Tu liczy się powtarzalność, nie jednorazowy "efekt wow".
            </p>
            <ul className={styles.list}>
              <li>
                Utrzymanie czystości -{" "}
                <Link href="/utrzymanie-czystosci">/utrzymanie-czystosci</Link>
              </li>
              <li>
                Biura - <Link href="/utrzymanie-czystosci/biura">/utrzymanie-czystosci/biura</Link>
              </li>
              <li>
                Lokale handlowo-usługowe -{" "}
                <Link href="/utrzymanie-czystosci/lokale-handlowo-uslugowe">
                  /utrzymanie-czystosci/lokale-handlowo-uslugowe
                </Link>
              </li>
            </ul>
            <p>
              <strong>Mini-proof:</strong> Checklisty + kontrola wykonania + zastępstwa = ciągłość
              standardu.
            </p>
          </article>
        </div>
      </section>

      <section className={`section ${styles.section}`} aria-labelledby="finalizuja-title">
        <div className={`container ${styles.container}`}>
          <h2 id="finalizuja-title">Usługi, które często finalizują temat</h2>
          <p>Tu nie opisujemy zakresów w detalach - są na podstronach. W praktyce najczęściej dokładamy:</p>
          <ul className={styles.list}>
            <li>
              Mycie witryn - szybka wycena ze zdjęć, abonament; dla sieci możliwy ryczałt -{" "}
              <Link href="/mycie-okien-i-witryn">/mycie-okien-i-witryn</Link>
            </li>
            <li>
              Maszynowe czyszczenie posadzek (B2B) - obiekty komercyjne, technologia pod typ
              posadzki i zabrudzeń -{" "}
              <Link href="/maszynowe-czyszczenie-posadzek">
                /maszynowe-czyszczenie-posadzek
              </Link>
            </li>
            <li>Mycie przeszkleń wodą demineralizowaną - jako opcja w wybranych realizacjach</li>
            <li>Pranie wielkopowierzchniowych wykładzin w biurach i firmach</li>
          </ul>
        </div>
      </section>

      <section className={`section ${styles.section}`} aria-labelledby="jak-pracujemy-title">
        <div className={`container ${styles.container}`}>
          <h2 id="jak-pracujemy-title">Jak pracujemy (w skrócie)</h2>
          <ol className={styles.list}>
            <li>
              Kontakt - telefon lub e-mail (w godzinach pracy biura odpowiadamy do 15 minut)
            </li>
            <li>Minimum danych - widełki tego samego dnia, gdy mamy komplet informacji</li>
            <li>Rozpoznanie / wizja (gdy jest potrzebna)</li>
            <li>
              Wejście + przygotowanie ludzi - BHP + analiza zagrożeń + ustalenie kolejności prac
            </li>
            <li>Realizacja + kontrola - checklisty i odbiór wewnętrzny</li>
            <li>Odbiór i finalizacja - protokoły odbioru i zdjęcia, rozliczenie</li>
          </ol>
          <p id="minimum-danych">
            <strong>Micro-CTA:</strong>{" "}
            <Link href="/kontakt">
              Chcę ofertę do zatwierdzenia (PDF/HTML) - gotową do wysłania do przełożonego /
              zarządu / działu zakupów
            </Link>
          </p>
          <p>
            Alternatywnie: jeśli temat jest "na już",{" "}
            <a href="tel:+48502992002">zadzwoń: +48 502 992 002</a>
          </p>
        </div>
      </section>

      <section className={`section ${styles.section}`} aria-labelledby="szybkosc-title">
        <div className={`container ${styles.container}`}>
          <h2 id="szybkosc-title">Jak szybko działamy</h2>
          <ul className={styles.list}>
            <li>odpowiedź w godzinach pracy biura: do 15 minut</li>
            <li>widełki / wstępna wycena: tego samego dnia po skompletowaniu informacji</li>
            <li>start prac: nawet w 3 dni (po potwierdzeniu warunków wejścia i zakresu)</li>
            <li>
              (opcjonalnie dla sieci) uruchomienie i koordynacja: SLA do 24h* (zależnie od zakresu
              i lokalizacji)
            </li>
          </ul>
          <p className={styles.footnote}>
            *SLA do 24h liczymy od momentu, gdy mamy potwierdzony zakres i warunki wejścia oraz
            przyjęte zlecenie (akceptacja). Dotyczy uruchomienia i koordynacji realizacji - nie
            czasu odpowiedzi na pierwszą wiadomość.
          </p>
        </div>
      </section>

      <section className={`section ${styles.section}`} aria-labelledby="formalnosci-title">
        <div className={`container ${styles.container}`}>
          <h2 id="formalnosci-title">Formalności i odpowiedzialność</h2>
          <p>
            W praktyce to są rzeczy, które Domker zapewnia i dokumentuje po swojej stronie - dzięki
            temu da się wejść na obiekt i przejść odbiór zgodnie z procedurami. Konkretnie:
          </p>
          <ul className={styles.list}>
            <li>legalne zatrudnienie i szkolenia BHP</li>
            <li>analiza zagrożeń przed startem</li>
            <li>
              protokoły: odbioru i zdjęcia oraz protokoły odkrytych usterek (jeśli dotyczy)
            </li>
            <li>
              OC: do końca marca 2026: pół miliona złotych; od kwietnia 2026: dwa miliony złotych
            </li>
            <li>umowa o zachowaniu poufności (NDA) i rejestr wejść (jeśli wymagane)</li>
            <li>umowa / faktura VAT</li>
          </ul>
        </div>
      </section>

      <section className={`section ${styles.section}`} aria-labelledby="minimum-log-title">
        <div className={`container ${styles.container}`}>
          <h2 id="minimum-log-title">Minimum logistyczne</h2>
          <p>Mówimy wprost, żeby nie marnować Twojego czasu:</p>
          <ul className={styles.list}>
            <li>nie bierzemy tematów wymagających wejścia 100 osób jednocześnie (mega-obiekty jako całość)</li>
            <li>nie robimy posadzek</li>
          </ul>
          <p>
            Jeśli temat jest duży albo nietypowy - po rozpoznaniu powiemy wprost, czy to jest w
            naszym zakresie i jak to ugryźć.
          </p>
        </div>
      </section>

      <section className={`section ${styles.section}`} aria-labelledby="realizacje-title">
        <div className={`container ${styles.container}`}>
          <h2 id="realizacje-title">Zobacz realizacje i opinie</h2>
          <ul className={styles.list}>
            <li>
              Realizacje - <Link href="/realizacje">/realizacje</Link>
            </li>
            <li>
              Referencje - <Link href="/referencje">/referencje</Link>
            </li>
          </ul>
        </div>
      </section>

      <section className={`section ${styles.section}`} aria-labelledby="koniec-title">
        <div className={`container ${styles.container}`}>
          <h2 id="koniec-title">Na koniec</h2>
          <p>
            Jeśli potrzebujesz oferty do zatwierdzenia (PDF/HTML), napisz lub zadzwoń. Wrócimy z
            widełkami i jasnym kolejnym krokiem.
          </p>
          <p>
            Kontakt: <Link href="/kontakt">/kontakt</Link>
          </p>
        </div>
      </section>
    </main>
  );
}
