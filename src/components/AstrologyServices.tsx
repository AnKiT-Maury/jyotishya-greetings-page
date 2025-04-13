
import React from 'react';
import { Star, Calendar, Users, Briefcase, GraduationCap, Heart, Building } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const AstrologyServices = () => {
  const services = [
    {
      icon: <Calendar className="h-10 w-10 text-astro-purple" />,
      title: "Vedic Astrology",
      description: "Comprehensive birth chart analysis revealing your personality, strengths, weaknesses, and life path based on ancient Vedic wisdom."
    },
    {
      icon: <Users className="h-10 w-10 text-astro-purple" />,
      title: "Child Astrology",
      description: "Discover your child's natural talents, potential challenges, and guidance for their optimal development and education."
    },
    {
      icon: <Heart className="h-10 w-10 text-astro-purple" />,
      title: "Marriage Astrology",
      description: "Pre-marital compatibility analysis and guidance for harmonious relationships and family life."
    },
    {
      icon: <Building className="h-10 w-10 text-astro-purple" />,
      title: "Business Astrology",
      description: "Insights into favorable timing for business decisions, partnerships, investments, and enterprise growth strategies."
    },
    {
      icon: <Briefcase className="h-10 w-10 text-astro-purple" />,
      title: "Career Astrology",
      description: "Career path analysis to identify suitable professions, timing for career moves, and strategies for professional success."
    },
    {
      icon: <GraduationCap className="h-10 w-10 text-astro-purple" />,
      title: "Kundli Milan",
      description: "Traditional horoscope matching for marriage compatibility, analyzing 36 gunas and providing remedies if needed."
    }
  ];

  return (
    <section id="astrology-services" className="section-padding">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="flex items-center justify-center mb-4">
            <div className="h-px w-8 bg-astro-gold"></div>
            <h2 className="font-serif text-3xl md:text-4xl font-bold mx-4 text-astro-dark-purple">
              🔮 Astrology <span className="gold-gradient">Services</span>
            </h2>
            <div className="h-px w-8 bg-astro-gold"></div>
          </div>
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
              className="overflow-hidden transition-all duration-300 hover:shadow-lg hover:border-astro-purple cosmic-border"
            >
              <CardContent className="pt-6">
                <div className="mb-5">{service.icon}</div>
                <h3 className="font-serif text-xl font-semibold mb-3 text-astro-dark-purple">{service.title}</h3>
                <p className="text-gray-700 mb-4">{service.description}</p>
                <div className="flex items-center mt-4">
                  <Star className="h-4 w-4 text-astro-gold mr-1" fill="#F7D44C" strokeWidth={1} />
                  <Star className="h-4 w-4 text-astro-gold mr-1" fill="#F7D44C" strokeWidth={1} />
                  <Star className="h-4 w-4 text-astro-gold mr-1" fill="#F7D44C" strokeWidth={1} />
                  <Star className="h-4 w-4 text-astro-gold mr-1" fill="#F7D44C" strokeWidth={1} />
                  <Star className="h-4 w-4 text-astro-gold mr-1" fill="#F7D44C" strokeWidth={1} />
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AstrologyServices;
