"use client";

import { useState, useEffect } from "react";
import dynamic from "next/dynamic";
import { ArrowRight, Mail, Github, Linkedin, ChevronDown } from "lucide-react";
import Typewriter from "@/components/Typewriter";

// Load particles only on client (no SSR)
const ParticleBackground = dynamic(
  () => import("@/components/ParticleBackground"),
  { ssr: false }
);

const socialLinks = [
  {
    id: "hero-github",
    icon: Github,
    href: "https://github.com/fadiljee",
    label: "GitHub",
  },
  {
    id: "hero-linkedin",
    icon: Linkedin,
    href: "https://linkedin.com/in/fadiljulianto",
    label: "LinkedIn",
  },
  {
    id: "hero-email",
    icon: Mail,
    href: "mailto:fadilj0704@gmail.com",
    label: "Email",
  },
];

export default function HeroSection() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const scrollToProjects = () => {
    document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });
  };
  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-white"
    >
      {/* Constellation background */}
      <ParticleBackground />

      {/* Subtle radial overlay */}
      <div className="absolute inset-0 bg-gradient-radial from-gray-50/40 via-transparent to-transparent pointer-events-none z-[1]" />

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center flex flex-col items-center">
        {/* Badge */}
        <div
          className={`inline-flex items-center gap-2 px-4 py-2 rounded-full bg-ink/5 border border-ink/10 text-ink text-xs font-semibold tracking-widest uppercase mb-8 transition-all duration-700 transform ${
            mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
          }`}
          style={{ transitionDelay: "200ms" }}
        >
          <span className="w-1.5 h-1.5 rounded-full bg-ink animate-pulse" />
          Available for Work
        </div>

        {/* Main heading */}
        <h1
          className={`text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-extrabold text-ink leading-[1.05] tracking-tight mb-5 transition-all duration-700 transform ${
            mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
          }`}
          style={{ transitionDelay: "350ms" }}
        >
          Hi, I&apos;m <span className="gradient-text">Fadil</span>
        </h1>

        {/* Typewriter */}
        <div
          className={`text-xl md:text-2xl font-semibold text-muted mb-4 h-9 transition-all duration-700 ${
            mounted ? "opacity-100" : "opacity-0"
          }`}
          style={{ transitionDelay: "500ms" }}
        >
          <Typewriter
            strings={[
              "Full-Stack Developer",
              "Mobile App Specialist",
              "Flutter & Laravel Expert",
              "Tech Enthusiast",
            ]}
            delay={60}
            deleteSpeed={40}
            pause={2000}
          />
        </div>

        {/* Subtitle */}
        <p
          className={`text-base md:text-lg text-muted/80 max-w-xl leading-relaxed mb-10 transition-all duration-700 transform ${
            mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
          }`}
          style={{ transitionDelay: "650ms" }}
        >
          Passionate about creating beautiful and functional digital experiences
          that solve real-world problems.
        </p>

        {/* CTA Buttons */}
        <div
          className={`flex flex-col sm:flex-row gap-4 mb-12 transition-all duration-700 transform ${
            mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
          }`}
          style={{ transitionDelay: "800ms" }}
        >
          <button
            id="hero-cta-work"
            onClick={scrollToProjects}
            className="btn-primary group"
          >
            View My Work
            <ArrowRight
              size={16}
              className="transition-transform duration-300 group-hover:translate-x-1"
            />
          </button>
          <button
            id="hero-cta-contact"
            onClick={scrollToContact}
            className="btn-secondary"
          >
            Get In Touch
          </button>
        </div>

        {/* Social links */}
        <div
          className={`flex items-center gap-4 transition-all duration-700 ${
            mounted ? "opacity-100" : "opacity-0"
          }`}
          style={{ transitionDelay: "950ms" }}
        >
          {socialLinks.map(({ id, icon: Icon, href, label }) => (
            <a
              key={id}
              id={id}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              className="w-11 h-11 rounded-full border border-gray-200 flex items-center justify-center text-ink/50 hover:border-ink hover:text-ink hover:bg-ink hover:text-white transition-all duration-300 hover:scale-110"
            >
              <Icon size={18} />
            </a>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <div
        className={`absolute bottom-10 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2 transition-all duration-700 ${
          mounted ? "opacity-100" : "opacity-0"
        }`}
        style={{ transitionDelay: "1200ms" }}
      >
        <span className="text-xs font-medium text-muted/50 tracking-widest uppercase">
          Scroll
        </span>
        <ChevronDown
          size={20}
          className="text-muted/40 animate-bounce-slow"
        />
      </div>
    </section>
  );
}
