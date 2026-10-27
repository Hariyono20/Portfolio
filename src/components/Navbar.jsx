import { useCallback, useEffect, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import {
  FiHome,
  FiUser,
  FiCode,
  FiBriefcase,
  FiAward,
  FiFolder,
  FiMail,
  FiFileText,
  FiSun,
  FiMoon,
  FiMenu,
  FiX,
  FiArrowUp,
} from "react-icons/fi";

const navItems = [
  { label: "Home", href: "#hero", icon: FiHome },
  { label: "About", href: "#about", icon: FiUser },
  { label: "Skills", href: "#skills", icon: FiCode },
  { label: "Experience", href: "#experience", icon: FiBriefcase },
  { label: "Certificates", href: "#certificates", icon: FiAward },
  { label: "Projects", href: "#projects", icon: FiFolder },
  { label: "Contact", href: "#contact", icon: FiMail },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");
  const [scrolled, setScrolled] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [showTopButton, setShowTopButton] = useState(false);
  const shouldReduceMotion = useReducedMotion();

  const closeMenu = useCallback(() => {
    setIsOpen(false);
  }, []);

  // Sinkronisasi tema dengan localStorage dan preferensi sistem.
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    const prefersDark = window.matchMedia(
      "(prefers-color-scheme: dark)",
    ).matches;

    const initialDark =
      savedTheme === "dark" ||
      (savedTheme !== "light" && savedTheme !== "dark" && prefersDark);

    setDarkMode(initialDark);
    document.documentElement.classList.toggle("dark", initialDark);
  }, []);

  const toggleDarkMode = () => {
    const nextDarkMode = !darkMode;

    setDarkMode(nextDarkMode);
    document.documentElement.classList.toggle("dark", nextDarkMode);
    localStorage.setItem("theme", nextDarkMode ? "dark" : "light");
  };

  // Efek scroll, progress bar, dan tombol kembali ke atas.
  useEffect(() => {
    let ticking = false;

    const updateScroll = () => {
      const scrollTop = window.scrollY || document.documentElement.scrollTop;

      const scrollableHeight =
        document.documentElement.scrollHeight - window.innerHeight;

      setScrolled(scrollTop > 20);
      setShowTopButton(scrollTop > 400);
      setScrollProgress(
        scrollableHeight > 0
          ? Math.min((scrollTop / scrollableHeight) * 100, 100)
          : 0,
      );

      ticking = false;
    };

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(updateScroll);
        ticking = true;
      }
    };

    updateScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Mendeteksi section yang sedang terlihat.
  useEffect(() => {
    const sections = navItems
      .map(({ href }) => document.querySelector(href))
      .filter(Boolean);

    if (!sections.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visibleEntries = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);

        if (visibleEntries.length) {
          setActiveSection(visibleEntries[0].target.id);
        }
      },
      {
        rootMargin: "-25% 0px -60% 0px",
        threshold: [0, 0.15, 0.3, 0.5],
      },
    );

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  // Menutup menu dengan tombol Escape.
  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === "Escape") closeMenu();
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [closeMenu]);

  // Mencegah halaman di belakang menu ikut bergulir di layar kecil.
  useEffect(() => {
    if (!isOpen) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, [isOpen]);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: shouldReduceMotion ? "auto" : "smooth",
    });
  };

  const handleNavClick = (event, href) => {
    const target = document.querySelector(href);

    if (!target) return;

    event.preventDefault();
    closeMenu();

    target.scrollIntoView({
      behavior: shouldReduceMotion ? "auto" : "smooth",
      block: "start",
    });

    window.history.replaceState(null, "", href);
    setActiveSection(href.slice(1));
  };

  const transition = shouldReduceMotion
    ? { duration: 0 }
    : { duration: 0.25, ease: "easeOut" };

  return (
    <>
      {/* Scroll progress indicator */}
      <div
        className="fixed inset-x-0 top-0 z-[70] h-[3px] bg-blue-500/10"
        aria-hidden="true"
      >
        <motion.div
          className="h-full origin-left bg-gradient-to-r from-blue-500 via-sky-400 to-cyan-400"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>

      {/* Main navbar */}
      <motion.header
        initial={shouldReduceMotion ? false : { y: -30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={transition}
        className={`sticky top-0 z-50 w-full border-b transition-all duration-300 ${
          scrolled
            ? "border-gray-200/80 bg-gray-50/90 shadow-sm backdrop-blur-xl dark:border-gray-700/70 dark:bg-gray-900/90"
            : "border-transparent bg-gray-50 dark:bg-gray-900"
        }`}
      >
        <nav
          className="mx-auto flex h-[68px] max-w-7xl items-center justify-between gap-3 px-4 sm:px-6 lg:px-8"
          aria-label="Navigasi utama"
        >
          {/* Brand */}
          <a
            href="#hero"
            onClick={(event) => handleNavClick(event, "#hero")}
            className="group flex shrink-0 items-center gap-2.5 rounded-lg outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
            aria-label="Bento Haryono - Home"
          >
           

            <span className="hidden min-[380px]:block">
              <span className="block text-sm font-bold leading-tight text-gray-900 dark:text-white sm:text-base">
                Bento Haryono
              </span>
              <span className="mt-0.5 block text-[10px] font-medium tracking-wide text-blue-600 dark:text-blue-400 sm:text-xs">
                Web Developer
              </span>
            </span>
          </a>

          {/* Desktop navigation */}
          <div className="hidden items-center gap-0.5 lg:flex">
            {navItems.map(({ label, href }) => {
              const isActive = activeSection === href.slice(1);

              return (
                <a
                  key={href}
                  href={href}
                  onClick={(event) => handleNavClick(event, href)}
                  aria-current={isActive ? "location" : undefined}
                  className={`relative rounded-lg px-2.5 py-2 text-[13px] font-medium transition-colors duration-200 xl:px-3 xl:text-sm ${
                    isActive
                      ? "text-blue-600 dark:text-blue-400"
                      : "text-gray-600 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400"
                  }`}
                >
                  {label}

                  {isActive && (
                    <motion.span
                      layoutId="navbar-active-indicator"
                      className="absolute inset-x-3 -bottom-[2px] h-0.5 rounded-full bg-blue-600 dark:bg-blue-400"
                      transition={transition}
                    />
                  )}
                </a>
              );
            })}
          </div>

          {/* Action buttons */}
          <div className="flex shrink-0 items-center gap-2">
            <motion.button
              type="button"
              whileTap={shouldReduceMotion ? undefined : { scale: 0.9 }}
              onClick={toggleDarkMode}
              aria-label={
                darkMode ? "Aktifkan mode terang" : "Aktifkan mode gelap"
              }
              aria-pressed={darkMode}
              title={darkMode ? "Mode terang" : "Mode gelap"}
              className="flex h-10 w-10 items-center justify-center rounded-xl border border-gray-200 bg-white text-amber-500 shadow-sm transition-colors hover:border-blue-300 hover:bg-blue-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 dark:border-gray-700 dark:bg-gray-800 dark:text-yellow-300 dark:hover:border-blue-500 dark:hover:bg-gray-700"
            >
              <AnimatePresence mode="wait" initial={false}>
                <motion.span
                  key={darkMode ? "sun" : "moon"}
                  initial={
                    shouldReduceMotion
                      ? false
                      : { opacity: 0, rotate: -45, scale: 0.7 }
                  }
                  animate={{ opacity: 1, rotate: 0, scale: 1 }}
                  exit={
                    shouldReduceMotion
                      ? undefined
                      : { opacity: 0, rotate: 45, scale: 0.7 }
                  }
                  transition={{ duration: 0.2 }}
                  className="flex"
                >
                  {darkMode ? <FiSun size={19} /> : <FiMoon size={19} />}
                </motion.span>
              </AnimatePresence>
            </motion.button>

            <a
              href="/Images/CV.pdf"
              target="_blank"
              rel="noreferrer"
              className="hidden items-center gap-2 rounded-xl bg-blue-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm shadow-blue-600/20 transition-all duration-200 hover:-translate-y-0.5 hover:bg-blue-700 hover:shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 dark:focus-visible:ring-offset-gray-900 sm:inline-flex"
            >
              <FiFileText size={16} />
              <span>Resume</span>
            </a>

            {/* Mobile menu toggle */}
            <motion.button
              type="button"
              whileTap={shouldReduceMotion ? undefined : { scale: 0.9 }}
              onClick={() => setIsOpen((previous) => !previous)}
              aria-label={isOpen ? "Tutup menu navigasi" : "Buka menu navigasi"}
              aria-expanded={isOpen}
              aria-controls="mobile-navigation"
              className="flex h-10 w-10 items-center justify-center rounded-xl border border-gray-200 bg-white text-gray-700 transition-colors hover:bg-gray-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-200 dark:hover:bg-gray-700 lg:hidden"
            >
              <AnimatePresence mode="wait" initial={false}>
                <motion.span
                  key={isOpen ? "close" : "menu"}
                  initial={
                    shouldReduceMotion
                      ? false
                      : { opacity: 0, rotate: -45, scale: 0.8 }
                  }
                  animate={{ opacity: 1, rotate: 0, scale: 1 }}
                  exit={
                    shouldReduceMotion
                      ? undefined
                      : { opacity: 0, rotate: 45, scale: 0.8 }
                  }
                  transition={{ duration: 0.15 }}
                  className="flex"
                >
                  {isOpen ? <FiX size={21} /> : <FiMenu size={21} />}
                </motion.span>
              </AnimatePresence>
            </motion.button>
          </div>
        </nav>
      </motion.header>

      {/* Mobile navigation overlay */}
      <AnimatePresence>
        {isOpen && (
          <>
            <motion.button
              type="button"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={transition}
              onClick={closeMenu}
              aria-label="Tutup menu navigasi"
              className="fixed inset-0 z-40 cursor-default bg-gray-950/40 backdrop-blur-[2px] lg:hidden"
            />

            <motion.div
              id="mobile-navigation"
              initial={
                shouldReduceMotion ? false : { opacity: 0, y: -12, scale: 0.98 }
              }
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={
                shouldReduceMotion
                  ? { opacity: 0 }
                  : { opacity: 0, y: -8, scale: 0.98 }
              }
              transition={transition}
              className="fixed inset-x-3 top-[76px] z-50 max-h-[calc(100dvh-92px)] overflow-y-auto rounded-2xl border border-gray-200 bg-gray-50 p-3 shadow-2xl shadow-gray-950/10 dark:border-gray-700 dark:bg-gray-900 sm:inset-x-6 sm:p-4 lg:hidden"
            >
              <p className="px-3 pb-2 pt-1 text-[11px] font-bold uppercase tracking-[0.16em] text-gray-400 dark:text-gray-500">
                Menu navigasi
              </p>

              <div className="grid grid-cols-1 gap-1 sm:grid-cols-2">
                {navItems.map(({ label, href, icon: Icon }, index) => {
                  const isActive = activeSection === href.slice(1);

                  return (
                    <motion.a
                      key={href}
                      href={href}
                      onClick={(event) => handleNavClick(event, href)}
                      initial={
                        shouldReduceMotion ? false : { opacity: 0, x: -8 }
                      }
                      animate={{ opacity: 1, x: 0 }}
                      transition={{
                        ...transition,
                        delay: shouldReduceMotion ? 0 : index * 0.035,
                      }}
                      aria-current={isActive ? "location" : undefined}
                      className={`flex min-h-12 items-center gap-3 rounded-xl px-3.5 py-3 text-sm font-medium transition-colors ${
                        isActive
                          ? "bg-blue-50 text-blue-700 dark:bg-blue-500/10 dark:text-blue-400"
                          : "text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-800"
                      }`}
                    >
                      <Icon
                        size={18}
                        className={
                          isActive
                            ? "shrink-0 text-blue-600 dark:text-blue-400"
                            : "shrink-0 text-gray-400 dark:text-gray-500"
                        }
                      />

                      <span>{label}</span>

                      {isActive && (
                        <motion.span
                          layoutId="mobile-active-indicator"
                          className="ml-auto h-1.5 w-1.5 rounded-full bg-blue-600 dark:bg-blue-400"
                        />
                      )}
                    </motion.a>
                  );
                })}
              </div>

              <div className="mt-3 border-t border-gray-200 pt-3 dark:border-gray-700 sm:hidden">
                <a
                  href="/Images/CV.pdf"
                  target="_blank"
                  rel="noreferrer"
                  onClick={closeMenu}
                  className="flex min-h-12 items-center justify-center gap-2 rounded-xl bg-blue-600 px-4 py-3 text-sm font-semibold text-white transition-colors hover:bg-blue-700"
                >
                  <FiFileText size={17} />
                  Lihat Resume / CV
                </a>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* Back to top */}
      <AnimatePresence>
        {showTopButton && (
          <motion.button
            type="button"
            initial={
              shouldReduceMotion ? false : { opacity: 0, y: 12, scale: 0.85 }
            }
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={
              shouldReduceMotion
                ? { opacity: 0 }
                : { opacity: 0, y: 12, scale: 0.85 }
            }
            transition={transition}
            whileHover={shouldReduceMotion ? undefined : { y: -3 }}
            whileTap={shouldReduceMotion ? undefined : { scale: 0.9 }}
            onClick={scrollToTop}
            aria-label="Kembali ke atas"
            title="Kembali ke atas"
            className="fixed bottom-5 right-4 z-30 flex h-11 w-11 items-center justify-center rounded-xl border border-gray-200 bg-white text-blue-600 shadow-lg shadow-gray-900/10 transition-colors hover:bg-blue-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 dark:border-gray-700 dark:bg-gray-800 dark:text-blue-400 dark:hover:bg-gray-700 sm:bottom-6 sm:right-6"
          >
            <FiArrowUp size={20} />
          </motion.button>
        )}
      </AnimatePresence>
    </>
  );
}
