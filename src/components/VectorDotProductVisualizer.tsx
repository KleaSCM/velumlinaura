import React, { useState } from 'react';
import { motion, PanInfo } from 'framer-motion';

interface VectorProps {
  x: number;
  y: number;
  magnitude: number;
  angle: number;
}

const VectorDotProductVisualizer: React.FC = () => {
  const [vector1, setVector1] = useState<VectorProps>({
    x: 100,
    y: 0,
    magnitude: 100,
    angle: 0,
  });

  const [vector2, setVector2] = useState<VectorProps>({
    x: 0,
    y: 100,
    magnitude: 100,
    angle: 90,
  });

  const handleDrag = (vector: 'vector1' | 'vector2') => (_: MouseEvent, info: PanInfo) => {
    const { x, y } = info.point;
    const magnitude = Math.sqrt(x * x + y * y);
    const angle = (Math.atan2(y, x) * 180) / Math.PI;
    
    const update = {
      x,
      y,
      magnitude,
      angle: angle < 0 ? angle + 360 : angle,
    };

    if (vector === 'vector1') {
      setVector1(update);
    } else {
      setVector2(update);
    }
  };

  const dotProduct = vector1.x * vector2.x + vector1.y * vector2.y;
  const angleBetween = Math.acos(dotProduct / (vector1.magnitude * vector2.magnitude)) * (180 / Math.PI);

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
        
        {/* Vector 1 */}
        <motion.div
          drag
          dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }}
          onDrag={handleDrag('vector1')}
          className="absolute cursor-grab active:cursor-grabbing"
          style={{
            x: vector1.x,
            y: vector1.y,
          }}
        >
          <div className="relative">
            {/* Vector Line */}
            <div
              className="absolute w-[2px] bg-purple-600 rounded-full"
              style={{
                height: vector1.magnitude,
                transform: `rotate(${vector1.angle}deg)`,
                transformOrigin: 'bottom center',
              }}
            />
            
            {/* Vector Head */}
            <div
              className="absolute w-3 h-3 rounded-full bg-purple-600"
              style={{
                transform: `translate(${Math.cos((vector1.angle * Math.PI) / 180) * vector1.magnitude}px, ${
                  Math.sin((vector1.angle * Math.PI) / 180) * vector1.magnitude
                }px)`,
              }}
            />
          </div>
        </motion.div>

        {/* Vector 2 */}
        <motion.div
          drag
          dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }}
          onDrag={handleDrag('vector2')}
          className="absolute cursor-grab active:cursor-grabbing"
          style={{
            x: vector2.x,
            y: vector2.y,
          }}
        >
          <div className="relative">
            {/* Vector Line */}
            <div
              className="absolute w-[2px] bg-pink-600 rounded-full"
              style={{
                height: vector2.magnitude,
                transform: `rotate(${vector2.angle}deg)`,
                transformOrigin: 'bottom center',
              }}
            />
            
            {/* Vector Head */}
            <div
              className="absolute w-3 h-3 rounded-full bg-pink-600"
              style={{
                transform: `translate(${Math.cos((vector2.angle * Math.PI) / 180) * vector2.magnitude}px, ${
                  Math.sin((vector2.angle * Math.PI) / 180) * vector2.magnitude
                }px)`,
              }}
            />
          </div>
        </motion.div>
      </div>
      
      {/* Controls */}
      <div className="absolute bottom-0 left-0 right-0 p-4 bg-white/80 backdrop-blur-sm rounded-b-2xl">
        <div className="grid grid-cols-3 gap-4">
          <div>
            <label className="block text-sm font-medium text-purple-700 mb-1">
              Vector 1 Magnitude
            </label>
            <input
              type="range"
              min="0"
              max="200"
              value={vector1.magnitude}
              onChange={(e) => {
                const magnitude = Number(e.target.value);
                const x = magnitude * Math.cos((vector1.angle * Math.PI) / 180);
                const y = magnitude * Math.sin((vector1.angle * Math.PI) / 180);
                setVector1({ ...vector1, magnitude, x, y });
              }}
              className="w-full h-2 bg-purple-200 rounded-lg appearance-none cursor-pointer"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-pink-700 mb-1">
              Vector 2 Magnitude
            </label>
            <input
              type="range"
              min="0"
              max="200"
              value={vector2.magnitude}
              onChange={(e) => {
                const magnitude = Number(e.target.value);
                const x = magnitude * Math.cos((vector2.angle * Math.PI) / 180);
                const y = magnitude * Math.sin((vector2.angle * Math.PI) / 180);
                setVector2({ ...vector2, magnitude, x, y });
              }}
              className="w-full h-2 bg-pink-200 rounded-lg appearance-none cursor-pointer"
            />
          </div>
          <div className="flex flex-col justify-center">
            <div className="text-sm font-medium text-gray-700">
              Dot Product: {dotProduct.toFixed(2)}
            </div>
            <div className="text-sm font-medium text-gray-700">
              Angle Between: {angleBetween.toFixed(2)}°
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VectorDotProductVisualizer; 