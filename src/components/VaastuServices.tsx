
import React from 'react';
import { Home, Building, DoorOpen, MapPin } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const VaastuServices = () => {
  const services = [
    {
      icon: <Home className="h-10 w-10 text-astro-purple" />,
      title: "Vaastu Shastra Overview",
      description: "Learn about the ancient architectural science that balances the five elements to create harmony and positive energy in your spaces."
    },
    {
      icon: <DoorOpen className="h-10 w-10 text-astro-purple" />,
      title: "Vaastu for Flat and Home",
      description: "Personalized Vaastu analysis for your home to enhance prosperity, health, relationships, and overall well-being."
    },
    {
      icon: <Building className="h-10 w-10 text-astro-purple" />,
      title: "Vaastu for Office and Business",
      description: "Specialized Vaastu solutions for commercial spaces to boost productivity, profit, and business growth."
    },
    {
      icon: <MapPin className="h-10 w-10 text-astro-purple" />,
      title: "Vaastu Consultation",
      description: "Available both online and in-person, our Vaastu consultations include detailed remedies and implementation guidance."
    }
  ];

  return (
    <section id="vaastu-services" className="section-padding bg-astro-light-purple/30">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="flex items-center justify-center mb-4">
            <div className="h-px w-8 bg-astro-gold"></div>
            <h2 className="font-serif text-3xl md:text-4xl font-bold mx-4 text-astro-dark-purple">
              🏡 Vaastu <span className="gold-gradient">Services</span>
            </h2>
            <div className="h-px w-8 bg-astro-gold"></div>
          </div>
          <div className="flex justify-center mb-6">
            <div className="h-1 w-20 bg-gradient-to-r from-astro-purple to-astro-gold rounded-full"></div>
          </div>
          <p className="text-gray-700">
            Balance the elemental energies in your living and working spaces with our expert Vaastu consultation services.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {services.map((service, index) => (
            <Card 
              key={index} 
              className="overflow-hidden transition-all duration-300 hover:shadow-lg hover:border-astro-purple cosmic-border"
            >
              <CardContent className="pt-6">
                <div className="mb-5">{service.icon}</div>
                <h3 className="font-serif text-xl font-semibold mb-3 text-astro-dark-purple">{service.title}</h3>
                <p className="text-gray-700">{service.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="mt-12 bg-white p-6 rounded-lg shadow-md cosmic-border">
          <h3 className="font-serif text-xl font-semibold mb-4 text-astro-dark-purple text-center">Before & After Success Stories</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-medium text-astro-dark-purple mb-2">Mr. Sharma's Business</h4>
              <p className="text-sm text-gray-600 mb-3">
                After implementing our Vaastu suggestions, Mr. Sharma's retail business saw a 40% increase in monthly revenue within just three months.
              </p>
            </div>
            <div>
              <h4 className="font-medium text-astro-dark-purple mb-2">The Patel Family</h4>
              <p className="text-sm text-gray-600 mb-3">
                The Patel family experienced improved health and family harmony after making simple Vaastu adjustments to their home's layout.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VaastuServices;
