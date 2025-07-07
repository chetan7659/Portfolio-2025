import React from 'react';
import { motion } from 'framer-motion';
import { Globe, Dumbbell, TreePine, Code, Brain, Cloud } from 'lucide-react';

const About: React.FC = () => {
  const highlightWords = [
    { word: 'AI', icon: <Brain className="w-4 h-4" /> },
    { word: 'Automation', icon: <Code className="w-4 h-4" /> },
    { word: 'LLMs', icon: <Brain className="w-4 h-4" /> },
    { word: 'Optimization', icon: <Cloud className="w-4 h-4" /> },
    { word: 'Scalability', icon: <Cloud className="w-4 h-4" /> },
  ];

  const hobbies = [
    {
      name: 'Geopolitics',
      icon: <Globe className="w-6 h-6" />,
      description: 'Analyzing global affairs and international relations',
      color: 'from-blue-500 to-cyan-400',
    },
    {
      name: 'Fitness',
      icon: <Dumbbell className="w-6 h-6" />,
      description: 'Maintaining physical and mental strength',
      color: 'from-red-500 to-pink-400',
    },
    {
      name: 'Nature Explorer',
      icon: <TreePine className="w-6 h-6" />,
      description: 'Discovering the beauty of natural landscapes',
      color: 'from-green-500 to-teal-400',
    },
  ];

  const aboutText = `I'm an Engineer who builds smart, cloud-native AI systems. I specialize in LLMs, Data Analysis, and automating solutions using DevOps. With a deep grasp of mathematics and real-world experience, I bridge AI innovation with scalable deployment.`;

  const renderHighlightedText = (text: string) => {
    let result = text;
    highlightWords.forEach(({ word }) => {
      const regex = new RegExp(`\\b${word}\\b`, 'gi');
      result = result.replace(regex, `<span class="highlight-word">${word}</span>`);
    });
    return result;
  };

  return (
    <section id="about" className="py-20 bg-gray-800/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            <span className="gradient-text">About Me</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Passionate engineer bridging AI innovation with practical solutions
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* About Text */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="glass-effect rounded-2xl p-8">
              <div className="space-y-6">
                <div
                  className="text-lg leading-relaxed text-gray-300"
                  dangerouslySetInnerHTML={{
                    __html: renderHighlightedText(aboutText)
                  }}
                />

                {/* Highlight Keywords */}
                <div className="flex flex-wrap gap-3 mt-8">
                  {highlightWords.map(({ word, icon }, index) => (
                    <motion.div
                      key={word}
                      initial={{ opacity: 0, scale: 0 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      viewport={{ once: true }}
                      whileHover={{ scale: 1.1 }}
                      className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-600/20 to-green-400/20 rounded-full border border-white/20 hover:border-white/40 transition-all duration-300"
                    >
                      {icon}
                      <span className="text-sm font-medium gradient-text">{word}</span>
                    </motion.div>
                  ))}
                </div>

                {/* Stats */}
                <div className="grid grid-cols-3 gap-6 mt-8">
                  <div className="text-center">
                    <div className="text-3xl font-bold gradient-text">1.5+</div>
                    <div className="text-sm text-gray-400">Years Experience</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold gradient-text">10+</div>
                    <div className="text-sm text-gray-400">Projects</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold gradient-text">5+</div>
                    <div className="text-sm text-gray-400">Technologies</div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Hobbies & Interests */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="glass-effect rounded-2xl p-8">
              <h3 className="text-2xl font-semibold text-white mb-6 text-center">
                Beyond Code
              </h3>
              <div className="space-y-6">
                {hobbies.map((hobby, index) => (
                  <motion.div
                    key={hobby.name}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    whileHover={{ scale: 1.05 }}
                    className="flex items-center gap-4 p-4 rounded-xl bg-white/5 hover:bg-white/10 transition-all duration-300 cursor-pointer"
                  >
                    <div className={`p-3 rounded-lg bg-gradient-to-r ${hobby.color} text-white`}>
                      {hobby.icon}
                    </div>
                    <div className="flex-1">
                      <h4 className="font-semibold text-white mb-1">{hobby.name}</h4>
                      <p className="text-sm text-gray-400">{hobby.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Personal Quote */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
              className="glass-effect rounded-2xl p-8 text-center"
            >
              <div className="text-4xl gradient-text mb-4">"</div>
              <p className="text-lg text-gray-300 italic mb-4">
                Innovation is not just about creating something new, but about solving real problems that make life better.
              </p>
              <div className="text-4xl gradient-text rotate-180">"</div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      <style jsx>{`
        .highlight-word {
          background: linear-gradient(135deg, #1d6496 0%, #c4ffce 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          font-weight: 600;
          animation: glow 2s ease-in-out infinite alternate;
        }

        @keyframes glow {
          from {
            text-shadow: 0 0 5px rgba(29, 100, 150, 0.5);
          }
          to {
            text-shadow: 0 0 10px rgba(196, 255, 206, 0.5);
          }
        }
      `}</style>
    </section>
  );
};

export default About;