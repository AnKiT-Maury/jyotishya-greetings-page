
import React from 'react';
import { Star, Quote } from "lucide-react";

const TestimonialsSection = () => {
  const testimonials = [
    {
      name: "Priya Sharma",
      location: "Mumbai, India",
      image: "https://img.freepik.com/free-photo/young-beautiful-woman-pink-warm-sweater-natural-look-smiling-portrait-isolated-long-hair_285396-896.jpg",
      text: "Pandit Sharma's birth chart reading was incredibly accurate. His insights helped me make important career decisions that have completely transformed my professional life.",
      rating: 5
    },
    {
      name: "Raj Mehta",
      location: "New Delhi, India",
      image: "https://img.freepik.com/free-photo/young-bearded-man-with-striped-shirt_273609-5677.jpg",
      text: "The relationship compatibility reading was eye-opening. It helped my partner and I understand each other better and work through our challenges with deeper compassion.",
      rating: 5
    },
    {
      name: "Anjali Patel",
      location: "Bangalore, India",
      image: "https://img.freepik.com/free-photo/cheerful-indian-businessman-smiling-closeup-portrait-jobs-career-campaign_53876-129417.jpg",
      text: "The Vastu consultation transformed our home's energy. We've noticed a remarkable improvement in family harmony and financial stability since implementing the suggested changes.",
      rating: 4
    },
    {
      name: "Vikram Singh",
      location: "Toronto, Canada",
      image: "https://img.freepik.com/free-photo/portrait-white-man-isolated_53876-40306.jpg",
      text: "Despite being skeptical at first, I was blown away by the accuracy of my career reading. Pandit Sharma predicted career changes that came to fruition exactly as he described.",
      rating: 5
    }
  ];

  return (
    <section id="testimonials" className="section-padding bg-astro-dark-purple/5">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="font-serif text-3xl md:text-4xl font-bold mb-4 text-astro-dark-purple">
            Client <span className="gold-gradient">Testimonials</span>
          </h2>
          <div className="flex justify-center mb-6">
            <div className="h-1 w-20 bg-gradient-to-r from-astro-purple to-astro-gold rounded-full"></div>
          </div>
          <p className="text-gray-700">
            Don't just take our word for it. Hear from people whose lives have been transformed through cosmic guidance.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index} 
              className="bg-white p-6 rounded-lg shadow-md relative border border-astro-light-purple/50"
            >
              <Quote className="absolute top-6 right-6 h-12 w-12 text-astro-light-purple opacity-20" />
              <div className="flex items-center mb-4">
                <img 
                  src={testimonial.image} 
                  alt={testimonial.name} 
                  className="w-14 h-14 rounded-full mr-4 object-cover"
                />
                <div>
                  <h4 className="font-serif font-medium text-astro-dark-purple">{testimonial.name}</h4>
                  <p className="text-sm text-gray-600">{testimonial.location}</p>
                </div>
              </div>
              
              <div className="flex mb-3">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star 
                    key={i} 
                    className={`h-4 w-4 ${i < testimonial.rating ? 'text-astro-gold' : 'text-gray-300'}`}
                    fill={i < testimonial.rating ? '#F7D44C' : 'none'}
                    strokeWidth={1}
                  />
                ))}
              </div>
              
              <p className="text-gray-700">{testimonial.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
