
import React from 'react';
import { Star, Award, Users, Book } from "lucide-react";

const AboutSection = () => {
  return (
    <section id="about" className="section-padding bg-astro-light-purple/30 cosmic-border">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="font-serif text-3xl md:text-4xl font-bold mb-4 text-astro-dark-purple">
            About <span className="gold-gradient">Pandit Sharma</span>
          </h2>
          <div className="flex justify-center mb-6">
            <div className="h-1 w-20 bg-gradient-to-r from-astro-purple to-astro-gold rounded-full"></div>
          </div>
          <p className="text-gray-700">
            A seventh-generation astrologer carrying forward the ancient tradition of Vedic astrology with modern insights.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
          <div className="lg:col-span-2 flex justify-center lg:justify-start">
            <div className="relative">
              <img 
                src="https://img.freepik.com/free-photo/medium-shot-man-reading-indoors_23-2149142147.jpg" 
                alt="Pandit Sharma studying ancient texts" 
                className="rounded-lg w-full max-w-md h-auto object-cover shadow-lg"
              />
              <div className="absolute bottom-4 right-4 bg-white/90 backdrop-blur-sm p-3 rounded-lg shadow-md">
                <div className="flex items-center space-x-2">
                  <Star className="h-5 w-5 text-astro-gold" fill="#F7D44C" />
                  <span className="font-medium text-astro-dark-purple">30+ years experience</span>
                </div>
              </div>
            </div>
          </div>
          
          <div className="lg:col-span-3">
            <h3 className="font-serif text-2xl font-semibold mb-4 text-astro-dark-purple">
              Carrying forward the sacred tradition of Jyotish
            </h3>
            
            <p className="mb-4 text-gray-700">
              Born into a family of renowned astrologers from Varanasi, Pandit Sharma has been studying the cosmic sciences since childhood under the guidance of his father and grandfather, both masters of Vedic astrology.
            </p>
            
            <p className="mb-6 text-gray-700">
              Having completed formal education in Sanskrit and Vedic studies from Banaras Hindu University, he combines traditional knowledge with contemporary understanding to provide accurate readings that have helped thousands transform their lives.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <Award className="h-10 w-10 text-astro-purple mb-4" />
                <h4 className="font-serif text-lg font-medium mb-2">Certified Expert</h4>
                <p className="text-gray-600 text-sm">Certified by the Indian Council of Astrological Sciences</p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md">
                <Users className="h-10 w-10 text-astro-purple mb-4" />
                <h4 className="font-serif text-lg font-medium mb-2">Global Clientele</h4>
                <p className="text-gray-600 text-sm">Trusted by clients across 40+ countries worldwide</p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md">
                <Book className="h-10 w-10 text-astro-purple mb-4" />
                <h4 className="font-serif text-lg font-medium mb-2">Published Author</h4>
                <p className="text-gray-600 text-sm">Author of 5 books on Vedic astrology and spiritual sciences</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
