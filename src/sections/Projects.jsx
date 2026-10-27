"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import {
  FaGithub,
  FaExternalLinkAlt,
  FaChevronLeft,
  FaChevronRight,
  FaTimes,
  FaFolderOpen,
  FaRegCalendarAlt,
} from "react-icons/fa";

const projects = [
  {
    title: "LetterA – Sistem Administrasi Surat Menyurat",
    date: "2026",
    category: "Web Development",
    featured: true,
    description:
      "Sistem administrasi surat menyurat berbasis web untuk mendukung digitalisasi pengajuan dan pengelolaan surat. Dikembangkan menggunakan Laravel, PHP, Blade, dan Tailwind CSS. Sistem mendukung alur pengajuan, verifikasi, persetujuan, serta pengelolaan hak akses penduduk, pegawai, admin, dan pimpinan. Proyek skripsi menggunakan metode Rapid Application Development (RAD).",
    image: "/Images/L1.png",
    images: ["/Images/L1.png", "/Images/L2.png", "/Images/L3.png"],
    technologies: ["Laravel", "PHP", "Blade", "Tailwind CSS"],
    link: "https://github.com/Hariyono20/Lettera.git",
    figma:
      "https://www.figma.com/design/VRYz0jRWJd2xXnvBdIwnEV/Kelurahan?node-id=0-1&p=f&t=ZuiDVCidvglncZKu-0",
  },
  {
    title: "SmartJob Finder",
    date: "2025",
    category: "Web Development",
    description:
      "Website pencarian lowongan kerja berbasis TF-IDF. Dibangun menggunakan React.js, Tailwind CSS, dan Flask dengan integrasi frontend dan backend untuk pencarian berdasarkan kata kunci.",
    image: "/Images/SF.png",
    technologies: ["React.js", "Tailwind CSS", "Python Flask"],
    link: "https://github.com/Hariyono20/SmartJob-Finder",
  },
  {
    title: "MediSync",
    date: "2024",
    category: "Mobile Development",
    description:
      "Aplikasi mobile apotek dengan fitur login, checkout, konsultasi, serta pengelolaan pengguna dan admin. Dibangun menggunakan Flutter, Dart, Flask, dan MongoDB.",
    image: "/Images/MEDISYNC.png",
    technologies: ["Flutter", "Dart", "Flask", "MongoDB"],
    link: "https://github.com/Hariyono20/Apotek",
  },
  {
    title: "CareConnect",
    date: "2024",
    category: "Web Development",
    description:
      "Website layanan pemesanan ambulans berbasis lokasi. Mengembangkan antarmuka pengguna dan integrasi dengan backend Flask serta database MongoDB.",
    image: "/Images/CC.png",
    technologies: ["Flask", "MongoDB", "Web Development"],
    link: "https://github.com/Hariyono20/CareConnect",
  },
  {
    title: "Tlogo Putri – Pengguna",
    date: "2025",
    category: "Web Development",
    description:
      "Website informasi wisata untuk menampilkan informasi destinasi dan petunjuk lokasi. Antarmuka pengguna dikembangkan menggunakan React.js.",
    image: "/Images/TPP.png",
    technologies: ["React.js", "Tailwind CSS", "JavaScript"],
    link: "https://github.com/Hariyono20/tlogo-putri-pengguna",
  },
  {
    title: "Tlogo Putri – Admin Dashboard",
    date: "2025",
    category: "Web Development",
    description:
      "Dashboard admin untuk mendukung pengelolaan informasi dan konten wisata dengan antarmuka responsif dan terstruktur menggunakan React.js dan Tailwind CSS.",
    image: "/Images/TPF.png",
    technologies: ["React.js", "Tailwind CSS"],
    link: "https://github.com/Hariyono20/tlogo-putri-fe",
  },
  {
    title: "MotorClub Profile Website",
    date: "2025",
    category: "Web Development",
    description:
      "Website company profile komunitas motor untuk menyajikan informasi komunitas. Dikembangkan menggunakan React.js, Tailwind CSS, Python, dan MySQL.",
    image: "/Images/CP.png",
    technologies: ["React.js", "Tailwind CSS", "Python", "MySQL"],
    link: "https://github.com/Hariyono20/motorclub-profile",
  },
];

