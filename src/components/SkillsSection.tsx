"use client";

import { useElementInView } from "@/hooks/useElementInView";
import {
  Server,
  Smartphone,
  Wrench,
  Globe,
} from "lucide-react";

type Skill = { name: string };
type Category = {
  id: string;
  icon: React.ElementType;
  title: string;
  iconBg: string;
  skills: Skill[];
};

const categories: Category[] = [
  {
    id: "skills-frontend",
    icon: Globe,
    title: "Frontend",
    iconBg: "bg-accent",
    skills: [
      { name: "HTML / CSS" },
      { name: "JavaScript" },
      { name: "TypeScript" },
      { name: "React" },
      { name: "Next.js" },
      { name: "Tailwind CSS" },
    ],
  },
  {
    id: "skills-backend",
    icon: Server,
    title: "Backend",
    iconBg: "bg-slate-ink",
    skills: [
      { name: "Laravel" },
      { name: "PHP" },
      { name: "MySQL" },
      { name: "REST API" },
      { name: "Node.js" },
      { name: "Firebase" },
    ],
  },
  {
    id: "skills-mobile",
    icon: Smartphone,
    title: "Mobile",
    iconBg: "bg-ink",
    skills: [
      { name: "Flutter" },
      { name: "Dart" },
      { name: "Firebase" },
      { name: "SQLite" },
      { name: "GetX" },
      { name: "BLoC" },
    ],
  },
  {
    id: "skills-tools",
    icon: Wrench,
    title: "Tools & Others",
    iconBg: "bg-muted",
    skills: [
      { name: "Git & GitHub" },
      { name: "VS Code" },
      { name: "Figma" },
      { name: "Linux / Kali" },
      { name: "Python" },
      { name: "OpenCV" },
    ],
  },
];

export default function SkillsSection() {
  const { ref, isInView } = useElementInView({ threshold: 0.15 });

  return (
    <section id="skills" className="py-28 bg-white" ref={ref}>
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div
          className={`mb-16 text-center transition-all duration-700 transform ${
            isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <span className="section-tag justify-center">
            <span className="w-6 h-px bg-accent inline-block" />
            02. Skills & Technologies
            <span className="w-6 h-px bg-accent inline-block" />
          </span>
          <h2 className="section-heading">
            My <span className="gradient-text">Toolkit</span>
          </h2>
          <p className="mt-4 text-muted max-w-xl mx-auto text-base leading-relaxed">
            Technologies I work with to build scalable web apps, mobile experiences, and
            everything in between.
          </p>
        </div>

        {/* Category cards grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((cat, i) => (
            <div
              key={cat.id}
              id={cat.id}
              className={`group relative bg-white rounded-2xl border border-gray-200 p-6 hover:shadow-xl hover:-translate-y-1.5 transition-all duration-500 overflow-hidden transform ${
                isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
              style={{ transitionDelay: `${200 + i * 100}ms` }}
            >
              {/* Hover tint on card */}
              <div className="absolute inset-0 bg-gray-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              {/* Icon */}
              <div
                className={`relative w-11 h-11 rounded-xl ${cat.iconBg} flex items-center justify-center mb-4 shadow-sm group-hover:scale-110 transition-transform duration-300`}
              >
                <cat.icon size={20} className="text-white" />
              </div>

              <h3 className="relative text-base font-bold text-ink mb-4">{cat.title}</h3>

              {/* Skill chips */}
              <div className="relative flex flex-wrap gap-2">
                {cat.skills.map((skill) => (
                  <span key={skill.name} className="skill-chip">
                    {skill.name}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
