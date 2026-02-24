"use client";

import Link from "next/link";
import { useEffect, useMemo, useRef, useState } from "react";
import styles from "./ProcessSection.module.css";

const steps = [
  {
    title: "Kontakt",
    action: "Wybierasz kanał kontaktu.",
    effect: "Odpowiadamy do 15 min w godzinach pracy biura.",
  },
  {
    title: "Minimum danych",
    action: "Zbieramy komplet informacji do wyceny i organizacji realizacji.",
    effect: "Masz jasny zakres wejściowy do kolejnego kroku.",
  },
  {
    title: "Rozpoznanie / wizja",
    action: "Przy większych zleceniach potwierdzamy technologię i czas po rozpoznaniu.",
    effect: "Dostajesz doprecyzowaną wycenę i plan wejścia.",
  },
  {
    title: "Wejście + przygotowanie",
    action: "Szkolimy ludzi na obiekcie i domykamy zasady bezpiecznej pracy.",
    effect: "Zespół wchodzi gotowy, zgodnie z harmonogramem.",
  },
  {
    title: "Realizacja + kontrola",
    action: "Pracujemy według planu i robimy odbiór wewnętrzny checklistą.",
    effect: "Masz potwierdzony standard wykonania przed zgłoszeniem końca.",
  },
  {
    title: "Odbiór i domknięcie",
    action: "Przekazujemy komplet dokumentów i zamykamy temat rozliczeniem.",
    effect: "Otrzymujesz protokoły, zdjęcia i finalne domknięcie zlecenia.",
  },
] as const;

export default function ProcessSection() {
  const stepRefs = useRef<Array<HTMLLIElement | null>>([]);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      const trigger = window.innerHeight * 0.58;
      let nextActive = 0;

      stepRefs.current.forEach((node, index) => {
        if (!node) return;
        const rect = node.getBoundingClientRect();
        if (rect.top <= trigger) nextActive = index;
      });

      setActiveIndex(nextActive);
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  const progress = useMemo(() => {
    if (steps.length <= 1) return 100;
    return (activeIndex / (steps.length - 1)) * 100;
  }, [activeIndex]);

  return (
    <section id="proces" className={`section ${styles.section}`} aria-labelledby="process-title">
      <div className={`container ${styles.container}`}>
        <header className={styles.header}>
          <h2 id="process-title">Jak zamawiasz usługę i jak dowozimy efekt</h2>
        </header>

        <ol
          className={styles.timeline}
          style={{ ["--timeline-progress" as string]: `${progress}%` }}
        >
          {steps.map((step, index) => (
            <li
              key={step.title}
              ref={(el) => {
                stepRefs.current[index] = el;
              }}
              className={`${styles.step} ${index <= activeIndex ? styles.stepActive : ""}`}
            >
              <span className={styles.marker} aria-hidden="true">
                {index + 1}
              </span>
              <div className={styles.stepBody}>
                <h3 className={styles.stepTitle}>{step.title}</h3>
                <p className={styles.stepDescription}>{step.action}</p>
                <p className={styles.stepEffect}>{step.effect}</p>
              </div>
            </li>
          ))}
        </ol>

        <Link href="/kontakt" className={`btn btnAccent ${styles.cta}`}>
          Zamów ofertę do zatwierdzenia — gotową do wysłania do przełożonego / zarządu / działu zakupów
        </Link>
      </div>
    </section>
  );
}
