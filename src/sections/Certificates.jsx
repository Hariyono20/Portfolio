"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import {
  FaChevronLeft,
  FaChevronRight,
  FaTimes,
  FaCertificate,
  FaExternalLinkAlt,
  FaRegCalendarAlt,
} from "react-icons/fa";

const certificates = [
  {
    title: "Surat Pencatatan Ciptaan – Booklet Website Profil Tlogo Putri 2",
    issuer: "Kementerian Hukum Republik Indonesia – DJKI",
    year: 2025,
    image: "/Images/HKI.pdf",
    type: "pdf",
    description:
      "Hak cipta tercatat untuk Booklet Website Profil Tlogo Putri 2, diumumkan pada 28 Agustus 2025. Nomor pencatatan: 000962564. Pencipta tercatat bersama tim, termasuk Bento Haryono, dengan Universitas Jenderal Achmad Yani Yogyakarta sebagai pemegang hak cipta.",
  },
  {
    title: "Sertifikat Lomba 'Empowering Everyday Lives'",
    issuer: "HMSI UNJAYA",
    year: 2024,
    image: "/Images/Lomba Ui:Ux 2024.png",
    type: "image",
    description:
      "Partisipasi sebagai Sie Pold dalam lomba UI/UX bertema 'Empowering Everyday Lives' yang diselenggarakan oleh Himpunan Mahasiswa Sistem Informasi UNJAYA.",
  },
  {
    title: "Mengembangkan Website bagi Calon Web Developer",
    issuer: "Program Kartu Prakerja – Cakap",
    year: 2023,
    image: "/Images/sertifikat prakerja 2.pdf",
    type: "pdf",
    description:
      "Pelatihan 15 jam yang mencakup kompetensi SKKNI No. 282 Tahun 2016, seperti algoritma pemrograman, pemrograman terstruktur, pengujian integrasi program, dan profiling program.",
  },
  {
    title: "Exabytes Developer Club Goes to Campus",
    issuer: "Exabytes Indonesia",
    year: 2023,
    image: "/Images/Exabyte.jpeg",
    type: "image",
    description:
      "Mengikuti seminar 'Start Your Digital Universe with Website' yang diselenggarakan oleh Exabytes Indonesia di UNJAYA.",
  },
  {
    title: "Sertifikat Pertama Sertiva",
    issuer: "Sertiva",
    year: 2023,
    image: "/Images/sertiva.jpeg",
    type: "image",
    description:
      "Sertifikat penyelesaian pelatihan digital pertama dari platform Sertiva.",
  },
  {
    title: "Introduction to Data Science with Python",
    issuer: "DQLab",
    year: 2025,
    image: "/Images/certificate-DQLABINTP1BVRWBN.pdf",
    type: "pdf",
    description:
      "Mempelajari dasar-dasar data science menggunakan Python, termasuk data wrangling dan visualisasi.",
  },
  {
    title: "Sertifikat Kepengurusan HMSI UNJAYA",
    issuer: "HMSI UNJAYA",
    year: 2024,
    image: "/Images/Bento-2.png",
    type: "image",
    description:
      "Kontribusi sebagai staf Kominfo di Himpunan Mahasiswa Sistem Informasi Universitas Jenderal Achmad Yani Yogyakarta periode 2023/2024.",
  },
];

function CertificatePreview({ cert, className = "" }) {
  if (cert.type === "pdf") {
    return (
      <iframe
        src={`${cert.image}#toolbar=0&navpanes=0&scrollbar=0`}
        title={`Pratinjau ${cert.title}`}
        className={`bg-white ${className}`}
        loading="lazy"
      />
    );
  }

  return (
    <img
      src={cert.image}
      alt={`Sertifikat ${cert.title}`}
      loading="lazy"
      className={`object-contain ${className}`}
    />
  );
}

