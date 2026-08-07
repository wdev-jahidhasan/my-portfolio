import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { 
  FaGithub, 
  FaExternalLinkAlt, 
  FaArrowLeft, 
  FaCheckCircle,
} from 'react-icons/fa';

import { projectsData } from '../../../data/project';

export default async function DetailsPage({ params }) {
  const { id } = await params;

  const project = projectsData.find((p) => p.id === id);

  if (!project) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-slate-950 text-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        
        {/* Back Button */}
        <Link
          href="/#projects"
          className="inline-flex items-center space-x-2 text-sm text-slate-400 hover:text-teal-400 transition-colors mb-8 group"
        >
          <FaArrowLeft className="group-hover:-translate-x-1 transition-transform" />
          <span>Back to Projects</span>
        </Link>

        {/* Project Header */}
        <h1 className="text-3xl sm:text-5xl font-bold tracking-tight mb-6">
          {project.title}
        </h1>

        {/* Project Image */}
        <div className="relative w-full h-64 sm:h-96 rounded-2xl overflow-hidden border border-slate-800 mb-8 bg-slate-900">
          <Image
            src={project.imageUrl}
            alt={project.title}
            fill
            className="object-cover object-top"
            priority
          />
        </div>

        {/* Action Buttons */}
        <div className="flex flex-wrap gap-4 mb-10">
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center space-x-2 bg-teal-500 hover:bg-teal-600 text-slate-950 font-semibold px-5 py-2.5 rounded-lg transition-colors text-sm"
          >
            <FaExternalLinkAlt />
            <span>Live Demo</span>
          </a>
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center space-x-2 bg-slate-800 hover:bg-slate-700 text-white font-semibold px-5 py-2.5 rounded-lg border border-slate-700 transition-colors text-sm"
          >
            <FaGithub />
            <span>Source Code</span>
          </a>
        </div>

        {/* Project Overview */}
        <div className="bg-slate-900/60 border border-slate-800 rounded-2xl p-6 sm:p-8 mb-8 backdrop-blur-sm">
          <h2 className="text-xl font-bold mb-4 text-teal-400">Project Overview</h2>
          <p className="text-slate-300 leading-relaxed text-base">
            {project.fullDescription || project.description}
          </p>
        </div>

        {/* Key Features */}
        {project.features && project.features.length > 0 && (
          <div className="bg-slate-900/60 border border-slate-800 rounded-2xl p-6 sm:p-8 mb-8 backdrop-blur-sm">
            <h2 className="text-xl font-bold mb-4 text-teal-400">Key Features</h2>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {project.features.map((feature, idx) => (
                <li key={idx} className="flex items-start space-x-2 text-slate-300 text-sm">
                  <FaCheckCircle className="text-teal-400 mt-1 shrink-0" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Challenges Faced */}
        {project.challenges && project.challenges.length > 0 && (
          <div className="bg-slate-900/60 border border-slate-800 rounded-2xl p-6 sm:p-8 mb-8 backdrop-blur-sm">
            <h2 className="text-xl font-bold mb-4 text-amber-400 flex items-center gap-2">
              <span>Challenges Faced</span>
            </h2>
            <ul className="space-y-3">
              {project.challenges.map((challenge, idx) => (
                <li key={idx} className="flex items-start space-x-3 text-slate-300 text-sm leading-relaxed">
                  <span className="w-2 h-2 rounded-full bg-amber-400 mt-2 shrink-0" />
                  <span>{challenge}</span>
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Potential Improvements & Future Plans */}
        {project.futurePlans && project.futurePlans.length > 0 && (
          <div className="bg-slate-900/60 border border-slate-800 rounded-2xl p-6 sm:p-8 mb-8 backdrop-blur-sm">
            <h2 className="text-xl font-bold mb-4 text-emerald-400 flex items-center gap-2">
              <span>Future Plans & Improvements</span>
            </h2>
            <ul className="space-y-3">
              {project.futurePlans.map((plan, idx) => (
                <li key={idx} className="flex items-start space-x-3 text-slate-300 text-sm leading-relaxed">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 mt-2 shrink-0" />
                  <span>{plan}</span>
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Tech Stack */}
        <div className="bg-slate-900/60 border border-slate-800 rounded-2xl p-6 sm:p-8 backdrop-blur-sm">
          <h2 className="text-xl font-bold mb-4 text-teal-400">Technologies Used</h2>
          <div className="flex flex-wrap gap-2">
            {project.techStack.map((tech, idx) => (
              <span
                key={idx}
                className="px-3 py-1 rounded-md bg-slate-800 text-slate-200 text-xs font-medium border border-slate-700"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}