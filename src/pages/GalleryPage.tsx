
import React, { useState } from 'react';
import { AspectRatio } from "@/components/ui/aspect-ratio";
import NavBar from '@/components/NavBar';
import Footer from '@/components/Footer';
import { Dialog, DialogContent } from "@/components/ui/dialog";

const GalleryPage = () => {
  const [selectedImage, setSelectedImage] = useState<{image: string, caption: string} | null>(null);

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
    },
    {
      image: "https://img.freepik.com/free-photo/man-praying-with-candles_23-2149333518.jpg",
      caption: "Special puja ceremony"
    },
    {
      image: "https://img.freepik.com/free-photo/spiritual-offering-with-flowers-candle_23-2149064534.jpg",
      caption: "Sacred offering arrangement"
    },
    {
      image: "https://img.freepik.com/free-photo/temple-with-golden-decorations_23-2149516353.jpg",
      caption: "Temple visit for special blessing"
    },
    {
      image: "https://img.freepik.com/free-photo/smiling-indian-man-casual-clothes_23-2149436921.jpg",
      caption: "Personal consultation session"
    }
  ];

  return (
    <div className="min-h-screen bg-[#FFF9F5]">
      <NavBar />
      <main>
        <section className="py-16 md:py-24 bg-gradient-to-b from-[#FFF9F5] to-[#FFF2E6]">
          <div className="container-custom">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h1 className="font-serif text-4xl md:text-5xl font-bold mb-6 text-[#C42126]">
                Sacred <span className="text-[#FF7722]">Gallery</span>
              </h1>
              <div className="flex justify-center mb-6">
                <div className="h-1 w-32 bg-gradient-to-r from-[#C42126] to-[#FF7722] rounded-full"></div>
              </div>
              <p className="text-gray-700 md:text-lg">
                Explore our collection of spiritual moments, sacred ceremonies, and consultations. 
                Click on any image to view in full detail.
              </p>
            </div>
            
            <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
              {gallery.map((item, index) => (
                <div
                  key={index}
                  className="group relative overflow-hidden rounded-lg shadow-md cursor-pointer transform transition-transform hover:scale-[1.02]"
                  onClick={() => setSelectedImage(item)}
                >
                  <AspectRatio ratio={1 / 1}>
                    <img 
                      src={item.image}
                      alt={item.caption}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                  </AspectRatio>
                  <div className="absolute inset-0 bg-gradient-to-t from-[#C42126]/70 via-[#C42126]/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                    <p className="text-white p-4 text-sm font-medium">{item.caption}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <Dialog open={!!selectedImage} onOpenChange={(open) => !open && setSelectedImage(null)}>
          <DialogContent className="max-w-4xl w-[90vw] p-0 overflow-hidden bg-black/90 border-[#FF7722]">
            {selectedImage && (
              <div className="relative">
                <img 
                  src={selectedImage.image}
                  alt={selectedImage.caption}
                  className="w-full h-auto max-h-[80vh] object-contain"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4">
                  <p className="text-white text-lg font-medium">{selectedImage.caption}</p>
                </div>
              </div>
            )}
          </DialogContent>
        </Dialog>
      </main>
      <Footer />
    </div>
  );
};

export default GalleryPage;
