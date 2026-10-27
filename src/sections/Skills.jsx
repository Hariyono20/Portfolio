"use client";

import { motion, useReducedMotion } from "framer-motion";
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaPython,
  FaGithub,
  FaFigma,
  FaCode,
  FaDatabase,
  FaChartPie,
} from "react-icons/fa";
import {
  SiTailwindcss,
  SiMysql,
  SiMongodb,
  SiPostgresql,
} from "react-icons/si";
import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";

ChartJS.register(ArcElement, Tooltip, Legend);

const levelConfig = {
  Beginner: {
    percent: 25,
    color: "#f97316",
    light: "bg-orange-500",
  },
  Intermediate: {
    percent: 50,
    color: "#3b82f6",
    light: "bg-blue-500",
  },
  Advanced: {
    percent: 75,
    color: "#8b5cf6",
    light: "bg-violet-500",
  },
  Expert: {
    percent: 100,
    color: "#22c55e",
    light: "bg-green-500",
  },
};

const skills = [
  {
    name: "HTML",
    icon: FaHtml5,
    color: "text-orange-600",
    level: "Advanced",
    category: "Frontend",
  },
  {
    name: "CSS",
    icon: FaCss3Alt,
    color: "text-blue-500",
    level: "Advanced",
    category: "Frontend",
  },
  {
    name: "JavaScript",
    icon: FaJs,
    color: "text-yellow-500",
    level: "Advanced",
    category: "Frontend",
  },
  {
    name: "React.js",
    icon: FaReact,
    color: "text-cyan-500",
    level: "Advanced",
    category: "Frontend",
  },
  {
    name: "Tailwind CSS",
    icon: SiTailwindcss,
    color: "text-sky-500",
    level: "Advanced",
    category: "Frontend",
  },
  {
    name: "Python",
    icon: FaPython,
    color: "text-yellow-600",
    level: "Intermediate",
    category: "Backend",
  },
  {
    name: "MySQL",
    icon: SiMysql,
    color: "text-blue-700",
    level: "Intermediate",
    category: "Database",
  },
  {
    name: "PostgreSQL / SQL",
    icon: SiPostgresql,
    color: "text-indigo-600",
    level: "Intermediate",
    category: "Database",
  },
  {
    name: "MongoDB",
    icon: SiMongodb,
    color: "text-green-600",
    level: "Intermediate",
    category: "Database",
  },
  {
    name: "Figma",
    icon: FaFigma,
    color: "text-pink-500",
    level: "Advanced",
    category: "Design",
  },
  {
    name: "GitHub",
    icon: FaGithub,
    color: "text-gray-800 dark:text-white",
    level: "Advanced",
    category: "Tools",
  },
];

function CircularProgress({
  level,
  size = 88,
  strokeWidth = 7,
  reduceMotion = false,
}) {
  const config = levelConfig[level] || levelConfig.Intermediate;
  const radius = (size - strokeWidth) / 2;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (config.percent / 100) * circumference;

  return (
    <div
      className="relative shrink-0"
      style={{ width: size, height: size }}
      aria-label={`${level}, indikator visual ${config.percent}%`}
    >
      <svg
        width={size}
        height={size}
        viewBox={`0 0 ${size} ${size}`}
        className="-rotate-90"
        role="img"
        aria-hidden="true"
      >
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          fill="none"
          stroke="currentColor"
          strokeWidth={strokeWidth}
          className="text-gray-200 dark:text-gray-700"
        />

        <motion.circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          fill="none"
          stroke={config.color}
          strokeWidth={strokeWidth}
          strokeLinecap="round"
          strokeDasharray={circumference}
          initial={{ strokeDashoffset: circumference }}
          whileInView={{ strokeDashoffset: offset }}
          transition={{
            duration: reduceMotion ? 0 : 1.1,
            ease: "easeOut",
          }}
          viewport={{ once: true }}
        />
      </svg>

      <div className="absolute inset-0 flex flex-col items-center justify-center">
        <span className="text-xs font-bold text-gray-800 dark:text-gray-100">
          {level}
        </span>
        <span className="mt-0.5 text-[10px] text-gray-500 dark:text-gray-400">
          {config.percent}%
        </span>
      </div>
    </div>
  );
}

