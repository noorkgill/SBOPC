import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { Users, Pizza, Calendar, Phone } from "lucide-react";

export function CateringSection() {
  return (
    <section id="catering" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2>Catering Services</h2>
          <p className="text-gray-600 mt-4">Make your next event unforgettable with our delicious pizzas</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          <Card className="text-center">
            <CardHeader>
              <div className="flex justify-center mb-4">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center">
                  <Users className="w-8 h-8 text-green-700" />
                </div>
              </div>
              <CardTitle>All Group Sizes</CardTitle>
              <CardDescription>From small gatherings to large events</CardDescription>
            </CardHeader>
          </Card>

          <Card className="text-center">
            <CardHeader>
              <div className="flex justify-center mb-4">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center">
                  <Pizza className="w-8 h-8 text-green-700" />
                </div>
              </div>
              <CardTitle>Custom Packages</CardTitle>
              <CardDescription>Choose from our menu or create custom orders</CardDescription>
            </CardHeader>
          </Card>

          <Card className="text-center">
            <CardHeader>
              <div className="flex justify-center mb-4">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center">
                  <Calendar className="w-8 h-8 text-green-700" />
                </div>
              </div>
              <CardTitle>Advance Ordering</CardTitle>
              <CardDescription>Order ahead for your special date</CardDescription>
            </CardHeader>
          </Card>

          <Card className="text-center">
            <CardHeader>
              <div className="flex justify-center mb-4">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center">
                  <Phone className="w-8 h-8 text-green-700" />
                </div>
              </div>
              <CardTitle>Easy Ordering</CardTitle>
              <CardDescription>Call us to discuss your catering needs</CardDescription>
            </CardHeader>
          </Card>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <Card>
            <CardHeader>
              <CardTitle>Perfect For</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <span className="text-green-700 mr-2">✓</span>
                  <span>Birthday Parties</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-700 mr-2">✓</span>
                  <span>Corporate Events</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-700 mr-2">✓</span>
                  <span>School Functions</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-700 mr-2">✓</span>
                  <span>Sports Team Celebrations</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-700 mr-2">✓</span>
                  <span>Family Gatherings</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-700 mr-2">✓</span>
                  <span>Church Events</span>
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>What We Offer</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <span className="text-green-700 mr-2">•</span>
                  <span>All pizzas from our menu available</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-700 mr-2">•</span>
                  <span>Traditional and Indian fusion options</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-700 mr-2">•</span>
                  <span>Wings and appetizers</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-700 mr-2">•</span>
                  <span>Salads and sides</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-700 mr-2">•</span>
                  <span>Beverages</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-700 mr-2">•</span>
                  <span>Flexible delivery and pickup options</span>
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>

        <div className="mt-12 text-center">
          <Card className="max-w-2xl mx-auto bg-red-50 border-red-200">
            <CardHeader>
              <CardTitle>Get a Catering Quote</CardTitle>
              <CardDescription>Call us to discuss your event and get a customized quote</CardDescription>
            </CardHeader>
            <CardContent>
              <a 
                href="tel:5592715151" 
                className="inline-block bg-red-600 text-white px-8 py-3 rounded-full hover:bg-red-700 transition-colors"
              >
                Call (559) 271-5151
              </a>
              <p className="mt-4 text-gray-600">We recommend ordering at least 24 hours in advance for catering</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
