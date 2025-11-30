import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Code, Database, Cloud, Cpu, BarChart, Globe, Server, Terminal, BookOpen, Box, GitBranch } from 'lucide-react';

const TechStack: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const techCategories = [
    { id: 'all', name: 'All', icon: <Globe className="w-5 h-5" /> },
    { id: 'languages', name: 'Languages', icon: <Code className="w-5 h-5" /> },
    { id: 'ml', name: 'ML/AI', icon: <Cpu className="w-5 h-5" /> },
    { id: 'cloud', name: 'Cloud', icon: <Cloud className="w-5 h-5" /> },
    { id: 'data', name: 'Data Eng', icon: <Server className="w-5 h-5" /> },
    { id: 'database', name: 'Database', icon: <Database className="w-5 h-5" /> },
    { id: 'devops', name: 'DevOps', icon: <Terminal className="w-5 h-5" /> },
    { id: 'visualization', name: 'Visualization', icon: <BarChart className="w-5 h-5" /> },
    { id: 'concepts', name: 'Concepts', icon: <BookOpen className="w-5 h-5" /> },
  ];

  const technologies = [
    // Languages
    { name: 'Python', category: 'languages', color: 'from-blue-500 to-cyan-500', level: 95 },
    { name: 'C', category: 'languages', color: 'from-blue-600 to-blue-400', level: 85 },
    { name: 'SQL', category: 'languages', color: 'from-orange-500 to-red-500', level: 90 },

    // ML/AI
    { name: 'Scikit-learn', category: 'ml', color: 'from-orange-500 to-red-500', level: 95 },
    { name: 'TensorFlow', category: 'ml', color: 'from-orange-600 to-red-600', level: 90 },
    { name: 'PyTorch', category: 'ml', color: 'from-red-500 to-pink-500', level: 85 },
    { name: 'Keras', category: 'ml', color: 'from-red-600 to-pink-600', level: 88 },
    { name: 'Pandas', category: 'ml', color: 'from-blue-800 to-blue-600', level: 90 },
    { name: 'NumPy', category: 'ml', color: 'from-blue-400 to-blue-600', level: 90 },

    // Cloud
    { name: 'AWS', category: 'cloud', color: 'from-yellow-500 to-orange-500', level: 92 },
    { name: 'Azure', category: 'cloud', color: 'from-blue-500 to-blue-700', level: 85 },
    { name: 'Azure Functions', category: 'cloud', color: 'from-blue-400 to-cyan-500', level: 85 },
    { name: 'Docker', category: 'cloud', color: 'from-blue-500 to-cyan-500', level: 88 },
    { name: 'Jenkins', category: 'cloud', color: 'from-blue-400 to-blue-600', level: 80 },
    { name: 'Terraform', category: 'cloud', color: 'from-purple-500 to-blue-500', level: 75 },

    // Data Engineering
    { name: 'ADF', category: 'data', color: 'from-blue-400 to-blue-600', level: 85 },
    { name: 'Databricks', category: 'data', color: 'from-red-500 to-orange-500', level: 85 },
    { name: 'Synapse', category: 'data', color: 'from-blue-600 to-cyan-600', level: 80 },
    { name: 'ADLS Gen2', category: 'data', color: 'from-green-500 to-teal-500', level: 85 },
    { name: 'Stream Analytics', category: 'data', color: 'from-blue-400 to-cyan-400', level: 80 },
    { name: 'Blob Storage', category: 'data', color: 'from-blue-300 to-blue-500', level: 85 },
    { name: 'Apache Spark', category: 'data', color: 'from-orange-500 to-red-500', level: 85 },
    { name: 'HDInsight', category: 'data', color: 'from-blue-500 to-indigo-500', level: 80 },

    // Database
    { name: 'MySQL', category: 'database', color: 'from-blue-500 to-cyan-500', level: 90 },
    { name: 'MongoDB', category: 'database', color: 'from-green-500 to-teal-500', level: 85 },
    { name: 'Cosmos DB', category: 'database', color: 'from-blue-400 to-cyan-400', level: 80 },

    // DevOps
    { name: 'Git', category: 'devops', color: 'from-red-500 to-orange-500', level: 90 },
    { name: 'CI/CD', category: 'devops', color: 'from-blue-500 to-green-500', level: 85 },
    { name: 'Linux', category: 'devops', color: 'from-yellow-500 to-orange-500', level: 80 },
    { name: 'Shell Scripting', category: 'devops', color: 'from-green-500 to-teal-500', level: 80 },

    // Visualization
    { name: 'Power BI', category: 'visualization', color: 'from-yellow-500 to-orange-500', level: 88 },
    { name: 'Matplotlib', category: 'visualization', color: 'from-blue-500 to-green-500', level: 90 },
    { name: 'Seaborn', category: 'visualization', color: 'from-blue-600 to-purple-600', level: 85 },

    // Concepts
    { name: 'DSA', category: 'concepts', color: 'from-purple-500 to-pink-500', level: 90 },
    { name: 'System Design', category: 'concepts', color: 'from-blue-500 to-indigo-500', level: 85 },
  ];

  // Map technology names to logo image filenames (ensure these files are in public/)
  const techLogos: Record<string, string> = {
    Python: '/python.png',
    C: '/c.png',
    SQL: '/sql.png',
    'Scikit-learn': '/scikit-learn.png',
    TensorFlow: '/tensorflow.png',
    PyTorch: '/pytorch.png',
    Keras: '/keras.png',
    AWS: '/aws.png',
    Docker: '/docker.png',
    Jenkins: '/jenkins.png',
    Terraform: '/terraform.png',
    MySQL: '/mysql.png',
    MongoDB: '/mongodb.png',
    'Power BI': '/powerbi.png',
    Matplotlib: '/matplotlib.png',
    Seaborn: '/seaborn.png',
  };

  // Fallback icons for when no logo image is available
  const getFallbackIcon = (name: string, category: string) => {
    // Specific mappings
    if (name.includes('Azure')) return <Cloud className="w-8 h-8" />;
    if (name.includes('Git')) return <GitBranch className="w-8 h-8" />;
    if (name.includes('Linux') || name.includes('Shell')) return <Terminal className="w-8 h-8" />;
    if (name.includes('Spark') || name.includes('Databricks')) return <Cpu className="w-8 h-8" />;
    if (name.includes('Database') || name.includes('DB') || name.includes('Storage')) return <Database className="w-8 h-8" />;

    // Category mappings
    switch (category) {
      case 'data': return <Server className="w-8 h-8" />;
      case 'devops': return <Terminal className="w-8 h-8" />;
      case 'concepts': return <BookOpen className="w-8 h-8" />;
      case 'visualization': return <BarChart className="w-8 h-8" />;
      case 'ml': return <Cpu className="w-8 h-8" />;
      case 'cloud': return <Cloud className="w-8 h-8" />;
      case 'languages': return <Code className="w-8 h-8" />;
      default: return <Box className="w-8 h-8" />;
    }
  };

  const filteredTechnologies = selectedCategory === 'all'
    ? technologies
    : technologies.filter(tech => tech.category === selectedCategory);

  return (
    <section id="skills" className="section-padding relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
        }}></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="section-title">
            <span className="gradient-text">Tech Stack</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Cutting-edge technologies and tools I use to build innovative solutions that drive business value
          </p>
        </motion.div>

        {/* Enhanced Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {techCategories.map((category, index) => (
            <motion.button
              key={category.id}
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setSelectedCategory(category.id)}
              className={`flex items-center gap-3 px-6 py-3 rounded-xl font-semibold transition-all duration-300 ${selectedCategory === category.id
                ? 'gradient-bg text-white shadow-lg'
                : 'glass-effect text-gray-300 hover:glass-effect-strong hover:text-white'
                }`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              {category.icon}
              {category.name}
            </motion.button>
          ))}
        </motion.div>

        {/* Enhanced Technology Grid */}
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
              whileHover={{ scale: 1.05, y: -8 }}
              className="group relative"
            >
              <div className="glass-effect rounded-2xl p-6 text-center hover:glass-effect-strong transition-all duration-300 cursor-pointer card-hover h-full flex flex-col items-center justify-center border border-white/5 hover:border-white/20">
                <div className={`w-16 h-16 mx-auto mb-4 rounded-xl bg-gradient-to-br ${tech.color} p-0.5 shadow-lg group-hover:shadow-xl transition-all duration-300`}>
                  <div className="w-full h-full bg-black/40 backdrop-blur-sm rounded-[10px] flex items-center justify-center">
                    {techLogos[tech.name] ? (
                      <img src={techLogos[tech.name]} alt={tech.name + ' logo'} className="w-10 h-10 object-contain" />
                    ) : (
                      <div className="text-white">
                        {getFallbackIcon(tech.name, tech.category)}
                      </div>
                    )}
                  </div>
                </div>
                <h3 className="text-sm font-semibold text-white mb-1 group-hover:text-blue-300 transition-colors">{tech.name}</h3>
              </div>

              {/* Enhanced Tooltip */}
              <div className="absolute -top-12 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none z-20 w-max">
                <div className="glass-effect-strong text-white px-3 py-1.5 rounded-lg text-xs font-medium shadow-xl border border-white/10">
                  {tech.name}
                </div>
                <div className="w-2 h-2 bg-white/20 rotate-45 mx-auto mt-1"></div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Additional Info Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="glass-effect rounded-2xl p-8 max-w-4xl mx-auto border border-white/5">
            <h3 className="text-2xl font-bold text-white mb-4">
              Continuously Learning & Growing
            </h3>
            <p className="text-gray-300 leading-relaxed">
              I'm constantly exploring new technologies and frameworks to stay at the forefront of innovation.
              My passion for learning drives me to master new tools and techniques that can deliver better solutions.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default TechStack;