import { Card, CardContent, CardFooter } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { ExternalLink } from 'lucide-react'

const PortfolioSection = () => {
  const projects = [
    {
      title: 'E-commerce Platform',
      description: 'A full-featured online store with product management, cart functionality, and secure payment processing.',
      image: 'https://placehold.co/600x400/1a1a2e/ffffff?text=E-commerce+Platform',
      tech: ['React', 'Node.js', 'MongoDB', 'Stripe'],
      link: '#'
    },
    {
      title: 'Health & Fitness App',
      description: 'Mobile application for tracking workouts, nutrition, and personal health metrics with social features.',
      image: 'https://placehold.co/600x400/1a1a2e/ffffff?text=Fitness+App',
      tech: ['React Native', 'Firebase', 'Redux', 'HealthKit'],
      link: '#'
    },
    {
      title: 'Real Estate Platform',
      description: 'Property listing and management system with advanced search, virtual tours, and agent dashboards.',
      image: 'https://placehold.co/600x400/1a1a2e/ffffff?text=Real+Estate+Platform',
      tech: ['Vue.js', 'Laravel', 'PostgreSQL', 'AWS'],
      link: '#'
    },
    {
      title: 'Financial Dashboard',
      description: 'Interactive analytics dashboard for financial data visualization and reporting with real-time updates.',
      image: 'https://placehold.co/600x400/1a1a2e/ffffff?text=Financial+Dashboard',
      tech: ['Angular', 'TypeScript', 'D3.js', 'Node.js'],
      link: '#'
    }
  ]

  return (
    <section id="portfolio" className="py-20 bg-codenity-darker">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our <span className="gradient-text">Portfolio</span></h2>
          <div className="h-1 w-20 bg-gradient-to-r from-codenity-accent to-codenity-accent2 mx-auto mb-8"></div>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto">
            Explore our recent projects and see how we've helped businesses achieve their digital goals with innovative solutions.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <Card key={index} className="bg-codenity-dark border border-codenity-accent/20 overflow-hidden group">
              <div className="relative overflow-hidden h-60">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-codenity-dark to-transparent opacity-70"></div>
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-gray-400 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech, i) => (
                    <Badge key={i} variant="outline" className="bg-codenity-darker border-codenity-accent/30">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </CardContent>
              <CardFooter className="p-6 pt-0">
                <a 
                  href={project.link} 
                  className="text-codenity-accent flex items-center hover:text-codenity-accent2 transition-colors"
                >
                  View Project <ExternalLink className="ml-2 h-4 w-4" />
                </a>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

export default PortfolioSection