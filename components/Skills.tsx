import React from 'react';
import { SKILLS, SKILL_METRICS } from '../constants';
import {
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  ResponsiveContainer,
  Tooltip
} from 'recharts';
import ScrollReveal from './ScrollReveal';

const Skills: React.FC = () => {
  return (
    <section id="skills" className="py-20 bg-primary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-text mb-4">Technical Proficiency</h2>
            <div className="w-20 h-1 bg-accent mx-auto rounded-full"></div>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Skill Tags */}
          <div className="space-y-8">
            {SKILLS.map((category, idx) => (
              <ScrollReveal key={idx} delay={idx * 100}>
                <div className="bg-secondary p-6 rounded-xl border border-border hover:border-accent/30 transition-colors shadow-sm">
                  <h3 className="text-xl font-semibold text-text mb-4 border-l-4 border-accent pl-3">
                    {category.name}
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill) => (
                      <span 
                        key={skill} 
                        className="px-3 py-1 bg-primary text-sm text-muted rounded-md border border-border hover:text-accent hover:border-accent transition-all cursor-default"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>

          {/* Visual Chart */}
          <ScrollReveal delay={300}>
            <div className="h-[400px] w-full bg-secondary rounded-xl border border-border p-4 shadow-sm flex flex-col justify-center">
              <h3 className="text-center text-text font-medium mb-4">Skill Distribution</h3>
              <ResponsiveContainer width="100%" height="100%">
                <RadarChart cx="50%" cy="50%" outerRadius="80%" data={SKILL_METRICS}>
                  <PolarGrid stroke="rgb(var(--color-border))" />
                  <PolarAngleAxis dataKey="subject" tick={{ fill: 'rgb(var(--color-muted))', fontSize: 12 }} />
                  <PolarRadiusAxis angle={30} domain={[0, 100]} tick={false} axisLine={false} />
                  <Radar
                    name="Proficiency"
                    dataKey="A"
                    stroke="rgb(var(--color-accent))"
                    strokeWidth={2}
                    fill="rgb(var(--color-accent))"
                    fillOpacity={0.2}
                  />
                  <Tooltip 
                    contentStyle={{ backgroundColor: 'rgb(var(--color-primary))', borderColor: 'rgb(var(--color-border))', color: 'rgb(var(--color-text))' }}
                    itemStyle={{ color: 'rgb(var(--color-accent))' }}
                  />
                </RadarChart>
              </ResponsiveContainer>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};

export default Skills;