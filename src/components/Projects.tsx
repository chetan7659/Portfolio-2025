import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github, Cloud, Brain, Eye, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Projects: React.FC = () => {
  const projects = [
    {
      title: 'Cloud-Native AI Platform',
      description: 'Custom ML/DL models deployed with ChatGPT API integration. Built with robust DevOps CI/CD pipeline using Docker, Kubernetes, and Jenkins on AWS cloud architecture.',
      icon: <Cloud className="w-8 h-8" />,
      technologies: ['Python', 'Docker', 'Kubernetes', 'Jenkins', 'AWS', 'ChatGPT API'],
      gradient: 'from-blue-500 to-cyan-400',
      features: [
        'Custom ML/DL model deployment',
        'ChatGPT API integration',
        'CI/CD pipeline automation',
        'Scalable cloud architecture'
      ]
    },
    {
      title: 'Taxi Demand Forecast - NYC',
      description: 'Advanced time series forecasting system using XGBoost for predicting taxi demand in New York City. Features real-time inference capabilities and deployment-ready infrastructure.',
      icon: <Brain className="w-8 h-8" />,
      technologies: ['Python', 'XGBoost', 'Pandas', 'Scikit-learn', 'Flask', 'Time Series'],
      gradient: 'from-purple-500 to-pink-400',
      features: [
        'XGBoost time series modeling',
        'Real-time inference engine',
        'Data preprocessing pipeline',
        'Performance optimization'
      ]
    },
    {
      title: 'Dorsal Vein Biometric Auth System',
      description: 'Cutting-edge biometric authentication system using CNN and OpenCV for dorsal vein recognition. Achieved 100% accuracy on test dataset with intuitive Streamlit interface.',
      icon: <Eye className="w-8 h-8" />,
      technologies: ['Python', 'CNN', 'OpenCV', 'Streamlit', 'TensorFlow', 'Image Processing'],
      gradient: 'from-green-500 to-teal-400',
      features: [
        'CNN-based vein recognition',
        'OpenCV image processing',
        '100% test accuracy',
        'User-friendly interface'
      ]
    },
  ];

  return (
    <section id="projects" className="py-20 bg-gray-800/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            <span className="gradient-text">Featured Projects</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            A glimpse of my work in AI, ML, and cloud technologies
          </p>
        </motion.div>

        <div className="flex gap-8 md:gap-12 overflow-x-auto pb-4 hide-scrollbar">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="group relative min-w-[350px] max-w-[400px] flex-shrink-0"
            >
              <div className="glass-effect rounded-3xl p-8 lg:p-12 hover:bg-white/15 transition-all duration-500 group-hover:scale-[1.02]">
                <div className="flex flex-col gap-8 items-center">
                  {/* Project Info */}
                  <div className="space-y-6">
                    <div className="flex items-center gap-4">
                      <div className={`p-3 rounded-2xl bg-gradient-to-r ${project.gradient} text-white`}>
                        {project.icon}
                      </div>
                      <h3 className="text-2xl lg:text-3xl font-bold text-white">
                        {project.title}
                      </h3>
                    </div>

                    <p className="text-gray-300 text-lg leading-relaxed">
                      {project.description}
                    </p>

                    {/* Technologies */}
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="px-3 py-1 bg-white/10 rounded-full text-sm font-medium text-gray-300 border border-white/20"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    {/* Action Buttons */}
                    <div className="flex gap-4">
                      <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-600 to-green-400 text-white rounded-xl font-semibold hover:from-blue-700 hover:to-green-500 transition-all duration-300"
                      >
                        <ExternalLink className="w-4 h-4" />
                        View Demo
                      </motion.button>
                      <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="flex items-center gap-2 px-6 py-3 border border-white/20 text-white rounded-xl font-semibold hover:bg-white/10 transition-all duration-300"
                      >
                        <Github className="w-4 h-4" />
                        Code
                      </motion.button>
                    </div>
                  </div>

                  {/* Project Features */}
                  <div className="space-y-4">
                    <h4 className="text-lg font-semibold text-white mb-4">Key Features</h4>
                    <div className="space-y-3">
                      {project.features.map((feature, featureIndex) => (
                        <motion.div
                          key={featureIndex}
                          initial={{ opacity: 0, x: 20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.5, delay: featureIndex * 0.1 }}
                          viewport={{ once: true }}
                          className="flex items-center gap-3 p-3 rounded-xl bg-white/5 hover:bg-white/10 transition-all duration-300"
                        >
                          <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${project.gradient}`} />
                          <span className="text-gray-300">{feature}</span>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* View All Projects Button */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <Link
            to="/projects"
            className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-blue-600 to-green-400 text-white rounded-xl font-semibold hover:from-blue-700 hover:to-green-500 transition-all duration-300 group"
          >
            <span>View All Projects</span>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;