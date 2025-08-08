import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronDown, Play, Download, Mail } from 'lucide-react';
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
      {/* Enhanced Animated Background */}
      <div className="absolute inset-0 animate-gradient opacity-15"></div>
      
      {/* Enhanced Floating Particles */}
      <div className="absolute inset-0">
        {[...Array(30)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -150, 0],
              opacity: [0, 1, 0],
              scale: [0, 1, 0],
            }}
            transition={{
              duration: 15 + Math.random() * 10,
              repeat: Infinity,
              delay: Math.random() * 8,
            }}
          />
        ))}
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Column - Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8 mt-16"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="space-y-2"
            >
              <span className="text-xl lg:text-2xl text-gray-300 font-light">Hello, I'm</span>
              <h1 className="text-6xl lg:text-8xl font-black leading-tight">
                <span className="gradient-text">Chetan</span>
                <br />
                <span className="text-white">Sethy</span>
              </h1>
            </motion.div>

            {/* Enhanced Typing Animation for Subtitle */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="space-y-4 min-h-[40px]"
            >
              <TypingSubtitle />
              <p className="text-xl text-gray-300 leading-relaxed">
                I build intelligent AI systems on the cloud that solve real-world problems with cutting-edge technology.
              </p>
            </motion.div>

            {/* Enhanced Animated Text Loop */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="flex items-center space-x-4"
            >
              <span className="text-gray-400 font-medium">Specializing in</span>
              <motion.span
                key={currentText}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="text-2xl font-bold gradient-text"
              >
                {animatedTexts[currentText]}
              </motion.span>
            </motion.div>

            {/* Enhanced CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.7 }}
              className="flex flex-col sm:flex-row gap-6"
            >
              <motion.a
                href="#contact"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="btn-primary shimmer flex items-center justify-center space-x-2 text-lg px-10 py-4"
              >
                <Mail className="w-5 h-5" />
                <span>Get In Touch</span>
              </motion.a>
              <motion.a
                href="/resume.pdf"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="btn-secondary shimmer flex items-center justify-center space-x-2 text-lg px-10 py-4"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Download className="w-5 h-5" />
                <span>Download Resume</span>
              </motion.a>
            </motion.div>

            {/* Stats Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.9 }}
              className="grid grid-cols-3 gap-8 pt-8"
            >
              <div className="text-center">
                <div className="text-3xl font-bold gradient-text">50+</div>
                <div className="text-gray-400 text-sm">Projects Completed</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold gradient-text">3+</div>
                <div className="text-gray-400 text-sm">Years Experience</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold gradient-text">100%</div>
                <div className="text-gray-400 text-sm">Client Satisfaction</div>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Column - Enhanced Profile Photo */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative flex flex-col items-center"
          >
            <div className="relative">
              {/* Glowing Ring Effect */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 p-1 animate-gradient">
                <div className="w-full h-full rounded-full bg-black"></div>
              </div>
              
              {/* Profile Image */}
              <div className="relative w-80 h-80 rounded-full overflow-hidden border-4 border-transparent shadow-2xl">
                <img
                  src="/profile-photo.jpg"
                  alt="Chetan Sethy"
                  className="w-full h-full object-cover rounded-full hover:scale-110 transition-transform duration-500"
                />
              </div>
              
              {/* Floating Tech Icons */}
              <motion.div
                className="absolute -top-4 -right-4 w-16 h-16 glass-effect rounded-full flex items-center justify-center"
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 3, repeat: Infinity }}
              >
                <img src="/python.png" alt="Python" className="w-8 h-8" />
              </motion.div>
              
              <motion.div
                className="absolute -bottom-4 -left-4 w-16 h-16 glass-effect rounded-full flex items-center justify-center"
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 3, repeat: Infinity, delay: 1 }}
              >
                <img src="/tensorflow.png" alt="TensorFlow" className="w-8 h-8" />
              </motion.div>
              
              <motion.div
                className="absolute top-1/2 -right-8 w-12 h-12 glass-effect rounded-full flex items-center justify-center"
                animate={{ y: [0, -15, 0] }}
                transition={{ duration: 4, repeat: Infinity, delay: 2 }}
              >
                <img src="/aws.png" alt="AWS" className="w-6 h-6" />
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Enhanced Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="flex flex-col items-center space-y-3 text-white/60"
        >
          <span className="text-sm font-medium">Scroll to explore</span>
          <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
            <motion.div
              className="w-1 h-3 bg-gradient-to-b from-blue-400 to-purple-500 rounded-full mt-2"
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;