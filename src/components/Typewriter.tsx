"use client";

import { useEffect, useState } from "react";

interface TypewriterProps {
  strings: string[];
  delay?: number;
  deleteSpeed?: number;
  pause?: number;
}

export default function Typewriter({
  strings,
  delay = 80,
  deleteSpeed = 40,
  pause = 2000,
}: TypewriterProps) {
  const [currentText, setCurrentText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    let timer: NodeJS.Timeout;
    const currentWord = strings[currentIndex];

    if (isDeleting) {
      timer = setTimeout(() => {
        setCurrentText(currentWord.substring(0, currentText.length - 1));
      }, deleteSpeed);
    } else {
      timer = setTimeout(() => {
        setCurrentText(currentWord.substring(0, currentText.length + 1));
      }, delay);
    }

    if (!isDeleting && currentText === currentWord) {
      timer = setTimeout(() => setIsDeleting(true), pause);
    } else if (isDeleting && currentText === "") {
      setIsDeleting(false);
      setCurrentIndex((prev) => (prev + 1) % strings.length);
    }

    return () => clearTimeout(timer);
  }, [currentText, isDeleting, currentIndex, strings, delay, deleteSpeed, pause]);

  return (
    <span className="inline-flex items-center">
      {currentText}
      <span className="w-0.5 h-6 ml-0.5 bg-accent animate-pulse" />
    </span>
  );
}
