
import React from 'react';
import { Star, Moon, Sun, ArrowRight } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const PujaSection = () => {
  const pujas = [
    {
      title: "Manglik Dosh Nivaran",
      description: "Sacred rituals to mitigate the negative effects of Mangal (Mars) placement in the birth chart, especially for marriage compatibility.",
      image: "https://img.freepik.com/free-photo/religious-offering-arrangement-with-candle_23-2149064529.jpg"
    },
    {
      title: "Graha Shanti Puja",
      description: "Specialized rituals to pacify the nine planets (Navagraha) and harmonize their influences for prosperity and peace.",
      image: "https://img.freepik.com/free-photo/beautiful-arrangement-with-incense-prayer-beads_23-2149053508.jpg"
    },
    {
      title: "Navgraha Puja",
      description: "Complete worship of all nine celestial bodies to balance their energies and remove obstacles in life.",
      image: "https://img.freepik.com/free-photo/arrangement-with-traditional-holi-powder_23-2149088060.jpg"
    }
  ];

  return (
    <section id="puja-section" className="section-padding constellation">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="flex items-center justify-center mb-4">
            <div className="h-px w-8 bg-astro-gold"></div>
            <h2 className="font-serif text-3xl md:text-4xl font-bold mx-4 text-astro-dark-purple">
              🕉️ Puja & <span className="gold-gradient">Anusthan</span>
            </h2>
            <div className="h-px w-8 bg-astro-gold"></div>
          </div>
          <div className="flex justify-center mb-6">
            <div className="h-1 w-20 bg-gradient-to-r from-astro-purple to-astro-gold rounded-full"></div>
          </div>
          <p className="text-gray-700">
            Ancient Vedic rituals performed with precision to resolve planetary influences and bring harmony to your life.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {pujas.map((puja, index) => (
            <Card key={index} className="overflow-hidden hover:shadow-lg transition-all cosmic-border">
              <div className="relative h-48">
                <img 
                  src={puja.image}
                  alt={puja.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute bottom-0 left-0 bg-gradient-to-t from-black/70 to-transparent w-full h-1/2"></div>
              </div>
              <CardContent className="relative">
                <div className="absolute -top-10 left-4 bg-white p-2 rounded-full shadow-lg">
                  {index === 0 ? (
                    <Moon className="h-6 w-6 text-astro-purple" />
                  ) : index === 1 ? (
                    <Sun className="h-6 w-6 text-astro-gold" />
                  ) : (
                    <Star className="h-6 w-6 text-astro-purple" />
                  )}
                </div>
                <h3 className="font-serif text-xl font-semibold mb-3 mt-3 text-astro-dark-purple">{puja.title}</h3>
                <p className="text-gray-700 text-sm mb-4">{puja.description}</p>
                <Button 
                  variant="outline"
                  className="w-full mt-2 border-astro-purple text-astro-dark-purple hover:bg-astro-light-purple/50"
                >
                  <span>Learn More</span>
                  <ArrowRight className="h-4 w-4 ml-2" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <h3 className="font-serif text-xl font-semibold mb-4 text-astro-dark-purple">Additional Pujas & Rituals</h3>
          <div className="flex flex-wrap justify-center gap-4">
            {["Rudra Abhishek", "Kaal Sarp Dosh Nivaran", "Pitra Dosh Shanti", "Laxmi Puja", "Saraswati Puja", "Ganesh Puja"].map((item, index) => (
              <span key={index} className="bg-white px-4 py-2 rounded-full text-sm text-astro-dark-purple border border-astro-light-purple">
                {item}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PujaSection;
