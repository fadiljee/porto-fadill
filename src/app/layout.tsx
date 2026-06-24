import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Fadil - Full-Stack Developer & Mobile Specialist",
  description:
    "Personal portfolio of Fadil - a passionate Full-Stack Developer and Mobile App Specialist building beautiful, functional digital experiences with Flutter, Laravel, React, and more.",
  keywords: [
    "Fadil",
    "Full-Stack Developer",
    "Mobile Developer",
    "Flutter",
    "Laravel",
    "React",
    "Portfolio",
  ],
  authors: [{ name: "Fadil Julianto" }],
  openGraph: {
    title: "Fadil - Full-Stack Developer & Mobile Specialist",
    description:
      "Passionate about creating beautiful and functional digital experiences.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Fadil - Full-Stack Developer",
    description:
      "Passionate about creating beautiful and functional digital experiences.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="font-sans antialiased bg-white text-ink">
        {children}
      </body>
    </html>
  );
}
