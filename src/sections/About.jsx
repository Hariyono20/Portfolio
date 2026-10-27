"use client";

import { motion, useReducedMotion } from "framer-motion";
import {
  FaUser,
  FaLightbulb,
  FaWhatsapp,
  FaInstagram,
  FaLinkedin,
  FaGithub,
  FaEnvelope,
  FaMapMarkerAlt,
  FaGraduationCap,
  FaIdBadge,
  FaAward,
  FaCalendarAlt,
  FaExternalLinkAlt,
} from "react-icons/fa";

const personalInfo = [
  {
    icon: FaIdBadge,
    label: "Bento Haryono, S.Kom.",
  },
  {
    icon: FaMapMarkerAlt,
    label: "Yogyakarta, Indonesia",
  },
  {
    icon: FaEnvelope,
    label: "bentoharriyono@gmail.com",
    href: "mailto:bentoharriyono@gmail.com",
  },
  {
    icon: FaGraduationCap,
    label: "S1 Sistem Informasi · 2026",
  },
  {
    icon: FaWhatsapp,
    label: "+62 889-8379-1081",
    href: "https://wa.me/6288983791081",
  },
  {
    icon: FaInstagram,
    label: "@harriyonoo",
    href: "https://www.instagram.com/harriyonoo",
  },
  {
    icon: FaLinkedin,
    label: "LinkedIn Profile",
    href: "https://www.linkedin.com/in/bento-haryono-01a4ba257",
  },
  {
    icon: FaGithub,
    label: "github.com/Hariyono20",
    href: "https://github.com/Hariyono20",
  },
];

const cardVariants = {
  hidden: {
    opacity: 0,
    y: 24,
  },
  visible: {
    opacity: 1,
    y: 0,
  },
};

function SectionHeading({ reduceMotion }) {
  return (
    <motion.div
      initial={reduceMotion ? false : "hidden"}
      whileInView="visible"
      variants={cardVariants}
      transition={{ duration: reduceMotion ? 0 : 0.6 }}
      viewport={{ once: true, amount: 0.3 }}
      className="mx-auto mb-12 max-w-3xl text-center sm:mb-16"
    >
      <span className="mb-4 inline-flex items-center gap-2 rounded-full border border-blue-200 bg-blue-50 px-4 py-2 text-sm font-semibold text-blue-700 dark:border-blue-400/20 dark:bg-blue-400/10 dark:text-blue-300">
        <FaUser />
        Kenali Saya Lebih Dekat
      </span>

      <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 dark:text-white sm:text-4xl md:text-5xl">
        About <span className="text-blue-600 dark:text-blue-400">Me</span>
      </h2>

      <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-gray-600 dark:text-gray-400 sm:text-base">
        Mengenal latar belakang, pendekatan kerja, dan perjalanan saya dalam
        dunia pengembangan web.
      </p>

      <motion.div
        initial={reduceMotion ? false : { width: 0 }}
        whileInView={{ width: 72 }}
        transition={{ duration: reduceMotion ? 0 : 0.7, delay: 0.15 }}
        viewport={{ once: true }}
        className="mx-auto mt-6 h-1 rounded-full bg-blue-600 dark:bg-blue-400"
      />
    </motion.div>
  );
}

