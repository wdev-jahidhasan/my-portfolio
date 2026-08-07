'use client';

import Image from 'next/image';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

const projects = [
  {
    title: 'Drive Fleet',
    description:
      'A modern, responsive full-stack car rental platform where users can browse available cars, book rentals, manage their bookings, and add their own cars for rent.',
    techStack: ['Next.js', 'Express.js', 'MongoDB', 'Better Auth', 'JWT', 'Tailwind CSS'],
    liveUrl: 'https://drive-fleet-client-gamma.vercel.app/',
    githubUrl: 'https://github.com/wdev-jahidhasan/drive-fleet-client',
    imageUrl: '/images/drive-fleet.png',
  },
  {
    title: 'Summer Cart',
    description:
      'Summer Cart is a summer-themed eCommerce web application where users can browse seasonal products, view details, and place orders after authentication.',
    techStack: ['Next.js', 'BetterAuth', 'MongoDB', 'Tailwind', 'DaisyUI'],
    liveUrl: 'https://summer-cart-next-tvg3.vercel.app/',
    githubUrl: 'https://github.com/wdev-jahidhasan/summer-cart-next',
    imageUrl: '/images/summer-cart-2.png',
  },
  // {
  //   title: 'Keen Keeper',
  //   description:
  //     'KeenKeeper is a modern web application that helps you track and manage your interactions with friends and family. Whether it has a phone call, text message, or video chat, it keeps your social connections organized and easy to monitor.',
  //   techStack: ['Next.js', 'Context API', 'Recharts', 'Tailwind CSS', 'DaisyUI'],
  //   liveUrl: 'https://keen-keeper-gules-psi.vercel.app',
  //   githubUrl: 'https://github.com/wdev-jahidhasan/keen-keeper',
  //   imageUrl: '/images/keen-keeper.png',
  // },
  {
    title: 'DigiTools Purchase',
    description:
      'DigiTools Purchase is a simple and responsive React-based web application where users can browse and purchase different types of digital products and tools.',
    techStack: ['React.js', 'Tailwind CSS', 'DaisyUI', 'React-Toastify '],
    liveUrl: 'https://digitools-purchase-react.netlify.app',
    githubUrl: 'https://github.com/wdev-jahidhasan/digitools-purchase',
    imageUrl: '/images/digitools-purchase.png',
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-20 bg-slate-950 text-white relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Heading */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">
            Featured{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 via-emerald-400 to-orange-400">
              Projects
            </span>
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-teal-400 to-orange-400 mx-auto mt-4 rounded-full" />
        </div>

        {/* Projects Grid: 3*1 layout on medium/large screens */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="flex flex-col justify-between overflow-hidden rounded-2xl bg-slate-900/60 border border-slate-800/80 backdrop-blur-sm hover:border-slate-700 hover:shadow-xl hover:shadow-teal-500/5 transition-all duration-300 group"
            >
              <div>
                {/* Project Image Container */}
                <div className="relative w-full h-52 sm:h-60 overflow-hidden bg-slate-800">
                  <Image
                    src={project.imageUrl}
                    alt={project.title}
                    fill
                    className="object-cover object-top group-hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </div>

                {/* Content Details */}
                <div className="p-6 pb-0">
                  {/* Project Title */}
                  <h3 className="text-xl font-bold text-white group-hover:text-teal-400 transition-colors mb-3">
                    {project.title}
                  </h3>

                  {/* Project Description */}
                  <p className="text-slate-400 text-sm leading-relaxed mb-4">
                    {project.description}
                  </p>

                  {/* External Links */}
                  <div className="flex items-center space-x-4 mb-6">
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center space-x-1.5 text-xs text-slate-300 hover:text-white transition-colors bg-slate-800/80 px-3 py-1.5 rounded-lg border border-slate-700/60"
                    >
                      <FaGithub className="text-sm" />
                      <span>Code</span>
                    </a>
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center space-x-1.5 text-xs text-teal-400 hover:text-teal-300 transition-colors bg-teal-500/10 px-3 py-1.5 rounded-lg border border-teal-500/20"
                    >
                      <FaExternalLinkAlt className="text-xs" />
                      <span>Live Demo</span>
                    </a>
                  </div>
                </div>
              </div>

              {/* Tech Stack Badges at the bottom */}
              <div className="flex flex-wrap gap-2 p-6 pt-4 border-t border-slate-800/60">
                {project.techStack.map((tech, techIndex) => (
                  <span
                    key={techIndex}
                    className="text-xs px-2.5 py-1 rounded-md bg-slate-800 text-white font-medium border border-slate-700/50"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}