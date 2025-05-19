import { useState } from 'react'; // Import useState
import Navbar from '@/components/Navbar'
import HeroSection from '@/components/HeroSection'
import AboutSection from '@/components/AboutSection'
import ServicesSection from '@/components/ServicesSection'
import PortfolioSection from '@/components/PortfolioSection'
import TestimonialsSection from '@/components/TestimonialsSection'
import ContactForm from '@/components/ContactForm'
import Footer from '@/components/Footer'
import QuoteFormModal from '@/components/QuoteFormModal'; // Import the modal

const Index = () => {
  const [isModalOpen, setIsModalOpen] = useState(false); // Lift modal state

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <div className="min-h-screen bg-codenity-dark text-white">
      <Navbar openModal={openModal} /> {/* Pass openModal to Navbar */}
      <HeroSection openModal={openModal} /> {/* Pass openModal to HeroSection */}
      <AboutSection />
      <ServicesSection />
      <PortfolioSection />
      <TestimonialsSection />
      <ContactForm />
      <Footer />
      <QuoteFormModal isOpen={isModalOpen} onClose={closeModal} /> {/* Render modal here */}
    </div>
  )
}

export default Index