"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiCheckCircle } from "react-icons/fi";
import {
  FaDownload,
  FaEnvelope,
  FaInstagram,
  FaLinkedin,
  FaGithub,
} from "react-icons/fa";

function Typewriter({
  words,
  typingSpeed = 150,
  deletingSpeed = 75,
  delayBetween = 1500,
}) {
  const [text, setText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [wordIndex, setWordIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);

  useEffect(() => {
    let timer;
    if (!isDeleting && charIndex <= words[wordIndex].length) {
      timer = setTimeout(() => {
        setText(words[wordIndex].slice(0, charIndex));
        setCharIndex((prev) => prev + 1);
      }, typingSpeed);
    } else if (isDeleting && charIndex >= 0) {
      timer = setTimeout(() => {
        setText(words[wordIndex].slice(0, charIndex));
        setCharIndex((prev) => prev - 1);
      }, deletingSpeed);
    } else if (charIndex > words[wordIndex].length) {
      timer = setTimeout(() => setIsDeleting(true), delayBetween);
    } else if (charIndex < 0) {
      setIsDeleting(false);
      setWordIndex((prev) => (prev + 1) % words.length);
      setCharIndex(0);
    }
    return () => clearTimeout(timer);
  }, [
    charIndex,
    isDeleting,
    words,
    wordIndex,
    typingSpeed,
    deletingSpeed,
    delayBetween,
  ]);

  return <span>{text}</span>;
}

export default function Hero() {
  const [currentImage, setCurrentImage] = useState(0);
  const [currentGreeting, setCurrentGreeting] = useState(0);

  const greetings = [
    "Selamat Datang di Portofolio Saya",
    "Welcome to My Portfolio",
    "Bienvenue dans Mon Portfolio",
    "Willkommen in Meinem Portfolio",
    "欢迎来到我的作品集",
    "私のポートフォリオへようこそ",
  ];

  const images = [
    "/Images/WhatsApp Image 2025-06-24 at 18.19.03.jpeg",
    "/Images/WhatsApp Image 2025-06-24 at 18.19.20.jpeg",
    "/Images/WhatsApp Image 2025-06-24 at 18.19.02.jpeg",
  ];

  const description =
    "I focus on creating responsive and attractive interfaces using React and Tailwind CSS. Let's build stunning digital experiences together!";

  const infoItems = [
    "2+ years experience in frontend development",
    "Passionate about UI/UX and accessibility",
    "Expertise in React, Tailwind CSS, and animation",
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentGreeting((prev) => (prev + 1) % greetings.length);
    }, 3500);
    return () => clearInterval(interval);
  }, []);

  const handleImageClick = () => {
    setCurrentImage((prev) => (prev + 1) % images.length);
  };

  return (
    <section
      id="hero"
      className="w-full min-h-screen px-6 md:px-32 py-24 flex flex-col md:flex-row items-center justify-between bg-gray-50 dark:bg-gray-900 relative"
    >
      {/* Kiri */}
      <div className="flex-1 max-w-3xl text-center md:text-left">
        <AnimatePresence mode="wait" initial={false}>
          <motion.h2
            key={currentGreeting}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.8 }}
            className="text-3xl sm:text-4xl font-semibold text-violet-800 dark:text-violet-300 mb-6"
          >
            {greetings[currentGreeting]} 👋
          </motion.h2>
        </AnimatePresence>

        <h1 className="mb-6 text-gray-900 dark:text-gray-100 text-5xl sm:text-6xl font-bold leading-tight">
          It's me, Bento Haryono
        </h1>

        <p className="text-5xl sm:text-6xl font-extrabold text-violet-800 dark:text-violet-300 font-mono mb-8 min-h-[70px]">
          <Typewriter words={["Frontend Developer"]} />
        </p>

        <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-lg md:text-xl max-w-xl mx-auto md:mx-0 mb-6">
          {description}
        </p>

        <div className="flex items-center gap-3 mb-6 justify-center md:justify-start">
          <p className="text-lg font-medium text-gray-700 dark:text-gray-300">
            Follow me on:
          </p>
          <div className="flex items-center gap-5">
            <a
              href="https://www.instagram.com/harriyonoo"
              target="_blank"
              rel="noopener noreferrer"
              className="text-black dark:text-white hover:text-violet-600 dark:hover:text-violet-400 transition-transform transform hover:scale-110"
            >
              <FaInstagram size={24} />
            </a>
            <a
              href="https://www.linkedin.com/in/bento-hariyono-01a4ba257/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-black dark:text-white hover:text-violet-600 dark:hover:text-violet-400 transition-transform transform hover:scale-110"
            >
              <FaLinkedin size={24} />
            </a>
            <a
              href="https://github.com/Hariyono20"
              target="_blank"
              rel="noopener noreferrer"
              className="text-black dark:text-white hover:text-violet-600 dark:hover:text-violet-400 transition-transform transform hover:scale-110"
            >
              <FaGithub size={24} />
            </a>
          </div>
        </div>

        <div className="mb-10 flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
          <a
            href="../../public/Images/CV.pdf"
            download
            className="flex items-center gap-2 px-6 py-3 text-white bg-violet-700 hover:bg-violet-800 dark:bg-violet-600 dark:hover:bg-violet-700 rounded-lg text-lg font-semibold shadow transition-all duration-300"
          >
            <FaDownload />
            Download CV
          </a>
          <a
            href="https://wa.me/6288985440982"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-6 py-3 border-2 border-violet-700 dark:border-violet-500 text-violet-700 dark:text-violet-300 hover:bg-violet-700 hover:text-white dark:hover:bg-violet-500 rounded-lg text-lg font-semibold shadow transition-all duration-300"
          >
            <FaEnvelope />
            Contact Me
          </a>
        </div>

        {/* Info Tambahan */}
        <ul className="space-y-4 max-w-md mx-auto md:mx-0 text-gray-800 dark:text-gray-200 text-lg">
          {infoItems.map((item, i) => (
            <li key={i} className="flex items-center gap-3">
              <FiCheckCircle className="text-violet-600 dark:text-violet-400 w-6 h-6 flex-shrink-0" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Kanan */}
      <div
        className="relative w-72 h-72 sm:w-96 sm:h-96 flex-shrink-0 cursor-pointer group mt-16 md:mt-0"
        onClick={handleImageClick}
        title="Click to change photo"
      >
        <div className="absolute top-4 left-4 w-full h-full rounded-3xl bg-gray-200 dark:bg-gray-700 transform rotate-3 shadow-md z-0" />
        <div className="absolute top-2 left-2 w-full h-full rounded-3xl bg-gray-300 dark:bg-gray-800 transform -rotate-2 shadow-md z-10" />
        <div className="relative w-full h-full rounded-3xl overflow-hidden border-8 border-gray-50 dark:border-gray-900 shadow-xl z-20 transition-transform duration-300 group-hover:scale-105">
          <AnimatePresence mode="wait">
            <motion.img
              key={currentImage}
              src={images[currentImage]}
              alt="Foto Bento"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 1.05 }}
              transition={{ duration: 0.6 }}
              className="absolute inset-0 w-full h-full object-cover"
            />
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
