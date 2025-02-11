import React from "react";
import { Shield, Rocket, Code2, Users, Zap, Clock } from "lucide-react";
import { Link } from "react-router-dom";

const FeatureCard = ({ icon: Icon, title, description }) => (
  <div className="group relative p-6 bg-white/5 rounded-xl border border-white/10 hover:border-cyan-500/30 transition-all duration-300">
    <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl" />

    <div className="relative space-y-4">
      <div className="inline-flex p-3 rounded-lg bg-white/5 text-cyan-400">
        <Icon className="w-6 h-6" />
      </div>

      <h3 className="text-xl font-semibold text-white group-hover:text-cyan-400 transition-colors">
        {title}
      </h3>

      <p className="text-white/70 leading-relaxed">{description}</p>
    </div>
  </div>
);

const WhyUs = () => {
  const features = [
    {
      icon: Rocket,
      title: "Innovation First",
      description:
        "We leverage cutting-edge technologies and modern development practices to deliver solutions that are ahead of the curve.",
    },
    {
      icon: Shield,
      title: "Security Focused",
      description:
        "Every solution is built with security at its core, implementing industry best practices and robust protection measures.",
    },
    {
      icon: Code2,
      title: "Clean Code",
      description:
        "Our development process emphasizes clean, maintainable code that scales with your business needs and future requirements.",
    },
    {
      icon: Users,
      title: "Collaborative Approach",
      description:
        "We work closely with our clients, ensuring transparent communication and alignment throughout the development process.",
    },
    {
      icon: Zap,
      title: "Performance Optimized",
      description:
        "Every solution is fine-tuned for optimal performance, ensuring fast load times and smooth user experiences.",
    },
    {
      icon: Clock,
      title: "Timely Delivery",
      description:
        "We understand the importance of time-to-market and consistently deliver projects within agreed timelines.",
    },
  ];

  return (
    <section className="relative min-h-screen bg-black py-24 overflow-hidden">
      {/* Background Elements */}
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
      <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-[120px] animate-pulse" />
      <div className="absolute bottom-1/3 right-1/4 w-96 h-96 bg-cyan-500/20 rounded-full blur-[120px] animate-pulse delay-700" />

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-5xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white via-cyan-400 to-purple-400">
            Why Choose Us?
          </h2>
          <p className="text-lg text-white/70">
            We combine technical expertise with creative problem-solving to
            deliver exceptional digital solutions that drive real business
            value.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
            />
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-20 text-center">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-white/5 border border-white/10 text-white/70 text-sm">
            <span className="w-2 h-2 rounded-full bg-cyan-400 mr-2 animate-pulse" />
            Ready to start your project?
          </div>
          <div className="mt-6">
            <Link to='/contact'>
              <button className="px-8 py-4 cursor-pointer rounded-xl bg-gradient-to-r from-cyan-500 to-purple-500 text-white font-semibold hover:scale-105 transition-transform duration-300">
                Get in Touch
              </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyUs;
