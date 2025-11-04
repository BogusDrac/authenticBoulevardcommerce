import {useState, useEffect} from "react"
import { ShoppingCart, Plus, Minus, MessageCircle, X, ChevronLeft, ChevronRight, Eye } from "lucide-react"


//images

import img1 from "../assets/images/BlackBelt&CardholderPair/bbcp.jpg"
import img2 from "../assets/images/BlackBelt&CardholderPair/bbcp2.jpg"


import img3 from "../assets/images/BlackBelt&WalletPair/bbwp.jpg"


import img4 from "../assets/images/MansBlackDoubleBuddLeatherBelt/mbdblb.jpg"
import img5 from "../assets/images/MansBlackDoubleBuddLeatherBelt/mbdblb2.jpg"


import img6 from "../assets/images/MansBloodRedBelt/mbrb.jpg"


import img7 from "../assets/images/MansDarkBrownDoubleBudLeatherBelt/mdbdblb.jpg"


import img8 from "../assets/images/MansDarkBrownWallet/mdbw1.jpg"
import img9 from "../assets/images/MansDarkBrownWallet/mdbw2.jpg"
import img10 from "../assets/images/MansDarkBrownWallet/mdbw3.jpg"
import img11 from "../assets/images/MansDarkBrownWallet/mdbw4.jpg"
import img12 from "../assets/images/MansDarkBrownWallet/mdbw5.jpg"
import img13 from "../assets/images/MansDarkBrownWallet/mdbw6.jpg"
import img14 from "../assets/images/MansDarkBrownWallet/mdbw7.jpg"
import img15 from "../assets/images/MansDarkBrownWallet/mdbw8.jpg"


import img16 from "../assets/images/MansFlipCardholder/mfc.jpg"
import img17 from "../assets/images/MansFlipCardholder/mfc1.jpg"
import img18 from "../assets/images/MansFlipCardholder/mfc2.jpg"
import img19 from "../assets/images/MansFlipCardholder/mfc3.jpg"


import img20 from "../assets/images/MansPlainBlackLeatherBelt/mpblb.jpg"
import img21 from "../assets/images/MansPlainBlackLeatherBelt/mpblb2.jpg"


import img22 from "../assets/images/MansTanWallet/mtw1.jpg"
import img23 from "../assets/images/MansTanWallet/mtw2.jpg"
import img24 from "../assets/images/MansTanWallet/mtw3.jpg"
import img25 from "../assets/images/MansTanWallet/mtw5.jpg"
import img26 from "../assets/images/MansTanWallet/ntw4.jpg"


import img27 from "../assets/images/WomansBlackFoldingSlingPurse/wbfsp1.jpg"
import img28 from "../assets/images/WomansBlackFoldingSlingPurse/wbfsp2.jpg"
import img29 from "../assets/images/WomansBlackFoldingSlingPurse/wbfsp3.jpg"
import img30 from "../assets/images/WomansBlackFoldingSlingPurse/wbfsp4.jpg"
import img31 from "../assets/images/WomansBlackFoldingSlingPurse/wbfsp5.jpg"


import img32 from "../assets/images/WomansBlackHandcraftedTotehandBag/wbhth1.jpg"
import img33 from "../assets/images/WomansBlackHandcraftedTotehandBag/wbhth2.jpg"
import img34 from "../assets/images/WomansBlackHandcraftedTotehandBag/wbhth3.jpg"
import img35 from "../assets/images/WomansBlackHandcraftedTotehandBag/wbhth4.jpg"


import img36 from "../assets/images/WomensExtravagentPurpleToteHandbag/wepth1.jpg"
import img37 from "../assets/images/WomensExtravagentPurpleToteHandbag/wepth2.jpg"
import img38 from "../assets/images/WomensExtravagentPurpleToteHandbag/wepth3.jpg"
import img39 from "../assets/images/WomensExtravagentPurpleToteHandbag/wepth4.jpg"
import img40 from "../assets/images/WomensExtravagentPurpleToteHandbag/wepth5.jpg"
import img41 from "../assets/images/WomensExtravagentPurpleToteHandbag/wepth6.jpg"
import img42 from "../assets/images/WomensExtravagentPurpleToteHandbag/wepth7.jpg"



