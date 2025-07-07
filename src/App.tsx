import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import FeaturedAgent from './components/FeaturedAgent';
import FeaturedListings from './components/FeaturedListings';
import ValueProposition from './components/ValueProposition';
import Testimonials from './components/Testimonials';
import FeaturedNeighborhoods from './components/FeaturedNeighborhoods';
import Footer from './components/Footer';
import FloatingContact from './components/FloatingContact';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <div id="hero">
        <Hero />
      </div>
      <FeaturedAgent />
      <FeaturedListings />
      <ValueProposition />
      <Testimonials />
      <FeaturedNeighborhoods />
      <Footer />
      <FloatingContact />
    </div>
  );
}

export default App;