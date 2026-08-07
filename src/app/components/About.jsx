'use client';

export default function About() {
  const stats = [
    { label: 'Years Experience', value: '2+' },
    { label: 'Completed Projects', value: '15+' },
    { label: 'Happy Clients', value: '10+' },
  ];

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
          <div className="lg:col-span-7 space-y-6 text-slate-300">
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

          {/* Right Column: Stats Cards */}
          <div className="lg:col-span-5 grid grid-cols-1 gap-4">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800/80 backdrop-blur-sm hover:border-slate-700 transition duration-300 flex items-center justify-between"
              >
                <div>
                  <p className="text-sm font-medium text-slate-400">{stat.label}</p>
                </div>
                <div className="text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-orange-400">
                  {stat.value}
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}