function ProfileCard({ reduceMotion }) {
  return (
    <motion.div
      initial={reduceMotion ? false : { opacity: 0, x: -30 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: reduceMotion ? 0 : 0.7 }}
      viewport={{ once: true, amount: 0.15 }}
      className="min-w-0"
    >
      <motion.div
        whileHover={reduceMotion ? undefined : { y: -5 }}
        transition={{ duration: 0.25 }}
        className="group overflow-hidden rounded-3xl border border-gray-200 bg-white p-3 shadow-lg shadow-gray-200/50 transition-shadow duration-300 hover:shadow-xl hover:shadow-blue-500/10 dark:border-gray-700 dark:bg-gray-800 dark:shadow-black/10"
      >
        {/* Foto profil */}
        <div className="relative aspect-[4/5] max-h-[540px] overflow-hidden rounded-2xl bg-gray-100 dark:bg-gray-700">
          <div className="pointer-events-none absolute inset-x-0 top-0 z-10 h-24 bg-gradient-to-b from-black/10 to-transparent" />

          <motion.img
            whileHover={reduceMotion ? undefined : { scale: 1.035 }}
            transition={{ duration: 0.5 }}
            src="/Images/Bento Haryono - 222103013.png"
            alt="Foto profil Bento Haryono"
            loading="lazy"
            className="h-full w-full object-contain object-center"
          />
        </div>

        {/* Nama dan universitas */}
        <div className="px-3 pb-4 pt-5 text-center">
          <h3 className="text-xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-2xl">
            Bento Haryono, S.Kom.
          </h3>

          <p className="mt-2 text-sm leading-6 text-gray-500 dark:text-gray-400">
            Sistem Informasi
            <span className="block">
              Universitas Jenderal Achmad Yani Yogyakarta
            </span>
          </p>
        </div>
      </motion.div>

      {/* Informasi akademik */}
      <div className="mt-4 grid grid-cols-2 gap-3 sm:gap-4">
        <motion.div
          whileHover={reduceMotion ? undefined : { y: -4 }}
          className="rounded-2xl border border-gray-200 bg-white p-4 text-center shadow-sm transition-colors hover:border-blue-300 dark:border-gray-700 dark:bg-gray-800 dark:hover:border-blue-500 sm:p-5"
        >
          <div className="mx-auto mb-2 flex h-10 w-10 items-center justify-center rounded-xl bg-blue-50 text-blue-600 dark:bg-blue-400/10 dark:text-blue-400">
            <FaAward className="text-lg" />
          </div>
          <p className="text-2xl font-extrabold text-blue-600 dark:text-blue-400 sm:text-3xl">
            3.57
          </p>
          <p className="mt-1 text-xs text-gray-500 dark:text-gray-400 sm:text-sm">
            IPK / 4.00
          </p>
        </motion.div>

        <motion.div
          whileHover={reduceMotion ? undefined : { y: -4 }}
          className="rounded-2xl border border-gray-200 bg-white p-4 text-center shadow-sm transition-colors hover:border-blue-300 dark:border-gray-700 dark:bg-gray-800 dark:hover:border-blue-500 sm:p-5"
        >
          <div className="mx-auto mb-2 flex h-10 w-10 items-center justify-center rounded-xl bg-blue-50 text-blue-600 dark:bg-blue-400/10 dark:text-blue-400">
            <FaCalendarAlt className="text-lg" />
          </div>
          <p className="text-2xl font-extrabold text-blue-600 dark:text-blue-400 sm:text-3xl">
            2026
          </p>
          <p className="mt-1 text-xs text-gray-500 dark:text-gray-400 sm:text-sm">
            Tahun Kelulusan
          </p>
        </motion.div>
      </div>
    </motion.div>
  );
}

function ProfileDescription({ reduceMotion }) {
  const descriptions = [
    {
      icon: FaUser,
      title: "Who Am I",
      text: "Saya lulusan S1 Sistem Informasi Universitas Jenderal Achmad Yani Yogyakarta dengan IPK 3,57/4,00. Saya memiliki minat pada pengembangan web, khususnya sebagai Junior Frontend Developer atau Web Developer, serta pengalaman magang sebagai Frontend Developer.",
    },
    {
      icon: FaLightbulb,
      title: "My Approach",
      text: "Saya mengutamakan antarmuka yang responsif, intuitif, dan konsisten. Dalam pengembangan web, saya memperhatikan kebutuhan pengguna, kualitas tampilan, keterbacaan kode, serta kolaborasi tim agar aplikasi mudah digunakan dan dikembangkan.",
    },
  ];

  return (
    <div className="grid grid-cols-1 gap-4 sm:gap-5 md:grid-cols-2">
      {descriptions.map((item, index) => {
        const Icon = item.icon;

        return (
          <motion.article
            key={item.title}
            initial={reduceMotion ? false : { opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              duration: reduceMotion ? 0 : 0.55,
              delay: reduceMotion ? 0 : index * 0.12,
            }}
            viewport={{ once: true, amount: 0.15 }}
            whileHover={reduceMotion ? undefined : { y: -4 }}
            className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm transition-all duration-300 hover:border-blue-300 hover:shadow-lg hover:shadow-blue-500/5 dark:border-gray-700 dark:bg-gray-800 dark:hover:border-blue-500/60 sm:p-6"
          >
            <div className="mb-4 flex items-center gap-3">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-blue-50 dark:bg-blue-400/10">
                <Icon className="text-lg text-blue-600 dark:text-blue-400" />
              </div>

              <h3 className="text-lg font-bold text-gray-900 dark:text-white">
                {item.title}
              </h3>
            </div>

            <p className="text-sm leading-7 text-gray-600 dark:text-gray-300">
              {item.text}
            </p>
          </motion.article>
        );
      })}
    </div>
  );
}

