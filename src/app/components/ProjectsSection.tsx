import React from 'react';
import AppImage from '@/components/ui/AppImage';

const projects = [
{
  id: 'xai',
  title: 'XAI Breast Cancer Diagnosis',
  description: 'Flutter mobile app with deep learning for breast cancer diagnosis. Integrates SHAP & GradCam explainable AI so doctors understand model decisions. Firebase + Supabase backend.',
  tags: ['Flutter', 'Deep Learning', 'SHAP', 'GradCam', 'Firebase'],
  image: "/assets/images/image-1777054895111.png",
  imageAlt: 'XAI Breast Cancer Diagnosis Flutter app screenshot showing the diagnostic interface',
  badge: '🏆 Flagship',
  badgeColor: 'bg-amber-500/20 text-amber-300 border-amber-500/30',
  accent: 'from-amber-500/25 to-orange-500/15',
  borderHover: 'hover:border-amber-500/40',
  glow: 'hover:shadow-amber-500/15'
},
{
  id: 'clinic',
  title: 'Clinic App',
  description: 'University clinic management system built with Flutter & Firebase. Developed with university advisor and industry collaboration.',
  tags: ['Flutter', 'Firebase'],
  image: "https://img.rocket.new/generatedImages/rocket_gen_img_15a0c02fe-1772100439660.png",
  imageAlt: 'Healthcare app interface on mobile device with clean white medical dashboard',
  badge: '4th Semester',
  badgeColor: 'bg-secondary text-muted-foreground border-border',
  accent: 'from-accent/16 to-primary/10',
  borderHover: 'hover:border-teal-500/40',
  glow: 'hover:shadow-teal-500/15'
},
{
  id: 'churn',
  title: 'Customer Churn Prediction',
  description: 'ML pipeline predicting customer churn using Scikit-learn & Pandas. Interactive Power BI dashboard for business insights.',
  tags: ['Python', 'Scikit-learn', 'Pandas', 'Power BI'],
  image: "https://img.rocket.new/generatedImages/rocket_gen_img_110953098-1772091052591.png",
  imageAlt: 'Data analytics dashboard with charts and graphs on dark background',
  badge: 'ML',
  badgeColor: 'bg-blue-500/15 text-blue-300 border-blue-500/25',
  accent: 'from-primary/16 to-accent/10',
  borderHover: 'hover:border-blue-500/40',
  glow: 'hover:shadow-blue-500/15'
},
{
  id: 'atalakou',
  title: 'Atalakou App',
  description: 'Flutter mobile app developed for an international client. Full-cycle development from requirements to deployment.',
  tags: ['Flutter', 'International Client'],
  image: "/assets/images/image-1777054882642.png",
  imageAlt: 'Atalakou Flutter mobile app screenshot showing the main application interface',
  badge: '🌍 International',
  badgeColor: 'bg-green-500/15 text-green-300 border-green-500/25',
  accent: 'from-green-500/20 to-emerald-500/10',
  borderHover: 'hover:border-green-500/40',
  glow: 'hover:shadow-green-500/15'
},
{
  id: 'vulnscan',
  title: 'GitHub Repo Vulnerability Scanner',
  description: 'Java Spring Boot service that scans GitHub repositories for security vulnerabilities. Firebase auth, MySQL storage.',
  tags: ['Java', 'Spring Boot', 'Firebase', 'MySQL'],
  image: "https://img.rocket.new/generatedImages/rocket_gen_img_11cab35de-1772520557116.png",
  imageAlt: 'Cybersecurity code terminal with green text on black background',
  badge: '🔒 Security',
  badgeColor: 'bg-red-500/15 text-red-300 border-red-500/25',
  accent: 'from-red-500/20 to-rose-500/10',
  borderHover: 'hover:border-red-500/40',
  glow: 'hover:shadow-red-500/15'
},
{
  id: 'talenthive',
  title: 'Talent Hive',
  description: 'React job platform with custom CV maker. Full-stack web app connecting employers and job seekers with intelligent matching.',
  tags: ['React', 'Job Platform', 'CV Maker'],
  image: "https://img.rocket.new/generatedImages/rocket_gen_img_194625d93-1772217102353.png",
  imageAlt: 'Modern workspace with laptop showing web application dashboard',
  badge: '6th Semester',
  badgeColor: 'bg-secondary text-muted-foreground border-border',
  accent: 'from-primary/18 to-accent/8',
  borderHover: 'hover:border-primary/40',
  glow: 'hover:shadow-primary/15'
},
{
  id: 'quiz',
  title: 'Quiz App',
  description: 'Flutter quiz app powered by Trivia API with Firebase backend. Real-time scoring and category filtering.',
  tags: ['Flutter', 'Firebase', 'Trivia API'],
  image: "/assets/images/image-1777054864408.png",
  imageAlt: 'Quiz App Flutter screenshot showing the quiz interface with questions and answer options',
  badge: '3rd Semester',
  badgeColor: 'bg-secondary text-muted-foreground border-border',
  accent: 'from-pink-500/20 to-rose-500/10',
  borderHover: 'hover:border-pink-500/40',
  glow: 'hover:shadow-pink-500/15'
}];


