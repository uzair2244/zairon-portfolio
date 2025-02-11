import React from 'react';
import { ExternalLink, Github, Building2, Cloud, Car, Brain, Box, Shield, ShoppingCart } from 'lucide-react';

const ProjectCard = ({ project }) => (
  <div className="group relative bg-white/5 rounded-xl overflow-hidden border border-white/10 hover:border-cyan-500/50 transition-colors duration-300">
    <div className="relative aspect-video overflow-hidden">
      <img
        src={project.image}
        alt={project.title}
        className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
    </div>
    
    <div className="p-6 space-y-4">
      {/* Project Category Badge */}
      <div className="flex items-center gap-2">
        <span className="p-2 rounded-lg bg-white/5 text-cyan-400">
          {project.icon}
        </span>
        <span className="text-sm text-white/70">{project.category}</span>
      </div>

      {/* Project Title */}
      <h3 className="text-xl font-bold text-white group-hover:text-cyan-400 transition-colors">
        {project.title}
      </h3>

      {/* Project Description */}
      <p className="text-white/70 text-sm leading-relaxed">
        {project.description}
      </p>

      {/* Tech Stack */}
      <div className="flex flex-wrap gap-2">
        {project.technologies.map((tech, index) => (
          <span 
            key={index}
            className="px-2 py-1 text-xs rounded-full bg-white/5 text-white/70 border border-white/10"
          >
            {tech}
          </span>
        ))}
      </div>

      {/* Action Links */}
      <div className="flex gap-4 pt-4">
        <a 
          href={project.liveLink}
          className="flex items-center gap-2 text-sm text-cyan-400 hover:text-cyan-300 transition-colors"
        >
          <ExternalLink className="w-4 h-4" />
          Live Demo
        </a>
        <a 
          href={project.githubLink}
          className="flex items-center gap-2 text-sm text-white/70 hover:text-white transition-colors"
        >
          <Github className="w-4 h-4" />
          Source Code
        </a>
      </div>
    </div>
  </div>
);

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "SaaS Analytics Platform",
      category: "SaaS Product",
      description: "A comprehensive analytics platform for SaaS businesses with real-time metrics, customer behavior tracking, and predictive analytics capabilities.",
      image: "/assets/Azure development Services.jpg",
      icon: <Brain className="w-4 h-4" />,
      technologies: ["React", "Node.js", "PostgreSQL", "Redis", "AWS"],
      liveLink: "#",
      githubLink: "#"
    },
    {
      id: 2,
      title: "Modern E-commerce Platform",
      category: "E-commerce",
      description: "Full-featured e-commerce platform with real-time inventory management, secure payment processing, and personalized shopping experiences.",
      image: "/assets/Cosmetics e-commerce mobile app design_.jpg",
      icon: <ShoppingCart className="w-4 h-4" />,
      technologies: ["React", "Node.js", "MongoDB", "Stripe", "Redux"],
      liveLink: "#",
      githubLink: "#"
},
    {
      id: 3,
      title: "Construction Softwares",
      category: "Construction Domain",
      description: "Digital platform for construction project management with resource allocation, timeline tracking, and automated reporting features.",
      image: "/assets/Building Information Modeling (BIM) Concept in Architecture.jpg",
      icon: <Building2 className="w-4 h-4" />,
      technologies: ["Next.js", "Python", "MongoDB", "Docker", "Azure"],
      liveLink: "#",
      githubLink: "#"
    },
    {
      id: 4,
      title: "Cloud Drive Solution",
      category: "Drive Management",
      description: "Secure cloud storage platform with advanced file management, sharing capabilities, and automated backup systems.",
      image: "/assets/Understanding CNAPP_ A Comprehensive Guide to Cloud-Native Application Protection Platforms.jpg",
      icon: <Cloud className="w-4 h-4" />,
      technologies: ["Vue.js", "Go", "MySQL", "Redis", "GCP"],
      liveLink: "#",
      githubLink: "#"
    },
    {
      id: 5,
      title: "Fleet Management System",
      category: "Transportation",
      description: "Comprehensive fleet management solution with real-time tracking, maintenance scheduling, and fuel efficiency analytics.",
      image: "/assets/Uber App Development Cost in 2024.jpg",
      icon: <Car className="w-4 h-4" />,
      technologies: ["React Native", "Node.js", "MongoDB", "Socket.io"],
      liveLink: "#",
      githubLink: "#"
    },
    {
      id: 6,
      title: "Inventory Control System",
      category: "Enterprise Solution",
      description: "Smart inventory management system with predictive stock forecasting and automated reordering capabilities.",
      image: "/assets/The Ultimate Guide to Choosing the Right Etsy Listing Software for Your Business.jpg",
      icon: <Box className="w-4 h-4" />,
      technologies: ["Angular", "Java Spring", "PostgreSQL", "ElasticSearch"],
      liveLink: "#",
      githubLink: "#"
    }
  ];

  return (
    <section className="relative min-h-screen bg-black py-24 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-black to-cyan-900/20" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-cyan-900/20 via-transparent to-transparent opacity-40" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white via-cyan-400 to-purple-400">
            Featured Projects
          </h2>
          <p className="mt-4 text-white/70 text-lg max-w-2xl mx-auto">
            Explore my latest works spanning various domains and technologies
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;