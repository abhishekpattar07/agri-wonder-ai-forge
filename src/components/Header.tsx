
import React from 'react';
import { Link } from 'react-router-dom';
import { Leaf, Recycle, MessageSquare, User } from "lucide-react";
import { Button } from "@/components/ui/button";

const Header = () => {
  return (
    <header className="w-full bg-white border-b border-agri-beige py-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="flex items-center gap-2">
          <Leaf className="h-6 w-6 text-agri-green" />
          <span className="font-bold text-xl text-agri-green-dark">AgriCraft</span>
        </Link>
        
        <nav className="hidden md:flex items-center gap-8">
          <Link to="/" className="text-gray-700 hover:text-agri-green transition-colors">Home</Link>
          <Link to="/marketplace" className="text-gray-700 hover:text-agri-green transition-colors">Marketplace</Link>
          <Link to="/about" className="text-gray-700 hover:text-agri-green transition-colors">About</Link>
          <Link to="/contact" className="text-gray-700 hover:text-agri-green transition-colors">Contact</Link>
        </nav>
        
        <div className="flex items-center gap-4">
          <Button variant="outline" className="hidden md:flex items-center gap-2">
            <MessageSquare className="h-4 w-4" />
            Connect
          </Button>
          <Button className="bg-agri-green hover:bg-agri-green-dark flex items-center gap-2">
            <User className="h-4 w-4" />
            Sign In
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
