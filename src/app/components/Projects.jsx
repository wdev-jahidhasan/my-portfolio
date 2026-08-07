'use client';

import Image from 'next/image';
import Link from 'next/link';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import { projectsData } from '../../data/project';

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
          {projectsData.map((project) => (
            <div
              key={project.id}
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
                <div className="p-6">
                  {/* Project Title */}
                  <h3 className="text-xl font-bold text-white group-hover:text-teal-400 transition-colors mb-3">
                    {project.title}
                  </h3>

                  {/* Project Description */}
                  <p className="text-slate-400 text-sm leading-relaxed mb-6">
                    {project.description}
                  </p>

                  {/* Identical Style Buttons Side-by-Side */}
                  <div className="grid grid-cols-2 gap-2">
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center space-x-1.5 text-xs font-medium text-slate-300 hover:text-white bg-slate-800/80 hover:bg-slate-800 py-2 rounded-lg border border-slate-700/60 transition-colors"
                    >
                      <FaGithub className="text-sm" />
                      <span>Code</span>
                    </a>
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center space-x-1.5 text-xs font-medium text-slate-300 hover:text-white bg-slate-800/80 hover:bg-slate-800 py-2 rounded-lg border border-slate-700/60 transition-colors"
                    >
                      <FaExternalLinkAlt className="text-xs" />
                      <span>Live Demo</span>
                    </a>
                  </div>
                </div>
              </div>

              {/* View Details Button in a Separate Bottom Container */}
              <div className="p-4 bg-slate-900/90 border-t border-slate-800/80 mt-auto">
                <Link
                  href={`/projects/${project.id}`}
                  className="block w-full text-center text-xs font-semibold text-teal-400 hover:text-white bg-teal-950/40 hover:bg-teal-600/20 py-2.5 rounded-lg border border-teal-500/30 hover:border-teal-500/50 transition-all shadow-sm"
                >
                  View Details
                </Link>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}