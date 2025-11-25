import React from 'react';
import { Mail, Phone, MapPin, Linkedin, Github } from 'lucide-react';
import { PROFILE, SOCIALS } from '../constants';
import ScrollReveal from './ScrollReveal';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-20 bg-primary border-t border-border">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <ScrollReveal>
          <h2 className="text-3xl md:text-4xl font-bold text-text mb-8">Let's Connect</h2>
          <p className="text-muted text-lg mb-12">
            I'm currently looking for new opportunities. Whether you have a question or just want to say hi, 
            I'll try my best to get back to you!
          </p>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <div className="flex flex-col items-center p-6 bg-secondary rounded-xl border border-border hover:border-accent/50 transition-colors shadow-sm">
              <Mail className="w-8 h-8 text-accent mb-4" />
              <h3 className="text-text font-medium mb-2">Email</h3>
              <a href={`mailto:${PROFILE.email}`} className="text-muted text-sm hover:text-accent transition-colors">
                {PROFILE.email}
              </a>
            </div>
            
            <div className="flex flex-col items-center p-6 bg-secondary rounded-xl border border-border hover:border-accent/50 transition-colors shadow-sm">
              <Phone className="w-8 h-8 text-accent mb-4" />
              <h3 className="text-text font-medium mb-2">Phone</h3>
              <a href={`tel:${PROFILE.phone}`} className="text-muted text-sm hover:text-accent transition-colors">
                {PROFILE.phone}
              </a>
            </div>

            <div className="flex flex-col items-center p-6 bg-secondary rounded-xl border border-border hover:border-accent/50 transition-colors shadow-sm">
              <MapPin className="w-8 h-8 text-accent mb-4" />
              <h3 className="text-text font-medium mb-2">Location</h3>
              <span className="text-muted text-sm">
                {PROFILE.location}
              </span>
            </div>
          </div>

          <div className="flex justify-center space-x-8">
            {SOCIALS.map((social) => (
               <a
               key={social.platform}
               href={social.url}
               target="_blank"
               rel="noopener noreferrer"
               className="text-muted hover:text-accent transition-colors"
             >
               <span className="sr-only">{social.platform}</span>
               {social.icon === 'Linkedin' && <Linkedin className="w-6 h-6" />}
               {social.icon === 'Github' && <Github className="w-6 h-6" />}
               {social.icon === 'Mail' && <Mail className="w-6 h-6" />}
             </a>
            ))}
          </div>

          <footer className="mt-16 pt-8 border-t border-border text-muted text-sm">
            <p>© {new Date().getFullYear()} {PROFILE.name}. All rights reserved.</p>
          </footer>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default Contact;