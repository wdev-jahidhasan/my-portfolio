'use client';

import Image from 'next/image';
import { useState } from 'react';

export default function Certifications() {
  const [isOpen, setIsOpen] = useState(false);

  const certificationData = [
    {
      title: 'Complete Web Development Course',
      issuingOrganization: 'Programming Hero',
      issueDate: 'September, 2025',
      credentialID: 'WEB13-4617',
      status: 'Completed',
      description:
        'Comprehensive training covering modern frontend and backend technologies, including HTML5, CSS3, Tailwind, JavaScript, React, Next.js, Better Auth, Node.js, Express, and MongoDB.',
      highlights: ['React & Next.js', 'Node.js & Express', 'Tailwind & JS', 'MongoDB'],
      imageSrc: '/ph-certificate.png',
      altText: 'Programming Hero Full-Stack Web Development Certificate',
      verificationUrl: 'https://web.programming-hero.com/verification?validationNumber=PHbatch-13WEB13-46171826',
    },
  ];

  return (
    <section id="certifications" className="py-20 bg-slate-950 text-white relative overflow-hidden">

      {/* Background Subtle Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-teal-500/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Section Heading */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">
            Licenses &{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 via-emerald-400 to-orange-400">
              Certifications
            </span>
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-teal-400 to-orange-400 mx-auto mt-4 rounded-full" />
        </div>

        {/* Centered Single Card Container */}
        <div className="max-w-4xl mx-auto">
          {certificationData.map((item, index) => (
            <div key={index} className="w-full">
              <div className="p-6 sm:p-8 rounded-2xl bg-slate-900/80 border border-slate-800/80 hover:border-teal-500/40 backdrop-blur-md shadow-xl transition-all duration-300 hover:shadow-teal-500/10 group">

                {/* Header Badge & Date */}
                <div className="flex items-center justify-between flex-wrap gap-2 mb-3">
                  <span className="px-3 py-1 rounded-full text-xs font-mono bg-teal-500/10 border border-teal-500/30 text-teal-400">
                    {item.issueDate}
                  </span>
                  <span className="text-xs font-semibold px-2.5 py-0.5 rounded-md bg-emerald-500/10 text-emerald-400 border border-emerald-500/30">
                    {item.status}
                  </span>
                </div>

                {/* Certification Title & Organization */}
                <h3 className="text-xl sm:text-2xl font-bold text-white group-hover:text-teal-400 transition-colors duration-200">
                  {item.title}
                </h3>
                <p className="text-sm text-slate-400 font-medium mt-1 mb-4 flex items-center gap-1.5">
                  <svg className="w-4 h-4 text-emerald-400 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                  {item.issuingOrganization}
                </p>

                {/* Description */}
                <p className="text-sm text-slate-400 leading-relaxed mb-4">
                  {item.description}
                </p>

                {/* Certificate Image (Responsive) + Click to enlarge */}
                {item.imageSrc && (
                  <div className="mb-4 relative rounded-xl overflow-hidden border border-slate-700 cursor-pointer group/image" onClick={() => setIsOpen(true)}>
                    <Image
                      src={item.imageSrc}
                      alt={item.altText}
                      width={800}
                      height={500}
                      className="w-full h-auto object-cover transition-transform duration-500 group-hover/image:scale-105"
                    />
                    {/* Overlay on hover */}
                    <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover/image:opacity-100 transition-opacity duration-300">
                      <span className="text-white text-sm font-medium px-3 py-1.5 bg-teal-600/80 rounded-lg flex items-center gap-2">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" /></svg>
                        View Certificate
                      </span>
                    </div>
                  </div>
                )}

                {/* Credential ID, Highlights & Verification Button */}
                <div className="space-y-4 pt-4 border-t border-slate-800/80">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                    <p className="text-xs text-slate-500 font-mono">
                      Credential ID: <span className="text-slate-400">{item.credentialID}</span>
                    </p>

                    {/* Verification Button */}
                    {item.verificationUrl && (
                      <a
                        href={item.verificationUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center gap-2 px-4 py-2 rounded-xl text-xs font-semibold bg-teal-500/10 hover:bg-teal-500/20 text-teal-400 border border-teal-500/30 transition-all duration-200 shadow-sm hover:shadow-teal-500/20 w-fit"
                      >
                        <span>Verify Certificate</span>
                        <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                        </svg>
                      </a>
                    )}
                  </div>

                  {/* Updated Hashtags */}
                  <div className="flex flex-wrap gap-2">
                    {item.highlights.map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className="text-xs font-mono px-2.5 py-1 rounded-lg bg-slate-800/60 text-slate-300 border border-slate-700/50"
                      >
                        #{tag}
                      </span>
                    ))}
                  </div>
                </div>

              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Simple Modal for Image Preview */}
      {isOpen && (
        <div className="fixed inset-0 z-50 bg-black/90 p-4 flex items-center justify-center cursor-zoom-out backdrop-blur-sm" onClick={() => setIsOpen(false)}>
          <div className="relative max-w-5xl max-h-[90vh] w-full h-full" onClick={(e) => e.stopPropagation()}>
            <Image
              src="/ph-certificate.png"
              alt="Full screen certificate"
              fill
              className="object-contain"
              quality={95}
            />
            {/* Close Button */}
            <button className="absolute -top-10 -right-2 sm:-right-10 text-white bg-slate-800/80 p-2 rounded-full hover:bg-slate-700" onClick={() => setIsOpen(false)}>
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
            </button>
          </div>
        </div>
      )}
    </section>
  );
}