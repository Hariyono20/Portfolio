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
} from "react-icons/fa";

export default function About() {
  return (
    <section
      id="about"
      className="py-20 bg-gray-50 dark:bg-gray-900 transition-colors duration-500"
    >
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-center text-gray-800 dark:text-white mb-14 tracking-wide">
          About Me
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Foto kiri */}
          <div className="w-full h-80 rounded-xl overflow-hidden border-4 border-blue-500 shadow-xl transform transition duration-500 hover:scale-105 hover:shadow-blue-400">
            <img
              src="/Images/WhatsApp Image 2025-06-24 at 18.19.02.jpeg"
              alt="Foto Saya"
              className="w-full h-full object-cover object-center"
            />
          </div>

          {/* Konten kanan */}
          <div className="flex flex-col gap-8">
            {/* Who Am I & My Approach */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="transition duration-300 hover:scale-[1.02]">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 bg-black rounded-full flex items-center justify-center shadow">
                    <FaUser className="text-white text-lg" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-800 dark:text-white">
                    Who Am I
                  </h3>
                </div>
                <p className="text-sm text-gray-700 dark:text-gray-300 text-justify leading-relaxed">
                  Saya mahasiswa semester 7 Universitas Jenderal Achmad Yani
                  Yogyakarta, jurusan Sistem Informasi. Fokus saya sebagai{" "}
                  <strong>Frontend Developer</strong> dengan React & Tailwind
                  CSS.
                </p>
              </div>

              <div className="transition duration-300 hover:scale-[1.02]">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 bg-black rounded-full flex items-center justify-center shadow">
                    <FaLightbulb className="text-white text-lg" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-800 dark:text-white">
                    My Approach
                  </h3>
                </div>
                <p className="text-sm text-gray-700 dark:text-gray-300 text-justify leading-relaxed">
                  Saya membangun UI yang responsif, intuitif, dan performa
                  tinggi. Terbiasa kerja tim dengan backend developer dan fokus
                  pada user experience.
                </p>
              </div>
            </div>

            {/* Personal Info */}
            <div>
              <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-4">
                Personal Info
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-10 gap-y-3 text-sm text-gray-700 dark:text-gray-300">
                {[
                  {
                    icon: <FaIdBadge />,
                    label: "Bento Haryono",
                  },
                  {
                    icon: <FaMapMarkerAlt />,
                    label: "Yogyakarta, Indonesia",
                  },
                  {
                    icon: <FaEnvelope />,
                    label: "bentohariyono00@gmail.com",
                  },
                  {
                    icon: <FaGraduationCap />,
                    label: "Mahasiswa Sistem Informasi",
                  },
                  {
                    icon: <FaWhatsapp />,
                    label: "+62 889-8544-0982",
                  },
                  {
                    icon: <FaInstagram />,
                    label: (
                      <a
                        href="https://www.instagram.com/harriyonoo"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:underline"
                      >
                        @harriyonoo
                      </a>
                    ),
                  },
                  {
                    icon: <FaLinkedin />,
                    label: (
                      <a
                        href="https://www.linkedin.com/in/bento-haryono-01a4ba257"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:underline"
                      >
                        linkedin.com/in/bento-hariyono
                      </a>
                    ),
                  },
                  {
                    icon: <FaGithub />,
                    label: (
                      <a
                        href="https://github.com/Hariyono20"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:underline"
                      >
                        github.com/Hariyono20
                      </a>
                    ),
                  },
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-3 group">
                    <div className="w-9 h-9 bg-black rounded-full flex items-center justify-center shadow-md group-hover:scale-110 transition-transform duration-300">
                      <span className="text-white text-base">{item.icon}</span>
                    </div>
                    <span className="group-hover:text-blue-600 transition-colors duration-300">
                      {item.label}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
