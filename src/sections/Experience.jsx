"use client";

import { FaBriefcase } from "react-icons/fa";
import { motion } from "framer-motion";

const experiences = [
  {
    title: "Anggota & Koordinator Divisi Kominfo",
    company: "HMSI UNJAYA",
    date: "2023 - 2024",
    description:
      "Mengelola konten visual dan media sosial organisasi. Menyebarkan informasi internal dan eksternal, membuat desain publikasi dan dokumentasi kegiatan. Sebagai Koordinator Divisi PDD untuk kegiatan Webinar & Lomba UI/UX, memimpin tim publikasi, desain, dan dokumentasi serta membuat materi visual seperti poster dan sertifikat.",
    stack: [
      "Desain",
      "Konten Media Sosial",
      "Publikasi",
      "Koordinasi Tim",
      "Poster",
      "Sertifikat",
    ],
  },
  {
    title: "Peserta Pelatihan Prakerja",
    company: "Cakap",
    date: "September 2024",
    description:
      "Mengikuti pelatihan 'Mengembangkan Website untuk Calon Web Developer'. Mempelajari dasar HTML, CSS, dan JavaScript.",
    stack: ["HTML", "CSS", "JavaScript"],
  },
  {
    title: "Tlogo Putri – Sistem Wisata Pengguna",
    company: "Project – 2024",
    date: "2024",
    description:
      "Homepage sistem informasi wisata untuk pengunjung, menampilkan detail wisata, foto, dan informasi rute secara interaktif. Berperan sebagai frontend developer, fokus pada penyusunan konten halaman dan interaktivitas dengan JavaScript.",
    stack: ["React" , "Tailwind CSS"],
  },
  {
    title: "MediSync",
    company: "Project – 2024",
    date: "2024",
    description:
      "Aplikasi mobile apotek yang menyediakan fitur checkout produk obat, konsultasi dengan dokter, serta sistem login khusus untuk pengguna dan admin. Bertugas sebagai fullstack developer dengan membangun UI menggunakan Flutter, backend API menggunakan Flask, serta mengelola database dengan MySQL.",
    stack: ["Flutter", "Flask", "MySQL"],
  },
];

export default function Experience() {
  return (
    <section
      id="experience"
      className="py-20 bg-gray-50 dark:bg-gray-900 relative"
    >
      <h2 className="text-4xl font-bold text-center text-gray-800 dark:text-white mb-14">
        Experience
      </h2>

      <div className="relative max-w-4xl mx-auto px-4">
        <div className="absolute left-1/2 transform -translate-x-1/2 h-full border-l-2 border-violet-400"></div>

        <div className="flex flex-col space-y-16 relative z-10">
          {experiences.map((exp, index) => {
            const isLeft = index % 2 === 0;

            return (
              <motion.div
                key={index}
                className={`relative md:w-1/2 px-4 ${
                  isLeft ? "md:self-start" : "md:self-end"
                }`}
                initial={{ opacity: 0, x: isLeft ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.4 }}
                viewport={{ once: true, amount: 0.5 }}
              >
                <span className="absolute top-4 left-1/2 transform -translate-x-1/2 w-5 h-5 bg-violet-600 border-4 border-white dark:border-gray-900 rounded-full z-20" />

                <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md border border-gray-200 dark:border-gray-700">
                  <h3 className="text-xl font-semibold text-violet-600 dark:text-violet-300">
                    {exp.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 text-sm mb-1">
                    {exp.company}
                  </p>
                  <p className="text-gray-500 dark:text-gray-400 text-sm mb-4 italic">
                    {exp.date}
                  </p>
                  <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                    {exp.description}
                  </p>

                  <p className="mt-4 font-semibold text-violet-600 dark:text-violet-300">
                    Tech Stack:
                  </p>
                  <ul className="flex flex-wrap gap-2 mt-2">
                    {exp.stack.map((tech, i) => (
                      <li
                        key={i}
                        className="bg-violet-200 dark:bg-violet-700 text-violet-800 dark:text-violet-200 px-3 py-1 rounded-full text-sm"
                      >
                        {tech}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
