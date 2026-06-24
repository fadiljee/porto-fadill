"use client";

import { Heart } from "lucide-react";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-ink text-white py-10">
      <div className="max-w-6xl mx-auto px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
        {/* Logo */}
        <span className="text-xl font-extrabold tracking-tight">
          Fadil Julianto<span className="text-white/50">.</span>
        </span>

        {/* Credit */}
        <p className="text-sm text-white/50 flex items-center gap-1.5">
          Designed & Built by{" "}
          <span className="font-semibold text-white/80">Fadil Julianto</span>
          <span className="mx-1 text-white/20">·</span>
          <Heart size={12} className="text-red-400 fill-red-400" />
          <span className="mx-1 text-white/20">·</span>
          &copy; {year}
        </p>

        {/* Nav links */}
        <nav className="flex gap-5 text-sm text-white/40">
          {/* {["#home", "#about", "#skills", "#projects", "#contact"].map((href) => (
            <a
              key={href}
              href={href}
              id={`footer-${href.slice(1)}`}
              className="capitalize hover:text-white transition-colors"
            >
              {href.slice(1)}
            </a>
          ))} */}
        </nav>
      </div>
    </footer>
  );
}