export default function Certificates() {
  const scrollRef = useRef(null);
  const closeButtonRef = useRef(null);
  const [selectedCert, setSelectedCert] = useState(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);
  const reduceMotion = useReducedMotion();

  const updateScrollButtons = () => {
    const element = scrollRef.current;
    if (!element) return;

    setCanScrollLeft(element.scrollLeft > 4);
    setCanScrollRight(
      element.scrollLeft + element.clientWidth < element.scrollWidth - 4,
    );
  };

  const scroll = (direction) => {
    const element = scrollRef.current;
    if (!element) return;

    element.scrollBy({
      left: direction === "left" ? -320 : 320,
      behavior: reduceMotion ? "auto" : "smooth",
    });
  };

  useEffect(() => {
    const element = scrollRef.current;
    if (!element) return;

    updateScrollButtons();

    element.addEventListener("scroll", updateScrollButtons, {
      passive: true,
    });

    const resizeObserver = new ResizeObserver(updateScrollButtons);
    resizeObserver.observe(element);

    return () => {
      element.removeEventListener("scroll", updateScrollButtons);
      resizeObserver.disconnect();
    };
  }, []);

  useEffect(() => {
    if (!selectedCert) return;

    closeButtonRef.current?.focus();

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        setSelectedCert(null);
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [selectedCert]);

  const openCertificate = (cert) => {
    setSelectedCert(cert);
  };

  return (
    <section
      id="certificates"
      className="relative overflow-hidden bg-gray-50 py-20 text-gray-900 dark:bg-gray-900 dark:text-white sm:py-24"
    >
      {/* Dekorasi latar */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-32 top-20 h-64 w-64 rounded-full bg-violet-400/10 blur-3xl"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-32 bottom-10 h-64 w-64 rounded-full bg-blue-400/10 blur-3xl"
      />

      <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        {/* Judul */}
        <motion.div
          initial={reduceMotion ? false : { opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: reduceMotion ? 0 : 0.5 }}
          className="mb-10 text-center sm:mb-14"
        >
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-violet-200 bg-violet-50 px-4 py-2 text-sm font-medium text-violet-700 dark:border-violet-400/20 dark:bg-violet-400/10 dark:text-violet-300">
            <FaCertificate aria-hidden="true" />
            <span>Achievements & Learning</span>
          </div>

          <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl lg:text-5xl">
            Certificates
          </h2>

          <div className="mx-auto mt-4 h-1 w-20 rounded-full bg-violet-600" />

          <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-gray-600 dark:text-gray-400 sm:text-base">
            Sertifikasi, pelatihan, dan pengalaman yang mendukung perjalanan
            saya dalam pengembangan web dan teknologi digital.
          </p>
        </motion.div>

        {/* Header carousel */}
        <div className="mb-5 flex items-center justify-between gap-4">
          <p className="text-sm font-medium text-gray-600 dark:text-gray-400">
            {certificates.length} sertifikat
          </p>

          <div className="flex items-center gap-2">
            <button
              type="button"
              aria-label="Lihat sertifikat sebelumnya"
              onClick={() => scroll("left")}
              disabled={!canScrollLeft}
              className="flex h-10 w-10 items-center justify-center rounded-full border border-gray-200 bg-white text-violet-700 shadow-sm transition hover:border-violet-400 hover:bg-violet-50 disabled:cursor-not-allowed disabled:opacity-30 dark:border-gray-700 dark:bg-gray-800 dark:text-violet-300 dark:hover:bg-violet-500/10"
            >
              <FaChevronLeft aria-hidden="true" />
            </button>

            <button
              type="button"
              aria-label="Lihat sertifikat berikutnya"
              onClick={() => scroll("right")}
              disabled={!canScrollRight}
              className="flex h-10 w-10 items-center justify-center rounded-full border border-gray-200 bg-white text-violet-700 shadow-sm transition hover:border-violet-400 hover:bg-violet-50 disabled:cursor-not-allowed disabled:opacity-30 dark:border-gray-700 dark:bg-gray-800 dark:text-violet-300 dark:hover:bg-violet-500/10"
            >
              <FaChevronRight aria-hidden="true" />
            </button>
          </div>
        </div>

        {/* Daftar sertifikat */}
        <div
          ref={scrollRef}
          className="flex snap-x snap-mandatory gap-5 overflow-x-auto scroll-smooth px-1 pb-6 pt-2 [scrollbar-width:thin] [scrollbar-color:#8b5cf6_transparent] sm:gap-6"
        >
          {certificates.map((cert, index) => (
            <motion.article
              key={cert.title}
              initial={reduceMotion ? false : { opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{
                duration: reduceMotion ? 0 : 0.45,
                delay: reduceMotion ? 0 : index * 0.06,
              }}
              className="group w-[min(82vw,300px)] flex-shrink-0 snap-start"
            >
              <button
                type="button"
                onClick={() => openCertificate(cert)}
                aria-label={`Lihat detail ${cert.title}`}
                className="flex h-full w-full flex-col overflow-hidden rounded-2xl border border-gray-200/80 bg-white text-left shadow-sm transition duration-300 hover:-translate-y-1 hover:border-violet-300 hover:shadow-xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-500 dark:border-gray-700 dark:bg-gray-800 dark:hover:border-violet-400/60"
              >
                {/* Preview */}
                <div className="relative flex h-44 w-full items-center justify-center overflow-hidden bg-gray-100 dark:bg-gray-700 sm:h-48">
                  <CertificatePreview
                    cert={cert}
                    className="h-full w-full p-3 transition-transform duration-500 group-hover:scale-[1.03]"
                  />

                  <div className="absolute inset-0 flex items-center justify-center bg-gray-950/0 transition-colors duration-300 group-hover:bg-gray-950/35">
                    <span className="translate-y-2 rounded-full bg-white px-4 py-2 text-xs font-semibold text-violet-700 opacity-0 shadow-lg transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                      Lihat sertifikat
                    </span>
                  </div>

                  <span className="absolute left-3 top-3 rounded-full border border-white/70 bg-white/90 px-3 py-1 text-xs font-semibold text-gray-700 shadow-sm dark:border-gray-600 dark:bg-gray-800/90 dark:text-gray-200">
                    {cert.year}
                  </span>
                </div>

                {/* Informasi */}
                <div className="flex flex-1 flex-col p-5">
                  <div className="mb-3 flex items-center gap-2 text-xs text-gray-500 dark:text-gray-400">
                    <FaRegCalendarAlt aria-hidden="true" />
                    <span>Tahun {cert.year}</span>
                  </div>

                  <h3 className="mb-2 line-clamp-2 text-base font-bold leading-snug text-gray-900 transition-colors group-hover:text-violet-700 dark:text-white dark:group-hover:text-violet-300 sm:text-lg">
                    {cert.title}
                  </h3>

                  <p className="mb-3 line-clamp-2 text-sm font-medium text-violet-700 dark:text-violet-300">
                    {cert.issuer}
                  </p>

                  <p className="line-clamp-3 text-sm leading-6 text-gray-600 dark:text-gray-400">
                    {cert.description}
                  </p>

                  <div className="mt-auto flex items-center gap-2 pt-5 text-sm font-semibold text-violet-700 dark:text-violet-300">
                    <span>Lihat detail</span>
                    <FaExternalLinkAlt
                      className="text-xs transition-transform group-hover:translate-x-1"
                      aria-hidden="true"
                    />
                  </div>
                </div>
              </button>
            </motion.article>
          ))}
        </div>

        <p className="mt-2 text-center text-xs text-gray-500 dark:text-gray-500 sm:text-sm">
          Geser daftar sertifikat ke samping atau gunakan tombol navigasi.
        </p>
      </div>

      {/* Modal detail */}
      {selectedCert && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center overflow-y-auto bg-black/75 p-3 backdrop-blur-sm sm:p-6"
          onMouseDown={(event) => {
            if (event.target === event.currentTarget) {
              setSelectedCert(null);
            }
          }}
        >
          <motion.div
            role="dialog"
            aria-modal="true"
            aria-labelledby="certificate-modal-title"
            initial={reduceMotion ? false : { opacity: 0, y: 18, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: reduceMotion ? 0 : 0.25 }}
            className="relative my-auto grid w-full max-w-5xl grid-cols-1 overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-2xl dark:border-gray-700 dark:bg-gray-800 md:grid-cols-2"
          >
            {/* Tombol close */}
            <button
              ref={closeButtonRef}
              type="button"
              aria-label="Tutup detail sertifikat"
              onClick={() => setSelectedCert(null)}
              className="absolute right-3 top-3 z-20 flex h-10 w-10 items-center justify-center rounded-full border border-gray-200 bg-white/95 text-gray-700 shadow-md transition hover:bg-violet-100 hover:text-violet-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-500 dark:border-gray-600 dark:bg-gray-800/95 dark:text-white dark:hover:bg-violet-500/20"
            >
              <FaTimes aria-hidden="true" />
            </button>

            {/* Preview besar */}
            <div className="flex min-h-64 items-center justify-center bg-gray-100 p-4 dark:bg-gray-900 sm:min-h-80 md:min-h-[480px]">
              {selectedCert.type === "pdf" ? (
                <iframe
                  src={selectedCert.image}
                  title={`Pratinjau ${selectedCert.title}`}
                  className="h-[55vh] min-h-64 w-full rounded-lg bg-white md:h-[70vh] md:max-h-[650px]"
                />
              ) : (
                <img
                  src={selectedCert.image}
                  alt={`Sertifikat ${selectedCert.title}`}
                  className="max-h-[55vh] w-full rounded-lg object-contain md:max-h-[650px]"
                />
              )}
            </div>

            {/* Deskripsi */}
            <div className="flex flex-col justify-center p-6 sm:p-8 md:p-10">
              <span className="mb-4 inline-flex w-fit items-center gap-2 rounded-full bg-violet-100 px-3 py-1.5 text-xs font-semibold text-violet-700 dark:bg-violet-400/10 dark:text-violet-300">
                <FaCertificate aria-hidden="true" />
                Certificate
              </span>

              <p className="mb-3 flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400">
                <FaRegCalendarAlt aria-hidden="true" />
                {selectedCert.year}
              </p>

              <h3
                id="certificate-modal-title"
                className="mb-4 pr-5 text-xl font-bold leading-snug text-gray-900 dark:text-white sm:text-2xl"
              >
                {selectedCert.title}
              </h3>

              <p className="mb-5 text-sm font-semibold leading-6 text-violet-700 dark:text-violet-300">
                {selectedCert.issuer}
              </p>

              <p className="text-sm leading-7 text-gray-600 dark:text-gray-300 sm:text-base">
                {selectedCert.description}
              </p>

              <a
                href={selectedCert.image}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-7 inline-flex w-fit items-center gap-2 rounded-xl bg-violet-600 px-5 py-3 text-sm font-semibold text-white transition hover:bg-violet-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-500 focus-visible:ring-offset-2 dark:focus-visible:ring-offset-gray-800"
              >
                Buka file asli
                <FaExternalLinkAlt aria-hidden="true" />
              </a>
            </div>
          </motion.div>
        </div>
      )}
    </section>
  );
}
