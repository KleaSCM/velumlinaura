import React from 'react';
import { InlineMath, BlockMath } from 'react-katex';
import 'katex/dist/katex.min.css';
import Section from '../components/common/Section';
import Card from '../components/common/Card';
import Header from '../components/common/Header';
import Hero from '../components/common/Hero';

const Vectors: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-pink-50 to-white">
      <Header title="Vectors" />
      <Hero
        title="Understanding Vectors"
        description="Explore the fundamental building blocks of linear algebra through interactive visualizations"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="space-y-12">
          {/* Basic Vector Concepts */}
          <Section title="1. Vector Basics">
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
                  <BlockMath math="\vec{v} = (x, y) = |\vec{v}|(\cos\theta, \sin\theta)" />
                  <p className="text-pink-700 mt-2">
                    Where <InlineMath math="|\vec{v}|" /> is the magnitude and <InlineMath math="\theta" /> is the angle with the x-axis.
                  </p>
                </div>

                <div>
                  <h4 className="text-md font-semibold text-pink-800 mb-2">Interactive Visualization</h4>
                  <div className="flex justify-center">
                    <div className="relative w-[300px] h-[300px] bg-gradient-to-br from-purple-50 to-white rounded-2xl shadow-lg">
                      {/* Axes */}
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="absolute w-full h-[1px] bg-purple-300" />
                        <div className="absolute w-[1px] h-full bg-purple-300" />
                      </div>
                      {/* Origin */}
                      <div className="absolute top-1/2 left-1/2 w-2 h-2 bg-purple-500 rounded-full transform -translate-x-1/2 -translate-y-1/2" />
                    </div>
                  </div>
                  <p className="text-pink-700 mt-4">
                    The vector's components are shown in rectangular coordinates (x, y) and polar coordinates (magnitude, angle).
                  </p>
                </div>
              </div>
            </Card>
          </Section>

          {/* Vector Operations */}
          <Section title="2. Vector Addition">
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
                  <BlockMath math="\vec{v} + \vec{w} = (v_x + w_x, v_y + w_y)" />
                </div>

                <div>
                  <h4 className="text-md font-semibold text-pink-800 mb-2">Interactive Visualization</h4>
                  <div className="flex justify-center">
                    <div className="relative w-[300px] h-[300px] bg-gradient-to-br from-purple-50 to-white rounded-2xl shadow-lg">
                      {/* Axes */}
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="absolute w-full h-[1px] bg-purple-300" />
                        <div className="absolute w-[1px] h-full bg-purple-300" />
                      </div>
                      {/* Origin */}
                      <div className="absolute top-1/2 left-1/2 w-2 h-2 bg-purple-500 rounded-full transform -translate-x-1/2 -translate-y-1/2" />
                    </div>
                  </div>
                  <p className="text-pink-700 mt-4">
                    The red vector shows the result of adding the purple and blue vectors. Notice how its components are the sum of the individual components.
                  </p>
                </div>
              </div>
            </Card>
          </Section>

          {/* Dot Product */}
          <Section title="3. Dot Product">
            <Card>
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-semibold text-pink-800 mb-2">Understanding Dot Product</h3>
                  <p className="text-pink-700">
                    The dot product of two vectors is a scalar value that represents the product of their magnitudes and the cosine of the angle between them.
                  </p>
                </div>

                <div className="bg-pink-50 p-4 rounded-lg">
                  <h4 className="text-md font-semibold text-pink-800 mb-2">Mathematical Representation</h4>
                  <BlockMath math="\vec{v} \cdot \vec{w} = |\vec{v}||\vec{w}|\cos\theta = v_xw_x + v_yw_y" />
                </div>

                <div>
                  <h4 className="text-md font-semibold text-pink-800 mb-2">Interactive Visualization</h4>
                  <div className="flex justify-center">
                    <div className="relative w-[300px] h-[300px] bg-gradient-to-br from-purple-50 to-white rounded-2xl shadow-lg">
                      {/* Axes */}
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="absolute w-full h-[1px] bg-purple-300" />
                        <div className="absolute w-[1px] h-full bg-purple-300" />
                      </div>
                      {/* Origin */}
                      <div className="absolute top-1/2 left-1/2 w-2 h-2 bg-purple-500 rounded-full transform -translate-x-1/2 -translate-y-1/2" />
                    </div>
                  </div>
                  <div className="mt-4 text-pink-700">
                    <p>For these vectors:</p>
                    <ul className="list-disc pl-6 mt-2">
                      <li>
                        <InlineMath math="\vec{v} \cdot \vec{w} = (80)(60)\cos(90^\circ) = 0" />
                      </li>
                      <li>
                        <InlineMath math="v_xw_x + v_yw_y = (56.6)(-42.4) + (56.6)(42.4) = 0" />
                      </li>
                    </ul>
                    <p className="mt-2">The dot product is zero because the vectors are perpendicular.</p>
                  </div>
                </div>
              </div>
            </Card>
          </Section>
        </div>
      </div>
    </div>
  );
};

export default Vectors; 