
import { Link } from 'react-router-dom';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ChevronRight } from 'lucide-react';

interface CategoryCardProps {
  id: string;
  name: string;
  description: string;
  imageUrl: string;
}

const CategoryCard = ({ id, name, description, imageUrl }: CategoryCardProps) => {
  return (
    <Card className="garden-card overflow-hidden flex flex-col h-full">
      <div className="relative h-48 overflow-hidden">
        <img 
          src={imageUrl} 
          alt={name}
          className="w-full h-full object-cover transition-transform hover:scale-105 duration-300"
        />
      </div>
      <CardHeader>
        <CardTitle className="text-garden-green-dark">{name}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent className="flex-grow">
        <p className="text-sm text-muted-foreground">
          Discover various {name.toLowerCase()} and learn how to grow them effectively.
        </p>
      </CardContent>
      <CardFooter>
        <Button asChild className="w-full bg-garden-green-dark hover:bg-garden-green-light">
          <Link to={`/category/${id}`}>
            Browse {name}
            <ChevronRight className="ml-2 h-4 w-4" />
          </Link>
        </Button>
      </CardFooter>
    </Card>
  );
};

export default CategoryCard;
