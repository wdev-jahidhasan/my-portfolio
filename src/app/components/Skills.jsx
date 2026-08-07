'use client';

import {
  FaReact,
  FaNodeJs,
  FaJsSquare,
  FaGitAlt,
  FaHtml5,
} from 'react-icons/fa';
import {
  SiNextdotjs,
  SiTypescript,
  SiTailwindcss,
  SiExpress,
  SiMongodb,
  SiPostgresql,
  SiJsonwebtokens,
} from 'react-icons/si';
import { TbShieldCheck } from 'react-icons/tb';

const skills = [
  { name: 'HTML5', icon: FaHtml5, color: 'text-orange-600' },
  { name: 'JavaScript', icon: FaJsSquare, color: 'text-yellow-400' },
  // { name: 'TypeScript', icon: SiTypescript, color: 'text-blue-500' },
  { name: 'React.js', icon: FaReact, color: 'text-cyan-400' },
  { name: 'Next.js', icon: SiNextdotjs, color: 'text-white' },
  { name: 'Tailwind CSS', icon: SiTailwindcss, color: 'text-sky-400' },
  { name: 'Node.js', icon: FaNodeJs, color: 'text-green-500' },
  { name: 'Express.js', icon: SiExpress, color: 'text-slate-300' },
  { name: 'MongoDB', icon: SiMongodb, color: 'text-emerald-500' },
  // { name: 'PostgreSQL', icon: SiPostgresql, color: 'text-blue-400' },
  { name: 'Better Auth', icon: TbShieldCheck, color: 'text-teal-400' },
  { name: 'JWT', icon: SiJsonwebtokens, color: 'text-pink-500' },
  { name: 'Git & GitHub', icon: FaGitAlt, color: 'text-orange-500' },
];

export default function Skills() {
  const duplicatedSkills = [...skills, ...skills];

  return (
    <section id="skills" className="py-20 bg-slate-950 text-white overflow-hidden relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mb-12 text-center">
        {/* Section Heading */}
        <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">
          Tech Stack &{' '}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 via-emerald-400 to-orange-400">
            Skills
          </span>
        </h2>
        <div className="w-16 h-1 bg-gradient-to-r from-teal-400 to-orange-400 mx-auto mt-4 rounded-full" />
      </div>

      {/* Edge Blur Overlays */}
      <div className="relative w-full overflow-hidden before:absolute before:left-0 before:top-0 before:z-10 before:h-full before:w-20 before:bg-gradient-to-r before:from-slate-950 before:to-transparent after:absolute after:right-0 after:top-0 after:z-10 after:h-full after:w-20 after:bg-gradient-to-l after:from-slate-950 after:to-transparent">
        
        {/* Scrolling Track */}
        <div className="flex w-max space-x-6 animate-scroll hover:[animation-play-state:paused] py-2">
          {duplicatedSkills.map((skill, index) => {
            const IconComponent = skill.icon;
            return (
              <div
                key={index}
                className="flex items-center space-x-4 px-6 py-4 rounded-xl bg-slate-900/60 border border-slate-800/80 backdrop-blur-sm hover:border-teal-500/50 hover:bg-slate-900 transition duration-300 group"
              >
                <IconComponent className={`text-3xl ${skill.color} transition-transform duration-300 group-hover:scale-110`} />
                <span className="text-base font-semibold text-slate-200 group-hover:text-white transition-colors">
                  {skill.name}
                </span>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}