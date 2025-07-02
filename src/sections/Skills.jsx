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
import { useEffect, useState } from "react";
import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";

ChartJS.register(ArcElement, Tooltip, Legend);

function CircularProgress({ percent, size = 100, strokeWidth = 8 }) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    let start = 0;
    const duration = 1000; // total durasi animasi
    const increment = percent / (duration / 16); // naik tiap frame
    const interval = setInterval(() => {
      start += increment;
      if (start >= percent) {
        start = percent;
        clearInterval(interval);
      }
      setProgress(Math.round(start));
    }, 16); // 60fps
    return () => clearInterval(interval);
  }, [percent]);

  const radius = (size - strokeWidth) / 2;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (progress / 100) * circumference;

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
      />
      <text
        x="50%"
        y="50%"
        dominantBaseline="middle"
        textAnchor="middle"
        fontSize="16"
        fill="#3b82f6"
        fontWeight="bold"
      >
        {progress}%
      </text>
    </svg>
  );
}

export default function Skills() {
  const skills = [
    {
      name: "HTML",
      icon: <FaHtml5 className="text-orange-600" />,
      percent: 90,
    },
    { name: "CSS", icon: <FaCss3Alt className="text-blue-500" />, percent: 85 },
    {
      name: "JavaScript",
      icon: <FaJs className="text-yellow-400" />,
      percent: 66,
    },
    { name: "React", icon: <FaReact className="text-cyan-400" />, percent: 85 },
    {
      name: "Tailwind CSS",
      icon: <SiTailwindcss className="text-sky-400" />,
      percent: 80,
    },
    {
      name: "Python",
      icon: <FaPython className="text-yellow-500" />,
      percent: 85,
    },
    { name: "MySQL", icon: <SiMysql className="text-blue-700" />, percent: 83 },
    {
      name: "SQL",
      icon: <SiPostgresql className="text-indigo-600" />,
      percent: 78,
    },
    {
      name: "MongoDB",
      icon: <SiMongodb className="text-green-600" />,
      percent: 80,
    },
    { name: "Figma", icon: <FaFigma className="text-pink-500" />, percent: 80 },
    {
      name: "GitHub",
      icon: <FaGithub className="text-gray-800 dark:text-white" />,
      percent: 85,
    },
  ];

  const avgPercent = Math.round(
    skills.reduce((sum, s) => sum + s.percent, 0) / skills.length
  );

  const chartData = {
    labels: skills.map((s) => s.name),
    datasets: [
      {
        label: "Skill %",
        data: skills.map((s) => s.percent),
        backgroundColor: [
          "#f97316",
          "#3b82f6",
          "#facc15",
          "#22d3ee",
          "#38bdf8",
          "#eab308",
          "#2563eb",
          "#6366f1",
          "#10b981",
          "#ec4899",
          "#6b7280",
        ],
        borderWidth: 1,
      },
    ],
  };

  const chartOptions = {
    cutout: "83%",
    plugins: {
      legend: { display: false },
      tooltip: {
        callbacks: {
          label: (tooltipItem) => `${tooltipItem.label}: ${tooltipItem.raw}%`,
        },
      },
    },
    animation: {
      animateRotate: true,
      duration: 1500,
      easing: "easeInOutCubic",
    },
  };

  const centerTextPlugin = {
    id: "centerText",
    beforeDraw: (chart) => {
      const { width, height } = chart;
      const ctx = chart.ctx;
      ctx.restore();

      const title = "Total Skill";
      const subtitle = `${avgPercent}%`;

      ctx.textBaseline = "middle";
      ctx.textAlign = "center";

      ctx.font = "bold 20px sans-serif";
      ctx.fillStyle = "#1e3a8a";
      ctx.fillText(title, width / 2, height / 2 - 15);

      ctx.font = "bold 26px sans-serif";
      ctx.fillStyle = "#3b82f6";
      ctx.fillText(subtitle, width / 2, height / 2 + 20);

      ctx.save();
    },
  };

  return (
    <section id="skills" className="py-24 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-center text-gray-800 dark:text-white mb-14">
          Skills Overview
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14">
          {/* Kiri: Skill Lingkaran */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-8">
            {skills.map((skill, idx) => (
              <div
                key={idx}
                className="flex flex-col items-center bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 transform transition duration-300 hover:scale-105 cursor-pointer"
              >
                <div className="text-4xl mb-3">{skill.icon}</div>
                <CircularProgress percent={skill.percent} />
                <p className="text-base font-medium text-gray-700 dark:text-gray-200 mt-3">
                  {skill.name}
                </p>
              </div>
            ))}
          </div>

          {/* Kanan: Diagram */}
          <div className="flex flex-col items-center bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8">
            <h3 className="text-2xl font-semibold text-gray-800 dark:text-white mb-6 self-start">
              Statistik Visual
            </h3>

            <div className="w-80 h-80 mb-6">
              <Doughnut
                data={chartData}
                options={chartOptions}
                plugins={[centerTextPlugin]}
              />
            </div>

            {/* Nama dan logo skill di bawah diagram */}
            <div className="flex flex-wrap justify-center gap-6 w-full">
              {skills.map((skill, idx) => (
                <div key={idx} className="flex items-center space-x-2">
                  <div className="text-2xl">{skill.icon}</div>
                  <span className="text-gray-700 dark:text-gray-300 font-medium">
                    {skill.name}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
