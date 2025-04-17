
import React from 'react';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import AiRecommendations from '@/components/AiRecommendations';
import TransformationShowcase from '@/components/TransformationShowcase';
import ConnectionPlatform from '@/components/ConnectionPlatform';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <Hero />
        <AiRecommendations />
        <TransformationShowcase />
        <ConnectionPlatform />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
