
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Search, Filter, ChevronDown, Grid, List } from 'lucide-react';
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";

const wasteItems = [
  {
    id: 1,
    title: "Rice Husks",
    quantity: "500kg",
    location: "Punjab, India",
    image: "https://images.unsplash.com/photo-1469041797191-50ace28483c3?auto=format&fit=crop&w=600&q=80",
    tags: ["Fiber", "Heat-resistant"],
    price: "Free",
    provider: "Sundaram Farms"
  },
  {
    id: 2,
    title: "Coconut Shells",
    quantity: "200kg",
    location: "Kerala, India",
    image: "https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?auto=format&fit=crop&w=600&q=80",
    tags: ["Durable", "Water-resistant"],
    price: "$0.50/kg",
    provider: "Western Coconut Co-op"
  },
  {
    id: 3,
    title: "Corn Stalks",
    quantity: "1000kg",
    location: "Iowa, USA",
    image: "https://images.unsplash.com/photo-1469041797191-50ace28483c3?auto=format&fit=crop&w=600&q=80",
    tags: ["Fiber", "Biodegradable"],
    price: "$0.20/kg",
    provider: "Heartland Farms"
  },
  {
    id: 4,
    title: "Coffee Chaff",
    quantity: "120kg",
    location: "Colombia",
    image: "https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?auto=format&fit=crop&w=600&q=80",
    tags: ["Lightweight", "Thermal"],
    price: "$0.30/kg",
    provider: "Café Montaña"
  },
  {
    id: 5,
    title: "Bamboo Offcuts",
    quantity: "300kg",
    location: "Fujian, China",
    image: "https://images.unsplash.com/photo-1469041797191-50ace28483c3?auto=format&fit=crop&w=600&q=80",
    tags: ["Strong", "Versatile"],
    price: "$1.20/kg",
    provider: "Green Bamboo Industries"
  },
  {
    id: 6,
    title: "Wheat Straw",
    quantity: "800kg",
    location: "Kansas, USA",
    image: "https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?auto=format&fit=crop&w=600&q=80",
    tags: ["Fiber", "Natural"],
    price: "Free",
    provider: "Wheat Valley Co-op"
  }
];

const handicraftItems = [
  {
    id: 1,
    title: "Rice Husk Lamp",
    materials: "Rice Husks, Eco-resin",
    location: "Rajasthan, India",
    image: "https://images.unsplash.com/photo-1469041797191-50ace28483c3?auto=format&fit=crop&w=600&q=80",
    tags: ["Lighting", "Eco-friendly"],
    price: "$65.00",
    artisan: "Artisans Collective"
  },
  {
    id: 2,
    title: "Coconut Shell Jewelry Set",
    materials: "Coconut Shells, Silver",
    location: "Bali, Indonesia",
    image: "https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?auto=format&fit=crop&w=600&q=80",
    tags: ["Jewelry", "Handmade"],
    price: "$35.00",
    artisan: "Natural Artisans"
  }
];

