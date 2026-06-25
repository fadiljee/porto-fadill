"use client";

import { useElementInView } from "@/hooks/useElementInView";
import ProjectCard, { type Project } from "@/components/ProjectCard";

const projects: Project[] = [
  {
    id: "project-game-edukasi",
    number: "01",
    title: "Aplikasi Game Edukasi Berbasis Gamifikasi",
    description: "Gamified Mobile Learning App",
    longDescription:
      "Aplikasi mobile interaktif berbasis gamifikasi yang dirancang untuk membuat pembelajaran menjadi menyenangkan. Dilengkapi dengan level progression, real-time scoring, dan leaderboard.",
    tech: ["Flutter", "Dart", "Firebase"],
    accentColor: "bg-accent",
    githubUrl: "#",
    demoUrl: "#",
  },
  {
    id: "project-bubble-match",
    number: "02",
    title: "Bubble Match Game Edukasi untuk SMP",
    description: "Educational Puzzle Game",
    longDescription:
      "Game edukasi berbasis puzzle bubble match yang dirancang khusus untuk siswa SMP. Menggabungkan elemen permainan yang menarik dengan materi pembelajaran kurikulum.",
    tech: ["Flutter", "Dart", "Firebase"],
    accentColor: "bg-slate-ink",
    githubUrl: "#",
    demoUrl: "#",
  },
  {
    id: "project-web-beasiswa",
    number: "03",
    title: "Web Beasiswa Intact Base",
    description: "Scholarship Management Platform",
    longDescription:
      "Platform web manajemen beasiswa untuk Intact Base. Memudahkan proses pendaftaran, seleksi, dan monitoring penerima beasiswa secara digital dan terstruktur.",
    tech: ["Laravel", "MySQL", "Bootstrap", "PHP"],
    accentColor: "bg-ink",
    githubUrl: "#",
    demoUrl: "#",
  },
  {
    id: "project-tuko",
    number: "04",
    title: "Tuko - Aplikasi Kasir dan Jualan Online",
    description: "Point of Sale & E-Commerce App",
    longDescription:
      "Aplikasi kasir lengkap dengan fitur jualan online terintegrasi. Mendukung manajemen produk, transaksi, laporan penjualan, dan pembayaran digital.",
    tech: ["Flutter", "Laravel", "MySQL", "REST API"],
    accentColor: "bg-muted",
    githubUrl: "#",
    demoUrl: "#",
  },
  {
    id: "project-absensi",
    number: "05",
    title: "Aplikasi Absensi Karyawan",
    description: "Employee Attendance System",
    longDescription:
      "Sistem absensi karyawan berbasis mobile dengan fitur GPS, face recognition, dan laporan kehadiran. Mendukung role-based access untuk admin dan karyawan.",
    tech: ["Flutter", "SQLite", "Dart", "REST API"],
    accentColor: "bg-accent",
    githubUrl: "#",
    demoUrl: "#",
  },
  {
    id: "project-poster-generator",
    number: "06",
    title: "Aplikasi Generate Desain POSTER",
    description: "AI-Powered Poster Design Tool",
    longDescription:
      "Aplikasi untuk membuat desain poster secara otomatis dengan berbagai template profesional. Pengguna dapat mengkustomisasi elemen desain dan mengekspor hasil dalam resolusi tinggi.",
    tech: ["Python", "Pillow", "Flask", "React"],
    accentColor: "bg-slate-ink",
    githubUrl: "#",
    demoUrl: "#",
  },
  {
    id: "project-quiz-telkom",
    number: "07",
    title: "Quiz App Telkom Akses",
    description: "Corporate Training Quiz Platform",
    longDescription:
      "Platform kuis interaktif untuk pelatihan internal Telkom Akses. Fitur soal acak, timer, leaderboard real-time, dan laporan hasil kuis per peserta.",
    tech: ["Flutter", "Firebase", "Dart"],
    accentColor: "bg-ink",
    githubUrl: "#",
    demoUrl: "#",
  },
  {
    id: "project-calm-space",
    number: "08",
    title: "Calm Space (Deteksi Stress)",
    description: "Mental Health & Stress Detection App",
    longDescription:
      "Aplikasi kesehatan mental yang mendeteksi tingkat stres pengguna menggunakan kuesioner dan analisis data. Menyediakan rekomendasi relaksasi dan monitoring kondisi emosional.",
    tech: ["Flutter", "Laravel", "MySQL", "Machine Learning"],
    accentColor: "bg-muted",
    githubUrl: "#",
    demoUrl: "#",
  },
  {
    id: "project-laundry",
    number: "09",
    title: "Laundry App",
    description: "Laundry Management & Ordering System",
    longDescription:
      "Aplikasi manajemen laundry dengan fitur pemesanan online, tracking status cucian, notifikasi, dan laporan keuangan. Tersedia untuk pelanggan dan admin laundry.",
    tech: ["Flutter", "Laravel", "MySQL", "REST API"],
    accentColor: "bg-accent",
    githubUrl: "#",
    demoUrl: "#",
  },
];

export default function ProjectsSection() {
  const { ref, isInView } = useElementInView({ threshold: 0.1 });

  return (
    <section id="projects" className="py-28 bg-surface" ref={ref}>
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div
          className={`mb-16 transition-all duration-700 transform ${
            isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <span className="section-tag">
            <span className="w-6 h-px bg-accent inline-block" />
            03. Featured Projects
          </span>
          <h2 className="section-heading">
            Things I&apos;ve <span className="gradient-text">Built</span>
          </h2>
          <p className="mt-4 text-muted max-w-xl text-base leading-relaxed">
            A selection of projects that showcase my range across mobile, web, IoT, and computer
            vision.
          </p>
        </div>

        {/* Project cards */}
        <div className="flex flex-col gap-6">
          {projects.map((project, index) => (
            <ProjectCard
              key={project.id}
              project={project}
              index={index}
              isInView={isInView}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
