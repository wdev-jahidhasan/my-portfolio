'use client';

export default function Education() {
  const educationData = [
    {
      degree: 'Master of Arts (MA) in Urdu',
      institution: 'University of Dhaka',
      session: '2022 - 2023 Session',
      status: 'Completed',
      description:
        'Advanced studies focusing on linguistics, literature analysis, and analytical thinking, while simultaneously mastering self-taught modern web technologies and software engineering practices.',
      highlights: ['Linguistic Analysis', 'Critical Thinking', 'Research & Methodology'],
    },
    {
      degree: 'Bachelor of Arts (BA) in Urdu',
      institution: 'University of Dhaka',
      session: '2018 - 2019 Session',
      status: 'Completed',
      description:
        'Developed strong problem-solving capabilities, adaptability, and high attention to detail, which laid a solid foundation for transitioning into professional MERN stack development.',
      highlights: ['Analytical Problem Solving', 'Communication', 'Structured Logic'],
    },
  ];

  return (
    <section id="education" className="py-20 bg-slate-950 text-white relative overflow-hidden">
      
      {/* Background Subtle Glow */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[400px] h-[400px] bg-teal-500/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Heading */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">
            My{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 via-emerald-400 to-orange-400">
              Education
            </span>
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-teal-400 to-orange-400 mx-auto mt-4 rounded-full" />
        </div>

        {/* Timeline Container */}
        <div className="relative max-w-4xl mx-auto">
          
          {/* Vertical Timeline Line */}
          <div className="absolute left-4 sm:left-1/2 top-0 bottom-0 w-0.5 bg-slate-800 -translate-x-1/2 hidden sm:block" />

          <div className="space-y-12">
            {educationData.map((item, index) => {
              const isEven = index % 2 === 0;

              return (
                <div
                  key={index}
                  className={`relative flex flex-col sm:flex-row items-center ${
                    isEven ? 'sm:flex-row-reverse' : ''
                  }`}
                >
                  
                  {/* Timeline Node/Dot */}
                  <div className="absolute left-4 sm:left-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-slate-900 border-2 border-teal-400 flex items-center justify-center shadow-lg shadow-teal-500/20 z-10 hidden sm:flex">
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-400" />
                  </div>

                  {/* Card Content Wrapper */}
                  <div className="w-full sm:w-1/2 sm:px-8">
                    <div className="p-6 rounded-2xl bg-slate-900/80 border border-slate-800/80 hover:border-teal-500/40 backdrop-blur-md shadow-xl transition-all duration-300 hover:shadow-teal-500/10 group">
                      
                      {/* Header Badge & Date */}
                      <div className="flex items-center justify-between flex-wrap gap-2 mb-3">
                        <span className="px-3 py-1 rounded-full text-xs font-mono bg-teal-500/10 border border-teal-500/30 text-teal-400">
                          {item.session}
                        </span>
                        <span
                          className={`text-xs font-semibold px-2.5 py-0.5 rounded-md ${
                            item.status === 'Ongoing'
                              ? 'bg-amber-500/10 text-amber-400 border border-amber-500/30'
                              : 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/30'
                          }`}
                        >
                          {item.status}
                        </span>
                      </div>

                      {/* Degree & Institution */}
                      <h3 className="text-xl font-bold text-white group-hover:text-teal-400 transition-colors duration-200">
                        {item.degree}
                      </h3>
                      <p className="text-sm text-slate-400 font-medium mt-1 mb-4 flex items-center gap-1.5">
                        <svg className="w-4 h-4 text-emerald-400 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                        </svg>
                        {item.institution}
                      </p>

                      {/* Description */}
                      <p className="text-sm text-slate-400 leading-relaxed mb-4">
                        {item.description}
                      </p>

                      {/* Key Highlights / Subjects */}
                      <div className="flex flex-wrap gap-2 pt-2 border-t border-slate-800/80">
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
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
}