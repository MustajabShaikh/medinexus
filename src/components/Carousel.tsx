import { useState, useEffect } from "react";
import { Button } from "./ui/button";
import { ChevronLeftIcon, ChevronRightIcon } from "@radix-ui/react-icons";
import MediPointImg from "../assets/carousel_images/MediPointImg.jpg";
import PharmEasyProImg from "../assets/carousel_images/PharmEasyProImg.jpg";
import MedStoreManagerImg from "../assets/carousel_images/MedStoreManagerImg.jpg";
import RxManagerImg from "../assets/carousel_images/RxManagerImg.jpg";
import HealthTechSuiteImg from "../assets/carousel_images/HealthTechSuiteImg.jpeg";
import MediCoreSystemImg from "../assets/carousel_images/MediCoreSystemImg.jpeg";

// Sample medical software data - replace with your actual images
const medicalSoftwareData = [
  {
    id: 1,
    name: "MediPoint",
    image: MediPointImg,
    description: "Complete pharmacy management system"
  },
  {
    id: 2,
    name: "PharmEasy Pro",
    image: PharmEasyProImg,
    description: "Advanced inventory and billing solution"
  },
  {
    id: 3,
    name: "MedStore Manager",
    image: MedStoreManagerImg,
    description: "Streamlined medical store operations"
  },
  {
    id: 4,
    name: "RxManager",
    image: RxManagerImg,
    description: "Prescription and patient management"
  },
  {
    id: 5,
    name: "HealthTech Suite",
    image: HealthTechSuiteImg,
    description: "Comprehensive healthcare software"
  },
  {
    id: 6,
    name: "MediCore System",
    image: MediCoreSystemImg,
    description: "All-in-one medical store solution"
  }
];

export const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  // Auto-play functionality
  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => 
        prevIndex === medicalSoftwareData.length - 1 ? 0 : prevIndex + 1
      );
    }, 4000);

    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const goToPrevious = () => {
    setCurrentIndex(currentIndex === 0 ? medicalSoftwareData.length - 1 : currentIndex - 1);
    setIsAutoPlaying(false);
  };

  const goToNext = () => {
    setCurrentIndex(currentIndex === medicalSoftwareData.length - 1 ? 0 : currentIndex + 1);
    setIsAutoPlaying(false);
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
    setIsAutoPlaying(false);
  };

  // Get visible slides for different screen sizes
  const getVisibleSlides = () => {
    const slides = [];
    for (let i = 0; i < 3; i++) {
      const index = (currentIndex + i) % medicalSoftwareData.length;
      slides.push(medicalSoftwareData[index]);
    }
    return slides;
  };

  return (
    <section className="container py-20 md:py-32" id="software">
      <div className="text-center space-y-6 mb-12">
        <h2 className="text-3xl md:text-4xl font-bold">
          <span className="inline bg-gradient-to-r from-[#F596D3] to-[#D247BF] text-transparent bg-clip-text">
            Medical Store
          </span>{" "}
          Software Solutions
        </h2>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          Discover the most trusted software solutions used by medical stores and pharmacies worldwide
        </p>
      </div>

      {/* Carousel Container */}
      <div className="relative max-w-7xl mx-auto">
        {/* Navigation Buttons */}
        <Button
          variant="outline"
          size="icon"
          className="absolute left-4 top-1/2 transform -translate-y-1/2 z-10 bg-background/80 backdrop-blur-sm hover:bg-background"
          onClick={goToPrevious}
        >
          <ChevronLeftIcon className="h-4 w-4" />
        </Button>

        <Button
          variant="outline"
          size="icon"
          className="absolute right-4 top-1/2 transform -translate-y-1/2 z-10 bg-background/80 backdrop-blur-sm hover:bg-background"
          onClick={goToNext}
        >
          <ChevronRightIcon className="h-4 w-4" />
        </Button>

        {/* Carousel Content */}
        <div className="overflow-hidden rounded-xl" id="software">
          {/* Desktop View - 3 slides */}
          <div className="hidden md:grid md:grid-cols-3 gap-6 px-12">
            {getVisibleSlides().map((software, index) => (
              <div
                key={`${software.id}-${index}`}
                className={`bg-card rounded-lg border shadow-sm transition-all duration-300 hover:shadow-lg ${
                  index === 1 ? 'scale-105 border-primary/50' : 'scale-95 opacity-80'
                }`}
              >
                <div className="aspect-video bg-muted rounded-t-lg overflow-hidden">
                  <img
                    src={software.image}
                    alt={software.name}
                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                  />
                </div>
                <div className="p-6">
                  <h3 className="font-semibold text-lg mb-2">{software.name}</h3>
                  <p className="text-muted-foreground text-sm">{software.description}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Mobile View - 1 slide */}
          <div className="md:hidden px-6">
            <div className="bg-card rounded-lg border shadow-sm">
              <div className="aspect-video bg-muted rounded-t-lg overflow-hidden">
                <img
                  src={medicalSoftwareData[currentIndex].image}
                  alt={medicalSoftwareData[currentIndex].name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="font-semibold text-lg mb-2">
                  {medicalSoftwareData[currentIndex].name}
                </h3>
                <p className="text-muted-foreground text-sm">
                  {medicalSoftwareData[currentIndex].description}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Dots Indicator */}
        <div className="flex justify-center space-x-2 mt-8">
          {medicalSoftwareData.map((_, index) => (
            <button
              key={index}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentIndex 
                  ? 'bg-primary scale-125' 
                  : 'bg-muted-foreground/30 hover:bg-muted-foreground/50'
              }`}
              onClick={() => goToSlide(index)}
            />
          ))}
        </div>


      </div>

      {/* Shadow effect */}
      <div className="shadow"></div>
    </section>
  );
};