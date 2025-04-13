
import React, { useState } from 'react';
import { AspectRatio } from "@/components/ui/aspect-ratio";
import NavBar from '@/components/NavBar';
import Footer from '@/components/Footer';
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const GalleryPage = () => {
  const [selectedImage, setSelectedImage] = useState<{image: string, caption: string} | null>(null);
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  const gallery = [
    {
      image: "https://img.freepik.com/free-photo/indian-priest-traditional-clothes_23-2149247331.jpg",
      caption: "आचार्य जी परामर्श देते हुए"
    },
    {
      image: "https://img.freepik.com/free-photo/medium-shot-man-reading-indoors_23-2149142147.jpg",
      caption: "प्राचीन ग्रंथों का अध्ययन"
    },
    {
      image: "https://img.freepik.com/free-photo/religious-offering-arrangement-with-candle_23-2149064529.jpg",
      caption: "ग्रह शांति पूजा समारोह"
    },
    {
      image: "https://img.freepik.com/free-photo/arrangement-with-traditional-holi-powder_23-2149088060.jpg",
      caption: "नवग्रह पूजा सामग्री"
    },
    {
      image: "https://img.freepik.com/free-photo/beautiful-arrangement-with-incense-prayer-beads_23-2149053508.jpg",
      caption: "विशेष अनुष्ठान व्यवस्था"
    },
    {
      image: "https://img.freepik.com/free-photo/interior-shot-hindu-temple_53876-43350.jpg",
      caption: "पवित्र मंदिर में दर्शन"
    },
    {
      image: "https://img.freepik.com/free-photo/house-model-ganesh-figurine_23-2147817898.jpg",
      caption: "नए घर के लिए वास्तु परामर्श"
    },
    {
      image: "https://img.freepik.com/free-photo/medium-shot-woman-praying-with-incenses_23-2149542718.jpg",
      caption: "यजमान अनुष्ठान में भाग लेते हुए"
    },
    {
      image: "https://img.freepik.com/free-photo/man-praying-with-candles_23-2149333518.jpg",
      caption: "विशेष पूजा समारोह"
    },
    {
      image: "https://img.freepik.com/free-photo/spiritual-offering-with-flowers-candle_23-2149064534.jpg",
      caption: "पवित्र पूजा सामग्री व्यवस्था"
    },
    {
      image: "https://img.freepik.com/free-photo/temple-with-golden-decorations_23-2149516353.jpg",
      caption: "विशेष आशीर्वाद के लिए मंदिर यात्रा"
    },
    {
      image: "https://img.freepik.com/free-photo/smiling-indian-man-casual-clothes_23-2149436921.jpg",
      caption: "व्यक्तिगत परामर्श सत्र"
    }
  ];

  const openImageAtIndex = (index: number) => {
    setCurrentIndex(index);
    setSelectedImage(gallery[index]);
  };

  const handlePrevious = () => {
    const newIndex = (currentIndex - 1 + gallery.length) % gallery.length;
    setCurrentIndex(newIndex);
    setSelectedImage(gallery[newIndex]);
  };

  const handleNext = () => {
    const newIndex = (currentIndex + 1) % gallery.length;
    setCurrentIndex(newIndex);
    setSelectedImage(gallery[newIndex]);
  };

  return (
    <div className="min-h-screen bg-[#FFF9F5]">
      <NavBar />
      <main>
        <section className="py-16 md:py-24 bg-gradient-to-b from-[#FFF9F5] to-[#FFF2E6]">
          <div className="container-custom">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h1 className="font-serif text-4xl md:text-5xl font-bold mb-6 text-[#C42126]">
                पवित्र <span className="text-[#FF7722]">गैलरी</span>
              </h1>
              <div className="flex justify-center mb-6">
                <div className="h-1 w-32 bg-gradient-to-r from-[#C42126] to-[#FF7722] rounded-full"></div>
              </div>
              <p className="text-gray-700 md:text-lg">
                आध्यात्मिक क्षणों, पवित्र समारोहों और परामर्श की हमारी संग्रह का अन्वेषण करें। 
                पूर्ण विवरण में देखने के लिए किसी भी छवि पर क्लिक करें।
              </p>
            </div>
            
            <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
              {gallery.map((item, index) => (
                <div
                  key={index}
                  className="group relative overflow-hidden rounded-lg shadow-md cursor-pointer transform transition-transform hover:scale-[1.02]"
                  onClick={() => openImageAtIndex(index)}
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
          <DialogContent className="max-w-4xl w-[90vw] p-1 overflow-hidden bg-black/90 border-[#FF7722]">
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
                <div className="absolute top-1/2 left-0 transform -translate-y-1/2 flex justify-between w-full px-4">
                  <Button 
                    variant="outline" 
                    size="icon" 
                    className="h-10 w-10 rounded-full bg-white/20 hover:bg-white/40 border-none"
                    onClick={(e) => {
                      e.stopPropagation();
                      handlePrevious();
                    }}
                  >
                    <ChevronLeft className="h-6 w-6 text-white" />
                  </Button>
                  <Button 
                    variant="outline" 
                    size="icon" 
                    className="h-10 w-10 rounded-full bg-white/20 hover:bg-white/40 border-none"
                    onClick={(e) => {
                      e.stopPropagation();
                      handleNext();
                    }}
                  >
                    <ChevronRight className="h-6 w-6 text-white" />
                  </Button>
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
