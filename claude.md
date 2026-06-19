# Project Overview
You are an expert Expert Frontend Developer and UI/UX Designer. Your task is to build a modern, highly interactive, and visually stunning personal portfolio website. The design should be an upgraded, premium version of a minimalist black-and-white theme, optimized to impress tech recruiters and potential clients.

## Tech Stack
- **Framework:** Next.js (App Router) or React.js
- **Styling:** Tailwind CSS (for sleek, responsive design)
- **Animations:** Framer Motion (for smooth scroll reveals, page transitions, and hover effects)
- **Icons:** Lucide React or React Icons
- **Extra:** `react-tsparticles` or a similar library for the subtle interactive constellation background in the Hero section.

## Design System & UI/UX Guidelines
- **Color Palette:** Clean monochrome (Crisp White background, deep Black/Slate text) with subtle gray accents (#f9fafb, #f3f4f6) for cards.
- **Typography:** Inter or Plus Jakarta Sans. Bold, large headings with highly legible body text.
- **Vibe:** "Apple-like" minimalism—generous whitespace, pixel-perfect alignment, and glassy/soft-shadow effects on cards.
- **Animations:** - Staggered fade-up animations when scrolling into new sections.
  - Smooth hover effects on buttons and skill chips (slight scale up, color inversion).
  - A dynamic typing effect for the hero subtitle (e.g., swapping between "Full-Stack Developer", "Mobile App Specialist", "Tech Enthusiast").

## Section-by-Section Requirements

### 1. Navigation (Sticky Navbar)
- Links: Home, About, Skills, Projects, Contact.
- Behavior: Transparent at the top, but gains a blur/glassmorphism background (`backdrop-blur-md`) when scrolling down.
- Active state indicator for the current section.

### 2. Hero Section (`#home`)
- **Background:** Implement a subtle, interactive particle/constellation network effect (dots connected by thin lines that react slightly to cursor movement).
- **Content:** - "Hi, I'm [Your Name]" in massive, bold typography.
  - A Typewriter effect below it: "Full-Stack Developer | "
  - Subtitle: "Passionate about creating beautiful and functional digital experiences."
  - **Buttons:** - Primary: "View My Work" (Black pill shape, white text, arrow icon that moves right on hover).
    - Secondary: "Get In Touch" (Outline button, fills black on hover).
  - **Social Links:** Minimalist circular icons (GitHub, LinkedIn, Email).
  - **Scroll Indicator:** A subtle animated mouse/scroll icon at the bottom center bouncing gently.

### 3. About Section (`#about`)
- Section Header: "01. About Me"
- **Layout:** Two columns (Text on the left, Image on the right).
- **Content:** A brief introduction focusing on the passion for building innovative digital solutions and experience solving real-world problems.
- **Image:** A perfectly rounded profile picture with a vibrant accent background color (e.g., solid blue or a modern gradient) to make it pop against the white theme. Add a subtle hover effect that shifts the image slightly.

### 4. Skills & Technologies (`#skills`)
- Section Header: "02. Skills & Technologies"
- **Layout:** A responsive CSS Grid of cards (Frontend, Backend, Mobile, Tools).
- **Card Design:** White background, subtle border (`border-gray-200`), rounded corners (`rounded-2xl`). Soft drop shadow on hover.
- **Content formatting:** Use modern "chips" or "badges" for each technology.
  - *Frontend:* HTML/CSS, JavaScript, React, Tailwind CSS.
  - *Backend:* Laravel, PHP, MySQL, REST API.
  - *Mobile:* Flutter, Dart, Firebase, SQLite.
  - *Tools:* Git, VS Code, Figma, Linux/Kali Linux.

### 5. Featured Projects (`#projects`)
- Section Header: "03. Featured Projects"
- **Layout:** Large horizontal cards (or alternating left/right layouts) for each project.
- **Card Design:** Include a giant, faded background number ("01", "02") inside the card to replicate the premium editorial look.
- **Project Data to Include:**
  1. **Game Edukasi Matematika:** Gamified mobile learning app. Tech: Flutter, Dart, Firebase.
  2. **Smart Attendance App:** Mobile admin system for managing employee presence categories. Tech: Flutter, SQLite.
  3. **Computer Vision Hand Tracking:** Real-time gesture recognition and finger counting. Tech: Python, OpenCV, MediaPipe.
  4. **Smart Irrigation System:** IoT-integrated plant watering system. Tech: ESP8266, Laravel, Flutter.
- **Actions:** Links to "View Code" (GitHub icon) and "Live Demo" (External link icon) with sleek hover states.

### 6. Contact Section (`#contact`)
- Section Header: "04. Get In Touch"
- **Content:** "Tertarik untuk berkolaborasi? Saya selalu terbuka untuk mendiskusikan proyek baru..." centered text.
- **Layout:** A grid of 3 large, clickable cards (Email, GitHub, LinkedIn). 
  - Each card should have the icon, platform name, and the handle/email address.
  - Hover effect: Card lifts up slightly and border darkens.
- **Footer:** "Designed & Built by [Your Name] © 2026"

## Development Rules
1. Create a modular component structure (e.g., `Hero.jsx`, `About.jsx`, `ProjectCard.jsx`).
2. Ensure 100% mobile responsiveness. On mobile, the navigation should become a sleek hamburger menu, and all grids should collapse to 1 column gracefully.
3. Write clean, well-commented code.
4. Provide the complete code starting from the project setup (`package.json` dependencies) to the individual components.