
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Leaf, Recycle, Users, Globe } from 'lucide-react';

const About = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <section className="py-16 md:py-24 bg-agri-beige-light">
          <div className="container mx-auto">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gray-800">About AgriCraft</h1>
              <p className="text-xl text-gray-600">
                Transforming agricultural waste into beautiful handicrafts through 
                AI-powered recommendations and sustainable partnerships.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
              <div>
                <img 
                  src="https://images.unsplash.com/photo-1469041797191-50ace28483c3?auto=format&fit=crop&w=800&q=80"
                  alt="AgriCraft Mission" 
                  className="rounded-xl shadow-lg"
                />
              </div>
              <div className="space-y-6">
                <h2 className="text-3xl font-bold text-gray-800">Our Mission</h2>
                <p className="text-gray-600">
                  At AgriCraft, we're dedicated to transforming agricultural waste into 
                  valuable, beautiful handicrafts. Our platform connects farmers with excess 
                  agricultural byproducts to skilled artisans who can transform these materials 
                  into sustainable products.
                </p>
                <p className="text-gray-600">
                  Through our AI-powered recommendation engine, we identify the best possible uses 
                  for different types of agricultural waste, maximizing value creation while 
                  minimizing environmental impact.
                </p>
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
              <div className="bg-white p-6 rounded-xl shadow-md">
                <div className="bg-agri-green/10 p-3 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                  <Leaf className="h-6 w-6 text-agri-green" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Sustainability</h3>
                <p className="text-gray-600">
                  We reduce agricultural waste by transforming it into valuable products, 
                  creating a circular economy model that benefits the environment.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-xl shadow-md">
                <div className="bg-agri-brown/10 p-3 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                  <Recycle className="h-6 w-6 text-agri-brown" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Upcycling</h3>
                <p className="text-gray-600">
                  Our AI technology identifies the optimal transformation paths for 
                  different types of agricultural waste, maximizing value creation.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-xl shadow-md">
                <div className="bg-agri-green/10 p-3 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                  <Users className="h-6 w-6 text-agri-green" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Community</h3>
                <p className="text-gray-600">
                  We build connections between farmers and artisans, creating sustainable 
                  partnerships that benefit rural communities and traditional crafts.
                </p>
              </div>
            </div>
            
            <div className="text-center max-w-3xl mx-auto mb-12">
              <h2 className="text-3xl font-bold mb-6 text-gray-800">Our Impact</h2>
              <p className="text-gray-600 mb-8">
                Since our founding, we've made significant progress in reducing agricultural 
                waste and supporting sustainable handicraft production.
              </p>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center mb-16">
              <div className="bg-white p-6 rounded-xl shadow-md">
                <div className="text-3xl font-bold text-agri-green mb-1">5,000+</div>
                <div className="text-gray-600">Kg of Waste Recycled</div>
              </div>
              
              <div className="bg-white p-6 rounded-xl shadow-md">
                <div className="text-3xl font-bold text-agri-brown mb-1">300+</div>
                <div className="text-gray-600">Artisans Supported</div>
              </div>
              
              <div className="bg-white p-6 rounded-xl shadow-md">
                <div className="text-3xl font-bold text-agri-green mb-1">150+</div>
                <div className="text-gray-600">Farming Communities</div>
              </div>
              
              <div className="bg-white p-6 rounded-xl shadow-md">
                <div className="text-3xl font-bold text-agri-brown mb-1">1,200+</div>
                <div className="text-gray-600">Products Created</div>
              </div>
            </div>
            
            <div className="flex items-center justify-center">
              <div className="h-px bg-agri-brown/20 flex-1 mr-4"></div>
              <div className="flex items-center space-x-2">
                <Globe className="h-6 w-6 text-agri-green" />
                <h2 className="text-2xl md:text-3xl font-bold text-gray-800">Join Our Mission</h2>
              </div>
              <div className="h-px bg-agri-brown/20 flex-1 ml-4"></div>
            </div>
            
            <div className="text-center max-w-xl mx-auto mt-8">
              <p className="text-gray-600 mb-8">
                Whether you're a farmer with excess agricultural materials or an artisan looking 
                for sustainable materials, join our growing community today.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a href="#" className="bg-agri-green hover:bg-agri-green-dark text-white px-6 py-3 rounded-md font-medium">
                  Register as Farmer
                </a>
                <a href="#" className="bg-agri-brown hover:bg-agri-brown-dark text-white px-6 py-3 rounded-md font-medium">
                  Join as Artisan
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default About;
