'use client';

export default function About() {
  const highlights = [
    'Clean Code Architecture',
    'Responsive & Pixel-Perfect Design',
    'Modern Web Technologies',
    'RESTful API & Database Design',
  ];

  return (
    <section id="about" className="py-20 bg-slate-950 text-white relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">
            About{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 via-emerald-400 to-orange-400">
              Me
            </span>
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-teal-400 to-orange-400 mx-auto mt-4 rounded-full" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Brief Bio & Highlights */}
          <div className="lg:col-span-6 space-y-6 text-slate-300">
            <h3 className="text-2xl font-bold text-white">
              Passionate Web Developer Crafting Digital Experiences
            </h3>

            <p className="leading-relaxed text-slate-400">
              Hello! I’m Jahid, a full-stack developer dedicated to building high-performance, accessible, and scalable web applications. My focus is on writing clean, maintainable code and providing smooth user experiences.
            </p>

            <p className="leading-relaxed text-slate-400">
              Whether building a complex React dashboard or designing backend API endpoints, I aim for excellence in both performance and aesthetics.
            </p>

            {/* Highlights List */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              {highlights.map((item, index) => (
                <div key={index} className="flex items-center space-x-2">
                  <span className="text-teal-400 font-bold">✓</span>
                  <span className="text-sm text-slate-300">{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: IDE Code Window with Hobbies */}
          <div className="lg:col-span-6">
            <div className="w-full bg-slate-900/90 border border-slate-800 hover:border-teal-500/50 rounded-2xl shadow-2xl hover:shadow-teal-500/20 overflow-hidden backdrop-blur-md transition-all duration-300 group">
              
              {/* Code Window Header */}
              <div className="bg-slate-950/80 px-4 py-3 border-b border-slate-800 group-hover:border-teal-500/30 flex items-center justify-between transition-colors duration-300">
                <div className="flex items-center space-x-2">
                  <span className="w-3 h-3 rounded-full bg-rose-500/80 inline-block" />
                  <span className="w-3 h-3 rounded-full bg-amber-500/80 inline-block" />
                  <span className="w-3 h-3 rounded-full bg-emerald-500/80 inline-block" />
                </div>
                <span className="text-xs font-mono text-slate-500 group-hover:text-teal-400 transition-colors duration-300">
                  developer.config.js
                </span>
                <div className="w-12" />
              </div>

              {/* Code Window Body */}
              <div className="p-6 font-mono text-xs sm:text-sm leading-relaxed overflow-x-auto text-slate-300">
                <p><span className="text-purple-400">const</span> <span className="text-amber-300">developer</span> = &#123;</p>
                
                <p className="pl-4">
                  <span className="text-teal-400">name</span>: <span className="text-emerald-300">&apos;Md. Jahid Hasan&apos;</span>,
                </p>
                
                <p className="pl-4">
                  <span className="text-teal-400">role</span>: <span className="text-emerald-300">&apos;MERN Stack Web Developer&apos;</span>,
                </p>

                <p className="pl-4">
                  <span className="text-teal-400">techStack</span>: [
                </p>
                <p className="pl-8 text-amber-200">
                  &apos;Next.js&apos;, &apos;React&apos;, &apos;Node.js&apos;, &apos;Express.js&apos;, &apos;MongoDB&apos;, &apos;TailwindCSS&apos;
                </p>
                <p className="pl-4">],</p>

                <p className="pl-4">
                  <span className="text-teal-400">hobbies</span>: [
                </p>
                <p className="pl-8 text-amber-200">
                  &apos;Problem Solving&apos;, &apos;Open Source Tech&apos;, &apos;Gaming&apos;, &apos;Traveling&apos;
                </p>
                <p className="pl-4">],</p>

                <p className="pl-4">
                  <span className="text-teal-400">passion</span>: <span className="text-emerald-300">&apos;Clean Code & Scalable Architecture&apos;</span>,
                </p>

                <p className="pl-4">
                  <span className="text-teal-400">hardWorker</span>: <span className="text-orange-400">true</span>,
                </p>

                <p>&#125;;</p>

                <div className="mt-4 pt-4 border-t border-slate-800/80 group-hover:border-teal-500/30 text-slate-500 flex items-center gap-2 transition-colors duration-300">
                  <span className="text-teal-400">&gt;</span>
                  <span className="text-slate-400">Ready to build your next big idea...</span>
                  <span className="w-2 h-4 bg-teal-400 animate-pulse inline-block" />
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}