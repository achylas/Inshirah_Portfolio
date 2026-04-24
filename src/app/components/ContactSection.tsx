'use client';

import React, { useState } from 'react';

export default function ContactSection() {
  const [copied, setCopied] = useState(false);

  const copyEmail = () => {
    navigator.clipboard?.writeText('Inshk17@gmail.com')?.then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };

  return (
    <section id="contact" className="py-24 md:py-32 px-6 md:px-12">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center gap-3 mb-16 reveal-up">
          <span className="text-xs font-black uppercase tracking-widest text-primary">05 — Contact</span>
          <div className="flex-1 h-px bg-gradient-to-r from-primary/40 to-transparent" />
        </div>

        {/* Dark CTA card */}
        <div className="relative overflow-hidden rounded-[2rem] bg-[#05030F] border border-primary/15 px-8 py-20 text-center reveal-scale">
          {/* Multi-layer radial glows */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[160%] h-[160%] pointer-events-none"
            style={{ background: 'radial-gradient(circle at center, rgb(var(--primary-rgb) / 0.15) 0%, rgb(var(--accent-rgb) / 0.05) 40%, transparent 65%)' }}
          />
          <div className="absolute top-0 left-0 w-full h-full pointer-events-none"
            style={{ background: 'radial-gradient(ellipse at top left, rgb(var(--primary-rgb) / 0.12) 0%, transparent 50%)' }}
          />
          <div className="absolute top-0 right-0 w-full h-full pointer-events-none"
            style={{ background: 'radial-gradient(ellipse at top right, rgb(var(--accent-rgb) / 0.08) 0%, transparent 50%)' }}
          />

          {/* Grid overlay */}
          <div className="absolute inset-0 opacity-[0.03]" style={{
            backgroundImage: 'linear-gradient(rgb(var(--primary-rgb) / 1) 1px, transparent 1px), linear-gradient(90deg, rgb(var(--primary-rgb) / 1) 1px, transparent 1px)',
            backgroundSize: '60px 60px'
          }} />

          {/* Floating decorative elements */}
          <div className="absolute top-8 left-8 opacity-15 text-5xl animate-float hidden lg:block" style={{ animationDelay: '0s' }}>📱</div>
          <div className="absolute bottom-8 right-8 opacity-15 text-6xl animate-float hidden lg:block" style={{ animationDelay: '2s' }}>💻</div>
          <div className="absolute top-16 right-16 opacity-15 text-4xl animate-float hidden lg:block" style={{ animationDelay: '4s' }}>🧠</div>
          <div className="absolute bottom-16 left-16 opacity-10 text-4xl animate-float-slow hidden lg:block" style={{ animationDelay: '1s' }}>⚡</div>

          {/* Neon corner accents */}
          <div className="absolute top-0 left-0 w-32 h-32 bg-gradient-to-br from-primary/20 to-transparent rounded-br-full pointer-events-none" />
          <div className="absolute bottom-0 right-0 w-32 h-32 bg-gradient-to-tl from-accent/15 to-transparent rounded-tl-full pointer-events-none" />

          <div className="relative z-10 max-w-3xl mx-auto">
            <h2 className="text-5xl md:text-7xl font-black tracking-tighter text-white mb-6 leading-[0.95]">
              Let&apos;s build<br />
              <span className="text-gradient-gold">something great.</span>
            </h2>

            <p className="text-lg text-white/55 mb-12 max-w-xl mx-auto leading-relaxed font-medium">
              Flutter developer, React engineer, AI/ML enthusiast. Currently in Graz, Austria — available for internships, freelance, and full-time roles from 2026.
            </p>

            {/* Action buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
              <button
                onClick={copyEmail}
                className="group inline-flex items-center gap-3 px-8 py-4 rounded-full bg-gradient-to-r from-primary to-primary text-white font-black text-sm uppercase tracking-widest hover:from-primary hover:to-accent hover:scale-105 transition-all duration-500 shadow-2xl shadow-primary/20 hover:shadow-primary/35"
              >
                {copied ? (
                  <>
                    <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                      <path d="M20 6 9 17l-5-5"/>
                    </svg>
                    Copied!
                  </>
                ) : (
                  <>
                    <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                      <rect width="20" height="16" x="2" y="4" rx="2"/>
                      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
                    </svg>
                    Inshk17@gmail.com
                  </>
                )}
              </button>

              <a
                href="https://github.com/achylas"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 px-8 py-4 rounded-full border border-white/20 text-white font-bold text-sm uppercase tracking-widest hover:bg-white/10 hover:border-accent/35 backdrop-blur-sm transition-all duration-300"
              >
                <svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0 1 12 6.844a9.59 9.59 0 0 1 2.504.337c1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.02 10.02 0 0 0 22 12.017C22 6.484 17.522 2 12 2z"/>
                </svg>
                GitHub
              </a>
            </div>

            {/* Stats row */}
            <div className="flex items-center justify-center gap-8 border-t border-white/8 pt-10">
              {[
                { value: '3.69', label: 'CGPA' },
                { value: '4+', label: 'Companies' },
                { value: '🇦🇹', label: 'Austria Now' },
                { value: '2026', label: 'Available' },
              ]?.map((stat, i) => (
                <React.Fragment key={stat?.label}>
                  {i > 0 && <div className="h-8 w-px bg-white/10 hidden sm:block" />}
                  <div className={`text-center ${i === 2 ? '' : ''}`}>
                    <p className="text-2xl font-black text-white">{stat?.value}</p>
                    <p className="text-xs uppercase tracking-widest text-white/35 mt-1">{stat?.label}</p>
                  </div>
                </React.Fragment>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}