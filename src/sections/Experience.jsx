"use client";

import { motion, useReducedMotion } from "framer-motion";
import {
  FaBriefcase,
  FaCalendarAlt,
  FaGraduationCap,
  FaLaptopCode,
  FaUsers,
} from "react-icons/fa";

const experiences = [
  {
    title: "Anggota & Koordinator Divisi Kominfo",
    company: "HMSI UNJAYA",
    date: "2023 – 2024",
    category: "Organisasi",
    icon: FaUsers,
    description:
      "Mengelola konten visual dan media sosial organisasi, menyebarkan informasi internal maupun eksternal, serta membuat desain publikasi dan dokumentasi kegiatan. Sebagai Koordinator Divisi PDD untuk kegiatan Webinar & Lomba UI/UX, mengoordinasikan tim publikasi, desain, dan dokumentasi serta menyiapkan materi visual seperti poster dan sertifikat.",
    stack: [
      "Desain Grafis",
      "Media Sosial",
      "Publikasi",
      "Koordinasi Tim",
      "Poster",
      "Sertifikat",
    ],
  },
  {
    title: "Peserta Pelatihan Web Developer",
    company: "Cakap — Program Kartu Prakerja",
    date: "September 2024",
    category: "Pelatihan",
    icon: FaGraduationCap,
    description:
      "Mengikuti pelatihan “Mengembangkan Website untuk Calon Web Developer” untuk mempelajari dasar pengembangan web, termasuk penyusunan struktur halaman, pengaturan tampilan, dan penambahan interaktivitas menggunakan HTML, CSS, dan JavaScript.",
    stack: ["HTML", "CSS", "JavaScript"],
  },
  {
    title: "Tlogo Putri – Sistem Wisata Pengguna",
    company: "Proyek Pengembangan Web",
    date: "2024",
    category: "Proyek",
    icon: FaLaptopCode,
    description:
      "Mengembangkan antarmuka website informasi wisata untuk pengunjung, mencakup halaman utama, informasi destinasi, foto wisata, dan informasi rute. Berfokus pada pengembangan frontend, penyusunan konten halaman, desain responsif, dan interaktivitas antarmuka.",
    stack: ["React.js", "Tailwind CSS", "JavaScript"],
  },
  {
    title: "MediSync",
    company: "Proyek Pengembangan Aplikasi",
    date: "2024",
    category: "Proyek",
    icon: FaLaptopCode,
    description:
      "Mengembangkan aplikasi mobile apotek dengan fitur checkout produk obat, konsultasi dokter, dan autentikasi pengguna serta admin. Berperan sebagai full-stack developer dengan membangun antarmuka menggunakan Flutter, mengembangkan backend API menggunakan Flask, dan mengelola data menggunakan MySQL.",
    stack: ["Flutter", "Python Flask", "MySQL", "REST API"],
  },
];

