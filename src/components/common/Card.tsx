import React from 'react';
import { motion } from 'framer-motion';

interface CardProps {
  title?: string;
  children: React.ReactNode;
  className?: string;
  hoverEffect?: boolean;
}

const Card: React.FC<CardProps> = ({
  title,
  children,
  className = '',
  hoverEffect = true
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={hoverEffect ? { y: -5, boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)' } : {}}
      transition={{ duration: 0.3 }}
      className={`bg-white rounded-2xl p-6 shadow-lg backdrop-blur-sm bg-opacity-90 ${className}`}
    >
      {title && (
        <h3 className="text-xl font-semibold text-purple-900 mb-4">
          {title}
        </h3>
      )}
      <div className="text-purple-700">
        {children}
      </div>
    </motion.div>
  );
};

export default Card; 