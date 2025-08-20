import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const features = [
  {
    title: "Performance Optimization",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe, quae.",
    icon: "💡"
  },
  {
    title: "Redux State Management",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe, quae.",
    icon: "🔄"
  },
  {
    title: "Tailwind Responsive Design",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe, quae.",
    icon: "📱"
  },
  {
    title: "Vite Production Deployment",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe, quae.",
    icon: "🚀"
  },
  {
    title: "React Library Integration",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe, quae.",
    icon: "🧩"
  },
  {
    title: "React App Authentication",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe, quae.",
    icon: "🔐"
  }
];

const Features = () => {
  return (
    <section className="py-20 text-center">
      <h2 className="text-3xl md:text-4xl font-bold mb-4">
        Everything you need to start a website
      </h2>
      <p className="text-gray-600 max-w-2xl mx-auto mb-12">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum, molestiae quos.
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {features.map((feature, index) => (
          <Card key={index} className="shadow-lg hover:shadow-xl transition-shadow duration-300 transform hover:-translate-y-2">
            <CardHeader>
              <div className="text-4xl mb-4">{feature.icon}</div>
              <CardTitle>{feature.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600">{feature.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};

export default Features;