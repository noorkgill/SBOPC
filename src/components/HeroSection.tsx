import basilImg from "figma:asset/3e8ab6eb01edbfb850d1c5a41aa04aac02cef32b.png";
import mushroomImg from "figma:asset/0c54bcd0ac63e98c8a9cb35cf74b6a88ceb38c06.png";
import oliveImg from "figma:asset/dd1090d318f2bc1f065bd2cb0d9bae3fb92e3c89.png";
import tomatoImg from "figma:asset/bc9ebf3b2a5af3d3cd86f0a27b6bac6a28dbba2e.png";
import pepperImg from "figma:asset/b8be1a9fd4ac1f2f5becc9f8c2c00be065e4f2c5.png";
import garlicImg from "figma:asset/3b22c34d81db4e8f13d41e68e3ab4b29056e5dd0.png";
import pizzaHeroImg from "figma:asset/72c59f35ef69ea03aab63c086b15fb4f31b01bb4.png";

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
          <h1 className="mb-6">Your Pizza Party Starts Here!</h1>
          <p className="max-w-2xl mx-auto mb-8 text-gray-600">
            Gather your friends and family and enjoy the best pizza in town. Freshly made and delivered hot!
          </p>
          <button 
            onClick={scrollToMenu}
            className="bg-red-600 text-white px-8 py-3 rounded-full hover:bg-red-700 transition-colors"
          >
            View Our Menu
          </button>
        </div>
      </div>
      
      {/* Floating ingredients */}
      <div className="absolute top-16 left-10 w-20 h-20 animate-float">
        <img 
          src={basilImg}
          alt="Basil" 
          className="w-full h-full object-contain drop-shadow-lg"
        />
      </div>
      <div className="absolute top-12 left-[18%] w-24 h-24 animate-float-delayed">
        <img 
          src={mushroomImg}
          alt="Mushroom" 
          className="w-full h-full object-contain drop-shadow-lg"
        />
      </div>
      <div className="absolute top-10 right-[20%] w-20 h-20 animate-float">
        <img 
          src={oliveImg}
          alt="Olive" 
          className="w-full h-full object-contain drop-shadow-lg"
        />
      </div>
      <div className="absolute top-16 right-10 w-24 h-24 animate-float-delayed">
        <img 
          src={tomatoImg}
          alt="Tomato" 
          className="w-full h-full object-contain drop-shadow-lg"
        />
      </div>
      <div className="absolute top-[45%] left-8 w-20 h-20 animate-float">
        <img 
          src={oliveImg}
          alt="Olive" 
          className="w-full h-full object-contain drop-shadow-lg"
        />
      </div>
      <div className="absolute top-[50%] left-[15%] w-28 h-28 animate-float-delayed">
        <img 
          src={pepperImg}
          alt="Pepper" 
          className="w-full h-full object-contain drop-shadow-lg"
        />
      </div>
      <div className="absolute top-[40%] right-[12%] w-24 h-24 animate-float">
        <img 
          src={mushroomImg}
          alt="Mushroom" 
          className="w-full h-full object-contain drop-shadow-lg"
        />
      </div>
      <div className="absolute top-[50%] right-8 w-20 h-20 animate-float-delayed">
        <img 
          src={garlicImg}
          alt="Garlic" 
          className="w-full h-full object-contain drop-shadow-lg"
        />
      </div>
      <div className="absolute bottom-[30%] left-[8%] w-24 h-24 animate-float-delayed">
        <img 
          src={tomatoImg}
          alt="Tomato" 
          className="w-full h-full object-contain drop-shadow-lg"
        />
      </div>
      <div className="absolute bottom-[25%] right-[8%] w-20 h-20 animate-float">
        <img 
          src={basilImg}
          alt="Basil" 
          className="w-full h-full object-contain drop-shadow-lg"
        />
      </div>
      
      {/* Hero Pizza Image */}
      <div className="max-w-5xl mx-auto mt-12 px-4 relative z-20">
        <img 
          src={pizzaHeroImg}
          alt="Delicious Pizza" 
          className="w-full h-auto"
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
