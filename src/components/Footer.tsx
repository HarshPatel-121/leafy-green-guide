
import { Leaf } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="border-t py-8 mt-12">
      <div className="container">
        <div className="flex flex-col items-center justify-center md:flex-row md:justify-between">
          <div className="flex items-center gap-2 mb-4 md:mb-0">
            <Leaf className="h-5 w-5 text-garden-green-dark" />
            <span className="font-medium">Leafy Green Guide</span>
          </div>
          
          <p className="text-sm text-muted-foreground text-center md:text-right">
            © {new Date().getFullYear()} Leafy Green Guide. All rights reserved.
            <br />
            <span className="text-xs">Your companion for sustainable gardening.</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