export default function ProjectsSection() {
  return (
    <section id="projects" className="py-24 md:py-32 px-6 md:px-12 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 right-0 w-96 h-96 bg-primary/8 rounded-full blur-[130px]" />
        <div className="absolute bottom-1/4 left-0 w-80 h-80 bg-accent/6 rounded-full blur-[110px]" />
      </div>
      <div className="max-w-6xl mx-auto relative">
        <div className="flex items-center gap-3 mb-16 reveal-up">
          <span className="text-xs font-black uppercase tracking-widest text-primary">03 — Projects</span>
          <div className="flex-1 h-px bg-gradient-to-r from-primary/40 to-transparent" />
        </div>

        <div className="mb-12 reveal-up">
          <h2 className="text-4xl md:text-5xl font-black tracking-tight text-foreground leading-[1.05]">
            Things I&apos;ve{' '}
            <span className="text-gradient-gold">shipped</span>
          </h2>
          <p className="text-muted-foreground mt-4 text-lg max-w-2xl">
            From AI-powered diagnostics to international client apps — 7 projects across mobile, web, and ML.
          </p>
        </div>

        {/* 3-column grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {projects?.map((project, idx) =>
          <div
            key={project?.id}
            className={`reveal-scale delay-${Math.min(idx * 100, 600)} project-card rounded-2xl border overflow-hidden group flex flex-col relative ${project?.borderHover} ${project?.glow} hover:shadow-2xl`}>

              {/* Hover gradient accent overlay */}
              <div className={`absolute inset-0 bg-gradient-to-br ${project?.accent} opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none z-0`} />

              {/* Image */}
              <div className="relative overflow-hidden h-44 flex-shrink-0">
                <AppImage
                src={project?.image}
                alt={project?.imageAlt}
                fill
                className="object-cover grayscale-hover group-hover:scale-105 transition-transform duration-700"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                {/* Badge */}
                <span className={`absolute top-3 left-3 px-2.5 py-1 rounded-full border text-xs font-bold backdrop-blur-sm ${project?.badgeColor}`}>
                  {project?.badge}
                </span>
                {/* Shimmer on hover */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 shimmer-effect" />
              </div>

              {/* Content */}
              <div className="relative z-10 p-5 flex flex-col gap-3 bg-card flex-1">
                <h3 className="text-base font-black text-card-foreground leading-tight group-hover:text-primary transition-colors duration-300">
                  {project?.title}
                </h3>
                <p className="text-xs text-muted-foreground leading-relaxed flex-1">
                  {project?.description}
                </p>
                {/* Tech tags */}
                <div className="flex flex-wrap gap-1.5 mt-auto pt-1">
                  {project?.tags?.map((tag) =>
                <span
                  key={tag}
                  className="px-2 py-0.5 rounded-full bg-primary/10 border border-primary/20 text-xs font-semibold text-primary/90 hover:bg-primary/20 transition-colors duration-200">
                      {tag}
                    </span>
                )}
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>);

}