"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { FiCheckCircle } from "react-icons/fi";
import {
  FaDownload,
  FaEnvelope,
  FaInstagram,
  FaLinkedin,
  FaGithub,
  FaChevronRight,
} from "react-icons/fa";

const greetings = [
  "Selamat Datang di Portofolio Saya",
  "Welcome to My Portfolio",
  "Bienvenue dans Mon Portfolio",
  "Willkommen in Meinem Portfolio",
  "欢迎来到我的作品集",
  "私のポートフォリオへようこそ",
];

const images = [
  "/Images/Bento Haryono - 222103013.png",
  "/Images/WhatsApp Image 2025-06-24 at 18.19.20.jpeg",
  "/Images/WhatsApp Image 2025-06-24 at 18.19.02.jpeg",
];

const infoItems = [
  "Lulusan S1 Sistem Informasi tahun 2026",
  "Berpengalaman magang sebagai Frontend Developer",
  "Berfokus pada UI responsif dan pengalaman pengguna",
];

const socialLinks = [
  {
    label: "Instagram",
    href: "https://www.instagram.com/harriyonoo",
    icon: FaInstagram,
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/bento-haryono-01a4ba257",
    icon: FaLinkedin,
  },
  {
    label: "GitHub",
    href: "https://github.com/Hariyono20",
    icon: FaGithub,
  },
];

function Typewriter({
  words,
  typingSpeed = 100,
  deletingSpeed = 55,
  delayBetween = 1800,
  reducedMotion = false,
}) {
  const [wordIndex, setWordIndex] = useState(0);
  const [text, setText] = useState("");
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    if (reducedMotion) {
      setText(words[0]);
      return;
    }

    const currentWord = words[wordIndex];
    let delay = deleting ? deletingSpeed : typingSpeed;

    if (!deleting && text === currentWord) {
      delay = delayBetween;
    } else if (deleting && text === "") {
      delay = 300;
    }

    const timer = setTimeout(() => {
      if (!deleting && text === currentWord) {
        setDeleting(true);
      } else if (deleting && text === "") {
        setDeleting(false);
        setWordIndex((prev) => (prev + 1) % words.length);
      } else if (deleting) {
        setText(currentWord.slice(0, text.length - 1));
      } else {
        setText(currentWord.slice(0, text.length + 1));
      }
    }, delay);

    return () => clearTimeout(timer);
  }, [
    text,
    deleting,
    wordIndex,
    words,
    typingSpeed,
    deletingSpeed,
    delayBetween,
    reducedMotion,
  ]);

  return (
    <span>
      {text}
      {!reducedMotion && (
        <span
          aria-hidden="true"
          className="inline-block w-[3px] h-[0.9em] bg-blue-600 dark:bg-blue-400 ml-1 align-middle animate-pulse"
        />
      )}
    </span>
  );
}

