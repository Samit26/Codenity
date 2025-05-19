import { useState, useEffect } from 'react'
import { Button } from '@/components/ui/button'
import { Menu, X } from 'lucide-react'
import { Link } from 'react-router-dom'; // Import Link for internal navigation

interface NavbarProps {
  openModal: () => void; // Add prop for opening modal
}

const Navbar: React.FC<NavbarProps> = ({ openModal }) => { // Accept openModal as prop
  const [isScrolled, setIsScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navLinks = [
    { name: 'Home', href: '/' }, // Use route path for internal links
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Portfolio', href: '#portfolio' },
    { name: 'Testimonials', href: '#testimonials' },
    { name: 'Contact', href: '#contact' },
    { name: 'Case Study', href: '/case-study' }, // Add Case Study link
  ]

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-codenity-darker/90 backdrop-blur-md shadow-lg' : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link to="/" className="flex items-center space-x-2"> {/* Use Link for home */}
          <span className="text-2xl font-bold gradient-text">Codenity</span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            link.href.startsWith('#') ? (
              <a
                key={link.name}
                href={link.href}
                className="text-sm font-medium text-gray-200 hover:text-white animated-underline"
              >
                {link.name}
              </a>
            ) : (
              <Link
                key={link.name}
                to={link.href}
                className="text-sm font-medium text-gray-200 hover:text-white animated-underline"
              >
                {link.name}
              </Link>
            )
          ))}
          <Button
            className="bg-gradient-to-r from-codenity-accent to-codenity-accent2 hover:opacity-90 transition-opacity"
            onClick={openModal} // Use the openModal prop
          >
            Get a Quote
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X /> : <Menu />}
          </Button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-codenity-darker/95 backdrop-blur-md">
          <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
            {navLinks.map((link) => (
               link.href.startsWith('#') ? (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-sm font-medium text-gray-200 hover:text-white py-2"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link.name}
                </a>
              ) : (
                <Link
                  key={link.name}
                  to={link.href}
                  className="text-sm font-medium text-gray-200 hover:text-white py-2"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link.name}
                </Link>
              )
            ))}
            <Button
              className="bg-gradient-to-r from-codenity-accent to-codenity-accent2 hover:opacity-90 transition-opacity w-full"
              onClick={openModal} // Use the openModal prop
            >
              Get a Quote
            </Button>
          </div>
        </div>
      )}
    </nav>
  )
}

export default Navbar