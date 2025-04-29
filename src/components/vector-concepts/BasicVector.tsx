import React from 'react';
import { InlineMath, BlockMath } from 'react-katex';
import 'katex/dist/katex.min.css';
import Card from '../common/Card';

const BasicVector: React.FC = () => {
  const magnitude = 100;
  const angle = 45;
  const x = magnitude * Math.cos(angle * Math.PI / 180);
  const y = magnitude * Math.sin(angle * Math.PI / 180);

  return (
    <Card>
      <div className="space-y-6">
        <div>
          <h3 className="text-lg font-semibold text-pink-800 mb-2">What is a Vector?</h3>
          <p className="text-pink-700">
            A vector is a mathematical object that has both magnitude and direction. 
            In 2D space, we represent a vector as an arrow with a specific length and angle.
          </p>
        </div>

        <div className="bg-pink-50 p-4 rounded-lg">
          <h4 className="text-md font-semibold text-pink-800 mb-2">Mathematical Representation</h4>
          <BlockMath math="\\vec{v} = (x, y) = |\\vec{v}|(\\cos\\theta, \\sin\\theta)" />
          <p className="text-pink-700 mt-2">
            Where <InlineMath math="|\\vec{v}|" /> is the magnitude and <InlineMath math="\\theta" /> is the angle with the x-axis.
          </p>
        </div>

        <div>
          <h4 className="text-md font-semibold text-pink-800 mb-2">Visualization</h4>
          <div className="flex flex-col items-center gap-4">
            <div className="relative w-[300px] h-[300px] rounded-2xl overflow-hidden shadow-lg">
              {/* Background behind the SVG manually */}
              <div className="absolute inset-0 bg-gradient-to-br from-purple-50 to-white"></div>

              <svg
                width="300"
                height="300"
                viewBox="-150 -150 300 300"
                className="relative z-10"
              >
                <defs>
                  <marker
                    id="arrowhead"
                    markerWidth="10"
                    markerHeight="7"
                    refX="9"
                    refY="3.5"
                    orient="auto"
                  >
                    <polygon points="0 0, 10 3.5, 0 7" fill="#7C3AED" />
                  </marker>
                </defs>

                {/* Axes */}
                <line x1="-150" y1="0" x2="150" y2="0" stroke="#e9d5ff" strokeWidth="1" />
                <line x1="0" y1="-150" x2="0" y2="150" stroke="#e9d5ff" strokeWidth="1" />

                {/* Origin */}
                <circle cx="0" cy="0" r="2" fill="#7C3AED" />

                {/* Vector line */}
                <line
                  x1="0"
                  y1="0"
                  x2={x}
                  y2={-y}
                  stroke="#7C3AED"
                  strokeWidth="2"
                  markerEnd="url(#arrowhead)"
                />

                {/* Magnitude label */}
                <text
                  x={x / 2}
                  y={-y / 2}
                  fill="#7C3AED"
                  fontSize="12"
                  textAnchor="middle"
                >
                  |v|
                </text>

                {/* Angle arc */}
                <path
                  d={`M 0 0 A 40 40 0 0 1 ${40 * Math.cos(angle * Math.PI / 180)} ${-40 * Math.sin(angle * Math.PI / 180)}`}
                  fill="none"
                  stroke="#7C3AED"
                  strokeWidth="2"
                />

                {/* Theta label */}
                <text
                  x={30 * Math.cos(angle / 2 * Math.PI / 180)}
                  y={-30 * Math.sin(angle / 2 * Math.PI / 180)}
                  fill="#7C3AED"
                  fontSize="12"
                  textAnchor="middle"
                >
                  θ
                </text>
              </svg>
            </div>

            <div className="text-xs font-mono bg-white/90 px-2 py-1 rounded shadow-sm">
              <div><InlineMath math={`|\\vec{v}| = ${magnitude}`} /></div>
              <div><InlineMath math={`\\theta = ${angle}°`} /></div>
              <div><InlineMath math={`(${x.toFixed(1)}, ${y.toFixed(1)})`} /></div>
            </div>
          </div>

          <p className="text-pink-700 mt-4">
            The vector's components are shown in rectangular coordinates (x, y) and polar coordinates (magnitude, angle).
          </p>
        </div>
      </div>
    </Card>
  );
};

export default BasicVector;
