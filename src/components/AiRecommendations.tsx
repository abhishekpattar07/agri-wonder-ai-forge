
import React from 'react';
import { Sparkles, ArrowRight, Lightbulb } from "lucide-react";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const wasteItems = [
  {
    id: 1,
    wasteType: "Rice Husks",
    image: "https://images.unsplash.com/photo-1469041797191-50ace28483c3?auto=format&fit=crop&w=600&q=80",
    handicraftSuggestions: ["Decorative Bowls", "Wall Hangings", "Eco-Furniture"],
    materialProperties: "Lightweight, heat-resistant, acoustic"
  },
  {
    id: 2,
    wasteType: "Corn Stalks",
    image: "https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?auto=format&fit=crop&w=600&q=80",
    handicraftSuggestions: ["Woven Baskets", "Paper Products", "Decorative Mats"],
    materialProperties: "Flexible, fibrous, biodegradable"
  },
  {
    id: 3,
    wasteType: "Coconut Shells",
    image: "https://images.unsplash.com/photo-1469041797191-50ace28483c3?auto=format&fit=crop&w=600&q=80",
    handicraftSuggestions: ["Jewelry", "Decorative Lamps", "Plant Pots"],
    materialProperties: "Durable, water-resistant, natural texture"
  }
];

const AiRecommendations = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto">
        <div className="flex items-center justify-center mb-12">
          <div className="h-px bg-agri-brown/20 flex-1 mr-4"></div>
          <div className="flex items-center space-x-2">
            <Sparkles className="h-6 w-6 text-agri-green" />
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800">AI-Powered Recommendations</h2>
          </div>
          <div className="h-px bg-agri-brown/20 flex-1 ml-4"></div>
        </div>
        
        <div className="text-center max-w-xl mx-auto mb-12">
          <p className="text-gray-600">
            Our AI analyzes agricultural waste characteristics and suggests creative handcrafted products 
            that maximize value and minimize environmental impact.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {wasteItems.map((item) => (
            <Card key={item.id} className="overflow-hidden hover:shadow-lg transition-shadow">
              <div className="h-48 overflow-hidden">
                <img 
                  src={item.image} 
                  alt={item.wasteType} 
                  className="w-full h-full object-cover transition-transform hover:scale-105"
                />
              </div>
              <CardContent className="pt-6">
                <h3 className="text-xl font-semibold mb-2">{item.wasteType}</h3>
                <div className="flex flex-wrap gap-2 mb-4">
                  {item.handicraftSuggestions.map((suggestion, idx) => (
                    <Badge key={idx} variant="outline" className="bg-agri-beige-light text-agri-brown border-agri-brown">
                      {suggestion}
                    </Badge>
                  ))}
                </div>
                <div className="flex items-center text-sm text-gray-500">
                  <Lightbulb className="h-4 w-4 mr-2 text-agri-green" />
                  <span>{item.materialProperties}</span>
                </div>
              </CardContent>
              <CardFooter className="pt-2 pb-6">
                <button className="text-agri-green hover:text-agri-green-dark font-medium flex items-center text-sm">
                  Explore crafting options
                  <ArrowRight className="ml-2 h-4 w-4" />
                </button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AiRecommendations;
