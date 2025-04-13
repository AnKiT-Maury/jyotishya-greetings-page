
import React, { useState } from 'react';
import { Phone, Mail, MapPin, Calendar, Send } from "lucide-react";
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
          <h2 className="font-serif text-3xl md:text-4xl font-bold mb-4 text-astro-dark-purple">
            Connect for <span className="gold-gradient">Cosmic Guidance</span>
          </h2>
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
                  <p className="text-gray-600">+91 98765 43211</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-astro-light-purple/50 p-3 rounded-full mr-4">
                  <Mail className="h-6 w-6 text-astro-purple" />
                </div>
                <div>
                  <h4 className="font-medium text-astro-dark-purple">Email</h4>
                  <p className="text-gray-600">contact@jyotishya.com</p>
                  <p className="text-gray-600">pandit.sharma@jyotishya.com</p>
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
                  <Calendar className="h-6 w-6 text-astro-purple" />
                </div>
                <div>
                  <h4 className="font-medium text-astro-dark-purple">Consultation Hours</h4>
                  <p className="text-gray-600">Monday - Saturday: 10:00 AM - 7:00 PM</p>
                  <p className="text-gray-600">Sunday: By appointment only</p>
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
