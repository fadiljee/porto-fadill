# 🚀 Fadil's Personal Portfolio

> A premium, minimalist personal portfolio website built with Next.js, TypeScript, and Tailwind CSS — showcasing my work as a Full-Stack Developer & Mobile App Specialist.

[![Next.js](https://img.shields.io/badge/Next.js-14-black?style=flat-square&logo=next.js)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-blue?style=flat-square&logo=typescript)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.4-38bdf8?style=flat-square&logo=tailwindcss)](https://tailwindcss.com/)
[![Framer Motion](https://img.shields.io/badge/Framer_Motion-11-black?style=flat-square&logo=framer)](https://www.framer.com/motion/)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow?style=flat-square)](LICENSE)

---

## ✨ Features

- **Particle Background** — Interactive constellation canvas animation in the hero section
- **Typewriter Effect** — Smooth cycling text for roles/titles (zero-dependency custom implementation)
- **Scroll Reveal Animations** — IntersectionObserver-powered fade-in & slide-in transitions throughout sections
- **Responsive Design** — Fully mobile-first layout, looks great on all screen sizes
- **Modular Architecture** — Clean component structure for easy maintenance and extension
- **SEO Ready** — Proper metadata, semantic HTML, and descriptive titles on every page

---

## 🖥️ Live Demo

> **[fadil.dev](https://fadil.dev)** _(update this link once deployed)_

---

## 📸 Sections

| #   | Section      | Description                                                        |
| --- | ------------ | ------------------------------------------------------------------ |
| 00  | **Hero**     | Intro with typewriter, particle background, and CTA buttons        |
| 01  | **About**    | Bio, stats (3+ years, 15+ projects), and profile image             |
| 02  | **Skills**   | Tech stack organized by category: Frontend, Backend, Mobile, Tools |
| 03  | **Projects** | Featured projects with tech tags, descriptions, and GitHub links   |
| 04  | **Contact**  | Contact form and social links                                      |

---

## 🛠️ Tech Stack

### Frontend

`HTML/CSS` `JavaScript` `TypeScript` `React 18` `Next.js 14` `Tailwind CSS`

### Animations & UI

`Framer Motion` `tsParticles` `Lucide React` `Custom Typewriter`

### Mobile (Projects)

`Flutter` `Dart` `Firebase` `SQLite` `GetX` `BLoC`

### Backend (Projects)

`Laravel` `PHP` `MySQL` `REST API` `Node.js` `Firebase`

### Tools & Others

`Git & GitHub` `Figma` `VS Code` `Linux / Kali` `Python` `OpenCV`

---

## 🚀 Getting Started

### Prerequisites

- **Node.js** >= 18.x
- **npm** >= 9.x

### Installation

```bash
# 1. Clone the repository
git clone https://github.com/fadil/portfolio.git
cd portfolio

# 2. Install dependencies
npm install

# 3. Start the development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Available Scripts

| Script          | Description                    |
| --------------- | ------------------------------ |
| `npm run dev`   | Start local development server |
| `npm run build` | Build the production bundle    |
| `npm run start` | Run the production server      |
| `npm run lint`  | Run ESLint checks              |

---

## 📁 Project Structure

```
porto/
├── public/
│   └── images/
│       └── profile.jpg        # Profile photo
├── src/
│   ├── app/
│   │   ├── layout.tsx          # Root layout & metadata
│   │   ├── page.tsx            # Main entry page
│   │   └── globals.css         # Global styles & design tokens
│   ├── components/
│   │   ├── Navbar.tsx          # Sticky navigation bar with active-link detection
│   │   ├── HeroSection.tsx     # Landing hero with particles & typewriter
│   │   ├── AboutSection.tsx    # About me, stats, profile image
│   │   ├── SkillsSection.tsx   # Tech stack category cards
│   │   ├── ProjectsSection.tsx # Featured project cards
│   │   ├── ContactSection.tsx  # Contact form & social links
│   │   ├── Footer.tsx          # Site footer
│   │   ├── ParticleBackground.tsx # tsParticles constellation canvas
│   │   ├── ProjectCard.tsx     # Reusable project card component
│   │   └── Typewriter.tsx      # Custom typewriter animation hook
│   └── hooks/
│       └── useElementInView.ts # IntersectionObserver hook for scroll reveals
├── tailwind.config.ts          # Custom Tailwind design tokens
├── next.config.mjs
├── tsconfig.json
└── package.json
```

---

## 🎨 Design System

Custom Tailwind tokens defined in `tailwind.config.ts`:

| Token     | Value     | Usage               |
| --------- | --------- | ------------------- |
| `ink`     | `#0A0A0F` | Primary text        |
| `muted`   | `#6B7280` | Secondary text      |
| `accent`  | `#2563EB` | Brand blue          |
| `surface` | `#F8F9FA` | Section backgrounds |

Utility classes like `.btn-primary`, `.btn-secondary`, `.gradient-text`, `.section-heading`, and `.skill-chip` are defined in `globals.css` for consistent styling across components.

---

## 📂 Featured Projects

### 🎮 Game Edukasi Matematika

Gamified mobile learning app to make math fun for students.
**Stack:** Flutter · Dart · Firebase · Firestore

### 📋 Smart Attendance App

Offline-first employee attendance & admin management system.
**Stack:** Flutter · SQLite · Dart · REST API

### 👁️ Computer Vision Hand Tracking

Real-time gesture recognition using hand landmark detection.
**Stack:** Python · OpenCV · MediaPipe · NumPy

### 🌱 Smart Irrigation System

End-to-end IoT solution for automated plant watering with mobile monitoring.
**Stack:** ESP8266 · Laravel · Flutter · MQTT · MySQL

---

## 📬 Contact

- **Email:** fadilj0704@gmail.com
- **GitHub:** [@fadil](https://github.com/fadil)
- **LinkedIn:** [linkedin.com/in/fadil](https://linkedin.com/in/fadil)

---

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

---

<p align="center">Made with ❤️ by Fadil</p>
