import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { Truck, Clock, MapPin, Phone } from "lucide-react";
import { SectionHeader } from "./SectionHeader";

export function DeliverySection() {
  return (
    <section id="delivery" className="py-20 bg-gray-50">
      <SectionHeader>Delivery & Catering Information</SectionHeader>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <p className="text-gray-600" style={{ fontSize: '18px' }}>Fast, reliable delivery to your doorstep and catering services for any event</p>
        </div>

        <div className="grid md:grid-cols-4 gap-6 mb-12">
          <Card className="text-center hover:shadow-xl transition-shadow">
            <CardHeader>
              <div className="flex justify-center mb-4">
                <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center">
                  <Truck className="w-8 h-8 text-red-600" />
                </div>
              </div>
              <CardTitle>Fast Delivery</CardTitle>
              <CardDescription>Hot and fresh in 30-45 minutes</CardDescription>
            </CardHeader>
          </Card>

          <Card className="text-center hover:shadow-xl transition-shadow">
            <CardHeader>
              <div className="flex justify-center mb-4">
                <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center">
                  <Clock className="w-8 h-8 text-red-600" />
                </div>
              </div>
              <CardTitle>Open Daily</CardTitle>
              <CardDescription>11:00 AM to 9:30 PM, 7 days a week</CardDescription>
            </CardHeader>
          </Card>

          <Card className="text-center hover:shadow-xl transition-shadow">
            <CardHeader>
              <div className="flex justify-center mb-4">
                <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center">
                  <MapPin className="w-8 h-8 text-red-600" />
                </div>
              </div>
              <CardTitle>Wide Coverage</CardTitle>
              <CardDescription>Delivering to Fresno and surrounding areas</CardDescription>
            </CardHeader>
          </Card>

          <Card className="text-center hover:shadow-xl transition-shadow">
            <CardHeader>
              <div className="flex justify-center mb-4">
                <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center">
                  <Phone className="w-8 h-8 text-red-600" />
                </div>
              </div>
              <CardTitle>Catering Available</CardTitle>
              <CardDescription>Perfect for any event or party</CardDescription>
            </CardHeader>
          </Card>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <Card className="hover:shadow-xl transition-shadow">
            <CardHeader>
              <CardTitle style={{ color: '#C8102E', fontWeight: '700' }}>Delivery Details</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h4 className="mb-2" style={{ fontWeight: '600' }}>Order on DoorDash</h4>
                <p className="text-gray-700">
                  Order online through DoorDash for convenient delivery tracking and payment.{' '}
                  <a 
                    href="https://www.doordash.com/store/517927?utm_source=mx_share&aw=9r5rUjAa33u-Af8F"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-red-600 hover:text-red-700 underline"
                    style={{ fontWeight: '600' }}
                  >
                    Order Now on DoorDash
                  </a>
                </p>
              </div>
              <div>
                <h4 className="mb-2" style={{ fontWeight: '600' }}>Delivery Fee</h4>
                <p className="text-gray-700">Delivery fees vary based on distance. Please call us for exact pricing.</p>
              </div>
              <div>
                <h4 className="mb-2" style={{ fontWeight: '600' }}>Minimum Order</h4>
                <p className="text-gray-700">$15 minimum order for delivery</p>
              </div>
              <div>
                <h4 className="mb-2" style={{ fontWeight: '600' }}>Payment Methods</h4>
                <p className="text-gray-700">We accept cash, credit cards, and debit cards</p>
              </div>
            </CardContent>
          </Card>

          <Card className="hover:shadow-xl transition-shadow">
            <CardHeader>
              <CardTitle style={{ color: '#C8102E', fontWeight: '700' }}>Catering Services</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h4 className="mb-2" style={{ fontWeight: '600' }}>Perfect For Any Occasion</h4>
                <p className="text-gray-700">
                  Birthday parties, corporate events, school functions, sports team celebrations, family gatherings, and more!
                </p>
              </div>
              <div>
                <h4 className="mb-2" style={{ fontWeight: '600' }}>Custom Packages</h4>
                <p className="text-gray-700">
                  Choose from our menu of traditional and Indian fusion pizzas, wings, appetizers, and drinks.
                </p>
              </div>
              <div>
                <h4 className="mb-2" style={{ fontWeight: '600' }}>Advance Ordering</h4>
                <p className="text-gray-700">
                  We recommend ordering at least 24 hours in advance for catering orders.
                </p>
              </div>
              <div className="pt-4">
                <p className="text-gray-700 mb-3" style={{ fontWeight: '600' }}>
                  For catering inquiries and custom quotes:
                </p>
                <a 
                  href="tel:5592715151" 
                  className="inline-block bg-red-600 text-white px-6 py-3 rounded-full hover:bg-red-700 transition-colors"
                  style={{ fontWeight: '700' }}
                >
                  Call (559) 271-5151
                </a>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}