function ProjectImage({ src, alt, className = "" }) {
  return <img src={src} alt={alt} loading="lazy" className={className} />;
}

export default function Projects() {
  const [selectedIndex, setSelectedIndex] = useState(null);
  const [imageIndex, setImageIndex] = useState(0);
  const closeButtonRef = useRef(null);
  const reduceMotion = useReducedMotion();

  const selectedProject =
    selectedIndex !== null ? projects[selectedIndex] : null;

  const selectedImages = selectedProject
    ? selectedProject.images || [selectedProject.image]
    : [];

  const currentImage = selectedImages[imageIndex] || "";

  const openProject = (index) => {
    setSelectedIndex(index);
    setImageIndex(0);
  };

  const closeModal = () => {
    setSelectedIndex(null);
    setImageIndex(0);
  };

  const handlePrevProject = () => {
    setSelectedIndex((prev) => (prev === 0 ? projects.length - 1 : prev - 1));
    setImageIndex(0);
  };

  const handleNextProject = () => {
    setSelectedIndex((prev) => (prev === projects.length - 1 ? 0 : prev + 1));
    setImageIndex(0);
  };

  const handlePrevImage = () => {
    setImageIndex((prev) =>
      prev === 0 ? selectedImages.length - 1 : prev - 1,
    );
  };

  const handleNextImage = () => {
    setImageIndex((prev) =>
      prev === selectedImages.length - 1 ? 0 : prev + 1,
    );
  };

  useEffect(() => {
    if (!selectedProject) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    closeButtonRef.current?.focus();

    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        closeModal();
      } else if (event.key === "ArrowLeft") {
        setImageIndex((prev) =>
          prev === 0 ? selectedImages.length - 1 : prev - 1,
        );
      } else if (event.key === "ArrowRight") {
        setImageIndex((prev) =>
          prev === selectedImages.length - 1 ? 0 : prev + 1,
        );
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [selectedIndex, selectedImages.length]);

  return (
    <section
      id="projects"
      className="relative overflow-hidden bg-gray-50 py-20 text-gray-900 dark:bg-gray-900 dark:text-white sm:py-24"
    >
      {/* Dekorasi latar */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-32 top-20 h-64 w-64 rounded-full bg-blue-400/10 blur-3xl"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-32 bottom-10 h-72 w-72 rounded-full bg-cyan-400/10 blur-3xl"
      />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={reduceMotion ? false : { opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: reduceMotion ? 0 : 0.5 }}
          className="mb-12 text-center sm:mb-16"
        >
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-blue-200 bg-blue-50 px-4 py-2 text-sm font-medium text-blue-700 dark:border-blue-400/20 dark:bg-blue-400/10 dark:text-blue-300">
            <FaFolderOpen aria-hidden="true" />
            <span>Portfolio & Development</span>
          </div>

          <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl lg:text-5xl">
            My Projects
          </h2>

          <div className="mx-auto mt-4 h-1 w-20 rounded-full bg-blue-600" />

          <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-gray-600 dark:text-gray-400 sm:text-base">
            Beberapa proyek pengembangan web dan aplikasi yang saya kerjakan
            menggunakan berbagai teknologi untuk membangun solusi digital.
          </p>
        </motion.div>

        {/* Ringkasan */}
        <div className="mb-8 flex items-center justify-between gap-4">
          <p className="text-sm text-gray-600 dark:text-gray-400">
            Menampilkan{" "}
            <span className="font-semibold text-gray-900 dark:text-white">
              {projects.length} proyek
            </span>
          </p>
          <span className="hidden items-center gap-2 text-xs text-gray-500 dark:text-gray-400 sm:inline-flex">
            <span className="h-2 w-2 rounded-full bg-blue-500" />
            Web & Mobile Development
          </span>
        </div>

        {/* Grid proyek */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 sm:gap-7 lg:grid-cols-3 lg:gap-8">
          {projects.map((project, index) => (
            <motion.article
              key={project.title}
              initial={reduceMotion ? false : { opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.12 }}
              transition={{
                duration: reduceMotion ? 0 : 0.45,
                delay: reduceMotion ? 0 : (index % 3) * 0.08,
              }}
              className="group min-w-0"
            >
              <button
                type="button"
                onClick={() => openProject(index)}
                aria-label={`Lihat detail ${project.title}`}
                className="flex h-full w-full flex-col overflow-hidden rounded-2xl border border-gray-200/80 bg-white text-left shadow-sm transition duration-300 hover:-translate-y-1 hover:border-blue-300 hover:shadow-xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 dark:border-gray-700 dark:bg-gray-800 dark:hover:border-blue-400/60"
              >
                {/* Thumbnail */}
                <div className="relative aspect-[16/10] w-full overflow-hidden bg-gray-100 dark:bg-gray-700">
                  <ProjectImage
                    src={project.image}
                    alt={`Pratinjau ${project.title}`}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-gray-950/55 via-transparent to-transparent opacity-70 transition-opacity duration-300 group-hover:opacity-100" />

                  <span className="absolute left-4 top-4 inline-flex items-center gap-1.5 rounded-full border border-white/50 bg-white/90 px-3 py-1.5 text-xs font-semibold text-gray-800 shadow-sm backdrop-blur dark:border-gray-600 dark:bg-gray-900/85 dark:text-gray-100">
                    <FaRegCalendarAlt aria-hidden="true" />
                    {project.date}
                  </span>

                  {project.featured && (
                    <span className="absolute right-4 top-4 rounded-full bg-blue-600 px-3 py-1.5 text-xs font-semibold text-white shadow-sm">
                      Proyek Skripsi
                    </span>
                  )}

                  <div className="absolute bottom-4 left-4 right-4 translate-y-2 text-white opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                    <span className="inline-flex items-center gap-2 text-sm font-semibold">
                      Lihat detail proyek
                      <FaExternalLinkAlt aria-hidden="true" />
                    </span>
                  </div>
                </div>

                {/* Informasi */}
                <div className="flex flex-1 flex-col p-5 sm:p-6">
                  <span className="mb-3 w-fit rounded-md bg-blue-50 px-2.5 py-1 text-xs font-medium text-blue-700 dark:bg-blue-400/10 dark:text-blue-300">
                    {project.category}
                  </span>

                  <h3 className="mb-3 text-lg font-bold leading-snug text-gray-900 transition-colors group-hover:text-blue-700 dark:text-white dark:group-hover:text-blue-300 sm:text-xl">
                    {project.title}
                  </h3>

                  <p className="mb-5 line-clamp-3 text-sm leading-6 text-gray-600 dark:text-gray-400">
                    {project.description}
                  </p>

                  {/* Teknologi */}
                  <div className="mt-auto flex flex-wrap gap-2">
                    {project.technologies.slice(0, 3).map((technology) => (
                      <span
                        key={technology}
                        className="rounded-md border border-gray-200 bg-gray-50 px-2.5 py-1 text-xs text-gray-600 dark:border-gray-700 dark:bg-gray-900/60 dark:text-gray-300"
                      >
                        {technology}
                      </span>
                    ))}

                    {project.technologies.length > 3 && (
                      <span className="rounded-md border border-gray-200 bg-gray-50 px-2.5 py-1 text-xs text-gray-500 dark:border-gray-700 dark:bg-gray-900/60 dark:text-gray-400">
                        +{project.technologies.length - 3}
                      </span>
                    )}
                  </div>

                  <div className="mt-5 flex items-center justify-between border-t border-gray-100 pt-4 dark:border-gray-700">
                    <span className="text-sm font-semibold text-blue-700 dark:text-blue-300">
                      Explore Project
                    </span>
                    <span className="flex h-8 w-8 items-center justify-center rounded-full bg-blue-50 text-blue-700 transition duration-300 group-hover:translate-x-1 group-hover:bg-blue-600 group-hover:text-white dark:bg-blue-400/10 dark:text-blue-300">
                      <FaChevronRight className="text-xs" aria-hidden="true" />
                    </span>
                  </div>
                </div>
              </button>
            </motion.article>
          ))}
        </div>
      </div>

      {/* Modal detail proyek */}
      {selectedProject && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center overflow-y-auto bg-black/75 p-3 backdrop-blur-sm sm:p-5"
          onMouseDown={(event) => {
            if (event.target === event.currentTarget) closeModal();
          }}
        >
          <motion.div
            role="dialog"
            aria-modal="true"
            aria-labelledby="project-modal-title"
            initial={reduceMotion ? false : { opacity: 0, y: 18, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: reduceMotion ? 0 : 0.25 }}
            className="relative my-auto flex max-h-[94vh] w-full max-w-5xl flex-col overflow-y-auto rounded-2xl border border-gray-200 bg-white shadow-2xl dark:border-gray-700 dark:bg-gray-800 md:grid md:grid-cols-2 md:overflow-hidden"
          >
            {/* Tombol tutup */}
            <button
              ref={closeButtonRef}
              type="button"
              aria-label="Tutup detail proyek"
              onClick={closeModal}
              className="absolute right-3 top-3 z-30 flex h-10 w-10 items-center justify-center rounded-full border border-gray-200 bg-white/95 text-gray-700 shadow-md transition hover:bg-red-50 hover:text-red-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 dark:border-gray-600 dark:bg-gray-900/95 dark:text-white dark:hover:bg-red-500/10"
            >
              <FaTimes aria-hidden="true" />
            </button>

            {/* Galeri */}
            <div className="relative flex min-h-[250px] items-center justify-center bg-gray-100 p-5 dark:bg-gray-900 sm:min-h-[330px] md:min-h-[520px] md:p-8">
              <ProjectImage
                key={currentImage}
                src={currentImage}
                alt={`${selectedProject.title}, gambar ${imageIndex + 1}`}
                className="max-h-[45vh] w-full rounded-lg object-contain sm:max-h-[50vh] md:max-h-[600px]"
              />

              {selectedImages.length > 1 && (
                <>
                  <button
                    type="button"
                    aria-label="Gambar sebelumnya"
                    onClick={handlePrevImage}
                    className="absolute left-3 top-1/2 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-gray-200 bg-white/95 text-gray-800 shadow-md transition hover:bg-blue-50 hover:text-blue-700 dark:border-gray-600 dark:bg-gray-800/95 dark:text-white dark:hover:bg-blue-500/20"
                  >
                    <FaChevronLeft aria-hidden="true" />
                  </button>

                  <button
                    type="button"
                    aria-label="Gambar berikutnya"
                    onClick={handleNextImage}
                    className="absolute right-3 top-1/2 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-gray-200 bg-white/95 text-gray-800 shadow-md transition hover:bg-blue-50 hover:text-blue-700 dark:border-gray-600 dark:bg-gray-800/95 dark:text-white dark:hover:bg-blue-500/20"
                  >
                    <FaChevronRight aria-hidden="true" />
                  </button>

                  <div className="absolute bottom-4 left-1/2 flex -translate-x-1/2 items-center gap-2 rounded-full bg-black/65 px-3 py-2">
                    {selectedImages.map((image, index) => (
                      <button
                        key={image}
                        type="button"
                        aria-label={`Tampilkan gambar ${index + 1}`}
                        aria-current={index === imageIndex ? "true" : undefined}
                        onClick={() => setImageIndex(index)}
                        className={`h-2.5 rounded-full transition-all ${
                          index === imageIndex
                            ? "w-6 bg-white"
                            : "w-2.5 bg-white/50 hover:bg-white/80"
                        }`}
                      />
                    ))}
                  </div>

                  <span className="absolute left-4 top-4 rounded-full bg-black/60 px-3 py-1.5 text-xs font-medium text-white">
                    {imageIndex + 1} / {selectedImages.length}
                  </span>
                </>
              )}
            </div>

            {/* Detail */}
            <div className="flex min-w-0 flex-col p-6 sm:p-8 md:overflow-y-auto md:p-9">
              <div className="mb-4 flex flex-wrap items-center gap-2">
                <span className="inline-flex items-center gap-2 rounded-full bg-blue-50 px-3 py-1.5 text-xs font-semibold text-blue-700 dark:bg-blue-400/10 dark:text-blue-300">
                  <FaRegCalendarAlt aria-hidden="true" />
                  {selectedProject.date}
                </span>

                {selectedProject.featured && (
                  <span className="rounded-full bg-blue-600 px-3 py-1.5 text-xs font-semibold text-white">
                    Proyek Skripsi
                  </span>
                )}
              </div>

              <h3
                id="project-modal-title"
                className="mb-4 pr-6 text-2xl font-bold leading-snug text-gray-900 dark:text-white sm:text-3xl"
              >
                {selectedProject.title}
              </h3>

              <p className="mb-6 text-sm leading-7 text-gray-600 dark:text-gray-300 sm:text-base">
                {selectedProject.description}
              </p>

              {/* Teknologi */}
              <div className="mb-7">
                <h4 className="mb-3 text-sm font-bold text-gray-900 dark:text-white">
                  Technologies
                </h4>

                <div className="flex flex-wrap gap-2">
                  {selectedProject.technologies.map((technology) => (
                    <span
                      key={technology}
                      className="rounded-lg border border-blue-100 bg-blue-50 px-3 py-2 text-xs font-medium text-blue-700 dark:border-blue-400/20 dark:bg-blue-400/10 dark:text-blue-300 sm:text-sm"
                    >
                      {technology}
                    </span>
                  ))}
                </div>
              </div>

              {/* Tautan proyek */}
              <div className="flex flex-wrap gap-3">
                <a
                  href={selectedProject.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-xl bg-blue-600 px-5 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-blue-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 dark:focus-visible:ring-offset-gray-800"
                >
                  <FaGithub aria-hidden="true" />
                  View GitHub
                  <FaExternalLinkAlt className="text-xs" aria-hidden="true" />
                </a>

                {selectedProject.figma && (
                  <a
                    href={selectedProject.figma}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 rounded-xl border border-gray-300 px-5 py-3 text-sm font-semibold text-gray-700 transition hover:border-blue-400 hover:bg-blue-50 hover:text-blue-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 dark:border-gray-600 dark:text-gray-200 dark:hover:bg-blue-400/10 dark:hover:text-blue-300"
                  >
                    View Figma
                    <FaExternalLinkAlt className="text-xs" aria-hidden="true" />
                  </a>
                )}
              </div>

              {/* Navigasi proyek */}
              <div className="mt-8 flex items-center justify-between gap-3 border-t border-gray-200 pt-5 dark:border-gray-700">
                <button
                  type="button"
                  onClick={handlePrevProject}
                  className="inline-flex items-center gap-2 rounded-lg py-2 text-left text-xs font-medium text-gray-600 transition hover:text-blue-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 dark:text-gray-300 dark:hover:text-blue-300 sm:text-sm"
                >
                  <FaChevronLeft aria-hidden="true" />
                  <span>Proyek Sebelumnya</span>
                </button>

                <span className="shrink-0 text-xs text-gray-400">
                  {(selectedIndex ?? 0) + 1} / {projects.length}
                </span>

                <button
                  type="button"
                  onClick={handleNextProject}
                  className="inline-flex items-center gap-2 rounded-lg py-2 text-right text-xs font-medium text-gray-600 transition hover:text-blue-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 dark:text-gray-300 dark:hover:text-blue-300 sm:text-sm"
                >
                  <span>Proyek Berikutnya</span>
                  <FaChevronRight aria-hidden="true" />
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </section>
  );
}
