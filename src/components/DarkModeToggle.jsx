"use client";

import { useEffect, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { FaMoon, FaSun } from "react-icons/fa";

export default function DarkModeToggle() {
  const [isDark, setIsDark] = useState(false);
  const [mounted, setMounted] = useState(false);
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    const systemPrefersDark = window.matchMedia(
      "(prefers-color-scheme: dark)",
    ).matches;

    const shouldUseDark =
      savedTheme === "dark" || (savedTheme !== "light" && systemPrefersDark);

    document.documentElement.classList.toggle("dark", shouldUseDark);
    setIsDark(shouldUseDark);
    setMounted(true);
  }, []);

  const toggleDarkMode = () => {
    const nextIsDark = !isDark;

    document.documentElement.classList.toggle("dark", nextIsDark);
    localStorage.setItem("theme", nextIsDark ? "dark" : "light");
    setIsDark(nextIsDark);
  };

  if (!mounted) {
    return (
      <button
        type="button"
        aria-label="Mengatur tema"
        className="ml-3 h-10 w-10 rounded-xl border border-gray-200 bg-gray-100 dark:border-gray-700 dark:bg-gray-800"
      />
    );
  }

  return (
    <motion.button
      type="button"
      onClick={toggleDarkMode}
      aria-label={isDark ? "Aktifkan mode terang" : "Aktifkan mode gelap"}
      aria-pressed={isDark}
      whileTap={reduceMotion ? undefined : { scale: 0.92 }}
      transition={{ duration: reduceMotion ? 0 : 0.2 }}
      className="group ml-3 inline-flex h-10 items-center justify-center gap-2 rounded-xl border border-gray-200 bg-white px-3 text-gray-700 shadow-sm transition-colors duration-300 hover:border-blue-300 hover:bg-blue-50 hover:text-blue-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-200 dark:hover:border-blue-400 dark:hover:bg-gray-700 dark:hover:text-blue-300"
    >
      <span className="relative flex h-5 w-5 items-center justify-center">
        {isDark ? (
          <FaSun className="text-amber-400" aria-hidden="true" />
        ) : (
          <FaMoon className="text-blue-600" aria-hidden="true" />
        )}
      </span>

      <span className="text-sm font-medium">
        {isDark ? "Light Mode" : "Dark Mode"}
      </span>
    </motion.button>
  );
}
