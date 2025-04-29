import React from 'react';
import { InlineMath, BlockMath } from 'react-katex';
import 'katex/dist/katex.min.css';
import Card from '../common/Card';

const DotProduct: React.FC = () => {
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

  // Calculate dot product
  const dotProduct = vx * wx + vy * wy;
  const angleBetween = Math.abs(wAngle - vAngle);
  const geometricDotProduct = vMagnitude * wMagnitude * Math.cos(angleBetween * Math.PI / 180);

  return (
    <Card>
      <div className="space-y-6">
        <div>
          <h3 className="text-lg font-semibold text-pink-800 mb-2">Dot Product</h3>
          <p className="text-pink-700">
            The dot product of two vectors is a scalar value that represents the product of their magnitudes and the cosine of the angle between them.
          </p>
        </div>

        <div className="bg-pink-50 p-4 rounded-lg">
          <h4 className="text-md font-semibold text-pink-800 mb-2">Mathematical Representation</h4>
          <BlockMath math="\\vec{v} \\cdot \\vec{w} = |\\vec{v}||\\vec{w}|\\cos\\theta = v_x w_x + v_y w_y" />
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

              {/* Second Vector (w) */}
              <g>
                <line 
                  x1="0" 
                  y1="0" 
                  x2={wx} 
                  y2={-wy} 
                  stroke="#2563EB" 
                  strokeWidth="2" 
                  markerEnd="url(#arrowhead-blue)"
                />
                <text 
                  x={wx * 1.1} 
                  y={-wy * 1.1} 
                  fill="#2563EB" 
                  fontSize="12"
                  transform={`rotate(${wAngle}, ${wx * 1.1}, ${-wy * 1.1})`}
                >
                  w
                </text>
              </g>

              {/* Angle Arc */}
              <g>
                <path 
                  d={`M 0 0 A 40 40 0 0 1 ${40 * Math.cos(angleBetween * Math.PI/180)} ${-40 * Math.sin(angleBetween * Math.PI/180)}`}
                  fill="none"
                  stroke="#DC2626"
                  strokeWidth="2"
                />
                <text 
                  x={30 * Math.cos(angleBetween/2 * Math.PI/180)} 
                  y={-30 * Math.sin(angleBetween/2 * Math.PI/180)} 
                  fill="#DC2626" 
                  fontSize="12"
                >
                  θ
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
              </defs>
            </svg>

            <div className="text-xs font-mono bg-white/90 px-2 py-1 rounded shadow-sm">
              <div>
                <InlineMath math={`|\\vec{v}||\\vec{w}|\\cos\\theta = ${vMagnitude} \\times ${wMagnitude} \\times \\cos(${angleBetween}^\\circ) = ${geometricDotProduct.toFixed(1)}`} />
              </div>
              <div>
                <InlineMath math={`v_x w_x + v_y w_y = ${vx.toFixed(1)} \\times ${wx.toFixed(1)} + ${vy.toFixed(1)} \\times ${wy.toFixed(1)} = ${dotProduct.toFixed(1)}`} />
              </div>
            </div>
          </div>
          <p className="text-pink-700 mt-4">
            The dot product can be calculated either geometrically (using magnitudes and angle) or algebraically (using components). Both methods give the same result.
          </p>
        </div>
      </div>
    </Card>
  );
};

export default DotProduct; 