function PersonalInformation({ reduceMotion }) {
  return (
    <motion.div
      initial={reduceMotion ? false : { opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: reduceMotion ? 0 : 0.6 }}
      viewport={{ once: true, amount: 0.1 }}
      className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm dark:border-gray-700 dark:bg-gray-800 sm:p-6 lg:p-7"
    >
      <div className="mb-6">
        <h3 className="text-lg font-bold text-gray-900 dark:text-white sm:text-xl">
          Personal Information
        </h3>
        <p className="mt-1 text-sm leading-6 text-gray-500 dark:text-gray-400">
          Informasi profil dan tautan untuk menghubungi saya.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 sm:gap-4">
        {personalInfo.map((item, index) => {
          const Icon = item.icon;
          const isExternal = item.href?.startsWith("https://");

          const content = (
            <>
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-gray-100 transition-colors duration-300 group-hover:bg-blue-100 dark:bg-gray-700 dark:group-hover:bg-blue-400/15 sm:h-11 sm:w-11">
                <Icon className="text-base text-gray-600 transition-colors duration-300 group-hover:text-blue-600 dark:text-gray-300 dark:group-hover:text-blue-400" />
              </div>

              <span className="min-w-0 flex-1 break-words text-sm leading-6 text-gray-700 transition-colors duration-300 group-hover:text-blue-700 dark:text-gray-300 dark:group-hover:text-blue-300">
                {item.label}
              </span>

              {isExternal && (
                <FaExternalLinkAlt className="h-3 w-3 shrink-0 text-gray-400 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              )}
            </>
          );

          const classes =
            "group flex min-w-0 items-center gap-3 rounded-xl border border-gray-100 bg-gray-50/80 p-3 transition-all duration-300 hover:-translate-y-0.5 hover:border-blue-200 hover:bg-blue-50/60 dark:border-gray-700/80 dark:bg-gray-700/30 dark:hover:border-blue-500/50 dark:hover:bg-blue-400/5 sm:p-3.5";

          return (
            <motion.div
              key={item.label}
              initial={reduceMotion ? false : { opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: reduceMotion ? 0 : 0.35,
                delay: reduceMotion ? 0 : index * 0.04,
              }}
              viewport={{ once: true, amount: 0.1 }}
            >
              {item.href ? (
                <a
                  href={item.href}
                  target={isExternal ? "_blank" : undefined}
                  rel={isExternal ? "noopener noreferrer" : undefined}
                  className={classes}
                  aria-label={item.label}
                >
                  {content}
                </a>
              ) : (
                <div className={classes}>{content}</div>
              )}
            </motion.div>
          );
        })}
      </div>
    </motion.div>
  );
}

export default function About() {
  const reduceMotion = useReducedMotion();

  return (
    <section
      id="about"
      className="relative w-full overflow-hidden bg-gray-50 py-20 transition-colors duration-500 dark:bg-gray-900 sm:py-24 lg:py-28"
    >
      {/* Dekorasi transparan, tanpa mengganti warna dasar */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-32 top-32 h-72 w-72 rounded-full bg-blue-400/10 blur-3xl"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-32 bottom-24 h-72 w-72 rounded-full bg-sky-400/10 blur-3xl"
      />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        <SectionHeading reduceMotion={Boolean(reduceMotion)} />

        <div className="grid grid-cols-1 items-start gap-8 lg:grid-cols-5 lg:gap-10 xl:gap-12">
          {/* Kolom foto dan akademik */}
          <div className="min-w-0 lg:col-span-2">
            <ProfileCard reduceMotion={Boolean(reduceMotion)} />
          </div>

          {/* Kolom deskripsi dan kontak */}
          <div className="flex min-w-0 flex-col gap-5 sm:gap-6 lg:col-span-3">
            <ProfileDescription reduceMotion={Boolean(reduceMotion)} />
            <PersonalInformation reduceMotion={Boolean(reduceMotion)} />
          </div>
        </div>
      </div>
    </section>
  );
}
