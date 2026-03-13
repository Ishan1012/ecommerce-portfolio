import { useParams } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { useCart } from "@/contexts/CartContext";

const products = [
    { id: 1, title: "Wireless Headphones", description: "High-quality sound with noise cancellation.", price: "Rs. 199.99", image: "https://placehold.co/300x200", inStock: true },
    { id: 2, title: "Smart Watch", description: "Track your fitness and stay connected.", price: "Rs. 299.99", image: "https://placehold.co/300x200", inStock: false },
    { id: 3, title: "Laptop Stand", description: "Ergonomic design for better posture.", price: "Rs. 49.99", image: "https://placehold.co/300x200", inStock: true },
    { id: 4, title: "Bluetooth Speaker", description: "Portable and waterproof.", price: "Rs. 79.99", image: "https://placehold.co/300x200", inStock: true },
    { id: 5, title: "Gaming Mouse", description: "Precision and comfort for gamers.", price: "Rs. 39.99", image: "https://placehold.co/300x200", inStock: false },
    { id: 6, title: "USB-C Hub", description: "Multiple ports for your devices.", price: "Rs. 29.99", image: "https://placehold.co/300x200", inStock: true },
    { id: 7, title: "Wireless Charger", description: "Fast charging for compatible devices.", price: "Rs. 24.99", image: "https://placehold.co/300x200", inStock: true },
    { id: 8, title: "Mechanical Keyboard", description: "Tactile switches for typing.", price: "Rs. 129.99", image: "https://placehold.co/300x200", inStock: false },
    { id: 9, title: "Monitor Stand", description: "Adjustable height and angle.", price: "Rs. 59.99", image: "https://placehold.co/300x200", inStock: true },
    { id: 10, title: "Webcam Cover", description: "Privacy slider for your camera.", price: "Rs. 9.99", image: "https://placehold.co/300x200", inStock: true },
    { id: 11, title: "External SSD", description: "Fast storage for your files.", price: "Rs. 89.99", image: "https://placehold.co/300x200", inStock: true },
    { id: 12, title: "Phone Case", description: "Protective and stylish.", price: "Rs. 19.99", image: "https://placehold.co/300x200", inStock: false },
    { id: 13, title: "LED Desk Lamp", description: "Adjustable brightness and color.", price: "Rs. 69.99", image: "https://placehold.co/300x200", inStock: true },
    { id: 14, title: "Cable Organizer", description: "Keep your cables tidy.", price: "Rs. 14.99", image: "https://placehold.co/300x200", inStock: true },
    { id: 15, title: "Portable Charger", description: "Power on the go.", price: "Rs. 34.99", image: "https://placehold.co/300x200", inStock: true },
    { id: 16, title: "Mouse Pad", description: "Smooth surface for precision.", price: "Rs. 12.99", image: "https://placehold.co/300x200", inStock: false },
    { id: 17, title: "HDMI Cable", description: "High-speed video and audio.", price: "Rs. 15.99", image: "https://placehold.co/300x200", inStock: true },
    { id: 18, title: "Screen Protector", description: "Anti-glare and scratch resistant.", price: "Rs. 22.99", image: "https://placehold.co/300x200", inStock: true },
    { id: 19, title: "Keyboard Wrist Rest", description: "Comfort for long typing sessions.", price: "Rs. 18.99", image: "https://placehold.co/300x200", inStock: true },
    { id: 20, title: "USB Flash Drive", description: "Reliable storage solution.", price: "Rs. 16.99", image: "https://placehold.co/300x200", inStock: false },
    { id: 21, title: "Laptop Sleeve", description: "Protect your device.", price: "Rs. 25.99", image: "https://placehold.co/300x200", inStock: true },
    { id: 22, title: "Wireless Earbuds", description: "True wireless freedom.", price: "Rs. 149.99", image: "https://placehold.co/300x200", inStock: true },
    { id: 23, title: "Graphics Tablet", description: "Digital drawing tool.", price: "Rs. 199.99", image: "https://placehold.co/300x200", inStock: false },
    { id: 24, title: "Router", description: "High-speed internet connection.", price: "Rs. 99.99", image: "https://placehold.co/300x200", inStock: true },
    { id: 25, title: "Microphone", description: "Clear audio recording.", price: "Rs. 79.99", image: "https://placehold.co/300x200", inStock: true },
    { id: 26, title: "Power Strip", description: "Multiple outlets with surge protection.", price: "Rs. 39.99", image: "https://placehold.co/300x200", inStock: true },
    { id: 27, title: "VR Headset", description: "Immersive virtual reality.", price: "Rs. 399.99", image: "https://placehold.co/300x200", inStock: false },
    { id: 28, title: "Smart Home Hub", description: "Control your devices.", price: "Rs. 129.99", image: "https://placehold.co/300x200", inStock: true },
    { id: 29, title: "Drone", description: "Capture aerial footage.", price: "Rs. 299.99", image: "https://placehold.co/300x200", inStock: true },
    { id: 30, title: "Fitness Tracker", description: "Monitor your health.", price: "Rs. 99.99", image: "https://placehold.co/300x200", inStock: true },
    { id: 31, title: "Coffee Maker", description: "Brew perfect coffee.", price: "Rs. 149.99", image: "https://placehold.co/300x200", inStock: false },
    { id: 32, title: "Air Purifier", description: "Clean air for your home.", price: "Rs. 199.99", image: "https://placehold.co/300x200", inStock: true },
    { id: 33, title: "Robot Vacuum", description: "Automated cleaning.", price: "Rs. 349.99", image: "https://placehold.co/300x200", inStock: true },
    { id: 34, title: "Smart Thermostat", description: "Energy-efficient heating.", price: "Rs. 249.99", image: "https://placehold.co/300x200", inStock: true },
    { id: 35, title: "E-Reader", description: "Digital book reading.", price: "Rs. 129.99", image: "https://placehold.co/300x200", inStock: false },
    { id: 36, title: "Projector", description: "Home theater experience.", price: "Rs. 499.99", image: "https://placehold.co/300x200", inStock: true },
    { id: 37, title: "Soundbar", description: "Enhanced audio.", price: "Rs. 199.99", image: "https://placehold.co/300x200", inStock: true },
    { id: 38, title: "Dash Cam", description: "Record your drives.", price: "Rs. 89.99", image: "https://placehold.co/300x200", inStock: true },
    { id: 39, title: "Smart Lock", description: "Keyless entry.", price: "Rs. 179.99", image: "https://placehold.co/300x200", inStock: false },
    { id: 40, title: "Electric Scooter", description: "Eco-friendly transport.", price: "Rs. 599.99", image: "https://placehold.co/300x200", inStock: true },
    { id: 41, title: "Massage Chair", description: "Relaxation at home.", price: "Rs. 999.99", image: "https://placehold.co/300x200", inStock: true },
    { id: 42, title: "Wine Cooler", description: "Perfect wine storage.", price: "Rs. 299.99", image: "https://placehold.co/300x200", inStock: true },
    { id: 43, title: "Treadmill", description: "Home workout machine.", price: "Rs. 799.99", image: "https://placehold.co/300x200", inStock: false },
    { id: 44, title: "Espresso Machine", description: "Professional coffee making.", price: "Rs. 399.99", image: "https://placehold.co/300x200", inStock: true },
    { id: 45, title: "Smart Refrigerator", description: "Intelligent food storage.", price: "Rs. 1499.99", image: "https://placehold.co/300x200", inStock: true },
    { id: 46, title: "Home Security Camera", description: "Monitor your property.", price: "Rs. 119.99", image: "https://placehold.co/300x200", inStock: true },
    { id: 47, title: "Electric Bike", description: "Assisted cycling.", price: "Rs. 1999.99", image: "https://placehold.co/300x200", inStock: false },
    { id: 48, title: "Air Fryer", description: "Healthy cooking.", price: "Rs. 99.99", image: "https://placehold.co/300x200", inStock: true },
    { id: 49, title: "Robot Lawn Mower", description: "Automated lawn care.", price: "Rs. 699.99", image: "https://placehold.co/300x200", inStock: true },
    { id: 50, title: "Smart Mirror", description: "Interactive bathroom mirror.", price: "Rs. 399.99", image: "https://placehold.co/300x200", inStock: true },
];

