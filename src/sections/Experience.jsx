"use client";

import { motion, useReducedMotion } from "framer-motion";

const experiences = [
  {
    title: "LetterA – Sistem Administrasi Surat Menyurat",
    company: "Proyek Skripsi",
    date: "2026",
    category: "Final Project",
    description:
      "Mengembangkan sistem administrasi surat menyurat berbasis web untuk mendukung digitalisasi proses pengajuan dan pengelolaan surat. Sistem dibangun menggunakan Laravel dan MySQL dengan pendekatan Rapid Application Development (RAD).",
    highlights: [
      {
        name: "Pengelolaan Surat",
        detail:
          "Mengembangkan proses pengajuan, verifikasi, persetujuan, dan pemantauan status surat berdasarkan hak akses penduduk, pegawai, admin, dan pimpinan.",
      },
      {
        name: "Integrasi Sistem",
        detail:
          "Menghubungkan antarmuka Blade dengan backend Laravel dan database MySQL untuk pengelolaan data serta pelacakan status permohonan.",
      },
    ],
    stack: ["Laravel", "PHP", "Blade", "Tailwind CSS", "MySQL", "RAD"],
  },
  {
    title: "Frontend Developer Intern",
    company: "PT Semesta Ruang Inovasi (Sevenpion)",
    date: "Juli 2025 – Agustus 2025",
    category: "Work Experience",
    description:
      "Mengembangkan antarmuka website berdasarkan kebutuhan proyek dan arahan mentor. Berkontribusi dalam pengerjaan proyek Neosia dan Pinasthika dengan memperhatikan struktur halaman, konsistensi desain, serta responsivitas tampilan.",
    highlights: [
      {
        name: "Proyek Neosia",
        detail:
          "Mengimplementasikan desain website menggunakan PHP Blade, HTML, CSS, dan Tailwind CSS. Berkontribusi dalam pengembangan homepage serta mengerjakan halaman Checkout, Signup, dan Login.",
      },
      {
        name: "Proyek Pinasthika",
        detail:
          "Melakukan revamp website menggunakan HTML, CSS, dan Bootstrap. Mengembangkan halaman Competitions, Winners, dan Winner Detail, melakukan input data, serta menyusun panduan penggunaan sistem.",
      },
    ],
    stack: [
      "PHP Blade",
      "HTML",
      "CSS",
      "Tailwind CSS",
      "Bootstrap",
      "Responsive Design",
    ],
  },
  {
    title: "SmartJob Finder – Website Pencarian Lowongan Kerja",
    company: "Proyek Pengembangan Web",
    date: "2025",
    category: "Web Development",
    description:
      "Mengembangkan website pencarian lowongan kerja dengan fitur pencarian interaktif dan rekomendasi pekerjaan berdasarkan kemiripan kata kunci. Proyek ini menggabungkan pengembangan frontend, pengolahan data, dan implementasi algoritma pencarian.",
    highlights: [
      {
        name: "Frontend & Voice Search",
        detail:
          "Membangun antarmuka pencarian menggunakan React.js dengan fitur Voice Search melalui Web Speech API, rekomendasi kata kunci, dan saran pencarian dinamis.",
      },
      {
        name: "Data Processing & Recommendation",
        detail:
          "Mengumpulkan lebih dari 3.200 data lowongan kerja menggunakan Python Requests dan BeautifulSoup. Mengolah data dengan Pandas, TF-IDF, dan Cosine Similarity melalui backend Flask dan REST API.",
      },
    ],
    stack: [
      "React.js",
      "JavaScript",
      "Python",
      "Flask",
      "Pandas",
      "Scikit-Learn",
      "REST API",
    ],
  },
  {
    title: "Tlogo Putri – Website Informasi Wisata",
    company: "Proyek Pengembangan Web",
    date: "2025",
    category: "Web Development",
    description:
      "Merancang dan mengembangkan website informasi wisata Tlogo Putri. Berfokus pada pembuatan antarmuka responsif untuk menampilkan informasi destinasi, fasilitas, dan petunjuk lokasi bagi pengunjung.",
    highlights: [
      {
        name: "Frontend Development",
        detail:
          "Merancang UI menggunakan Figma dan mengimplementasikan desain menjadi halaman website menggunakan React.js dan Tailwind CSS.",
      },
      {
        name: "Admin Dashboard",
        detail:
          "Mengembangkan antarmuka dashboard admin dan mengintegrasikannya dengan backend PHP untuk mendukung pengelolaan informasi serta konten wisata.",
      },
    ],
    stack: ["React.js", "JavaScript", "Tailwind CSS", "Figma", "PHP"],
  },
];