const Order = () => {

  const [cart, setCart] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [showAlert, setShowAlert] = useState(false);
  const [alertMessage, setAlertMessage] = useState('');

  // Load cart from localStorage on component mount
  useEffect(() => {
    // In a real project, you would use:
    // const savedCart = localStorage.getItem('shoppingCart');
    // if (savedCart) {
    //   setCart(JSON.parse(savedCart));
    // }

    // For Claude.ai artifacts, we'll use a simulated localStorage with state
    const savedCart = getFromStorage('shoppingCart');
    if (savedCart) {
      setCart(savedCart);
    }
  }, []);

  // Save cart to localStorage whenever cart changes
  useEffect(() => {
    // In a real project, you would use:
    // localStorage.setItem('shoppingCart', JSON.stringify(cart));

    // For Claude.ai artifacts, we'll use a simulated localStorage
    saveToStorage('shoppingCart', cart);
  }, [cart]);

  // Simulated localStorage functions (replace with actual localStorage in your project)
  const saveToStorage = (key, value) => {
    // In your actual project, replace this with:
    // localStorage.setItem(key, JSON.stringify(value));
    window.simulatedStorage = window.simulatedStorage || {};
    window.simulatedStorage[key] = value;
  };

  const getFromStorage = (key) => {
    // In your actual project, replace this with:
    // const item = localStorage.getItem(key);
    // return item ? JSON.parse(item) : null;
    window.simulatedStorage = window.simulatedStorage || {};
    return window.simulatedStorage[key] || null;
  };

  // Sample products with images
  const products = [
    {
      id: 1,
      name: "Black Belt & CardHolder Pair",
      price: 1050.00,
      description: "BB&C",
      images: [
        img1,
        img2
      ]
    },
    {
      id: 2,
      name: "Black Belt & Wallet Pair",
      price: 1050.00,
      description: "BB&W",
      images: [
        img3
      ]
    },
    {
      id: 3,
      name: "Mans Black Double Budd Leather Belt",
      price: 800.00,
      description: "MDBDBLB",
      images: [
        img4,
        img5
      ]
    },
    {
      id: 4,
      name: "Mans Blood Red Belt",
      price: 700.00,
      description: "MBRB",
      images: [
        img6
      ]
    },
    {
      id: 5,
      name: "Mans DarkBrown Double Bud Leather Belt",
      price: 800.00,
      description: "MDBDBLB",
      images: [
        img7
      ]
    },
    {
      id: 6,
      name: "Mans DarkBrown Wallet",
      price: 700.00,
      description: "MDBW",
      images: [
        img8,
        img9,
        img10,
        img11,
        img12,
        img13,
        img14,
        img15
      ]
    },
    {
      id: 7,
      name: "Mans Flip Cardholder",
      price: 400.00,
      description: "MFC",
      images: [
        img16,
        img17,
        img18,
        img19
      ]
    },
    {
      id: 8,
      name: "Mans Plain Black Leather Belt",
      price: 600.00,
      description: "MPBLB",
      images: [
        img20,
        img21,
      ]
    },
    {
      id: 9,
      name: "Mans Tan Wallet",
      price: 700.00,
      description: "MTW",
      images: [
        img22,
        img23,
        img24,
        img25,
        img26
      ]
    },
    {
      id: 10,
      name: "Womans Black Folding Sling Purse",
      price: 800.00,
      description: "WBFSP",
      images: [
        img27,
        img28,
        img29,
        img30,
        img31,
      ]
    },
    {
      id: 11,
      name: "Womans Black Handcrafted Tote HandBag",
      price: 2500.00,
      description: "WBHTB",
      images: [
        img32,
        img33,
        img34,
        img35
      ]
    },
    {
      id: 12,
      name: "Womens Extravagent Purple Tote Handbag",
      price: 2800.00,
      description: "WEPTH",
      images: [
        img36,
        img37,
        img38,
        img39,
        img40,
        img41,
        img42
      ]
    },
  ];

  const showAlertMessage = (message) => {
    setAlertMessage(message);
    setShowAlert(true);
    setTimeout(() => {
      setShowAlert(false);
      setAlertMessage('');
    }, 3000);
  };

  const addToCart = (product) => {
    const existingItem = cart.find(item => item.id === product.id);
    if (existingItem) {
      setCart(cart.map(item =>
        item.id === product.id
          ? { ...item, quantity: item.quantity + 1 }
          : item
      ));
    } else {
      setCart([...cart, { ...product, quantity: 1 }]);
    }
    showAlertMessage(`${product.name} added to cart!`);
  };

  const removeFromCart = (productId) => {
    setCart(cart.filter(item => item.id !== productId));
  };

  const updateQuantity = (productId, newQuantity) => {
    if (newQuantity === 0) {
      removeFromCart(productId);
    } else {
      setCart(cart.map(item =>
        item.id === productId
          ? { ...item, quantity: newQuantity }
          : item
      ));
    }
  };

  const getTotalPrice = () => {
    return cart.reduce((total, item) => total + (item.price * item.quantity), 0);
  };

  const sendToWhatsApp = () => {
    if (cart.length === 0) return;

    let message = "🛍️ *New Order Request*\n\n";
    message += "📦 *Order Details:*\n";
    message += "───────────────────\n";

    cart.forEach(item => {
      message += `▪️ ${item.name}\n`;
      message += `   Quantity: ${item.quantity}\n`;
      message += `   Price: R${item.price.toFixed(2)} each\n`;
      message += `   Subtotal: R${(item.price * item.quantity).toFixed(2)}\n\n`;
    });

    message += "───────────────────\n";
    message += `💰 *Total Amount: R${getTotalPrice().toFixed(2)}*\n\n`;
    message += "Please confirm availability and delivery details. Thank you! 🙏";

    const whatsappUrl = `https://wa.me/27787158533?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  const openProductModal = (product) => {
    setSelectedProduct(product);
    setCurrentImageIndex(0);
  };

  const closeProductModal = () => {
    setSelectedProduct(null);
    setCurrentImageIndex(0);
  };

  const nextImage = () => {
    if (selectedProduct && currentImageIndex < selectedProduct.images.length - 1) {
      setCurrentImageIndex(currentImageIndex + 1);
    }
  };

  const prevImage = () => {
    if (currentImageIndex > 0) {
      setCurrentImageIndex(currentImageIndex - 1);
    }
  };

  return (
    <div className="max-w-6xl mx-auto p-3 sm:p-6 bg-gray-50 min-h-screen select-none relative">
      {/* Alert Message */}
      {showAlert && (
        <div className="fixed top-4 left-1/2 transform -translate-x-1/2 bg-green-500 text-white px-4 py-2 rounded-lg shadow-lg z-50 animate-pulse">
          {alertMessage}
        </div>
      )}

      {/* Fixed Cart Icon - Always Visible */}
      <div className="fixed top-23 right-4 z-50">
        <button
          onClick={() => setIsCartOpen(!isCartOpen)}
          className="bg-black text-white p-3 rounded-full shadow-lg hover:bg-gray-800 transition-colors relative"
        >
          <ShoppingCart size={24} />
          {cart.length > 0 && (
            <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full w-6 h-6 flex items-center justify-center font-bold">
              {cart.reduce((total, item) => total + item.quantity, 0)}
            </span>
          )}
        </button>
      </div>

      {/* Cart Overlay - Absolute positioned */}
      {isCartOpen && (
        <>
          {/* Backdrop */}
          <div
            className="fixed inset-0 bg-black bg-opacity-50 z-40"
            onClick={() => setIsCartOpen(false)}
          />

          {/* Cart Panel */}
          <div className="fixed top-0 right-0 h-full w-full sm:w-96 bg-white shadow-xl z-50 transform transition-transform duration-300 ease-in-out">
            <div className="flex flex-col h-full">
              {/* Cart Header */}
              <div className="p-4 border-b bg-gray-50">
                <div className="flex justify-between items-center">
                  <h2 className="text-xl font-bold text-gray-800 flex items-center gap-2">
                    <ShoppingCart size={20} />
                    Shopping Cart
                  </h2>
                  <button
                    onClick={() => setIsCartOpen(false)}
                    className="text-gray-500 hover:text-gray-700 transition-colors"
                  >
                    <X size={24} />
                  </button>
                </div>
                <p className="text-sm text-gray-600 mt-1">
                  {cart.length} {cart.length === 1 ? 'item' : 'items'} in cart
                </p>
              </div>

              {/* Cart Content */}
              <div className="flex-1 overflow-y-auto p-4">
                {cart.length === 0 ? (
                  <div className="text-center py-12">
                    <ShoppingCart size={48} className="mx-auto text-gray-300 mb-4" />
                    <p className="text-gray-500">Your cart is empty</p>
                    <p className="text-sm text-gray-400 mt-2">Add some products to get started!</p>
                  </div>
                ) : (
                  <div className="space-y-4">
                    {cart.map(item => (
                      <div key={item.id} className="flex items-center gap-3 bg-gray-50 p-3 rounded-lg">
                        <img
                          src={item.images[0]}
                          alt={item.name}
                          className="w-16 h-16 object-cover rounded-md flex-shrink-0"
                        />
                        <div className="flex-1 min-w-0">
                          <h3 className="font-semibold text-gray-800 text-sm line-clamp-2">{item.name}</h3>
                          <p className="text-gray-600 text-sm">R{item.price.toFixed(2)} each</p>
                          <p className="text-gray-800 text-sm font-medium">
                            Subtotal: R{(item.price * item.quantity).toFixed(2)}
                          </p>
                        </div>
                        <div className="flex flex-col items-end gap-2">
                          <div className="flex items-center gap-2">
                            <button
                              onClick={() => updateQuantity(item.id, item.quantity - 1)}
                              className="bg-gray-200 text-gray-700 p-1 rounded hover:bg-gray-300 transition-colors"
                            >
                              <Minus size={14} />
                            </button>
                            <span className="text-sm font-semibold min-w-8 text-center bg-white px-2 py-1 rounded">
                              {item.quantity}
                            </span>
                            <button
                              onClick={() => updateQuantity(item.id, item.quantity + 1)}
                              className="bg-gray-200 text-gray-700 p-1 rounded hover:bg-gray-300 transition-colors"
                            >
                              <Plus size={14} />
                            </button>
                          </div>
                          <button
                            onClick={() => removeFromCart(item.id)}
                            className="bg-red-500 text-white p-1 rounded hover:bg-red-600 transition-colors"
                          >
                            <X size={14} />
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              {/* Cart Footer */}
              {cart.length > 0 && (
                <div className="border-t p-4 bg-gray-50">
                  <div className="flex justify-between items-center mb-4">
                    <span className="text-lg font-bold text-gray-800">
                      Total: R{getTotalPrice().toFixed(2)}
                    </span>
                    <span className="text-sm text-gray-600">
                      {cart.reduce((total, item) => total + item.quantity, 0)} items
                    </span>
                  </div>
                  <button
                    onClick={() => {
                      sendToWhatsApp();
                      setIsCartOpen(false);
                    }}
                    className="w-full bg-green-600 text-white py-3 rounded-lg hover:bg-green-700 transition-colors flex items-center justify-center gap-2 font-medium"
                  >
                    <MessageCircle size={20} />
                    Order via WhatsApp
                  </button>
                  <button
                    onClick={() => {
                      setCart([]);
                      showAlertMessage('Cart cleared!');
                    }}
                    className="w-full mt-2 bg-gray-200 text-gray-700 py-2 rounded-lg hover:bg-gray-300 transition-colors text-sm"
                  >
                    Clear Cart
                  </button>
                </div>
              )}
            </div>
          </div>
        </>
      )}

      <div className="bg-white rounded-lg shadow-lg p-4 sm:p-6 mb-6">
        <h1 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-6 sm:mb-8">Product Catalog</h1>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mb-8">
          {products.map(product => (
            <div key={product.id} className="bg-white border border-gray-200 rounded-lg p-3 sm:p-4 hover:shadow-md transition-shadow">
              <div className="relative mb-4">
                <img
                  src={product.images[0]}
                  alt={product.name}
                  className="w-full h-40 sm:h-48 object-cover rounded-md"
                />
                <button
                  onClick={() => openProductModal(product)}
                  className="absolute top-2 right-2 bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-70 transition-colors"
                >
                  <Eye size={14} />
                </button>
                {product.images.length > 1 && (
                  <span className="absolute bottom-2 right-2 bg-black bg-opacity-50 text-white text-xs px-2 py-1 rounded">
                    +{product.images.length - 1}
                  </span>
                )}
              </div>
              <h3 className="text-base sm:text-lg font-semibold text-gray-800 mb-2 line-clamp-2">{product.name}</h3>
              <p className="text-gray-600 text-sm mb-3 line-clamp-2">{product.description}</p>
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2">
                <span className="text-lg sm:text-xl font-bold text-gray-800">R{product.price.toFixed(2)}</span>
                <button
                  onClick={() => addToCart(product)}
                  className="w-full sm:w-auto bg-black text-white px-3 sm:px-4 py-2 rounded-md hover:bg-gray-800 transition-colors flex items-center justify-center gap-2 text-sm"
                >
                  <Plus size={14} />
                  Add to Cart
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Product Modal */}
      {selectedProduct && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-4 sm:p-6">
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-xl sm:text-2xl font-bold text-gray-800 pr-4">{selectedProduct.name}</h2>
                <button
                  onClick={closeProductModal}
                  className="text-gray-500 hover:text-gray-700 transition-colors flex-shrink-0"
                >
                  <X size={24} />
                </button>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6">
                {/* Image Gallery */}
                <div className="relative">
                  <img
                    src={selectedProduct.images[currentImageIndex]}
                    alt={selectedProduct.name}
                    className="w-full h-64 sm:h-96 object-cover rounded-lg"
                  />

                  {selectedProduct.images.length > 1 && (
                    <>
                      <button
                        onClick={prevImage}
                        disabled={currentImageIndex === 0}
                        className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-70 transition-colors disabled:opacity-30"
                      >
                        <ChevronLeft size={20} />
                      </button>
                      <button
                        onClick={nextImage}
                        disabled={currentImageIndex === selectedProduct.images.length - 1}
                        className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-70 transition-colors disabled:opacity-30"
                      >
                        <ChevronRight size={20} />
                      </button>
                    </>
                  )}

                  {/* Image indicators */}
                  {selectedProduct.images.length > 1 && (
                    <div className="flex justify-center mt-4 gap-2">
                      {selectedProduct.images.map((_, index) => (
                        <button
                          key={index}
                          onClick={() => setCurrentImageIndex(index)}
                          className={`w-3 h-3 rounded-full transition-colors ${
                            index === currentImageIndex ? 'bg-black' : 'bg-gray-300'
                          }`}
                        />
                      ))}
                    </div>
                  )}

                  {/* Thumbnail strip */}
                  {selectedProduct.images.length > 1 && (
                    <div className="flex gap-2 mt-4 overflow-x-auto">
                      {selectedProduct.images.map((image, index) => (
                        <button
                          key={index}
                          onClick={() => setCurrentImageIndex(index)}
                          className={`flex-shrink-0 w-12 h-12 sm:w-16 sm:h-16 rounded-md overflow-hidden border-2 transition-colors ${
                            index === currentImageIndex ? 'border-black' : 'border-gray-200'
                          }`}
                        >
                          <img
                            src={image}
                            alt={`${selectedProduct.name} ${index + 1}`}
                            className="w-full h-full object-cover"
                          />
                        </button>
                      ))}
                    </div>
                  )}
                </div>

                {/* Product Details */}
                <div>
                  <p className="text-gray-600 mb-4 text-sm sm:text-base">{selectedProduct.description}</p>
                  <div className="mb-6">
                    <span className="text-2xl sm:text-3xl font-bold text-gray-800">R{selectedProduct.price.toFixed(2)}</span>
                  </div>
                  <button
                    onClick={() => {
                      addToCart(selectedProduct);
                      closeProductModal();
                    }}
                    className="w-full bg-black text-white py-3 rounded-md hover:bg-gray-800 transition-colors flex items-center justify-center gap-2"
                  >
                    <Plus size={20} />
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Order;
