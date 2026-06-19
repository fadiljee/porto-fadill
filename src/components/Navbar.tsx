"use client";

import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const navLinks = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#projects", label: "Projects" },
  { href: "#contact", label: "Contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  /* ── Glassmorphism on scroll ── */
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  /* ── Active section via IntersectionObserver ── */
  useEffect(() => {
    const sectionIds = navLinks.map((l) => l.href.slice(1));
    const observers: IntersectionObserver[] = [];

    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (!el) return;
      const obs = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) setActiveSection(id);
        },
        { threshold: 0.4 }
      );
      obs.observe(el);
      observers.push(obs);
    });

    return () => observers.forEach((o) => o.disconnect());
  }, []);

  const handleNavClick = (href: string) => {
    setMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-600 transform ${
          mounted ? "translate-y-0 opacity-100" : "-translate-y-full opacity-0"
        } ${scrolled ? "glass shadow-sm" : "bg-transparent"}`}
      >
        <div className="max-w-6xl mx-auto px-6 lg:px-8 h-16 flex items-center justify-between">
          {/* Logo */}
          <button
            id="nav-logo"
            onClick={() => handleNavClick("#home")}
            className="text-xl font-extrabold text-ink tracking-tight hover:opacity-70 transition-opacity"
          >
            fadil<span className="text-accent">.</span>
          </button>

          {/* Desktop links */}
          <ul className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <li key={link.href}>
                <button
                  id={`nav-${link.label.toLowerCase()}`}
                  onClick={() => handleNavClick(link.href)}
                  className={`relative text-sm font-semibold transition-colors duration-200 group ${
                    activeSection === link.href.slice(1)
                      ? "text-accent"
                      : "text-ink/60 hover:text-ink"
                  }`}
                >
                  {link.label}
                  {/* Active underline */}
                  <span
                    className={`absolute -bottom-1 left-0 h-0.5 bg-accent transition-all duration-300 ${
                      activeSection === link.href.slice(1)
                        ? "w-full"
                        : "w-0 group-hover:w-full"
                    }`}
                  />
                </button>
              </li>
            ))}
          </ul>

          {/* CTA — desktop */}
          <a
            href="mailto:fadil@example.com"
            id="nav-cta"
            className="hidden md:inline-flex btn-primary text-xs px-5 py-2.5"
          >
            Hire Me
          </a>

          {/* Hamburger — mobile */}
          <button
            id="nav-hamburger"
            onClick={() => setMenuOpen((v) => !v)}
            className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
            aria-label="Toggle menu"
          >
            {menuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      <div
        className={`fixed top-16 left-0 right-0 z-40 glass border-b border-gray-100 shadow-xl md:hidden transition-all duration-300 transform ${
          menuOpen
            ? "translate-y-0 opacity-100 pointer-events-auto"
            : "-translate-y-2 opacity-0 pointer-events-none"
        }`}
      >
        <ul className="flex flex-col p-6 gap-4">
          {navLinks.map((link) => (
            <li key={link.href}>
              <button
                id={`nav-mobile-${link.label.toLowerCase()}`}
                onClick={() => handleNavClick(link.href)}
                className={`w-full text-left text-base font-semibold py-2 border-b border-gray-100 transition-colors ${
                  activeSection === link.href.slice(1)
                    ? "text-accent"
                    : "text-ink/70"
                }`}
              >
                {link.label}
              </button>
            </li>
          ))}
          <li>
            <a
              href="mailto:fadil@example.com"
              id="nav-mobile-cta"
              className="btn-primary w-full justify-center mt-2"
            >
              Hire Me
            </a>
          </li>
        </ul>
      </div>
    </>
  );
}
