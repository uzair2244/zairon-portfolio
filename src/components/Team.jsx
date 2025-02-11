import React from 'react';
import { Code2, Cpu, Globe2, Rocket, Users, Database, Server, Linkedin, Github, Instagram } from 'lucide-react';

const TechBadge = ({ children }) => (
  <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-white/10 text-white border border-white/20 hover:border-white/40 hover:bg-white/20 transition-colors duration-300">
    {children}
  </span>
);

const TeamMemberCard = ({ name, role, description, technologies, imageUrl, linkedInUrl, gitHubUrl }) => (
  <div className="bg-white/5 rounded-xl p-6 border border-white/10 hover:border-cyan-500/50 transition-all duration-300 hover:scale-[1.02] flex flex-col min-h-[400px]">
    {/* Main content wrapper */}
    <div className="flex-grow space-y-4">
      {/* Profile section */}
      <div className="flex items-center gap-4">
        <div className="relative w-20 h-20">
          <img
            src={imageUrl || "/api/placeholder/80/80"}
            alt={name}
            className="rounded-full object-cover w-full h-full border-2 border-cyan-500/30"
          />
          <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-purple-500/20 via-transparent to-cyan-500/20 mix-blend-overlay" />
        </div>
        <div>
          <h3 className="text-xl font-bold text-white">{name}</h3>
          <p className="text-cyan-400">{role}</p>
        </div>
      </div>

      {/* Description */}
      <p className="text-white/70">{description}</p>

      {/* Technologies */}
      <div className="flex flex-wrap gap-2">
        {technologies.map((tech, i) => (
          <TechBadge key={i}>{tech}</TechBadge>
        ))}
      </div>
    </div>

    {/* Social Links - now will stick to bottom */}
    <div className="flex justify-end items-center space-x-6 pt-4 mt-4 border-t border-white/10">
      <a 
        href={linkedInUrl}
        target="_blank" 
        rel="noopener noreferrer"
        className="text-white/70 hover:text-white transition-colors duration-300 hover:scale-110 transform"
      >
        <Linkedin size={28} />
      </a>
      <a 
        href={gitHubUrl}
        target="_blank" 
        rel="noopener noreferrer"
        className="text-white/70 hover:text-white transition-colors duration-300 hover:scale-110 transform"
      >
        <Github size={28} />
      </a>
    </div>
  </div>
);

