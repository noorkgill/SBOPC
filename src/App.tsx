import { HeroSection } from "./components/HeroSection";
import { Navigation } from "./components/Navigation";
import { MenuSection } from "./components/MenuSection";
import { DeliverySection } from "./components/DeliverySection";
import { ContactSection } from "./components/ContactSection";
import { FAQSection } from "./components/FAQSection";

export default function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <HeroSection />
      <MenuSection />
      <DeliverySection />
      <ContactSection />
      <FAQSection />
    </div>
  );
}