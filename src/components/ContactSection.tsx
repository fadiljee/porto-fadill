"use client";

import { useElementInView } from "@/hooks/useElementInView";
import { Mail, Github, Linkedin, ArrowUpRight } from "lucide-react";

const contactCards = [
  {
    id: "contact-email",
    icon: Mail,
    platform: "Email",
    handle: "fadil@example.com",
    href: "mailto:fadil@example.com",
    gradient: "from-blue-500 to-cyan-400",
    description: "Reach out directly",
  },
  {
    id: "contact-github",
    icon: Github,
    platform: "GitHub",
    handle: "github.com/fadil",
    href: "https://github.com/fadil",
    gradient: "from-gray-800 to-gray-600",
    description: "Check my code",
  },
  {
    id: "contact-linkedin",
    icon: Linkedin,
    platform: "LinkedIn",
    handle: "linkedin.com/in/fadil",
    href: "https://linkedin.com/in/fadil",
    gradient: "from-blue-600 to-blue-400",
    description: "Let's connect",
  },
];

export default function ContactSection() {
  const { ref, isInView } = useElementInView({ threshold: 0.15 });

  return (
    <section id="contact" className="py-28 bg-white" ref={ref}>
      <div className="max-w-4xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div
          className={`text-center mb-16 transition-all duration-700 transform ${
            isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <span className="section-tag justify-center">
            <span className="w-6 h-px bg-accent inline-block" />
            04. Get In Touch
            <span className="w-6 h-px bg-accent inline-block" />
          </span>
          <h2 className="section-heading">
            Let&apos;s <span className="gradient-text">Collaborate</span>
          </h2>
          <p className="mt-5 text-muted text-base leading-relaxed max-w-lg mx-auto">
            Tertarik untuk berkolaborasi? Saya selalu terbuka untuk mendiskusikan proyek baru,
            ide kreatif, atau peluang menjadi bagian dari visi Anda.
          </p>
        </div>

        {/* Contact cards */}
        <div className="grid sm:grid-cols-3 gap-5">
          {contactCards.map((card, i) => (
            <a
              key={card.id}
              id={card.id}
              href={card.href}
              target={card.href.startsWith("http") ? "_blank" : undefined}
              rel={card.href.startsWith("http") ? "noopener noreferrer" : undefined}
              className={`group relative flex flex-col items-center text-center p-8 rounded-2xl border-2 border-gray-200 bg-white hover:border-ink hover:-translate-y-2 hover:shadow-2xl hover:shadow-black/10 transition-all duration-500 overflow-hidden cursor-pointer transform ${
                isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: `${200 + i * 100}ms` }}
            >
              {/* Hover gradient backdrop */}
              <div
                className={`absolute inset-0 bg-gradient-to-br ${card.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-300`}
              />

              {/* Icon */}
              <div
                className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${card.gradient} flex items-center justify-center mb-4 shadow-lg group-hover:scale-110 transition-transform duration-300`}
              >
                <card.icon size={24} className="text-white" />
              </div>

              <p className="text-xs font-bold uppercase tracking-widest text-muted mb-1">
                {card.description}
              </p>
              <h3 className="text-lg font-extrabold text-ink mb-2">{card.platform}</h3>
              <p className="text-sm text-muted/80 break-all">{card.handle}</p>

              {/* Arrow icon */}
              <ArrowUpRight
                size={18}
                className="absolute top-4 right-4 text-muted/30 group-hover:text-ink group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-300"
              />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
