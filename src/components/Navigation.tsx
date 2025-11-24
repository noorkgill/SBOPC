import logoImg from "figma:asset/8d20110c785bc3b76dc3cdbe731e18507cd85fc6.png";

export function Navigation() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="shadow-md sticky top-0 z-50" style={{ backgroundColor: '#6B9F4A' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex items-center gap-3">
            <img src={logoImg} alt="Pizza Delicious" className="h-16 w-auto" />
            <div className="flex flex-col">
              <span style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: '28px', color: '#C8102E', lineHeight: '1', letterSpacing: '0.5px', fontWeight: '900' }}>
                PIZZA DELICIOUS
              </span>
              <span style={{ fontFamily: "'Poppins', sans-serif", fontSize: '10px', color: '#FFFFFF', lineHeight: '1', letterSpacing: '1px', fontWeight: '700' }}>
                FRESH OVEN BAKED PIZZA
              </span>
            </div>
          </div>
          <div className="hidden md:flex items-center gap-8">
            <button onClick={() => scrollToSection('menu')} className="text-white hover:text-red-200 transition-colors" style={{ fontWeight: '700', fontSize: '15px' }}>
              Menu
            </button>
            <button onClick={() => scrollToSection('delivery')} className="text-white hover:text-red-200 transition-colors" style={{ fontWeight: '700', fontSize: '15px' }}>
              Delivery & Catering
            </button>
            <button onClick={() => scrollToSection('contact')} className="text-white hover:text-red-200 transition-colors" style={{ fontWeight: '700', fontSize: '15px' }}>
              Contact/Hours
            </button>
            <button onClick={() => scrollToSection('faq')} className="text-white hover:text-red-200 transition-colors" style={{ fontWeight: '700', fontSize: '15px' }}>
              FAQ
            </button>
            <a 
              href="https://www.doordash.com/store/517927?utm_source=mx_share&aw=9r5rUjAa33u-Af8F"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-red-600 text-white px-6 py-2 rounded-full hover:bg-red-700 transition-colors shadow-md"
              style={{ fontWeight: '700' }}
            >
              Order Now
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}