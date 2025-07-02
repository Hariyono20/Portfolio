export default function Projects() {
  const projects = [
    {
      title: "SmartJob Finder",
      date: "2024",
      description:
        "Aplikasi pencarian lowongan kerja berbasis TF-IDF. Dibangun menggunakan React, Tailwind CSS, dan Flask.",
      image: "../../public/Images/SF.png",
      link: "https://github.com/Hariyono20/SmartJob-Finder",
    },
    {
      title: "MediSync",
      date: "2024",
      description:
        "Aplikasi mobile apotek dengan fitur checkout, konsultasi, user & admin. Dibangun menggunakan Flutter, Flask, Dart, dan MongoDB.",
      image: "../../public/Images/MEDISYNC.png",
      link: "https://github.com/Hariyono20/Apotek",
    },
    {
      title: "CareConnect",
      date: "2024",
      description:
        "Website layanan ambulans yang dibangun menggunakan Flask, HTML, dan CSS.",
      image: "../../public/Images/CC.png",
      link: "https://github.com/Hariyono20/CareConnect",
    },
    {
      title: "Tlogo Putri – Pengguna",
      date: "2024",
      description:
        "Homepage sistem wisata pengguna menggunakan React, .",
      image: "../../public/Images/TPP.png",
      link: "https://github.com/Hariyono20/tlogo-putri-pengguna",
    },
    {
      title: "Tlogo Putri – Admin Dashboard",
      date: "2024",
      description:
        "UI fitur akuntansi dan dashboard utama menggunakan React dan Tailwind CSS.",
      image: "../../public/Images/TPF.png",
      link: "https://github.com/Hariyono20/tlogo-putri-fe",
    },
    {
      title: "MotorClub Profile Website",
      date: "2025",
      description:
        "Website company profile komunitas motor. Dibangun menggunakan React, Tailwind CSS, Python, dan MySQL.",
      image: "../../public/Images/CP.png",
      link: "https://github.com/Hariyono20/motorclub-profile.git",
    },
  ];

  return (
    <section id="projects" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-center text-gray-800 dark:text-white mb-14">
          Projects
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {projects.map((project, idx) => (
            <a
              key={idx}
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300 group"
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
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
