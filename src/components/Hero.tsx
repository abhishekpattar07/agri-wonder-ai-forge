
import React from 'react';
import { ArrowRight, Sprout } from "lucide-react";
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section className="py-16 md:py-24 bg-gradient-to-br from-agri-beige-light to-white">
      <div className="container mx-auto grid md:grid-cols-2 gap-8 items-center">
        <div className="space-y-6 md:pr-8">
          <div className="inline-flex items-center bg-agri-green/10 px-3 py-1 rounded-full text-agri-green text-sm font-medium">
            <Sprout className="h-4 w-4 mr-2" /> Sustainable Transformation
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800">
            Transform Agri-Waste into Handcrafted Wonders
          </h1>
          <p className="text-lg text-gray-600">
            Our AI-powered platform connects farmers with artisans to turn agricultural waste into 
            beautiful handicrafts, creating value while reducing environmental impact.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button className="bg-agri-green hover:bg-agri-green-dark text-white px-6 py-2.5">
              Join as Farmer
            </Button>
            <Button variant="outline" className="border-agri-brown text-agri-brown hover:bg-agri-brown hover:text-white px-6 py-2.5">
              Join as Artisan
            </Button>
          </div>
          <div className="text-sm text-gray-500 flex items-center">
            <span className="mr-2">How it works</span>
            <ArrowRight className="h-4 w-4" />
          </div>
        </div>
        
        <div className="rounded-xl overflow-hidden shadow-2xl">
          <img 
            src="https://images.unsplash.com/photo-1465379944081-7f47de8d74ac?auto=format&fit=crop&w=800&q=80" 
            alt="Sustainable farming and crafting" 
            className="w-full h-auto object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
