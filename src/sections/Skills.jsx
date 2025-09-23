"use client";

import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaPython,
  FaGithub,
  FaFigma,
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

// Circular progress dengan label level
function CircularProgress({ level, size = 90, strokeWidth = 7 }) {
  const levelMap = {
    Beginner: 25,
    Intermediate: 50,
    Advanced: 75,
    Expert: 100,
  };

  const percent = levelMap[level] || 50;
  const radius = (size - strokeWidth) / 2;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (percent / 100) * circumference;

  return (
    <svg width={size} height={size} className="mx-auto">
      <circle
        stroke="#e5e7eb"
        fill="transparent"
        strokeWidth={strokeWidth}
        r={radius}
        cx={size / 2}
        cy={size / 2}
      />
      <circle
        stroke="#3b82f6"
        fill="transparent"
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeDasharray={circumference}
        strokeDashoffset={offset}
        r={radius}
        cx={size / 2}
        cy={size / 2}
        className="transition-all duration-700 ease-in-out"
      />
      <text
        x="50%"
        y="50%"
        dominantBaseline="middle"
        textAnchor="middle"
        fontSize="11"
        fill="#1e3a8a"
        fontWeight="600"
      >
        {level}
      </text>
    </svg>
  );
}

export default function Skills() {
  const skills = [
    {
      name: "HTML",
      icon: <FaHtml5 className="text-orange-600" />,
      level: "Expert",
    },
    {
      name: "CSS",
      icon: <FaCss3Alt className="text-blue-500" />,
      level: "Advanced",
    },
    {
      name: "JavaScript",
      icon: <FaJs className="text-yellow-400" />,
      level: "Advanced",
    },
    {
      name: "React",
      icon: <FaReact className="text-cyan-400" />,
      level: "Advanced",
    },
    {
      name: "Tailwind CSS",
      icon: <SiTailwindcss className="text-sky-400" />,
      level: "Advanced",
    },
    {
      name: "Python",
      icon: <FaPython className="text-yellow-500" />,
      level: "Advanced",
    },
    {
      name: "MySQL",
      icon: <SiMysql className="text-blue-700" />,
      level: "Intermediate",
    },
    {
      name: "SQL",
      icon: <SiPostgresql className="text-indigo-600" />,
      level: "Intermediate",
    },
    {
      name: "MongoDB",
      icon: <SiMongodb className="text-green-600" />,
      level: "Intermediate",
    },
    {
      name: "Figma",
      icon: <FaFigma className="text-pink-500" />,
      level: "Advanced",
    },
    {
      name: "GitHub",
      icon: <FaGithub className="text-gray-800 dark:text-white" />,
      level: "Advanced",
    },
  ];

  // Hitung distribusi skill per level
  const levelCount = skills.reduce((acc, s) => {
    acc[s.level] = (acc[s.level] || 0) + 1;
    return acc;
  }, {});

  const chartData = {
    labels: Object.keys(levelCount),
    datasets: [
      {
        label: "Jumlah Skill",
        data: Object.values(levelCount),
        backgroundColor: ["#22c55e", "#3b82f6", "#facc15", "#ef4444"],
        borderWidth: 0,
      },
    ],
  };

  const chartOptions = {
    cutout: "75%",
    plugins: {
      legend: { position: "bottom", labels: { font: { size: 13 } } },
    },
    animation: { animateRotate: true, duration: 1200 },
  };

  return (
    <section id="skills" className="py-24 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-center text-gray-800 dark:text-white mb-14">
          Skills Overview
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Skill Cards */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-8">
            {skills.map((skill, idx) => (
              <div
                key={idx}
                className="flex flex-col items-center bg-white dark:bg-gray-800 rounded-2xl shadow-md hover:shadow-xl p-6 transform transition duration-300 hover:scale-105"
              >
                <div className="text-5xl mb-4">{skill.icon}</div>
                <CircularProgress level={skill.level} />
                <p className="mt-4 text-base font-semibold text-gray-800 dark:text-gray-200">
                  {skill.name}
                </p>
              </div>
            ))}
          </div>

          {/* Statistik Chart */}
          {/* Statistik Skill Modern */}
          <div className="relative flex flex-col items-center bg-white dark:bg-gray-800 rounded-3xl shadow-xl p-10 overflow-hidden">
            {/* Background dekorasi */}
            <div className="absolute top-0 right-0 w-40 h-40 bg-blue-200 dark:bg-blue-500 rounded-full blur-3xl opacity-30"></div>
            <div className="absolute bottom-0 left-0 w-32 h-32 bg-purple-200 dark:bg-purple-500 rounded-full blur-3xl opacity-20"></div>

            {/* Judul */}
            <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-3 z-10">
              Skill Level Distribution
            </h3>
            <p className="text-gray-600 dark:text-gray-300 text-sm mb-8 z-10 text-center max-w-sm">
              Distribusi kemampuan berdasarkan level penguasaan. Grafik ini
              menunjukkan seberapa banyak skill yang ada di tiap kategori.
            </p>

            {/* Chart Doughnut */}
            <div className="relative w-72 h-72 mb-10 z-10">
              <Doughnut data={chartData} options={chartOptions} />
              <div className="absolute inset-0 flex flex-col items-center justify-center">
                <span className="text-sm text-gray-500 dark:text-gray-400">
                  Total
                </span>
                <span className="text-2xl font-extrabold text-blue-600 dark:text-blue-400">
                  {skills.length} Skills
                </span>
              </div>
            </div>

            {/* Custom Legend Cards */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 w-full mb-10 z-10">
              {Object.keys(levelCount).map((level, idx) => {
                const colors = ["#22c55e", "#3b82f6", "#facc15", "#8b5cf6"]; // Beginner, Intermediate, Advanced, Expert
                return (
                  <div
                    key={idx}
                    className="flex flex-col items-center bg-gray-50 dark:bg-gray-700 p-4 rounded-xl shadow-sm hover:shadow-md transition"
                  >
                    <span
                      className="w-4 h-4 rounded-full mb-2"
                      style={{ backgroundColor: colors[idx] }}
                    />
                    <p className="text-sm font-medium text-gray-700 dark:text-gray-200">
                      {level}
                    </p>
                    <p className="text-lg font-bold text-gray-900 dark:text-white">
                      {levelCount[level]}
                    </p>
                  </div>
                );
              })}
            </div>

            {/* Extra: Progress Bar Distribusi */}
            <div className="w-full space-y-4 z-10">
              {Object.entries(levelCount).map(([level, count], idx) => {
                const colors = ["#22c55e", "#3b82f6", "#facc15", "#8b5cf6"];
                const percentage = Math.round((count / skills.length) * 100);
                return (
                  <div key={idx}>
                    <div className="flex justify-between text-sm mb-1">
                      <span className="font-medium text-gray-700 dark:text-gray-200">
                        {level}
                      </span>
                      <span className="text-gray-500 dark:text-gray-400">
                        {percentage}%
                      </span>
                    </div>
                    <div className="w-full h-3 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                      <div
                        className="h-full rounded-full transition-all duration-700"
                        style={{
                          width: `${percentage}%`,
                          backgroundColor: colors[idx],
                        }}
                      ></div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
