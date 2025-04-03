
import { Link } from 'react-router-dom';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

interface CropCardProps {
  id: string;
  name: string;
  description: string;
  imageUrl: string;
}

const CropCard = ({ id, name, description, imageUrl }: CropCardProps) => {
  return (
    <Card className="garden-card h-full flex flex-col">
      <div className="relative h-40 overflow-hidden rounded-t-md">
        <img 
          src={imageUrl} 
          alt={name}
          className="w-full h-full object-cover transition-transform hover:scale-105 duration-300"
        />
      </div>
      <CardHeader className="pb-2">
        <CardTitle className="text-xl text-garden-green-dark">{name}</CardTitle>
      </CardHeader>
      <CardContent className="flex-grow pb-4">
        <p className="text-sm text-muted-foreground line-clamp-3">{description}</p>
      </CardContent>
      <CardFooter>
        <Button 
          asChild 
          variant="outline" 
          className="w-full border-garden-green-dark text-garden-green-dark hover:bg-garden-green-light hover:text-white"
        >
          <Link to={`/crop/${id}`}>Growing Guide</Link>
        </Button>
      </CardFooter>
    </Card>
  );
};

export default CropCard;
