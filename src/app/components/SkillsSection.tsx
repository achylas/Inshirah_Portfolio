'use client';

import React, { useEffect, useRef, useState } from 'react';

const skillGroups = [
  {
    category: 'Languages',
    icon: '< />',
    gradient: 'from-primary to-accent',
    glow: 'hover:shadow-primary/15',
    border: 'hover:border-primary/45',
    bg: 'group-hover:bg-primary/6',
    skills: ['Dart', 'Python', 'Java', 'C++'],
  },
  {
    category: 'Frameworks',
    icon: '⚡',
    gradient: 'from-amber-400 to-orange-500',
    glow: 'hover:shadow-amber-500/20',
    border: 'hover:border-amber-500/50',
    bg: 'group-hover:bg-amber-500/8',
    skills: ['Flutter', 'React', 'Spring Boot'],
  },
  {
    category: 'AI / ML',
    icon: '◈',
    gradient: 'from-accent to-primary',
    glow: 'hover:shadow-accent/15',
    border: 'hover:border-accent/55',
    bg: 'group-hover:bg-accent/6',
    skills: ['Scikit-learn', 'TensorFlow', 'Pandas', 'SHAP', 'GradCam'],
  },
  {
    category: 'Databases',
    icon: '⬡',
    gradient: 'from-emerald-400 to-teal-500',
    glow: 'hover:shadow-emerald-500/20',
    border: 'hover:border-emerald-500/50',
    bg: 'group-hover:bg-emerald-500/8',
    skills: ['Firebase', 'MongoDB', 'MySQL', 'Supabase'],
  },
];

const tools = [
  { name: 'Git', icon: '⎇', color: 'hover:border-orange-400/50 hover:text-orange-300' },
  { name: 'Postman', icon: '◎', color: 'hover:border-orange-400/50 hover:text-orange-300' },
  { name: 'ClickUp', icon: '✦', color: 'hover:border-primary/50 hover:text-primary' },
  { name: 'Power BI', icon: '▦', color: 'hover:border-yellow-400/50 hover:text-yellow-300' },
  { name: 'Google Play', icon: '▶', color: 'hover:border-green-400/50 hover:text-green-300' },
  { name: 'Firebase', icon: '🔥', color: 'hover:border-amber-400/50 hover:text-amber-300' },
  { name: 'Supabase', icon: '⚡', color: 'hover:border-accent/55 hover:text-accent' },
];

export default function SkillsSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.1 }
    );
    if (sectionRef?.current) observer?.observe(sectionRef?.current);
    return () => observer?.disconnect();
  }, []);

  return (
    <section id="skills" className="py-24 md:py-32 px-6 md:px-12 relative overflow-hidden" ref={sectionRef}>
      {/* Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-0 w-96 h-96 bg-primary/8 rounded-full blur-[130px]" />
        <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-accent/6 rounded-full blur-[130px]" />
      </div>
      <div className="max-w-6xl mx-auto relative">
        {/* Section label */}
        <div className="flex items-center gap-3 mb-16 reveal-up">
          <span className="text-xs font-black uppercase tracking-widest text-primary">02 — Skills</span>
          <div className="flex-1 h-px bg-gradient-to-r from-primary/40 to-transparent" />
        </div>

        <div className="mb-14 reveal-up">
          <h2 className="text-4xl md:text-5xl font-black tracking-tight text-foreground leading-[1.05]">
            Technical{' '}
            <span className="text-gradient-gold">toolkit</span>
          </h2>
          <p className="text-muted-foreground mt-4 text-lg max-w-2xl">
            From mobile UI to machine learning pipelines — built across real client projects and academic research.
          </p>
        </div>

        {/* Skill category cards — asymmetric bento */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-14">
          {skillGroups?.map((group, gi) => (
            <div
              key={group?.category}
              className={`reveal-scale group relative rounded-2xl border border-border bg-card/70 backdrop-blur-sm p-6 transition-all duration-500 hover:shadow-2xl ${group?.glow} ${group?.border} hover:-translate-y-3 overflow-hidden cursor-default`}
              style={{ transitionDelay: `${gi * 80}ms` }}
            >
              {/* Top accent line */}
              <div className={`absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r ${group?.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
              {/* BG tint */}
              <div className={`absolute inset-0 transition-colors duration-500 ${group?.bg} rounded-2xl`} />
              {/* Corner glow */}
              <div className={`absolute top-0 right-0 w-20 h-20 bg-gradient-to-bl ${group?.gradient} opacity-0 group-hover:opacity-10 blur-xl transition-opacity duration-500`} />

              {/* Icon badge */}
              <div className={`relative inline-flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-br ${group?.gradient} text-white font-black text-sm mb-5 shadow-lg group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300`}>
                {group?.icon}
              </div>

              <h3 className="relative text-sm font-black uppercase tracking-wider text-foreground mb-4">{group?.category}</h3>

              {/* Skill pills */}
              <div className="relative flex flex-wrap gap-2">
                {group?.skills?.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1.5 rounded-lg bg-secondary/90 text-xs font-semibold text-foreground border border-border/60 hover:border-primary/40 hover:text-primary transition-colors duration-200"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Tools strip */}
        <div className={`reveal-up transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
          <div className="flex items-center gap-4 mb-5">
            <p className="text-xs font-black uppercase tracking-widest text-muted-foreground whitespace-nowrap">Tools & Platforms</p>
            <div className="flex-1 h-px bg-gradient-to-r from-border to-transparent" />
          </div>
          <div className="flex flex-wrap gap-3">
            {tools?.map((tool, i) => (
              <div
                key={tool?.name}
                className={`flex items-center gap-2 px-4 py-2.5 rounded-xl border border-border bg-card/80 ${tool?.color} hover:-translate-y-1 transition-all duration-300 cursor-default group`}
                style={{ transitionDelay: `${i * 40}ms` }}
              >
                <span className="text-base leading-none group-hover:scale-125 transition-transform duration-300">{tool?.icon}</span>
                <span className="text-sm font-semibold text-foreground group-hover:text-inherit transition-colors duration-300">{tool?.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}