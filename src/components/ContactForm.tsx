import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { useToast } from '@/hooks/use-toast'
import { Mail, Phone, MapPin, Send } from 'lucide-react'

const ContactForm = () => {
  const { toast } = useToast()
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Simulate form submission
    setTimeout(() => {
      toast({
        title: "Message sent!",
        description: "We'll get back to you as soon as possible.",
      })
      setFormData({ name: '', email: '', message: '' })
      setIsSubmitting(false)
    }, 1000)
  }

  const contactInfo = [
    {
      icon: <Mail className="h-5 w-5 text-codenity-accent" />,
      label: 'Email',
      value: 'contact@codenity.live'
    },
    {
      icon: <Phone className="h-5 w-5 text-codenity-accent2" />,
      label: 'Phone',
      value: '+1 (555) 123-4567'
    },
    {
      icon: <MapPin className="h-5 w-5 text-codenity-accent3" />,
      label: 'Address',
      value: '123 Tech Street, San Francisco, CA'
    }
  ]

  return (
    <section id="contact" className="py-20 bg-codenity-darker">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Get in <span className="gradient-text">Touch</span></h2>
          <div className="h-1 w-20 bg-gradient-to-r from-codenity-accent to-codenity-accent2 mx-auto mb-8"></div>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto">
            Have a project in mind or want to learn more about our services? We'd love to hear from you!
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-semibold mb-6">Contact Information</h3>
            <div className="space-y-6 mb-8">
              {contactInfo.map((info, index) => (
                <div key={index} className="flex items-start">
                  <div className="p-3 rounded-full bg-codenity-dark mr-4">
                    {info.icon}
                  </div>
                  <div>
                    <h4 className="text-sm text-gray-400">{info.label}</h4>
                    <p className="text-lg">{info.value}</p>
                  </div>
                </div>
              ))}
            </div>
            
            <h3 className="text-2xl font-semibold mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              {['twitter', 'facebook', 'instagram', 'linkedin'].map((social) => (
                <a 
                  key={social} 
                  href={`#${social}`} 
                  className="p-3 rounded-full bg-codenity-dark hover:bg-codenity-accent/20 transition-colors"
                >
                  <span className="sr-only">{social}</span>
                  <div className="h-5 w-5 bg-codenity-accent/70"></div>
                </a>
              ))}
            </div>
          </div>
          
          <div className="bg-codenity-dark p-8 rounded-lg border border-codenity-accent/20">
            <h3 className="text-2xl font-semibold mb-6">Send us a Message</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-400 mb-1">
                  Name
                </label>
                <Input
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your name"
                  required
                  className="bg-codenity-darker border-codenity-accent/30 focus:border-codenity-accent"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-400 mb-1">
                  Email
                </label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="your.email@example.com"
                  required
                  className="bg-codenity-darker border-codenity-accent/30 focus:border-codenity-accent"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-400 mb-1">
                  Message
                </label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell us about your project..."
                  required
                  className="bg-codenity-darker border-codenity-accent/30 focus:border-codenity-accent min-h-[150px]"
                />
              </div>
              
              <Button 
                type="submit" 
                disabled={isSubmitting}
                className="w-full bg-gradient-to-r from-codenity-accent to-codenity-accent2 hover:opacity-90 transition-opacity"
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
                <Send className="ml-2 h-4 w-4" />
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ContactForm