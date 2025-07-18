import React from 'react';
import { motion } from 'framer-motion';

const githubLinks = [
  {
    label: 'Python',
    url: 'https://github.com/chetan7659/LW_Python-Tasks.git',
    gradient: 'from-blue-500 to-green-400',
  },
  {
    label: 'Docker Practice',
    url: 'https://github.com/chetan7659/LW_Docker_Practice.git',
    gradient: 'from-cyan-500 to-blue-500',
  },
  {
    label: 'Javascript+Docker',
    url: 'https://github.com/chetan7659/LW_JavaScript-Docker.git',
    gradient: 'from-yellow-400 to-yellow-600',
  },
  {
    label: 'AWS',
    url: 'https://github.com/chetan7659/LW-AWS-Practice-with-Boto3.git',
    gradient: 'from-orange-500 to-yellow-500',
  },
  {
    label: 'Kubernetes',
    url: 'https://github.com/chetan7659/LW-Kubernetes-Practice.git',
    gradient: 'from-blue-600 to-purple-600',
  },
];

const LinuxWorldTasks: React.FC = () => {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center bg-gray-900 text-white px-4">
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-4xl lg:text-5xl font-bold mb-12 gradient-text text-center"
      >
        LinuxWorld Tasks
      </motion.h1>
      <div className="flex flex-col gap-6 w-full max-w-md">
        {githubLinks.map((link, idx) => (
          <motion.a
            key={link.label}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className={`w-full px-8 py-5 rounded-xl font-semibold text-lg text-white bg-gradient-to-r ${link.gradient} shadow-lg text-center transition-all duration-300`}
          >
            {idx + 1}. {link.label}
          </motion.a>
        ))}
      </div>
    </section>
  );
};

export default LinuxWorldTasks; 