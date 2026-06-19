"use client";

import { ExternalLink, Github } from "lucide-react";

export type Project = {
  id: string;
  number: string;
  title: string;
  description: string;
  longDescription: string;
  tech: string[];
  gradient: string;
  githubUrl: string;
  demoUrl: string;
};

interface ProjectCardProps {
  project: Project;
  index: number;
  isInView: boolean;
}

export default function ProjectCard({ project, index, isInView }: ProjectCardProps) {
  const isEven = index % 2 === 0;

  return (
    <article
      id={project.id}
      className={`relative group bg-white rounded-3xl border border-gray-200 overflow-hidden hover:shadow-2xl hover:shadow-black/8 hover:-translate-y-1 transition-all duration-700 transform ${
        isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
      }`}
      style={{ transitionDelay: `${index * 150}ms` }}
    >
      {/* Giant editorial number background */}
      <span
        className={`section-number absolute ${isEven ? "right-6" : "left-6"} top-1/2 -translate-y-1/2 select-none pointer-events-none transition-all duration-500 group-hover:opacity-30`}
      >
        {project.number}
      </span>

      {/* Top gradient accent bar */}
      <div className={`h-1 w-full bg-gradient-to-r ${project.gradient}`} />

      <div className="relative z-10 p-8 md:p-10 flex flex-col md:flex-row md:items-center gap-8">
        {/* Left: Text content */}
        <div className="flex-1 space-y-4">
          {/* Number badge */}
          <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-bold bg-gradient-to-r ${project.gradient} text-white shadow-sm`}>
            Project {project.number}
          </span>

          <h3 className="text-2xl md:text-3xl font-extrabold text-ink leading-tight">
            {project.title}
          </h3>

          <p className="text-sm font-semibold text-muted uppercase tracking-wider">
            {project.description}
          </p>

          <p className="text-base text-gray-500 leading-relaxed max-w-lg">
            {project.longDescription}
          </p>

          {/* Tech stack chips */}
          <div className="flex flex-wrap gap-2 pt-1">
            {project.tech.map((t) => (
              <span
                key={t}
                className="px-3 py-1 rounded-full text-xs font-semibold bg-gray-100 text-gray-600 border border-gray-200"
              >
                {t}
              </span>
            ))}
          </div>
        </div>

        {/* Right: Action buttons */}
        <div className="flex flex-row md:flex-col gap-3 shrink-0">
          <a
            id={`${project.id}-github`}
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border-2 border-ink text-ink text-sm font-semibold hover:bg-ink hover:text-white transition-all duration-200 hover:scale-105"
          >
            <Github size={15} />
            View Code
          </a>
          {project.demoUrl !== "#" && (
            <a
              id={`${project.id}-demo`}
              href={project.demoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={`inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-gradient-to-r ${project.gradient} text-white text-sm font-semibold transition-all duration-200 hover:scale-105 shadow-md`}
            >
              <ExternalLink size={15} />
              Live Demo
            </a>
          )}
        </div>
      </div>
    </article>
  );
}
