import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./ui/accordion";
import { SectionHeader } from "./SectionHeader";

export function FAQSection() {
  const faqs = [
    {
      question: "What are your delivery hours?",
      answer: "We deliver daily from 11:00 AM to 9:30 PM. Orders placed close to closing time may have limited delivery availability."
    },
    {
      question: "Do you offer gluten-free or vegan options?",
      answer: "Currently, we offer traditional and thin crust options. Please call us at (559) 271-5151 to discuss dietary restrictions and we'll do our best to accommodate your needs."
    },
    {
      question: "What's the difference between Traditional and Indian pizzas?",
      answer: "Our Traditional pizzas feature classic Italian-style toppings and sauces like red sauce, BBQ, and pesto. Our Indian pizzas are unique fusion creations with authentic Indian sauces (Tandoori, Achari, Butter, Tikka, Masala) and toppings like paneer, tandoori chicken, and fresh cilantro."
    },
    {
      question: "How much notice do I need for catering orders?",
      answer: "We recommend placing catering orders at least 24 hours in advance to ensure we can accommodate your group size and preferences. For larger events, please give us as much notice as possible."
    },
    {
      question: "What payment methods do you accept?",
      answer: "We accept cash, all major credit cards, and debit cards for both dine-in and delivery orders."
    },
    {
      question: "Is there a minimum order for delivery?",
      answer: "Yes, we have a $15 minimum order for delivery. Delivery fees vary based on distance from our location."
    },
    {
      question: "Can I customize my pizza?",
      answer: "Absolutely! You can create your own pizza by choosing your crust (Original or Thin), sauce (Classic or Indian-inspired), and any combination of our meats, paneer, and vegetables. Extra toppings are $1.99 each."
    },
    {
      question: "Do you have specials or deals?",
      answer: "Yes! Please call us at (559) 271-5151 to ask about our current specials and combo deals. We regularly offer promotions on pizzas, wings, and family meals."
    },
    {
      question: "How long does delivery typically take?",
      answer: "Most deliveries arrive within 30-45 minutes, depending on your location and how busy we are. We'll give you an estimated time when you place your order."
    },
    {
      question: "Can I order half-and-half pizzas?",
      answer: "Yes! We can make half-and-half pizzas with different toppings on each side. Just let us know when you order. Additional topping charges may apply."
    },
    {
      question: "What sizes do your pizzas come in?",
      answer: "We offer four sizes: 10\" Small, 12\" Medium, 14\" Large, and 18\" XL. The larger sizes are perfect for sharing with family and friends!"
    },
    {
      question: "Are your wings spicy?",
      answer: "We offer wings in multiple flavors ranging from mild to extra hot. Options include Buffalo, BBQ, Garlic Parmesan, Lemon Pepper, and our Indian-inspired flavors like Tandoori Spice, Peri Peri, Achari Pickled, and Lahori BBQ Extra Hot."
    }
  ];

  return (
    <section id="faq" className="py-20 bg-white">
      <SectionHeader>Frequently Asked Questions</SectionHeader>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <p className="text-gray-600" style={{ fontSize: '18px' }}>Find answers to common questions about our pizzas and services</p>
        </div>

        <Accordion type="single" collapsible className="w-full">
          {faqs.map((faq, index) => (
            <AccordionItem key={index} value={`item-${index}`}>
              <AccordionTrigger style={{ fontWeight: '600' }}>{faq.question}</AccordionTrigger>
              <AccordionContent className="text-gray-700" style={{ fontSize: '15px' }}>
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>

        <div className="mt-12 text-center p-8 bg-gradient-to-br from-red-50 to-orange-50 rounded-lg shadow-md">
          <h3 className="mb-4" style={{ color: '#C8102E', fontWeight: '700' }}>Still have questions?</h3>
          <p className="text-gray-600 mb-6">
            Don't hesitate to reach out! Our team is happy to help.
          </p>
          <a 
            href="tel:5592715151" 
            className="inline-block bg-red-600 text-white px-8 py-3 rounded-full hover:bg-red-700 transition-colors shadow-md"
            style={{ fontWeight: '700' }}
          >
            Call Us: (559) 271-5151
          </a>
        </div>
      </div>
    </section>
  );
}