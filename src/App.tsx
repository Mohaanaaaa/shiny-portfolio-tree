import React, { useState } from 'react';
import { Navigation } from './components/Navigation';
import { Hero } from './components/sections/Hero';
import { About } from './components/sections/About';
import { Skills } from './components/sections/Skills';
import { Projects } from './components/sections/Projects';
import { Connect } from './components/sections/Connect';

function App() {
  const [activeSection, setActiveSection] = useState('home');

  const renderSection = () => {
    switch (activeSection) {
      case 'home':
        return <Hero />;
      case 'about':
        return <About />;
      case 'skills':
        return <Skills />;
      case 'projects':
        return <Projects />;
      case 'connect':
        return <Connect />;
      default:
        return <Hero />;
    }
  };

  return (
    <div className="min-h-screen bg-blue-100 p-4">
      <div className="max-w-4xl mx-auto">
        <Navigation activeSection={activeSection} onNavigate={setActiveSection} />
        <div className="space-y-8">
          {renderSection()}
        </div>
      </div>
    </div>
  );
}

export default App;