function SkillCard({ skill, index, reduceMotion }) {
  const Icon = skill.icon;
  const config = levelConfig[skill.level] || levelConfig.Intermediate;

  return (
    <motion.article
      initial={reduceMotion ? false : { opacity: 0, y: 22 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{
        duration: reduceMotion ? 0 : 0.45,
        delay: reduceMotion ? 0 : (index % 6) * 0.07,
      }}
      viewport={{ once: true, amount: 0.15 }}
      whileHover={reduceMotion ? undefined : { y: -6, scale: 1.015 }}
      className="group relative flex min-w-0 flex-col items-center overflow-hidden rounded-2xl border border-gray-200 bg-white p-4 text-center shadow-sm transition-colors duration-300 hover:border-blue-300 hover:shadow-xl hover:shadow-blue-500/10 dark:border-gray-700 dark:bg-gray-800 dark:hover:border-blue-500/60 sm:p-5"
    >
      {/* Garis aksen */}
      <div
        className="absolute left-0 top-0 h-1 w-full origin-left scale-x-0 transition-transform duration-300 group-hover:scale-x-100"
        style={{ backgroundColor: config.color }}
      />

      <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-xl bg-gray-50 transition-colors duration-300 group-hover:bg-blue-50 dark:bg-gray-700/60 dark:group-hover:bg-blue-400/10 sm:h-14 sm:w-14">
        <Icon
          className={`text-3xl transition-transform duration-300 group-hover:scale-110 sm:text-4xl ${skill.color}`}
        />
      </div>

      <h3 className="mb-4 min-h-10 text-sm font-bold leading-5 text-gray-800 dark:text-gray-100 sm:text-base">
        {skill.name}
      </h3>

      <CircularProgress
        level={skill.level}
        size={82}
        strokeWidth={6}
        reduceMotion={reduceMotion}
      />

      <span className="mt-4 rounded-full bg-gray-100 px-2.5 py-1 text-[11px] font-medium text-gray-600 dark:bg-gray-700 dark:text-gray-300">
        {skill.category}
      </span>
    </motion.article>
  );
}

export default function Skills() {
  const reduceMotion = Boolean(useReducedMotion());

  const levelCount = skills.reduce((acc, skill) => {
    acc[skill.level] = (acc[skill.level] || 0) + 1;
    return acc;
  }, {});

  const orderedLevels = ["Beginner", "Intermediate", "Advanced", "Expert"];
  const activeLevels = orderedLevels.filter((level) => levelCount[level] > 0);

  const chartData = {
    labels: activeLevels,
    datasets: [
      {
        label: "Jumlah skill",
        data: activeLevels.map((level) => levelCount[level]),
        backgroundColor: activeLevels.map((level) => levelConfig[level].color),
        borderColor: "#ffffff",
        borderWidth: 3,
        hoverOffset: 8,
        borderRadius: 5,
        spacing: 2,
      },
    ],
  };

  const chartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    cutout: "76%",
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        backgroundColor: "#111827",
        padding: 12,
        cornerRadius: 8,
        callbacks: {
          label(context) {
            const total = skills.length;
            const count = context.raw;
            const percent = Math.round((count / total) * 100);

            return ` ${context.label}: ${count} skill (${percent}%)`;
          },
        },
      },
    },
    animation: {
      animateRotate: !reduceMotion,
      animateScale: !reduceMotion,
      duration: reduceMotion ? 0 : 1200,
    },
  };

  return (
    <section
      id="skills"
      className="relative w-full overflow-hidden bg-gray-50 py-20 transition-colors duration-500 dark:bg-gray-900 sm:py-24 lg:py-28"
    >
      {/* Dekorasi transparan; warna dasar tidak berubah */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-32 top-32 h-72 w-72 rounded-full bg-blue-400/10 blur-3xl"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-32 bottom-20 h-72 w-72 rounded-full bg-sky-400/10 blur-3xl"
      />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        {/* Header */}
        <motion.div
          initial={reduceMotion ? false : { opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: reduceMotion ? 0 : 0.6 }}
          viewport={{ once: true }}
          className="mx-auto mb-12 max-w-3xl text-center sm:mb-16"
        >
          <span className="mb-4 inline-flex items-center gap-2 rounded-full border border-blue-200 bg-blue-50 px-4 py-2 text-sm font-semibold text-blue-700 dark:border-blue-400/20 dark:bg-blue-400/10 dark:text-blue-300">
            <FaCode />
            Technical Expertise
          </span>

          <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 dark:text-white sm:text-4xl md:text-5xl">
            Skills{" "}
            <span className="text-blue-600 dark:text-blue-400">Overview</span>
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-gray-600 dark:text-gray-400 sm:text-base">
            Teknologi dan tools yang saya gunakan dalam pengembangan antarmuka
            web, pengolahan data, dan perancangan produk digital.
          </p>

          <motion.div
            initial={reduceMotion ? false : { width: 0 }}
            whileInView={{ width: 72 }}
            transition={{ duration: reduceMotion ? 0 : 0.7 }}
            viewport={{ once: true }}
            className="mx-auto mt-6 h-1 rounded-full bg-blue-600 dark:bg-blue-400"
          />
        </motion.div>

        <div className="grid grid-cols-1 items-start gap-8 lg:grid-cols-5 lg:gap-8 xl:gap-10">
          {/* Daftar skill */}
          <div className="min-w-0 lg:col-span-3">
            <div className="mb-5 flex items-center justify-between gap-3">
              <div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                  My Skills
                </h3>
                <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
                  Teknologi dan perangkat kerja
                </p>
              </div>

              <span className="shrink-0 rounded-full bg-blue-100 px-3 py-1.5 text-xs font-bold text-blue-700 dark:bg-blue-400/10 dark:text-blue-300">
                {skills.length} Skills
              </span>
            </div>

            <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-4">
              {skills.map((skill, index) => (
                <SkillCard
                  key={skill.name}
                  skill={skill}
                  index={index}
                  reduceMotion={reduceMotion}
                />
              ))}
            </div>

            <p className="mt-4 text-xs leading-5 text-gray-500 dark:text-gray-400">
              Persentase lingkaran merupakan indikator visual kategori
              penguasaan, bukan hasil pengukuran atau sertifikasi resmi.
            </p>
          </div>

          {/* Panel statistik */}
          <motion.aside
            initial={reduceMotion ? false : { opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: reduceMotion ? 0 : 0.65 }}
            viewport={{ once: true, amount: 0.1 }}
            className="relative min-w-0 overflow-hidden rounded-3xl border border-gray-200 bg-white p-5 shadow-lg shadow-gray-200/40 dark:border-gray-700 dark:bg-gray-800 dark:shadow-black/10 sm:p-7 lg:col-span-2 lg:p-6 xl:p-7"
          >
            {/* Dekorasi panel */}
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -right-10 -top-10 h-40 w-40 rounded-full bg-blue-300/20 blur-3xl"
            />
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -bottom-10 -left-10 h-40 w-40 rounded-full bg-sky-300/10 blur-3xl"
            />

            <div className="relative">
              <div className="mb-2 flex items-center gap-3">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-50 text-blue-600 dark:bg-blue-400/10 dark:text-blue-400">
                  <FaChartPie className="text-xl" />
                </div>

                <div>
                  <h3 className="text-lg font-bold text-gray-900 dark:text-white">
                    Skill Distribution
                  </h3>
                  <p className="text-xs text-gray-500 dark:text-gray-400">
                    Distribusi berdasarkan level
                  </p>
                </div>
              </div>

              <p className="mb-5 text-sm leading-6 text-gray-600 dark:text-gray-300">
                Ringkasan jumlah skill pada setiap kategori penguasaan.
              </p>

              {/* Grafik */}
              <div className="relative mx-auto h-56 w-full max-w-[280px] sm:h-64">
                <Doughnut data={chartData} options={chartOptions} />

                <div className="pointer-events-none absolute inset-0 flex flex-col items-center justify-center">
                  <span className="text-xs font-medium text-gray-500 dark:text-gray-400">
                    Total
                  </span>
                  <span className="mt-1 text-3xl font-extrabold text-blue-600 dark:text-blue-400">
                    {skills.length}
                  </span>
                  <span className="text-xs text-gray-500 dark:text-gray-400">
                    skills
                  </span>
                </div>
              </div>

              {/* Ringkasan kategori */}
              <div className="mt-5 grid grid-cols-2 gap-3">
                {activeLevels.map((level) => {
                  const config = levelConfig[level];
                  const count = levelCount[level];
                  const percentage = Math.round((count / skills.length) * 100);

                  return (
                    <div
                      key={level}
                      className="rounded-xl border border-gray-100 bg-gray-50 p-3 dark:border-gray-700 dark:bg-gray-700/40"
                    >
                      <div className="mb-2 flex items-center gap-2">
                        <span
                          className="h-2.5 w-2.5 shrink-0 rounded-full"
                          style={{ backgroundColor: config.color }}
                        />
                        <span className="text-xs font-medium text-gray-600 dark:text-gray-300">
                          {level}
                        </span>
                      </div>

                      <div className="flex items-end justify-between gap-2">
                        <span className="text-2xl font-extrabold text-gray-900 dark:text-white">
                          {count}
                        </span>
                        <span className="text-xs text-gray-500 dark:text-gray-400">
                          {percentage}%
                        </span>
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Progress bar kategori */}
              <div className="mt-7 space-y-4">
                <h4 className="text-sm font-bold text-gray-800 dark:text-gray-100">
                  Skill Level Breakdown
                </h4>

                {activeLevels.map((level, index) => {
                  const config = levelConfig[level];
                  const count = levelCount[level];
                  const percentage = (count / skills.length) * 100;

                  return (
                    <div key={level}>
                      <div className="mb-2 flex items-center justify-between gap-3 text-xs sm:text-sm">
                        <span className="font-medium text-gray-700 dark:text-gray-200">
                          {level}
                        </span>
                        <span className="text-gray-500 dark:text-gray-400">
                          {count} dari {skills.length}
                        </span>
                      </div>

                      <div className="h-2.5 overflow-hidden rounded-full bg-gray-100 dark:bg-gray-700">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: `${percentage}%` }}
                          transition={{
                            duration: reduceMotion ? 0 : 0.8,
                            delay: reduceMotion ? 0 : index * 0.1,
                            ease: "easeOut",
                          }}
                          viewport={{ once: true }}
                          className="h-full rounded-full"
                          style={{ backgroundColor: config.color }}
                        />
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Catatan */}
              <div className="mt-7 flex gap-3 rounded-xl border border-blue-100 bg-blue-50/70 p-4 dark:border-blue-400/15 dark:bg-blue-400/5">
                <FaDatabase className="mt-0.5 shrink-0 text-blue-600 dark:text-blue-400" />
                <p className="text-xs leading-6 text-gray-600 dark:text-gray-300">
                  Kategori dan jumlah pada grafik diperbarui secara otomatis
                  mengikuti daftar skill yang ditampilkan.
                </p>
              </div>
            </div>
          </motion.aside>
        </div>
      </div>
    </section>
  );
}
