import React, { useState } from 'react';
import { motion, PanInfo } from 'framer-motion';
import { InlineMath } from 'react-katex';

interface VectorProps {
  x: number;
  y: number;
  magnitude: number;
  angle: number;
}

const PhysicsVectorVisualizer: React.FC = () => {
  const [force, setForce] = useState<VectorProps>({
    x: 100,
    y: 0,
    magnitude: 100,
    angle: 0,
  });

  const [mass, setMass] = useState(1);
  const [time, setTime] = useState(0);

  const handleDrag = (_: MouseEvent, info: PanInfo) => {
    const { x, y } = info.point;
    const magnitude = Math.sqrt(x * x + y * y);
    const angle = (Math.atan2(y, x) * 180) / Math.PI;
    
    setForce({
      x,
      y,
      magnitude,
      angle: angle < 0 ? angle + 360 : angle,
    });
  };

  // Calculate acceleration (F = ma)
  const acceleration = {
    x: force.x / mass,
    y: force.y / mass,
    magnitude: force.magnitude / mass,
    angle: force.angle,
  };

  // Calculate velocity (v = at)
  const velocity = {
    x: acceleration.x * time,
    y: acceleration.y * time,
    magnitude: acceleration.magnitude * time,
    angle: force.angle,
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
        
        {/* Force Vector */}
        <motion.div
          drag
          dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }}
          onDrag={handleDrag}
          className="absolute cursor-grab active:cursor-grabbing"
          style={{
            left: force.x,
            top: force.y,
          }}
        >
          <div className="relative">
            {/* Vector Line */}
            <div
              className="absolute w-[2px] bg-red-600 rounded-full"
              style={{
                height: force.magnitude,
                transform: `rotate(${force.angle}deg)`,
                transformOrigin: 'bottom center',
              }}
            />
            
            {/* Vector Head */}
            <div
              className="absolute w-3 h-3 rounded-full bg-red-600"
              style={{
                transform: `translate(${Math.cos((force.angle * Math.PI) / 180) * force.magnitude}px, ${
                  Math.sin((force.angle * Math.PI) / 180) * force.magnitude
                }px)`,
              }}
            />
          </div>
        </motion.div>

        {/* Acceleration Vector */}
        <div
          className="absolute"
          style={{
            left: acceleration.x * 50,
            top: acceleration.y * 50,
          }}
        >
          <div className="relative">
            {/* Vector Line */}
            <div
              className="absolute w-[2px] bg-blue-600 rounded-full"
              style={{
                height: acceleration.magnitude * 50,
                transform: `rotate(${acceleration.angle}deg)`,
                transformOrigin: 'bottom center',
              }}
            />
            
            {/* Vector Head */}
            <div
              className="absolute w-3 h-3 rounded-full bg-blue-600"
              style={{
                transform: `translate(${Math.cos((acceleration.angle * Math.PI) / 180) * acceleration.magnitude * 50}px, ${
                  Math.sin((acceleration.angle * Math.PI) / 180) * acceleration.magnitude * 50
                }px)`,
              }}
            />
          </div>
        </div>

        {/* Velocity Vector */}
        <div
          className="absolute"
          style={{
            left: velocity.x * 10,
            top: velocity.y * 10,
          }}
        >
          <div className="relative">
            {/* Vector Line */}
            <div
              className="absolute w-[2px] bg-green-600 rounded-full"
              style={{
                height: velocity.magnitude * 10,
                transform: `rotate(${velocity.angle}deg)`,
                transformOrigin: 'bottom center',
              }}
            />
            
            {/* Vector Head */}
            <div
              className="absolute w-3 h-3 rounded-full bg-green-600"
              style={{
                transform: `translate(${Math.cos((velocity.angle * Math.PI) / 180) * velocity.magnitude * 10}px, ${
                  Math.sin((velocity.angle * Math.PI) / 180) * velocity.magnitude * 10
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
              Mass (kg): {mass}
            </label>
            <input
              type="range"
              min="0.1"
              max="10"
              step="0.1"
              value={mass}
              onChange={(e) => setMass(Number(e.target.value))}
              className="w-full h-2 bg-red-200 rounded-lg appearance-none cursor-pointer"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-blue-700 mb-1">
              Time (s): {time}
            </label>
            <input
              type="range"
              min="0"
              max="10"
              step="0.1"
              value={time}
              onChange={(e) => setTime(Number(e.target.value))}
              className="w-full h-2 bg-blue-200 rounded-lg appearance-none cursor-pointer"
            />
          </div>
          <div className="flex flex-col justify-center">
            <div className="text-sm font-medium text-gray-700">
              <InlineMath math="\vec{F} = m\vec{a}" />
            </div>
            <div className="text-sm font-medium text-gray-700">
              <InlineMath math="\vec{v} = \vec{a}t" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PhysicsVectorVisualizer; 