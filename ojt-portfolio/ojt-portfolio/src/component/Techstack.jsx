import React from "react";

const techStack = [
  { name: "HTML5", color: "bg-orange-500" },
  { name: "CSS3", color: "bg-blue-500" },
  { name: "JavaScript", color: "bg-yellow-400 text-black" },
  { name: "React", color: "bg-cyan-500" },
  { name: "Node.js", color: "bg-green-500" },
  { name: "MongoDB", color: "bg-emerald-500" },
  { name: "Express.js", color: "bg-gray-600" },
  { name: "Tailwind CSS", color: "bg-sky-500" },
  { name: "Git", color: "bg-red-500" },
  { name: "GitHub", color: "bg-white text-black" },
];

const TechStack = () => {
  return (
    <div className="min-h-screen bg-gray-900 text-white py-16 px-6">
      <h2 className="text-4xl font-bold text-center mb-12">My Tech Stack</h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 max-w-6xl mx-auto">
        {techStack.map((tech, index) => (
          <div
            key={index}
            className={`rounded-xl shadow-md hover:shadow-lg transition p-6 font-semibold text-center text-lg ${tech.color}`}
          >
            {tech.name}
          </div>
        ))}
      </div>
    </div>
  );
};

export default TechStack;
