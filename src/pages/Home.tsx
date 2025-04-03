
import { categories } from '@/data/crops';
import CategoryCard from '@/components/CategoryCard';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const Home = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative">
          <div className="absolute inset-0 bg-gradient-to-r from-garden-green-dark/70 to-garden-green-light/50 z-10" />
          <div 
            className="h-[500px] bg-cover bg-center"
            style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9)' }}
          />
          <div className="absolute inset-0 flex items-center justify-center z-20">
            <div className="text-center text-white max-w-3xl px-4">
              <h1 className="text-4xl md:text-6xl font-bold mb-4">Welcome to Leafy Green Guide</h1>
              <p className="text-lg md:text-xl mb-6">
                Your complete resource for growing beautiful and healthy plants
              </p>
            </div>
          </div>
        </section>

        {/* Categories Section */}
        <section className="garden-section container">
          <h2 className="text-3xl font-bold mb-8 text-center">Explore Plant Categories</h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {categories.map((category) => (
              <CategoryCard
                key={category.id}
                id={category.id}
                name={category.name}
                description={category.description}
                imageUrl={category.imageUrl}
              />
            ))}
          </div>
        </section>

        {/* Features Section */}
        <section className="garden-section bg-gray-50">
          <div className="container">
            <h2 className="text-3xl font-bold mb-8 text-center">Why Use Our Guide?</h2>
            <div className="grid gap-8 md:grid-cols-3">
              <div className="text-center">
                <div className="inline-flex items-center justify-center p-4 bg-garden-green-light/20 rounded-full mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8 text-garden-green-dark">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 18v-5.25m0 0a6.01 6.01 0 0 0 1.5-.189m-1.5.189a6.01 6.01 0 0 1-1.5-.189m3.75 7.478a12.06 12.06 0 0 1-4.5 0m3.75 2.383a14.406 14.406 0 0 1-3 0M14.25 18v-.192c0-.983.658-1.823 1.508-2.316a7.5 7.5 0 1 0-7.517 0c.85.493 1.509 1.333 1.509 2.316V18" />
                  </svg>
                </div>
                <h3 className="text-xl font-medium mb-2">Expert Growing Guides</h3>
                <p className="text-muted-foreground">
                  Detailed step-by-step instructions for successful plant cultivation
                </p>
              </div>
              
              <div className="text-center">
                <div className="inline-flex items-center justify-center p-4 bg-garden-green-light/20 rounded-full mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8 text-garden-green-dark">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 3.104v5.714a2.25 2.25 0 0 1-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 0 1 4.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15.3M14.25 3.104c.251.023.501.05.75.082M19.8 15.3l-1.57.393A9.065 9.065 0 0 1 12 15a9.065 9.065 0 0 0-6.23-.693L5 14.5m14.8.8 1.402 1.402c1.232 1.232.65 3.318-1.067 3.611A48.309 48.309 0 0 1 12 21c-2.773 0-5.491-.235-8.135-.687-1.718-.293-2.3-2.379-1.067-3.61L5 14.5" />
                  </svg>
                </div>
                <h3 className="text-xl font-medium mb-2">Fertilizer Comparisons</h3>
                <p className="text-muted-foreground">
                  Learn about organic and chemical options with benefits and risks
                </p>
              </div>
              
              <div className="text-center">
                <div className="inline-flex items-center justify-center p-4 bg-garden-green-light/20 rounded-full mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8 text-garden-green-dark">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 15.75V18m-7.5-6.75h.008v.008H8.25v-.008Zm0 2.25h.008v.008H8.25V13.5Zm0 2.25h.008v.008H8.25v-.008Zm0 2.25h.008v.008H8.25V18Zm2.498-6.75h.007v.008h-.007v-.008Zm0 2.25h.007v.008h-.007V13.5Zm0 2.25h.007v.008h-.007v-.008Zm0 2.25h.007v.008h-.007V18Zm2.504-6.75h.008v.008h-.008v-.008Zm0 2.25h.008v.008h-.008V13.5Zm0 2.25h.008v.008h-.008v-.008Zm0 2.25h.008v.008h-.008V18Zm2.498-6.75h.008v.008h-.008v-.008Zm0 2.25h.008v.008h-.008V13.5ZM8.25 6h7.5v2.25h-7.5V6ZM12 2.25c-1.892 0-3.758.11-5.593.322C5.307 2.7 4.5 3.65 4.5 4.757V19.5a2.25 2.25 0 0 0 2.25 2.25h10.5a2.25 2.25 0 0 0 2.25-2.25V4.757c0-1.108-.806-2.057-1.907-2.185A48.507 48.507 0 0 0 12 2.25Z" />
                  </svg>
                </div>
                <h3 className="text-xl font-medium mb-2">Season Planning</h3>
                <p className="text-muted-foreground">
                  Information on optimal planting times and seasonal care
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Home;
