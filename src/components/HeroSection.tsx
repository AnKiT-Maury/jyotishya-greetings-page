
import React from 'react';
import { Star, Moon, Sun } from "lucide-react";
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <section id="home" className="min-h-screen pt-24 pb-16 flex items-center celestial-bg constellation">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1">
            <div className="mb-6 flex items-center">
              <div className="flex space-x-1">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star key={star} className="h-4 w-4 text-astro-gold" fill="#F7D44C" strokeWidth={1} />
                ))}
              </div>
              <span className="text-astro-dark-purple text-sm ml-2">Trusted by 5000+ clients</span>
            </div>
            
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight text-astro-dark-purple">
              Discover Your Cosmic <span className="gold-gradient">Destiny</span> Through Ancient Wisdom
            </h1>
            
            <p className="text-lg mb-8 text-gray-700 max-w-lg">
              Unlock the secrets of your future with authentic Vedic astrology readings from Pandit Sharma, a renowned 7th generation astrologer.
            </p>
            
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-astro-purple to-astro-dark-purple hover:opacity-90 transition-opacity"
              >
                Book Your Reading
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                className="border-astro-purple text-astro-dark-purple hover:bg-astro-light-purple/50"
              >
                Explore Services
              </Button>
            </div>
            
            <div className="mt-12 flex items-center space-x-6">
              <div className="flex -space-x-4">
                {[1, 2, 3, 4].map((avatar) => (
                  <div 
                    key={avatar}
                    className="w-10 h-10 rounded-full border-2 border-white bg-astro-light-purple flex items-center justify-center overflow-hidden"
                  >
                    <span className="text-astro-dark-purple text-xs font-medium">
                      {String.fromCharCode(64 + avatar)}
                    </span>
                  </div>
                ))}
              </div>
              <div>
                <p className="font-medium text-astro-dark-purple">250+ readings</p>
                <p className="text-sm text-gray-600">this month</p>
              </div>
            </div>
          </div>
          
          <div className="order-1 lg:order-2 flex justify-center">
            <div className="relative">
              <div className="w-64 h-64 sm:w-80 sm:h-80 rounded-full bg-gradient-to-br from-astro-light-purple to-astro-purple opacity-20 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 animate-pulse-light"></div>
              <div className="w-72 h-72 sm:w-96 sm:h-96 relative z-10">
                <img 
                  src="https://img.freepik.com/free-photo/indian-priest-traditional-clothes_23-2149247331.jpg" 
                  alt="Pandit Sharma - Vedic Astrologer" 
                  className="w-full h-full object-cover rounded-full border-4 border-astro-light-purple"
                />
                
                <div className="absolute -top-4 -right-4 w-20 h-20 bg-white rounded-full shadow-lg p-4 flex items-center justify-center animate-float">
                  <Moon className="h-10 w-10 text-astro-purple" fill="#E5DEFF" strokeWidth={1} />
                </div>
                
                <div className="absolute -bottom-2 -left-4 w-16 h-16 bg-white rounded-full shadow-lg p-3 flex items-center justify-center animate-float" style={{ animationDelay: "2s" }}>
                  <Sun className="h-8 w-8 text-astro-gold" fill="#FDEDC2" strokeWidth={1} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
