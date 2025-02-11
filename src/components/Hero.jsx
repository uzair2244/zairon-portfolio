import React, { useState, useEffect } from "react";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const Hero = () => {
  const phrases = [
    "Your gateway to cutting-edge tech solutions.",
    "Expert team. Robust tech stacks. One click away.",
  ];
  const [currentText, setCurrentText] = useState("");
  const [currentPhraseIndex, setCurrentPhraseIndex] = useState(0);
  const [isTyping, setIsTyping] = useState(true);

  useEffect(() => {
    const phrase = phrases[currentPhraseIndex];

    if (isTyping) {
      if (currentText.length < phrase.length) {
        const timeout = setTimeout(() => {
          setCurrentText(phrase.slice(0, currentText.length + 1));
        }, 50); // Typing speed
        return () => clearTimeout(timeout);
      } else {
        const timeout = setTimeout(() => {
          setIsTyping(false);
        }, 2000); // Pause at the end of phrase
        return () => clearTimeout(timeout);
      }
    } else {
      if (currentText.length === 0) {
        const nextIndex = (currentPhraseIndex + 1) % phrases.length;
        setCurrentPhraseIndex(nextIndex);
        setIsTyping(true);
      } else {
        const timeout = setTimeout(() => {
          setCurrentText(currentText.slice(0, -1));
        }, 30); // Deleting speed
        return () => clearTimeout(timeout);
      }
    }
  }, [currentText, currentPhraseIndex, isTyping]);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black">
      {/* Abstract background patterns */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-900/20 via-cyan-900/20 to-blue-900/20" />
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan-500 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-purple-500 to-transparent" />

        {/* Animated grid background */}
        <div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage:
              "linear-gradient(90deg, rgba(255,255,255,.1) 1px, transparent 1px), linear-gradient(rgba(255,255,255,.1) 1px, transparent 1px)",
            backgroundSize: "4rem 4rem",
            maskImage:
              "radial-gradient(circle at 50% 50%, black, transparent 70%)",
          }}
        />
      </div>

      {/* Glowing orbs */}
      <div className="absolute top-20 left-20 w-64 h-64 bg-purple-500/30 rounded-full blur-[128px] animate-pulse" />
      <div className="absolute bottom-20 right-20 w-64 h-64 bg-cyan-500/30 rounded-full blur-[128px] animate-pulse delay-700" />

      {/* Main content */}
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Cyberpunk-style decorative element */}
          <div className="mb-8 flex justify-center">
            <div className="inline-flex items-center px-3 py-1 rounded-full border border-cyan-500/30 bg-cyan-500/10 text-cyan-300 text-sm">
              <span className="w-2 h-2 rounded-full bg-cyan-400 mr-2 animate-pulse" />
              Tech Solutions - Just A Click Away
            </div>
          </div>

          {/* Main heading with gradient */}
          <h1 className="text-6xl md:text-5xl font-black mb-8 bg-clip-text text-transparent bg-gradient-to-r from-white via-cyan-300 to-purple-300">
            Welcome to
            <span className="block mt-2 text-7xl md:text-8xl tracking-tight">
              Zairon Hub
            </span>
          </h1>

          {/* Animated typing text */}
          <div className="h-24 md:h-16">
            {" "}
            {/* Fixed height container to prevent layout shift */}
            <p className="text-lg md:text-xl text-gray-400 font-mono mb-12">
              {currentText}
              <span className="inline-block w-1 h-6 ml-1 bg-cyan-400 animate-blink" />
            </p>
          </div>

          {/* Call to action button group */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link to="/projects">
              <button className="group relative px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-xl text-white font-semibold overflow-hidden hover:scale-105 transition-transform duration-300">
                <span className="relative z-10 flex items-center gap-2">
                  Explore Solutions
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-cyan-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </button>
            </Link>

            <Link to="/contact">
              <button className="px-8 py-4 rounded-xl text-white font-semibold border border-white/10 hover:bg-white/5 hover:scale-105 transition-all duration-300">
                Contact Us
              </button>
            </Link>
          </div>
        </div>
      </div>

      {/* Bottom decorative elements */}
      <div className="absolute bottom-8 left-0 right-0 flex justify-center gap-4 text-white/50">
        <div className="w-1 h-1 rounded-full bg-current animate-ping" />
        <div className="w-1 h-1 rounded-full bg-current animate-ping delay-300" />
        <div className="w-1 h-1 rounded-full bg-current animate-ping delay-700" />
      </div>
    </section>
  );
};

export default Hero;
