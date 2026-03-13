import { useState } from "react";
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const products = [
  { id: 1, title: "Wireless Headphones", description: "High-quality sound with noise cancellation.", price: "$199.99", image: "https://via.placeholder.com/300x200", inStock: true },
  { id: 2, title: "Smart Watch", description: "Track your fitness and stay connected.", price: "$299.99", image: "https://via.placeholder.com/300x200", inStock: false },
  { id: 3, title: "Laptop Stand", description: "Ergonomic design for better posture.", price: "$49.99", image: "https://via.placeholder.com/300x200", inStock: true },
  { id: 4, title: "Bluetooth Speaker", description: "Portable and waterproof.", price: "$79.99", image: "https://via.placeholder.com/300x200", inStock: true },
  { id: 5, title: "Gaming Mouse", description: "Precision and comfort for gamers.", price: "$39.99", image: "https://via.placeholder.com/300x200", inStock: false },
  { id: 6, title: "USB-C Hub", description: "Multiple ports for your devices.", price: "$29.99", image: "https://via.placeholder.com/300x200", inStock: true },
  { id: 7, title: "Wireless Charger", description: "Fast charging for compatible devices.", price: "$24.99", image: "https://via.placeholder.com/300x200", inStock: true },
  { id: 8, title: "Mechanical Keyboard", description: "Tactile switches for typing.", price: "$129.99", image: "https://via.placeholder.com/300x200", inStock: false },
  { id: 9, title: "Monitor Stand", description: "Adjustable height and angle.", price: "$59.99", image: "https://via.placeholder.com/300x200", inStock: true },
  { id: 10, title: "Webcam Cover", description: "Privacy slider for your camera.", price: "$9.99", image: "https://via.placeholder.com/300x200", inStock: true },
  { id: 11, title: "External SSD", description: "Fast storage for your files.", price: "$89.99", image: "https://via.placeholder.com/300x200", inStock: true },
  { id: 12, title: "Phone Case", description: "Protective and stylish.", price: "$19.99", image: "https://via.placeholder.com/300x200", inStock: false },
  { id: 13, title: "LED Desk Lamp", description: "Adjustable brightness and color.", price: "$69.99", image: "https://via.placeholder.com/300x200", inStock: true },
  { id: 14, title: "Cable Organizer", description: "Keep your cables tidy.", price: "$14.99", image: "https://via.placeholder.com/300x200", inStock: true },
  { id: 15, title: "Portable Charger", description: "Power on the go.", price: "$34.99", image: "https://via.placeholder.com/300x200", inStock: true },
  { id: 16, title: "Mouse Pad", description: "Smooth surface for precision.", price: "$12.99", image: "https://via.placeholder.com/300x200", inStock: false },
  { id: 17, title: "HDMI Cable", description: "High-speed video and audio.", price: "$15.99", image: "https://via.placeholder.com/300x200", inStock: true },
  { id: 18, title: "Screen Protector", description: "Anti-glare and scratch resistant.", price: "$22.99", image: "https://via.placeholder.com/300x200", inStock: true },
  { id: 19, title: "Keyboard Wrist Rest", description: "Comfort for long typing sessions.", price: "$18.99", image: "https://via.placeholder.com/300x200", inStock: true },
  { id: 20, title: "USB Flash Drive", description: "Reliable storage solution.", price: "$16.99", image: "https://via.placeholder.com/300x200", inStock: false },
  { id: 21, title: "Laptop Sleeve", description: "Protect your device.", price: "$25.99", image: "https://via.placeholder.com/300x200", inStock: true },
  { id: 22, title: "Wireless Earbuds", description: "True wireless freedom.", price: "$149.99", image: "https://via.placeholder.com/300x200", inStock: true },
  { id: 23, title: "Graphics Tablet", description: "Digital drawing tool.", price: "$199.99", image: "https://via.placeholder.com/300x200", inStock: false },
  { id: 24, title: "Router", description: "High-speed internet connection.", price: "$99.99", image: "https://via.placeholder.com/300x200", inStock: true },
  { id: 25, title: "Microphone", description: "Clear audio recording.", price: "$79.99", image: "https://via.placeholder.com/300x200", inStock: true },
  { id: 26, title: "Power Strip", description: "Multiple outlets with surge protection.", price: "$39.99", image: "https://via.placeholder.com/300x200", inStock: true },
  { id: 27, title: "VR Headset", description: "Immersive virtual reality.", price: "$399.99", image: "https://via.placeholder.com/300x200", inStock: false },
  { id: 28, title: "Smart Home Hub", description: "Control your devices.", price: "$129.99", image: "https://via.placeholder.com/300x200", inStock: true },
  { id: 29, title: "Drone", description: "Capture aerial footage.", price: "$299.99", image: "https://via.placeholder.com/300x200", inStock: true },
  { id: 30, title: "Fitness Tracker", description: "Monitor your health.", price: "$99.99", image: "https://via.placeholder.com/300x200", inStock: true },
  { id: 31, title: "Coffee Maker", description: "Brew perfect coffee.", price: "$149.99", image: "https://via.placeholder.com/300x200", inStock: false },
  { id: 32, title: "Air Purifier", description: "Clean air for your home.", price: "$199.99", image: "https://via.placeholder.com/300x200", inStock: true },
  { id: 33, title: "Robot Vacuum", description: "Automated cleaning.", price: "$349.99", image: "https://via.placeholder.com/300x200", inStock: true },
  { id: 34, title: "Smart Thermostat", description: "Energy-efficient heating.", price: "$249.99", image: "https://via.placeholder.com/300x200", inStock: true },
  { id: 35, title: "E-Reader", description: "Digital book reading.", price: "$129.99", image: "https://via.placeholder.com/300x200", inStock: false },
  { id: 36, title: "Projector", description: "Home theater experience.", price: "$499.99", image: "https://via.placeholder.com/300x200", inStock: true },
  { id: 37, title: "Soundbar", description: "Enhanced audio.", price: "$199.99", image: "https://via.placeholder.com/300x200", inStock: true },
  { id: 38, title: "Dash Cam", description: "Record your drives.", price: "$89.99", image: "https://via.placeholder.com/300x200", inStock: true },
  { id: 39, title: "Smart Lock", description: "Keyless entry.", price: "$179.99", image: "https://via.placeholder.com/300x200", inStock: false },
  { id: 40, title: "Electric Scooter", description: "Eco-friendly transport.", price: "$599.99", image: "https://via.placeholder.com/300x200", inStock: true },
  { id: 41, title: "Massage Chair", description: "Relaxation at home.", price: "$999.99", image: "https://via.placeholder.com/300x200", inStock: true },
  { id: 42, title: "Wine Cooler", description: "Perfect wine storage.", price: "$299.99", image: "https://via.placeholder.com/300x200", inStock: true },
  { id: 43, title: "Treadmill", description: "Home workout machine.", price: "$799.99", image: "https://via.placeholder.com/300x200", inStock: false },
  { id: 44, title: "Espresso Machine", description: "Professional coffee making.", price: "$399.99", image: "https://via.placeholder.com/300x200", inStock: true },
  { id: 45, title: "Smart Refrigerator", description: "Intelligent food storage.", price: "$1499.99", image: "https://via.placeholder.com/300x200", inStock: true },
  { id: 46, title: "Home Security Camera", description: "Monitor your property.", price: "$119.99", image: "https://via.placeholder.com/300x200", inStock: true },
  { id: 47, title: "Electric Bike", description: "Assisted cycling.", price: "$1999.99", image: "https://via.placeholder.com/300x200", inStock: false },
  { id: 48, title: "Air Fryer", description: "Healthy cooking.", price: "$99.99", image: "https://via.placeholder.com/300x200", inStock: true },
  { id: 49, title: "Robot Lawn Mower", description: "Automated lawn care.", price: "$699.99", image: "https://via.placeholder.com/300x200", inStock: true },
  { id: 50, title: "Smart Mirror", description: "Interactive bathroom mirror.", price: "$399.99", image: "https://via.placeholder.com/300x200", inStock: true },
];

