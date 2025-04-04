
import { Link } from 'react-router-dom';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { AspectRatio } from '@/components/ui/aspect-ratio';

interface CropCardProps {
  id: string;
  name: string;
  description: string;
  imageUrl: string;
}

const CropCard = ({ id, name, description, imageUrl }: CropCardProps) => {
  return (
    <Card className="garden-card h-full flex flex-col overflow-hidden hover:shadow-lg transition-all duration-300">
      <div className="relative overflow-hidden">
        <AspectRatio ratio={1 / 1} className="bg-muted">
          <img 
            src={imageUrl} 
            alt={name}
            className="w-full h-full object-cover transition-transform hover:scale-105 duration-300"
          />
        </AspectRatio>
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
