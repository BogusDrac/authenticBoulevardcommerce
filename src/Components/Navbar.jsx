import { Info, GraduationCap, Palette, Menu, MessageCircleHeart, ShoppingCart, Sparkles, X } from "lucide-react";
import { Link } from "react-router-dom";
import { useState } from "react";

const NAVIGATION_ITEMS = [
  { icon: Palette, label: 'Home', path: '/' },
  { icon: ShoppingCart, label: 'Order', path: '/order' },
  { icon:Info, label: 'About Us', path: '/about' },
  { icon: Sparkles, label: 'Specials', path: '/specials' },
];

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    // Prevent scroll when menu is open
    document.body.style.overflow = isMenuOpen ? 'unset' : 'hidden';
  };

  // Navigation item component for reuse
  const NavigationItem = ({ Icon, label, path, isMobile = false }) => (
    <Link
      to={path}
      onClick={isMobile ? toggleMenu : undefined}
      className={`flex items-center gap-3 transition-all duration-300 group relative
        ${isMobile
          ? 'text-2xl p-4 text-amber-100 hover:text-amber-50 hover:bg-amber-900/20 rounded-lg'
          : 'text-lg text-amber-100 hover:text-amber-50 px-4 py-2 rounded-full hover:bg-amber-900/30'
        }`}
    >
      <Icon className={`${isMobile ? 'h-8 w-8' : 'h-6 w-6'} transition-transform duration-300 group-hover:scale-110`} />
      {isMobile && <span className="font-medium tracking-wide">{label}</span>}

      {/* Desktop simple label below */}
      {!isMobile && (
        <span className="absolute top-full mt-1 left-1/2 transform -translate-x-1/2 text-xs text-amber-300 opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
          {label}
        </span>
      )}

      {/* Desktop underline effect */}
      {!isMobile && (
        <span className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-0 h-0.5 bg-amber-300 transition-all duration-300 group-hover:w-full"></span>
      )}
    </Link>
  );

  return (
    <nav className="sticky top-0 w-full bg-gradient-to-r from-amber-900 via-stone-800 to-slate-900 shadow-2xl z-50 select-none border-b-2 border-amber-700/50">
      <div className="container mx-auto max-w-6xl px-4">
        <div className="flex justify-between items-center h-20">
          {/* Logo Section */}
          <Link to="/" className="flex items-center gap-3 group">
            <div className="relative flex items-center">
              {/* Main logo text container */}
              <div className="relative mx-3">
                  <h1 className="text-3xl font-black font-serif bg-black bg-clip-text text-transparent drop-shadow-sm">
                    The
                  </h1>
              </div>
            </div>

            {/* Brand name with creative styling */}
            <div className="flex flex-col">
              <span className="font-bold text-amber-200 text-xl tracking-widest drop-shadow-lg font-serif group-hover:text-amber-100 transition-all duration-300 relative">
                Authentic
                <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-amber-400 to-amber-600 transition-all duration-500 group-hover:w-full"></div>
              </span>
              <span className="font-semibold text-amber-300 text-sm tracking-[0.3em] drop-shadow-md font-serif group-hover:text-amber-200 transition-colors duration-300 opacity-90">
                BOULEVARD
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-2">
            {NAVIGATION_ITEMS.map((item) => (
              <NavigationItem
                key={item.path}
                Icon={item.icon}
                label={item.label}
                path={item.path}
              />
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className="md:hidden p-3 hover:bg-amber-900/40 rounded-lg transition-all duration-300 text-amber-200 hover:text-amber-100 hover:shadow-lg border border-amber-700/30 hover:border-amber-600/50"
            aria-label={isMenuOpen ? 'Close Menu' : 'Open Menu'}
          >
            {isMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[60] md:hidden">
          <div className="fixed inset-y-0 right-0 w-80 bg-gradient-to-b from-amber-900 via-stone-800 to-slate-900 shadow-2xl z-[70] animate-slide-in border-l-2 border-amber-700/50">
            <div className="flex flex-col p-6">
              <div className="flex justify-end mb-6">
                <button
                  onClick={toggleMenu}
                  className="p-3 hover:bg-amber-900/40 rounded-lg transition-all duration-300 text-amber-200 hover:text-amber-100 border border-amber-700/30 hover:border-amber-600/50"
                  aria-label="Close Menu"
                >
                  <X className="h-6 w-6" />
                </button>
              </div>

              <div className="flex flex-col gap-2">
                {NAVIGATION_ITEMS.map((item) => (
                  <NavigationItem
                    key={item.path}
                    Icon={item.icon}
                    label={item.label}
                    path={item.path}
                    isMobile={true}
                  />
                ))}
              </div>

              {/* Decorative element */}
              <div className="mt-8 flex justify-center">
                <div className="w-32 h-0.5 bg-gradient-to-r from-transparent via-amber-500 to-transparent"></div>
              </div>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
