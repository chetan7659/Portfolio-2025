import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Code, Database, Cloud, Cpu, BarChart, Globe } from 'lucide-react';

const TechStack: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const techCategories = [
    { id: 'all', name: 'All', icon: <Globe className="w-5 h-5" /> },
    { id: 'languages', name: 'Languages', icon: <Code className="w-5 h-5" /> },
    { id: 'ml', name: 'ML/AI', icon: <Cpu className="w-5 h-5" /> },
    { id: 'cloud', name: 'Cloud', icon: <Cloud className="w-5 h-5" /> },
    { id: 'database', name: 'Database', icon: <Database className="w-5 h-5" /> },
    { id: 'visualization', name: 'Visualization', icon: <BarChart className="w-5 h-5" /> },
  ];

  const technologies = [
    { name: 'Python', category: 'languages', color: 'from-blue-500 to-yellow-500', level: 95 },
    { name: 'C', category: 'languages', color: 'from-blue-600 to-blue-400', level: 85 },
    { name: 'SQL', category: 'languages', color: 'from-orange-500 to-red-500', level: 90 },
    { name: 'JavaScript', category: 'languages', color: 'from-yellow-400 to-yellow-600', level: 80 },
    { name: 'Scikit-learn', category: 'ml', color: 'from-orange-500 to-red-500', level: 95 },
    { name: 'TensorFlow', category: 'ml', color: 'from-orange-600 to-red-600', level: 90 },
    { name: 'PyTorch', category: 'ml', color: 'from-red-500 to-pink-500', level: 85 },
    { name: 'Keras', category: 'ml', color: 'from-red-600 to-pink-600', level: 88 },
    { name: 'AWS', category: 'cloud', color: 'from-yellow-500 to-orange-500', level: 92 },
    { name: 'Docker', category: 'cloud', color: 'from-blue-500 to-cyan-500', level: 88 },
    { name: 'Kubernetes', category: 'cloud', color: 'from-blue-600 to-purple-600', level: 85 },
    { name: 'Jenkins', category: 'cloud', color: 'from-blue-400 to-blue-600', level: 80 },
    { name: 'Terraform', category: 'cloud', color: 'from-purple-500 to-blue-500', level: 75 },
    { name: 'MySQL', category: 'database', color: 'from-blue-500 to-cyan-500', level: 90 },
    { name: 'MongoDB', category: 'database', color: 'from-green-500 to-teal-500', level: 85 },
    { name: 'Power BI', category: 'visualization', color: 'from-yellow-500 to-orange-500', level: 88 },
    { name: 'Matplotlib', category: 'visualization', color: 'from-blue-500 to-green-500', level: 90 },
    { name: 'Seaborn', category: 'visualization', color: 'from-blue-600 to-purple-600', level: 85 },
  ];

  const filteredTechnologies = selectedCategory === 'all' 
    ? technologies 
    : technologies.filter(tech => tech.category === selectedCategory);

  const topSkills = [
    { name: 'Machine Learning', level: 95 },
    { name: 'Data Analysis', level: 92 },
    { name: 'DevOps', level: 88 },
  ];

  return (
    <section id="skills" className="py-20 bg-gray-900/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            <span className="gradient-text">Tech Stack</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Cutting-edge technologies and tools I use to build innovative solutions
          </p>
        </motion.div>

        {/* Top Skills Overview */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="grid md:grid-cols-3 gap-6 mb-16"
        >
          {topSkills.map((skill, index) => (
            <div key={index} className="glass-effect rounded-2xl p-6 text-center">
              <h3 className="text-xl font-semibold text-white mb-4">{skill.name}</h3>
              <div className="relative w-20 h-20 mx-auto mb-4">
                <svg className="w-20 h-20 transform -rotate-90" viewBox="0 0 36 36">
                  <path
                    d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                    fill="none"
                    stroke="rgba(255, 255, 255, 0.1)"
                    strokeWidth="2"
                  />
                  <path
                    d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                    fill="none"
                    stroke="url(#gradient)"
                    strokeWidth="2"
                    strokeDasharray={`${skill.level}, 100`}
                    className="animate-pulse"
                  />
                  <defs>
                    <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#1d6496" />
                      <stop offset="100%" stopColor="#c4ffce" />
                    </linearGradient>
                  </defs>
                </svg>
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-2xl font-bold gradient-text">{skill.level}%</span>
                </div>
              </div>
            </div>
          ))}
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {techCategories.map((category) => (
            <motion.button
              key={category.id}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setSelectedCategory(category.id)}
              className={`flex items-center gap-2 px-6 py-3 rounded-xl font-semibold transition-all duration-300 ${
                selectedCategory === category.id
                  ? 'bg-gradient-to-r from-blue-600 to-green-400 text-white'
                  : 'bg-white/10 text-gray-300 hover:bg-white/20'
              }`}
            >
              {category.icon}
              {category.name}
            </motion.button>
          ))}
        </motion.div>

        {/* Technology Grid */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-6"
        >
          {filteredTechnologies.map((tech, index) => (
            <motion.div
              key={tech.name}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.1, y: -10 }}
              className="group relative"
            >
              <div className="glass-effect rounded-2xl p-6 text-center hover:bg-white/15 transition-all duration-300 cursor-pointer">
                <div className={`w-12 h-12 mx-auto mb-4 rounded-xl bg-gradient-to-r ${tech.color} flex items-center justify-center text-white font-bold text-xl`}>
                  {tech.name.charAt(0)}
                </div>
                <h3 className="text-sm font-semibold text-white mb-2">{tech.name}</h3>
                <div className="w-full bg-white/20 rounded-full h-2">
                  <motion.div
                    className={`h-2 rounded-full bg-gradient-to-r ${tech.color}`}
                    initial={{ width: 0 }}
                    whileInView={{ width: `${tech.level}%` }}
                    transition={{ duration: 1, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  />
                </div>
                <span className="text-xs text-gray-400 mt-2 block">{tech.level}%</span>
              </div>

              {/* Tooltip */}
              <div className="absolute -top-12 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                <div className="bg-black/80 text-white px-3 py-1 rounded-lg text-sm font-medium">
                  {tech.name} - {tech.level}%
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default TechStack;