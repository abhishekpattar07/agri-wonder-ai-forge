
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Leaf } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow flex items-center justify-center py-16">
        <div className="text-center max-w-lg mx-auto px-4">
          <div className="flex justify-center mb-6">
            <div className="bg-agri-green/10 p-6 rounded-full">
              <Leaf className="h-16 w-16 text-agri-green" />
            </div>
          </div>
          <h1 className="text-5xl font-bold mb-4 text-gray-800">404</h1>
          <p className="text-xl text-gray-600 mb-8">
            We couldn't find the page you're looking for. The seeds might have been planted elsewhere.
          </p>
          <Link 
            to="/" 
            className="bg-agri-green hover:bg-agri-green-dark text-white px-6 py-3 rounded-md font-medium inline-block"
          >
            Return to Homepage
          </Link>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default NotFound;
