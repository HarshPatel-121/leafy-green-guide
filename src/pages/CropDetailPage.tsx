
import { useParams, useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import { getCropById } from '@/data/crops';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { ChevronLeft } from 'lucide-react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import FertilizerCard from '@/components/FertilizerCard';
import {
  DropletIcon,
  SunIcon,
  CalendarIcon,
  RulerIcon,
  MountainIcon,
  LightbulbIcon
} from 'lucide-react';

const CropDetailPage = () => {
  const { cropId } = useParams<{ cropId: string }>();
  const navigate = useNavigate();
  
  const crop = cropId ? getCropById(cropId) : undefined;
  
  useEffect(() => {
    if (!crop) {
      console.error(`Crop "${cropId}" not found.`);
    }
  }, [crop, cropId]);
  
  if (!crop) {
    return (
      <div className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-1 container py-12">
          <div className="text-center">
            <h1 className="text-2xl font-bold mb-4">Crop Not Found</h1>
            <p className="mb-6">Sorry, the crop you're looking for doesn't exist.</p>
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
        {/* Crop Hero */}
        <section className="relative">
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-black/30 z-10" />
          <div 
            className="h-[350px] bg-cover bg-center"
            style={{ backgroundImage: `url(${crop.imageUrl})` }}
          />
          <div className="absolute inset-0 flex items-center justify-center z-20">
            <div className="text-center text-white">
              <h1 className="text-4xl md:text-5xl font-bold mb-2">{crop.name}</h1>
              <p className="text-lg md:text-xl max-w-2xl mx-auto">{crop.description}</p>
            </div>
          </div>
        </section>
        
        {/* Navigation */}
        <div className="container mt-6">
          <Button 
            variant="outline" 
            onClick={() => navigate(`/category/${crop.category}`)}
            className="border-garden-green-dark text-garden-green-dark hover:bg-garden-green-light hover:text-white"
          >
            <ChevronLeft className="mr-2 h-4 w-4" /> 
            Back to {crop.category.charAt(0).toUpperCase() + crop.category.slice(1)}
          </Button>
        </div>
        
        {/* Tabs Content */}
        <section className="garden-section container">
          <Tabs defaultValue="growing" className="w-full">
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger value="growing">Growth Guide</TabsTrigger>
              <TabsTrigger value="fertilizers">Fertilizers</TabsTrigger>
            </TabsList>
            
            {/* Growing Guide Tab */}
            <TabsContent value="growing" className="mt-6">
              <div className="grid gap-8 md:grid-cols-2">
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <CalendarIcon className="h-5 w-5 text-garden-green-dark mt-0.5" />
                    <div>
                      <h3 className="font-medium mb-1">Best Sowing Time</h3>
                      <p>{crop.growthGuide.sowingTime}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-3">
                    <DropletIcon className="h-5 w-5 text-garden-sky mt-0.5" />
                    <div>
                      <h3 className="font-medium mb-1">Watering Schedule</h3>
                      <p>{crop.growthGuide.wateringSchedule}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-3">
                    <SunIcon className="h-5 w-5 text-garden-sun mt-0.5" />
                    <div>
                      <h3 className="font-medium mb-1">Sunlight Requirements</h3>
                      <p>{crop.growthGuide.sunlightRequirements}</p>
                    </div>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <CalendarIcon className="h-5 w-5 text-garden-green-dark mt-0.5" />
                    <div>
                      <h3 className="font-medium mb-1">Harvest Time</h3>
                      <p>{crop.growthGuide.harvestTime}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-3">
                    <RulerIcon className="h-5 w-5 text-garden-green-dark mt-0.5" />
                    <div>
                      <h3 className="font-medium mb-1">Plant Spacing</h3>
                      <p>{crop.growthGuide.spacing}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-3">
                    <MountainIcon className="h-5 w-5 text-garden-brown mt-0.5" />
                    <div>
                      <h3 className="font-medium mb-1">Soil Type</h3>
                      <p>{crop.growthGuide.soilType}</p>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Growing Tips */}
              <div className="mt-8 p-4 bg-garden-green-light/10 rounded-lg border border-garden-green-dark/20">
                <div className="flex items-center mb-3">
                  <LightbulbIcon className="h-5 w-5 text-garden-green-dark mr-2" />
                  <h3 className="font-medium">Growing Tips</h3>
                </div>
                <ul className="list-disc pl-5 space-y-2">
                  {crop.growthGuide.tips.map((tip, index) => (
                    <li key={index}>{tip}</li>
                  ))}
                </ul>
              </div>
            </TabsContent>
            
            {/* Fertilizers Tab */}
            <TabsContent value="fertilizers" className="mt-6">
              <div className="space-y-6">
                <div className="text-center mb-8">
                  <h2 className="text-2xl font-medium mb-2">Recommended Fertilizers</h2>
                  <p className="text-muted-foreground max-w-2xl mx-auto">
                    Compare organic and chemical fertilizer options for {crop.name}. Each has different benefits and potential risks.
                  </p>
                </div>
                
                <div className="grid gap-6 md:grid-cols-2">
                  {crop.fertilizers.map((fertilizer, index) => (
                    <FertilizerCard key={index} fertilizer={fertilizer} />
                  ))}
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default CropDetailPage;
