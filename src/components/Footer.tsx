
import React from 'react';
import { Link } from 'react-router-dom';
import { Leaf, Facebook, Twitter, Instagram, Youtube, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-50 border-t border-agri-beige pt-16 pb-8">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          <div className="space-y-4">
            <div className="flex items-center">
              <Leaf className="h-6 w-6 text-agri-green mr-2" />
              <span className="font-bold text-xl text-agri-green-dark">AgriCraft</span>
            </div>
            <p className="text-gray-600 text-sm">
              Transforming agricultural waste into beautiful handicrafts through 
              AI-powered recommendations and sustainable partnerships.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-500 hover:text-agri-green">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-500 hover:text-agri-green">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-500 hover:text-agri-green">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-500 hover:text-agri-green">
                <Youtube className="h-5 w-5" />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="text-gray-600 hover:text-agri-green text-sm">Home</Link></li>
              <li><Link to="/about" className="text-gray-600 hover:text-agri-green text-sm">About Us</Link></li>
              <li><Link to="/marketplace" className="text-gray-600 hover:text-agri-green text-sm">Marketplace</Link></li>
              <li><Link to="/blog" className="text-gray-600 hover:text-agri-green text-sm">Blog</Link></li>
              <li><Link to="/contact" className="text-gray-600 hover:text-agri-green text-sm">Contact</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold mb-4">Resources</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-600 hover:text-agri-green text-sm">Crafting Guides</a></li>
              <li><a href="#" className="text-gray-600 hover:text-agri-green text-sm">Waste Management</a></li>
              <li><a href="#" className="text-gray-600 hover:text-agri-green text-sm">Sustainability Tips</a></li>
              <li><a href="#" className="text-gray-600 hover:text-agri-green text-sm">AI Recommendations</a></li>
              <li><a href="#" className="text-gray-600 hover:text-agri-green text-sm">Partnership Program</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold mb-4">Newsletter</h3>
            <p className="text-gray-600 text-sm mb-4">
              Subscribe for updates on new artisans, waste listings, and sustainability tips.
            </p>
            <div className="flex">
              <input 
                type="email" 
                placeholder="Your email" 
                className="bg-white border border-gray-300 rounded-l-md px-3 py-2 text-sm w-full focus:outline-none focus:ring-1 focus:ring-agri-green"
              />
              <button className="bg-agri-green hover:bg-agri-green-dark text-white rounded-r-md px-3">
                <Mail className="h-4 w-4" />
              </button>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-200 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-500 text-sm">
              &copy; {new Date().getFullYear()} AgriCraft. All rights reserved.
            </p>
            <div className="flex space-x-4 mt-4 md:mt-0">
              <a href="#" className="text-gray-500 hover:text-agri-green text-sm">Privacy Policy</a>
              <a href="#" className="text-gray-500 hover:text-agri-green text-sm">Terms of Service</a>
              <a href="#" className="text-gray-500 hover:text-agri-green text-sm">Cookie Policy</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
