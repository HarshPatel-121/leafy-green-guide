
import { Link } from 'react-router-dom';
import { Leaf } from 'lucide-react';
import SearchBar from './SearchBar';
import { useIsMobile } from '@/hooks/use-mobile';

const Header = () => {
  const isMobile = useIsMobile();
  
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between py-4">
        <Link to="/" className="flex items-center gap-2">
          <Leaf className="h-6 w-6 text-garden-green-dark" />
          <span className="font-bold text-xl">Leafy Green Guide</span>
        </Link>
        
        {!isMobile && <SearchBar className="mx-4" />}
        
        <nav className="hidden md:flex items-center gap-6">
          <Link to="/" className="text-sm font-medium hover:text-garden-green-dark transition-colors">
            Home
          </Link>
          <Link to="/about" className="text-sm font-medium hover:text-garden-green-dark transition-colors">
            About
          </Link>
        </nav>
      </div>
      
      {isMobile && (
        <div className="container pb-4">
          <SearchBar />
        </div>
      )}
    </header>
  );
};

export default Header;
