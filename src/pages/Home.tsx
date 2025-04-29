import React from 'react';
import Header from '../components/common/Header';
import Hero from '../components/common/Hero';

const Home: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-pink-50 to-white">
      <Header title="Velum Linaura" />
      <Hero
        title="Welcome to Velum Linaura"
        description="Explore the beauty of mathematics through interactive visualizations and intuitive explanations."
      />
    </div>
  );
};

export default Home; 