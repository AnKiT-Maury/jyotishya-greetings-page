
import React from 'react';
import { AspectRatio } from "@/components/ui/aspect-ratio";

const GallerySection = () => {
  const gallery = [
    {
      image: "https://img.freepik.com/free-photo/indian-priest-traditional-clothes_23-2149247331.jpg",
      caption: "Acharya Ji performing a consultation"
    },
    {
      image: "https://img.freepik.com/free-photo/medium-shot-man-reading-indoors_23-2149142147.jpg",
      caption: "Studying ancient texts"
    },
    {
      image: "https://img.freepik.com/free-photo/religious-offering-arrangement-with-candle_23-2149064529.jpg",
      caption: "Graha Shanti Puja ceremony"
    },
    {
      image: "https://img.freepik.com/free-photo/arrangement-with-traditional-holi-powder_23-2149088060.jpg",
      caption: "Navgraha Puja materials"
    },
    {
      image: "https://img.freepik.com/free-photo/beautiful-arrangement-with-incense-prayer-beads_23-2149053508.jpg",
      caption: "Special ritual arrangement"
    },
    {
      image: "https://img.freepik.com/free-photo/interior-shot-hindu-temple_53876-43350.jpg",
      caption: "Visit to sacred temple"
    },
    {
      image: "https://img.freepik.com/free-photo/house-model-ganesh-figurine_23-2147817898.jpg",
      caption: "Vaastu consultation for new home"
    },
    {
      image: "https://img.freepik.com/free-photo/medium-shot-woman-praying-with-incenses_23-2149542718.jpg",
      caption: "Client participating in ritual"
    }
  ];

  return (
    <section id="gallery" className="section-padding bg-astro-light-purple/30">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="flex items-center justify-center mb-4">
            <div className="h-px w-8 bg-astro-gold"></div>
            <h2 className="font-serif text-3xl md:text-4xl font-bold mx-4 text-astro-dark-purple">
              🖼️ Image <span className="gold-gradient">Gallery</span>
            </h2>
            <div className="h-px w-8 bg-astro-gold"></div>
          </div>
          <div className="flex justify-center mb-6">
            <div className="h-1 w-20 bg-gradient-to-r from-astro-purple to-astro-gold rounded-full"></div>
          </div>
          <p className="text-gray-700">
            Glimpses of our spiritual journey, consultations, and sacred ceremonies.
          </p>
        </div>
        
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {gallery.map((item, index) => (
            <div key={index} className="group relative overflow-hidden rounded-lg shadow-md">
              <AspectRatio ratio={1 / 1}>
                <img 
                  src={item.image}
                  alt={item.caption}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </AspectRatio>
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                <p className="text-white p-3 text-sm font-medium">{item.caption}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GallerySection;