const Team = () => {
  const teamMembers = [
    {
      name: "Uzair Shahid",
      role: "Lead Full Stack Developer",
      description: "Specialized in MERN stack development with a focus on creating scalable web and mobile applications and managing team operations.",
      technologies: ["React", "React Native", "Next JS", "MUI", "Tailwind", "Minimals", "Node.js", "MongoDB", "Express", "Redux", "App Development"],
      imageUrl: "/path/to/uzair.jpg",
      linkedInUrl: "https://www.linkedin.com/in/muhammad-uzair-shahid-rao/",
      gitHubUrl: ""
    },
    {
      name: "Zubair Shahid",
      role: "Lead Backend Developer",
      description: "Expert in building robust and scalable backend architectures with MERN stack, Inversify JS, focusing on system optimization and database management.",
      technologies: ["Node.js", "Express", "MongoDB", "REST APIs", "Docker", "Microservices", "Dependency Injections", "inversion Of Control", "TypeScript"],
      imageUrl: "/path/to/zubair.jpg",
      linkedInUrl: "",
      gitHubUrl: ""
    },
    {
      name: "Talha Zahid",
      role: "Lead Full Stack Developer",
      description: "Master of Laravel and PHP ecosystem, specializing in creating efficient and secure web applications.",
      technologies: ["Laravel","Cold Fusion", "Java", "JavaFx", "Enactor","React JS","Laminas", "Symphony", "PHP", "Mongo DB", "MySQL", "Vue.js", "Apache", "Nginx", "Redis", "REST APIs", "AWS", "Google Cloud VM"],
      imageUrl: "/path/to/talha.jpg",
      linkedInUrl: "",
      gitHubUrl: ""
    },
    {
      name: "Waqar Ahmad",
      role: "Lead Odoo Developer",
      description: "Master of Laravel and PHP ecosystem, specializing in creating efficient and secure web applications.",
      technologies: ["Laravel","Cold Fusion", "PHP", "MySQL", "Vue.js", "Redis", "REST APIs"],
      imageUrl: "/path/to/talha.jpg",
      linkedInUrl: "",
      gitHubUrl: ""
    },
    {
      name: "Jawad Haleem",
      role: "AI Engineer",
      description: "Master of Laravel and PHP ecosystem, specializing in creating efficient and secure web applications.",
      technologies: ["Laravel","Cold Fusion", "PHP", "MySQL", "Vue.js", "Redis", "REST APIs"],
      imageUrl: "/path/to/talha.jpg",
      linkedInUrl: "",
      gitHubUrl: ""
    }
  ];

  const companyTechnologies = [
    { 
      name: "Frontend Excellence", 
      icon: <Code2 className="w-4 h-4 text-cyan-400" />, 
      items: ["React", "Vue.js", "Next.js", "Tailwind CSS", "Redux"] 
    },
    { 
      name: "Backend Mastery", 
      icon: <Server className="w-4 h-4 text-cyan-400" />, 
      items: ["Node.js", "Laravel", "Express", "PHP", "Microservices"] 
    },
    { 
      name: "Database Solutions", 
      icon: <Database className="w-4 h-4 text-cyan-400" />, 
      items: ["MongoDB", "MySQL", "Redis", "PostgreSQL"] 
    },
    { 
      name: "Development Tools", 
      icon: <Globe2 className="w-4 h-4 text-cyan-400" />, 
      items: ["Git", "Docker", "AWS", "CI/CD", "Jira"] 
    }
  ];

  return (
    <section className="relative min-h-screen bg-black py-24 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-black to-cyan-900/20" />
        <div 
          className="absolute inset-0 opacity-30"
          style={{
            backgroundImage: 'radial-gradient(circle at 50% 50%, rgba(255,255,255,0.1) 1px, transparent 1px)',
            backgroundSize: '3rem 3rem',
            maskImage: 'radial-gradient(circle at 50% 50%, black, transparent 70%)'
          }}
        />
      </div>

      {/* Glowing orbs */}
      <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-purple-500/20 rounded-full blur-[120px] animate-pulse" />
      <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-cyan-500/20 rounded-full blur-[120px] animate-pulse delay-700" />

      <div className="container mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-white/5 border border-white/10 text-white/70 text-sm mb-6">
            <Users className="w-4 h-4 mr-2 text-cyan-400" />
            Our Team
          </div>
          <h2 className="text-5xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white via-cyan-400 to-purple-400">
            Meet the Experts
          </h2>
          <p className="mt-6 text-lg text-white/70 max-w-2xl mx-auto">
            A dynamic team of developers bringing together diverse expertise in modern web technologies
            to deliver exceptional digital solutions.
          </p>
        </div>

        {/* Team Members Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-20">
          {teamMembers.map((member, index) => (
            <TeamMemberCard key={index} {...member} />
          ))}
        </div>

        {/* Technologies Section */}
        <div className="bg-white/5 rounded-2xl p-8 border border-white/10">
          <h3 className="text-2xl font-bold text-white mb-8 text-center">Our Technology Stack</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {companyTechnologies.map((tech, index) => (
              <div key={index} className="space-y-4">
                <div className="flex items-center gap-2 text-white">
                  {tech.icon}
                  <h4 className="font-semibold">{tech.name}</h4>
                </div>
                <div className="flex flex-wrap gap-2">
                  {tech.items.map((item, i) => (
                    <TechBadge key={i}>{item}</TechBadge>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Team;