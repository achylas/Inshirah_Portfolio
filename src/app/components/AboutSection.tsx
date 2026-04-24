import React from 'react';
import AppImage from '@/components/ui/AppImage';

export default function AboutSection() {
  const highlights = [
    { emoji: '🇵🇰', text: 'PAF-IAST, Haripur — BSE (Expected 2026)', color: 'from-green-500/20 to-emerald-500/10' },
    { emoji: '🇦🇹', text: 'FH Joanneum, Graz — Exchange Semester (Current)', color: 'from-red-500/20 to-rose-500/10' },
    { emoji: '🏆', text: 'Ernst Mach Grant — Austrian Federal Ministry Scholarship', color: 'from-amber-500/20 to-yellow-500/10' },
    { emoji: '📱', text: 'Flutter apps deployed to Google Play Store', color: 'from-blue-500/20 to-sky-500/10' },
    { emoji: '🧠', text: 'AI/ML: XAI, Deep Learning, Scikit-learn, TensorFlow', color: 'from-primary/18 to-accent/8' },
  ];

  return (
    <section id="about" className="py-24 md:py-32 px-6 md:px-12 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-primary/8 rounded-full blur-[120px]" />
        <div className="absolute bottom-0 left-1/4 w-80 h-80 bg-accent/6 rounded-full blur-[100px]" />
        <div className="absolute top-1/2 left-0 w-64 h-64 bg-primary/5 rounded-full blur-[80px]" />
      </div>
      <div className="max-w-6xl mx-auto relative">
        {/* Section label */}
        <div className="flex items-center gap-3 mb-16 reveal-up">
          <span className="text-xs font-black uppercase tracking-widest text-primary">01 — About</span>
          <div className="flex-1 h-px bg-gradient-to-r from-primary/40 to-transparent" />
        </div>

        <div className="grid lg:grid-cols-5 gap-16 items-start">
          {/* Left: image */}
          <div className="lg:col-span-2 flex flex-col gap-6 reveal-left">
            <div className="relative rounded-3xl overflow-hidden aspect-[3/4] max-w-sm mx-auto lg:mx-0 group">
              <AppImage
                src="/assets/images/image-1777057505508.png"
                alt="Inshirah Hassan — Software Engineer and AI/ML developer"
                fill
                className="object-cover object-top grayscale-hover"
                sizes="(max-width: 768px) 100vw, 40vw" />
              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-transparent to-transparent" />
              {/* Neon frame */}
              <div className="absolute inset-0 rounded-3xl border border-primary/25 pointer-events-none group-hover:border-primary/55 transition-colors duration-500" />
              {/* Hover shimmer */}
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/0 via-primary/8 to-accent/0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
            </div>

            {/* Stats mini-cards */}
            <div className="grid grid-cols-2 gap-3 max-w-sm mx-auto lg:mx-0 w-full">
              {[
                { value: '3.69', label: 'CGPA', icon: '🎓' },
                { value: '4+', label: 'Companies', icon: '🏢' },
                { value: '7+', label: 'Projects', icon: '🚀' },
                { value: '2026', label: 'Available', icon: '✨' },
              ]?.map((stat) => (
                <div key={stat?.label} className="glow-box rounded-2xl p-4 text-center bg-card/50 backdrop-blur-sm hover:bg-primary/4 transition-colors duration-300">
                  <div className="text-xl mb-1">{stat?.icon}</div>
                  <div className="text-xl font-black text-foreground">{stat?.value}</div>
                  <div className="text-xs text-muted-foreground uppercase tracking-wider">{stat?.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: story */}
          <div className="lg:col-span-3 flex flex-col gap-8">
            <div className="reveal-up">
              <h2 className="text-4xl md:text-5xl font-black tracking-tight text-foreground leading-[1.05] mb-6">
                Collaborating at the frontier of{' '}
                <span className="text-gradient-gold">software, AI & ML.</span>
              </h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed text-base">
                <p>
                  I&apos;m a Software Engineer with hands-on experience in Flutter mobile development and React — passionate about building user-centric, intelligent applications that combine mobile development with AI/ML technologies.
                </p>
                <p>
                  Currently on an exchange semester at <strong className="text-foreground">FH Joanneum in Graz, Austria</strong> as an Ernst Mach Grant recipient, studying 3D Programming and Machine Learning &amp; AI for Security. My flagship project is an <strong className="text-foreground">XAI-based Breast Cancer Diagnosis System</strong> — a Flutter mobile app with deep learning, SHAP &amp; GradCam explainability.
                </p>
                <p>
                  I&apos;ve shipped apps to the <strong className="text-foreground">Google Play Store</strong>, built systems for international clients, and led event management for 1,000+ attendees at Job Fest 2025.
                </p>
              </div>
            </div>

            {/* Highlights with glowing borders */}
            <div className="space-y-2.5 reveal-up delay-200">
              {highlights?.map((h) => (
                <div
                  key={h?.text}
                  className={`glow-box flex items-center gap-4 p-4 rounded-2xl bg-gradient-to-r ${h?.color} hover:scale-[1.02] transition-transform duration-300 cursor-default`}>
                  <span className="text-xl w-8 flex-shrink-0">{h?.emoji}</span>
                  <span className="text-sm font-medium text-foreground">{h?.text}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}