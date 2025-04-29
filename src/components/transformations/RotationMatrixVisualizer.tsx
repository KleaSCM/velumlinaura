import React, { useState } from 'react';
import { motion, PanInfo } from 'framer-motion';
import { InlineMath } from 'react-katex';

interface VectorProps {
  x: number;
  y: number;
  magnitude: number;
  angle: number;
}

const RotationMatrixVisualizer: React.FC = () => {
  const [vector, setVector] = useState<VectorProps>({
    x: 100,
    y: 0,
    magnitude: 100,
    angle: 0,
  });

  const [rotationAngle, setRotationAngle] = useState(0);

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

  const rotateVector = (angle: number) => {
    const radians = (angle * Math.PI) / 180;
    const cos = Math.cos(radians);
    const sin = Math.sin(radians);
    
    const newX = vector.x * cos - vector.y * sin;
    const newY = vector.x * sin + vector.y * cos;
    
    return {
      x: newX,
      y: newY,
      magnitude: vector.magnitude,
      angle: vector.angle + angle,
    };
  };

  const rotatedVector = rotateVector(rotationAngle);

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
        
        {/* Original Vector */}
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

        {/* Rotated Vector */}
        <div
          className="absolute"
          style={{
            left: rotatedVector.x,
            top: rotatedVector.y,
          }}
        >
          <div className="relative">
            {/* Vector Line */}
            <div
              className="absolute w-[2px] bg-pink-600 rounded-full"
              style={{
                height: rotatedVector.magnitude,
                transform: `rotate(${rotatedVector.angle}deg)`,
                transformOrigin: 'bottom center',
              }}
            />
            
            {/* Vector Head */}
            <div
              className="absolute w-3 h-3 rounded-full bg-pink-600"
              style={{
                transform: `translate(${Math.cos((rotatedVector.angle * Math.PI) / 180) * rotatedVector.magnitude}px, ${
                  Math.sin((rotatedVector.angle * Math.PI) / 180) * rotatedVector.magnitude
                }px)`,
              }}
            />
          </div>
        </div>
      </div>
      
      {/* Controls */}
      <div className="absolute bottom-0 left-0 right-0 p-4 bg-white/80 backdrop-blur-sm rounded-b-2xl">
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-purple-700 mb-1">
              Rotation Angle (degrees)
            </label>
            <input
              type="range"
              min="0"
              max="360"
              value={rotationAngle}
              onChange={(e) => setRotationAngle(Number(e.target.value))}
              className="w-full h-2 bg-purple-200 rounded-lg appearance-none cursor-pointer"
            />
          </div>
          <div className="flex flex-col justify-center">
            <div className="text-sm font-medium text-gray-700">
              Rotation Matrix:
            </div>
            <div className="text-sm font-medium text-gray-700">
              <InlineMath math={`R(\\theta) = \\begin{bmatrix} \\cos${rotationAngle}^\\circ & -\\sin${rotationAngle}^\\circ \\\\ \\sin${rotationAngle}^\\circ & \\cos${rotationAngle}^\\circ \\end{bmatrix}`} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RotationMatrixVisualizer; 