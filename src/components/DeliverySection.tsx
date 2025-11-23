import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { Truck, Clock, MapPin } from "lucide-react";

export function DeliverySection() {
  return (
    <section id="delivery" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2>Delivery Information</h2>
          <p className="text-gray-600 mt-4">Fast, reliable delivery to your doorstep</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          <Card className="text-center">
            <CardHeader>
              <div className="flex justify-center mb-4">
                <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center">
                  <Truck className="w-8 h-8 text-red-600" />
                </div>
              </div>
              <CardTitle>Fast Delivery</CardTitle>
              <CardDescription>Get your pizza hot and fresh in 30-45 minutes</CardDescription>
            </CardHeader>
          </Card>

          <Card className="text-center">
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

          <Card className="text-center">
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
        </div>

        <Card className="max-w-2xl mx-auto">
          <CardHeader>
            <CardTitle>Delivery Policy</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <h4 className="mb-2">Order on DoorDash</h4>
              <p className="text-gray-700">
                Order online through DoorDash for convenient delivery tracking and payment.{' '}
                <a 
                  href="https://www.doordash.com/store/517927?utm_source=mx_share&aw=9r5rUjAa33u-Af8F"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-red-600 hover:text-red-700 underline"
                >
                  Order Now on DoorDash
                </a>
              </p>
            </div>
            <div>
              <h4 className="mb-2">Delivery Fee</h4>
              <p className="text-gray-700">Delivery fees vary based on distance. Please call us for exact pricing.</p>
            </div>
            <div>
              <h4 className="mb-2">Minimum Order</h4>
              <p className="text-gray-700">$15 minimum order for delivery</p>
            </div>
            <div>
              <h4 className="mb-2">Payment Methods</h4>
              <p className="text-gray-700">We accept cash, credit cards, and debit cards</p>
            </div>
            <div>
              <h4 className="mb-2">Track Your Order</h4>
              <p className="text-gray-700">Call us at (559) 271-5151 for order updates</p>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}