const Product = () => {
    const { id } = useParams<{ id: string }>();
    const { addToCart } = useCart();

    const product = products.find((p) => p.id === parseInt(id || "0"));

    if (!product) {
        return (
            <div className="min-h-screen bg-background">
                <Navbar />
                <section className="container px-6 py-20 mx-auto text-center">
                    <h1 className="text-3xl font-semibold">Product Not Found</h1>
                    <Button className="mt-4" asChild>
                        <a href="/catalogue">Back to Catalogue</a>
                    </Button>
                </section>
                <Footer />
            </div>
        );
    }

    const handleAddToCart = () => {
        addToCart(product);
    };

    return (
        <div className="min-h-screen bg-background">
            <Navbar />
            <section className="container px-6 py-20 mx-auto">
                <div className="max-w-4xl mx-auto">
                    <div className="grid md:grid-cols-2 gap-8">
                        <div>
                            <img src={product.image} alt={product.title} className="w-full h-96 object-cover rounded-lg" />
                        </div>
                        <div className="space-y-6">
                            <div>
                                <h1 className="text-3xl font-semibold">{product.title}</h1>
                                <p className="text-muted-foreground mt-2">{product.description}</p>
                            </div>
                            <div className="flex items-center gap-4">
                                <Badge variant={product.inStock ? "default" : "destructive"}>
                                    {product.inStock ? "In Stock" : "Out of Stock"}
                                </Badge>
                                <span className="text-2xl font-bold">{product.price}</span>
                            </div>
                            <div className="flex gap-4">
                                <Button
                                    size="lg"
                                    variant="outline"
                                    disabled={!product.inStock}
                                >
                                    Buy Now
                                </Button>
                                <Button
                                    size="lg"
                                    className="bg-accent text-accent-foreground hover:bg-accent/90"
                                    onClick={handleAddToCart}
                                    disabled={!product.inStock}
                                >
                                    Add to Cart
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <Footer />
        </div>
    );
};

export default Product;