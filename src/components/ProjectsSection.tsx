"use client";

import { useElementInView } from "@/hooks/useElementInView";

const projects = [
  { title: "Aplikasi Game Edukasi Berbasis Gamifikasi", year: "2025" },
  { title: "Bubble Match Game Edukasi untuk SMP", year: "2025" },
  { title: "Web Beasiswa Intact Base", year: "2025" },
  { title: "Tuko - Aplikasi Kasir dan Jualan Online", year: "2025" },
  { title: "Aplikasi Absensi Karyawan", year: "2026" },
  { title: "Aplikasi Generate Desain POSTER", year: "2026" },
  { title: "Quiz App Telkom Akses", year: "2026" },
  { title: "Calm Space (Deteksi Stress)", year: "2026" },
  { title: "Laundry App", year: "2026" },
];

export default function ProjectsSection() {
  const { ref, isInView } = useElementInView({ threshold: 0.1 });

  return (
    <section id="projects" className="py-28 bg-white" ref={ref}>
      <div className="max-w-4xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div
          className={`mb-10 transition-all duration-700 transform ${
            isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <h2 className="text-2xl font-black uppercase tracking-wider text-ink">
            Proyek
          </h2>
        </div>

        {/* Project list */}
        <ul className="space-y-0">
          {projects.map((project, index) => (
            <li
              key={project.title}
              className={`group flex items-baseline gap-3 py-3.5 border-b border-gray-100 last:border-b-0 transition-all duration-700 transform ${
                isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
              }`}
              style={{ transitionDelay: `${index * 80}ms` }}
            >
              {/* Bullet */}
              <span className="shrink-0 w-1.5 h-1.5 rounded-full bg-ink mt-[2px] group-hover:scale-150 transition-transform duration-200" />

              {/* Title */}
              <span className="flex-1 text-[15px] font-medium text-ink group-hover:translate-x-1 transition-transform duration-200">
                {project.title}
              </span>

              {/* Year */}
              <span className="shrink-0 text-sm font-semibold text-gray-400 tabular-nums">
                {project.year}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
