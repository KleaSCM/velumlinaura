import React, { useState } from 'react';

interface Vector3D {
  x: number;
  y: number;
  z: number;
  magnitude: number;
}

const Vector3DVisualizer: React.FC = () => {
  const [vector1, setVector1] = useState<Vector3D>({
    x: 100,
    y: 0,
    z: 0,
    magnitude: 100,
  });

  const [vector2, setVector2] = useState<Vector3D>({
    x: 0,
    y: 100,
    z: 0,
    magnitude: 100,
  });

  const calculateCrossProduct = (v1: Vector3D, v2: Vector3D): Vector3D => {
    const x = v1.y * v2.z - v1.z * v2.y;
    const y = v1.z * v2.x - v1.x * v2.z;
    const z = v1.x * v2.y - v1.y * v2.x;
    const magnitude = Math.sqrt(x * x + y * y + z * z);
    return { x, y, z, magnitude };
  };

  const crossProduct = calculateCrossProduct(vector1, vector2);

  return (
    <div className="relative w-full h-[400px] bg-gradient-to-br from-purple-50 to-white rounded-2xl shadow-lg overflow-hidden">
      {/* 3D Coordinate System */}
      <div className="absolute inset-0 flex items-center justify-center">
        {/* X Axis */}
        <div className="absolute w-full h-[2px] bg-red-300" />
        {/* Y Axis */}
        <div className="absolute w-[2px] h-full bg-green-300" />
        {/* Z Axis */}
        <div className="absolute w-[2px] h-full bg-blue-300" style={{ transform: 'rotate(45deg)' }} />
        
        {/* Origin */}
        <div className="absolute w-3 h-3 rounded-full bg-purple-500" />
        
        {/* Vector 1 */}
        <div className="absolute">
          <div
            className="w-[2px] bg-red-600 rounded-full"
            style={{
              height: vector1.magnitude,
              transform: `rotate(${Math.atan2(vector1.y, vector1.x) * 180 / Math.PI}deg)`,
              transformOrigin: 'bottom center',
            }}
          />
          <div
            className="absolute w-3 h-3 rounded-full bg-red-600"
            style={{
              transform: `translate(${vector1.x}px, ${vector1.y}px)`,
            }}
          />
        </div>

        {/* Vector 2 */}
        <div className="absolute">
          <div
            className="w-[2px] bg-green-600 rounded-full"
            style={{
              height: vector2.magnitude,
              transform: `rotate(${Math.atan2(vector2.y, vector2.x) * 180 / Math.PI}deg)`,
              transformOrigin: 'bottom center',
            }}
          />
          <div
            className="absolute w-3 h-3 rounded-full bg-green-600"
            style={{
              transform: `translate(${vector2.x}px, ${vector2.y}px)`,
            }}
          />
        </div>

        {/* Cross Product */}
        <div className="absolute">
          <div
            className="w-[2px] bg-blue-600 rounded-full"
            style={{
              height: crossProduct.magnitude,
              transform: `rotate(${Math.atan2(crossProduct.y, crossProduct.x) * 180 / Math.PI}deg)`,
              transformOrigin: 'bottom center',
            }}
          />
          <div
            className="absolute w-3 h-3 rounded-full bg-blue-600"
            style={{
              transform: `translate(${crossProduct.x}px, ${crossProduct.y}px)`,
            }}
          />
        </div>
      </div>

      {/* Controls */}
      <div className="absolute bottom-0 left-0 right-0 p-4 bg-white/80 backdrop-blur-sm rounded-b-2xl">
        <div className="grid grid-cols-3 gap-4">
          <div>
            <label className="block text-sm font-medium text-red-700 mb-1">
              Vector 1 Magnitude
            </label>
            <input
              type="range"
              min="0"
              max="200"
              value={vector1.magnitude}
              onChange={(e) => {
                const magnitude = Number(e.target.value);
                setVector1({ ...vector1, magnitude });
              }}
              className="w-full h-2 bg-red-200 rounded-lg appearance-none cursor-pointer"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-green-700 mb-1">
              Vector 2 Magnitude
            </label>
            <input
              type="range"
              min="0"
              max="200"
              value={vector2.magnitude}
              onChange={(e) => {
                const magnitude = Number(e.target.value);
                setVector2({ ...vector2, magnitude });
              }}
              className="w-full h-2 bg-green-200 rounded-lg appearance-none cursor-pointer"
            />
          </div>
          <div className="flex flex-col justify-center">
            <div className="text-sm font-medium text-gray-700">
              Cross Product Magnitude: {crossProduct.magnitude.toFixed(2)}
            </div>
            <div className="text-sm font-medium text-gray-700">
              Components: ({crossProduct.x.toFixed(2)}, {crossProduct.y.toFixed(2)}, {crossProduct.z.toFixed(2)})
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Vector3DVisualizer; 