import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Star, Shield, Truck, Award, ArrowRight } from 'lucide-react';
import { Link } from "react-router-dom"

// slideshow images
import img1 from "../assets/images/ad1.jpg";
import img2 from "../assets/images/ad2.jpg";
import img3 from "../assets/images/ad3.jpg";
import img4 from "../assets/images/ad4.jpg";
import img5 from "../assets/images/ad5.jpg";
import img6 from "../assets/images/ad6.jpg";
import img7 from "../assets/images/ad7.jpg";
import img8 from "../assets/images/ad8.jpg";
import img9 from "../assets/images/ad9.jpg";
import img10 from "../assets/images/ad10.jpg";
import img11 from "../assets/images/ad11.jpg";
import img12 from "../assets/images/ad12.jpg";

const Home = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isVisible, setIsVisible] = useState({});
  const [isMobile, setIsMobile] = useState(false);

  // Product images with descriptions
  const productImages = [
    {
      url: img1,
      title: 'Premium Leather Wallets',
      subtitle: 'Crafted with finest Italian leather',
      description: 'Our signature wallets combine timeless elegance with modern functionality. Each piece is handcrafted from premium Italian leather, ensuring durability and sophistication.',
      accent: 'brown'
    },
    {
      url: img2 ,
      title: 'Premium Handcrafted Handbag',
      subtitle: 'Handcrafted for lasting quality',
      description: 'Discover our collection of handcrafted leather belts, made from the finest materials. Perfect for both casual and formal occasions, designed to last a lifetime.',
      accent: 'black'
    },
    {
      url: img3,
      title: 'Artisan Collection',
      subtitle: 'Where tradition meets modern design',
      description: 'Experience the perfect blend of traditional craftsmanship and contemporary style. Our artisan collection features unique pieces that tell a story of heritage and innovation.',
      accent: 'gray'
    },
    {
      url: img4,
      title: 'Artisan Collection',
      subtitle: 'Where tradition meets modern design',
      description: 'Experience the perfect blend of traditional craftsmanship and contemporary style. Our artisan collection features unique pieces that tell a story of heritage and innovation.',
      accent: 'brown'
    },
    {
      url: img5,
      title: 'Artisan Collection',
      subtitle: 'Where tradition meets modern design',
      description: 'Experience the perfect blend of traditional craftsmanship and contemporary style. Our artisan collection features unique pieces that tell a story of heritage and innovation.',
      accent: 'black'
    },
    {
      url: img6,
      title: 'Artisan Collection',
      subtitle: 'Where tradition meets modern design',
      description: 'Experience the perfect blend of traditional craftsmanship and contemporary style. Our artisan collection features unique pieces that tell a story of heritage and innovation.',
      accent: 'gray'
    },
    {
      url: img7,
      title: 'Artisan Collection',
      subtitle: 'Where tradition meets modern design',
      description: 'Experience the perfect blend of traditional craftsmanship and contemporary style. Our artisan collection features unique pieces that tell a story of heritage and innovation.',
      accent: 'brown'
    },
    {
      url: img8,
      title: 'Artisan Collection',
      subtitle: 'Where tradition meets modern design',
      description: 'Experience the perfect blend of traditional craftsmanship and contemporary style. Our artisan collection features unique pieces that tell a story of heritage and innovation.',
      accent: 'black'
    },
    {
      url: img9,
      title: 'Artisan Collection',
      subtitle: 'Where tradition meets modern design',
      description: 'Experience the perfect blend of traditional craftsmanship and contemporary style. Our artisan collection features unique pieces that tell a story of heritage and innovation.',
      accent: 'gray'
    },
    {
      url: img10,
      title: 'Artisan Collection',
      subtitle: 'Where tradition meets modern design',
      description: 'Experience the perfect blend of traditional craftsmanship and contemporary style. Our artisan collection features unique pieces that tell a story of heritage and innovation.',
      accent: 'brown'
    },
    {
      url: img11,
      title: 'Artisan Collection',
      subtitle: 'Where tradition meets modern design',
      description: 'Experience the perfect blend of traditional craftsmanship and contemporary style. Our artisan collection features unique pieces that tell a story of heritage and innovation.',
      accent: 'black'
    },
    {
      url: img12,
      title: 'Artisan Collection',
      subtitle: 'Where tradition meets modern design',
      description: 'Experience the perfect blend of traditional craftsmanship and contemporary style. Our artisan collection features unique pieces that tell a story of heritage and innovation.',
      accent: 'gray'
    },
  ];

  const features = [
    { icon: Shield, title: 'Premium Quality', desc: 'Genuine leather sourced from trusted suppliers', color: 'brown' },
    { icon: Award, title: 'Handcrafted', desc: 'Each piece meticulously crafted by skilled artisans', color: 'black' },
    { icon: Star, title: 'Customer Rated', desc: 'Thousands of satisfied customers worldwide', color: 'brown' }
  ];

  // Check if mobile on mount and resize
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % productImages.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          setIsVisible(prev => ({
            ...prev,
            [entry.target.id]: entry.isIntersecting
          }));
        });
      },
      { threshold: 0.1 }
    );

    const elements = document.querySelectorAll('[id^="animate-"]');
    elements.forEach(el => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % productImages.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + productImages.length) % productImages.length);
  };

  const getAccentColor = (color) => {
    switch(color) {
      case 'brown': return 'from-amber-600 to-orange-600';
      case 'black': return 'from-gray-800 to-gray-600';
      case 'gray': return 'from-slate-600 to-slate-500';
      default: return 'from-gray-800 to-gray-600';
    }
  };

  return (
    <div className="bg-white overflow-hidden select-none">
      {/* Hero Section with Product Showcase */}
      <div className="bg-gradient-to-br from-gray-50 via-white to-gray-100 min-h-screen flex items-center">
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">

          {/* Header - Mobile First Design */}
          <div className="text-center mb-8 md:mb-12">
            <h1 className="text-3xl md:text-4xl lg:text-6xl font-bold text-gray-900 mb-4 md:mb-6">
              <span className="block md:inline">Prestige</span>
              <span className="block md:inline text-amber-600"> & Elegance</span>
            </h1>
            <p className="text-sm md:text-lg lg:text-xl text-gray-600 max-w-2xl mx-auto px-2 leading-relaxed">
              Discover handcrafted leather goods where tradition meets modern elegance
            </p>
          </div>

          {/* Mobile-First Product Showcase */}
          <div className="relative max-w-6xl mx-auto">
            {/* Slider Container - Creative Mobile Layout */}
            <div className="relative overflow-hidden rounded-2xl md:rounded-3xl shadow-2xl">
              {/* Mobile: Vertical layout, Desktop: Horizontal */}
              <div className="h-[70vh] md:h-[60vh] lg:h-[70vh] relative">
                {productImages.map((product, index) => (
                  <div
                    key={index}
                    className={`absolute w-full h-full transition-all duration-700 ease-in-out ${
                      currentSlide === index ? 'opacity-100 scale-100' : 'opacity-0 scale-105'
                    }`}
                  >
                    <img
                      src={product.url}
                      alt={product.title}
                      className="w-full h-full object-cover"
                    />

                    {/* Mobile: Gradient overlay for better text readability */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-black/20 md:from-black/80 md:via-black/30 md:to-transparent"></div>

                    {/* Content overlay - Mobile optimized */}
                    <div className="absolute inset-0 flex flex-col justify-end p-4 md:p-8 lg:p-12">
                      <div className="text-center md:text-left max-w-2xl mx-auto mt-6 md:mx-0">
                        {/* Mobile: Smaller, centered text */}
                        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-2 md:mb-4 leading-tight">
                          {product.title}
                        </h2>
                        <p className="text-sm md:text-lg lg:text-xl text-gray-200 mb-2 md:mb-4 font-medium">
                          {product.subtitle}
                        </p>
                        <p className="text-xs md:text-base lg:text-lg text-gray-300 leading-relaxed mb-6 md:mb-8 line-clamp-3">
                          {product.description}
                        </p>

                        {/* Mobile: Stack buttons vertically */}
                        <div className="flex flex-col md:flex-row gap-3 md:gap-4 items-center">
                          <Link to="about">
                            <button className="w-full md:w-auto border-2 border-white text-white px-6 py-3 md:px-8 md:py-4 rounded-full font-bold text-sm md:text-base hover:bg-white hover:text-gray-900 transition-all duration-300">
                              Learn More
                            </button>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}

                {/* Navigation - Mobile friendly */}
                <button
                  onClick={prevSlide}
                  className="absolute left-2 md:left-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/30 backdrop-blur-md p-2 md:p-3 rounded-full shadow-lg transition-all duration-300 z-10"
                >
                  <ChevronLeft className="w-5 h-5 md:w-6 md:h-6 text-white" />
                </button>
                <button
                  onClick={nextSlide}
                  className="absolute right-2 md:right-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/30 backdrop-blur-md p-2 md:p-3 rounded-full shadow-lg transition-all duration-300 z-10"
                >
                  <ChevronRight className="w-5 h-5 md:w-6 md:h-6 text-white" />
                </button>

                {/* Mobile: Larger, more accessible indicators */}
                <div className="absolute bottom-4 md:bottom-6 left-1/2 -translate-x-1/2 flex space-x-2 md:space-x-3">
                  {productImages.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentSlide(index)}
                      className={`h-2 md:h-3 rounded-full transition-all duration-300 ${
                        currentSlide === index
                          ? 'bg-white w-8 md:w-10'
                          : 'bg-white/50 hover:bg-white/75 w-2 md:w-3'
                      }`}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Stats Section - Mobile Grid Layout */}
      <div className="bg-white py-12 md:py-16 lg:py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Mobile: 2x2 grid, Desktop: 3 columns */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6 md:gap-8 text-center">
            <div className="group p-4 md:p-6 rounded-xl hover:bg-gray-50 transition-all duration-300">
              <div className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-2 group-hover:text-amber-600 transition-colors">
                10+
              </div>
              <div className="text-sm md:text-base text-gray-600 font-medium">Years Experience</div>
            </div>
            <div className="group p-4 md:p-6 rounded-xl hover:bg-gray-50 transition-all duration-300">
              <div className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-2 group-hover:text-amber-600 transition-colors">
                100%
              </div>
              <div className="text-sm md:text-base text-gray-600 font-medium">Genuine Leather</div>
            </div>
            <div className="group p-4 md:p-6 rounded-xl hover:bg-gray-50 transition-all duration-300 col-span-2 md:col-span-1">
              <div className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-2 group-hover:text-amber-600 transition-colors">
                4.9★
              </div>
              <div className="text-sm md:text-base text-gray-600 font-medium">Customer Rating</div>
            </div>
          </div>
        </div>
      </div>

      {/* Features Section - Mobile Card Stack */}
      <div className="py-12 md:py-16 lg:py-24 bg-gradient-to-br from-gray-50 to-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div
            id="animate-features"
            className={`text-center mb-12 md:mb-16 transition-all duration-1000 ${
              isVisible['animate-features'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            <h2 className="text-2xl md:text-3xl lg:text-5xl font-bold text-gray-900 mb-4 md:mb-6">
              Why Choose{' '}
              <span className="text-amber-600 block md:inline">Our Craftsmanship</span>
            </h2>
            <div className="w-16 md:w-24 h-1 bg-amber-600 mx-auto mb-4 md:mb-6"></div>
            <p className="text-sm md:text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto px-2">
              We don't just make leather goods - we craft experiences that last a lifetime
            </p>
          </div>

          {/* Mobile: Single column with larger cards */}
          <div className={`grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 ${isMobile ? 'space-y-2' : ''}`}>
            {features.map((feature, index) => (
              <div
                key={index}
                id={`animate-feature-${index}`}
                className={`group relative bg-white rounded-2xl md:rounded-xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 ${
                  isVisible[`animate-feature-${index}`] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
                style={{transitionDelay: `${index * 0.1}s`}}
              >
                <div className="p-6 md:p-8 text-center">
                  <div className={`bg-gradient-to-r ${getAccentColor(feature.color)} w-16 h-16 md:w-20 md:h-20 rounded-2xl flex items-center justify-center mx-auto mb-4 md:mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                    <feature.icon className="w-8 h-8 md:w-10 md:h-10 text-white" />
                  </div>
                  <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-3 md:mb-4 group-hover:text-amber-600 transition-colors">
                    {feature.title}
                  </h3>
                  <p className="text-sm md:text-base text-gray-600 leading-relaxed">{feature.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Call to Action - Mobile Optimized */}
      <div className="relative py-16 md:py-24 bg-gradient-to-br from-gray-900 via-gray-800 to-black">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(245,158,11,0.1)_0%,_transparent_70%)]"></div>
        <div className="max-w-6xl mx-auto text-center px-4 sm:px-6 lg:px-8 relative z-10">
          <div
            id="animate-cta"
            className={`transition-all duration-1000 ${
              isVisible['animate-cta'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            <h2 className="text-3xl md:text-4xl lg:text-6xl font-bold text-white mb-6 md:mb-8 leading-tight">
              Ready to Experience
              <br />
              <span className="text-amber-400">Premium Craftsmanship?</span>
            </h2>
            <p className="text-base md:text-lg lg:text-xl text-gray-300 mb-8 md:mb-12 max-w-3xl mx-auto px-2">
              Discover the perfect blend of tradition and innovation in every piece we create
            </p>

            {/* Mobile: Full width button */}
            <div className="flex flex-col md:flex-row gap-4 md:gap-6 justify-center items-center mb-8 md:mb-12">
              <Link to="order">
                <button className="w-full md:w-auto bg-amber-600 text-white px-8 py-4 md:px-10 md:py-5 rounded-full font-bold text-base md:text-lg hover:bg-amber-500 transition-all duration-300 transform hover:scale-105 shadow-2xl group">
                  Shop Collection
                  <ArrowRight className="inline-block ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>
              </Link>
            </div>

            {/* Mobile: Stack vertically */}
            <div className="flex flex-col md:flex-row items-center justify-center space-y-4 md:space-y-0 md:space-x-8 text-gray-400 text-sm md:text-base">
              <div className="flex items-center space-x-2">
                <Shield className="w-5 h-5" />
                <span>Lifetime Warranty</span>
              </div>
              <div className="flex items-center space-x-2">
                <Star className="w-5 h-5" />
                <span>5-Star Reviews</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
