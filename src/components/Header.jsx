import React, { useState } from 'react';
import { Menu, X, Sparkles, Globe, Crown, Laptop, SendHorizontal, Users, Star } from 'lucide-react';
import { Link } from 'react-router-dom';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "Home", href: "/", icon: <Globe className="w-4 h-4" /> },
    { name: "Founder", href: "founder", icon: <Crown className="w-4 h-4" /> },
    { name: "Team", href: "team", icon: <Users className="w-4 h-4" /> },
    { name: "Projects", href: "projects", icon: <Laptop className="w-4 h-4" /> },
    { name: "Why US?", href: "why-us", icon: <Star className="w-4 h-4" /> },
    { name: "Connect", href: "contact", icon: <SendHorizontal className="w-4 h-4" /> }
  ];

  return (
    <header className="fixed w-full z-50">
      {/* Top accent line with gradient */}
      <div className="h-1 bg-gradient-to-r from-purple-600 via-blue-500 to-cyan-400" />
      
      {/* Main header content */}
      <div className="bg-black/90 backdrop-blur-xl border-b border-white/10">
        <div className="container mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            {/* Enhanced Logo */}
            <Link to='/'>
            <div className="flex items-center space-x-2">
              <Sparkles className="w-6 h-6 text-cyan-400 animate-pulse" />
              <h1 className="text-4xl font-black italic bg-gradient-to-r from-purple-400 via-cyan-400 to-blue-500 bg-clip-text text-transparent transform hover:scale-105 transition-transform duration-300">
                ZAIRON
              </h1>
              <span className="text-xs font-mono text-cyan-400 tracking-widest uppercase ml-2 border border-cyan-400/30 px-2 py-1 rounded-full">
                hub
              </span>
            </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex space-x-8">
              {navLinks.map((link, index) => (
                <Link
                  key={index}
                  to={link.href}
                  className="group relative flex items-center space-x-2 text-sm font-medium text-white/70 hover:text-white transition-colors duration-300"
                >
                  {/* Hover effect line */}
                  <div className="absolute -bottom-2 left-0 w-full h-0.5 bg-gradient-to-r from-cyan-400 to-blue-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
                  
                  {/* Icon and text */}
                  <span className="text-cyan-400">{link.icon}</span>
                  <span className="tracking-wide">{link.name}</span>
                </Link>
              ))}
            </nav>

            {/* Mobile Menu Button with enhanced styling */}
            <button 
              className="md:hidden relative group"
              onClick={() => setIsOpen(!isOpen)}
            >
              <div className="p-2 rounded-full border border-white/10 backdrop-blur-sm hover:border-cyan-400/50 transition-colors duration-300">
                {isOpen ? 
                  <X size={20} className="text-cyan-400" /> : 
                  <Menu size={20} className="text-cyan-400" />
                }
              </div>
            </button>
          </div>

          {/* Enhanced Mobile Navigation Menu */}
          <div className={`
            md:hidden 
            overflow-hidden 
            transition-all 
            duration-500 
            ${isOpen ? 'max-h-[400px] opacity-100' : 'max-h-0 opacity-0'}
          `}>
            <div className="py-6 space-y-6 flex flex-col items-center bg-gradient-to-b from-transparent to-black/50">
              {navLinks.map((link, index) => (
                <Link
                  key={index}
                  to={link.href}
                  className="flex items-center space-x-3 text-white/70 hover:text-white transition-colors duration-300"
                  onClick={() => setIsOpen(false)}
                >
                  <span className="text-cyan-400">{link.icon}</span>
                  <span className="text-lg font-medium tracking-wide">{link.name}</span>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;