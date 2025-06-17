
import { useState } from "react";
import { ShoppingCart, Star, Zap, Shield, Cpu, Wifi, Battery, Camera, Terminal, Globe, Lock, Eye } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useCart } from "@/contexts/CartContext";
import { Cart } from "@/components/Cart";
import { useToast } from "@/hooks/use-toast";

const Index = () => {
  const [selectedRobot, setSelectedRobot] = useState(null);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const { addToCart, getTotalItems } = useCart();
  const { toast } = useToast();

  const robots = [
    {
      id: 1,
      name: "SkaiBot Pro X1",
      price: 2499,
      originalPrice: 2999,
      image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?ixlib=rb-4.0.3",
      rating: 4.9,
      reviews: 234,
      features: ["AI-Powered Navigation", "Voice Control", "24h Battery", "4K Camera", "Smart Home Integration"],
      specs: {
        "Processing Power": "Quantum AI Chip",
        "Battery Life": "24 Hours",
        "Weight": "12 kg",
        "Connectivity": "Wi-Fi 6, Bluetooth 5.0",
        "Camera": "4K Ultra HD with Night Vision",
        "Navigation": "Advanced LIDAR + Visual SLAM"
      },
      description: "Our flagship autonomous robot with cutting-edge AI capabilities for professional and home use."
    },
    {
      id: 2,
      name: "SkaiBot Home Assistant",
      price: 1299,
      originalPrice: 1599,
      image: "https://images.unsplash.com/photo-1487887235947-a955ef187fcc?ixlib=rb-4.0.3",
      rating: 4.7,
      reviews: 456,
      features: ["Smart Home Control", "Security Monitoring", "Pet Care Mode", "Voice Assistant", "Mobile App"],
      specs: {
        "Processing Power": "ARM Cortex-A78",
        "Battery Life": "16 Hours",
        "Weight": "8 kg",
        "Connectivity": "Wi-Fi 6, Zigbee, Z-Wave",
        "Camera": "1080p HD with Pan/Tilt",
        "Navigation": "Optical Flow + Ultrasonic"
      },
      description: "Perfect companion for smart homes with comprehensive automation and security features."
    },
    {
      id: 3,
      name: "SkaiBot Industrial Max",
      price: 4999,
      originalPrice: 5999,
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3",
      rating: 4.8,
      reviews: 89,
      features: ["Heavy Duty Build", "Warehouse Navigation", "Payload 50kg", "Industrial Protocol", "Remote Monitoring"],
      specs: {
        "Processing Power": "Industrial AI Core",
        "Battery Life": "12 Hours (Heavy Load)",
        "Weight": "45 kg",
        "Connectivity": "Ethernet, Wi-Fi 6, 5G Ready",
        "Camera": "Thermal + RGB with Zoom",
        "Navigation": "Industrial LIDAR + GPS"
      },
      description: "Built for industrial environments with maximum payload capacity and durability."
    },
    {
      id: 4,
      name: "SkaiBot Mini Explorer",
      price: 699,
      originalPrice: 899,
      image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixlib=rb-4.0.3",
      rating: 4.6,
      reviews: 789,
      features: ["Compact Design", "Educational Programming", "Obstacle Avoidance", "LED Display", "STEM Learning"],
      specs: {
        "Processing Power": "ARM Cortex-M7",
        "Battery Life": "8 Hours",
        "Weight": "2.5 kg",
        "Connectivity": "Wi-Fi, Bluetooth",
        "Camera": "720p HD",
        "Navigation": "Ultrasonic + Gyroscope"
      },
      description: "Perfect entry-level robot for education and hobbyists with programming capabilities."
    }
  ];

  const handleAddToCart = (robot) => {
    addToCart({
      id: robot.id,
      name: robot.name,
      price: robot.price,
      image: robot.image
    });
    
    toast({
      title: "Added to Cart!",
      description: `${robot.name} has been added to your cart.`,
    });
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* Navigation */}
      <nav className="bg-black/95 backdrop-blur-md border-b border-gray-800 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                <Terminal className="w-6 h-6 text-white" />
              </div>
              <span className="text-2xl font-bold text-white">
                Skaidex Robotics
              </span>
            </div>
            <div className="flex items-center space-x-6">
              <a href="#products" className="text-gray-300 hover:text-white font-medium transition-colors flex items-center gap-2">
                <Globe className="w-4 h-4" /> Products
              </a>
              <a href="#features" className="text-gray-300 hover:text-white font-medium transition-colors flex items-center gap-2">
                <Lock className="w-4 h-4" /> Features
              </a>
              <a href="#ceo-contact" className="text-gray-300 hover:text-white font-medium transition-colors flex items-center gap-2">
                <Eye className="w-4 h-4" /> Contact CEO
              </a>
              <Button 
                onClick={() => setIsCartOpen(true)}
                className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 text-white"
              >
                <ShoppingCart className="w-4 h-4 mr-2" />
                Cart ({getTotalItems()})
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-gray-900 via-black to-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Next Generation Robotics
            </h1>
            <div className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Discover autonomous robots engineered for the future
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 text-white text-lg px-8 py-3">
                Explore Products
              </Button>
              <Button variant="outline" size="lg" className="text-white border-gray-600 hover:bg-gray-800 text-lg px-8 py-3">
                Watch Demo
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section id="products" className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-white">
              Our Robot Collection
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Choose from our premium selection of autonomous robots
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
            {robots.map((robot) => (
              <Card key={robot.id} className="group hover:shadow-2xl transition-all duration-300 border-gray-700 bg-gray-800/50 backdrop-blur-sm hover:border-blue-500/50">
                <CardHeader className="p-0">
                  <div className="relative overflow-hidden rounded-t-lg">
                    <img 
                      src={robot.image} 
                      alt={robot.name}
                      className="w-full h-64 object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
                    <div className="absolute top-4 left-4">
                      <Badge className="bg-gradient-to-r from-blue-500 to-purple-500 text-white">
                        Save ${robot.originalPrice - robot.price}
                      </Badge>
                    </div>
                    <div className="absolute top-4 right-4 bg-black/90 backdrop-blur-sm rounded border border-gray-600 p-2">
                      <div className="flex items-center space-x-1">
                        <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                        <span className="text-sm text-white">{robot.rating}</span>
                      </div>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="p-6 bg-gray-800">
                  <div className="mb-4">
                    <CardTitle className="text-2xl mb-2 text-white">{robot.name}</CardTitle>
                    <p className="text-gray-400 mb-3 text-sm">{robot.description}</p>
                    <div className="flex items-center space-x-2 mb-3">
                      <span className="text-3xl font-bold text-white">${robot.price}</span>
                      <span className="text-lg text-red-400 line-through">${robot.originalPrice}</span>
                    </div>
                    <div className="flex items-center space-x-1 text-sm text-gray-400 mb-4">
                      <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                      <span>{robot.rating} ({robot.reviews} reviews)</span>
                    </div>
                  </div>

                  {/* Key Features */}
                  <div className="mb-6">
                    <h4 className="font-semibold mb-3 text-white">Key Features</h4>
                    <div className="grid grid-cols-1 gap-2">
                      {robot.features.slice(0, 3).map((feature, index) => (
                        <div key={index} className="flex items-center space-x-2">
                          <div className="w-2 h-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"></div>
                          <span className="text-sm text-gray-300">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Technical Specs */}
                  <div className="mb-6">
                    <h4 className="font-semibold mb-3 text-white">Specifications</h4>
                    <div className="grid grid-cols-2 gap-3 text-sm">
                      <div className="flex items-center space-x-2">
                        <Cpu className="w-4 h-4 text-blue-400" />
                        <span className="text-gray-300">{robot.specs["Processing Power"]}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Battery className="w-4 h-4 text-green-400" />
                        <span className="text-gray-300">{robot.specs["Battery Life"]}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Wifi className="w-4 h-4 text-purple-400" />
                        <span className="text-gray-300">Wi-Fi 6</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Camera className="w-4 h-4 text-cyan-400" />
                        <span className="text-gray-300">{robot.specs["Camera"].split(' ')[0]}</span>
                      </div>
                    </div>
                  </div>

                  <div className="flex space-x-3">
                    <Button 
                      onClick={() => handleAddToCart(robot)}
                      className="flex-1 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 text-white"
                    >
                      <ShoppingCart className="w-4 h-4 mr-2" />
                      Add to Cart
                    </Button>
                    <Button 
                      variant="outline" 
                      onClick={() => setSelectedRobot(robot)}
                      className="px-6 border-gray-600 text-gray-300 hover:bg-gray-700"
                    >
                      Details
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 border-t border-gray-800 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-white">
              Why Choose Our Robots
            </h2>
            <p className="text-xl text-gray-400">Advanced technology meets reliable performance</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Zap className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-white">AI Powered</h3>
              <p className="text-gray-400">Advanced machine learning algorithms for autonomous decision making and adaptive behavior.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-white">Reliable & Durable</h3>
              <p className="text-gray-400">Industrial-grade components and rigorous testing ensure reliability in any environment.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Globe className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-white">Connected</h3>
              <p className="text-gray-400">Seamless connectivity with smart home systems, cloud services, and mobile applications.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CEO Contact Section */}
      <section id="ceo-contact" className="py-20 border-t border-gray-800 bg-gray-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4 text-white">
              Contact CEO
            </h2>
            <p className="text-xl text-gray-400">Direct line to our leadership</p>
          </div>

          <Card className="bg-gray-800/50 border border-gray-700 backdrop-blur-sm">
            <CardContent className="p-8">
              <div className="text-center">
                <div className="w-24 h-24 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Terminal className="w-12 h-12 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">Saikumar Ade</h3>
                <h4 className="text-xl text-gray-400 mb-6">Chief Executive Officer</h4>
                <p className="text-gray-300 mb-6">Founder & CEO of Skaidex Robotics</p>
                
                <div className="bg-gray-700/50 border border-gray-600 rounded p-4 mb-6">
                  <p className="text-gray-400 text-sm mb-2">Contact Email</p>
                  <a 
                    href="mailto:saikumarade55@gmail.com" 
                    className="text-blue-400 hover:text-blue-300 text-lg transition-colors"
                  >
                    saikumarade55@gmail.com
                  </a>
                </div>

                <p className="text-gray-400 text-sm mb-4">
                  "Building the future of autonomous intelligence, one robot at a time."
                </p>

                <Button 
                  className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 text-white"
                  onClick={() => window.location.href = 'mailto:saikumarade55@gmail.com'}
                >
                  <Terminal className="w-4 h-4 mr-2" />
                  Send Email
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black border-t border-gray-800 text-gray-400 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="flex items-center justify-center space-x-3 mb-6">
              <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg flex items-center justify-center">
                <Terminal className="w-6 h-6 text-white" />
              </div>
              <span className="text-2xl font-bold text-white">Skaidex Robotics</span>
            </div>
            <p className="text-gray-400 mb-6">Innovation through intelligent automation</p>
            <div className="flex justify-center space-x-6">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">Privacy</a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">Terms</a>
              <a href="mailto:saikumarade55@gmail.com" className="text-gray-400 hover:text-white transition-colors">Support</a>
            </div>
            <div className="mt-6 pt-6 border-t border-gray-800">
              <p className="text-gray-500">© 2024 Skaidex Robotics. All rights reserved.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Cart Modal */}
      <Cart isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />
    </div>
  );
};

export default Index;
