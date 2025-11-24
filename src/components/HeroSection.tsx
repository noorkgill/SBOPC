import pizzaHeroImg from "figma:asset/72c59f35ef69ea03aab63c086b15fb4f31b01bb4.png";
import greenPepper from "figma:asset/413903c1259d87e235dc40c814692e8b67a7e0fa.png";
import tomato from "figma:asset/c79b80ee37c86494cca10cb77e5c7c7a52930106.png";
import onion from "figma:asset/3871de02491f80f88e233d6062ec267d3660915d.png";
import olive from "figma:asset/00dfeb91fd1ab12b3270bcbd70e53f799f28bd62.png";
import mushroom from "figma:asset/566a7d39d0d8d5ccd5d8d69ee6665d51e1f50a73.png";
import basil from "figma:asset/b822ecc2bd24f00c2266a31c7e8fd9c974c5ccf3.png";

export function HeroSection() {
  const scrollToMenu = () => {
    const element = document.getElementById('menu');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative bg-gradient-to-b from-gray-50 to-white py-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center">
          <h1 style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: '72px', fontWeight: '700', color: '#C8102E', lineHeight: '1.1', letterSpacing: '2px' }} className="mb-6">
            Your Pizza Party Starts Here!
          </h1>
          <p className="max-w-2xl mx-auto mb-8" style={{ color: '#000000', fontWeight: '700', fontSize: '20px', lineHeight: '1.6' }}>
            Gather your friends and family and enjoy the best pizza in town, where classic pizza meets Indian flavor.
          </p>
        </div>
      </div>
      
      {/* Floating ingredients */}
      <div className="absolute top-12 left-[5%] w-32 h-32 animate-float">
        <img 
          src={greenPepper}
          alt="Green Pepper" 
          className="w-full h-full object-contain drop-shadow-lg"
        />
      </div>
      <div className="absolute top-8 right-[8%] w-28 h-28 animate-float-delayed">
        <img 
          src={tomato}
          alt="Tomato" 
          className="w-full h-full object-contain drop-shadow-lg"
        />
      </div>
      <div className="absolute top-[50%] left-[3%] w-24 h-24 animate-float">
        <img 
          src={onion}
          alt="Onion" 
          className="w-full h-full object-contain drop-shadow-lg"
        />
      </div>
      <div className="absolute top-[35%] right-[5%] w-36 h-36 animate-float-delayed">
        <img 
          src={olive}
          alt="Olive" 
          className="w-full h-full object-contain drop-shadow-lg"
        />
      </div>
      <div className="absolute bottom-[35%] left-[10%] w-28 h-28 animate-float-delayed">
        <img 
          src={mushroom}
          alt="Mushroom" 
          className="w-full h-full object-contain drop-shadow-lg"
        />
      </div>
      <div className="absolute bottom-[28%] right-[7%] w-28 h-28 animate-float">
        <img 
          src={basil}
          alt="Basil" 
          className="w-full h-full object-contain drop-shadow-lg"
        />
      </div>
      <div className="absolute top-[28%] left-[20%] w-24 h-24 animate-float">
        <img 
          src={tomato}
          alt="Tomato" 
          className="w-full h-full object-contain drop-shadow-lg"
        />
      </div>
      <div className="absolute top-[60%] right-[25%] w-26 h-26 animate-float-delayed">
        <img 
          src={greenPepper}
          alt="Green Pepper" 
          className="w-full h-full object-contain drop-shadow-lg"
        />
      </div>
      <div className="absolute bottom-[45%] left-[25%] w-20 h-20 animate-float">
        <img 
          src={olive}
          alt="Olive" 
          className="w-full h-full object-contain drop-shadow-lg"
        />
      </div>
      
      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(5deg); }
        }
        @keyframes float-delayed {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-25px) rotate(-5deg); }
        }
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        .animate-float-delayed {
          animation: float-delayed 5s ease-in-out infinite;
          animation-delay: 1s;
        }
      `}</style>
    </section>
  );
}