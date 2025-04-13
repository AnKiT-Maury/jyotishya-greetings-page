
import React, { useState, useEffect } from 'react';
import { cn } from "@/lib/utils";
import { Menu, X, Moon, Star, Sun } from "lucide-react";
import { Button } from "@/components/ui/button";

const NavBar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsScrolled(scrollPosition > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);

  return (
    <header 
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled ? "bg-white/95 backdrop-blur-sm shadow-md py-3" : "bg-transparent py-5"
      )}
    >
      <div className="container-custom">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Star className="h-6 w-6 text-astro-gold" fill="#F7D44C" strokeWidth={1} />
            <span className="font-serif text-xl md:text-2xl font-semibold">Jyotishya</span>
          </div>
          
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#home" className="text-sm text-astro-dark-purple hover:text-astro-purple transition-colors">Home</a>
            <a href="#about" className="text-sm text-astro-dark-purple hover:text-astro-purple transition-colors">About</a>
            <a href="#services" className="text-sm text-astro-dark-purple hover:text-astro-purple transition-colors">Services</a>
            <a href="#testimonials" className="text-sm text-astro-dark-purple hover:text-astro-purple transition-colors">Testimonials</a>
            <a href="#contact" className="text-sm text-astro-dark-purple hover:text-astro-purple transition-colors">Contact</a>
          </nav>
          
          <div className="flex items-center space-x-4">
            <Button 
              variant="ghost" 
              size="sm" 
              className="hidden md:flex items-center space-x-2 bg-astro-light-purple/50 hover:bg-astro-light-purple"
            >
              <Sun className="h-4 w-4 text-astro-gold" />
              <span className="text-astro-dark-purple text-xs">Light Reading</span>
            </Button>
            <Button 
              size="sm" 
              className={cn(
                "hidden md:flex items-center space-x-2 bg-gradient-to-r from-astro-purple to-astro-dark-purple hover:opacity-90 transition-opacity",
              )}
            >
              <Moon className="h-4 w-4" />
              <span>Book Reading</span>
            </Button>
            
            <button
              onClick={toggleMobileMenu}
              className="md:hidden text-astro-dark-purple"
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-white shadow-lg border-t">
          <div className="flex flex-col py-4 px-6 space-y-4">
            <a href="#home" className="text-sm py-2" onClick={toggleMobileMenu}>Home</a>
            <a href="#about" className="text-sm py-2" onClick={toggleMobileMenu}>About</a>
            <a href="#services" className="text-sm py-2" onClick={toggleMobileMenu}>Services</a>
            <a href="#testimonials" className="text-sm py-2" onClick={toggleMobileMenu}>Testimonials</a>
            <a href="#contact" className="text-sm py-2" onClick={toggleMobileMenu}>Contact</a>
            <Button 
              size="sm" 
              className="w-full bg-gradient-to-r from-astro-purple to-astro-dark-purple"
            >
              Book Reading
            </Button>
          </div>
        </div>
      )}
    </header>
  );
};

export default NavBar;
