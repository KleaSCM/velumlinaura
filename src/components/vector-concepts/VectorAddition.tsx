import React from 'react';
import { InlineMath, BlockMath } from 'react-katex';
import 'katex/dist/katex.min.css';
import Card from '../common/Card';

const VectorAddition: React.FC = () => {
  // First vector properties
  const vMagnitude = 80;
  const vAngle = 30;
  const vx = vMagnitude * Math.cos(vAngle * Math.PI / 180);
  const vy = vMagnitude * Math.sin(vAngle * Math.PI / 180);

  // Second vector properties
  const wMagnitude = 60;
  const wAngle = 120;
  const wx = wMagnitude * Math.cos(wAngle * Math.PI / 180);
  const wy = wMagnitude * Math.sin(wAngle * Math.PI / 180);

  // Resultant vector properties
  const rAngle = Math.atan2(vy + wy, vx + wx) * 180 / Math.PI;
  const rx = vx + wx;
  const ry = vy + wy;

  return (
    <Card>
      <div className="space-y-6">
        <div>
          <h3 className="text-lg font-semibold text-pink-800 mb-2">Vector Addition</h3>
          <p className="text-pink-700">
            When we add two vectors, we place them head to tail and draw a new vector from the tail of the first to the head of the second.
          </p>
        </div>

        <div className="bg-pink-50 p-4 rounded-lg">
          <h4 className="text-md font-semibold text-pink-800 mb-2">Mathematical Representation</h4>
          <BlockMath math="\\vec{v} + \\vec{w} = (v_x + w_x, v_y + w_y)" />
        </div>

        <div>
          <h4 className="text-md font-semibold text-pink-800 mb-2">Visualization</h4>
          <div className="flex flex-col items-center gap-4">
            <svg width="300" height="300" viewBox="-150 -150 300 300" className="bg-gradient-to-br from-purple-50 to-white rounded-2xl shadow-lg">
              {/* Axes */}
              <line x1="-150" y1="0" x2="150" y2="0" stroke="#e9d5ff" strokeWidth="1" />
              <line x1="0" y1="-150" x2="0" y2="150" stroke="#e9d5ff" strokeWidth="1" />
              
              {/* Origin */}
              <circle cx="0" cy="0" r="2" fill="#7C3AED" />

              {/* First Vector (v) */}
              <g>
                <line 
                  x1="0" 
                  y1="0" 
                  x2={vx} 
                  y2={-vy} 
                  stroke="#7C3AED" 
                  strokeWidth="2" 
                  markerEnd="url(#arrowhead-purple)"
                />
                <text 
                  x={vx * 1.1} 
                  y={-vy * 1.1} 
                  fill="#7C3AED" 
                  fontSize="12"
                  transform={`rotate(${vAngle}, ${vx * 1.1}, ${-vy * 1.1})`}
                >
                  v
                </text>
              </g>

              {/* Second Vector (w) starting from v's tip */}
              <g>
                <line 
                  x1={vx} 
                  y1={-vy} 
                  x2={vx + wx} 
                  y2={-vy - wy} 
                  stroke="#2563EB" 
                  strokeWidth="2" 
                  markerEnd="url(#arrowhead-blue)"
                />
                <text 
                  x={vx + wx * 1.1} 
                  y={-vy - wy * 1.1} 
                  fill="#2563EB" 
                  fontSize="12"
                  transform={`rotate(${wAngle}, ${vx + wx * 1.1}, ${-vy - wy * 1.1})`}
                >
                  w
                </text>
              </g>

              {/* Resultant Vector (v + w) */}
              <g>
                <line 
                  x1="0" 
                  y1="0" 
                  x2={rx} 
                  y2={-ry} 
                  stroke="#DC2626" 
                  strokeWidth="2" 
                  markerEnd="url(#arrowhead-red)"
                />
                <text 
                  x={rx * 1.1} 
                  y={-ry * 1.1} 
                  fill="#DC2626" 
                  fontSize="12"
                  transform={`rotate(${rAngle}, ${rx * 1.1}, ${-ry * 1.1})`}
                >
                  v + w
                </text>
              </g>

              {/* Arrowhead marker definitions */}
              <defs>
                <marker
                  id="arrowhead-purple"
                  markerWidth="10"
                  markerHeight="7"
                  refX="9"
                  refY="3.5"
                  orient="auto"
                >
                  <polygon points="0 0, 10 3.5, 0 7" fill="#7C3AED" />
                </marker>
                <marker
                  id="arrowhead-blue"
                  markerWidth="10"
                  markerHeight="7"
                  refX="9"
                  refY="3.5"
                  orient="auto"
                >
                  <polygon points="0 0, 10 3.5, 0 7" fill="#2563EB" />
                </marker>
                <marker
                  id="arrowhead-red"
                  markerWidth="10"
                  markerHeight="7"
                  refX="9"
                  refY="3.5"
                  orient="auto"
                >
                  <polygon points="0 0, 10 3.5, 0 7" fill="#DC2626" />
                </marker>
              </defs>
            </svg>

            <div className="text-xs font-mono bg-white/90 px-2 py-1 rounded shadow-sm">
              <div>
                <InlineMath math={`v_x + w_x = ${vx.toFixed(1)} + ${wx.toFixed(1)} = ${rx.toFixed(1)}`} />
              </div>
              <div>
                <InlineMath math={`v_y + w_y = ${vy.toFixed(1)} + ${wy.toFixed(1)} = ${ry.toFixed(1)}`} />
              </div>
            </div>
          </div>
          <p className="text-pink-700 mt-4">
            The red vector shows the result of adding the purple and blue vectors. Notice how its components are the sum of the individual components.
          </p>
        </div>
      </div>
    </Card>
  );
};

export default VectorAddition; 