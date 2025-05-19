import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
// Removed QuoteFormModal import and state management

interface HeroSectionProps {
  openModal: () => void; // Add prop for opening modal
}

const HeroSection: React.FC<HeroSectionProps> = ({ openModal }) => { // Accept openModal as prop
  // Removed local state for modal

  return (
    <section id="home" className="relative min-h-screen flex items-center pt-16">
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 -left-20 w-72 h-72 bg-codenity-accent/20 rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-1/4 -right-20 w-72 h-72 bg-codenity-accent2/20 rounded-full filter blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-codenity-accent3/10 rounded-full filter blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col items-center text-center">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 animate-fade-in [animation-delay:200ms]">
            <span className="gradient-text">Codenity</span>
          </h1>
          <h2 className="text-3xl md:text-5xl font-bold mb-6 animate-fade-in [animation-delay:400ms]">
            Code Beyond Boundaries
          </h2>
          <p className="text-lg md:text-xl text-gray-300 max-w-2xl mb-8 animate-fade-in [animation-delay:600ms]">
            We transform your ideas into exceptional digital experiences with cutting-edge technology and innovative design.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 animate-fade-in [animation-delay:800ms]">
            <Button
              className="bg-gradient-to-r from-codenity-accent to-codenity-accent2 hover:opacity-90 transition-opacity text-white px-8 py-6 text-lg"
              onClick={openModal} // Use the openModal prop
            >
              Get a Free Quote
            </Button>
            <Button variant="outline" className="group">
              View Our Work
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce">
        <div className="w-1 h-8 rounded-full bg-gradient-to-b from-codenity-accent to-transparent"></div>
      </div>

      {/* Removed modal rendering from here */}
    </section>
  );
};

export default HeroSection;