import React, { useEffect, useState } from 'react';

const phrases = [
  'AI Engineer',
  'M.Tech Data Science',
  'Cloud Specialist',
  'ML Enthusiast',
];

const TypingSubtitle: React.FC = () => {
  const [index, setIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);
  const [blink, setBlink] = useState(true);

  useEffect(() => {
    if (subIndex === phrases[index].length + 1 && !deleting) {
      setTimeout(() => setDeleting(true), 1000);
      return;
    }
    if (subIndex === 0 && deleting) {
      setDeleting(false);
      setIndex((prev) => (prev + 1) % phrases.length);
      return;
    }
    const timeout = setTimeout(() => {
      setSubIndex((prev) => prev + (deleting ? -1 : 1));
    }, deleting ? 50 : 120);
    return () => clearTimeout(timeout);
  }, [subIndex, deleting, index]);

  useEffect(() => {
    const blinkTimeout = setInterval(() => {
      setBlink((v) => !v);
    }, 500);
    return () => clearInterval(blinkTimeout);
  }, []);

  return (
    <h2 className="text-xl lg:text-2xl text-gray-300 min-h-[32px]">
      {`${phrases[index].substring(0, subIndex)}`}
      <span className="text-green-400">{blink ? '|' : ' '}</span>
    </h2>
  );
};

export default TypingSubtitle;