const Marketplace = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <section className="bg-agri-beige-light py-8">
          <div className="container mx-auto">
            <div className="flex flex-col md:flex-row justify-between items-center mb-8">
              <h1 className="text-3xl font-bold text-gray-800 mb-4 md:mb-0">Marketplace</h1>
              <div className="w-full md:w-auto flex gap-4">
                <div className="relative flex-1 md:flex-auto">
                  <input 
                    type="text" 
                    placeholder="Search materials or crafts..." 
                    className="py-2 px-4 pl-10 w-full rounded-md border border-gray-300 focus:outline-none focus:ring-1 focus:ring-agri-green"
                  />
                  <Search className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
                </div>
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
              <div className="md:col-span-3 space-y-6">
                <div className="bg-white p-5 rounded-lg shadow-sm">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="font-semibold">Filters</h3>
                    <Filter className="h-4 w-4 text-gray-500" />
                  </div>
                  
                  <div className="space-y-4">
                    <div>
                      <button className="flex items-center justify-between w-full text-left">
                        <span className="font-medium">Category</span>
                        <ChevronDown className="h-4 w-4" />
                      </button>
                      <div className="mt-2 space-y-1">
                        <label className="flex items-center cursor-pointer">
                          <input type="checkbox" className="mr-2" />
                          <span className="text-sm">Agricultural Waste</span>
                        </label>
                        <label className="flex items-center cursor-pointer">
                          <input type="checkbox" className="mr-2" />
                          <span className="text-sm">Finished Handicrafts</span>
                        </label>
                        <label className="flex items-center cursor-pointer">
                          <input type="checkbox" className="mr-2" />
                          <span className="text-sm">Tools & Equipment</span>
                        </label>
                      </div>
                    </div>
                    
                    <div>
                      <button className="flex items-center justify-between w-full text-left">
                        <span className="font-medium">Material Type</span>
                        <ChevronDown className="h-4 w-4" />
                      </button>
                      <div className="mt-2 space-y-1">
                        <label className="flex items-center cursor-pointer">
                          <input type="checkbox" className="mr-2" />
                          <span className="text-sm">Plant Fibers</span>
                        </label>
                        <label className="flex items-center cursor-pointer">
                          <input type="checkbox" className="mr-2" />
                          <span className="text-sm">Hard Materials</span>
                        </label>
                        <label className="flex items-center cursor-pointer">
                          <input type="checkbox" className="mr-2" />
                          <span className="text-sm">Food Processing Waste</span>
                        </label>
                      </div>
                    </div>
                    
                    <div>
                      <button className="flex items-center justify-between w-full text-left">
                        <span className="font-medium">Location</span>
                        <ChevronDown className="h-4 w-4" />
                      </button>
                      <div className="mt-2 space-y-1">
                        <label className="flex items-center cursor-pointer">
                          <input type="checkbox" className="mr-2" />
                          <span className="text-sm">Asia</span>
                        </label>
                        <label className="flex items-center cursor-pointer">
                          <input type="checkbox" className="mr-2" />
                          <span className="text-sm">North America</span>
                        </label>
                        <label className="flex items-center cursor-pointer">
                          <input type="checkbox" className="mr-2" />
                          <span className="text-sm">Europe</span>
                        </label>
                      </div>
                    </div>
                    
                    <div>
                      <button className="flex items-center justify-between w-full text-left">
                        <span className="font-medium">Price Range</span>
                        <ChevronDown className="h-4 w-4" />
                      </button>
                      <div className="mt-2">
                        <div className="flex items-center justify-between">
                          <input 
                            type="text" 
                            placeholder="Min" 
                            className="w-24 border border-gray-300 rounded p-1 text-sm"
                          />
                          <span className="mx-2">-</span>
                          <input 
                            type="text" 
                            placeholder="Max" 
                            className="w-24 border border-gray-300 rounded p-1 text-sm"
                          />
                        </div>
                      </div>
                    </div>
                    
                    <Button className="w-full bg-agri-green hover:bg-agri-green-dark">
                      Apply Filters
                    </Button>
                  </div>
                </div>
              </div>
              
              <div className="md:col-span-9">
                <div className="mb-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <h2 className="text-xl font-semibold">Agricultural Waste Materials</h2>
                      <p className="text-gray-500 text-sm">Connect with farmers to source sustainable materials</p>
                    </div>
                    <div className="flex items-center space-x-2">
                      <button className="p-2 rounded hover:bg-gray-100">
                        <Grid className="h-5 w-5" />
                      </button>
                      <button className="p-2 rounded hover:bg-gray-100">
                        <List className="h-5 w-5" />
                      </button>
                    </div>
                  </div>
                </div>
                
                <div className="grid md:grid-cols-3 gap-4 mb-8">
                  {wasteItems.map(item => (
                    <Card key={item.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                      <div className="h-40 overflow-hidden">
                        <img 
                          src={item.image} 
                          alt={item.title} 
                          className="w-full h-full object-cover transition-transform hover:scale-105"
                        />
                      </div>
                      <CardContent className="p-4">
                        <div className="flex justify-between items-start">
                          <h3 className="text-lg font-semibold">{item.title}</h3>
                          <Badge className="bg-agri-green text-white">{item.price}</Badge>
                        </div>
                        <div className="mt-2 text-sm text-gray-500">
                          Quantity: {item.quantity}
                        </div>
                        <div className="flex items-center mt-1 text-sm text-gray-500">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                          </svg>
                          {item.location}
                        </div>
                        <div className="mt-3 flex flex-wrap gap-2">
                          {item.tags.map((tag, idx) => (
                            <Badge key={idx} variant="outline" className="bg-agri-beige text-agri-brown text-xs">
                              {tag}
                            </Badge>
                          ))}
                        </div>
                      </CardContent>
                      <CardFooter className="bg-gray-50 px-4 py-2">
                        <div className="flex justify-between w-full items-center">
                          <span className="text-xs text-gray-500">{item.provider}</span>
                          <Button variant="outline" className="h-8 text-xs border-agri-green text-agri-green hover:bg-agri-green hover:text-white">
                            Contact
                          </Button>
                        </div>
                      </CardFooter>
                    </Card>
                  ))}
                </div>
                
                <div className="mb-6 mt-12">
                  <div className="flex items-center justify-between">
                    <div>
                      <h2 className="text-xl font-semibold">Handcrafted Products</h2>
                      <p className="text-gray-500 text-sm">Beautiful items made from upcycled agricultural waste</p>
                    </div>
                  </div>
                </div>
                
                <div className="grid md:grid-cols-3 gap-4">
                  {handicraftItems.map(item => (
                    <Card key={item.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                      <div className="h-40 overflow-hidden">
                        <img 
                          src={item.image} 
                          alt={item.title} 
                          className="w-full h-full object-cover transition-transform hover:scale-105"
                        />
                      </div>
                      <CardContent className="p-4">
                        <div className="flex justify-between items-start">
                          <h3 className="text-lg font-semibold">{item.title}</h3>
                          <Badge className="bg-agri-brown text-white">{item.price}</Badge>
                        </div>
                        <div className="mt-2 text-sm text-gray-500">
                          Materials: {item.materials}
                        </div>
                        <div className="flex items-center mt-1 text-sm text-gray-500">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                          </svg>
                          {item.location}
                        </div>
                        <div className="mt-3 flex flex-wrap gap-2">
                          {item.tags.map((tag, idx) => (
                            <Badge key={idx} variant="outline" className="bg-agri-beige text-agri-brown text-xs">
                              {tag}
                            </Badge>
                          ))}
                        </div>
                      </CardContent>
                      <CardFooter className="bg-gray-50 px-4 py-2">
                        <div className="flex justify-between w-full items-center">
                          <span className="text-xs text-gray-500">By {item.artisan}</span>
                          <Button variant="outline" className="h-8 text-xs border-agri-brown text-agri-brown hover:bg-agri-brown hover:text-white">
                            View Details
                          </Button>
                        </div>
                      </CardFooter>
                    </Card>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Marketplace;
