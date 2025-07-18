import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { motion } from 'framer-motion';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Education from './components/Education';
import Projects from './components/Projects';
import ProjectsPage from './components/ProjectsPage';
import TechStack from './components/TechStack';
import About from './components/About';
import Contact from './components/Contact';
import LinuxWorldTasks from './components/LinuxWorldTasks';
import { ThemeProvider } from './contexts/ThemeContext';
import './App.css';

// Home Page Component
const HomePage: React.FC = () => {
  return (
    <>
      <Hero />
      <Education />
      <Projects />
      <TechStack />
      <About />
      <Contact />
    </>
  );
};

function App() {
  return (
    <ThemeProvider>
      <Router>
        {/* Data Science SVG Background */}
        <div className="data-science-bg" />
        <div className="min-h-screen bg-gray-900 text-white transition-colors duration-300 relative">
          <Navbar />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/projects" element={<ProjectsPage />} />
            <Route path="/linuxworld" element={<LinuxWorldTasks />} />
          </Routes>
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App;