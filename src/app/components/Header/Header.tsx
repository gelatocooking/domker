"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import styles from "./Header.module.css";

type NavItem = {
  label: string;
  href: string;
  submenu?: { label: string; href: string }[];
};

const navItems: NavItem[] = [
  {
    label: "Strona główna",
    href: "/",
  },
  {
    label: "Usługi dla firm",
    href: "/uslugi-dla-firm",
    submenu: [
      { label: "Sprzątanie po budowie", href: "/sprzatanie-po-budowie" },
      { label: "Mycie okien i witryn", href: "/mycie-okien-i-witryn" },
      {
        label: "Maszynowe czyszczenie posadzek",
        href: "/maszynowe-czyszczenie-posadzek",
      },
      { label: "Utrzymanie czystości", href: "/utrzymanie-czystosci" },
    ],
  },
  {
    label: "Referencje",
    href: "/referencje",
  },
  { label: "Realizacje", href: "/realizacje" },
  { label: "Cennik", href: "/cennik" },
  { label: "FAQ", href: "/faq" },
  { label: "Kontakt", href: "/kontakt" },
];

const ctaLabel = "Wyślij zapytanie";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setIsScrolled(window.scrollY > 12);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const media = window.matchMedia("(max-width: 1024px)");
    const onChange = (event: MediaQueryListEvent) => {
      if (!event.matches) {
        setIsMenuOpen(false);
      }
    };

    media.addEventListener("change", onChange);

    return () => {
      media.removeEventListener("change", onChange);
    };
  }, []);

  useEffect(() => {
    const body = document.body;
    const previousOverflow = body.style.overflow;
    const previousPaddingRight = body.style.paddingRight;

    if (isMenuOpen) {
      const scrollbarWidth =
        window.innerWidth - document.documentElement.clientWidth;
      body.style.overflow = "hidden";
      if (scrollbarWidth > 0) {
        body.style.paddingRight = `${scrollbarWidth}px`;
      }
    } else {
      body.style.overflow = previousOverflow;
      body.style.paddingRight = previousPaddingRight;
    }

    return () => {
      body.style.overflow = previousOverflow;
      body.style.paddingRight = previousPaddingRight;
    };
  }, [isMenuOpen]);

  const handleNavClick = () => setIsMenuOpen(false);

  return (
    <header className={`${styles.header} ${isScrolled ? styles.scrolled : ""}`}>
      <div className={`container ${styles.inner}`}>
        <Link href="/" className={styles.logoLink} aria-label="Domker - strona główna">
          <Image
            src="/domker-logo.png"
            alt="Domker"
            width={168}
            height={44}
            priority
            className={styles.logo}
          />
        </Link>

        <button
          type="button"
          className={`${styles.menuToggle} ${isMenuOpen ? styles.menuToggleOpen : ""}`}
          aria-expanded={isMenuOpen}
          aria-controls="primary-nav"
          onClick={() => setIsMenuOpen((prev) => !prev)}
        >
          <span className={styles.menuIcon} aria-hidden="true" />
          <span className={styles.srOnly}>Menu</span>
        </button>

        <div
          id="primary-nav"
          className={`${styles.menu} ${isMenuOpen ? styles.menuOpen : ""}`}
        >
          <nav className={styles.nav} aria-label="Nawigacja główna">
            {navItems.map((item) => (
              <div key={item.href} className={styles.navItem}>
                <Link
                  className={styles.navLink}
                  href={item.href}
                  onClick={handleNavClick}
                >
                  <span>{item.label}</span>
                  {item.submenu && (
                    <span className={styles.dropdownIcon} aria-hidden="true">
                      ?
                    </span>
                  )}
                </Link>
                {item.submenu && (
                  <div className={styles.submenu}>
                    {item.submenu.map((subItem) => (
                      <Link
                        key={subItem.href}
                        className={styles.submenuLink}
                        href={subItem.href}
                        onClick={handleNavClick}
                      >
                        {subItem.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </nav>

          <div className={styles.cta}>
            <Link
              className={`btn btnPrimary ${styles.ctaButton}`}
              href="/kontakt"
              onClick={handleNavClick}
            >
              {ctaLabel}
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}

