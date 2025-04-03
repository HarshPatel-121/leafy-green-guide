
import { useEffect, useState } from 'react';
import { useSearchParams, useNavigate } from 'react-router-dom';
import { searchCrops, Crop } from '@/data/crops';
import CropCard from '@/components/CropCard';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { ChevronLeft, SearchIcon } from 'lucide-react';
import SearchBar from '@/components/SearchBar';

const SearchResults = () => {
  const [searchParams] = useSearchParams();
  const query = searchParams.get('q') || '';
  const [results, setResults] = useState<Crop[]>([]);
  const navigate = useNavigate();
  
  useEffect(() => {
    if (query) {
      const searchResults = searchCrops(query);
      setResults(searchResults);
    } else {
      setResults([]);
    }
  }, [query]);
  
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      
      <main className="flex-1 container py-12">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
          <div>
            <h1 className="text-3xl font-bold mb-2">Search Results</h1>
            <p className="text-muted-foreground">
              {results.length} results found for "{query}"
            </p>
          </div>
          <Button 
            variant="outline" 
            onClick={() => navigate('/')}
            className="border-garden-green-dark text-garden-green-dark hover:bg-garden-green-light hover:text-white"
          >
            <ChevronLeft className="mr-2 h-4 w-4" /> 
            Back to Home
          </Button>
        </div>
        
        {/* Search Bar */}
        <div className="mb-8">
          <SearchBar placeholder="Refine your search..." />
        </div>
        
        {/* Results */}
        {results.length > 0 ? (
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {results.map((crop) => (
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
          <div className="text-center py-12 border rounded-lg">
            <SearchIcon className="mx-auto h-12 w-12 text-muted-foreground mb-4" />
            <h2 className="text-xl font-medium mb-2">No results found</h2>
            <p className="text-muted-foreground mb-6">
              We couldn't find any crops that match your search.
            </p>
            <SearchBar 
              placeholder="Try a different search..." 
              className="max-w-md mx-auto"
            />
          </div>
        )}
      </main>
      
      <Footer />
    </div>
  );
};

export default SearchResults;
