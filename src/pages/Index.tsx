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
    <div className="min-h-screen bg-black text-green-400 relative overflow-hidden">
      {/* Matrix-style background animation */}
      <div className="fixed inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black"></div>
        <div className="absolute inset-0 opacity-10">
          {Array.from({ length: 50 }).map((_, i) => (
            <div
              key={i}
              className="absolute h-px bg-green-500 animate-pulse"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                width: `${Math.random() * 100 + 50}px`,
                animationDelay: `${Math.random() * 3}s`,
                animationDuration: `${Math.random() * 3 + 2}s`
              }}
            ></div>
          ))}
        </div>
      </div>

      {/* Floating circuit patterns */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        {Array.from({ length: 20 }).map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-cyan-500 rounded-full animate-pulse opacity-30"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${Math.random() * 4 + 3}s`
            }}
          ></div>
        ))}
      </div>

      <div className="relative z-10">
        {/* Dark Web Style Navigation */}
        <nav className="bg-black/80 backdrop-blur-md border-b border-green-500/30 sticky top-0 z-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center h-16">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-gradient-to-r from-green-500 to-cyan-500 rounded-lg flex items-center justify-center animate-pulse">
                  <Terminal className="w-6 h-6 text-black" />
                </div>
                <span className="text-2xl font-bold font-mono text-green-400 glitch-text">
                  [SKAIDEX_ROBOTICS]
                </span>
              </div>
              <div className="flex items-center space-x-6">
                <a href="#products" className="text-green-400 hover:text-cyan-400 font-mono font-medium transition-colors flex items-center gap-2">
                  <Globe className="w-4 h-4" /> PRODUCTS
                </a>
                <a href="#features" className="text-green-400 hover:text-cyan-400 font-mono font-medium transition-colors flex items-center gap-2">
                  <Lock className="w-4 h-4" /> FEATURES
                </a>
                <a href="#ceo-contact" className="text-green-400 hover:text-cyan-400 font-mono font-medium transition-colors flex items-center gap-2">
                  <Eye className="w-4 h-4" /> CEO_CONTACT
                </a>
                <Button 
                  onClick={() => setIsCartOpen(true)}
                  className="bg-gradient-to-r from-green-600 to-cyan-600 hover:from-green-500 hover:to-cyan-500 text-black font-mono border border-green-500"
                >
                  <ShoppingCart className="w-4 h-4 mr-2" />
                  CART ({getTotalItems()})
                </Button>
              </div>
            </div>
          </div>
        </nav>

        {/* Dark Web Hero Section */}
        <section className="relative py-20 overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-5xl md:text-7xl font-bold mb-6 font-mono text-green-400 glitch-effect">
                > NEURAL_ROBOTICS_
              </h1>
              <div className="text-xl md:text-2xl text-cyan-400 mb-8 max-w-3xl mx-auto font-mono">
                <span className="typing-animation">
                  Autonomous entities from the digital underground...
                </span>
              </div>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="bg-gradient-to-r from-green-600 to-cyan-600 hover:from-green-500 hover:to-cyan-500 text-black font-mono text-lg px-8 py-3 border border-green-500">
                  > ACCESS_PRODUCTS
                </Button>
                <Button variant="outline" size="lg" className="text-green-400 border-green-500 hover:bg-green-500/10 font-mono text-lg px-8 py-3">
                  > VIEW_DEMO.exe
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Products Section */}
        <section id="products" className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-4 text-green-400 font-mono glitch-text">
                [AVAILABLE_UNITS]
              </h2>
              <p className="text-xl text-cyan-400 max-w-2xl mx-auto font-mono">
                Select your digital companion from our encrypted catalog
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
              {robots.map((robot) => (
                <Card key={robot.id} className="group hover:shadow-2xl hover:shadow-green-500/20 transition-all duration-300 border border-green-500/30 bg-black/80 backdrop-blur-sm hover:border-cyan-500/50 hover:scale-105">
                  <CardHeader className="p-0">
                    <div className="relative overflow-hidden rounded-t-lg">
                      <img 
                        src={robot.image} 
                        alt={robot.name}
                        className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500 filter brightness-75 contrast-125"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
                      <div className="absolute top-4 left-4">
                        <Badge className="bg-gradient-to-r from-green-500 to-cyan-500 text-black font-mono">
                          SAVE ${robot.originalPrice - robot.price}
                        </Badge>
                      </div>
                      <div className="absolute top-4 right-4 bg-black/90 backdrop-blur-sm rounded border border-green-500/30 p-2">
                        <div className="flex items-center space-x-1">
                          <Star className="w-4 h-4 fill-green-400 text-green-400" />
                          <span className="text-sm font-mono text-green-400">{robot.rating}</span>
                        </div>
                      </div>
                      <div className="absolute bottom-4 left-4 text-green-400 font-mono text-sm">
                        UNIT_ID: {robot.id.toString().padStart(4, '0')}
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="p-6 bg-black/90">
                    <div className="mb-4">
                      <CardTitle className="text-2xl mb-2 text-green-400 font-mono">{robot.name}</CardTitle>
                      <p className="text-cyan-400 mb-3 font-mono text-sm">{robot.description}</p>
                      <div className="flex items-center space-x-2 mb-3">
                        <span className="text-3xl font-bold text-green-400 font-mono">${robot.price}</span>
                        <span className="text-lg text-red-400 line-through font-mono">${robot.originalPrice}</span>
                      </div>
                      <div className="flex items-center space-x-1 text-sm text-cyan-400 mb-4 font-mono">
                        <Star className="w-4 h-4 fill-green-400 text-green-400" />
                        <span>{robot.rating} ({robot.reviews} reviews)</span>
                      </div>
                    </div>

                    {/* Key Features */}
                    <div className="mb-6">
                      <h4 className="font-semibold mb-3 text-green-400 font-mono">[CAPABILITIES]</h4>
                      <div className="grid grid-cols-1 gap-2">
                        {robot.features.slice(0, 3).map((feature, index) => (
                          <div key={index} className="flex items-center space-x-2">
                            <div className="w-2 h-2 bg-gradient-to-r from-green-500 to-cyan-500 rounded-full animate-pulse"></div>
                            <span className="text-sm text-cyan-400 font-mono">{feature}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Technical Specs */}
                    <div className="mb-6">
                      <h4 className="font-semibold mb-3 text-green-400 font-mono">[SYSTEM_SPECS]</h4>
                      <div className="grid grid-cols-2 gap-3 text-sm">
                        <div className="flex items-center space-x-2">
                          <Cpu className="w-4 h-4 text-green-500" />
                          <span className="text-cyan-400 font-mono">{robot.specs["Processing Power"]}</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Battery className="w-4 h-4 text-green-500" />
                          <span className="text-cyan-400 font-mono">{robot.specs["Battery Life"]}</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Wifi className="w-4 h-4 text-cyan-500" />
                          <span className="text-cyan-400 font-mono">Wi-Fi 6</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Camera className="w-4 h-4 text-cyan-500" />
                          <span className="text-cyan-400 font-mono">{robot.specs["Camera"].split(' ')[0]}</span>
                        </div>
                      </div>
                    </div>

                    <div className="flex space-x-3">
                      <Button 
                        onClick={() => handleAddToCart(robot)}
                        className="flex-1 bg-gradient-to-r from-green-600 to-cyan-600 hover:from-green-500 hover:to-cyan-500 text-black font-mono border border-green-500"
                      >
                        <ShoppingCart className="w-4 h-4 mr-2" />
                        ADD_TO_CART
                      </Button>
                      <Button 
                        variant="outline" 
                        onClick={() => setSelectedRobot(robot)}
                        className="px-6 border-green-500 text-green-400 hover:bg-green-500/10 font-mono"
                      >
                        ANALYZE
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section id="features" className="py-20 border-t border-green-500/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-4 text-green-400 font-mono glitch-text">
                [SYSTEM_ADVANTAGES]
              </h2>
              <p className="text-xl text-cyan-400 font-mono">Neural network enhanced capabilities</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center group">
                <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-cyan-500 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform animate-pulse">
                  <Zap className="w-8 h-8 text-black" />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-green-400 font-mono">AI_NEURAL_CORE</h3>
                <p className="text-cyan-400 font-mono text-sm">Advanced machine learning algorithms for autonomous decision making and adaptive behavior.</p>
              </div>
              <div className="text-center group">
                <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-cyan-500 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform animate-pulse">
                  <Shield className="w-8 h-8 text-black" />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-green-400 font-mono">QUANTUM_ARMOR</h3>
                <p className="text-cyan-400 font-mono text-sm">Industrial-grade components and rigorous testing ensure reliability in any environment.</p>
              </div>
              <div className="text-center group">
                <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-cyan-500 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform animate-pulse">
                  <Globe className="w-8 h-8 text-black" />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-green-400 font-mono">NEURAL_LINK</h3>
                <p className="text-cyan-400 font-mono text-sm">Seamless connectivity with smart home systems, cloud services, and mobile applications.</p>
              </div>
            </div>
          </div>
        </section>

        {/* CEO Contact Section */}
        <section id="ceo-contact" className="py-20 border-t border-green-500/30">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold mb-4 text-green-400 font-mono glitch-text">
                [EXECUTIVE_ACCESS]
              </h2>
              <p className="text-xl text-cyan-400 font-mono">Direct neural link to command center</p>
            </div>

            <Card className="bg-black/90 border border-green-500/50 backdrop-blur-sm">
              <CardContent className="p-8">
                <div className="text-center">
                  <div className="w-24 h-24 bg-gradient-to-r from-green-500 to-cyan-500 rounded-full flex items-center justify-center mx-auto mb-6 animate-pulse">
                    <Terminal className="w-12 h-12 text-black" />
                  </div>
                  <h3 className="text-2xl font-bold text-green-400 font-mono mb-2">CONTACT CEO</h3>
                  <h4 className="text-xl text-cyan-400 font-mono mb-6">Saikumar Ade</h4>
                  <p className="text-green-400 font-mono mb-6">Chief Executive Officer & Neural Network Architect</p>
                  
                  <div className="bg-black/50 border border-green-500/30 rounded p-4 mb-6">
                    <p className="text-cyan-400 font-mono text-sm mb-2">[SECURE_COMMUNICATION_CHANNEL]</p>
                    <a 
                      href="mailto:saikumarade55@gmail.com" 
                      className="text-green-400 hover:text-cyan-400 font-mono text-lg transition-colors"
                    >
                      saikumarade55@gmail.com
                    </a>
                  </div>

                  <p className="text-cyan-400 font-mono text-sm mb-4">
                    "Building the future of autonomous intelligence, one neural pathway at a time."
                  </p>

                  <Button 
                    className="bg-gradient-to-r from-green-600 to-cyan-600 hover:from-green-500 hover:to-cyan-500 text-black font-mono border border-green-500"
                    onClick={() => window.location.href = 'mailto:saikumarade55@gmail.com'}
                  >
                    <Terminal className="w-4 h-4 mr-2" />
                    INITIATE_CONTACT
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-black border-t border-green-500/30 text-green-400 py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <div className="flex items-center justify-center space-x-3 mb-6">
                <div className="w-10 h-10 bg-gradient-to-r from-green-500 to-cyan-500 rounded-lg flex items-center justify-center animate-pulse">
                  <Terminal className="w-6 h-6 text-black" />
                </div>
                <span className="text-2xl font-bold font-mono">SKAIDEX_ROBOTICS</span>
              </div>
              <p className="text-cyan-400 mb-6 font-mono">Neural evolution through digital consciousness</p>
              <div className="flex justify-center space-x-6">
                <a href="#" className="text-green-400 hover:text-cyan-400 transition-colors font-mono">PRIVACY.exe</a>
                <a href="#" className="text-green-400 hover:text-cyan-400 transition-colors font-mono">TERMS.sys</a>
                <a href="mailto:saikumarade55@gmail.com" className="text-green-400 hover:text-cyan-400 transition-colors font-mono">SUPPORT.dll</a>
              </div>
              <div className="mt-6 pt-6 border-t border-green-500/30">
                <p className="text-cyan-400 font-mono">© 2024 SKAIDEX_ROBOTICS. All neural pathways reserved.</p>
              </div>
            </div>
          </div>
        </footer>
      </div>

      {/* Cart Modal */}
      <Cart isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />
    </div>
  );
};

export default Index;
