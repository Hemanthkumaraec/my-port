import React from 'react';
import { ExternalLink, Github, Layers } from 'lucide-react';
import { PROJECTS } from '../constants';
import ScrollReveal from './ScrollReveal';

const Projects: React.FC = () => {
  return (
    <section id="projects" className="py-20 bg-secondary/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-text mb-4">Featured Projects</h2>
            <div className="w-20 h-1 bg-accent mx-auto rounded-full"></div>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {PROJECTS.map((project, index) => (
            <ScrollReveal key={index} delay={index * 150} className="h-full">
              <div 
                className="group bg-primary rounded-xl overflow-hidden border border-border hover:border-accent/50 transition-all duration-300 hover:shadow-lg hover:shadow-accent/5 h-full flex flex-col"
              >
                <div className="p-8 h-full flex flex-col">
                  <div className="flex justify-between items-start mb-4">
                    <div className="p-3 bg-secondary rounded-lg text-accent group-hover:bg-accent group-hover:text-white transition-colors">
                      <Layers className="w-6 h-6" />
                    </div>
                    
                    <div className="flex gap-3">
                      {/* Only show link button if link exists */}
                      {project.link && (
                        <a 
                          href={project.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-1 text-xs font-medium px-3 py-1.5 rounded-full bg-accent/10 text-accent hover:bg-accent hover:text-white transition-all"
                        >
                          Visit Site <ExternalLink className="w-3 h-3" />
                        </a>
                      )}
                    </div>
                  </div>

                  <h3 className="text-2xl font-bold text-text mb-2">{project.title}</h3>
                  {project.subtitle && (
                    <p className="text-sm text-accent mb-4 font-semibold uppercase tracking-wide">
                      {project.subtitle}
                    </p>
                  )}

                  <div className="flex-grow">
                    <ul className="space-y-2 mb-6">
                      {project.description.map((desc, i) => (
                        <li key={i} className="text-muted text-sm leading-relaxed flex items-start gap-2">
                          <span className="mt-1.5 w-1.5 h-1.5 bg-accent/60 rounded-full flex-shrink-0"></span>
                          {desc}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="flex flex-wrap gap-2 mt-auto pt-6 border-t border-border">
                    {project.technologies.map((tech) => (
                      <span 
                        key={tech} 
                        className="px-2 py-1 text-xs font-medium text-accent bg-accent/10 rounded border border-accent/10"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;