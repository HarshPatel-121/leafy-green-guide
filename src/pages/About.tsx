
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

const About = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      
      <main className="flex-1">
        <section className="garden-section container">
          <div className="max-w-3xl mx-auto">
            <h1 className="text-4xl font-bold mb-6">About Leafy Green Guide</h1>
            
            <div className="prose prose-green max-w-none">
              <p className="text-lg mb-6">
                Welcome to Leafy Green Guide, your trusted companion for all things related to growing healthy, vibrant plants. Our mission is to provide accessible, reliable information to help both beginners and experienced gardeners succeed.
              </p>
              
              <h2 className="text-2xl font-medium mb-4 mt-8">Our Purpose</h2>
              <p className="mb-6">
                We believe that everyone should have access to knowledge about growing their own food and beautiful plants. Whether you have acres of land or just a small balcony, our guides are designed to help you make the most of your growing space.
              </p>
              
              <h2 className="text-2xl font-medium mb-4 mt-8">What Makes Us Different</h2>
              <ul className="list-disc pl-6 mb-6 space-y-2">
                <li>
                  <strong>Comprehensive Growing Guides:</strong> Step-by-step instructions for successful cultivation
                </li>
                <li>
                  <strong>Fertilizer Education:</strong> Clear comparisons between organic and chemical options
                </li>
                <li>
                  <strong>Seasonal Advice:</strong> Timely information about when to plant and harvest
                </li>
                <li>
                  <strong>Beginner-Friendly:</strong> Clear, jargon-free explanations
                </li>
              </ul>
              
              <h2 className="text-2xl font-medium mb-4 mt-8">Get Started</h2>
              <p className="mb-6">
                Browse our categories, search for specific plants, or dive into our detailed growing guides. Whether you're looking to grow juicy tomatoes, vibrant flowers, or crisp apples, we've got you covered.
              </p>
              
              <div className="mt-8 flex justify-center">
                <Button asChild className="bg-garden-green-dark hover:bg-garden-green-light">
                  <Link to="/">Explore Our Guide</Link>
                </Button>
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
