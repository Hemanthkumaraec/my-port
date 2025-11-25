import React from 'react';
import { Briefcase, Calendar, MapPin } from 'lucide-react';
import { EXPERIENCE, EDUCATION } from '../constants';
import ScrollReveal from './ScrollReveal';

const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-20 bg-secondary/50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-text mb-4">Professional Experience</h2>
            <div className="w-20 h-1 bg-accent mx-auto rounded-full"></div>
          </div>
        </ScrollReveal>

        <div className="relative">
          {/* Vertical Line */}
          <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 h-full w-px bg-border"></div>

          <div className="space-y-12">
            {EXPERIENCE.map((exp, index) => (
              <ScrollReveal key={index} delay={index * 100}>
                <div className={`relative flex flex-col md:flex-row gap-8 ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
                  
                  {/* Timeline Dot */}
                  <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 w-4 h-4 bg-accent rounded-full border-4 border-primary mt-1.5 z-10 shadow-sm"></div>

                  {/* Content */}
                  <div className="ml-12 md:ml-0 md:w-1/2 px-4">
                    <div className={`p-6 bg-primary rounded-xl border border-border hover:border-accent/30 transition-all shadow-sm hover:shadow-md ${index % 2 === 0 ? 'md:text-left' : 'md:text-right'}`}>
                      <h3 className="text-xl font-bold text-text flex flex-col md:block gap-1">
                        {exp.role} 
                        <span className="text-accent text-base font-normal md:ml-2">@ {exp.company}</span>
                      </h3>
                      
                      <div className={`flex flex-col md:flex-row gap-2 mt-2 text-sm text-muted ${index % 2 === 0 ? 'md:justify-start' : 'md:justify-end'}`}>
                        <span className="flex items-center gap-1">
                          <Calendar className="w-4 h-4" /> {exp.period}
                        </span>
                        <span className="hidden md:inline">•</span>
                        <span className="flex items-center gap-1">
                          <MapPin className="w-4 h-4" /> {exp.location}
                        </span>
                      </div>

                      <ul className={`mt-4 space-y-2 text-muted/90 text-sm list-disc list-inside ${index % 2 === 0 ? '' : 'md:[&>li]:list-none'}`}>
                        {exp.description.map((item, i) => (
                          <li key={i}>{item}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                  
                  {/* Spacer for the other side */}
                  <div className="hidden md:block md:w-1/2"></div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>

        {/* Education Section */}
        <div className="mt-20">
          <ScrollReveal>
            <h3 className="text-2xl font-bold text-text mb-8 text-center flex items-center justify-center gap-2">
              <Briefcase className="w-6 h-6 text-accent" /> Education
            </h3>
          </ScrollReveal>
          <div className="grid gap-6 md:grid-cols-1 max-w-3xl mx-auto">
            {EDUCATION.map((edu, index) => (
              <ScrollReveal key={index} delay={200}>
                <div className="bg-primary p-6 rounded-xl border border-border flex flex-col sm:flex-row justify-between items-start sm:items-center shadow-sm hover:shadow-md transition-all">
                  <div>
                    <h4 className="text-lg font-bold text-text">{edu.institution}</h4>
                    <p className="text-accent">{edu.degree}</p>
                    <p className="text-sm text-muted mt-1">{edu.details}</p>
                  </div>
                  <div className="mt-4 sm:mt-0 px-4 py-2 bg-secondary rounded-full text-sm font-medium text-text border border-border">
                    {edu.period}
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;