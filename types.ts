export interface SocialLink {
  platform: string;
  url: string;
  icon: string; // Icon name matching Lucide icon
}

export interface Experience {
  company: string;
  role: string;
  period: string;
  location: string;
  description: string[];
}

export interface Project {
  title: string;
  subtitle?: string;
  description: string[];
  technologies: string[];
  link?: string;
}

export interface Education {
  institution: string;
  degree: string;
  period: string;
  details: string;
}

export interface SkillCategory {
  name: string;
  skills: string[];
}

export interface SkillMetric {
  subject: string;
  A: number;
  fullMark: number;
}