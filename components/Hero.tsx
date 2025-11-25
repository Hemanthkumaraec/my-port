import React from 'react';
import { ArrowRight, Download, Github, Linkedin, Mail, Terminal } from 'lucide-react';
import { PROFILE, SOCIALS } from '../constants';
import ScrollReveal from './ScrollReveal';

const Hero: React.FC = () => {
  // Map strings to components explicitly
  const iconMap: Record<string, React.ElementType> = {
    Linkedin,
    Github,
    Mail
  };

  const handleScroll = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const headerOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  return (
    <section id="about" className="relative min-h-screen flex items-center justify-center pt-16 overflow-hidden bg-primary">
      {/* Technical Grid Background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgb(var(--color-border)/0.3)_1px,transparent_1px),linear-gradient(to_bottom,rgb(var(--color-border)/0.3)_1px,transparent_1px)] bg-[size:24px_24px]"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-primary via-transparent to-transparent"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          
          {/* Left Column: Text Content */}
          <div className="flex-1 text-center lg:text-left">
            <ScrollReveal>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent/10 border border-accent/20 text-accent text-sm font-medium mb-6">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-accent"></span>
                </span>
                Available for new opportunities
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold text-text tracking-tight mb-6">
                Hello, I'm <br />
                <span className="text-accent">{PROFILE.name}</span>
              </h1>

              <p className="text-xl sm:text-2xl text-text/80 font-medium mb-4">
                {PROFILE.role}
              </p>

              <p className="text-muted text-base sm:text-lg leading-relaxed max-w-2xl mx-auto lg:mx-0 mb-8">
                {PROFILE.tagline}
              </p>

              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4">
                <button 
                  onClick={() => handleScroll('projects')}
                  className="px-6 py-3 bg-accent text-white font-semibold rounded-lg hover:bg-accent/90 transition-all shadow-lg hover:shadow-accent/25 flex items-center gap-2"
                >
                  View My Work
                  <ArrowRight className="w-4 h-4" />
                </button>
                
                <a 
                  href="/resume.pdf"
                  download="Hemanthkumar_G_Resume.pdf"
                  className="px-6 py-3 bg-transparent border border-border text-text font-medium rounded-lg hover:bg-secondary transition-all flex items-center gap-2"
                >
                  Download CV
                  <Download className="w-4 h-4" />
                </a>

                <button 
                  onClick={() => handleScroll('contact')}
                  className="px-6 py-3 bg-transparent border border-border text-text font-medium rounded-lg hover:bg-secondary transition-all flex items-center gap-2"
                >
                  Contact Me
                </button>
              </div>

              <div className="mt-10 flex items-center justify-center lg:justify-start gap-6">
                {SOCIALS.map((social) => {
                  const IconComponent = iconMap[social.icon];
                  return (
                    <a
                      key={social.platform}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-muted hover:text-accent transition-colors transform hover:scale-110"
                      aria-label={social.platform}
                    >
                      {IconComponent && <IconComponent className="w-6 h-6" />}
                    </a>
                  );
                })}
              </div>
            </ScrollReveal>
          </div>

          {/* Right Column: Code Window Visual */}
          <div className="flex-1 w-full max-w-lg lg:max-w-none">
            <ScrollReveal delay={200}>
              <div className="relative rounded-xl bg-secondary border border-border shadow-2xl overflow-hidden">
                {/* Window Header */}
                <div className="flex items-center gap-2 px-4 py-3 border-b border-border bg-primary/50">
                  <div className="flex gap-1.5">
                    <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-500/80"></div>
                    <div className="w-3 h-3 rounded-full bg-green-500/80"></div>
                  </div>
                  <div className="ml-4 flex items-center gap-2 text-xs text-muted font-mono">
                    <Terminal className="w-3 h-3" />
                    developer_profile.ts
                  </div>
                </div>

                {/* Window Content */}
                <div className="p-6 overflow-x-auto">
                  <pre className="font-mono text-sm leading-relaxed">
                    <code className="block">
                      <span className="text-accent">const</span> <span className="text-text">developer</span> <span className="text-accent">=</span> <span className="text-muted">{'{'}</span>
                      {'\n'}
                      <div className="pl-4">
                        <span className="text-text">name:</span> <span className="text-green-600 dark:text-green-400">'{PROFILE.name}'</span>,
                        {'\n'}
                        <span className="text-text">role:</span> <span className="text-green-600 dark:text-green-400">'{PROFILE.role}'</span>,
                        {'\n'}
                        <span className="text-text">location:</span> <span className="text-green-600 dark:text-green-400">'{PROFILE.location.split(',')[0]}'</span>,
                        {'\n'}
                        <span className="text-text">traits:</span> <span className="text-muted">['</span>
                        <span className="text-green-600 dark:text-green-400">Creative</span>
                        <span className="text-muted">', '</span>
                        <span className="text-green-600 dark:text-green-400">Problem Solver</span>
                        <span className="text-muted">']</span>,
                        {'\n'}
                        <span className="text-text">focus:</span> <span className="text-green-600 dark:text-green-400">'Building meaningful experiences'</span>
                      </div>
                      <span className="text-muted">{'};'}</span>
                    </code>
                  </pre>
                </div>

                {/* Decorative glow behind the card */}
                <div className="absolute -inset-1 bg-accent/20 blur-xl -z-10 rounded-xl opacity-0 lg:opacity-100"></div>
              </div>
            </ScrollReveal>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;