'use client';

import React, { useState, useEffect, useCallback } from 'react';
import AppLogo from '@/components/ui/AppLogo';

export default function Header() {
  const [isDark, setIsDark] = useState(true);
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    document.documentElement?.classList?.add('dark');
  }, []);

  const toggleTheme = useCallback(() => {
    setIsDark((prev) => {
      const next = !prev;
      if (next) {
        document.documentElement?.classList?.add('dark');
      } else {
        document.documentElement?.classList?.remove('dark');
      }
      return next;
    });
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
      const sections = ['hero', 'about', 'skills', 'projects', 'experience', 'contact'];
      for (const id of sections?.reverse()) {
        const el = document.getElementById(id);
        if (el && window.scrollY >= el?.offsetTop - 120) {
          setActiveSection(id);
          break;
        }
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (menuOpen) {
      const close = () => setMenuOpen(false);
      window.addEventListener('scroll', close, { once: true });
      return () => window.removeEventListener('scroll', close);
    }
  }, [menuOpen]);

  const navLinks = [
    { label: 'About', href: '#about' },
    { label: 'Skills', href: '#skills' },
    { label: 'Projects', href: '#projects' },
    { label: 'Experience', href: '#experience' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? 'py-3 bg-background/85 backdrop-blur-xl border-b border-border' :'py-6 bg-transparent'
        }`}
      >
        <div className="mx-auto max-w-6xl px-6 flex items-center justify-between">
          {/* Logo */}
          <a href="#hero" className="flex items-center gap-2 group">
            <AppLogo
              size={36}
              className="group-hover:scale-105 transition-transform duration-300"
            />
            <span className="font-bold text-lg tracking-tight text-foreground hidden sm:block group-hover:text-primary transition-colors duration-300">
              Inshirah Hassan
            </span>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks?.map((link) => {
              const id = link?.href?.replace('#', '');
              return (
                <a
                  key={link?.label}
                  href={link?.href}
                  className={`text-sm font-medium transition-colors duration-200 relative group ${
                    activeSection === id
                      ? 'text-primary' :'text-muted-foreground hover:text-foreground'
                  }`}
                >
                  {link?.label}
                  <span
                    className={`absolute -bottom-0.5 left-0 h-px bg-gradient-to-r from-primary to-accent transition-all duration-300 ${
                      activeSection === id ? 'w-full' : 'w-0 group-hover:w-full'
                    }`}
                  />
                </a>
              );
            })}
          </nav>

          {/* Actions */}
          <div className="flex items-center gap-3">
            {/* Theme toggle */}
            <button
              onClick={toggleTheme}
              aria-label="Toggle dark/light mode"
              className="w-10 h-10 rounded-full border border-border flex items-center justify-center hover:border-primary/60 transition-all duration-300 hover:bg-primary/10 text-foreground hover:shadow-lg hover:shadow-primary/15"
            >
              {isDark ? (
                <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                  <circle cx="12" cy="12" r="5"/>
                  <line x1="12" y1="1" x2="12" y2="3"/>
                  <line x1="12" y1="21" x2="12" y2="23"/>
                  <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/>
                  <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/>
                  <line x1="1" y1="12" x2="3" y2="12"/>
                  <line x1="21" y1="12" x2="23" y2="12"/>
                  <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/>
                  <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/>
                </svg>
              ) : (
                <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                  <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/>
                </svg>
              )}
            </button>

            {/* CTA */}
            <a
              href="#contact"
              className="hidden sm:inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-gradient-to-r from-primary to-primary text-white text-sm font-bold tracking-wide hover:from-primary hover:to-accent hover:scale-105 transition-all duration-500 shadow-lg shadow-primary/20 hover:shadow-primary/35"
            >
              Hire Me
              <svg width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                <path d="M5 12h14"/><path d="m12 5 7 7-7 7"/>
              </svg>
            </a>

            {/* Hamburger */}
            <button
              onClick={() => setMenuOpen((p) => !p)}
              aria-label="Toggle menu"
              className="md:hidden w-10 h-10 flex flex-col items-center justify-center gap-1.5"
            >
              <span className={`block w-6 h-0.5 bg-foreground transition-all duration-300 ${menuOpen ? 'rotate-45 translate-y-2' : ''}`} />
              <span className={`block h-0.5 bg-foreground transition-all duration-300 ${menuOpen ? 'opacity-0 w-0' : 'w-4'}`} />
              <span className={`block w-6 h-0.5 bg-foreground transition-all duration-300 ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="fixed inset-0 z-40 bg-background/97 backdrop-blur-xl flex flex-col items-center justify-center gap-8 md:hidden">
          {/* Background orb */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-primary/15 rounded-full blur-[100px] pointer-events-none" />
          {navLinks?.map((link) => (
            <a
              key={link?.label}
              href={link?.href}
              onClick={() => setMenuOpen(false)}
              className="text-3xl font-black tracking-tight text-foreground hover:text-primary transition-colors relative group"
            >
              {link?.label}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-primary to-accent group-hover:w-full transition-all duration-300" />
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setMenuOpen(false)}
            className="mt-4 px-8 py-3 rounded-full bg-gradient-to-r from-primary to-primary text-white font-bold text-lg hover:from-primary hover:to-accent transition-all duration-500"
          >
            Hire Me
          </a>
        </div>
      )}
    </>
  );
}