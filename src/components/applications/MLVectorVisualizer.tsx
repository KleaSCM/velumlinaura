import React, { useState } from 'react';
import { motion, PanInfo } from 'framer-motion';
import { InlineMath } from 'react-katex';

interface VectorProps {
  x: number;
  y: number;
  magnitude: number;
  angle: number;
}

const MLVectorVisualizer: React.FC = () => {
  const [feature1, setFeature1] = useState<VectorProps>({
    x: 100,
    y: 0,
    magnitude: 100,
    angle: 0,
  });

  const [feature2, setFeature2] = useState<VectorProps>({
    x: 0,
    y: 100,
    magnitude: 100,
    angle: 90,
  });

  const [weight1, setWeight1] = useState(1);
  const [weight2, setWeight2] = useState(1);

  const handleDrag = (feature: 'feature1' | 'feature2') => (_: MouseEvent, info: PanInfo) => {
    const { x, y } = info.point;
    const magnitude = Math.sqrt(x * x + y * y);
    const angle = (Math.atan2(y, x) * 180) / Math.PI;
    
    const update = {
      x,
      y,
      magnitude,
      angle: angle < 0 ? angle + 360 : angle,
    };

    if (feature === 'feature1') {
      setFeature1(update);
    } else {
      setFeature2(update);
    }
  };

  // Calculate weighted sum
  const weightedSum = {
    x: feature1.x * weight1 + feature2.x * weight2,
    y: feature1.y * weight1 + feature2.y * weight2,
    magnitude: Math.sqrt(
      (feature1.x * weight1 + feature2.x * weight2) ** 2 +
      (feature1.y * weight1 + feature2.y * weight2) ** 2
    ),
    angle: (Math.atan2(
      feature1.y * weight1 + feature2.y * weight2,
      feature1.x * weight1 + feature2.x * weight2
    ) * 180) / Math.PI,
  };

  return (
    <div className="relative w-full h-[400px] bg-gradient-to-br from-purple-50 to-white rounded-2xl shadow-lg overflow-hidden">
      {/* Grid Background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#e9d5ff_1px,transparent_1px),linear-gradient(to_bottom,#e9d5ff_1px,transparent_1px)] bg-[size:20px_20px]" />
      
      {/* Coordinate System */}
      <div className="absolute inset-0 flex items-center justify-center">
        {/* X Axis */}
        <div className="absolute w-full h-[2px] bg-purple-300" />
        {/* Y Axis */}
        <div className="absolute w-[2px] h-full bg-purple-300" />
        
        {/* Origin */}
        <div className="absolute w-3 h-3 rounded-full bg-purple-500" />
        
        {/* Feature Vector 1 */}
        <motion.div
          drag
          dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }}
          onDrag={handleDrag('feature1')}
          className="absolute cursor-grab active:cursor-grabbing"
          style={{
            left: feature1.x,
            top: feature1.y,
          }}
        >
          <div className="relative">
            {/* Vector Line */}
            <div
              className="absolute w-[2px] bg-red-600 rounded-full"
              style={{
                height: feature1.magnitude,
                transform: `rotate(${feature1.angle}deg)`,
                transformOrigin: 'bottom center',
              }}
            />
            
            {/* Vector Head */}
            <div
              className="absolute w-3 h-3 rounded-full bg-red-600"
              style={{
                transform: `translate(${Math.cos((feature1.angle * Math.PI) / 180) * feature1.magnitude}px, ${
                  Math.sin((feature1.angle * Math.PI) / 180) * feature1.magnitude
                }px)`,
              }}
            />
          </div>
        </motion.div>

        {/* Feature Vector 2 */}
        <motion.div
          drag
          dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }}
          onDrag={handleDrag('feature2')}
          className="absolute cursor-grab active:cursor-grabbing"
          style={{
            left: feature2.x,
            top: feature2.y,
          }}
        >
          <div className="relative">
            {/* Vector Line */}
            <div
              className="absolute w-[2px] bg-blue-600 rounded-full"
              style={{
                height: feature2.magnitude,
                transform: `rotate(${feature2.angle}deg)`,
                transformOrigin: 'bottom center',
              }}
            />
            
            {/* Vector Head */}
            <div
              className="absolute w-3 h-3 rounded-full bg-blue-600"
              style={{
                transform: `translate(${Math.cos((feature2.angle * Math.PI) / 180) * feature2.magnitude}px, ${
                  Math.sin((feature2.angle * Math.PI) / 180) * feature2.magnitude
                }px)`,
              }}
            />
          </div>
        </motion.div>

        {/* Weighted Sum */}
        <div
          className="absolute"
          style={{
            left: weightedSum.x,
            top: weightedSum.y,
          }}
        >
          <div className="relative">
            {/* Vector Line */}
            <div
              className="absolute w-[2px] bg-green-600 rounded-full"
              style={{
                height: weightedSum.magnitude,
                transform: `rotate(${weightedSum.angle}deg)`,
                transformOrigin: 'bottom center',
              }}
            />
            
            {/* Vector Head */}
            <div
              className="absolute w-3 h-3 rounded-full bg-green-600"
              style={{
                transform: `translate(${Math.cos((weightedSum.angle * Math.PI) / 180) * weightedSum.magnitude}px, ${
                  Math.sin((weightedSum.angle * Math.PI) / 180) * weightedSum.magnitude
                }px)`,
              }}
            />
          </div>
        </div>
      </div>
      
      {/* Controls */}
      <div className="absolute bottom-0 left-0 right-0 p-4 bg-white/80 backdrop-blur-sm rounded-b-2xl">
        <div className="grid grid-cols-3 gap-4">
          <div>
            <label className="block text-sm font-medium text-red-700 mb-1">
              Weight 1: {weight1.toFixed(1)}
            </label>
            <input
              type="range"
              min="-2"
              max="2"
              step="0.1"
              value={weight1}
              onChange={(e) => setWeight1(Number(e.target.value))}
              className="w-full h-2 bg-red-200 rounded-lg appearance-none cursor-pointer"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-blue-700 mb-1">
              Weight 2: {weight2.toFixed(1)}
            </label>
            <input
              type="range"
              min="-2"
              max="2"
              step="0.1"
              value={weight2}
              onChange={(e) => setWeight2(Number(e.target.value))}
              className="w-full h-2 bg-blue-200 rounded-lg appearance-none cursor-pointer"
            />
          </div>
          <div className="flex flex-col justify-center">
            <div className="text-sm font-medium text-gray-700">
              <InlineMath math="\vec{y} = w_1\vec{x}_1 + w_2\vec{x}_2" />
            </div>
            <div className="text-sm font-medium text-gray-700">
              Magnitude: {weightedSum.magnitude.toFixed(2)}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MLVectorVisualizer; 