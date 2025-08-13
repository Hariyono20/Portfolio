"use client";
import {
  FaInstagram,
  FaWhatsapp,
  FaLinkedin,
  FaMapMarkerAlt,
  FaEnvelope,
  FaPhoneAlt,
  FaClock,
  FaGithub,
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-r from-purple-700 via-purple-800 to-purple-900 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 text-white pt-12 pb-6 shadow-inner">
      <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-10 text-sm">
        {/* Kolom 1 */}
        <div>
          <h2 className="text-2xl font-bold mb-2">Bento Haryono</h2>
          <p className="text-gray-200 mb-4">
            Web developer passionate in building responsive and user-friendly
            websites.
          </p>
          <div className="flex gap-4 text-2xl mt-2">
            <a
              href="https://www.instagram.com/harriyonoo"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-pink-400 transform hover:scale-110 hover:rotate-6 transition duration-300"
            >
              <FaInstagram />
            </a>
            <a
              href="https://wa.me/6288985440982"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-green-400 transform hover:scale-110 hover:rotate-6 transition duration-300"
            >
              <FaWhatsapp />
            </a>
            <a
              href="https://www.linkedin.com/in/bento-haryono-01a4ba257"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-400 transform hover:scale-110 hover:rotate-6 transition duration-300"
            >
              <FaLinkedin />
            </a>
            <a
              href="https://github.com/Hariyono20"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-400 transform hover:scale-110 hover:rotate-6 transition duration-300"
            >
              <FaGithub />
            </a>
          </div>
        </div>

        {/* Kolom 2 */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Navigasi</h3>
          <ul className="space-y-2 text-gray-200">
            {[
              { label: "Home", id: "hero" },
              { label: "About", id: "about" },
              { label: "Skills", id: "skills" },
              { label: "Experience", id: "experience" },
              { label: "Certificates", id: "certificates" },
              { label: "Projects", id: "projects" },
              { label: "Contact", id: "contact" },
            ].map((item, index) => (
              <li key={index}>
                <a
                  href={`#${item.id}`}
                  className="hover:text-purple-300 transition duration-200"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Kolom 3 - Informasi */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Informasi</h3>
          <ul className="space-y-3 text-gray-200">
            <li className="flex items-center gap-3">
              <FaMapMarkerAlt className="text-white" />
              <span>Yogyakarta, Indonesia</span>
            </li>
            <li className="flex items-center gap-3">
              <FaEnvelope className="text-white" />
              <span>bentohariyono00@gmail.com</span>
            </li>
            <li className="flex items-center gap-3">
              <FaPhoneAlt className="text-white" />
              <span>+62 889-8544-0982</span>
            </li>
            <li className="flex items-center gap-3">
              <FaClock className="text-white" />
              <span>09.00 - 17.00 WIB</span>
            </li>
          </ul>
        </div>

        {/* Kolom 4 - Subscribe */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Subscribe</h3>
          <p className="text-gray-200 mb-3">
            Dapatkan update terbaru dari saya.
          </p>
          <form className="flex flex-col gap-3">
            <input
              type="email"
              placeholder="Email Anda"
              className="px-3 py-2 rounded-md text-black focus:outline-none focus:ring-2 focus:ring-purple-400 transition duration-200"
            />
            <button
              type="submit"
              className="bg-white text-purple-700 font-semibold py-2 rounded-md hover:bg-purple-200 transition duration-300"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="mt-10 text-center text-gray-300 text-sm border-t border-purple-600 pt-4">
        &copy; {new Date().getFullYear()} Bento Haryono. All rights reserved.
        <div className="mt-1">Built with React & Tailwind CSS</div>
      </div>
    </footer>
  );
}
