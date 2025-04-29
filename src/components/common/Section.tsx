import React from 'react';
import { motion } from 'framer-motion';

interface SectionProps {
  title: string;
  description?: string;
  children: React.ReactNode;
  className?: string;
}

const Section: React.FC<SectionProps> = ({
  title,
  description,
  children,
  className = ''
}) => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className={`space-y-6 ${className}`}
    >
      <div className="text-center">
        <h2 className="text-2xl font-semibold text-purple-800 mb-2">{title}</h2>
        {description && (
          <p className="text-purple-600 max-w-2xl mx-auto">{description}</p>
        )}
      </div>
      <div className="space-y-4">{children}</div>
    </motion.section>
  );
};

export default Section; 