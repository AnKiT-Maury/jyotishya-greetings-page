
import React, { useState } from 'react';
import { Phone, Mail, MapPin, Calendar, Send, Facebook, Instagram, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/components/ui/use-toast";

const ContactSection = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real application, you would send the form data to a server
    console.log('Form submitted:', formData);
    toast({
      title: "Message Sent!",
      description: "We will get back to you within 24 hours.",
    });
    setFormData({
      name: '',
      email: '',
      phone: '',
      message: '',
    });
  };

  return (
    <section id="contact" className="section-padding celestial-bg">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="flex items-center justify-center mb-4">
            <div className="h-px w-8 bg-astro-gold"></div>
            <h2 className="font-serif text-3xl md:text-4xl font-bold mx-4 text-astro-dark-purple">
              📞 Contact <span className="gold-gradient">Us</span>
            </h2>
            <div className="h-px w-8 bg-astro-gold"></div>
          </div>
          <div className="flex justify-center mb-6">
            <div className="h-1 w-20 bg-gradient-to-r from-astro-purple to-astro-gold rounded-full"></div>
          </div>
          <p className="text-gray-700">
            Reach out to schedule a personal consultation or ask any questions about our services.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="order-2 lg:order-1">
            <div className="bg-white p-8 rounded-lg shadow-lg cosmic-border">
              <h3 className="font-serif text-2xl font-semibold mb-6 text-astro-dark-purple">Send a Message</h3>
              <form onSubmit={handleSubmit}>
                <div className="space-y-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                      Your Name
                    </label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Enter your full name"
                      className="w-full"
                      required
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                      Email Address
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="Enter your email"
                      className="w-full"
                      required
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                      Phone Number
                    </label>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="Enter your phone number"
                      className="w-full"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                      Your Message
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="How can we help you?"
                      className="w-full"
                      rows={4}
                      required
                    />
                  </div>
                  
                  <Button 
                    type="submit" 
                    className="w-full bg-gradient-to-r from-astro-purple to-astro-dark-purple hover:opacity-90"
                  >
                    <Send className="h-4 w-4 mr-2" />
                    Send Message
                  </Button>
                </div>
              </form>
            </div>
          </div>
          
          <div className="order-1 lg:order-2">
            <h3 className="font-serif text-2xl font-semibold mb-6 text-astro-dark-purple">Contact Information</h3>
            
            <div className="space-y-6 mb-8">
              <div className="flex items-start">
                <div className="bg-astro-light-purple/50 p-3 rounded-full mr-4">
                  <Phone className="h-6 w-6 text-astro-purple" />
                </div>
                <div>
                  <h4 className="font-medium text-astro-dark-purple">Phone</h4>
                  <p className="text-gray-600">+91 98765 43210</p>
                  <a href="https://wa.me/919876543210" className="text-astro-purple hover:underline flex items-center mt-1">
                    <span>WhatsApp</span>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" viewBox="0 0 24 24" fill="#6E59A5">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                    </svg>
                  </a>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-astro-light-purple/50 p-3 rounded-full mr-4">
                  <Mail className="h-6 w-6 text-astro-purple" />
                </div>
                <div>
                  <h4 className="font-medium text-astro-dark-purple">Email</h4>
                  <p className="text-gray-600">contact@jyotishya.com</p>
                  <p className="text-gray-600">acharya@jyotishya.com</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-astro-light-purple/50 p-3 rounded-full mr-4">
                  <MapPin className="h-6 w-6 text-astro-purple" />
                </div>
                <div>
                  <h4 className="font-medium text-astro-dark-purple">Office</h4>
                  <p className="text-gray-600">123 Celestial Avenue, Spiritual District</p>
                  <p className="text-gray-600">New Delhi, 110001, India</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-astro-light-purple/50 p-3 rounded-full mr-4">
                  <Clock className="h-6 w-6 text-astro-purple" />
                </div>
                <div>
                  <h4 className="font-medium text-astro-dark-purple">Consultation Hours</h4>
                  <p className="text-gray-600">Monday - Saturday: 10:00 AM - 6:00 PM</p>
                  <p className="text-gray-600">Sunday: By appointment only</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-astro-light-purple/50 p-3 rounded-full mr-4">
                  <Calendar className="h-6 w-6 text-astro-purple" />
                </div>
                <div>
                  <h4 className="font-medium text-astro-dark-purple">Social Media</h4>
                  <div className="flex space-x-4 mt-2">
                    <a href="#" className="bg-astro-light-purple p-2 rounded-full hover:bg-astro-purple/20 transition-colors">
                      <Facebook className="h-5 w-5 text-astro-dark-purple" />
                    </a>
                    <a href="#" className="bg-astro-light-purple p-2 rounded-full hover:bg-astro-purple/20 transition-colors">
                      <Instagram className="h-5 w-5 text-astro-dark-purple" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="rounded-lg overflow-hidden shadow-lg h-[300px]">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d448193.95103899026!2d76.76355258499248!3d28.644287156162377!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cfd5b347eb62d%3A0x37205b715389640!2sDelhi!5e0!3m2!1sen!2sin!4v1681744799991!5m2!1sen!2sin" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
