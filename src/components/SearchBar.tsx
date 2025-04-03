
import React, { useState } from 'react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Search } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

interface SearchBarProps {
  placeholder?: string;
  className?: string;
}

const SearchBar = ({ placeholder = 'Search for crops...', className = '' }: SearchBarProps) => {
  const [query, setQuery] = useState('');
  const navigate = useNavigate();

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (query.trim()) {
      navigate(`/search?q=${encodeURIComponent(query)}`);
    }
  };

  return (
    <form onSubmit={handleSearch} className={`flex w-full max-w-md gap-2 ${className}`}>
      <Input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder={placeholder}
        className="flex-1"
      />
      <Button type="submit" className="bg-garden-green-dark hover:bg-garden-green-light">
        <Search className="h-4 w-4 mr-2" />
        Search
      </Button>
    </form>
  );
};

export default SearchBar;
