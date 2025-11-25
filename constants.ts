import { Experience, Project, Education, SkillCategory, SkillMetric, SocialLink } from './types';

export const PROFILE = {
  name: "Hemanthkumar G",
  role: "Full Stack Developer",
  tagline: "Building creative solutions for meaningful web experiences.",
  location: "Salem, Tamil Nadu - 636305",
  email: "dev.hemanthk@gmail.com",
  phone: "+91 93633 99198",
  about: "Motivated Developer with a good understanding of programming and problem-solving. Passionate about learning and collaborating in teams to build creative solutions. Excited to grow and contribute to meaningful projects."
};

export const SOCIALS: SocialLink[] = [
  { platform: "LinkedIn", url: "https://linkedin.com/in/hemanth-g-kumar", icon: "Linkedin" },
  { platform: "GitHub", url: "https://github.com/Hemanthkumaraec", icon: "Github" },
  { platform: "Email", url: `mailto:${PROFILE.email}`, icon: "Mail" }
];

export const EXPERIENCE: Experience[] = [
  {
    company: "JS Creations",
    role: "Website & Web App Developer",
    period: "June 2025 – Oct 2025",
    location: "Salem, Tamil Nadu",
    description: [
      "Developed and maintained responsive websites using HTML, CSS, JavaScript, PHP, and MySQL.",
      "Built and deployed stock management and e-commerce platforms for retail clients.",
      "Key projects included Coimbatore Jewellers and RRR Silver Jewellery, delivering fully functional e-commerce solutions.",
      "Collaborated with clients and teams to deliver optimized, SEO-friendly web applications."
    ]
  },
  {
    company: "Algojaxon Global Soft Pvt. Ltd.",
    role: "Frontend Development Intern",
    period: "Mar 2025 – Jun 2025",
    location: "Salem, Tamil Nadu",
    description: [
      "Built responsive and interactive UI components using React, Ionic, and TypeScript.",
      "Implemented Redux for state management and integrated REST APIs for dynamic data.",
      "Participated in Agile sprints, code reviews, and collaborative development processes."
    ]
  }
];

export const PROJECTS: Project[] = [
  {
    title: "Coimbatore Jewellers",
    subtitle: "E-Commerce Platform",
    description: [
      "Developed a comprehensive e-commerce website for a jewelry retailer.",
      "Implemented product catalog management, secure user authentication, and shopping cart functionality.",
      "Optimized the site for mobile devices and search engines."
    ],
    technologies: ["PHP", "MySQL", "JavaScript", "HTML5", "CSS3"],
    link: "https://coimbatorejewellers.com/"
  },
  {
    title: "RRR Silver Jewellery",
    subtitle: "Online Jewelry Store",
    description: [
      "Built a responsive online store for silver jewelry with a focus on user experience.",
      "Features include dynamic product filtering, detailed product views, and a seamless checkout process.",
      "Managed database design for efficient inventory tracking."
    ],
    technologies: ["PHP", "MySQL", "Bootstrap", "jQuery"],
    link: "https://rrrsilverjewellery.com/"
  },
  {
    title: "Virtual Chemistry Lab",
    subtitle: "Educational Simulation (Under Development)",
    description: [
      "Creating an interactive virtual laboratory for educational purposes.",
      "Allows users to simulate chemical experiments and visualize reactions in a safe digital environment.",
      "Focusing on realistic solution mixing and apparatus manipulation logic."
    ],
    technologies: ["React", "Interactive UI", "Simulation Logic", "Web Tech"],
  },
  {
    title: "AI-Powered Virtual Try-On System",
    subtitle: "Final Year Project",
    description: [
      "Developed a real-time virtual try-on system using Python, Flask, OpenPose, DensePose, GANs, U2-Net, Ionic React, and Firebase.",
      "Integrated pose estimation and 3D body modeling for realistic garment overlays.",
      "Implemented a smart recommendation system to improve fit accuracy and user satisfaction."
    ],
    technologies: ["Python", "Flask", "React", "Ionic", "Firebase", "GANs"]
  }
];

export const EDUCATION: Education[] = [
  {
    institution: "Annapoorana Engineering College",
    degree: "Bachelor of Computer Science and Engineering",
    period: "2021 – 2025",
    details: "CGPA: 7.83 — Anna University, Tamil Nadu"
  }
];

export const SKILLS: SkillCategory[] = [
  {
    name: "Languages",
    skills: ["TypeScript", "JavaScript", "PHP", "HTML", "CSS", "Java", "Python"]
  },
  {
    name: "Frameworks & Tools",
    skills: ["ReactJS", "Ionic React", "NodeJS", "Redux", "Bootstrap", "WordPress", "Git", "GitHub"]
  },
  {
    name: "Databases & Others",
    skills: ["MySQL", "MongoDB", "Firebase", "REST API", "Responsive Design", "AJAX", "jQuery"]
  }
];

// Data for Recharts visualization
export const SKILL_METRICS: SkillMetric[] = [
  { subject: 'Frontend', A: 90, fullMark: 100 },
  { subject: 'Backend', A: 75, fullMark: 100 },
  { subject: 'Database', A: 80, fullMark: 100 },
  { subject: 'Mobile (Ionic)', A: 70, fullMark: 100 },
  { subject: 'AI Integration', A: 65, fullMark: 100 },
  { subject: 'DevOps/Tools', A: 70, fullMark: 100 },
];