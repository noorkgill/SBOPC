import { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";

export function MenuSection() {
  const [selectedSize, setSelectedSize] = useState<"10" | "12" | "14" | "18">("12");

  const traditionalPizzas = [
    {
      name: "Meat Lovers",
      description: "Red sauce, cheese, pepperoni, ham, bacon, sausage, and ground beef",
      prices: { "10": "$15.99", "12": "$17.99", "14": "$20.99", "18": "$27.99" }
    },
    {
      name: "Traditional Veggie",
      description: "Red sauce, cheese, fresh mushrooms, onions, green bell peppers, black olives, and fresh tomatoes",
      prices: { "10": "$15.99", "12": "$17.99", "14": "$20.99", "18": "$27.99" }
    },
    {
      name: "Good Old Hawaiian",
      description: "Red sauce, cheese, ham, and pineapple",
      prices: { "10": "$15.99", "12": "$17.99", "14": "$20.99", "18": "$27.99" }
    },
    {
      name: "Classic Combination",
      description: "Red sauce, cheese, pepperoni, ham, fresh mushrooms, sausage, black olives, and green bell peppers",
      prices: { "10": "$15.99", "12": "$17.99", "14": "$20.99", "18": "$27.99" }
    },
    {
      name: "Everything Pizza",
      description: "Red sauce, cheese, pepperoni, ham, bacon, mushrooms, onions, green bell peppers, sausage, ground beef, and fresh tomatoes",
      prices: { "10": "$15.99", "12": "$17.99", "14": "$20.99", "18": "$27.99" }
    },
    {
      name: "BBQ Chicken",
      description: "BBQ sauce, cheese, chicken, onions, and bacon",
      prices: { "10": "$15.99", "12": "$17.99", "14": "$20.99", "18": "$27.99" }
    }
  ];

  const indianPizzas = [
    {
      name: "Tandoori Chicken",
      description: "Tandoori sauce, cheese, tandoori chicken, onions, bell peppers, tomatoes, and fresh cilantro",
      prices: { "10": "$15.99", "12": "$17.99", "14": "$20.99", "18": "$27.99" }
    },
    {
      name: "Achari Chicken",
      description: "Achari sauce, cheese, achari chicken, onions, bell peppers, tomatoes, jalapeños, and fresh cilantro",
      prices: { "10": "$15.99", "12": "$17.99", "14": "$20.99", "18": "$27.99" }
    },
    {
      name: "Butter Chicken",
      description: "Butter sauce, cheese, butter chicken, onions, bell peppers, tomatoes, and fresh cilantro",
      prices: { "10": "$15.99", "12": "$17.99", "14": "$20.99", "18": "$27.99" }
    },
    {
      name: "Chicken Tikka",
      description: "Tikka sauce, cheese, chicken tikka, onions, bell peppers, mushrooms, and fresh cilantro",
      prices: { "10": "$15.99", "12": "$17.99", "14": "$20.99", "18": "$27.99" }
    },
    {
      name: "Lahori BBQ Chicken",
      description: "BBQ sauce, cheese, Lahori-style BBQ chicken, onions, bell peppers, tomatoes, and fresh cilantro",
      prices: { "10": "$15.99", "12": "$17.99", "14": "$20.99", "18": "$27.99" }
    },
    {
      name: "Peri Peri Chicken",
      description: "Tikka sauce, cheese, spicy peri peri chicken, onions, bell peppers, tomatoes, and fresh cilantro",
      prices: { "10": "$15.99", "12": "$17.99", "14": "$20.99", "18": "$27.99" }
    },
    {
      name: "Tandoori Paneer",
      description: "Tandoori sauce, cheese, paneer, onions, bell peppers, tomatoes, and fresh cilantro",
      prices: { "10": "$15.99", "12": "$17.99", "14": "$20.99", "18": "$27.99" }
    },
    {
      name: "Achari Paneer",
      description: "Achari sauce, cheese, paneer, onions, bell peppers, tomatoes, jalapeños, and fresh cilantro",
      prices: { "10": "$15.99", "12": "$17.99", "14": "$20.99", "18": "$27.99" }
    },
    {
      name: "Butter Paneer",
      description: "Butter sauce, cheese, paneer, onions, bell peppers, tomatoes, and fresh cilantro",
      prices: { "10": "$15.99", "12": "$17.99", "14": "$20.99", "18": "$27.99" }
    },
    {
      name: "Paneer Tikka",
      description: "Tikka sauce, cheese, paneer, onions & bell peppers, mushrooms, and fresh cilantro",
      prices: { "10": "$15.99", "12": "$17.99", "14": "$20.99", "18": "$27.99" }
    },
    {
      name: "Palak Paneer",
      description: "Pesto sauce, cheese, paneer, spinach, onions, tomatoes, and fresh cilantro",
      prices: { "10": "$15.99", "12": "$17.99", "14": "$20.99", "18": "$27.99" }
    },
    {
      name: "Desi Veggie",
      description: "Masala sauce, cheese, onions, bell peppers, tomatoes, mushrooms, black olives, pineapple, jalapeños, ginger, garlic, and fresh cilantro",
      prices: { "10": "$15.99", "12": "$17.99", "14": "$20.99", "18": "$27.99" }
    }
  ];

  const appetizers = [
    { name: "Wings (6 pcs)", price: "$8.99", description: "Choose Bone-In or Boneless. Flavors: Buffalo, BBQ, Garlic Parmesan, Lemon Pepper, Tandoori Spice, Peri Peri, Achari Pickled, Lahori BBQ Extra Hot, Lemon/Hot/Marinara" },
    { name: "Wings (12 pcs)", price: "$15.99", description: "Choose Bone-In or Boneless. Multiple flavor options available" },
    { name: "Potato Wedges", price: "$6.99", description: "Crispy seasoned potato wedges" },
    { name: "Garden Salad", price: "$6.99", description: "Fresh mixed greens" },
    { name: "Chicken Salad", price: "$7.99", description: "Grilled chicken over fresh greens" },
    { name: "Caesar Salad", price: "$6.99", description: "Classic Caesar with parmesan" },
    { name: "Oven-Baked Fish (1 lb)", price: "$10.99", description: "Tender oven-baked fish" }
  ];

  const drinks = [
    { name: "Can Soda", price: "$1.99" },
    { name: "Bottle Soda", price: "$2.49" },
    { name: "2 Liter Soda", price: "$3.99" },
    { name: "Water Bottle", price: "$1.00" }
  ];

  return (
    <section id="menu" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2>Our Menu</h2>
          <p className="text-gray-600 mt-4">From classic combinations to bold Indian flavors, we have something for everyone.</p>
        </div>

        <Tabs defaultValue="traditional" className="w-full">
          <TabsList className="grid w-full max-w-2xl mx-auto grid-cols-4 mb-12">
            <TabsTrigger value="traditional">Traditional</TabsTrigger>
            <TabsTrigger value="indian">Indian</TabsTrigger>
            <TabsTrigger value="custom">Create Your Own</TabsTrigger>
            <TabsTrigger value="sides">Sides & Drinks</TabsTrigger>
          </TabsList>

          <TabsContent value="traditional" className="space-y-6">
            <div className="flex justify-center gap-4 mb-8">
              <Badge 
                variant={selectedSize === "10" ? "default" : "outline"}
                className="cursor-pointer px-4 py-2"
                onClick={() => setSelectedSize("10")}
              >
                10" Small
              </Badge>
              <Badge 
                variant={selectedSize === "12" ? "default" : "outline"}
                className="cursor-pointer px-4 py-2"
                onClick={() => setSelectedSize("12")}
              >
                12" Medium
              </Badge>
              <Badge 
                variant={selectedSize === "14" ? "default" : "outline"}
                className="cursor-pointer px-4 py-2"
                onClick={() => setSelectedSize("14")}
              >
                14" Large
              </Badge>
              <Badge 
                variant={selectedSize === "18" ? "default" : "outline"}
                className="cursor-pointer px-4 py-2"
                onClick={() => setSelectedSize("18")}
              >
                18" XL
              </Badge>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {traditionalPizzas.map((pizza) => (
                <Card key={pizza.name} className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <CardTitle>{pizza.name}</CardTitle>
                    <CardDescription>{pizza.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex justify-between items-center">
                      <span className="text-green-700">{pizza.prices[selectedSize]}</span>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="mt-8 p-6 bg-gray-50 rounded-lg">
              <h3 className="mb-4">Single Topping Pizza</h3>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <p>Choose Pepperoni Pizza or Cheese Pizza</p>
                </div>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span>10" Small</span>
                    <span className="text-green-700">$10.99</span>
                  </div>
                  <div className="flex justify-between">
                    <span>12" Medium</span>
                    <span className="text-green-700">$12.99</span>
                  </div>
                  <div className="flex justify-between">
                    <span>14" Large</span>
                    <span className="text-green-700">$15.99</span>
                  </div>
                  <div className="flex justify-between">
                    <span>18" XL</span>
                    <span className="text-green-700">$20.99</span>
                  </div>
                </div>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="indian" className="space-y-6">
            <div className="flex justify-center gap-4 mb-8">
              <Badge 
                variant={selectedSize === "10" ? "default" : "outline"}
                className="cursor-pointer px-4 py-2"
                onClick={() => setSelectedSize("10")}
              >
                10" Small
              </Badge>
              <Badge 
                variant={selectedSize === "12" ? "default" : "outline"}
                className="cursor-pointer px-4 py-2"
                onClick={() => setSelectedSize("12")}
              >
                12" Medium
              </Badge>
              <Badge 
                variant={selectedSize === "14" ? "default" : "outline"}
                className="cursor-pointer px-4 py-2"
                onClick={() => setSelectedSize("14")}
              >
                14" Large
              </Badge>
              <Badge 
                variant={selectedSize === "18" ? "default" : "outline"}
                className="cursor-pointer px-4 py-2"
                onClick={() => setSelectedSize("18")}
              >
                18" XL
              </Badge>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {indianPizzas.map((pizza) => (
                <Card key={pizza.name} className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <CardTitle>{pizza.name}</CardTitle>
                    <CardDescription>{pizza.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex justify-between items-center">
                      <span className="text-green-700">{pizza.prices[selectedSize]}</span>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="custom" className="space-y-6">
            <div className="grid md:grid-cols-2 gap-8">
              <Card>
                <CardHeader>
                  <CardTitle>Create Your Own Pizza</CardTitle>
                  <CardDescription>Start with your choice of crust, sauce, and cheese, then build it your way!</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <h4 className="mb-2">Base Pricing (Cheese Pizza):</h4>
                    <div className="space-y-1 text-gray-700">
                      <div className="flex justify-between">
                        <span>10" Small</span>
                        <span className="text-green-700">$10.99</span>
                      </div>
                      <div className="flex justify-between">
                        <span>12" Medium</span>
                        <span className="text-green-700">$12.99</span>
                      </div>
                      <div className="flex justify-between">
                        <span>14" Large</span>
                        <span className="text-green-700">$15.99</span>
                      </div>
                      <div className="flex justify-between">
                        <span>18" XL</span>
                        <span className="text-green-700">$20.99</span>
                      </div>
                    </div>
                  </div>
                  <div>
                    <p className="text-red-600">Extra Topping: $1.99 each</p>
                  </div>
                </CardContent>
              </Card>

              <div className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Crusts</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-700">Original / Thin Crust</p>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Sauces</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2">
                      <p className="text-red-600">Classic:</p>
                      <p className="text-gray-700">Red, BBQ, Pesto</p>
                      <p className="text-red-600 mt-3">Indian Inspired:</p>
                      <p className="text-gray-700">Tandoori, Achari, Butter, Tikka, Masala</p>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Meats</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-1 text-gray-700">
                    <li>• Pepperoni</li>
                    <li>• Ham</li>
                    <li>• Bacon</li>
                    <li>• Italian Sausage</li>
                    <li>• Ground Beef</li>
                    <li>• Grilled Chicken</li>
                    <li>• Tandoori Chicken</li>
                    <li>• Achari Chicken</li>
                    <li>• Butter Chicken</li>
                    <li>• Chicken Tikka</li>
                    <li>• Lahori BBQ Chicken</li>
                    <li>• Peri Peri Chicken</li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Paneer Options</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-1 text-gray-700">
                    <li>• Tandoori Paneer</li>
                    <li>• Achari Paneer</li>
                    <li>• Butter Paneer</li>
                    <li>• Paneer Tikka</li>
                    <li>• Palak Paneer</li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Veggies</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-1 text-gray-700">
                    <li>• Mushrooms</li>
                    <li>• Onions</li>
                    <li>• Green Bell Peppers</li>
                    <li>• Black Olives</li>
                    <li>• Tomatoes</li>
                    <li>• Spinach</li>
                    <li>• Jalapeños</li>
                    <li>• Pineapple</li>
                    <li>• Ginger</li>
                    <li>• Garlic</li>
                    <li>• Fresh Cilantro</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="sides" className="space-y-6">
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="mb-6">Appetizers</h3>
                <div className="space-y-4">
                  {appetizers.map((item) => (
                    <Card key={item.name} className="hover:shadow-lg transition-shadow">
                      <CardContent className="pt-6">
                        <div className="flex justify-between items-start">
                          <div className="flex-1">
                            <h4 className="mb-1">{item.name}</h4>
                            <p className="text-gray-600">{item.description}</p>
                          </div>
                          <div className="ml-4 flex flex-col items-end gap-2">
                            <span className="text-green-700">{item.price}</span>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="mb-6">Drinks</h3>
                <div className="space-y-4">
                  {drinks.map((item) => (
                    <Card key={item.name} className="hover:shadow-lg transition-shadow">
                      <CardContent className="pt-6">
                        <div className="flex justify-between items-center">
                          <h4>{item.name}</h4>
                          <div className="flex items-center gap-4">
                            <span className="text-green-700">{item.price}</span>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
}
