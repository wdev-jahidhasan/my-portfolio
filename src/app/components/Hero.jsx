import Link from 'next/link';

export default function Hero() {
  return (
    <section className="min-h-[calc(100vh-80px)] flex items-center justify-center bg-slate-950 text-white relative overflow-hidden py-16 px-4 sm:px-6 lg:px-8 bg-[radial-gradient(#1e293b_1px,transparent_1px)] [background-size:24px_24px]">
      
      {/* Background Light Glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-teal-500/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-6xl w-full mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
        
        {/* Left */}
        <div className="lg:col-span-6 space-y-6 text-center lg:text-left">
          
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-500/10 border border-teal-500/30 text-teal-400 text-xs font-mono">
            <span className="w-2 h-2 rounded-full bg-teal-400 animate-pulse" />
            Available for new opportunities
          </div>

          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight leading-tight">
            Md. Jahid Hasan<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 via-emerald-400 to-orange-400">
              MERN Stack Developer
            </span>
          </h1>

          <p className="text-slate-400 text-base sm:text-lg leading-relaxed max-w-xl mx-auto lg:mx-0">
            Hi, I&apos;m <span className="text-white font-semibold">Md. Jahid Hasan</span>. I create high-performance web applications with modern technologies and clean backend architectures.
          </p>

          <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 pt-4">
            <Link
              href="#projects"
              className="px-6 py-3.5 rounded-xl bg-gradient-to-r from-teal-500 to-emerald-500 hover:from-teal-600 hover:to-emerald-600 text-slate-950 font-bold text-sm transition-all duration-200 shadow-lg shadow-teal-500/25 hover:scale-105"
            >
              Explore Projects
            </Link>

            <a
              href="/resume.pdf"
              download
              className="px-6 py-3.5 rounded-xl bg-slate-900/80 hover:bg-slate-800 text-slate-300 border border-slate-700/80 font-medium text-sm transition-all duration-200 flex items-center gap-2 backdrop-blur-sm hover:scale-105"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
              </svg>
              Resume / CV
            </a>
          </div>
        </div>

        {/* Right IDE */}
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
                &apos;Next.js&apos;, &apos;React&apos;, &apos;Node.js&apos;, &apos;Express.js&apos;, &apos;MongoDB&apos;, &apos;TailwindCSS&apos;, &apos;HTML5&apos;
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
    </section>
  );
}