import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Features from './components/Features';
import Cta from './components/Cta';
import Footer from './components/Footer';

const App = () => {
  return (
    <div className="min-h-screen font-sans">
      <Header />
      <main>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Hero />
          <Features />
        </div>
        <Cta />
      </main>
      <Footer />
    </div>
  );
};

export default App;