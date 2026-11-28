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

const fadeUp = {
  hidden: { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0 },
};

function SectionHeading({ reduceMotion }) {
  return (
    <motion.div
      initial={reduceMotion ? false : "hidden"}
      whileInView="visible"
      variants={fadeUp}
      transition={{ duration: reduceMotion ? 0 : 0.45 }}
      viewport={{ once: true }}
      className="mb-12 max-w-2xl sm:mb-14"
    >
  

      <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl md:text-5xl">
        About <span className="text-blue-900 dark:text-blue-400">Me</span>
      </h2>

      <p className="mt-5 max-w-xl text-sm leading-7 text-gray-600 dark:text-gray-400 sm:text-base">
        Mengenal lebih jauh tentang latar belakang pendidikan, pengalaman, dan
        hal-hal yang saya tekuni di bidang teknologi.
      </p>

      <div className="mt-6 h-1 w-14 rounded-full bg-blue-900 dark:bg-blue-400" />
    </motion.div>
  );
}

function ProfileCard({ reduceMotion }) {
  return (
    <motion.div
      initial={reduceMotion ? false : { opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: reduceMotion ? 0 : 0.5 }}
      viewport={{ once: true, amount: 0.15 }}
      className="min-w-0"
    >
      <div className="overflow-hidden rounded-xl border border-gray-200 bg-white dark:border-gray-700 dark:bg-gray-800">
        {/* Profile image */}
        <div className="relative aspect-[4/5] max-h-[540px] overflow-hidden bg-gray-100 dark:bg-gray-700">
          <img
            src="/Images/Bento Haryono - 222103013.png"
            alt="Foto profil Bento Haryono"
            loading="lazy"
            className="h-full w-full object-contain object-center"
          />
        </div>

        {/* Profile identity */}
        <div className="border-t border-gray-100 px-4 py-5 text-center dark:border-gray-700 sm:px-5">
          <h3 className="text-xl font-bold text-gray-900 dark:text-white sm:text-2xl">
            Bento Haryono, S.Kom.
          </h3>

          <p className="mt-2 text-sm leading-6 text-gray-500 dark:text-gray-400">
            Sistem Informasi
            <span className="block">
              Universitas Jenderal Achmad Yani Yogyakarta
            </span>
          </p>
        </div>
      </div>

      {/* Academic information */}
      <div className="mt-4 grid grid-cols-2 gap-3">
        <motion.div
          whileHover={reduceMotion ? undefined : { y: -3 }}
          className="rounded-xl border border-gray-200 bg-white p-4 dark:border-gray-700 dark:bg-gray-800 sm:p-5"
        >
          <div className="mb-3 flex h-9 w-9 items-center justify-center rounded-lg bg-gray-100 text-blue-900 dark:bg-gray-700 dark:text-blue-400">
            <FaAward className="text-lg" />
          </div>

          <p className="text-2xl font-bold text-gray-900 dark:text-white sm:text-3xl">
            3.57
          </p>

          <p className="mt-1 text-xs text-gray-500 dark:text-gray-400 sm:text-sm">
            IPK / 4.00
          </p>
        </motion.div>

        <motion.div
          whileHover={reduceMotion ? undefined : { y: -3 }}
          className="rounded-xl border border-gray-200 bg-white p-4 dark:border-gray-700 dark:bg-gray-800 sm:p-5"
        >
          <div className="mb-3 flex h-9 w-9 items-center justify-center rounded-lg bg-gray-100 text-blue-900 dark:bg-gray-700 dark:text-blue-400">
            <FaCalendarAlt className="text-lg" />
          </div>

          <p className="text-2xl font-bold text-gray-900 dark:text-white sm:text-3xl">
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
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
      {descriptions.map((item, index) => {
        const Icon = item.icon;

        return (
          <motion.article
            key={item.title}
            initial={reduceMotion ? false : { opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              duration: reduceMotion ? 0 : 0.4,
              delay: reduceMotion ? 0 : index * 0.08,
            }}
            viewport={{ once: true, amount: 0.15 }}
            whileHover={reduceMotion ? undefined : { y: -3 }}
            className="rounded-xl border border-gray-200 bg-white p-5 transition-colors duration-300 hover:border-blue-900/40 dark:border-gray-700 dark:bg-gray-800 dark:hover:border-blue-400/50 sm:p-6"
          >
            <div className="mb-4 flex items-center gap-3">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-gray-100 text-blue-900 dark:bg-gray-700 dark:text-blue-400">
                <Icon className="text-lg" />
              </div>

              <h3 className="text-base font-bold text-gray-900 dark:text-white sm:text-lg">
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
      initial={reduceMotion ? false : { opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: reduceMotion ? 0 : 0.45 }}
      viewport={{ once: true, amount: 0.1 }}
      className="rounded-xl border border-gray-200 bg-white p-5 dark:border-gray-700 dark:bg-gray-800 sm:p-6 lg:p-7"
    >
      <div className="mb-5 border-b border-gray-100 pb-4 dark:border-gray-700">
        <h3 className="text-lg font-bold text-gray-900 dark:text-white sm:text-xl">
          Personal Information
        </h3>

        <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
          Informasi profil dan kontak.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
        {personalInfo.map((item, index) => {
          const Icon = item.icon;
          const isExternal = item.href?.startsWith("https://");

          const content = (
            <>
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-gray-100 text-gray-600 transition-colors group-hover:bg-blue-100 group-hover:text-blue-900 dark:bg-gray-700 dark:text-gray-300 dark:group-hover:bg-blue-400/10 dark:group-hover:text-blue-300">
                <Icon className="text-base" />
              </div>

              <span className="min-w-0 flex-1 break-words text-sm leading-6 text-gray-700 transition-colors group-hover:text-blue-900 dark:text-gray-300 dark:group-hover:text-blue-300">
                {item.label}
              </span>

              {isExternal && (
                <FaExternalLinkAlt className="h-3 w-3 shrink-0 text-gray-400 opacity-0 transition-opacity group-hover:opacity-100" />
              )}
            </>
          );

          const classes =
            "group flex min-w-0 items-center gap-3 rounded-lg border border-gray-100 bg-gray-50 p-3 transition-colors duration-200 hover:border-blue-900/30 hover:bg-blue-50/50 dark:border-gray-700 dark:bg-gray-700/30 dark:hover:border-blue-400/40 dark:hover:bg-blue-400/5";

          return (
            <motion.div
              key={item.label}
              initial={reduceMotion ? false : { opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: reduceMotion ? 0 : 0.3,
                delay: reduceMotion ? 0 : index * 0.035,
              }}
              viewport={{ once: true }}
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
  const reduceMotion = Boolean(useReducedMotion());

  return (
    <section
      id="about"
      className="w-full bg-gray-50 py-20 transition-colors duration-300 dark:bg-gray-900 sm:py-24 lg:py-28"
    >
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        <SectionHeading reduceMotion={reduceMotion} />

        <div className="grid grid-cols-1 items-start gap-8 lg:grid-cols-5 lg:gap-10 xl:gap-12">
          {/* Profile */}
          <div className="min-w-0 lg:col-span-2">
            <ProfileCard reduceMotion={reduceMotion} />
          </div>

          {/* Description and contact */}
          <div className="flex min-w-0 flex-col gap-5 lg:col-span-3">
            <ProfileDescription reduceMotion={reduceMotion} />
            <PersonalInformation reduceMotion={reduceMotion} />
          </div>
        </div>
      </div>
    </section>
  );
}
