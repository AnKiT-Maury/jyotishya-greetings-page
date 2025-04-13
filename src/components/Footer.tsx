
import React from 'react';
import { Star, Facebook, Instagram, Twitter, Youtube } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-astro-dark-purple text-white pt-16 pb-8">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div>
            <div className="flex items-center space-x-2 mb-6">
              <Star className="h-6 w-6 text-astro-gold" fill="#F7D44C" strokeWidth={1} />
              <span className="font-serif text-xl font-semibold text-white">Jyotishya</span>
            </div>
            <p className="text-sm text-gray-300 mb-6">
              Discover your cosmic destiny through ancient Vedic astrology wisdom. Personalized readings that illuminate your path.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-300 hover:text-astro-gold transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-300 hover:text-astro-gold transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-300 hover:text-astro-gold transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-300 hover:text-astro-gold transition-colors">
                <Youtube className="h-5 w-5" />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="font-serif text-lg font-medium mb-6 text-white">Quick Links</h4>
            <ul className="space-y-3">
              <li><a href="#home" className="text-sm text-gray-300 hover:text-astro-gold transition-colors">Home</a></li>
              <li><a href="#about" className="text-sm text-gray-300 hover:text-astro-gold transition-colors">About</a></li>
              <li><a href="#services" className="text-sm text-gray-300 hover:text-astro-gold transition-colors">Services</a></li>
              <li><a href="#testimonials" className="text-sm text-gray-300 hover:text-astro-gold transition-colors">Testimonials</a></li>
              <li><a href="#contact" className="text-sm text-gray-300 hover:text-astro-gold transition-colors">Contact</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-serif text-lg font-medium mb-6 text-white">Services</h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-sm text-gray-300 hover:text-astro-gold transition-colors">Birth Chart Reading</a></li>
              <li><a href="#" className="text-sm text-gray-300 hover:text-astro-gold transition-colors">Relationship Compatibility</a></li>
              <li><a href="#" className="text-sm text-gray-300 hover:text-astro-gold transition-colors">Career Guidance</a></li>
              <li><a href="#" className="text-sm text-gray-300 hover:text-astro-gold transition-colors">Vastu Consultation</a></li>
              <li><a href="#" className="text-sm text-gray-300 hover:text-astro-gold transition-colors">Astrology Lessons</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-serif text-lg font-medium mb-6 text-white">Subscribe</h4>
            <p className="text-sm text-gray-300 mb-4">
              Subscribe to our newsletter for celestial insights and special offers.
            </p>
            <form className="flex">
              <input 
                type="email" 
                placeholder="Your email" 
                className="px-4 py-2 rounded-l-md bg-white/10 border border-white/20 text-white placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-astro-gold text-sm flex-1"
              />
              <button 
                type="submit" 
                className="bg-astro-gold hover:bg-astro-gold/90 text-astro-dark-purple font-medium px-4 py-2 rounded-r-md"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
        
        <div className="border-t border-white/10 pt-8 text-center md:flex md:justify-between md:text-left">
          <p className="text-sm text-gray-400 mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} Jyotishya. All rights reserved.
          </p>
          <div className="flex space-x-4 justify-center md:justify-end">
            <a href="#" className="text-sm text-gray-400 hover:text-astro-gold transition-colors">Privacy Policy</a>
            <a href="#" className="text-sm text-gray-400 hover:text-astro-gold transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
