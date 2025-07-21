
import React from 'react';
import Header from '../components/Layout/Header';
import Navigation from '../components/Layout/Navigation';
import Hero from '../components/Home/Hero';
import NewsSection from '../components/Home/NewsSection';
import InformativosSection from '../components/Home/InformativosSection';
import Footer from '../components/Layout/Footer';
import '../styles/main.css';

const Index = () => {
  return (
    <div className="page-container">
      <Header />
      <Navigation />
      <Hero />
      <main className="main">
        <div className="container">
          <NewsSection />
          <InformativosSection />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Index;
