
import { useParams, useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import { getCropsByCategory, categories } from '@/data/crops';
import CropCard from '@/components/CropCard';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { ChevronLeft } from 'lucide-react';

const CategoryPage = () => {
  const { categoryId } = useParams<{ categoryId: string }>();
  const navigate = useNavigate();
  
  const category = categories.find(cat => cat.id === categoryId);
  const crops = categoryId ? getCropsByCategory(categoryId as any) : [];
  
  useEffect(() => {
    if (!category) {
      console.error(`Category "${categoryId}" not found.`);
    }
  }, [category, categoryId]);
  
  if (!category) {
    return (
      <div className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-1 container py-12">
          <div className="text-center">
            <h1 className="text-2xl font-bold mb-4">Category Not Found</h1>
            <p className="mb-6">Sorry, the category you're looking for doesn't exist.</p>
            <Button 
              onClick={() => navigate('/')}
              className="bg-garden-green-dark hover:bg-garden-green-light"
            >
              <ChevronLeft className="mr-2 h-4 w-4" /> 
              Back to Home
            </Button>
          </div>
        </main>
        <Footer />
      </div>
    );
  }
  
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      
      <main className="flex-1">
        {/* Category Hero */}
        <section className="relative">
          <div className="absolute inset-0 bg-black/60 z-10" />
          <div 
            className="h-[350px] bg-cover bg-center"
            style={{ backgroundImage: `url(${category.imageUrl})` }}
          />
          <div className="absolute inset-0 flex items-center justify-center z-20">
            <div className="text-center text-white">
              <h1 className="text-4xl md:text-5xl font-bold mb-4 drop-shadow-lg">{category.name}</h1>
              <p className="text-lg md:text-xl max-w-2xl mx-auto drop-shadow-md">{category.description}</p>
            </div>
          </div>
        </section>
        
        {/* Crops List */}
        <section className="garden-section container">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-2xl font-bold">Browse {category.name}</h2>
            <Button 
              variant="outline" 
              onClick={() => navigate('/')}
              className="border-garden-green-dark text-garden-green-dark hover:bg-garden-green-light hover:text-white"
            >
              <ChevronLeft className="mr-2 h-4 w-4" /> 
              Back to Categories
            </Button>
          </div>
          
          {crops.length > 0 ? (
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 pb-12">
              {crops.map((crop) => (
                <CropCard
                  key={crop.id}
                  id={crop.id}
                  name={crop.name}
                  description={crop.description}
                  imageUrl={crop.imageUrl}
                />
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <p className="text-lg text-muted-foreground">
                No crops found in this category.
              </p>
            </div>
          )}
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default CategoryPage;
