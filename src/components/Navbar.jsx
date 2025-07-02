import { useState, useEffect } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    if (!darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  };

  // Keep dark mode on refresh
  useEffect(() => {
    if (localStorage.getItem("theme") === "dark") {
      setDarkMode(true);
      document.documentElement.classList.add("dark");
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("theme", darkMode ? "dark" : "light");
  }, [darkMode]);

  return (
    <nav className="bg-purple-700 text-white dark:bg-gray-900">
      <div className="max-w-6xl mx-auto px-4 flex justify-between items-center h-16">
        <div className="text-xl font-bold cursor-default select-none">
          Bento Haryono
        </div>

        <div className="flex items-center space-x-4">
          {/* Desktop Menu */}
          <ul className="hidden md:flex space-x-6">
            <li>
              <a href="#hero" className="hover:text-purple-300">
                Home
              </a>
            </li>
            <li>
              <a href="#about" className="hover:text-purple-300">
                About
              </a>
            </li>
            <li>
              <a href="#skills" className="hover:text-purple-300">
                Skills
              </a>
            </li>
            <li>
              <a href="#experience" className="hover:text-purple-300">
                Experience
              </a>
            </li>
            <li>
              <a href="#certificates" className="hover:text-purple-300">
                Certificates
              </a>
            </li>

            <li>
              <a href="#projects" className="hover:text-purple-300">
                Projects
              </a>
            </li>
            <li>
              <a href="#contact" className="hover:text-purple-300">
                Contact
              </a>
            </li>
          </ul>

          {/* Toggle Theme Button */}
          <button
            onClick={toggleDarkMode}
            className="bg-white text-black px-2 py-1 rounded dark:bg-gray-700 dark:text-white"
          >
            {darkMode ? "☀️ Light" : "🌙 Dark"}
          </button>

          {/* Mobile Hamburger */}
          <button
            className="md:hidden"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              {isOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <ul className="md:hidden bg-purple-600 dark:bg-gray-800 px-4 py-4 space-y-2">
          <li>
            <a href="#hero" className="block hover:text-purple-300">
              Home
            </a>
          </li>
          <li>
            <a href="#about" className="block hover:text-purple-300">
              About
            </a>
          </li>
          <li>
            <a href="#skills" className="block hover:text-purple-300">
              Skills
            </a>
          </li>
          <li>
            <a href="#experience" className="block hover:text-purple-300">
              Experience
            </a>
          </li>
          <li>
            <a href="#certificates" className="block hover:text-purple-300">
              Certificates
            </a>
          </li>
          <li>
            <a href="#resume" className="block hover:text-purple-300">
              Resume
            </a>
          </li>
          <li>
            <a href="#projects" className="block hover:text-purple-300">
              Projects
            </a>
          </li>
          <li>
            <a href="#contact" className="block hover:text-purple-300">
              Contact
            </a>
          </li>
        </ul>
      )}
    </nav>
  );
}
