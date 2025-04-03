
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Fertilizer } from '@/data/crops';
import { Badge } from '@/components/ui/badge';
import { Check, X } from 'lucide-react';

interface FertilizerCardProps {
  fertilizer: Fertilizer;
}

const FertilizerCard = ({ fertilizer }: FertilizerCardProps) => {
  const isOrganic = fertilizer.type === 'organic';
  
  return (
    <Card className={`garden-card ${isOrganic ? 'border-garden-green-dark' : 'border-garden-brown'}`}>
      <CardHeader className="pb-2">
        <div className="flex justify-between items-center mb-2">
          <CardTitle className="text-xl">{fertilizer.name}</CardTitle>
          <Badge 
            className={isOrganic 
              ? "bg-garden-green-dark hover:bg-garden-green-light" 
              : "bg-garden-brown hover:bg-garden-soil"
            }
          >
            {isOrganic ? 'Organic' : 'Chemical'}
          </Badge>
        </div>
        <CardDescription>Application: {fertilizer.application}</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <div>
            <h4 className="font-medium text-sm flex items-center mb-2">
              <Check className="h-4 w-4 mr-2 text-garden-green-dark" />
              Benefits
            </h4>
            <ul className="list-disc pl-5 text-sm space-y-1">
              {fertilizer.benefits.map((benefit, index) => (
                <li key={index}>{benefit}</li>
              ))}
            </ul>
          </div>
          
          <div>
            <h4 className="font-medium text-sm flex items-center mb-2">
              <X className="h-4 w-4 mr-2 text-destructive" />
              Risks
            </h4>
            <ul className="list-disc pl-5 text-sm space-y-1">
              {fertilizer.risks.map((risk, index) => (
                <li key={index}>{risk}</li>
              ))}
            </ul>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default FertilizerCard;
