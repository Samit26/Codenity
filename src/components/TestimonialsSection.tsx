import { useEffect, useState, useRef } from 'react'
import { Card, CardContent } from '@/components/ui/card'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Quote, ChevronLeft, ChevronRight } from 'lucide-react'
import { Button } from '@/components/ui/button'

const TestimonialsSection = () => {
  const testimonials = [
    {
      name: 'Sarah Johnson',
      role: 'CEO, TechStart Inc.',
      image: 'https://placehold.co/100/4F46E5/ffffff?text=SJ',
      quote: 'Codenity transformed our outdated website into a modern, user-friendly platform that perfectly represents our brand. Their attention to detail and technical expertise exceeded our expectations.',
    },
    {
      name: 'Michael Chen',
      role: 'Founder, HealthApp',
      image: 'https://placehold.co/100/7C3AED/ffffff?text=MC',
      quote: 'Working with Codenity on our mobile app was a game-changer. They understood our vision from day one and delivered a product that our users love. Their ongoing support has been invaluable.',
    },
    {
      name: 'Emily Rodriguez',
      role: 'Marketing Director, GlobalRetail',
      image: 'https://placehold.co/100/10B981/ffffff?text=ER',
      quote: 'The e-commerce solution Codenity built for us has significantly increased our online sales. Their team was responsive, professional, and delivered exactly what we needed on time and within budget.',
    },
    {
      name: 'David Park',
      role: 'CTO, InnovateTech',
      image: 'https://placehold.co/100/4F46E5/ffffff?text=DP',
      quote: "Codenity's landing page design increased our conversion rate by 40%. Their strategic approach to UX and deep understanding of our target audience made all the difference.",
    },
    {
      name: 'Olivia Martinez',
      role: 'Product Manager, SaaS Platform',
      image: 'https://placehold.co/100/7C3AED/ffffff?text=OM',
      quote: "The web application Codenity developed has streamlined our internal processes and saved countless hours. Their team was collaborative, responsive, and delivered an exceptional product.",
    },
    {
      name: 'James Wilson',
      role: 'Digital Marketing Lead, GrowthCo',
      image: 'https://placehold.co/100/10B981/ffffff?text=JW',
      quote: "Codenity's SEO expertise has dramatically improved our search rankings and organic traffic. Their data-driven approach and clear reporting have made them an invaluable partner.",
    }
  ]

  const [currentIndex, setCurrentIndex] = useState(0)
  const [isHovering, setIsHovering] = useState(false)
  const autoPlayRef = useRef<NodeJS.Timeout | null>(null)
  const maxVisibleItems = 3
  const totalItems = testimonials.length
  const maxIndex = totalItems - maxVisibleItems

  // Handle auto-sliding
  useEffect(() => {
    if (!isHovering) {
      autoPlayRef.current = setInterval(() => {
        setCurrentIndex(prevIndex => 
          prevIndex >= maxIndex ? 0 : prevIndex + 1
        )
      }, 5000) // Slide every 5 seconds
    }
    
    return () => {
      if (autoPlayRef.current) {
        clearInterval(autoPlayRef.current)
      }
    }
  }, [isHovering, maxIndex])

  const handlePrev = () => {
    setCurrentIndex(prevIndex => 
      prevIndex <= 0 ? maxIndex : prevIndex - 1
    )
  }

  const handleNext = () => {
    setCurrentIndex(prevIndex => 
      prevIndex >= maxIndex ? 0 : prevIndex + 1
    )
  }

  // Get visible testimonials based on current index
  const visibleTestimonials = testimonials.slice(currentIndex, currentIndex + maxVisibleItems)

  return (
    <section id="testimonials" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Client <span className="gradient-text">Testimonials</span></h2>
          <div className="h-1 w-20 bg-gradient-to-r from-codenity-accent to-codenity-accent2 mx-auto mb-8"></div>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto">
            Don't just take our word for it. Here's what our clients have to say about working with us.
          </p>
        </div>
        
        <div className="relative"
          onMouseEnter={() => setIsHovering(true)}
          onMouseLeave={() => setIsHovering(false)}
        >
          {/* Navigation buttons */}
          <Button 
            variant="outline" 
            size="icon" 
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-codenity-dark/80 border-codenity-accent/30 hover:bg-codenity-accent/20 -ml-4 hidden md:flex"
            onClick={handlePrev}
          >
            <ChevronLeft className="h-5 w-5" />
          </Button>
          
          <Button 
            variant="outline" 
            size="icon" 
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-codenity-dark/80 border-codenity-accent/30 hover:bg-codenity-accent/20 -mr-4 hidden md:flex"
            onClick={handleNext}
          >
            <ChevronRight className="h-5 w-5" />
          </Button>
          
          {/* Testimonial cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 overflow-hidden">
            {visibleTestimonials.map((testimonial, index) => (
              <Card 
                key={`${currentIndex}-${index}`} 
                className="bg-codenity-dark border border-codenity-accent/20 hover:border-codenity-accent/50 transition-all duration-300 animate-fade-in"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <CardContent className="p-6 flex flex-col items-center text-center">
                  <Quote className="h-10 w-10 text-codenity-accent opacity-50 mb-6" />
                  <p className="text-gray-300 mb-6 italic">"{testimonial.quote}"</p>
                  <Avatar className="h-16 w-16 mb-4">
                    <AvatarImage src={testimonial.image} alt={testimonial.name} />
                    <AvatarFallback className="bg-codenity-accent text-white">
                      {testimonial.name.split(' ').map(n => n[0]).join('')}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <h4 className="font-semibold">{testimonial.name}</h4>
                    <p className="text-sm text-gray-400">{testimonial.role}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          
          {/* Pagination dots for mobile */}
          <div className="flex justify-center mt-6 space-x-2 md:hidden">
            {Array.from({ length: maxIndex + 1 }).map((_, index) => (
              <button
                key={index}
                className={`h-2 rounded-full transition-all ${
                  index === currentIndex ? 'w-6 bg-codenity-accent' : 'w-2 bg-codenity-accent/30'
                }`}
                onClick={() => setCurrentIndex(index)}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default TestimonialsSection