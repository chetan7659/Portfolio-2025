import React from 'react';
import { motion } from 'framer-motion';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Education from './components/Education';
import Projects from './components/Projects';
import TechStack from './components/TechStack';
import About from './components/About';
import Contact from './components/Contact';
import { ThemeProvider } from './contexts/ThemeContext';
import './App.css';

function App() {
  return (
    <ThemeProvider>
      <div className="min-h-screen bg-gray-900 text-white transition-colors duration-300">
        <Navbar />
        <Hero />
        <Education />
        <Projects />
        <TechStack />
        <About />
        <Contact />
      </div>
    </ThemeProvider>
  );
}

export default App;