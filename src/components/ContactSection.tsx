import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Phone, MapPin, Clock, Mail, Star } from "lucide-react";

export function ContactSection() {
  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2>Contact Us</h2>
          <p className="text-gray-600 mt-4">We'd love to hear from you!</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          <Card className="text-center hover:shadow-lg transition-shadow">
            <CardHeader>
              <div className="flex justify-center mb-4">
                <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center">
                  <Phone className="w-8 h-8 text-red-600" />
                </div>
              </div>
              <CardTitle>Phone</CardTitle>
              <CardContent className="pt-4">
                <a href="tel:5592715151" className="text-red-600 hover:underline">
                  (559) 271-5151
                </a>
              </CardContent>
            </CardHeader>
          </Card>

          <Card className="text-center hover:shadow-lg transition-shadow">
            <CardHeader>
              <div className="flex justify-center mb-4">
                <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center">
                  <MapPin className="w-8 h-8 text-red-600" />
                </div>
              </div>
              <CardTitle>Address</CardTitle>
              <CardContent className="pt-4">
                <p className="text-gray-700">
                  3761 W Shaw Avenue<br />
                  Fresno, CA 93711
                </p>
              </CardContent>
            </CardHeader>
          </Card>

          <Card className="text-center hover:shadow-lg transition-shadow">
            <CardHeader>
              <div className="flex justify-center mb-4">
                <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center">
                  <Clock className="w-8 h-8 text-red-600" />
                </div>
              </div>
              <CardTitle>Hours</CardTitle>
              <CardContent className="pt-4">
                <p className="text-gray-700">
                  Open Daily<br />
                  11:00 AM - 9:30 PM
                </p>
              </CardContent>
            </CardHeader>
          </Card>

          <Card className="text-center hover:shadow-lg transition-shadow">
            <CardHeader>
              <div className="flex justify-center mb-4">
                <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center">
                  <Mail className="w-8 h-8 text-red-600" />
                </div>
              </div>
              <CardTitle>Email</CardTitle>
              <CardContent className="pt-4">
                <a href="mailto:info@pizzadelicious.com" className="text-red-600 hover:underline">
                  info@pizzadelicious.com
                </a>
              </CardContent>
            </CardHeader>
          </Card>
        </div>

        <div className="mb-12 text-center">
          <Card className="max-w-md mx-auto hover:shadow-lg transition-shadow">
            <CardHeader>
              <div className="flex justify-center mb-4">
                <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center">
                  <Star className="w-8 h-8 text-yellow-600" fill="currentColor" />
                </div>
              </div>
              <CardTitle>Leave Us a Review</CardTitle>
              <CardContent className="pt-4">
                <p className="text-gray-700 mb-4">
                  Love our pizza? Share your experience with others!
                </p>
                <a 
                  href="https://www.google.com/search?sca_esv=c01e032babacf42f&si=AMgyJEtREmoPL4P1I5IDCfuA8gybfVI2d5Uj7QMwYCZHKDZ-EzTxkrKDPMqSuDHNRtB5ABGrUmVw3XC1t-PjacQrgmIJKhimysgc3JgldtzchA9R_IzOfPYilNOKA0nc_l3Pp0YbwlSr&q=Pizza+Delicious+Reviews&sa=X&ved=2ahUKEwiR0pbk6IeRAxUYDDQIHb26OmEQ0bkNegQIKBAD&biw=1411&bih=702&dpr=1.8"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-red-600 text-white px-6 py-2 rounded-full hover:bg-red-700 transition-colors"
                >
                  Write a Google Review
                </a>
              </CardContent>
            </CardHeader>
          </Card>
        </div>

        <Card className="max-w-4xl mx-auto">
          <CardHeader>
            <CardTitle>Visit Us</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="aspect-video bg-gray-200 rounded-lg overflow-hidden">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3197.7707876!2d-119.8!3d36.81!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzbCsDQ4JzM2LjAiTiAxMTnCsDQ4JzAwLjAiVw!5e0!3m2!1sen!2sus!4v1234567890"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Pizza Delicious Location"
              ></iframe>
            </div>
            <div className="mt-6 p-4 bg-green-50 border border-green-200 rounded-lg">
              <p className="text-gray-700">
                <strong>Getting Here:</strong> We're located on West Shaw Avenue in Fresno. 
                Plenty of parking available. Dine-in, takeout, and delivery options available!
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}