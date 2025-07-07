import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronDown, Play } from 'lucide-react';
import TypingSubtitle from './TypingSubtitle';

const Hero: React.FC = () => {
  const [currentText, setCurrentText] = useState(0);
  const animatedTexts = [
    'Machine Learning',
    'Data Analysis',
    'DevOps',
    'Cloud Automation',
    'LLMs'
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentText((prev) => (prev + 1) % animatedTexts.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 animate-gradient opacity-20"></div>
      
      {/* Floating Particles */}
      <div className="absolute inset-0">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-white/20 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -100, 0],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: 10 + Math.random() * 10,
              repeat: Infinity,
              delay: Math.random() * 5,
            }}
          />
        ))}
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <motion.h1
              className="text-5xl lg:text-7xl font-bold leading-tight"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <span className="block text-xl lg:text-2xl text-gray-300 mb-2">Hello, I'm</span>
              <span className="gradient-text">Chetan</span>
              <br />
              <span className="text-white">Sethy</span>
            </motion.h1>

            {/* Typing Animation for Subtitle */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="space-y-4 min-h-[40px]"
            >
              <TypingSubtitle />
              <p className="text-lg text-gray-400">
                I build smart AI systems on the cloud that solve real-world problems.
              </p>
            </motion.div>

            {/* Animated Text Loop */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex items-center space-x-4"
            >
              <span className="text-gray-400">Specializing in</span>
              <motion.span
                key={currentText}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="text-xl font-semibold gradient-text"
              >
                {animatedTexts[currentText]}
              </motion.span>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <motion.a
                href="#contact"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-3 bg-gradient-to-r from-blue-600 to-green-400 text-white rounded-lg font-semibold hover:from-blue-700 hover:to-green-500 transition-all duration-300 text-center"
              >
                Get In Touch
              </motion.a>
              <motion.a
                href="#projects"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-3 border border-white/20 text-white rounded-lg font-semibold hover:bg-white/10 transition-all duration-300 text-center"
              >
                View Projects
              </motion.a>
            </motion.div>
          </motion.div>

          {/* Right Column - Profile Photo with Video on Hover */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative group flex flex-col items-center"
          >
            <div className="relative w-64 h-64 rounded-full overflow-hidden border-4 border-gradient-to-r from-blue-500 to-green-400 shadow-lg group">
              <img
                src="/profile-photo.jpg"
                alt="Chetan Sethy"
                className="w-full h-full object-cover rounded-full transition-opacity duration-300 group-hover:opacity-0"
              />
              <video
                src="/video-resume.mp4"
                className="absolute inset-0 w-full h-full object-cover rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                autoPlay
                muted
                loop
                playsInline
              />
            </div>
            <div className="mt-4 text-center">
              <h3 className="text-lg font-semibold text-white">Video Resume</h3>
              <p className="text-gray-400 text-sm">Hover to play my introduction</p>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="flex flex-col items-center space-y-2 text-white/60"
        >
          <span className="text-sm">Scroll down</span>
          <ChevronDown className="w-5 h-5" />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;