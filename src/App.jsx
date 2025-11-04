import React from 'react';
import Hero from './components/Hero.jsx';
import FeatureGrid from './components/FeatureGrid.jsx';
import HowItWorks from './components/HowItWorks.jsx';
import Footer from './components/Footer.jsx';

function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <Hero />
      <FeatureGrid />
      <HowItWorks />
      <Footer />
    </div>
  );
}

export default App;
