import React, { useState } from 'react';
import { motion, PanInfo } from 'framer-motion';
import { InlineMath } from 'react-katex';

interface VectorProps {
  x: number;
  y: number;
  magnitude: number;
  angle: number;
}

const ScalingMatrixVisualizer: React.FC = () => {
  const [vector, setVector] = useState<VectorProps>({
    x: 100,
    y: 0,
    magnitude: 100,
    angle: 0,
  });

  const [scaleX, setScaleX] = useState(1);
  const [scaleY, setScaleY] = useState(1);

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

  const scaleVector = (scaleX: number, scaleY: number) => {
    return {
      x: vector.x * scaleX,
      y: vector.y * scaleY,
      magnitude: Math.sqrt((vector.x * scaleX) ** 2 + (vector.y * scaleY) ** 2),
      angle: (Math.atan2(vector.y * scaleY, vector.x * scaleX) * 180) / Math.PI,
    };
  };

  const scaledVector = scaleVector(scaleX, scaleY);

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

        {/* Scaled Vector */}
        <div
          className="absolute"
          style={{
            left: scaledVector.x,
            top: scaledVector.y,
          }}
        >
          <div className="relative">
            {/* Vector Line */}
            <div
              className="absolute w-[2px] bg-pink-600 rounded-full"
              style={{
                height: scaledVector.magnitude,
                transform: `rotate(${scaledVector.angle}deg)`,
                transformOrigin: 'bottom center',
              }}
            />
            
            {/* Vector Head */}
            <div
              className="absolute w-3 h-3 rounded-full bg-pink-600"
              style={{
                transform: `translate(${Math.cos((scaledVector.angle * Math.PI) / 180) * scaledVector.magnitude}px, ${
                  Math.sin((scaledVector.angle * Math.PI) / 180) * scaledVector.magnitude
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
              Scale X: {scaleX.toFixed(1)}
            </label>
            <input
              type="range"
              min="0.1"
              max="3"
              step="0.1"
              value={scaleX}
              onChange={(e) => setScaleX(Number(e.target.value))}
              className="w-full h-2 bg-purple-200 rounded-lg appearance-none cursor-pointer"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-purple-700 mb-1">
              Scale Y: {scaleY.toFixed(1)}
            </label>
            <input
              type="range"
              min="0.1"
              max="3"
              step="0.1"
              value={scaleY}
              onChange={(e) => setScaleY(Number(e.target.value))}
              className="w-full h-2 bg-purple-200 rounded-lg appearance-none cursor-pointer"
            />
          </div>
        </div>
        <div className="mt-2 text-sm font-medium text-gray-700">
          <InlineMath math={`S = \\begin{bmatrix} ${scaleX.toFixed(1)} & 0 \\\\ 0 & ${scaleY.toFixed(1)} \\end{bmatrix}`} />
        </div>
      </div>
    </div>
  );
};

export default ScalingMatrixVisualizer; 