import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Award, MapPin } from 'lucide-react';

const Education: React.FC = () => {
  const educationData = [
    {
      degree: 'M.Tech in Data Science',
      institution: 'DIAT Pune',
      period: '2024 - 2026',
      status: 'Current',
      logo: 'https://upload.wikimedia.org/wikipedia/en/6/67/Defence_Institute_of_Advanced_Technology.png',
      description: 'Specializing in Machine Learning, Deep Learning, and AI Applications',
    },
    {
      degree: 'B.Tech in Computer Science Engineering',
      institution: 'NIST University, Odisha',
      period: '2019 - 2023',
      status: 'Completed',
      description: 'Foundation in Computer Science with focus on Software Development',
    },
    {
      degree: 'GATE 2024 Qualified',
      institution: 'Computer Science',
      period: '2024',
      status: 'Qualified',
      isAchievement: true,
      description: 'All India Level Examination for Post Graduate Admissions',
    },
  ];

  return (
    <section id="education" className="py-20 bg-gray-900/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            <span className="gradient-text">Education</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Building strong foundations in Data Science and Computer Engineering
          </p>
        </motion.div>

        <div className="space-y-8">
          {educationData.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="relative group"
            >
              <div className="glass-effect rounded-2xl p-8 hover:bg-white/15 transition-all duration-300">
                <div className="grid lg:grid-cols-4 gap-6 items-center">
                  {/* Institution Logo/Icon */}
                  <div className="flex items-center justify-center">
                    {item.logo ? (
                      <img
                        src={item.logo}
                        alt={item.institution}
                        className="w-16 h-16 rounded-lg object-contain floating-animation"
                      />
                    ) : (
                      <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-green-400 rounded-lg flex items-center justify-center">
                        {item.isAchievement ? (
                          <Award className="w-8 h-8 text-white" />
                        ) : (
                          <GraduationCap className="w-8 h-8 text-white" />
                        )}
                      </div>
                    )}
                  </div>

                  {/* Education Details */}
                  <div className="lg:col-span-2 space-y-3">
                    <div className="flex items-center gap-2">
                      <h3 className="text-xl font-semibold text-white">{item.degree}</h3>
                      <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                        item.status === 'Current' 
                          ? 'bg-green-500/20 text-green-400' 
                          : item.status === 'Qualified'
                          ? 'bg-blue-500/20 text-blue-400'
                          : 'bg-gray-500/20 text-gray-400'
                      }`}>
                        {item.status}
                      </span>
                    </div>
                    <div className="flex items-center gap-2 text-gray-300">
                      <MapPin className="w-4 h-4" />
                      <span>{item.institution}</span>
                    </div>
                    <p className="text-gray-400">{item.description}</p>
                  </div>

                  {/* Period */}
                  <div className="text-right">
                    <span className="text-lg font-semibold gradient-text">{item.period}</span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* DIAT Logo Floating */}
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          whileInView={{ opacity: 0.1, scale: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          viewport={{ once: true }}
          className="absolute top-10 right-10 w-32 h-32 opacity-5"
        >
          <img
            src="https://upload.wikimedia.org/wikipedia/en/6/67/Defence_Institute_of_Advanced_Technology.png"
            alt="DIAT Logo"
            className="w-full h-full object-contain floating-animation"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default Education;