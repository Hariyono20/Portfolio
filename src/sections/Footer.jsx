"use client";

import { useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import {
  FaInstagram,
  FaWhatsapp,
  FaLinkedin,
  FaMapMarkerAlt,
  FaEnvelope,
  FaPhoneAlt,
  FaClock,
  FaGithub,
  FaArrowUp,
  FaArrowRight,
  FaPaperPlane,
} from "react-icons/fa";

const navigation = [
  { label: "Home", id: "hero" },
  { label: "About", id: "about" },
  { label: "Skills", id: "skills" },
  { label: "Experience", id: "experience" },
  { label: "Certificates", id: "certificates" },
  { label: "Projects", id: "projects" },
  { label: "Contact", id: "contact" },
];

const socialLinks = [
  {
    label: "Instagram",
    href: "https://www.instagram.com/harriyonoo",
    icon: FaInstagram,
    hover: "hover:bg-pink-500 hover:border-pink-500",
  },
  {
    label: "WhatsApp",
    href: "https://wa.me/6288983791081",
    icon: FaWhatsapp,
    hover: "hover:bg-green-500 hover:border-green-500",
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/bento-haryono-01a4ba257",
    icon: FaLinkedin,
    hover: "hover:bg-blue-600 hover:border-blue-600",
  },
  {
    label: "GitHub",
    href: "https://github.com/Hariyono20",
    icon: FaGithub,
    hover:
      "hover:bg-gray-800 hover:border-gray-800 dark:hover:bg-gray-600 dark:hover:border-gray-600",
  },
];

const contactInfo = [
  {
    label: "Location",
    value: "Yogyakarta, Indonesia",
    icon: FaMapMarkerAlt,
  },
  {
    label: "Email",
    value: "bentohariyono00@gmail.com",
    icon: FaEnvelope,
    href: "mailto:bentohariyono00@gmail.com",
  },
  {
    label: "Phone",
    value: "+62 889-8379-1081",
    icon: FaPhoneAlt,
    href: "https://wa.me/6288983791081",
  },
  {
    label: "Availability",
    value: "Open to opportunities",
    icon: FaClock,
  },
];

export default function Footer() {
  const shouldReduceMotion = useReducedMotion();
  const [email, setEmail] = useState("");
  const [feedback, setFeedback] = useState("");

  const fadeUp = {
    hidden: {
      opacity: 0,
      y: shouldReduceMotion ? 0 : 20,
    },
    visible: {
      opacity: 1,
      y: 0,
    },
  };

  const transition = shouldReduceMotion
    ? { duration: 0 }
    : { duration: 0.5, ease: "easeOut" };

  const handleSubscribe = (event) => {
    event.preventDefault();

    const subject = "Portfolio Updates Subscription";
    const body = [
      "Halo Bento,",
      "",
      "Saya ingin mendapatkan update terbaru dari portfolio kamu.",
      `Email saya: ${email.trim()}`,
    ].join("\n");

    setFeedback(
      "Membuka aplikasi email untuk menyiapkan permintaan berlangganan.",
    );

    window.location.href = `mailto:bentohariyono00@gmail.com?subject=${encodeURIComponent(
      subject,
    )}&body=${encodeURIComponent(body)}`;
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: shouldReduceMotion ? "auto" : "smooth",
    });
  };

  const handleNavigation = (event, id) => {
    const section = document.getElementById(id);

    if (!section) return;

    event.preventDefault();

    section.scrollIntoView({
      behavior: shouldReduceMotion ? "auto" : "smooth",
      block: "start",
    });

    window.history.replaceState(null, "", `#${id}`);
  };

  return (
    <footer className="relative overflow-hidden border-t border-gray-200 bg-gray-50 text-gray-700 dark:border-gray-800 dark:bg-gray-900 dark:text-gray-300">
      {/* Decorative background */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 overflow-hidden"
      >
        <div className="absolute -right-32 -top-36 h-80 w-80 rounded-full bg-blue-500/[0.06] blur-3xl" />
        <div className="absolute -bottom-36 -left-32 h-80 w-80 rounded-full bg-cyan-500/[0.05] blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 pb-6 pt-14 sm:px-6 sm:pt-16 lg:px-8">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          transition={transition}
          className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-12 lg:gap-8"
        >
          {/* Brand and social media */}
          <div className="sm:col-span-2 lg:col-span-4">
            <a
              href="#hero"
              onClick={(event) => handleNavigation(event, "hero")}
              aria-label="Bento Haryono - kembali ke Home"
              className="group inline-flex items-center gap-3 rounded-xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
            >


              <span>
                <span className="block text-lg font-bold tracking-tight text-gray-900 dark:text-white">
                  Bento Haryono
                </span>
                <span className="mt-0.5 block text-xs font-medium tracking-wide text-blue-600 dark:text-blue-400">
                  Web Developer
                </span>
              </span>
            </a>

            <p className="mt-5 max-w-sm text-sm leading-7 text-gray-600 dark:text-gray-400">
              Membangun website yang responsif, mudah digunakan, dan memiliki
              pengalaman pengguna yang baik. Terbuka untuk kolaborasi dan
              peluang baru di bidang web development.
            </p>

            <div className="mt-6">
              <p className="mb-3 text-xs font-bold uppercase tracking-[0.16em] text-gray-500 dark:text-gray-400">
                Connect with me
              </p>

              <div className="flex flex-wrap gap-3">
                {socialLinks.map(
                  ({ label, href, icon: Icon, hover }, index) => (
                    <motion.a
                      key={label}
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={label}
                      title={label}
                      initial={
                        shouldReduceMotion ? false : { opacity: 0, y: 8 }
                      }
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{
                        ...transition,
                        delay: shouldReduceMotion ? 0 : index * 0.07,
                      }}
                      whileHover={shouldReduceMotion ? undefined : { y: -3 }}
                      whileTap={
                        shouldReduceMotion ? undefined : { scale: 0.94 }
                      }
                      className={`flex h-11 w-11 items-center justify-center rounded-xl border border-gray-200 bg-white text-lg text-gray-600 shadow-sm transition-colors duration-300 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-300 ${hover}`}
                    >
                      <Icon />
                    </motion.a>
                  ),
                )}
              </div>
            </div>
          </div>

          {/* Navigation */}
          <div className="lg:col-span-2">
            <h3 className="text-sm font-bold text-gray-900 dark:text-white">
              Quick Links
            </h3>

            <div className="mb-4 mt-3 h-1 w-9 rounded-full bg-blue-600" />

            <ul className="grid grid-cols-2 gap-x-3 gap-y-3 sm:grid-cols-1">
              {navigation.map(({ label, id }) => (
                <li key={id}>
                  <a
                    href={`#${id}`}
                    onClick={(event) => handleNavigation(event, id)}
                    className="group inline-flex items-center gap-2 text-sm text-gray-600 transition-colors duration-200 hover:text-blue-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 dark:text-gray-400 dark:hover:text-blue-400"
                  >
                    <FaArrowRight className="shrink-0 text-[10px] text-blue-500 opacity-0 transition-all duration-200 group-hover:translate-x-1 group-hover:opacity-100" />
                    <span className="transition-transform duration-200 group-hover:translate-x-0.5">
                      {label}
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact information */}
          <div className="lg:col-span-3">
            <h3 className="text-sm font-bold text-gray-900 dark:text-white">
              Contact Information
            </h3>

            <div className="mb-4 mt-3 h-1 w-9 rounded-full bg-blue-600" />

            <ul className="space-y-4">
              {contactInfo.map(({ label, value, icon: Icon, href }) => (
                <li key={label} className="flex min-w-0 items-start gap-3">
                  <span className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-blue-50 text-sm text-blue-600 dark:bg-blue-500/10 dark:text-blue-400">
                    <Icon />
                  </span>

                  <div className="min-w-0">
                    <p className="text-xs text-gray-500 dark:text-gray-500">
                      {label}
                    </p>

                    {href ? (
                      <a
                        href={href}
                        className="mt-0.5 block break-words text-sm font-medium text-gray-700 transition-colors hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400"
                      >
                        {value}
                      </a>
                    ) : (
                      <p className="mt-0.5 break-words text-sm font-medium text-gray-700 dark:text-gray-300">
                        {value}
                      </p>
                    )}
                  </div>
                </li>
              ))}
            </ul>
          </div>

          {/* Email updates */}
          <div className="lg:col-span-3">
            <h3 className="text-sm font-bold text-gray-900 dark:text-white">
              Stay Connected
            </h3>

            <div className="mb-4 mt-3 h-1 w-9 rounded-full bg-blue-600" />

            <p className="text-sm leading-6 text-gray-600 dark:text-gray-400">
              Ingin berdiskusi atau mendapatkan informasi terbaru? Kirimkan
              email kepada saya.
            </p>

            <form onSubmit={handleSubscribe} className="mt-5 space-y-3">
              <label htmlFor="footer-email" className="sr-only">
                Alamat email kamu
              </label>

              <input
                id="footer-email"
                type="email"
                name="email"
                autoComplete="email"
                placeholder="Masukkan email kamu"
                value={email}
                onChange={(event) => {
                  setEmail(event.target.value);
                  setFeedback("");
                }}
                maxLength={254}
                required
                className="w-full rounded-xl border border-gray-200 bg-white px-4 py-3 text-sm text-gray-900 outline-none transition-all placeholder:text-gray-400 focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 dark:border-gray-700 dark:bg-gray-800 dark:text-white dark:placeholder:text-gray-500"
              />

              <motion.button
                type="submit"
                whileHover={shouldReduceMotion ? undefined : { y: -2 }}
                whileTap={shouldReduceMotion ? undefined : { scale: 0.98 }}
                className="flex w-full items-center justify-center gap-2 rounded-xl bg-blue-600 px-4 py-3 text-sm font-semibold text-white shadow-lg shadow-blue-600/15 transition-colors hover:bg-blue-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 dark:focus-visible:ring-offset-gray-900"
              >
                <FaPaperPlane className="text-xs" />
                Send an Email
                <FaArrowRight className="ml-auto text-xs" />
              </motion.button>

              {feedback && (
                <p
                  role="status"
                  aria-live="polite"
                  className="text-xs leading-5 text-blue-600 dark:text-blue-400"
                >
                  {feedback}
                </p>
              )}
            </form>

            <p className="mt-3 text-xs leading-5 text-gray-500 dark:text-gray-500">
              Tombol ini menyiapkan email di aplikasi email kamu, bukan
              mendaftarkan newsletter secara otomatis.
            </p>
          </div>
        </motion.div>

        {/* Footer bottom */}
        <div className="mt-12 border-t border-gray-200 pt-6 dark:border-gray-800 sm:mt-14">
          <div className="flex flex-col items-center justify-between gap-4 text-center sm:flex-row sm:text-left">
            <p className="text-xs leading-6 text-gray-500 dark:text-gray-400 sm:text-sm">
              © {new Date().getFullYear()}{" "}
              <span className="font-semibold text-gray-800 dark:text-gray-200">
                Bento Haryono
              </span>
              . All rights reserved.
            </p>

            <p className="text-xs text-gray-500 dark:text-gray-400 sm:text-sm">
              Built with{" "}
              <span className="font-semibold text-blue-600 dark:text-blue-400">
                React
              </span>{" "}
              &{" "}
              <span className="font-semibold text-blue-600 dark:text-blue-400">
                Tailwind CSS
              </span>
            </p>

            <motion.button
              type="button"
              onClick={scrollToTop}
              whileHover={shouldReduceMotion ? undefined : { y: -3 }}
              whileTap={shouldReduceMotion ? undefined : { scale: 0.92 }}
              aria-label="Kembali ke atas"
              title="Kembali ke atas"
              className="flex h-10 w-10 items-center justify-center rounded-xl border border-gray-200 bg-white text-blue-600 shadow-sm transition-colors hover:border-blue-500 hover:bg-blue-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 dark:border-gray-700 dark:bg-gray-800 dark:text-blue-400 dark:hover:bg-gray-700"
            >
              <FaArrowUp />
            </motion.button>
          </div>
        </div>
      </div>
    </footer>
  );
}
