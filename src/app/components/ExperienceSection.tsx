import React from 'react';

const experiences = [
  {
    role: 'Software Testing Intern (QA)',
    company: 'Apptrick Technologies',
    location: 'Remote',
    period: 'Jul – Aug 2025',
    current: true,
    gradient: 'from-amber-400 to-yellow-500',
    glow: 'hover:shadow-amber-500/15',
    description: 'Manual testing on mobile and web applications. Test case design, execution, and defect reporting across multiple platforms.',
    skills: ['Manual Testing', 'Test Cases', 'Bug Reporting', 'Mobile QA', 'Web QA'],
    emoji: '🔍',
  },
  {
    role: 'Flutter Developer',
    company: 'ABT IT Innovation',
    location: 'Islamabad',
    period: 'Jul – Oct 2024',
    current: false,
    gradient: 'from-primary to-accent',
    glow: 'hover:shadow-primary/15',
    description: 'Full-cycle mobile app development (frontend & backend). Team collaboration, Google Play Store deployment, Firebase & MongoDB integration.',
    skills: ['Flutter', 'Firebase', 'MongoDB', 'Google Play Store', 'Team Collaboration'],
    emoji: '📱',
  },
  {
    role: 'Flutter Developer',
    company: 'PAF-IAST',
    location: 'Haripur',
    period: 'Jul – Oct 2024',
    current: false,
    gradient: 'from-accent to-primary',
    glow: 'hover:shadow-accent/15',
    description: 'Clinic-based Flutter project developed in collaboration with University Advisor and industry partners.',
    skills: ['Flutter', 'Firebase', 'University Project', 'Industry Collaboration'],
    emoji: '🏥',
  },
  {
    role: 'Trainee Flutter Developer',
    company: 'Cedrus Group Pvt. Ltd.',
    location: 'Abbottabad',
    period: 'Aug – Sep 2023',
    current: false,
    gradient: 'from-emerald-400 to-teal-500',
    glow: 'hover:shadow-emerald-500/15',
    description: 'Entry-level role covering UI development, database operations, state management, and REST API integration in Flutter.',
    skills: ['Flutter', 'REST APIs', 'State Management', 'UI Development'],
    emoji: '🚀',
  },
];

const education = [
  {
    degree: 'Exchange Semester',
    institution: 'FH Joanneum',
    location: 'Graz, Austria 🇦🇹',
    period: '2025 – Current',
    note: 'Ernst Mach Grant Recipient',
    courses: ['3D Programming', 'ML & AI for Security'],
    emoji: '🏛️',
    gradient: 'from-primary to-accent',
  },
  {
    degree: 'Bachelor of Software Engineering',
    institution: 'PAF-IAST',
    location: 'Haripur, Pakistan 🇵🇰',
    period: '2022 – 2026 (Expected)',
    note: 'CGPA: 3.69',
    courses: ['Mobile Development', 'AI/ML', 'Software Engineering'],
    emoji: '🎓',
    gradient: 'from-accent to-primary',
  },
];

