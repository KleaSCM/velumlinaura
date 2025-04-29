import React from 'react';
import { InlineMath, BlockMath } from 'react-katex';
import 'katex/dist/katex.min.css';
import VectorVisualizer from '../components/VectorVisualizer';
import VectorAdditionVisualizer from '../components/VectorAdditionVisualizer';
import VectorProjectionVisualizer from '../components/VectorProjectionVisualizer';
import Vector3DVisualizer from '../components/Vector3DVisualizer';
import VectorDotProductVisualizer from '../components/VectorDotProductVisualizer';
import RotationMatrixVisualizer from '../components/transformations/RotationMatrixVisualizer';
import ScalingMatrixVisualizer from '../components/transformations/ScalingMatrixVisualizer';
import ReflectionMatrixVisualizer from '../components/transformations/ReflectionMatrixVisualizer';
import PhysicsVectorVisualizer from '../components/applications/PhysicsVectorVisualizer';
import MLVectorVisualizer from '../components/applications/MLVectorVisualizer';
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
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="space-y-8">
            <Section title="Introduction to Vectors">
              <Card>
                <p className="text-pink-700 mb-4">
                  Vectors are fundamental mathematical objects that represent quantities with both magnitude and direction. 
                  They are essential tools in physics, engineering, computer graphics, and many other fields.
                </p>
                <div className="bg-pink-50 p-4 rounded-lg mb-4">
                  <BlockMath math="\vec{v} = (x, y) = |\vec{v}|(\cos\theta, \sin\theta)" />
                </div>
                <p className="text-pink-700">
                  In this interactive guide, you'll learn about:
                  <ul className="list-disc pl-6 mt-2">
                    <li>Vector representation in 2D and 3D space</li>
                    <li>Basic vector operations (addition, scalar multiplication)</li>
                    <li>Dot product and its geometric interpretation</li>
                    <li>Vector projections and normalization</li>
                    <li>Cross product in 3D space</li>
                  </ul>
                </p>
              </Card>
            </Section>

            <Section title="Vector Basics">
              <Card>
                <h3 className="text-lg font-semibold text-pink-800 mb-2">
                  Definition
                </h3>
                <p className="text-pink-700 mb-4">
                  A vector is a mathematical object that has both magnitude and direction. 
                  In 2D space, we represent a vector as an arrow with a specific length and angle.
                </p>
                <div className="bg-pink-50 p-4 rounded-lg mb-4">
                  <BlockMath math="\vec{v} = (x, y) = |\vec{v}|(\cos\theta, \sin\theta)" />
                </div>
                <p className="text-pink-700">
                  Where <InlineMath math="|\vec{v}|" /> is the magnitude and <InlineMath math="\theta" /> is the angle with the x-axis.
                </p>
              </Card>
            </Section>

            <Section title="3D Vectors">
              <Card>
                <h3 className="text-lg font-semibold text-pink-800 mb-2">
                  Extending to Three Dimensions
                </h3>
                <p className="text-pink-700 mb-4">
                  In 3D space, vectors have three components and can be represented as:
                </p>
                <div className="bg-pink-50 p-4 rounded-lg mb-4">
                  <BlockMath math="\vec{v} = (x, y, z) = |\vec{v}|(\cos\alpha, \cos\beta, \cos\gamma)" />
                </div>
                <p className="text-pink-700 mb-4">
                  Where <InlineMath math="\alpha, \beta, \gamma" /> are the angles the vector makes with the x, y, and z axes respectively.
                </p>
                <h3 className="text-lg font-semibold text-pink-800 mb-2">
                  Cross Product
                </h3>
                <p className="text-pink-700 mb-4">
                  The cross product of two 3D vectors produces a third vector perpendicular to both:
                </p>
                <div className="bg-pink-50 p-4 rounded-lg mb-4">
                  <BlockMath math="\vec{a} \times \vec{b} = (a_yb_z - a_zb_y, a_zb_x - a_xb_z, a_xb_y - a_yb_x)" />
                </div>
                <p className="text-pink-700">
                  The cross product is useful for:
                  <ul className="list-disc pl-6 mt-2">
                    <li>Finding normal vectors to surfaces</li>
                    <li>Calculating torque in physics</li>
                    <li>Determining orientation in 3D space</li>
                  </ul>
                </p>
              </Card>
            </Section>

            <Section title="Vector Operations">
              <Card>
                <h3 className="text-lg font-semibold text-pink-800 mb-2">
                  Addition
                </h3>
                <p className="text-pink-700 mb-4">
                  When we add two vectors, we place them head to tail and draw a
                  new vector from the tail of the first to the head of the second.
                </p>
                <div className="bg-pink-50 p-4 rounded-lg mb-4">
                  <BlockMath math="\vec{v} + \vec{w} = (v_x + w_x, v_y + w_y)" />
                </div>

                <h3 className="text-lg font-semibold text-pink-800 mb-2">
                  Scalar Multiplication
                </h3>
                <p className="text-pink-700 mb-4">
                  Multiplying a vector by a scalar changes its length but not its
                  direction (unless the scalar is negative).
                </p>
                <div className="bg-pink-50 p-4 rounded-lg mb-4">
                  <BlockMath math="k\vec{v} = (kv_x, kv_y)" />
                </div>

                <h3 className="text-lg font-semibold text-pink-800 mb-2">
                  Dot Product
                </h3>
                <p className="text-pink-700 mb-4">
                  The dot product of two vectors is a scalar value that represents
                  the product of their magnitudes and the cosine of the angle
                  between them.
                </p>
                <div className="bg-pink-50 p-4 rounded-lg mb-4">
                  <BlockMath math="\vec{v} \cdot \vec{w} = |\vec{v}||\vec{w}|\cos\theta = v_xw_x + v_yw_y" />
                </div>
              </Card>
            </Section>

            <Section title="Vector Normalization">
              <Card>
                <h3 className="text-lg font-semibold text-pink-800 mb-2">
                  Unit Vectors
                </h3>
                <p className="text-pink-700 mb-4">
                  A unit vector is a vector with magnitude 1. We can normalize any vector by dividing it by its magnitude.
                </p>
                <div className="bg-pink-50 p-4 rounded-lg mb-4">
                  <BlockMath math="\hat{v} = \frac{\vec{v}}{|\vec{v}|}" />
                </div>
                <p className="text-pink-700">
                  Unit vectors are useful for:
                  <ul className="list-disc pl-6 mt-2">
                    <li>Representing directions without magnitude</li>
                    <li>Simplifying calculations</li>
                    <li>Creating coordinate systems</li>
                  </ul>
                </p>
              </Card>
            </Section>

            <Section title="Vector Spaces">
              <Card>
                <h3 className="text-lg font-semibold text-pink-800 mb-2">
                  What is a Vector Space?
                </h3>
                <p className="text-pink-700 mb-4">
                  A vector space is a collection of vectors that can be added together and multiplied by scalars.
                </p>
                <div className="bg-pink-50 p-4 rounded-lg mb-4">
                  <BlockMath math="\mathbb{R}^n = \{(x_1, x_2, \dots, x_n) | x_i \in \mathbb{R}\}" />
                </div>
                <p className="text-pink-700">
                  Properties of vector spaces:
                  <ul className="list-disc pl-6 mt-2">
                    <li>Closure under addition and scalar multiplication</li>
                    <li>Existence of zero vector</li>
                    <li>Existence of additive inverses</li>
                    <li>Associativity and commutativity of addition</li>
                  </ul>
                </p>
              </Card>
            </Section>

            <Section title="Real-World Applications">
              <Card>
                <h3 className="text-lg font-semibold text-pink-800 mb-2">
                  Physics
                </h3>
                <p className="text-pink-700 mb-4">
                  Vectors are used to represent physical quantities:
                </p>
                <ul className="list-disc pl-6 text-pink-700">
                  <li>Force: <InlineMath math="\vec{F} = m\vec{a}" /></li>
                  <li>Velocity: <InlineMath math="\vec{v} = \frac{d\vec{r}}{dt}" /></li>
                  <li>Electric Field: <InlineMath math="\vec{E} = \frac{\vec{F}}{q}" /></li>
                </ul>

                <h3 className="text-lg font-semibold text-pink-800 mb-2 mt-4">
                  Computer Graphics
                </h3>
                <p className="text-pink-700">
                  Vectors are essential in:
                  <ul className="list-disc pl-6 mt-2">
                    <li>3D modeling and rendering</li>
                    <li>Lighting calculations</li>
                    <li>Physics simulations</li>
                    <li>Game development</li>
                  </ul>
                </p>
              </Card>
            </Section>

            <Section title="Linear Transformations">
              <Card>
                <h3 className="text-lg font-semibold text-pink-800 mb-2">
                  Matrix Transformations
                </h3>
                <p className="text-pink-700 mb-4">
                  Linear transformations can be represented by matrices. Here are some common 2D transformations:
                </p>

                <h4 className="text-md font-semibold text-pink-800 mb-2">
                  Rotation
                </h4>
                <p className="text-pink-700 mb-4">
                  Rotates a vector by a given angle θ:
                </p>
                <div className="bg-pink-50 p-4 rounded-lg mb-4">
                  <BlockMath math="R(\theta) = \begin{bmatrix} \cos\theta & -\sin\theta \\ \sin\theta & \cos\theta \end{bmatrix}" />
                </div>
                <RotationMatrixVisualizer />

                <h4 className="text-md font-semibold text-pink-800 mb-2 mt-6">
                  Scaling
                </h4>
                <p className="text-pink-700 mb-4">
                  Scales a vector by factors s_x and s_y:
                </p>
                <div className="bg-pink-50 p-4 rounded-lg mb-4">
                  <BlockMath math="S = \begin{bmatrix} s_x & 0 \\ 0 & s_y \end{bmatrix}" />
                </div>
                <ScalingMatrixVisualizer />

                <h4 className="text-md font-semibold text-pink-800 mb-2 mt-6">
                  Reflection
                </h4>
                <p className="text-pink-700 mb-4">
                  Reflects a vector across a line at angle θ:
                </p>
                <div className="bg-pink-50 p-4 rounded-lg mb-4">
                  <BlockMath math="R = \begin{bmatrix} \cos(2\theta) & \sin(2\theta) \\ \sin(2\theta) & -\cos(2\theta) \end{bmatrix}" />
                </div>
                <ReflectionMatrixVisualizer />

                <p className="text-pink-700 mt-4">
                  These transformations can be combined through matrix multiplication to create more complex transformations.
                </p>
              </Card>
            </Section>

            <Section title="Physics Applications">
              <Card>
                <h3 className="text-lg font-semibold text-pink-800 mb-2">
                  Force, Acceleration, and Velocity
                </h3>
                <p className="text-pink-700 mb-4">
                  Vectors are fundamental in physics for representing quantities with both magnitude and direction:
                </p>
                <div className="bg-pink-50 p-4 rounded-lg mb-4">
                  <BlockMath math="\vec{F} = m\vec{a}" />
                  <BlockMath math="\vec{v} = \vec{a}t" />
                </div>
                <PhysicsVectorVisualizer />
                <p className="text-pink-700 mt-4">
                  In this visualization:
                  <ul className="list-disc pl-6 mt-2">
                    <li>Red vector: Force (F)</li>
                    <li>Blue vector: Acceleration (a = F/m)</li>
                    <li>Green vector: Velocity (v = at)</li>
                  </ul>
                </p>
              </Card>
            </Section>

            <Section title="Machine Learning Applications">
              <Card>
                <h3 className="text-lg font-semibold text-pink-800 mb-2">
                  Feature Vectors and Linear Combinations
                </h3>
                <p className="text-pink-700 mb-4">
                  In machine learning, vectors represent features and their weighted combinations:
                </p>
                <div className="bg-pink-50 p-4 rounded-lg mb-4">
                  <BlockMath math="\vec{y} = w_1\vec{x}_1 + w_2\vec{x}_2" />
                </div>
                <MLVectorVisualizer />
                <p className="text-pink-700 mt-4">
                  In this visualization:
                  <ul className="list-disc pl-6 mt-2">
                    <li>Red vector: Feature 1 (x₁)</li>
                    <li>Blue vector: Feature 2 (x₂)</li>
                    <li>Green vector: Weighted sum (y)</li>
                  </ul>
                </p>
              </Card>
            </Section>
          </div>

          <div className="space-y-8">
            <Section title="Interactive Visualizations">
              <Card>
                <h3 className="text-lg font-semibold text-pink-800 mb-4">
                  Single Vector Visualization
                </h3>
                <VectorVisualizer />
                <p className="text-pink-700 mt-4">
                  Drag the vector to change its position, or use the sliders to adjust
                  its magnitude and angle. Watch how the components change in real-time.
                </p>
              </Card>

              <Card>
                <h3 className="text-lg font-semibold text-pink-800 mb-4">
                  Vector Addition
                </h3>
                <VectorAdditionVisualizer />
                <p className="text-pink-700 mt-4">
                  Drag either vector to see how their sum changes. The green vector shows
                  the result of adding the purple and pink vectors.
                </p>
              </Card>

              <Card>
                <h3 className="text-lg font-semibold text-pink-800 mb-4">
                  Dot Product Visualization
                </h3>
                <VectorDotProductVisualizer />
                <p className="text-pink-700 mt-4">
                  Explore how the dot product changes as you manipulate the vectors.
                  Notice how the angle between vectors affects the dot product value.
                </p>
              </Card>

              <Card>
                <h3 className="text-lg font-semibold text-pink-800 mb-4">
                  Vector Projection
                </h3>
                <VectorProjectionVisualizer />
                <p className="text-pink-700 mt-4">
                  Drag either vector to see how the projection changes. The green vector shows
                  the projection of the purple vector onto the pink vector.
                </p>
              </Card>

              <Card>
                <h3 className="text-lg font-semibold text-pink-800 mb-4">
                  3D Vectors and Cross Product
                </h3>
                <Vector3DVisualizer />
                <p className="text-pink-700 mt-4">
                  Explore 3D vectors and their cross product. The blue vector shows the result
                  of the cross product between the red and green vectors.
                </p>
              </Card>
            </Section>

            <Section title="Interactive Exercises">
              <Card>
                <h3 className="text-lg font-semibold text-pink-800 mb-4">
                  Practice Problems
                </h3>
                <div className="space-y-4">
                  <div className="bg-pink-50 p-4 rounded-lg">
                    <p className="text-pink-700 mb-2">
                      Given vectors <InlineMath math="\vec{a} = (3, 4)" /> and <InlineMath math="\vec{b} = (1, 2)" />:
                    </p>
                    <ul className="list-disc pl-6 text-pink-700">
                      <li>Calculate <InlineMath math="\vec{a} + \vec{b}" /></li>
                      <li>Find the dot product <InlineMath math="\vec{a} \cdot \vec{b}" /></li>
                      <li>Determine the angle between them</li>
                    </ul>
                  </div>

                  <div className="bg-pink-50 p-4 rounded-lg">
                    <p className="text-pink-700 mb-2">
                      For 3D vectors <InlineMath math="\vec{u} = (1, 0, 0)" /> and <InlineMath math="\vec{v} = (0, 1, 0)" />:
                    </p>
                    <ul className="list-disc pl-6 text-pink-700">
                      <li>Calculate the cross product <InlineMath math="\vec{u} \times \vec{v}" /></li>
                      <li>Find a unit vector in the direction of <InlineMath math="\vec{u}" /></li>
                      <li>Compute the projection of <InlineMath math="\vec{v}" /> onto <InlineMath math="\vec{u}" /></li>
                    </ul>
                  </div>
                </div>
              </Card>
            </Section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Vectors; 