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
    color: "#9CA3AF",
  },
  Intermediate: {
    percent: 50,
    color: "#64748B",
  },
  Advanced: {
    percent: 75,
    color: "#1E40AF",
  },
  Expert: {
    percent: 100,
    color: "#15803D",
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
    color: "text-blue-600",
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
    color: "text-cyan-600",
    level: "Advanced",
    category: "Frontend",
  },
  {
    name: "Tailwind CSS",
    icon: SiTailwindcss,
    color: "text-sky-600",
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
    color: "text-blue-800",
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
    color: "text-pink-600",
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
  size = 82,
  strokeWidth = 6,
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
            duration: reduceMotion ? 0 : 0.8,
            ease: "easeOut",
          }}
          viewport={{ once: true }}
        />
      </svg>

      <div className="absolute inset-0 flex flex-col items-center justify-center">
        <span className="text-xs font-semibold text-gray-800 dark:text-gray-100">
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

  return (
    <motion.article
      initial={reduceMotion ? false : { opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{
        duration: reduceMotion ? 0 : 0.35,
        delay: reduceMotion ? 0 : (index % 6) * 0.04,
      }}
      viewport={{ once: true, amount: 0.15 }}
      whileHover={reduceMotion ? undefined : { y: -3 }}
      className="group flex min-w-0 flex-col items-center rounded-xl border border-gray-200 bg-white px-3 py-5 text-center transition-all duration-300 hover:border-blue-900/40 hover:shadow-md dark:border-gray-700 dark:bg-gray-800 dark:hover:border-blue-400/50 sm:px-4 sm:py-6"
    >
      <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-lg bg-gray-100 transition-colors duration-300 group-hover:bg-blue-50 dark:bg-gray-700 dark:group-hover:bg-blue-950/50 sm:h-14 sm:w-14">
        <Icon
          className={`text-3xl ${skill.color} transition-transform duration-300 group-hover:scale-105`}
        />
      </div>

      <h3 className="mb-4 min-h-10 text-sm font-semibold leading-5 text-gray-800 dark:text-gray-100 sm:text-base">
        {skill.name}
      </h3>

      <CircularProgress
        level={skill.level}
        size={78}
        strokeWidth={5}
        reduceMotion={reduceMotion}
      />

      <span className="mt-4 text-xs font-medium text-gray-500 dark:text-gray-400">
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
        borderColor: "#FFFFFF",
        borderWidth: 3,
        hoverOffset: 5,
        spacing: 2,
      },
    ],
  };

  const chartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    cutout: "78%",
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        backgroundColor: "#111827",
        padding: 12,
        cornerRadius: 6,
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
      duration: reduceMotion ? 0 : 900,
    },
  };

  return (
    <section
      id="skills"
      className="w-full bg-gray-50 py-20 transition-colors duration-300 dark:bg-gray-900 sm:py-24"
    >
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        {/* Section heading */}
        <motion.div
          initial={reduceMotion ? false : { opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: reduceMotion ? 0 : 0.45 }}
          viewport={{ once: true }}
          className="mb-12 max-w-2xl sm:mb-14"
        >


          <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl md:text-5xl">
            Skills{" "}
            <span className="text-blue-900 dark:text-blue-400">Overview</span>
          </h2>

          <p className="mt-5 max-w-xl text-sm leading-7 text-gray-600 dark:text-gray-400 sm:text-base">
            Teknologi dan tools yang saya gunakan dalam pengembangan antarmuka
            web, pengolahan data, serta perancangan produk digital.
          </p>

          <div className="mt-6 h-1 w-14 rounded-full bg-blue-900 dark:bg-blue-400" />
        </motion.div>

        <div className="grid grid-cols-1 items-start gap-10 lg:grid-cols-5 lg:gap-8">
          {/* Skills list */}
          <div className="min-w-0 lg:col-span-3">
            <div className="mb-5 flex items-center justify-between gap-3 border-b border-gray-200 pb-4 dark:border-gray-700">
             

              <span className="text-sm font-semibold text-gray-600 dark:text-gray-300">
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
              Persentase merupakan indikator visual tingkat penguasaan, bukan
              hasil pengukuran atau sertifikasi resmi.
            </p>
          </div>

          {/* Statistics */}
          <motion.aside
            initial={reduceMotion ? false : { opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: reduceMotion ? 0 : 0.45 }}
            viewport={{ once: true }}
            className="min-w-0 rounded-xl border border-gray-200 bg-white p-5 dark:border-gray-700 dark:bg-gray-800 sm:p-6 lg:col-span-2"
          >
            {/* Panel heading */}
            <div className="mb-5 flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gray-100 text-blue-900 dark:bg-gray-700 dark:text-blue-400">
                <FaChartPie className="text-lg" />
              </div>

              <div>
                <h3 className="text-lg font-bold text-gray-900 dark:text-white">
                  Skill Distribution
                </h3>
                <p className="text-xs text-gray-500 dark:text-gray-400">
                  Berdasarkan tingkat penguasaan
                </p>
              </div>
            </div>

            {/* Doughnut chart */}
            <div className="relative mx-auto h-56 w-full max-w-[260px]">
              <Doughnut data={chartData} options={chartOptions} />

              <div className="pointer-events-none absolute inset-0 flex flex-col items-center justify-center">
                <span className="text-xs text-gray-500 dark:text-gray-400">
                  Total
                </span>
                <span className="mt-1 text-3xl font-bold text-gray-900 dark:text-white">
                  {skills.length}
                </span>
                <span className="text-xs text-gray-500 dark:text-gray-400">
                  skills
                </span>
              </div>
            </div>

            {/* Level summary */}
            <div className="mt-6 space-y-3">
              {activeLevels.map((level) => {
                const config = levelConfig[level];
                const count = levelCount[level];
                const percentage = Math.round((count / skills.length) * 100);

                return (
                  <div
                    key={level}
                    className="flex items-center justify-between border-b border-gray-100 pb-3 last:border-0 dark:border-gray-700"
                  >
                    <div className="flex items-center gap-2">
                      <span
                        className="h-2.5 w-2.5 rounded-full"
                        style={{ backgroundColor: config.color }}
                      />
                      <span className="text-sm text-gray-600 dark:text-gray-300">
                        {level}
                      </span>
                    </div>

                    <div className="flex items-center gap-3">
                      <span className="text-sm font-semibold text-gray-900 dark:text-white">
                        {count}
                      </span>
                      <span className="w-10 text-right text-xs text-gray-500 dark:text-gray-400">
                        {percentage}%
                      </span>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Level breakdown */}
            <div className="mt-7 border-t border-gray-200 pt-5 dark:border-gray-700">
              <h4 className="mb-5 text-sm font-bold text-gray-900 dark:text-white">
                Level Breakdown
              </h4>

              <div className="space-y-4">
                {activeLevels.map((level, index) => {
                  const config = levelConfig[level];
                  const count = levelCount[level];
                  const percentage = (count / skills.length) * 100;

                  return (
                    <div key={level}>
                      <div className="mb-2 flex items-center justify-between text-xs">
                        <span className="font-medium text-gray-700 dark:text-gray-200">
                          {level}
                        </span>
                        <span className="text-gray-500 dark:text-gray-400">
                          {count} dari {skills.length}
                        </span>
                      </div>

                      <div className="h-2 overflow-hidden rounded-full bg-gray-100 dark:bg-gray-700">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: `${percentage}%` }}
                          transition={{
                            duration: reduceMotion ? 0 : 0.7,
                            delay: reduceMotion ? 0 : index * 0.08,
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
            </div>

          </motion.aside>
        </div>
      </div>
    </section>
  );
}
