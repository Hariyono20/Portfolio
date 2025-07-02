"use client";

import { useRef } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const certificates = [
  {
    title: "Sertifikat Lomba 'Empowering Everyday Lives'",
    issuer: "HMSI UNJAYA",
    year: 2024,
    image: "/Images/Lomba Ui:Ux 2024.png", 
    description:
      "Partisipasi sebagai Sie Pold dalam lomba UI/UX bertema 'Empowering Everyday Lives' yang diselenggarakan oleh Himpunan Mahasiswa Sistem Informasi UNJAYA.",
  },
  {
    title: "Mengembangkan Website bagi Calon Web Developer",
    issuer: "Program Kartu Prakerja – Cakap",
    year: 2023,
    image: "/Images/sertifikat prakerja 2.pdf", 
    description:
      "Pelatihan 15 jam mencakup kompetensi SKKNI No. 282 Tahun 2016 seperti algoritma pemrograman, pemrograman terstruktur, pengujian integrasi program, dan profiling program.",
  },
  {
    title: "Exabytes Developer Club Goes to Campus",
    issuer: "Exabytes Indonesia",
    year: 2023,
    image: "/Images/Exabyte.jpeg",
    description:
      "Mengikuti seminar 'Start Your Digital Universe with Website' yang diselenggarakan oleh Exabytes Indonesia di UNJAYA.",
  },
  {
    title: "Sertifikat Pertama Sertiva",
    issuer: "Sertiva",
    year: 2023,
    image: "/Images/sertiva.jpeg",
    description:
      "Sertifikat penyelesaian pelatihan digital pertama dari platform Sertiva.",
  },
  {
    title: "Introduction to Data Science with Python",
    issuer: "DQLab",
    year: 2025,
    image: "/Images/certificate-DQLABINTP1BVRWBN.pdf",
    description:
      "Mempelajari dasar-dasar data science menggunakan Python, termasuk data wrangling dan visualisasi.",
  },
  {
    title: "Sertifikat Kepengurusan HMSI UNJAYA",
    issuer: "HMSI UNJAYA",
    year: 2024,
    image: "/Images/Bento-2.png",
    description:
      "Kontribusi sebagai staf Kominfo di Himpunan Mahasiswa Sistem Informasi Universitas Jenderal Achmad Yani Yogyakarta periode 2023/2024.",
  },
];

export default function Certificates() {
  const scrollRef = useRef(null);

  const scroll = (direction) => {
    const scrollAmount = 320;
    scrollRef.current.scrollBy({
      left: direction === "left" ? -scrollAmount : scrollAmount,
      behavior: "smooth",
    });
  };

  return (
    <section id="certificates" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-center text-gray-800 dark:text-white mb-14">
          Certificates
        </h2>

        <div className="relative">
          {/* Tombol kiri */}
          <button
            aria-label="Scroll left"
            onClick={() => scroll("left")}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-full p-3 shadow-md hover:bg-violet-100 dark:hover:bg-violet-700 transition"
          >
            <FaChevronLeft className="text-violet-600 dark:text-white" />
          </button>

          {/* List Sertifikat */}
          <div
            ref={scrollRef}
            className="flex overflow-x-auto gap-6 px-10 scroll-smooth scrollbar-hide snap-x snap-mandatory"
          >
            {certificates.map((cert, i) => (
              <article
                key={i}
                className="min-w-[300px] max-w-[300px] bg-white dark:bg-gray-800 rounded-2xl shadow-lg flex-shrink-0 hover:scale-[1.03] transition-transform duration-300 snap-start"
              >
                <img
                  src={cert.image}
                  alt={`${cert.issuer} logo`}
                  className="w-full h-40 object-contain bg-white dark:bg-gray-700 p-4"
                />
                <div className="p-4 space-y-2">
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    {cert.year}
                  </p>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                    {cert.title}
                  </h3>
                  <p className="text-sm text-violet-700 dark:text-violet-300">
                    {cert.issuer}
                  </p>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    {cert.description}
                  </p>
                </div>
              </article>
            ))}
          </div>

          {/* Tombol kanan */}
          <button
            aria-label="Scroll right"
            onClick={() => scroll("right")}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-full p-3 shadow-md hover:bg-violet-100 dark:hover:bg-violet-700 transition"
          >
            <FaChevronRight className="text-violet-600 dark:text-white" />
          </button>
        </div>
      </div>
    </section>
  );
}