export default function Hero() {
  const [currentImage, setCurrentImage] = useState(0);
  const [currentGreeting, setCurrentGreeting] = useState(0);
  const shouldReduceMotion = useReducedMotion();

  useEffect(() => {
    if (shouldReduceMotion) return;

    const interval = setInterval(() => {
      setCurrentGreeting((prev) => (prev + 1) % greetings.length);
    }, 3500);

    return () => clearInterval(interval);
  }, [shouldReduceMotion]);

  const changeImage = () => {
    setCurrentImage((prev) => (prev + 1) % images.length);
  };

  const fadeUp = {
    hidden: { opacity: 0, y: shouldReduceMotion ? 0 : 24 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section
      id="hero"
      className="relative isolate overflow-hidden bg-gray-50 dark:bg-gray-900 transition-colors duration-500"
    >
      {/* Dekorasi latar */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-32 -right-24 w-80 h-80 rounded-full bg-blue-200/40 dark:bg-blue-900/20 blur-3xl"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute bottom-0 -left-24 w-72 h-72 rounded-full bg-sky-200/40 dark:bg-sky-900/20 blur-3xl"
      />

      <div className="relative max-w-7xl mx-auto min-h-screen px-5 sm:px-8 lg:px-12 py-24 sm:py-28 lg:py-32 flex items-center">
        <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-14 lg:gap-16 w-full">
          {/* Kolom teks */}
          <motion.div
            initial="hidden"
            animate="visible"
            variants={{
              hidden: {},
              visible: {
                transition: {
                  staggerChildren: shouldReduceMotion ? 0 : 0.12,
                },
              },
            }}
            className="order-2 lg:order-1 text-center lg:text-left"
          >
            {/* Sapaan */}
            <motion.div
              variants={fadeUp}
              transition={{ duration: 0.65 }}
              className="min-h-10 flex justify-center lg:justify-start items-center mb-5"
            >
              <AnimatePresence mode="wait" initial={false}>
                <motion.p
                  key={currentGreeting}
                  initial={{
                    opacity: 0,
                    y: shouldReduceMotion ? 0 : 10,
                  }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{
                    opacity: 0,
                    y: shouldReduceMotion ? 0 : -10,
                  }}
                  transition={{ duration: 0.35 }}
                  className="inline-flex items-center gap-2 text-sm sm:text-base font-semibold text-blue-700 dark:text-blue-300"
                >
                  <span
                    aria-hidden="true"
                    className="w-2 h-2 rounded-full bg-blue-600 dark:bg-blue-400"
                  />
                  {greetings[currentGreeting]} 👋
                </motion.p>
              </AnimatePresence>
            </motion.div>

            {/* Nama */}
            <motion.p
              variants={fadeUp}
              transition={{ duration: 0.65 }}
              className="text-sm sm:text-base font-semibold tracking-[0.2em] uppercase text-gray-500 dark:text-gray-400 mb-3"
            >
              Hello, I'm
            </motion.p>

            <motion.h1
              variants={fadeUp}
              transition={{ duration: 0.7 }}
              className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-extrabold tracking-tight leading-[1.12] text-gray-950 dark:text-white"
            >
              Bento
              <span className="block text-blue-700 dark:text-blue-400 mt-2">
                Haryono, S.Kom.
              </span>
            </motion.h1>

            {/* Jabatan */}
            <motion.div
              variants={fadeUp}
              transition={{ duration: 0.7 }}
              className="mt-6 min-h-[3.5rem] flex items-center justify-center lg:justify-start"
            >
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-gray-700 dark:text-gray-200">
                <Typewriter
                  words={[
                    "Junior Frontend Developer",
                    "Web Developer",
                    "React.js Developer",
                  ]}
                  reducedMotion={shouldReduceMotion}
                />
              </h2>
            </motion.div>

            {/* Deskripsi */}
            <motion.p
              variants={fadeUp}
              transition={{ duration: 0.7 }}
              className="mt-5 max-w-2xl mx-auto lg:mx-0 text-base sm:text-lg leading-8 text-gray-600 dark:text-gray-300"
            >
              Lulusan Sistem Informasi yang berfokus pada pengembangan web. Saya
              senang membangun antarmuka yang responsif, menarik, dan mudah
              digunakan dengan React.js serta Tailwind CSS. Saya terus
              mengembangkan kemampuan untuk menciptakan pengalaman digital yang
              bermanfaat.
            </motion.p>

            {/* Sosial media */}
            <motion.div
              variants={fadeUp}
              transition={{ duration: 0.7 }}
              className="mt-7 flex flex-wrap items-center justify-center lg:justify-start gap-4"
            >
              <span className="text-sm font-medium text-gray-600 dark:text-gray-400">
                Find me on
              </span>

              <div className="flex items-center gap-3">
                {socialLinks.map((social) => {
                  const Icon = social.icon;

                  return (
                    <motion.a
                      key={social.label}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={social.label}
                      title={social.label}
                      whileHover={
                        shouldReduceMotion ? {} : { y: -4, scale: 1.06 }
                      }
                      whileTap={shouldReduceMotion ? {} : { scale: 0.95 }}
                      className="w-11 h-11 flex items-center justify-center rounded-xl border border-gray-200 dark:border-gray-700 bg-white/80 dark:bg-gray-800/80 text-gray-700 dark:text-gray-200 hover:text-blue-700 hover:border-blue-300 dark:hover:text-blue-300 dark:hover:border-blue-700 shadow-sm transition-colors"
                    >
                      <Icon size={19} />
                    </motion.a>
                  );
                })}
              </div>
            </motion.div>

            {/* Tombol aksi */}
            <motion.div
              variants={fadeUp}
              transition={{ duration: 0.7 }}
              className="mt-8 flex flex-col sm:flex-row items-stretch sm:items-center justify-center lg:justify-start gap-3"
            >
              <motion.a
                href="/Images/CV.pdf"
                download
                whileHover={shouldReduceMotion ? {} : { y: -3 }}
                whileTap={shouldReduceMotion ? {} : { scale: 0.98 }}
                className="inline-flex items-center justify-center gap-3 px-6 py-3.5 rounded-xl bg-blue-700 hover:bg-blue-800 dark:bg-blue-600 dark:hover:bg-blue-500 text-white font-semibold shadow-lg shadow-blue-700/20 transition-colors"
              >
                <FaDownload />
                Download CV
              </motion.a>

              <motion.a
                href="https://wa.me/6288983791081"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={shouldReduceMotion ? {} : { y: -3 }}
                whileTap={shouldReduceMotion ? {} : { scale: 0.98 }}
                className="inline-flex items-center justify-center gap-3 px-6 py-3.5 rounded-xl border border-gray-300 dark:border-gray-600 bg-white/70 dark:bg-gray-800/70 text-gray-800 dark:text-gray-100 hover:border-blue-500 hover:text-blue-700 dark:hover:text-blue-300 font-semibold transition-colors"
              >
                <FaEnvelope />
                Contact Me
                <FaChevronRight className="text-xs" />
              </motion.a>
            </motion.div>

            {/* Ringkasan */}
            <motion.ul
              variants={fadeUp}
              transition={{ duration: 0.7 }}
              className="mt-9 flex flex-col gap-3 max-w-xl mx-auto lg:mx-0 text-left"
            >
              {infoItems.map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-3 text-sm sm:text-base text-gray-700 dark:text-gray-300"
                >
                  <FiCheckCircle className="mt-1 shrink-0 text-blue-600 dark:text-blue-400 w-5 h-5" />
                  <span>{item}</span>
                </li>
              ))}
            </motion.ul>
          </motion.div>

          {/* Kolom foto */}
          <motion.div
            initial={{
              opacity: 0,
              x: shouldReduceMotion ? 0 : 35,
              scale: shouldReduceMotion ? 1 : 0.96,
            }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            transition={{ duration: 0.9, ease: "easeOut", delay: 0.15 }}
            className="order-1 lg:order-2 flex justify-center lg:justify-end"
          >
            <div className="relative w-64 h-72 sm:w-80 sm:h-[360px] lg:w-[390px] lg:h-[440px]">
              {/* Dekorasi foto */}
              <motion.div
                aria-hidden="true"
                animate={
                  shouldReduceMotion ? {} : { rotate: [5, 7, 5], y: [0, -5, 0] }
                }
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute inset-2 rounded-[2rem] bg-blue-200 dark:bg-blue-900/50"
              />

              <motion.div
                aria-hidden="true"
                animate={
                  shouldReduceMotion
                    ? {}
                    : { rotate: [-4, -2, -4], y: [0, 5, 0] }
                }
                transition={{
                  duration: 7,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute inset-0 rounded-[2rem] border border-blue-300 dark:border-blue-700"
              />

              <button
                type="button"
                onClick={changeImage}
                title="Klik untuk mengganti foto"
                aria-label="Ganti foto profil"
                className="group absolute inset-3 z-10 w-[calc(100%-1.5rem)] h-[calc(100%-1.5rem)] overflow-hidden rounded-[1.7rem] border-4 border-white dark:border-gray-800 bg-gray-200 dark:bg-gray-800 shadow-2xl focus:outline-none focus-visible:ring-4 focus-visible:ring-blue-500"
              >
                <AnimatePresence mode="wait" initial={false}>
                  <motion.img
                    key={currentImage}
                    src={images[currentImage]}
                    alt={`Foto Bento Haryono ${currentImage + 1}`}
                    initial={{
                      opacity: 0,
                      scale: shouldReduceMotion ? 1 : 1.04,
                    }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{
                      opacity: 0,
                      scale: shouldReduceMotion ? 1 : 1.03,
                    }}
                    transition={{ duration: 0.45 }}
                    className="absolute inset-0 w-full h-full object-cover object-center"
                  />
                </AnimatePresence>

                <div className="absolute inset-x-0 bottom-0 p-5 pt-12 bg-gradient-to-t from-black/70 to-transparent text-left">
                  <p className="text-white font-semibold text-lg">
                    Bento Haryono
                  </p>
                  <p className="text-white/80 text-sm">
                    Junior Frontend Developer
                  </p>
                  <p className="text-white/70 text-xs mt-2 opacity-100 sm:opacity-0 sm:group-hover:opacity-100 transition-opacity">
                    Klik untuk mengganti foto
                  </p>
                </div>
              </button>

              {/* Indikator foto */}
              <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 z-20 flex items-center gap-2 rounded-full px-3 py-2 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 shadow-md">
                {images.map((_, index) => (
                  <button
                    key={index}
                    type="button"
                    onClick={() => setCurrentImage(index)}
                    aria-label={`Tampilkan foto ${index + 1}`}
                    aria-pressed={currentImage === index}
                    className={`h-2.5 rounded-full transition-all duration-300 ${
                      currentImage === index
                        ? "w-7 bg-blue-600 dark:bg-blue-400"
                        : "w-2.5 bg-gray-300 dark:bg-gray-600 hover:bg-blue-300"
                    }`}
                  />
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