export default function ExperienceSection() {
  return (
    <section id="experience" className="py-24 md:py-32 px-6 md:px-12 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/3 right-0 w-96 h-96 bg-primary/8 rounded-full blur-[130px]" />
        <div className="absolute bottom-1/4 left-0 w-72 h-72 bg-accent/6 rounded-full blur-[110px]" />
      </div>
      <div className="max-w-6xl mx-auto relative">
        {/* Section label */}
        <div className="flex items-center gap-3 mb-16 reveal-up">
          <span className="text-xs font-black uppercase tracking-widest text-primary">04 — Experience</span>
          <div className="flex-1 h-px bg-gradient-to-r from-primary/40 to-transparent" />
        </div>

        <div className="mb-14 reveal-up">
          <h2 className="text-4xl md:text-5xl font-black tracking-tight text-foreground leading-[1.05]">
            Where I&apos;ve{' '}
            <span className="text-gradient-gold">worked</span>
          </h2>
          <p className="text-muted-foreground mt-4 text-lg max-w-2xl">
            Real-world engineering across mobile, web, and QA — from local startups to international clients.
          </p>
        </div>

        {/* Vertical Timeline */}
        <div className="relative mb-24">
          {/* Timeline line */}
          <div className="absolute left-6 md:left-8 top-0 bottom-0 w-px bg-gradient-to-b from-primary/70 via-accent/25 to-transparent" />

          <div className="flex flex-col gap-0">
            {experiences?.map((exp, idx) => (
              <div
                key={exp?.company + exp?.period}
                className={`reveal-up delay-${idx * 100} relative pl-16 md:pl-24 pb-12 last:pb-0`}
              >
                {/* Timeline dot */}
                <div className="absolute left-4 md:left-6 top-1 -translate-x-1/2 flex items-center justify-center">
                  <div className={`w-5 h-5 rounded-full bg-background border-2 border-primary flex items-center justify-center z-10 relative`}>
                    <div className="w-2 h-2 rounded-full bg-primary" />
                  </div>
                  {exp?.current && (
                    <div className="absolute w-5 h-5 rounded-full bg-primary/40 animate-ping" />
                  )}
                </div>

                {/* Card */}
                <div className={`group relative rounded-2xl border border-border bg-card hover:border-primary/40 transition-all duration-500 hover:shadow-2xl ${exp?.glow} overflow-hidden`}>
                  {/* Top accent line */}
                  <div className={`absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r ${exp?.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                  {/* Corner glow */}
                  <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl ${exp?.gradient} opacity-0 group-hover:opacity-8 blur-2xl transition-opacity duration-500`} />

                  <div className="p-6 md:p-8">
                    <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 mb-4">
                      {/* Left: role info */}
                      <div className="flex items-start gap-4">
                        <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${exp?.gradient} flex items-center justify-center text-xl flex-shrink-0 shadow-lg group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300`}>
                          {exp?.emoji}
                        </div>
                        <div>
                          <h3 className="font-black text-card-foreground text-lg leading-tight">{exp?.role}</h3>
                          <p className="text-sm font-bold text-primary mt-0.5">{exp?.company}</p>
                          <p className="text-xs text-muted-foreground mt-0.5">{exp?.location}</p>
                        </div>
                      </div>

                      {/* Right: period + badge */}
                      <div className="flex flex-row sm:flex-col items-center sm:items-end gap-2 flex-shrink-0">
                        <span className="text-xs font-bold uppercase tracking-widest text-muted-foreground whitespace-nowrap">
                          {exp?.period}
                        </span>
                        {exp?.current && (
                          <span className="px-2.5 py-1 rounded-full bg-primary/15 border border-primary/30 text-xs font-bold text-primary whitespace-nowrap animate-neon-pulse">
                            Current
                          </span>
                        )}
                      </div>
                    </div>

                    <p className="text-sm text-muted-foreground leading-relaxed mb-5">
                      {exp?.description}
                    </p>

                    <div className="flex flex-wrap gap-2">
                      {exp?.skills?.map((s) => (
                        <span key={s} className="px-2.5 py-1 rounded-lg bg-secondary/80 border border-border/60 text-xs font-semibold text-foreground/80 hover:border-primary/40 hover:text-primary transition-colors duration-200">
                          {s}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Education */}
        <div className="reveal-up">
          <div className="flex items-center gap-3 mb-10">
            <h3 className="text-2xl font-black text-foreground whitespace-nowrap">Education</h3>
            <div className="flex-1 h-px bg-gradient-to-r from-border to-transparent" />
          </div>
          <div className="grid md:grid-cols-2 gap-5">
            {education?.map((edu) => (
              <div
                key={edu?.institution}
                className="group relative rounded-2xl border border-border bg-card p-7 hover:border-primary/40 transition-all duration-400 hover:shadow-lg hover:shadow-primary/10 overflow-hidden"
              >
                <div className={`absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r ${edu?.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                <div className="flex items-start gap-4 mb-5">
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${edu?.gradient} flex items-center justify-center text-2xl flex-shrink-0 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                    {edu?.emoji}
                  </div>
                  <div>
                    <h4 className="font-black text-card-foreground text-lg leading-tight">{edu?.degree}</h4>
                    <p className="text-primary font-bold text-sm mt-0.5">{edu?.institution}</p>
                    <p className="text-xs text-muted-foreground">{edu?.location}</p>
                  </div>
                </div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-bold uppercase tracking-widest text-muted-foreground">{edu?.period}</span>
                  <span className="px-3 py-1 rounded-full bg-primary/12 border border-primary/25 text-xs font-bold text-primary">
                    {edu?.note}
                  </span>
                </div>
                <div className="flex flex-wrap gap-2">
                  {edu?.courses?.map((c) => (
                    <span key={c} className="px-2.5 py-1 rounded-lg bg-secondary/80 border border-border/60 text-xs font-semibold text-foreground/80">
                      {c}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Extra-curricular */}
        <div className="mt-16 reveal-up delay-200">
          <div className="flex items-center gap-3 mb-10">
            <h3 className="text-2xl font-black text-foreground whitespace-nowrap">Beyond Code</h3>
            <div className="flex-1 h-px bg-gradient-to-r from-border to-transparent" />
          </div>
          <div className="grid md:grid-cols-2 gap-4">
            {[
              { emoji: '🎪', title: 'Head Event Manager', desc: 'Open Days, Design Expo, Career Fest, Job Fest 2025 — 1,000+ attendees', color: 'hover:border-amber-500/40' },
              { emoji: '🌍', title: 'International Rizq Association', desc: 'Active participant in global humanitarian initiatives', color: 'hover:border-green-500/40' },
              { emoji: '📚', title: 'Scholarship Insights', desc: 'Fundraising campaigns and mentoring students on scholarship opportunities', color: 'hover:border-blue-500/40' },
              { emoji: '♻️', title: 'Elevate Youth Project', desc: '"From Trash to Treasure" — Transforming Pakistan\'s Solid Waste into Sustainable Future', color: 'hover:border-emerald-500/40' },
            ]?.map((item) => (
              <div
                key={item?.title}
                className={`group flex items-start gap-4 p-5 rounded-2xl border border-border bg-card ${item?.color} hover:bg-primary/3 transition-all duration-300`}
              >
                <span className="text-2xl flex-shrink-0 group-hover:scale-125 transition-transform duration-300">{item?.emoji}</span>
                <div>
                  <h4 className="font-bold text-card-foreground text-sm">{item?.title}</h4>
                  <p className="text-xs text-muted-foreground mt-1 leading-relaxed">{item?.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}