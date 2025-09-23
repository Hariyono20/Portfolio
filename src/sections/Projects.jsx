import { useState } from "react";

export default function Projects() {
  const projects = [
    {
      title: "SmartJob Finder",
      date: "2024",
      description:
        "Aplikasi pencarian lowongan kerja berbasis TF-IDF. Dibangun menggunakan React, Tailwind CSS, dan Flask.",
      image: "/Images/SF.png",
      link: "https://github.com/Hariyono20/SmartJob-Finder",
    },
    {
      title: "MediSync",
      date: "2024",
      description:
        "Aplikasi mobile apotek dengan fitur checkout, konsultasi, user & admin. Dibangun menggunakan Flutter, Flask, Dart, dan MongoDB.",
      image: "/Images/MEDISYNC.png",
      link: "https://github.com/Hariyono20/Apotek",
    },
    {
      title: "CareConnect",
      date: "2024",
      description:
        "Website layanan ambulans yang dibangun menggunakan Flask, HTML, dan CSS.",
      image: "/Images/CC.png",
      link: "https://github.com/Hariyono20/CareConnect",
    },
    {
      title: "Tlogo Putri – Pengguna",
      date: "2024",
      description:
        "Homepage sistem wisata pengguna menggunakan React.",
      image: "/Images/TPP.png",
      link: "https://github.com/Hariyono20/tlogo-putri-pengguna",
    },
    {
      title: "Tlogo Putri – Admin Dashboard",
      date: "2024",
      description:
        "UI fitur akuntansi dan dashboard utama menggunakan React dan Tailwind CSS.",
      image: "/Images/TPF.png",
      link: "https://github.com/Hariyono20/tlogo-putri-fe",
    },
    {
      title: "MotorClub Profile Website",
      date: "2025",
      description:
        "Website company profile komunitas motor. Dibangun menggunakan React, Tailwind CSS, Python, dan MySQL.",
      image: "/Images/CP.png",
      link: "https://github.com/Hariyono20/motorclub-profile.git",
    },
  ];

  const [selectedIndex, setSelectedIndex] = useState(null);

  const handlePrev = () => {
    setSelectedIndex((prev) =>
      prev === 0 ? projects.length - 1 : prev - 1
    );
  };

  const handleNext = () => {
    setSelectedIndex((prev) =>
      prev === projects.length - 1 ? 0 : prev + 1
    );
  };

  return (
    <section id="projects" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-center text-gray-800 dark:text-white mb-14">
          Projects
        </h2>

        {/* Grid Projects */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {projects.map((project, idx) => (
            <div
              key={idx}
              onClick={() => setSelectedIndex(idx)}
              className="cursor-pointer bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition duration-300 group"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="p-6">
                <p className="text-sm text-gray-400 dark:text-gray-500 mb-1">
                  {project.date}
                </p>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                  {project.title}
                </h3>
                <p className="text-gray-700 dark:text-gray-300 text-sm leading-relaxed">
                  {project.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal */}
      {selectedIndex !== null && (
        <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50 p-4">
          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-2xl max-w-5xl w-full relative flex flex-col md:flex-row overflow-hidden">
            {/* Tombol Close */}
            <button
              className="absolute top-4 right-4 text-gray-600 dark:text-gray-300 hover:text-red-500 text-2xl"
              onClick={() => setSelectedIndex(null)}
            >
              ✕
            </button>

            {/* Gambar */}
            <div className="relative md:w-1/2 flex items-center justify-center bg-gray-100 dark:bg-gray-700">
              <button
                onClick={handlePrev}
                className="absolute left-2 md:left-4 p-3 bg-gray-200 dark:bg-gray-700 rounded-full hover:bg-gray-300 dark:hover:bg-gray-600"
              >
                ‹
              </button>
              <img
                src={projects[selectedIndex].image}
                alt={projects[selectedIndex].title}
                className="max-h-[400px] w-full object-contain rounded-lg"
              />
              <button
                onClick={handleNext}
                className="absolute right-2 md:right-4 p-3 bg-gray-200 dark:bg-gray-700 rounded-full hover:bg-gray-300 dark:hover:bg-gray-600"
              >
                ›
              </button>
            </div>

            {/* Deskripsi */}
            <div className="md:w-1/2 p-6 flex flex-col justify-center">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                {projects[selectedIndex].title}
              </h3>
              <p className="text-gray-500 dark:text-gray-400 mb-4">
                {projects[selectedIndex].date}
              </p>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
                {projects[selectedIndex].description}
              </p>
              <a
                href={projects[selectedIndex].link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-blue-600 text-white px-6 py-2 rounded-lg shadow hover:bg-blue-700 transition"
              >
                View Project
              </a>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
