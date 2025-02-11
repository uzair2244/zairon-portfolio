import React, { useState } from 'react';
import { Github, Linkedin, Instagram } from 'lucide-react';
import emailjs from "@emailjs/browser";

const Contact = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const resetForm = () =>{
    setFormData({ name: "", email: "", message: "" });
  }
  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .send(
        "service_abfdtp7",   
        "template_i6ovo2m", 
        formData,
        "Jv9tFYdiT5JJkV1Dd"   
      )
      .then(
        (response) => {
          console.log("Email sent successfully!", response);
          resetForm()
        },
        (error) => {
          console.error("Error sending email:", error);
        }
      );
  };
  return (
    <section id="contact" className="relative min-h-screen bg-black py-24 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-black to-cyan-900/20" />
        <div 
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: 'radial-gradient(circle at 50% 50%, rgba(255,255,255,0.1) 1px, transparent 1px)',
            backgroundSize: '3rem 3rem',
            maskImage: 'radial-gradient(circle at 50% 50%, black, transparent 70%)'
          }}
        />
      </div>

      {/* Glowing orbs */}
      <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-[120px] animate-pulse" />
      <div className="absolute bottom-1/3 right-1/4 w-96 h-96 bg-cyan-500/20 rounded-full blur-[120px] animate-pulse delay-700" />

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <h2 className="text-5xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white via-cyan-400 to-purple-400 animate-fade-in">
            Get In Touch
          </h2>
          <p className="text-lg text-white/70">
            We'd love to hear from you! Whether you have a question, feedback, or just want to say hello, feel free to reach out.
          </p>
        </div>

        {/* Contact Form */}
        <form className="max-w-lg mx-auto space-y-6" onSubmit={handleSubmit}>
          {/* Social Links */}
          <div className="flex justify-end items-center space-x-6 pt-8">
            <a 
              href="https://www.linkedin.com/in/muhammad-uzair-shahid-rao/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-white/70 hover:text-white transition-colors duration-300 hover:scale-110 transform"
            >
              <Linkedin size={28} />
            </a>
            <a 
              href="https://github.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-white/70 hover:text-white transition-colors duration-300 hover:scale-110 transform"
            >
              <Github size={28} />
            </a>
            <a 
              href="https://instagram.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-white/70 hover:text-white transition-colors duration-300 hover:scale-110 transform"
            >
              <Instagram size={28} />
            </a>
          </div>
          {/* Name Field */}
          <div className="group relative">
            <input
              type="text"
              name='name'
              onChange={handleChange}
              placeholder="Your Name"
              className="w-full p-4 bg-white/5 text-white border border-white/10 rounded-xl focus:border-cyan-500/30 transition-all duration-300 placeholder:text-white/70"
            />
          </div>

          {/* Email Field */}
          <div className="group relative">
            <input
              type="email"
              name='email'
              onChange={handleChange}
              placeholder="Your Email"
              className="w-full p-4 bg-white/5 text-white border border-white/10 rounded-xl focus:border-cyan-500/30 transition-all duration-300 placeholder:text-white/70"
            />
          </div>

          {/* Message Field */}
          <div className="group relative">
            <textarea
            name='message'
              placeholder="Your Message"
              onChange={handleChange}
              className="w-full p-4 bg-white/5 text-white border border-white/10 rounded-xl focus:border-cyan-500/30 transition-all duration-300 resize-none placeholder:text-white/70"
              rows="5"
            ></textarea>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full px-8 py-4 rounded-xl bg-gradient-to-r from-cyan-500 to-purple-500 text-white font-semibold hover:scale-105 transition-transform duration-300"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;