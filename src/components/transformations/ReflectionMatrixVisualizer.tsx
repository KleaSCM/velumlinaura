import React, { useState } from 'react';
import { motion, PanInfo } from 'framer-motion';
import { InlineMath } from 'react-katex';

interface VectorProps {
  x: number;
  y: number;
  magnitude: number;
  angle: number;
}

const ReflectionMatrixVisualizer: React.FC = () => {
  const [vector, setVector] = useState<VectorProps>({
    x: 100,
    y: 0,
    magnitude: 100,
    angle: 0,
  });

  const [reflectionAngle, setReflectionAngle] = useState(0);

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

  const reflectVector = (angle: number) => {
    const theta = (angle * Math.PI) / 180;
    const cos2theta = Math.cos(2 * theta);
    const sin2theta = Math.sin(2 * theta);
    
    const x = vector.x * cos2theta + vector.y * sin2theta;
    const y = vector.x * sin2theta - vector.y * cos2theta;
    
    return {
      x,
      y,
      magnitude: Math.sqrt(x * x + y * y),
      angle: (Math.atan2(y, x) * 180) / Math.PI,
    };
  };

  const reflectedVector = reflectVector(reflectionAngle);

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
        
        {/* Reflection Line */}
        <div
          className="absolute w-full h-[2px] bg-purple-400"
          style={{
            transform: `rotate(${reflectionAngle}deg)`,
            transformOrigin: 'center',
          }}
        />
        
        {/* Original Vector */}
        <motion.div
          drag
          dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }}
          onDrag={handleDrag}
          className="absolute cursor-grab active:cursor-grabbing"
          style={{
            left: vector.x,
            top: vector.y,
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

        {/* Reflected Vector */}
        <div
          className="absolute"
          style={{
            left: reflectedVector.x,
            top: reflectedVector.y,
          }}
        >
          <div className="relative">
            {/* Vector Line */}
            <div
              className="absolute w-[2px] bg-pink-600 rounded-full"
              style={{
                height: reflectedVector.magnitude,
                transform: `rotate(${reflectedVector.angle}deg)`,
                transformOrigin: 'bottom center',
              }}
            />
            
            {/* Vector Head */}
            <div
              className="absolute w-3 h-3 rounded-full bg-pink-600"
              style={{
                transform: `translate(${Math.cos((reflectedVector.angle * Math.PI) / 180) * reflectedVector.magnitude}px, ${
                  Math.sin((reflectedVector.angle * Math.PI) / 180) * reflectedVector.magnitude
                }px)`,
              }}
            />
          </div>
        </div>
      </div>
      
      {/* Controls */}
      <div className="absolute bottom-0 left-0 right-0 p-4 bg-white/80 backdrop-blur-sm rounded-b-2xl">
        <div>
          <label className="block text-sm font-medium text-purple-700 mb-1">
            Reflection Line Angle: {reflectionAngle}°
          </label>
          <input
            type="range"
            min="0"
            max="180"
            step="1"
            value={reflectionAngle}
            onChange={(e) => setReflectionAngle(Number(e.target.value))}
            className="w-full h-2 bg-purple-200 rounded-lg appearance-none cursor-pointer"
          />
        </div>
        <div className="mt-2 text-sm font-medium text-gray-700">
          <InlineMath math={`R = \\begin{bmatrix} \\cos(2\\theta) & \\sin(2\\theta) \\\\ \\sin(2\\theta) & -\\cos(2\\theta) \\end{bmatrix}`} />
          <span className="ml-2 text-purple-600">
            θ = {reflectionAngle}°
          </span>
        </div>
      </div>
    </div>
  );
};

export default ReflectionMatrixVisualizer; 