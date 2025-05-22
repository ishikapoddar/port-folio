import React from 'react';
import { FaReact, FaNodeJs, FaJava, FaCode } from 'react-icons/fa';
import { SiNextdotjs, SiJavascript, SiTailwindcss, SiSolidity } from 'react-icons/si';

function Skills() {
  const skills = [
    { name: 'React', icon: <FaReact className="text-blue-500" size={40} /> },
    { name: 'Next.js', icon: <SiNextdotjs className="text-black" size={36} /> },
    { name: 'Java', icon: <FaJava className="text-red-600" size={40} /> },
    { name: 'JavaScript', icon: <SiJavascript className="text-yellow-400" size={36} /> },
    { name: 'Tailwind CSS', icon: <SiTailwindcss className="text-sky-400" size={40} /> },
    { name: 'Node.js', icon: <FaNodeJs className="text-green-600" size={40} /> },
    { name: 'Solidity', icon: <SiSolidity className="text-gray-800" size={36} /> },
    { name: 'C', icon: <FaCode className="text-indigo-500" size={40} /> },
    { name: 'C++', icon: <FaCode className="text-indigo-700" size={40} /> },
  ];

  return (
    <section id="skills" className="py-20 px-6">
      <h2 className="text-4xl font-bold mb-12 text-center text-white">Skills</h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
        {skills.map((skill, index) => (
          <div
            key={index}
            className="flex flex-col items-center justify-center p-6 bg-gray-50 rounded-xl shadow hover:scale-105 transition-transform duration-300"
          >
            {skill.icon}
            <p className="mt-4 text-lg font-medium text-gray-700">{skill.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;
