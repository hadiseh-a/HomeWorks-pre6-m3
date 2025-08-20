import React from 'react';
import { Button } from '@/components/ui/button';

const Hero = () => {
  return (
    <section className="py-20 text-center">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight mb-6">
          Scalable Apps with <span className="text-blue-600">frameworks</span>
        </h1>
        <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum, molestiae quos.
        </p>
        <div className="flex justify-center space-x-4">
          <Button size="lg">Download for Free</Button>
          <Button variant="outline" size="lg">Github Repo</Button>
        </div>
      </div>
      <div className="mt-16 w-full max-w-6xl mx-auto">
        <img src="/hero-source.svg" alt="Hero Image" className="w-full h-auto rounded-xl shadow-lg" />
      </div>
    </section>
  );
};

export default Hero;