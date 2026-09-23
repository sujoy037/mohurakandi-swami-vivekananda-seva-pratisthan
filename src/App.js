import React from 'react'
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Programs from './components/Programs';
import Activities from './components/Activities';
import Administration from './components/Administration';
import Speeches from './components/Speeches';
import Gallery from './components/Gallery';
import Footer from './components/Footer';

const App = () => {
  return (
    <div className="min-h-screen bg-white font-sans selection:bg-[#FF671F] selection:text-white">
      <Header />
      <main>
        <Hero />
        <About />
        <Programs />
        <Activities />
        <Administration />
        <Speeches />
        <Gallery />
      </main>
      <Footer />
    </div>
  );
}

export default App
