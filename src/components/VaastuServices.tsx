
import React from 'react';
import { Home, Building, DoorOpen, MapPin } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const VaastuServices = () => {
  const services = [
    {
      icon: <Home className="h-10 w-10 text-astro-purple" />,
      title: "वास्तु शास्त्र परिचय",
      description: "प्राचीन वास्तु विज्ञान के बारे में जानें जो आपके स्थानों में सद्भाव और सकारात्मक ऊर्जा बनाने के लिए पांच तत्वों को संतुलित करता है।"
    },
    {
      icon: <DoorOpen className="h-10 w-10 text-astro-purple" />,
      title: "फ्लैट और घर के लिए वास्तु",
      description: "आपके घर के लिए व्यक्तिगत वास्तु विश्लेषण जो समृद्धि, स्वास्थ्य, रिश्तों और समग्र कल्याण को बढ़ाता है।"
    },
    {
      icon: <Building className="h-10 w-10 text-astro-purple" />,
      title: "कार्यालय और व्यापार के लिए वास्तु",
      description: "व्यावसायिक स्थानों के लिए विशेष वास्तु समाधान जो उत्पादकता, लाभ और व्यापार विकास को बढ़ावा देते हैं।"
    },
    {
      icon: <MapPin className="h-10 w-10 text-astro-purple" />,
      title: "वास्तु परामर्श",
      description: "ऑनलाइन और व्यक्तिगत रूप से उपलब्ध, हमारे वास्तु परामर्श में विस्तृत उपाय और कार्यान्वयन मार्गदर्शन शामिल हैं।"
    }
  ];

  return (
    <section id="vaastu-services" className="section-padding bg-astro-light-purple/30">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="flex items-center justify-center mb-4">
            <div className="h-px w-8 bg-astro-gold"></div>
            <h2 className="font-serif text-3xl md:text-4xl font-bold mx-4 text-astro-dark-purple">
              🏡 वास्तु <span className="gold-gradient">सेवाएं</span>
            </h2>
            <div className="h-px w-8 bg-astro-gold"></div>
          </div>
          <div className="flex justify-center mb-6">
            <div className="h-1 w-20 bg-gradient-to-r from-astro-purple to-astro-gold rounded-full"></div>
          </div>
          <p className="text-gray-700">
            हमारी विशेषज्ञ वास्तु परामर्श सेवाओं के साथ अपने रहने और काम करने के स्थानों में तत्व ऊर्जा को संतुलित करें।
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {services.map((service, index) => (
            <Card 
              key={index} 
              className="overflow-hidden transition-all duration-300 hover:shadow-lg hover:border-astro-purple cosmic-border"
            >
              <CardContent className="pt-6">
                <div className="mb-5">{service.icon}</div>
                <h3 className="font-serif text-xl font-semibold mb-3 text-astro-dark-purple">{service.title}</h3>
                <p className="text-gray-700">{service.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="mt-12 bg-white p-6 rounded-lg shadow-md cosmic-border">
          <h3 className="font-serif text-xl font-semibold mb-4 text-astro-dark-purple text-center">सफलता की कहानियां</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-medium text-astro-dark-purple mb-2">श्री शर्मा का व्यवसाय</h4>
              <p className="text-sm text-gray-600 mb-3">
                हमारे वास्तु सुझावों को लागू करने के बाद, श्री शर्मा के खुदरा व्यापार में केवल तीन महीनों के भीतर मासिक राजस्व में 40% की वृद्धि देखी गई।
              </p>
            </div>
            <div>
              <h4 className="font-medium text-astro-dark-purple mb-2">पटेल परिवार</h4>
              <p className="text-sm text-gray-600 mb-3">
                पटेल परिवार ने अपने घर की व्यवस्था में सरल वास्तु समायोजन करने के बाद बेहतर स्वास्थ्य और पारिवारिक सद्भाव का अनुभव किया।
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VaastuServices;
