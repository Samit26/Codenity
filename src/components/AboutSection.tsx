import { Card, CardContent } from '@/components/ui/card'
import { Code, Lightbulb, Users, Zap } from 'lucide-react'

const AboutSection = () => {
  const values = [
    {
      icon: <Code className="h-6 w-6 text-codenity-accent" />,
      title: 'Technical Excellence',
      description: 'We pride ourselves on clean, efficient code and staying ahead of industry trends.'
    },
    {
      icon: <Lightbulb className="h-6 w-6 text-codenity-accent2" />,
      title: 'Innovation',
      description: 'We constantly explore new technologies to deliver cutting-edge solutions.'
    },
    {
      icon: <Users className="h-6 w-6 text-codenity-accent3" />,
      title: 'Client Partnership',
      description: 'We build lasting relationships through transparent communication and collaboration.'
    },
    {
      icon: <Zap className="h-6 w-6 text-codenity-accent" />,
      title: 'Rapid Delivery',
      description: 'We deliver high-quality solutions efficiently without compromising on quality.'
    }
  ]

  return (
    <section id="about" className="py-20 bg-codenity-darker">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">About <span className="gradient-text">Codenity</span></h2>
          <div className="h-1 w-20 bg-gradient-to-r from-codenity-accent to-codenity-accent2 mx-auto mb-8"></div>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto">
            We are a passionate team of developers, designers, and digital strategists dedicated to transforming ideas into powerful digital solutions. Our mission is to help businesses thrive in the digital landscape through innovative technology and exceptional user experiences.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map((value, index) => (
            <Card key={index} className="bg-codenity-dark border border-codenity-accent/20 hover:border-codenity-accent/50 transition-all duration-300 group">
              <CardContent className="p-6">
                <div className="mb-4 p-3 rounded-full bg-codenity-darker inline-block group-hover:scale-110 transition-transform duration-300">
                  {value.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2">{value.title}</h3>
                <p className="text-gray-400">{value.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

export default AboutSection