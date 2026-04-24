import React from 'react';
import AppImage from '@/components/ui/AppImage';

export default function HeroSection() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center px-6 md:px-12 pb-24 pt-32 overflow-hidden bg-[#05030F]">
      {/* Deep space background layers */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Primary orbs */}
        <div className="absolute top-[-15%] left-[-10%] w-[700px] h-[700px] rounded-full bg-primary/20 blur-[140px] animate-orb-1" />
        <div className="absolute bottom-[-10%] right-[-5%] w-[600px] h-[600px] rounded-full bg-accent/12 blur-[120px] animate-orb-2" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[900px] rounded-full bg-primary/8 blur-[180px] animate-orb-3" />
        {/* Neon accent orb */}
        <div className="absolute top-1/4 right-1/4 w-[300px] h-[300px] rounded-full bg-accent/8 blur-[80px] animate-float-slow" />

        {/* Grid overlay */}
        <div className="absolute inset-0 opacity-[0.04]" style={{
          backgroundImage: 'linear-gradient(rgb(var(--primary-rgb) / 1) 1px, transparent 1px), linear-gradient(90deg, rgb(var(--primary-rgb) / 1) 1px, transparent 1px)',
          backgroundSize: '70px 70px'
        }} />

        {/* Diagonal accent lines */}
        <div className="absolute top-0 left-0 w-full h-full opacity-[0.03]" style={{
          backgroundImage: 'repeating-linear-gradient(45deg, rgb(var(--primary-rgb) / 1) 0px, rgb(var(--primary-rgb) / 1) 1px, transparent 1px, transparent 60px)'
        }} />

        {/* Floating particles */}
        {[...Array(8)]?.map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 rounded-full bg-primary/60"
            style={{
              left: `${10 + i * 12}%`,
              top: `${20 + (i % 3) * 25}%`,
              animation: `particleDrift ${4 + i * 0.8}s ease-in-out infinite`,
              animationDelay: `${i * 0.6}s`,
            }}
          />
        ))}
        {[...Array(5)]?.map((_, i) => (
          <div
            key={`c-${i}`}
            className="absolute w-1 h-1 rounded-full bg-accent/50"
            style={{
              right: `${8 + i * 15}%`,
              top: `${15 + (i % 4) * 20}%`,
              animation: `particleDrift ${5 + i * 0.7}s ease-in-out infinite`,
              animationDelay: `${i * 0.9 + 1}s`,
            }}
          />
        ))}
      </div>
      {/* Rotating badge */}
      <div className="absolute top-28 right-6 md:right-16 z-30 hidden md:block pointer-events-none">
        <div className="relative w-28 h-28 flex items-center justify-center">
          <svg className="animate-rotate-badge w-full h-full" viewBox="0 0 100 100">
            <path id="circlePath" d="M 50,50 m -37,0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0" fill="transparent" />
            <text fontSize="9" fontFamily="DM Sans" fontWeight="700" letterSpacing="3px" fill="rgb(var(--primary-rgb) / 1)">
              <textPath href="#circlePath" startOffset="0%">
                FLUTTER • REACT • AI/ML •
              </textPath>
            </text>
          </svg>
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-8 h-8 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center shadow-lg shadow-primary/25">
              <svg width="14" height="14" fill="none" stroke="white" strokeWidth="2" viewBox="0 0 24 24">
                <polyline points="16 18 22 12 16 6" />
                <polyline points="8 6 2 12 8 18" />
              </svg>
            </div>
          </div>
        </div>
      </div>
      {/* Main content — split layout */}
      <div className="relative z-20 w-full max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center min-h-[80vh]">

          {/* LEFT: Text content */}
          <div className="flex flex-col gap-8 order-2 lg:order-1">

            {/* Name + title */}
            <div className="animate-hero-fade" style={{animationDelay: '0.2s'}}>
              <h1 className="text-5xl md:text-7xl lg:text-8xl font-black leading-[0.88] tracking-tighter text-white mb-5">
                INSHIRAH<br />
                <span className="text-gradient-gold">HASSAN</span>
              </h1>

              {/* Animated role line */}
              <div className="flex items-center gap-3 mb-4">
                <div className="w-8 h-0.5 bg-gradient-to-r from-primary to-accent" />
                <p className="text-base md:text-lg text-white/70 font-semibold uppercase tracking-widest">
                  Software Engineer
                </p>
              </div>

              <p className="text-base md:text-lg text-white/50 font-medium max-w-lg leading-relaxed">
                Crafting intelligent software at the intersection of mobile engineering, AI, and machine learning.{' '}
                <span className="text-primary/70 font-semibold">🇦🇹 Ernst Mach Scholar, Austria</span>
              </p>
            </div>

            {/* Tech stack pills */}
            <div className="flex flex-wrap gap-2 animate-hero-fade" style={{animationDelay: '0.3s'}}>
              {['Flutter', 'React', 'AI/ML', 'Deep Learning', 'Firebase']?.map((tech, i) => (
                <span
                  key={tech}
                  className="px-3 py-1.5 rounded-full text-xs font-bold border border-primary/25 bg-primary/8 text-white/75 hover:border-primary/50 hover:bg-primary/15 transition-all duration-300 cursor-default"
                  style={{ animationDelay: `${0.3 + i * 0.05}s` }}
                >
                  {tech}
                </span>
              ))}
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-4 animate-hero-fade" style={{animationDelay: '0.4s'}}>
              <a
                href="#projects"
                className="group inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-gradient-to-r from-primary to-primary text-white font-black text-sm uppercase tracking-widest hover:from-primary hover:to-accent transition-all duration-500 shadow-2xl shadow-primary/20 hover:shadow-primary/35 hover:scale-105">
                View Work
                <svg width="15" height="15" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24" className="group-hover:translate-x-1 transition-transform duration-300">
                  <path d="M5 12h14" /><path d="m12 5 7 7-7 7" />
                </svg>
              </a>

              <a
                href="mailto:Inshk17@gmail.com"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full border border-white/15 bg-white/5 backdrop-blur-sm text-white font-bold text-sm hover:bg-white/10 hover:border-primary/35 transition-all duration-300">
                <svg width="15" height="15" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                  <rect width="20" height="16" x="2" y="4" rx="2" />
                  <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                </svg>
                Email Me
              </a>

              <a
                href="https://github.com/achylas"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full border border-white/15 bg-white/5 backdrop-blur-sm text-white font-bold text-sm hover:bg-white/10 hover:border-accent/35 transition-all duration-300">
                <svg width="15" height="15" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0 1 12 6.844a9.59 9.59 0 0 1 2.504.337c1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.02 10.02 0 0 0 22 12.017C22 6.484 17.522 2 12 2z" />
                </svg>
                GitHub
              </a>
            </div>

            {/* Scroll hint */}
            <div className="flex items-center gap-4 animate-hero-fade" style={{animationDelay: '0.55s'}}>
              <div className="w-10 h-px bg-gradient-to-r from-primary/55 to-transparent" />
              <span className="text-xs uppercase tracking-widest text-white/25 font-medium">Scroll to explore</span>
            </div>
          </div>

          {/* RIGHT: Profile photo */}
          <div className="flex justify-center lg:justify-end order-1 lg:order-2 animate-hero-fade" style={{animationDelay: '0.15s'}}>
            <div className="relative">
              {/* Outer spinning ring */}
              <div className="absolute -inset-3 rounded-[2rem] photo-ring opacity-70 blur-[2px]" />
              {/* Inner glow */}
              <div className="absolute -inset-1 rounded-[1.8rem] bg-gradient-to-br from-primary/35 to-accent/18 blur-[8px]" />

              {/* Photo container */}
              <div className="relative w-72 h-80 md:w-80 md:h-96 lg:w-[340px] lg:h-[420px] rounded-[1.5rem] overflow-hidden border-2 border-primary/35 hero-photo-glow animate-photo-reveal">
                <AppImage
                  src="/assets/images/image-1777057505508.png"
                  alt="Inshirah Hassan — Software Engineer, Flutter Developer and AI/ML enthusiast"
                  fill
                  className="object-cover object-top"
                  sizes="(max-width: 768px) 288px, (max-width: 1024px) 320px, 340px"
                  priority
                />
                {/* Subtle color overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-transparent to-transparent" />
                {/* Shimmer */}
                <div className="absolute inset-0 shimmer-effect" />
              </div>

              {/* Decorative corner dots */}
              <div className="absolute top-4 right-4 w-2 h-2 rounded-full bg-accent animate-neon-pulse" />
              <div className="absolute bottom-4 right-4 w-1.5 h-1.5 rounded-full bg-primary animate-neon-pulse" style={{animationDelay: '1s'}} />
            </div>
          </div>
        </div>
      </div>
      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2 animate-float">
        <div className="w-px h-12 bg-gradient-to-b from-primary/55 to-transparent" />
        <div className="w-1.5 h-1.5 rounded-full bg-primary/65" />
      </div>
    </section>
  );
}