
import React from 'react';
import { Star, ArrowRight, Calendar, Users, Home, Heart, Briefcase, GraduationCap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";

const ServicesSection = () => {
  const services = [
    {
      icon: <Calendar className="h-10 w-10 text-astro-purple" />,
      title: "Birth Chart Reading",
      description: "Detailed analysis of your birth chart revealing your personality, strengths, weaknesses, and life path.",
      pricing: "$99",
      popular: true
    },
    {
      icon: <Heart className="h-10 w-10 text-astro-purple" />,
      title: "Relationship Compatibility",
      description: "Discover your compatibility with your partner and learn how to navigate challenges together.",
      pricing: "$129",
      popular: false
    },
    {
      icon: <Briefcase className="h-10 w-10 text-astro-purple" />,
      title: "Career Guidance",
      description: "Get insights into your professional path and discover the best career options aligned with your cosmic blueprint.",
      pricing: "$119",
      popular: false
    },
    {
      icon: <Home className="h-10 w-10 text-astro-purple" />,
      title: "Vastu Consultation",
      description: "Balance the energies in your home or workplace with ancient Vastu principles for prosperity and harmony.",
      pricing: "$149",
      popular: false
    },
    {
      icon: <GraduationCap className="h-10 w-10 text-astro-purple" />,
      title: "Astrology Lessons",
      description: "Learn the fundamentals of Vedic astrology through personalized one-on-one lessons.",
      pricing: "$199",
      popular: false
    },
    {
      icon: <Users className="h-10 w-10 text-astro-purple" />,
      title: "Family Harmony Reading",
      description: "Address family dynamics and learn how to foster better relationships with your loved ones.",
      pricing: "$169",
      popular: false
    }
  ];

  return (
    <section id="services" className="section-padding">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="font-serif text-3xl md:text-4xl font-bold mb-4 text-astro-dark-purple">
            Astrological <span className="gold-gradient">Services</span>
          </h2>
          <div className="flex justify-center mb-6">
            <div className="h-1 w-20 bg-gradient-to-r from-astro-purple to-astro-gold rounded-full"></div>
          </div>
          <p className="text-gray-700">
            Discover the cosmic insights that will guide you through life's journey with our personalized astrological services.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <Card 
              key={index} 
              className={`relative overflow-hidden transition-all duration-300 hover:shadow-lg ${
                service.popular ? 'border-astro-gold shadow-md' : 'hover:border-astro-purple'
              }`}
            >
              {service.popular && (
                <div className="absolute top-5 right-5 bg-astro-gold text-white text-xs font-semibold px-2 py-1 rounded-full">
                  Most Popular
                </div>
              )}
              <CardContent className="pt-6">
                <div className="mb-5">{service.icon}</div>
                <h3 className="font-serif text-xl font-semibold mb-3 text-astro-dark-purple">{service.title}</h3>
                <p className="text-gray-700 mb-4 text-sm">{service.description}</p>
                <div className="flex items-baseline mb-4">
                  <span className="text-2xl font-bold text-astro-dark-purple">{service.pricing}</span>
                  <span className="text-gray-600 ml-1">/ session</span>
                </div>
                <div className="space-y-2">
                  {[1, 2, 3].map((item) => (
                    <div key={item} className="flex items-center">
                      <Star className="h-4 w-4 text-astro-gold mr-2" fill="#F7D44C" strokeWidth={1} />
                      <span className="text-sm text-gray-700">Feature point {item}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
              <CardFooter>
                <Button 
                  className={`w-full ${
                    service.popular 
                      ? 'bg-gradient-to-r from-astro-gold to-astro-gold/80 hover:opacity-90 text-white' 
                      : 'bg-gradient-to-r from-astro-purple to-astro-dark-purple hover:opacity-90'
                  }`}
                >
                  <span>Book Now</span>
                  <ArrowRight className="h-4 w-4 ml-2" />
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
