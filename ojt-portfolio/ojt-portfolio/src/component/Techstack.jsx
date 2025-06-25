import React from "react";

const techStack = [
  { name: "HTML5", color: "bg-orange-100", text: "text-orange-600" },
  { name: "CSS3", color: "bg-blue-100", text: "text-blue-600" },
  { name: "JavaScript", color: "bg-yellow-100", text: "text-yellow-600" },
  { name: "React", color: "bg-cyan-100", text: "text-cyan-600" },
  { name: "Node.js", color: "bg-green-100", text: "text-green-600" },
  { name: "MongoDB", color: "bg-emerald-100", text: "text-emerald-600" },
  { name: "Express.js", color: "bg-gray-100", text: "text-gray-700" },
  { name: "Tailwind CSS", color: "bg-sky-100", text: "text-sky-600" },
  { name: "Git", color: "bg-red-100", text: "text-red-600" },
  { name: "GitHub", color: "bg-gray-200", text: "text-gray-900" },
];

const TechStack = () => {
  return (
    <div className="min-h-screen bg-white py-12 px-6">
      <h2 className="text-3xl font-bold text-center mb-8">My Tech Stack</h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 max-w-5xl mx-auto">
        {techStack.map((tech, index) => (
          <div
            key={index}
            className={`rounded-xl shadow-md hover:shadow-lg transition p-6 ${tech.color} ${tech.text} font-semibold text-center text-lg`}
          >
            {tech.name}
          </div>
        ))}
      </div>
    </div>
  );
};

export default TechStack;
