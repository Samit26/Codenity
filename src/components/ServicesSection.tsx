import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Globe, Code, BarChart, Layout } from 'lucide-react'

const ServicesSection = () => {
  const services = [
    {
      icon: <Globe className="h-10 w-10 text-codenity-accent" />,
      title: 'Website Development',
      description: 'Custom websites built with modern frameworks like React, Vue, and Angular. Responsive, fast, and SEO-friendly.',
      features: ['Responsive Design', 'Performance Optimization', 'CMS Integration', 'E-commerce Solutions']
    },
    {
      icon: <Layout className="h-10 w-10 text-codenity-accent2" />,
      title: 'Landing Pages',
      description: 'High-converting landing pages designed to capture leads and drive conversions with compelling visuals and copy.',
      features: ['Conversion-focused Design', 'A/B Testing', 'Lead Capture Forms', 'Analytics Integration']
    },
    {
      icon: <Code className="h-10 w-10 text-codenity-accent3" />,
      title: 'Web Apps',
      description: 'Custom web applications that solve specific business problems and streamline operations with intuitive interfaces.',
      features: ['Custom Functionality', 'User Authentication', 'Database Integration', 'API Development']
    },
    {
      icon: <BarChart className="h-10 w-10 text-codenity-accent" />,
      title: 'SEO & Analytics',
      description: 'Data-driven strategies to improve visibility, drive traffic, and increase conversions.',
      features: ['SEO Optimization', 'Performance Tracking', 'Conversion Optimization', 'Traffic Analysis']
    }
  ]

  return (
    <section id="services" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our <span className="gradient-text">Services</span></h2>
          <div className="h-1 w-20 bg-gradient-to-r from-codenity-accent to-codenity-accent2 mx-auto mb-8"></div>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto">
            We offer comprehensive digital solutions tailored to your specific needs, helping you establish a strong online presence and achieve your business goals.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="bg-codenity-dark border border-codenity-accent/20 hover:border-codenity-accent/50 transition-all duration-300 overflow-hidden group">
              <div className="absolute inset-0 bg-gradient-to-br from-codenity-accent/10 to-codenity-accent2/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <CardHeader className="relative z-10">
                <div className="mb-4">{service.icon}</div>
                <CardTitle className="text-2xl">{service.title}</CardTitle>
                <CardDescription className="text-gray-400">{service.description}</CardDescription>
              </CardHeader>
              <CardContent className="relative z-10">
                <ul className="space-y-2">
                  {service.features.map((feature, i) => (
                    <li key={i} className="flex items-center">
                      <div className="h-1.5 w-1.5 rounded-full bg-codenity-accent mr-2"></div>
                      <span className="text-gray-300">{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ServicesSection