"use client";

import { useElementInView } from "@/hooks/useElementInView";
import ProjectCard, { type Project } from "@/components/ProjectCard";

const projects: Project[] = [
  {
    id: "project-math-game",
    number: "01",
    title: "Game Edukasi Matematika",
    description: "Gamified Mobile Learning App",
    longDescription:
      "An interactive, gamified mobile application designed to make mathematics fun and engaging for students. Features level progression, real-time scoring, leaderboards, and adaptive difficulty powered by Firebase.",
    tech: ["Flutter", "Dart", "Firebase", "Firestore"],
    gradient: "from-blue-500 to-cyan-400",
    githubUrl: "https://github.com/fadil/game-edukasi-matematika",
    demoUrl: "#",
  },
  {
    id: "project-attendance",
    number: "02",
    title: "Smart Attendance App",
    description: "Mobile Admin System",
    longDescription:
      "A comprehensive mobile administration system for managing employee presence and attendance categories. Features offline-first architecture with SQLite sync, role-based access control, and detailed reporting dashboards.",
    tech: ["Flutter", "SQLite", "Dart", "REST API"],
    gradient: "from-violet-500 to-purple-400",
    githubUrl: "https://github.com/fadil/smart-attendance",
    demoUrl: "#",
  },
  {
    id: "project-hand-tracking",
    number: "03",
    title: "Computer Vision Hand Tracking",
    description: "Real-Time Gesture Recognition",
    longDescription:
      "A real-time hand gesture recognition system using computer vision. Accurately detects and counts fingers, interprets gestures, and can be extended for sign language interpretation or touchless UI control.",
    tech: ["Python", "OpenCV", "MediaPipe", "NumPy"],
    gradient: "from-emerald-500 to-teal-400",
    githubUrl: "https://github.com/fadil/hand-tracking",
    demoUrl: "#",
  },
  {
    id: "project-irrigation",
    number: "04",
    title: "Smart Irrigation System",
    description: "IoT-Integrated Plant Watering",
    longDescription:
      "An end-to-end IoT solution for automated plant irrigation. The ESP8266 microcontroller reads soil moisture sensors and triggers water pumps, with real-time monitoring via a Flutter mobile app connected through a Laravel REST backend.",
    tech: ["ESP8266", "Laravel", "Flutter", "MQTT", "MySQL"],
    gradient: "from-orange-500 to-rose-400",
    githubUrl: "https://github.com/fadil/smart-irrigation",
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