const CatalogueSection = () => {
  const [visibleCount, setVisibleCount] = useState(10);

  const loadMore = () => {
    setVisibleCount((prev) => Math.min(prev + 10, products.length));
  };

  const visibleProducts = products.slice(0, visibleCount);

  return (
    <section className="container px-6 py-20 mx-auto">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-semibold">Product Catalogue</h2>
        <p className="mt-4 text-muted-foreground">
          Browse our extensive collection of digital products and accessories.
        </p>
      </div>

      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {visibleProducts.map((p) => (
          <Card key={p.id} className="relative hover:shadow-lg transition-shadow">
            <div className="absolute top-2 right-2 z-10">
              <Badge variant={p.inStock ? "default" : "destructive"}>
                {p.inStock ? "In Stock" : "Out of Stock"}
              </Badge>
            </div>
            <CardHeader className="p-0">
              <img src={p.image} alt={p.title} className="w-full h-48 object-cover rounded-t-lg" />
            </CardHeader>
            <CardContent className="p-4">
              <CardTitle className="text-lg">{p.title}</CardTitle>
              <CardDescription className="mt-2">{p.description}</CardDescription>
              <p className="mt-2 font-semibold text-lg">{p.price}</p>
            </CardContent>
            <CardFooter className="p-4 pt-0">
              <Button size="sm" className="w-full">
                Add to Cart
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>

      {visibleCount < products.length && (
        <div className="text-center mt-12">
          <Button onClick={loadMore} size="lg">
            Load More
          </Button>
        </div>
      )}
    </section>
  );
};

export default CatalogueSection;
