import React from 'react';
import { motion } from 'framer-motion';
import { InlineMath, BlockMath } from 'react-katex';
import 'katex/dist/katex.min.css';

interface IntroProps {
  title: string;
  description: string;
  gradientFrom?: string;
  gradientTo?: string;
  math?: string;
}

const Intro: React.FC<IntroProps> = ({
  title,
  description,
  gradientFrom = 'from-pink-100',
  gradientTo = 'to-rose-100',
  math
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className={`min-h-screen bg-gradient-to-br ${gradientFrom} ${gradientTo} p-4 sm:p-8 flex items-center justify-center`}
    >
      <div className="max-w-7xl w-full mx-auto">
        <div className="text-center mb-8 sm:mb-12">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-3xl sm:text-4xl font-bold text-pink-900 mb-4"
          >
            {title}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="text-base sm:text-lg text-pink-700 max-w-3xl mx-auto px-4"
          >
            {description}
          </motion.p>
          {math && (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="mt-6 bg-white/50 backdrop-blur-sm p-4 rounded-xl shadow-lg inline-block"
            >
              <InlineMath math={math} />
            </motion.div>
          )}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.8 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8"
        >
          <div className="bg-white/50 backdrop-blur-sm p-6 rounded-xl shadow-lg">
            <h2 className="text-xl font-semibold text-pink-800 mb-4">What is a Vector?</h2>
            <p className="text-pink-700 mb-4">
              A vector is a mathematical object that has both magnitude (length) and direction. 
              Think of it as an arrow pointing somewhere in space!
            </p>
            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 rounded-full bg-pink-200 flex items-center justify-center">
                  <span className="text-pink-700">1</span>
                </div>
                <p className="text-pink-700">Magnitude: How long the arrow is</p>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 rounded-full bg-pink-200 flex items-center justify-center">
                  <span className="text-pink-700">2</span>
                </div>
                <p className="text-pink-700">Direction: Where the arrow points</p>
              </div>
            </div>
          </div>

          <div className="bg-white/50 backdrop-blur-sm p-6 rounded-xl shadow-lg">
            <h2 className="text-xl font-semibold text-pink-800 mb-4">Real-World Examples</h2>
            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 rounded-full bg-pink-200 flex items-center justify-center">
                  <span className="text-pink-700">→</span>
                </div>
                <p className="text-pink-700">Velocity: How fast and in what direction you're moving</p>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 rounded-full bg-pink-200 flex items-center justify-center">
                  <span className="text-pink-700">↑</span>
                </div>
                <p className="text-pink-700">Force: How hard and in what direction you push</p>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 rounded-full bg-pink-200 flex items-center justify-center">
                  <span className="text-pink-700">↗</span>
                </div>
                <p className="text-pink-700">Displacement: How far and in what direction you've moved</p>
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 1 }}
          className="mt-8 bg-white/50 backdrop-blur-sm p-6 rounded-xl shadow-lg"
        >
          <h2 className="text-xl font-semibold text-pink-800 mb-4">Mathematical Representation</h2>
          <div className="space-y-4">
            <div className="bg-pink-50 p-4 rounded-lg">
              <BlockMath math="\vec{v} = (x, y) = |\vec{v}|(\cos\theta, \sin\theta)" />
            </div>
            <p className="text-pink-700">
              Where:
              <ul className="list-disc pl-6 mt-2">
                <li><InlineMath math="\vec{v}" /> is our vector</li>
                <li><InlineMath math="(x, y)" /> are its components</li>
                <li><InlineMath math="|\vec{v}|" /> is its magnitude (length)</li>
                <li><InlineMath math="\theta" /> is its angle with the x-axis</li>
              </ul>
            </p>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Intro; 