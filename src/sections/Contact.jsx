import {
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaClock,
  FaLinkedin,
  FaGithub,
  FaWhatsapp,
} from "react-icons/fa";
import { useState } from "react";

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Thank you for your message, ${form.name}!`);
    setForm({ name: "", email: "", subject: "", message: "" });
  };

  return (
    <section id="contact" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* Kiri: Form */}
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8">
          <h3 className="text-2xl font-semibold mb-6 text-gray-900 dark:text-white">
            Leave Your Message
          </h3>
          <form onSubmit={handleSubmit} className="space-y-5">
            {/* Nama dan Email */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label
                  htmlFor="name"
                  className="block mb-2 font-medium text-gray-700 dark:text-gray-300"
                >
                  Nama
                </label>
                <input
                  id="name"
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  value={form.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-md border border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-violet-500"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block mb-2 font-medium text-gray-700 dark:text-gray-300"
                >
                  Email
                </label>
                <input
                  id="email"
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  value={form.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-md border border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-violet-500"
                />
              </div>
            </div>

            {/* Subject */}
            <div>
              <label
                htmlFor="subject"
                className="block mb-2 font-medium text-gray-700 dark:text-gray-300"
              >
                Subject
              </label>
              <input
                id="subject"
                type="text"
                name="subject"
                placeholder="Subject"
                value={form.subject}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-md border border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-violet-500"
              />
            </div>

            {/* Message */}
            <div>
              <label
                htmlFor="message"
                className="block mb-2 font-medium text-gray-700 dark:text-gray-300"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                placeholder="Your Message"
                value={form.message}
                onChange={handleChange}
                required
                rows={5}
                className="w-full px-4 py-3 rounded-md border border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-violet-500 resize-none"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-violet-600 hover:bg-violet-700 text-white font-semibold py-3 rounded-md transition-colors duration-300"
            >
              Send Message
            </button>
          </form>
        </div>

        {/* Kanan: Info Kontak + Work Hours */}
        {/* Kanan: Info Kontak + Work Hours */}
        <div className="text-gray-800 dark:text-gray-200 flex flex-col justify-between">
          <div>
            <h3 className="text-3xl font-semibold mb-2">Get in Touch</h3>
            <p className="mb-8 leading-relaxed">
              Feel free to reach out for collaborations, questions, or just to
              say hello! I'm always open to new projects and opportunities.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {/* Office */}
              <div
                className="flex items-center gap-4 bg-white dark:bg-gray-800 rounded-lg shadow-md p-5 
                      border-2 border-transparent
                      hover:border-blue-900
                      transition-colors duration-300"
              >
                <div className="p-3 rounded-full border-2 border-blue-900 text-blue-900 text-2xl">
                  <FaMapMarkerAlt />
                </div>
                <div>
                  <p className="font-semibold">Office</p>
                  <p className="text-gray-600 dark:text-gray-400">
                    Yogyakarta, Indonesia
                  </p>
                </div>
              </div>

              {/* Phone */}
              <div
                className="flex items-center gap-4 bg-white dark:bg-gray-800 rounded-lg shadow-md p-5
                      border-2 border-transparent
                      hover:border-orange-500
                      transition-colors duration-300"
              >
                <div className="p-3 rounded-full border-2 border-orange-500 text-orange-500 text-2xl">
                  <FaPhoneAlt />
                </div>
                <div>
                  <p className="font-semibold">Phone</p>
                  <p className="text-gray-600 dark:text-gray-400">
                    +62 812-3456-7890
                  </p>
                </div>
              </div>

              {/* Email */}
              <div
                className="flex items-center gap-4 bg-white dark:bg-gray-800 rounded-lg shadow-md p-5
    border-2 border-transparent hover:border-green-500 transition-colors duration-300"
              >
                <div className="p-3 rounded-full border-2 border-green-500 text-green-500 text-2xl">
                  <FaEnvelope />
                </div>
                <div className="min-w-0">
                  {" "}
                  {/* Membatasi area teks */}
                  <p className="font-semibold">Email</p>
                  <p className="text-gray-600 dark:text-gray-400 break-all">
                    Bentohariyono00@gmail.com
                  </p>
                </div>
              </div>

              {/* Work Hours */}
              <div
                className="flex items-center gap-4 bg-white dark:bg-gray-800 rounded-lg shadow-md p-5
                      border-2 border-transparent
                      hover:border-pink-500
                      transition-colors duration-300"
              >
                <div className="p-3 rounded-full border-2 border-pink-500 text-pink-500 text-2xl">
                  <FaClock />
                </div>
                <div>
                  <p className="font-semibold">Work Hours</p>
                  <p className="text-gray-600 dark:text-gray-400">
                    Mon - Fri, 9:00 AM - 5:00 PM
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Sosial Media */}
          <div className="mt-10 flex gap-4 text-xl justify-center md:justify-start items-center">
            <h2 className="font-bold text-sm">Sosial Media :</h2>
            {[
              {
                icon: <FaLinkedin className="w-5 h-5" />,
                href: "https://www.linkedin.com/in/bento-hariyono-01a4ba257/",
                label: "LinkedIn",
                color: "text-blue-600",
                hoverBg: "hover:bg-blue-600",
                hoverText: "hover:text-white",
                border: "border-blue-600",
              },
              {
                icon: <FaGithub className="w-5 h-5" />,
                href: "https://github.com/Hariyono20",
                label: "GitHub",
                color: "text-purple-600",
                hoverBg: "hover:bg-purle-600",
                hoverText: "hover:text-white",
                border: "border-purple-600",
              },
              {
                icon: <FaWhatsapp className="w-5 h-5" />,
                href: "https://wa.me/6288985440982",
                label: "WhatsApp",
                color: "text-green-600",
                hoverBg: "hover:bg-green-600",
                hoverText: "hover:text-white",
                border: "border-green-600",
              },
            ].map(
              ({ icon, href, label, color, hoverBg, hoverText, border }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className={`p-2 rounded-full border-2 ${border} ${color} ${hoverBg} ${hoverText} transition-colors duration-300`}
                >
                  {icon}
                </a>
              )
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
