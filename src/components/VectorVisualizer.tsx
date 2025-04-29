import React, { useState } from 'react';
import { motion, PanInfo } from 'framer-motion';

interface VectorProps {
  x: number;
  y: number;
  magnitude: number;
  angle: number;
}

const VectorVisualizer: React.FC = () => {
  const [vector, setVector] = useState<VectorProps>({
    x: 100,
    y: 0,
    magnitude: 100,
    angle: 0,
  });

  const handleDrag = (_: MouseEvent, info: PanInfo) => {
    const { x, y } = info.point;
    const magnitude = Math.sqrt(x * x + y * y);
    const angle = (Math.atan2(y, x) * 180) / Math.PI;
    
    setVector({
      x,
      y,
      magnitude,
      angle: angle < 0 ? angle + 360 : angle,
    });
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
        
        {/* Vector */}
        <motion.div
          drag
          dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }}
          onDrag={handleDrag}
          className="absolute cursor-grab active:cursor-grabbing"
          style={{
            x: vector.x,
            y: vector.y,
          }}
        >
          <div className="relative">
            {/* Vector Line */}
            <div
              className="absolute w-[2px] bg-purple-600 rounded-full"
              style={{
                height: vector.magnitude,
                transform: `rotate(${vector.angle}deg)`,
                transformOrigin: 'bottom center',
              }}
            />
            
            {/* Vector Head */}
            <div
              className="absolute w-3 h-3 rounded-full bg-purple-600"
              style={{
                transform: `translate(${Math.cos((vector.angle * Math.PI) / 180) * vector.magnitude}px, ${
                  Math.sin((vector.angle * Math.PI) / 180) * vector.magnitude
                }px)`,
              }}
            />
          </div>
        </motion.div>
      </div>
      
      {/* Controls */}
      <div className="absolute bottom-0 left-0 right-0 p-4 bg-white/80 backdrop-blur-sm rounded-b-2xl">
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-purple-700 mb-1">
              Magnitude
            </label>
            <input
              type="range"
              min="0"
              max="200"
              value={vector.magnitude}
              onChange={(e) => {
                const magnitude = Number(e.target.value);
                const x = magnitude * Math.cos((vector.angle * Math.PI) / 180);
                const y = magnitude * Math.sin((vector.angle * Math.PI) / 180);
                setVector({ ...vector, magnitude, x, y });
              }}
              className="w-full h-2 bg-purple-200 rounded-lg appearance-none cursor-pointer"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-purple-700 mb-1">
              Angle (degrees)
            </label>
            <input
              type="range"
              min="0"
              max="360"
              value={vector.angle}
              onChange={(e) => {
                const angle = Number(e.target.value);
                const x = vector.magnitude * Math.cos((angle * Math.PI) / 180);
                const y = vector.magnitude * Math.sin((angle * Math.PI) / 180);
                setVector({ ...vector, angle, x, y });
              }}
              className="w-full h-2 bg-purple-200 rounded-lg appearance-none cursor-pointer"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default VectorVisualizer; 