function ExperienceCard({ exp, index, reduceMotion }) {
  const isLeft = index % 2 === 0;
  const Icon = exp.icon;

  return (
    <motion.article
      initial={
        reduceMotion
          ? false
          : {
              opacity: 0,
              x: isLeft ? -35 : 35,
              y: 20,
            }
      }
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      transition={{
        duration: reduceMotion ? 0 : 0.6,
        delay: reduceMotion ? 0 : index * 0.08,
        ease: "easeOut",
      }}
      viewport={{ once: true, amount: 0.15 }}
      className={`relative min-w-0 w-full md:w-[calc(50%-2rem)] ${
        isLeft ? "md:mr-auto" : "md:ml-auto"
      }`}
    >
      {/* Titik timeline */}
      <span className="absolute z-20 left-[-2.05rem] top-7 flex h-9 w-9 items-center justify-center rounded-full border-4 border-gray-50 bg-violet-600 text-white shadow-md dark:border-gray-900 md:left-auto md:top-8 md:h-10 md:w-10 md:-translate-x-1/2 md:left-1/2">
        <Icon className="h-3.5 w-3.5 md:h-4 md:w-4" />
      </span>

      {/* Kartu pengalaman */}
      <motion.div
        whileHover={reduceMotion ? undefined : { y: -5 }}
        transition={{ duration: 0.25 }}
        className="group overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm transition-shadow duration-300 hover:border-violet-300 hover:shadow-xl hover:shadow-violet-500/10 dark:border-gray-700 dark:bg-gray-800 dark:hover:border-violet-500/60"
      >
        {/* Aksen atas */}
        <div className="h-1 w-full bg-gradient-to-r from-violet-500 via-violet-600 to-indigo-500" />

        <div className="p-5 sm:p-6 lg:p-7">
          {/* Kategori dan tanggal */}
          <div className="mb-4 flex flex-wrap items-center justify-between gap-2">
            <span className="inline-flex items-center gap-2 rounded-full bg-violet-100 px-3 py-1.5 text-xs font-semibold text-violet-700 dark:bg-violet-500/15 dark:text-violet-300">
              <Icon className="h-3.5 w-3.5" />
              {exp.category}
            </span>

            <span className="inline-flex items-center gap-1.5 text-xs font-medium text-gray-500 dark:text-gray-400 sm:text-sm">
              <FaCalendarAlt className="shrink-0" />
              {exp.date}
            </span>
          </div>

          {/* Judul */}
          <h3 className="text-lg font-bold leading-snug text-gray-900 transition-colors duration-300 group-hover:text-violet-700 dark:text-white dark:group-hover:text-violet-300 sm:text-xl">
            {exp.title}
          </h3>

          <p className="mt-1.5 text-sm font-medium text-violet-700 dark:text-violet-300">
            {exp.company}
          </p>

          {/* Garis pemisah */}
          <div className="my-4 h-px bg-gray-100 dark:bg-gray-700" />

          {/* Deskripsi */}
          <p className="text-sm leading-7 text-gray-600 dark:text-gray-300 sm:text-base">
            {exp.description}
          </p>

          {/* Teknologi dan keterampilan */}
          <div className="mt-5">
            <p className="mb-3 flex items-center gap-2 text-sm font-semibold text-gray-800 dark:text-gray-200">
              <FaBriefcase className="text-violet-600 dark:text-violet-400" />
              Keterampilan
            </p>

            <ul className="flex flex-wrap gap-2">
              {exp.stack.map((tech) => (
                <li
                  key={tech}
                  className="rounded-lg border border-gray-200 bg-gray-50 px-2.5 py-1.5 text-xs font-medium text-gray-700 transition-colors duration-200 hover:border-violet-300 hover:bg-violet-50 hover:text-violet-700 dark:border-gray-600 dark:bg-gray-700/60 dark:text-gray-200 dark:hover:border-violet-500 dark:hover:bg-violet-500/10 dark:hover:text-violet-300 sm:text-sm"
                >
                  {tech}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </motion.div>
    </motion.article>
  );
}

export default function Experience() {
  const reduceMotion = useReducedMotion();

  return (
    <section
      id="experience"
      className="relative w-full overflow-hidden bg-gray-50 py-20 text-gray-900 dark:bg-gray-900 dark:text-gray-100 sm:py-24 lg:py-28"
    >
      {/* Dekorasi latar transparan; warna dasar tetap sama */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-32 top-24 h-64 w-64 rounded-full bg-violet-400/10 blur-3xl"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-32 bottom-20 h-72 w-72 rounded-full bg-indigo-400/10 blur-3xl"
      />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        {/* Header */}
        <motion.div
          initial={reduceMotion ? false : { opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: reduceMotion ? 0 : 0.6 }}
          viewport={{ once: true }}
          className="mx-auto mb-16 max-w-3xl text-center sm:mb-20"
        >
          <span className="mb-4 inline-flex items-center gap-2 rounded-full border border-violet-200 bg-violet-100/70 px-4 py-2 text-sm font-semibold text-violet-700 dark:border-violet-400/20 dark:bg-violet-400/10 dark:text-violet-300">
            <FaBriefcase />
            Perjalanan & Pengalaman
          </span>

          <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 dark:text-white sm:text-4xl md:text-5xl">
            Experience{" "}
            <span className="text-violet-700 dark:text-violet-300">
              & Activities
            </span>
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-gray-600 dark:text-gray-400 sm:text-base">
            Pengalaman organisasi, pelatihan, dan pengembangan proyek yang
            membentuk keterampilan saya dalam teknologi, kolaborasi, dan
            pengembangan produk digital.
          </p>

          <motion.div
            initial={reduceMotion ? false : { width: 0 }}
            whileInView={{ width: 80 }}
            transition={{ duration: reduceMotion ? 0 : 0.7, delay: 0.2 }}
            viewport={{ once: true }}
            className="mx-auto mt-7 h-1 rounded-full bg-violet-600 dark:bg-violet-400"
          />
        </motion.div>

        {/* Timeline */}
        <div className="relative mx-auto max-w-5xl">
          {/* Garis timeline: kiri di mobile, tengah di desktop */}
          <div
            aria-hidden="true"
            className="absolute bottom-4 left-0 top-2 w-0.5 -translate-x-1/2 bg-violet-200 dark:bg-violet-800/80 md:left-1/2"
          />

          <div className="flex flex-col gap-10 pl-8 sm:gap-12 md:gap-16 md:pl-0">
            {experiences.map((exp, index) => (
              <ExperienceCard
                key={`${exp.title}-${exp.date}`}
                exp={exp}
                index={index}
                reduceMotion={Boolean(reduceMotion)}
              />
            ))}
          </div>
        </div>

        {/* Penutup */}
        <motion.p
          initial={reduceMotion ? false : { opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: reduceMotion ? 0 : 0.5 }}
          viewport={{ once: true }}
          className="mx-auto mt-14 max-w-2xl text-center text-sm leading-7 text-gray-500 dark:text-gray-400 sm:mt-16"
        >
  
        </motion.p>
      </div>
    </section>
  );
}
