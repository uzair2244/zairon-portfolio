import React from "react";
import { Github, Linkedin, Twitter, Mail, Award, BookOpen, Calendar, Lightbulb, Rocket, PenTool, Mic, Users } from "lucide-react";
import { Link } from "react-router-dom";
import ChatBotComponent from "./ChatBot";

const SocialLink = ({ icon: Icon, href, label }) => (
  <a 
    href={href} 
    target="_blank" 
    rel="noopener noreferrer" 
    className="p-2 rounded-full bg-white/5 hover:bg-white/10 text-white/70 hover:text-cyan-400 transition-all duration-300"
    aria-label={label}
  >
    <Icon className="w-5 h-5" />
  </a>
);

const AchievementCard = ({ icon: Icon, title, description }) => (
  <div className="flex items-start p-4 bg-white/5 rounded-lg border border-white/10">
    <div className="p-2 mr-4 rounded-md bg-cyan-500/20 text-cyan-400">
      <Icon className="w-5 h-5" />
    </div>
    <div>
      <h4 className="font-medium text-white mb-1">{title}</h4>
      <p className="text-white/70 text-sm">{description}</p>
    </div>
  </div>
);

const FounderProfile = ({ 
  name, 
  role, 
  bio, 
  imageSrc, 
  socialLinks, 
  achievements,
  expertise
}) => (
  <div className="group relative p-8 bg-white/5 rounded-2xl border border-white/10 hover:border-purple-500/30 transition-all duration-300">
    <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-cyan-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl" />
    
    <div className="relative grid grid-cols-1 md:grid-cols-3 gap-8">
      {/* Left column - Image and social */}
      <div className="space-y-6">
        <div className="relative">
          <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-2xl blur opacity-50 group-hover:opacity-75 transition duration-300"></div>
          <div className="relative overflow-hidden rounded-xl aspect-square">
            <img 
              src={imageSrc || "/api/placeholder/400/400"} 
              alt={name} 
              className="w-full h-full object-cover"
            />
          </div>
        </div>
        
        <div className="flex justify-center space-x-3 pt-2">
          {socialLinks.map((link, index) => (
            <SocialLink key={index} {...link} />
          ))}
        </div>
      </div>
      
      {/* Right column - Details */}
      <div className="md:col-span-2 space-y-6">
        <div>
          <h2 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white via-cyan-400 to-purple-400">
            {name}
          </h2>
          <p className="text-lg text-purple-300 mt-1">{role}</p>
        </div>
        
        <div className="space-y-4">
          <p className="text-white/70 leading-relaxed">{bio}</p>
        </div>
        
        <div className="space-y-3">
          <h3 className="text-xl font-semibold text-white">Areas of Expertise</h3>
          <div className="flex flex-wrap gap-2">
            {expertise.map((skill, index) => (
              <span 
                key={index} 
                className="px-3 py-1 text-sm rounded-full bg-gradient-to-r from-cyan-500/20 to-purple-500/20 border border-white/10 text-white/90"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
        
        <div className="space-y-3">
          <h3 className="text-xl font-semibold text-white">Achievements & Milestones</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {achievements.map((achievement, index) => (
              <AchievementCard key={index} {...achievement} />
            ))}
          </div>
        </div>
      </div>
    </div>
  </div>
);

const Founders = () => {
  const foundersData = [
    {
      name: "M Uzair Shahid Rao",
      role: "Founder & CEO",
      bio: "M. Uzair Shahid Rao, our founder, is a passionate technology leader with expertise in building scalable and efficient digital solutions. With a strong background in full-stack development, real-time systems, and product architecture, he has led the development of innovative applications that enhance user experiences. His vision for leveraging technology to solve complex challenges drives our company's growth, innovation, and commitment to excellence.",
      imageSrc: "/assets/profile.jpg", // Replace with actual image path
      socialLinks: [
        { icon: Github, href: "https://github.com/uzair2244", label: "GitHub Profile" },
        { icon: Linkedin, href: "https://www.linkedin.com/in/muhammad-uzair-shahid-rao/", label: "LinkedIn Profile" },
        { icon: Twitter, href: "https://x.com/uxi_ee", label: "Twitter Profile" },
        { icon: Mail, href: "mailto:uzirao17@gmail.com", label: "Email Uzair" },
      ],
      expertise: [
        "Full-Stack Development",
        "System Architecture",
        "Real-Time Applications",
        "Cloud Infrastructure",
        "Technical Leadership",
        "Product Strategy"
    ],
    achievements: [
      {
        icon: Rocket,
        title: "Startup Enthusiast",
        description: "Built and launched innovative projects, exploring tech-driven solutions."
      },
      {
        icon: PenTool,
        title: "Tech Blogger",
        description: "Writes about web development, startups, and emerging tech trends."
      },
      {
        icon: Mic,
        title: "Community Speaker",
        description: "Participated in local tech meetups, sharing insights on MERN stack development."
      },
      {
        icon: Users,
        title: "Team Collaborator",
        description: "Worked with talented teams on real-world projects, enhancing problem-solving skills."
      }
    ]    
    },
    // {
    //   name: "Marcus Wilson",
    //   role: "Co-Founder & CTO",
    //   bio: "Marcus is a visionary technologist with deep expertise in emerging technologies. His background in computer science and experience building scalable systems has been instrumental in developing our core technology platform. Marcus leads our R&D initiatives and ensures we stay at the forefront of technological advancement.",
    //   imageSrc: "/api/placeholder/400/400", // Replace with actual image path
    //   socialLinks: [
    //     { icon: Github, href: "https://github.com/example2", label: "GitHub Profile" },
    //     { icon: Linkedin, href: "https://linkedin.com/in/example2", label: "LinkedIn Profile" },
    //     { icon: Twitter, href: "https://twitter.com/example2", label: "Twitter Profile" },
    //     { icon: Mail, href: "mailto:marcus@example.com", label: "Email Marcus" },
    //   ],
    //   expertise: [
    //     "Distributed Systems", 
    //     "Performance Optimization", 
    //     "DevOps & SRE", 
    //     "Blockchain",
    //     "Real-time Processing"
    //   ],
    //   achievements: [
    //     {
    //       icon: Award,
    //       title: "Open Source Contributor",
    //       description: "Major contributor to several key open-source projects in the cloud-native ecosystem."
    //     },
    //     {
    //       icon: BookOpen,
    //       title: "Tech Mentor",
    //       description: "Mentored over 50 junior developers who have gone on to leadership positions."
    //     },
    //     {
    //       icon: Calendar,
    //       title: "Hackathon Champion",
    //       description: "Winner of multiple international hackathons for innovative solutions."
    //     },
    //     {
    //       icon: Lightbulb,
    //       title: "Research Publications",
    //       description: "Published 12 papers on distributed systems and real-time data processing."
    //     }
    //   ]
    // }
  ];

  return (
    <section className="relative min-h-screen bg-black py-24 overflow-hidden">
      {/* Background Elements - same style as WhyUs */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-black to-cyan-900/20" />
        <div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage:
              "radial-gradient(circle at 50% 50%, rgba(255,255,255,0.1) 1px, transparent 1px)",
            backgroundSize: "3rem 3rem",
            maskImage:
              "radial-gradient(circle at 50% 50%, black, transparent 70%)",
          }}
        />
      </div>

      {/* Glowing orbs */}
      <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-[120px] animate-pulse" />
      <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-cyan-500/20 rounded-full blur-[120px] animate-pulse delay-700" />

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-5xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white via-purple-400 to-cyan-400">
            Meet Our Founders
          </h2>
          <p className="text-lg text-white/70">
            Visionary leaders with a passion for technology and innovation, committed to delivering exceptional solutions and driving your success.
          </p>
        </div>

        {/* Founders Profiles */}
        <div className="space-y-16">
          {foundersData.map((founder, index) => (
            <FounderProfile key={index} {...founder} />
          ))}
        </div>

        {/* Bottom CTA - similar to WhyUs */}
        <div className="mt-20 text-center">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-white/5 border border-white/10 text-white/70 text-sm">
            <span className="w-2 h-2 rounded-full bg-purple-400 mr-2 animate-pulse" />
            Want to join our team?
          </div>
          <div className="mt-6">
            <Link to='/contact'>
              <button className="px-8 py-4 cursor-pointer rounded-xl bg-gradient-to-r from-purple-500 to-cyan-500 text-white font-semibold hover:scale-105 transition-transform duration-300">
                Get in Touch
              </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Founders;