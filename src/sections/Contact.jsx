import { useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import {
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaClock,
  FaLinkedin,
  FaGithub,
  FaWhatsapp,
  FaArrowRight,
  FaPaperPlane,
} from "react-icons/fa";

const contactDetails = [
  {
    title: "Location",
    value: "Yogyakarta, Indonesia",
    icon: FaMapMarkerAlt,
    color: "blue",
    href: "https://maps.google.com/?q=Yogyakarta,Indonesia",
  },
  {
    title: "Phone / WhatsApp",
    value: "+62 889-8379-1081",
    icon: FaPhoneAlt,
    color: "green",
    href: "https://wa.me/6288983791081",
  },
  {
    title: "Email Address",
    value: "bentohariyono00@gmail.com",
    icon: FaEnvelope,
    color: "orange",
    href: "mailto:bentohariyono00@gmail.com",
  },
  {
    title: "Availability",
    value: "Open to opportunities",
    icon: FaClock,
    color: "violet",
    href: null,
  },
];

const socialLinks = [
  {
    label: "LinkedIn",
    icon: FaLinkedin,
    href: "https://www.linkedin.com/in/bento-haryono-01a4ba257",
    hover: "hover:bg-blue-600 hover:border-blue-600",
    color: "text-blue-600 dark:text-blue-400",
  },
  {
    label: "GitHub",
    icon: FaGithub,
    href: "https://github.com/Hariyono20",
    hover:
      "hover:bg-gray-900 hover:border-gray-900 dark:hover:bg-gray-600 dark:hover:border-gray-600",
    color: "text-gray-800 dark:text-gray-200",
  },
  {
    label: "WhatsApp",
    icon: FaWhatsapp,
    href: "https://wa.me/6288983791081",
    hover: "hover:bg-green-600 hover:border-green-600",
    color: "text-green-600 dark:text-green-400",
  },
];

const colorStyles = {
  blue: {
    icon: "bg-blue-50 text-blue-600 dark:bg-blue-500/10 dark:text-blue-400",
    border: "group-hover:border-blue-500/50",
  },
  green: {
    icon: "bg-green-50 text-green-600 dark:bg-green-500/10 dark:text-green-400",
    border: "group-hover:border-green-500/50",
  },
  orange: {
    icon: "bg-orange-50 text-orange-600 dark:bg-orange-500/10 dark:text-orange-400",
    border: "group-hover:border-orange-500/50",
  },
  violet: {
    icon: "bg-violet-50 text-violet-600 dark:bg-violet-500/10 dark:text-violet-400",
    border: "group-hover:border-violet-500/50",
  },
};

export default function Contact() {
  const shouldReduceMotion = useReducedMotion();

  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [feedback, setFeedback] = useState("");

  const fadeUp = {
    hidden: { opacity: 0, y: shouldReduceMotion ? 0 : 24 },
    visible: { opacity: 1, y: 0 },
  };

  const transition = shouldReduceMotion
    ? { duration: 0 }
    : { duration: 0.55, ease: "easeOut" };

  const handleChange = (event) => {
    const { name, value } = event.target;

    setForm((previous) => ({
      ...previous,
      [name]: value,
    }));

    if (feedback) setFeedback("");
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const recipient = "bentohariyono00@gmail.com";
    const subject =
      form.subject.trim() || `Portfolio Contact - ${form.name.trim()}`;

    const body = [
      `Halo Bento,`,
      "",
      form.message.trim(),
      "",
      "------------------------------",
      `Nama pengirim: ${form.name.trim()}`,
      `Email pengirim: ${form.email.trim()}`,
    ].join("\n");

    const mailtoUrl = `mailto:${recipient}?subject=${encodeURIComponent(
      subject,
    )}&body=${encodeURIComponent(body)}`;

    setFeedback(
      "Membuka aplikasi email. Periksa kembali pesan dan kirim melalui aplikasi email kamu.",
    );

    window.location.href = mailtoUrl;
  };

  return (
    <section
      id="contact"
      className="scroll-mt-24 overflow-hidden bg-gray-50 py-20 text-gray-900 dark:bg-gray-900 dark:text-gray-100 sm:py-24"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section heading */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.25 }}
          transition={transition}
          className="mx-auto mb-14 max-w-2xl text-center"
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-blue-200 bg-blue-50 px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-blue-700 dark:border-blue-500/20 dark:bg-blue-500/10 dark:text-blue-400">
            <FaEnvelope />
            Contact Me
          </span>

          <h2 className="mt-5 text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl lg:text-5xl">
            Let&apos;s Work{" "}
            <span className="text-blue-600 dark:text-blue-400">Together</span>
          </h2>

          <p className="mx-auto mt-4 max-w-xl text-sm leading-7 text-gray-600 dark:text-gray-400 sm:text-base">
            Punya ide proyek, peluang kerja, atau ingin berdiskusi? Jangan ragu
            untuk menghubungi saya.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 items-start gap-8 lg:grid-cols-5 lg:gap-10">
          {/* Contact form */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.15 }}
            transition={{ ...transition, delay: 0.08 }}
            className="rounded-3xl border border-gray-200 bg-white p-5 shadow-sm shadow-gray-900/[0.03] dark:border-gray-700/80 dark:bg-gray-800/80 sm:p-8 lg:col-span-3 lg:p-9"
          >
            <div className="mb-7 flex items-start gap-4">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-blue-50 text-xl text-blue-600 dark:bg-blue-500/10 dark:text-blue-400">
                <FaPaperPlane />
              </div>

              <div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white sm:text-2xl">
                  Send Me a Message
                </h3>
                <p className="mt-1 text-sm leading-6 text-gray-500 dark:text-gray-400">
                  Isi formulir berikut untuk menyiapkan pesan email.
                </p>
              </div>
            </div>

            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                <div>
                  <label
                    htmlFor="contact-name"
                    className="mb-2 block text-sm font-semibold text-gray-700 dark:text-gray-300"
                  >
                    Nama <span className="text-blue-500">*</span>
                  </label>

                  <input
                    id="contact-name"
                    type="text"
                    name="name"
                    placeholder="Nama lengkap kamu"
                    value={form.name}
                    onChange={handleChange}
                    autoComplete="name"
                    maxLength={100}
                    required
                    className="w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-3.5 text-sm text-gray-900 outline-none transition-all placeholder:text-gray-400 hover:border-gray-300 focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 dark:border-gray-600 dark:bg-gray-900/60 dark:text-white dark:placeholder:text-gray-500 dark:hover:border-gray-500 dark:focus:border-blue-400"
                  />
                </div>

                <div>
                  <label
                    htmlFor="contact-email"
                    className="mb-2 block text-sm font-semibold text-gray-700 dark:text-gray-300"
                  >
                    Email <span className="text-blue-500">*</span>
                  </label>

                  <input
                    id="contact-email"
                    type="email"
                    name="email"
                    placeholder="nama@email.com"
                    value={form.email}
                    onChange={handleChange}
                    autoComplete="email"
                    maxLength={254}
                    required
                    className="w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-3.5 text-sm text-gray-900 outline-none transition-all placeholder:text-gray-400 hover:border-gray-300 focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 dark:border-gray-600 dark:bg-gray-900/60 dark:text-white dark:placeholder:text-gray-500 dark:hover:border-gray-500 dark:focus:border-blue-400"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="contact-subject"
                  className="mb-2 block text-sm font-semibold text-gray-700 dark:text-gray-300"
                >
                  Subject
                </label>

                <input
                  id="contact-subject"
                  type="text"
                  name="subject"
                  placeholder="Topik pesan kamu"
                  value={form.subject}
                  onChange={handleChange}
                  maxLength={150}
                  className="w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-3.5 text-sm text-gray-900 outline-none transition-all placeholder:text-gray-400 hover:border-gray-300 focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 dark:border-gray-600 dark:bg-gray-900/60 dark:text-white dark:placeholder:text-gray-500 dark:hover:border-gray-500 dark:focus:border-blue-400"
                />
              </div>

              <div>
                <label
                  htmlFor="contact-message"
                  className="mb-2 block text-sm font-semibold text-gray-700 dark:text-gray-300"
                >
                  Pesan <span className="text-blue-500">*</span>
                </label>

                <textarea
                  id="contact-message"
                  name="message"
                  placeholder="Ceritakan ide, pertanyaan, atau peluang yang ingin kamu diskusikan..."
                  value={form.message}
                  onChange={handleChange}
                  rows={5}
                  maxLength={5000}
                  required
                  className="w-full resize-y rounded-xl border border-gray-200 bg-gray-50 px-4 py-3.5 text-sm leading-6 text-gray-900 outline-none transition-all placeholder:text-gray-400 hover:border-gray-300 focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 dark:border-gray-600 dark:bg-gray-900/60 dark:text-white dark:placeholder:text-gray-500 dark:hover:border-gray-500 dark:focus:border-blue-400"
                />

                <p className="mt-2 text-right text-xs text-gray-400 dark:text-gray-500">
                  {form.message.length}/5000 karakter
                </p>
              </div>

              {feedback && (
                <p
                  role="status"
                  aria-live="polite"
                  className="rounded-xl border border-blue-200 bg-blue-50 px-4 py-3 text-sm leading-6 text-blue-800 dark:border-blue-500/20 dark:bg-blue-500/10 dark:text-blue-300"
                >
                  {feedback}
                </p>
              )}

              <motion.button
                type="submit"
                whileHover={shouldReduceMotion ? undefined : { y: -2 }}
                whileTap={shouldReduceMotion ? undefined : { scale: 0.98 }}
                className="group flex w-full items-center justify-center gap-3 rounded-xl bg-blue-600 px-5 py-4 text-sm font-semibold text-white shadow-lg shadow-blue-600/20 transition-colors hover:bg-blue-700 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-blue-500/30"
              >
                <FaPaperPlane className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-0.5" />
                Open Email to Send
                <FaArrowRight className="text-xs transition-transform duration-300 group-hover:translate-x-1" />
              </motion.button>

              <p className="text-center text-xs leading-5 text-gray-500 dark:text-gray-400">
                Pesan akan disiapkan di aplikasi email kamu. Pesan tidak dikirim
                otomatis oleh website ini.
              </p>
            </form>
          </motion.div>

          {/* Contact information */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.15 }}
            transition={{ ...transition, delay: 0.16 }}
            className="flex flex-col gap-6 lg:col-span-2"
          >
            <div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white sm:text-3xl">
                Get in Touch
              </h3>

              <p className="mt-3 text-sm leading-7 text-gray-600 dark:text-gray-400 sm:text-base">
                Saya terbuka untuk peluang sebagai Junior Frontend Developer,
                Web Developer, kolaborasi proyek, dan diskusi seputar
                pengembangan web.
              </p>
            </div>

            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-1">
              {contactDetails.map(
                ({ title, value, icon: Icon, color, href }, index) => {
                  const styles = colorStyles[color];

                  const content = (
                    <>
                      <div
                        className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl text-lg transition-transform duration-300 group-hover:scale-110 ${styles.icon}`}
                      >
                        <Icon />
                      </div>

                      <div className="min-w-0 flex-1">
                        <p className="text-xs font-medium uppercase tracking-wider text-gray-500 dark:text-gray-400">
                          {title}
                        </p>
                        <p className="mt-1 break-words text-sm font-semibold leading-6 text-gray-800 dark:text-gray-200">
                          {value}
                        </p>
                      </div>

                      {href && (
                        <FaArrowRight className="shrink-0 text-xs text-gray-400 transition-all duration-300 group-hover:translate-x-1 group-hover:text-blue-600 dark:group-hover:text-blue-400" />
                      )}
                    </>
                  );

                  const cardClassName = `group flex min-w-0 items-center gap-4 rounded-2xl border border-gray-200 bg-white p-4 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md dark:border-gray-700 dark:bg-gray-800/80 sm:p-5 ${styles.border}`;

                  return href ? (
                    <motion.a
                      key={title}
                      href={href}
                      target={
                        href.startsWith("https://maps.google.com")
                          ? "_blank"
                          : undefined
                      }
                      rel="noopener noreferrer"
                      variants={fadeUp}
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: true, amount: 0.2 }}
                      transition={{
                        ...transition,
                        delay: shouldReduceMotion ? 0 : index * 0.07,
                      }}
                      className={cardClassName}
                    >
                      {content}
                    </motion.a>
                  ) : (
                    <motion.div
                      key={title}
                      variants={fadeUp}
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: true, amount: 0.2 }}
                      transition={{
                        ...transition,
                        delay: shouldReduceMotion ? 0 : index * 0.07,
                      }}
                      className={cardClassName}
                    >
                      {content}
                    </motion.div>
                  );
                },
              )}
            </div>

            {/* Social links */}
            <div className="rounded-2xl border border-gray-200 bg-white p-5 dark:border-gray-700 dark:bg-gray-800/80 sm:p-6">
              <h4 className="text-sm font-bold text-gray-900 dark:text-white">
                Connect with me
              </h4>

              <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
                Temukan profil dan aktivitas saya secara online.
              </p>

              <div className="mt-5 flex flex-wrap gap-3">
                {socialLinks.map(
                  ({ label, icon: Icon, href, hover, color }, index) => (
                    <motion.a
                      key={label}
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`Kunjungi ${label}`}
                      title={label}
                      initial={
                        shouldReduceMotion ? false : { opacity: 0, y: 8 }
                      }
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{
                        ...transition,
                        delay: shouldReduceMotion ? 0 : index * 0.08,
                      }}
                      whileHover={shouldReduceMotion ? undefined : { y: -3 }}
                      whileTap={
                        shouldReduceMotion ? undefined : { scale: 0.94 }
                      }
                      className={`flex h-12 w-12 items-center justify-center rounded-xl border border-gray-200 bg-gray-50 transition-colors duration-300 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 dark:border-gray-600 dark:bg-gray-900/60 ${color} ${hover}`}
                    >
                      <Icon size={20} />
                    </motion.a>
                  ),
                )}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
