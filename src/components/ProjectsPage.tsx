import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github, Cloud, Brain, Eye, ArrowLeft, Code, Database, Server } from 'lucide-react';

interface Project {
  title: string;
  description: string;
  icon: React.ReactNode;
  technologies: string[];
  gradient: string;
  features: string[];
  challenges: string[];
  outcomes: string[];
}

const ProjectsPage: React.FC = () => {
  const featuredProjects: Project[] = [
    {
      title: 'Cloud-Native AI Platform',
      description: 'A comprehensive AI platform that integrates custom Machine Learning and Deep Learning models with ChatGPT API. Built with enterprise-grade DevOps practices including CI/CD pipelines using Docker, Kubernetes, and Jenkins on AWS cloud architecture.',
      icon: <Cloud className="w-8 h-8" />,
      technologies: ['Python', 'Docker', 'Kubernetes', 'Jenkins', 'AWS', 'ChatGPT API', 'Flask', 'PostgreSQL'],
      gradient: 'from-blue-500 to-cyan-400',
      features: [
        'Custom ML/DL model deployment with versioning',
        'Real-time ChatGPT API integration',
        'Automated CI/CD pipeline with Jenkins',
        'Scalable microservices architecture',
        'Multi-cloud deployment support',
        'Real-time monitoring and logging'
      ],
      challenges: [
        'Optimizing model inference latency',
        'Managing cloud costs effectively',
        'Ensuring high availability across regions'
      ],
      outcomes: [
        'Reduced deployment time by 70%',
        'Improved system reliability to 99.9%',
        'Scaled to handle 10K+ concurrent users'
      ]
    },
    {
      title: 'Taxi Demand Forecast - NYC',
      description: 'Advanced time series forecasting system using XGBoost for predicting taxi demand in New York City. Features real-time inference capabilities, comprehensive data preprocessing, and deployment-ready infrastructure with RESTful APIs.',
      icon: <Brain className="w-8 h-8" />,
      technologies: ['Python', 'XGBoost', 'Pandas', 'Scikit-learn', 'Flask', 'Time Series', 'NumPy', 'Matplotlib'],
      gradient: 'from-purple-500 to-pink-400',
      features: [
        'XGBoost time series modeling with feature engineering',
        'Real-time inference engine with caching',
        'Comprehensive data preprocessing pipeline',
        'Performance optimization and hyperparameter tuning',
        'Interactive dashboard for predictions',
        'Historical data analysis and visualization'
      ],
      challenges: [
        'Handling seasonal patterns in demand',
        'Feature engineering for time series data',
        'Optimizing model performance for real-time predictions'
      ],
      outcomes: [
        'Achieved 85% prediction accuracy',
        'Reduced prediction latency to <100ms',
        'Successfully deployed in production environment'
      ]
    },
    {
      title: 'Dorsal Vein Biometric Auth System',
      description: 'Cutting-edge biometric authentication system using Convolutional Neural Networks (CNN) and OpenCV for dorsal vein recognition. Achieved exceptional accuracy with an intuitive Streamlit interface and robust image processing pipeline.',
      icon: <Eye className="w-8 h-8" />,
      technologies: ['Python', 'CNN', 'OpenCV', 'Streamlit', 'TensorFlow', 'Image Processing', 'NumPy', 'PIL'],
      gradient: 'from-green-500 to-teal-400',
      features: [
        'CNN-based vein recognition with data augmentation',
        'Advanced OpenCV image processing pipeline',
        '100% test accuracy on validation dataset',
        'User-friendly Streamlit web interface',
        'Real-time vein detection and matching',
        'Secure biometric data storage and encryption'
      ],
      challenges: [
        'Handling varying lighting conditions',
        'Ensuring consistent vein pattern extraction',
        'Optimizing CNN architecture for accuracy'
      ],
      outcomes: [
        'Achieved 100% accuracy on test dataset',
        'Reduced authentication time to <2 seconds',
        'Implemented secure biometric storage system'
      ]
    }
  ];

  const linuxworldProjects: Project[] = [
    // LinuxWorld projects will be added here
    // This section is ready for you to add your LinuxWorld projects
  ];

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* Header */}
      <div className="bg-gray-800/50 border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex items-center justify-between">
            <motion.a
              href="/"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              whileHover={{ scale: 1.05 }}
              className="flex items-center gap-2 text-gray-300 hover:text-white transition-colors duration-300"
            >
              <ArrowLeft className="w-5 h-5" />
              Back to Portfolio
            </motion.a>
            <motion.h1
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-3xl font-bold gradient-text"
            >
              My Projects
            </motion.h1>
          </div>
        </div>
      </div>

      {/* Featured Projects */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
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
            Showcasing my expertise in AI, ML, and cloud technologies
          </p>
        </motion.div>

        <div className="space-y-16">
          {featuredProjects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="glass-effect rounded-3xl p-8 lg:p-12"
            >
              <div className="grid lg:grid-cols-3 gap-8">
                {/* Project Header */}
                <div className="lg:col-span-2 space-y-6">
                  <div className="flex items-center gap-4">
                    <div className={`p-4 rounded-2xl bg-gradient-to-r ${project.gradient} text-white`}>
                      {project.icon}
                    </div>
                    <div>
                      <h2 className="text-3xl lg:text-4xl font-bold text-white mb-2">
                        {project.title}
                      </h2>
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
                    </div>
                  </div>

                  <p className="text-lg text-gray-300 leading-relaxed">
                    {project.description}
                  </p>

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
                      View Code
                    </motion.button>
                  </div>
                </div>

                {/* Project Stats */}
                <div className="space-y-6">
                  <div className="glass-effect rounded-2xl p-6">
                    <h3 className="text-xl font-semibold text-white mb-4">Key Features</h3>
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
                          <span className="text-gray-300 text-sm">{feature}</span>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Challenges and Outcomes */}
              <div className="grid md:grid-cols-2 gap-8 mt-12">
                <div className="glass-effect rounded-2xl p-6">
                  <h3 className="text-xl font-semibold text-white mb-4 flex items-center gap-2">
                    <Code className="w-5 h-5" />
                    Challenges Faced
                  </h3>
                  <div className="space-y-3">
                    {project.challenges.map((challenge, challengeIndex) => (
                      <motion.div
                        key={challengeIndex}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: challengeIndex * 0.1 }}
                        viewport={{ once: true }}
                        className="flex items-start gap-3 p-3 rounded-xl bg-red-500/10 border border-red-500/20"
                      >
                        <div className="w-2 h-2 rounded-full bg-red-500 mt-2 flex-shrink-0" />
                        <span className="text-gray-300 text-sm">{challenge}</span>
                      </motion.div>
                    ))}
                  </div>
                </div>

                <div className="glass-effect rounded-2xl p-6">
                  <h3 className="text-xl font-semibold text-white mb-4 flex items-center gap-2">
                    <Brain className="w-5 h-5" />
                    Key Outcomes
                  </h3>
                  <div className="space-y-3">
                    {project.outcomes.map((outcome, outcomeIndex) => (
                      <motion.div
                        key={outcomeIndex}
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: outcomeIndex * 0.1 }}
                        viewport={{ once: true }}
                        className="flex items-start gap-3 p-3 rounded-xl bg-green-500/10 border border-green-500/20"
                      >
                        <div className="w-2 h-2 rounded-full bg-green-500 mt-2 flex-shrink-0" />
                        <span className="text-gray-300 text-sm">{outcome}</span>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* LinuxWorld Projects */}
      {linuxworldProjects.length > 0 && (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">
              <span className="gradient-text">LinuxWorld Projects</span>
            </h2>
          </motion.div>
          <div className="space-y-16">
            {linuxworldProjects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="glass-effect rounded-3xl p-8 lg:p-12"
              >
                <div className="grid lg:grid-cols-3 gap-8">
                  {/* Project Header */}
                  <div className="lg:col-span-2 space-y-6">
                    <div className="flex items-center gap-4">
                      <div className={`p-4 rounded-2xl bg-gradient-to-r ${project.gradient} text-white`}>
                        {project.icon}
                      </div>
                      <div>
                        <h2 className="text-3xl lg:text-4xl font-bold text-white mb-2">
                          {project.title}
                        </h2>
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
                      </div>
                    </div>

                    <p className="text-lg text-gray-300 leading-relaxed">
                      {project.description}
                    </p>

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
                        View Code
                      </motion.button>
                    </div>
                  </div>

                  {/* Project Stats */}
                  <div className="space-y-6">
                    <div className="glass-effect rounded-2xl p-6">
                      <h3 className="text-xl font-semibold text-white mb-4">Key Features</h3>
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
                            <span className="text-gray-300 text-sm">{feature}</span>
                          </motion.div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Challenges and Outcomes */}
                <div className="grid md:grid-cols-2 gap-8 mt-12">
                  <div className="glass-effect rounded-2xl p-6">
                    <h3 className="text-xl font-semibold text-white mb-4 flex items-center gap-2">
                      <Code className="w-5 h-5" />
                      Challenges Faced
                    </h3>
                    <div className="space-y-3">
                      {project.challenges.map((challenge, challengeIndex) => (
                        <motion.div
                          key={challengeIndex}
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.5, delay: challengeIndex * 0.1 }}
                          viewport={{ once: true }}
                          className="flex items-start gap-3 p-3 rounded-xl bg-red-500/10 border border-red-500/20"
                        >
                          <div className="w-2 h-2 rounded-full bg-red-500 mt-2 flex-shrink-0" />
                          <span className="text-gray-300 text-sm">{challenge}</span>
                        </motion.div>
                      ))}
                    </div>
                  </div>

                  <div className="glass-effect rounded-2xl p-6">
                    <h3 className="text-xl font-semibold text-white mb-4 flex items-center gap-2">
                      <Brain className="w-5 h-5" />
                      Key Outcomes
                    </h3>
                    <div className="space-y-3">
                      {project.outcomes.map((outcome, outcomeIndex) => (
                        <motion.div
                          key={outcomeIndex}
                          initial={{ opacity: 0, x: 20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.5, delay: outcomeIndex * 0.1 }}
                          viewport={{ once: true }}
                          className="flex items-start gap-3 p-3 rounded-xl bg-green-500/10 border border-green-500/20"
                        >
                          <div className="w-2 h-2 rounded-full bg-green-500 mt-2 flex-shrink-0" />
                          <span className="text-gray-300 text-sm">{outcome}</span>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default ProjectsPage; 