function ExperienceCard({ exp, index, reduceMotion }) {
  const isLeft = index % 2 === 0;

  return (
    <motion.article
      initial={reduceMotion ? false : { opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{
        duration: reduceMotion ? 0 : 0.4,
        ease: "easeOut",
      }}
      viewport={{ once: true, amount: 0.1 }}
      className={`relative min-w-0 w-full md:w-[calc(50%-2rem)] ${
        isLeft ? "md:mr-auto" : "md:ml-auto"
      }`}
    >
      {/* Timeline marker */}
      <div className="absolute left-[-2.05rem] top-6 z-20 h-3 w-3 rounded-full border-2 border-white bg-blue-950 dark:border-gray-900 dark:bg-blue-400 md:left-1/2 md:top-8 md:h-3.5 md:w-3.5 md:-translate-x-1/2" />

      {/* Card */}
      <div className="group overflow-hidden rounded-xl border border-gray-200 bg-white transition-all duration-300 hover:-translate-y-1 hover:border-blue-900/40 hover:shadow-lg dark:border-gray-700 dark:bg-gray-800 dark:hover:border-blue-400/40">
        <div className="p-5 sm:p-6 lg:p-7">
          {/* Category and date */}
          <div className="mb-4 flex flex-wrap items-center justify-between gap-2">
            <span className="rounded-md bg-blue-50 px-3 py-1.5 text-xs font-semibold text-blue-950 dark:bg-blue-400/10 dark:text-blue-300">
              {exp.category}
            </span>

            <span className="text-xs text-gray-500 dark:text-gray-400 sm:text-sm">
              {exp.date}
            </span>
          </div>

          {/* Title */}
          <h3 className="text-lg font-bold leading-snug text-gray-900 transition-colors group-hover:text-blue-950 dark:text-white dark:group-hover:text-blue-300 sm:text-xl">
            {exp.title}
          </h3>

          <p className="mt-1.5 text-sm font-medium text-blue-900 dark:text-blue-300">
            {exp.company}
          </p>

          <div className="my-4 h-px bg-gray-100 dark:bg-gray-700" />

          {/* Description */}
          <p className="text-sm leading-7 text-gray-600 dark:text-gray-300">
            {exp.description}
          </p>

          {/* Highlights */}
          <div className="mt-5 space-y-4">
            {exp.highlights.map((item) => (
              <div
                key={item.name}
                className="border-l-2 border-blue-900/30 pl-3 dark:border-blue-400/40"
              >
                <h4 className="text-sm font-semibold text-gray-800 dark:text-gray-100">
                  {item.name}
                </h4>

                <p className="mt-1 text-sm leading-6 text-gray-600 dark:text-gray-400">
                  {item.detail}
                </p>
              </div>
            ))}
          </div>

          {/* Technologies */}
          <div className="mt-5">
            <p className="mb-3 text-xs font-semibold uppercase tracking-wider text-gray-500 dark:text-gray-400">
              Technologies & Skills
            </p>

            <ul className="flex flex-wrap gap-2">
              {exp.stack.map((tech) => (
                <li
                  key={tech}
                  className="rounded-md border border-gray-200 bg-gray-50 px-2.5 py-1.5 text-xs font-medium text-gray-700 dark:border-gray-600 dark:bg-gray-700/50 dark:text-gray-300"
                >
                  {tech}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </motion.article>
  );
}

export default function Experience() {
  const reduceMotion = Boolean(useReducedMotion());

  return (
    <section
      id="experience"
      className="w-full bg-gray-50 py-20 text-gray-900 transition-colors duration-300 dark:bg-gray-900 dark:text-gray-100 sm:py-24 lg:py-28"
    >
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        {/* Section heading */}
        <motion.div
          initial={reduceMotion ? false : { opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: reduceMotion ? 0 : 0.4 }}
          viewport={{ once: true }}
          className="mb-14 max-w-2xl sm:mb-16"
        >
         

          <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl md:text-5xl">
            Experience{" "}
            <span className="text-blue-900 dark:text-blue-400">& Projects</span>
          </h2>

          <p className="mt-5 max-w-xl text-sm leading-7 text-gray-600 dark:text-gray-400 sm:text-base">
            Pengalaman kerja dan proyek pengembangan yang pernah saya kerjakan
            di bidang web development, mulai dari implementasi antarmuka hingga
            integrasi sistem.
          </p>

          <div className="mt-6 h-1 w-14 rounded-full bg-blue-950 dark:bg-blue-400" />
        </motion.div>

        {/* Timeline */}
        <div className="relative mx-auto max-w-5xl">
          <div
            aria-hidden="true"
            className="absolute bottom-4 left-0 top-2 w-px -translate-x-1/2 bg-gray-300 dark:bg-gray-700 md:left-1/2"
          />

          <div className="flex flex-col gap-8 pl-8 sm:gap-10 md:gap-12 md:pl-0">
            {experiences.map((exp, index) => (
              <ExperienceCard
                key={`${exp.title}-${exp.date}`}
                exp={exp}
                index={index}
                reduceMotion={reduceMotion}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
