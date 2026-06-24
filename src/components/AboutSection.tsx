"use client";

import Image from "next/image";
import { MapPin, Calendar, Coffee } from "lucide-react";
import { useElementInView } from "@/hooks/useElementInView";

const stats = [
  { icon: Calendar, label: "Years Coding", value: "3+" },
  { icon: Coffee, label: "Projects Built", value: "15+" },
  { icon: MapPin, label: "Location", value: "Indonesia" },
];

export default function AboutSection() {
  const { ref, isInView } = useElementInView({ threshold: 0.15 });

  return (
    <section id="about" className="py-28 bg-surface" ref={ref}>
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        {/* Section header */}
        <div
          className={`mb-16 transition-all duration-700 transform ${
            isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <span className="section-tag">
            <span className="w-6 h-px bg-accent inline-block" />
            01. About Me
          </span>
          <h2 className="section-heading">
            Crafting Digital <br />
            <span className="gradient-text">Experiences</span>
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Text side */}
          <div
            className={`space-y-6 transition-all duration-750 transform ${
              isInView ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"
            }`}
            style={{ transitionDelay: "150ms" }}
          >
            <p className="text-lg text-gray-600 leading-relaxed">
              I&apos;m a <span className="font-semibold text-ink">Full-Stack Developer</span> and{" "}
              <span className="font-semibold text-ink">Mobile App Specialist</span> based in
              Indonesia, passionate about building innovative digital solutions that make a real
              difference in people&apos;s lives.
            </p>
            <p className="text-base text-gray-500 leading-relaxed">
              With hands-on experience in Flutter, Laravel, React, and IoT systems, I love
              bridging the gap between complex technical challenges and elegant, user-friendly
              interfaces. Whether it&apos;s a gamified learning app or a smart irrigation
              system, I approach every project with curiosity and craftsmanship.
            </p>
            <p className="text-base text-gray-500 leading-relaxed">
              When I&apos;m not coding, I&apos;m exploring new technologies — from computer
              vision to embedded systems — and contributing to open-source communities.
            </p>

            {/* Stats row */}
            <div className="grid grid-cols-3 gap-4 pt-4">
              {stats.map(({ icon: Icon, label, value }, i) => (
                <div
                  key={label}
                  className={`flex flex-col items-center text-center p-4 rounded-2xl bg-white border border-gray-100 shadow-sm hover:shadow-md transition-all duration-500 transform ${
                    isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
                  }`}
                  style={{ transitionDelay: `${400 + i * 100}ms` }}
                >
                  <Icon size={18} className="text-ink mb-2" />
                  <span className="text-2xl font-extrabold text-ink">{value}</span>
                  <span className="text-xs text-muted mt-0.5">{label}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Image side */}
          <div
            className={`flex justify-center lg:justify-end transition-all duration-750 transform ${
              isInView ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"
            }`}
            style={{ transitionDelay: "250ms" }}
          >
            <div className="relative group">
              {/* Neutral background shape */}
              <div className="absolute -inset-4 rounded-full bg-ink opacity-5 blur-2xl group-hover:opacity-10 transition-opacity duration-500" />

              {/* Card container */}
              <div className="relative w-72 h-72 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-white shadow-2xl transform transition-transform duration-500 group-hover:-translate-y-2 group-hover:scale-105">
                <div className="absolute inset-0 bg-ink/5 group-hover:bg-transparent z-10 transition-colors duration-500" />
                <Image
                  src="/images/fadil.jpeg"
                  alt="Fadil — Full-Stack Developer"
                  fill
                  className="object-cover object-center"
                  priority
                />
              </div>

              {/* Floating badge */}
              <div
                className={`absolute -bottom-2 -right-2 bg-white rounded-2xl shadow-xl px-4 py-3 flex items-center gap-2 border border-gray-100 transition-all duration-500 transform ${
                  isInView ? "scale-100 opacity-100" : "scale-75 opacity-0"
                }`}
                style={{ transitionDelay: "600ms" }}
              >
                <span className="w-2.5 h-2.5 rounded-full bg-green-400 animate-pulse" />
                <span className="text-sm font-semibold text-ink">Open to Work</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
