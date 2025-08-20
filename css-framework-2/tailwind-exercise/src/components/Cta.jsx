import React from 'react';
import { Button } from '@/components/ui/button';

const Cta = () => {
  return (
    <section className="py-20">
      <div className="bg-black text-white p-10 md:p-16 lg:p-20 rounded-2xl max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center shadow-2xl">
        <h2 className="text-3xl md:text-5xl font-bold mb-4">
          Build faster websites
        </h2>
        <p className="text-gray-300 max-w-3xl mx-auto mb-8">
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </p>
        <Button variant="secondary" size="lg" className="px-8">Get Started</Button>
      </div>
    </section>
  );
};

export default Cta;