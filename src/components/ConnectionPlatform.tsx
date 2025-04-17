
import React from 'react';
import { Link2, MapPin, User, FilePlus2, Send, Search, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const ConnectionPlatform = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto">
        <div className="flex items-center justify-center mb-12">
          <div className="h-px bg-agri-brown/20 flex-1 mr-4"></div>
          <div className="flex items-center space-x-2">
            <Link2 className="h-6 w-6 text-agri-green" />
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800">Connect & Collaborate</h2>
          </div>
          <div className="h-px bg-agri-brown/20 flex-1 ml-4"></div>
        </div>
        
        <div className="text-center max-w-xl mx-auto mb-12">
          <p className="text-gray-600">
            Our platform bridges the gap between agricultural waste producers and creative artisans, 
            creating sustainable partnerships that benefit everyone.
          </p>
        </div>
        
        <div className="bg-agri-beige-light rounded-xl p-6 md:p-12">
          <Tabs defaultValue="farmer" className="w-full">
            <TabsList className="grid grid-cols-2 mb-8 w-full md:w-1/2 mx-auto">
              <TabsTrigger value="farmer" className="data-[state=active]:bg-agri-green data-[state=active]:text-white">
                I'm a Farmer
              </TabsTrigger>
              <TabsTrigger value="artisan" className="data-[state=active]:bg-agri-brown data-[state=active]:text-white">
                I'm an Artisan
              </TabsTrigger>
            </TabsList>
            
            <TabsContent value="farmer">
              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-6">
                  <h3 className="text-xl font-semibold">List Your Agricultural Waste</h3>
                  <p className="text-gray-600">
                    Share details about your available agricultural byproducts and connect with artisans 
                    who can transform them into valuable handicrafts.
                  </p>
                  
                  <div className="space-y-4">
                    <div className="flex items-center">
                      <div className="bg-white p-2 rounded-full mr-4">
                        <FilePlus2 className="h-5 w-5 text-agri-green" />
                      </div>
                      <div>
                        <h4 className="font-medium">Describe Your Materials</h4>
                        <p className="text-sm text-gray-500">List the type, quantity, and frequency of waste</p>
                      </div>
                    </div>
                    
                    <div className="flex items-center">
                      <div className="bg-white p-2 rounded-full mr-4">
                        <MapPin className="h-5 w-5 text-agri-green" />
                      </div>
                      <div>
                        <h4 className="font-medium">Set Your Location</h4>
                        <p className="text-sm text-gray-500">Connect with local artisans to reduce transportation</p>
                      </div>
                    </div>
                    
                    <div className="flex items-center">
                      <div className="bg-white p-2 rounded-full mr-4">
                        <User className="h-5 w-5 text-agri-green" />
                      </div>
                      <div>
                        <h4 className="font-medium">Connect With Artisans</h4>
                        <p className="text-sm text-gray-500">Receive crafting proposals and create partnerships</p>
                      </div>
                    </div>
                  </div>
                </div>
                
                <Card>
                  <CardContent className="p-6">
                    <h3 className="text-lg font-semibold mb-4">Get Started Now</h3>
                    <form className="space-y-4">
                      <div>
                        <label className="block text-sm font-medium mb-1">Waste Type</label>
                        <Input placeholder="e.g., Rice Husks, Corn Stalks" />
                      </div>
                      <div>
                        <label className="block text-sm font-medium mb-1">Estimated Quantity</label>
                        <Input placeholder="e.g., 500kg per month" />
                      </div>
                      <div>
                        <label className="block text-sm font-medium mb-1">Location</label>
                        <Input placeholder="City, Region" />
                      </div>
                      <div>
                        <label className="block text-sm font-medium mb-1">Contact Email</label>
                        <Input type="email" placeholder="your@email.com" />
                      </div>
                      <Button className="w-full bg-agri-green hover:bg-agri-green-dark">
                        <Send className="mr-2 h-4 w-4" />
                        Submit Listing
                      </Button>
                    </form>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
            
            <TabsContent value="artisan">
              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-6">
                  <h3 className="text-xl font-semibold">Find Agricultural Materials</h3>
                  <p className="text-gray-600">
                    Browse available agricultural byproducts and connect with farmers to source sustainable 
                    materials for your handicraft creations.
                  </p>
                  
                  <div className="space-y-4">
                    <div className="flex items-center">
                      <div className="bg-white p-2 rounded-full mr-4">
                        <Search className="h-5 w-5 text-agri-brown" />
                      </div>
                      <div>
                        <h4 className="font-medium">Discover Materials</h4>
                        <p className="text-sm text-gray-500">Find agricultural waste that matches your needs</p>
                      </div>
                    </div>
                    
                    <div className="flex items-center">
                      <div className="bg-white p-2 rounded-full mr-4">
                        <Sparkles className="h-5 w-5 text-agri-brown" />
                      </div>
                      <div>
                        <h4 className="font-medium">Get AI Inspiration</h4>
                        <p className="text-sm text-gray-500">Receive creative suggestions for upcycling</p>
                      </div>
                    </div>
                    
                    <div className="flex items-center">
                      <div className="bg-white p-2 rounded-full mr-4">
                        <Link2 className="h-5 w-5 text-agri-brown" />
                      </div>
                      <div>
                        <h4 className="font-medium">Connect With Farmers</h4>
                        <p className="text-sm text-gray-500">Establish sustainable sourcing relationships</p>
                      </div>
                    </div>
                  </div>
                </div>
                
                <Card>
                  <CardContent className="p-6">
                    <h3 className="text-lg font-semibold mb-4">Find Materials</h3>
                    <form className="space-y-4">
                      <div>
                        <label className="block text-sm font-medium mb-1">Material Type</label>
                        <Input placeholder="e.g., Natural Fibers, Plant Matter" />
                      </div>
                      <div>
                        <label className="block text-sm font-medium mb-1">Desired Properties</label>
                        <Input placeholder="e.g., Flexible, Durable, Colorful" />
                      </div>
                      <div>
                        <label className="block text-sm font-medium mb-1">Your Location</label>
                        <Input placeholder="City, Region" />
                      </div>
                      <div>
                        <label className="block text-sm font-medium mb-1">Contact Email</label>
                        <Input type="email" placeholder="your@email.com" />
                      </div>
                      <Button className="w-full bg-agri-brown hover:bg-agri-brown-dark">
                        <Search className="mr-2 h-4 w-4" />
                        Search Materials
                      </Button>
                    </form>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </section>
  );
};

export default ConnectionPlatform;
