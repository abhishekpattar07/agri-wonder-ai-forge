
import React from 'react';
import { Recycle, Award, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const showcaseItems = [
  {
    id: 1,
    title: "Rice Husk Lamp Shades",
    wasteSource: "Rice Processing",
    artisan: "Maya Crafts Collective",
    beforeImage: "https://images.unsplash.com/photo-1469041797191-50ace28483c3?auto=format&fit=crop&w=600&q=80",
    afterImage: "https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?auto=format&fit=crop&w=600&q=80",
    description: "Elegant light fixtures created from rice processing waste"
  },
  {
    id: 2,
    title: "Coconut Shell Jewelry",
    wasteSource: "Coconut Processing",
    artisan: "Natural Artisans Guild",
    beforeImage: "https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?auto=format&fit=crop&w=600&q=80",
    afterImage: "https://images.unsplash.com/photo-1469041797191-50ace28483c3?auto=format&fit=crop&w=600&q=80",
    description: "Intricate earrings and necklaces made from discarded coconut shells"
  }
];

const TransformationShowcase = () => {
  return (
    <section className="py-16 bg-agri-beige-light">
      <div className="container mx-auto">
        <div className="flex items-center justify-center mb-12">
          <div className="h-px bg-agri-brown/20 flex-1 mr-4"></div>
          <div className="flex items-center space-x-2">
            <Recycle className="h-6 w-6 text-agri-green" />
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800">From Waste to Wonder</h2>
          </div>
          <div className="h-px bg-agri-brown/20 flex-1 ml-4"></div>
        </div>
        
        <div className="text-center max-w-xl mx-auto mb-12">
          <p className="text-gray-600">
            See the remarkable transformation of agricultural waste into beautiful, 
            functional handicrafts by talented artisans from around the world.
          </p>
        </div>
        
        <div className="space-y-16">
          {showcaseItems.map((item) => (
            <div key={item.id} className="bg-white rounded-xl overflow-hidden shadow-md">
              <div className="grid md:grid-cols-2 gap-0">
                <div className="relative">
                  <div className="absolute inset-0 grid grid-cols-2">
                    <div className="p-6 flex items-center justify-center bg-black/20">
                      <div className="bg-white/90 p-3 rounded-lg">
                        <div className="text-sm font-medium text-agri-green">Before</div>
                      </div>
                    </div>
                    <div className="p-6 flex items-center justify-center bg-black/20">
                      <div className="bg-white/90 p-3 rounded-lg">
                        <div className="text-sm font-medium text-agri-green">After</div>
                      </div>
                    </div>
                  </div>
                  <div className="grid grid-cols-2 h-full">
                    <img 
                      src={item.beforeImage}
                      alt={`${item.wasteSource} before transformation`}
                      className="w-full h-full object-cover"
                    />
                    <img 
                      src={item.afterImage}
                      alt={`${item.title} after transformation`}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
                
                <div className="p-8 flex flex-col">
                  <div className="mb-4">
                    <Badge variant="outline" className="bg-agri-brown/10 border-agri-brown text-agri-brown">
                      {item.wasteSource}
                    </Badge>
                  </div>
                  <h3 className="text-2xl font-bold mb-3">{item.title}</h3>
                  <p className="text-gray-600 mb-4">{item.description}</p>
                  
                  <div className="flex items-center mb-6">
                    <Award className="h-5 w-5 text-agri-green mr-2" />
                    <span className="text-sm font-medium">Crafted by {item.artisan}</span>
                  </div>
                  
                  <div className="mt-auto flex justify-between items-center">
                    <span className="text-agri-brown font-medium">View Process</span>
                    <Button variant="outline" className="border-agri-green text-agri-green hover:bg-agri-green hover:text-white">
                      Shop Collection
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <Button className="bg-agri-green hover:bg-agri-green-dark text-white inline-flex items-center">
            Explore All Transformations
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default TransformationShowcase;
