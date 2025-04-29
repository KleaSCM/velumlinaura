import React from 'react';

interface HeroProps {
  title: string;
  description: string;
}

const Hero: React.FC<HeroProps> = ({ title, description }) => {
  return (
    <section className="py-16 sm:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-4xl font-extrabold text-pink-900 sm:text-5xl md:text-6xl">
            {title}
          </h2>
          <p className="mt-6 max-w-2xl mx-auto text-xl text-pink-700">
            {description}
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero; 