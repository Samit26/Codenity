import { Separator } from '@/components/ui/separator'
import { Link } from 'react-router-dom';

const Footer = () => {
  const currentYear = new Date().getFullYear()

  const footerLinks = [
    {
      title: 'Company',
      links: [
        { name: 'About', href: '#about' },
        { name: 'Services', href: '#services' },
        { name: 'Portfolio', href: '#portfolio' },
        { name: 'Careers', href: '#careers' },
      ]
    },
    {
      title: 'Resources',
      links: [
        { name: 'Blog', href: '/blog' },
        { name: 'Case Study', href: '/case-study' },
        { name: 'Documentation', href: '#docs' },
        { name: 'FAQ', href: '/faq' }, // Updated href for FAQ
      ]
    },
    {
      title: 'Legal',
      links: [
        { name: 'Privacy Policy', href: '/privacy-policy' },
        { name: 'Terms of Service', href: '/terms-of-service' },
        { name: 'Cookie Policy', href: '/cookie-policy' },
      ]
    }
  ]

  return (
    <footer className="bg-codenity-darker pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-12">
          <div className="lg:col-span-2">
            <div className="mb-6">
              <span className="text-2xl font-bold gradient-text">Codenity</span>
            </div>
            <p className="text-gray-400 mb-6 max-w-md">
              We transform ideas into exceptional digital experiences with cutting-edge technology and innovative design.
            </p>
            <div className="flex space-x-4">
              {['twitter', 'facebook', 'instagram', 'linkedin'].map((social) => (
                <a
                  key={social}
                  href={`#${social}`}
                  className="p-2 rounded-full bg-codenity-dark hover:bg-codenity-accent/20 transition-colors"
                >
                  <span className="sr-only">{social}</span>
                  <div className="h-5 w-5 bg-codenity-accent/70"></div>
                </a>
              ))}
            </div>
          </div>

          {footerLinks.map((column, index) => (
            <div key={index}>
              <h3 className="font-semibold mb-4">{column.title}</h3>
              <ul className="space-y-2">
                {column.links.map((link, i) => (
                   link.href.startsWith('#') ? (
                    <li key={i}>
                      <a
                        href={link.href}
                        className="text-gray-400 hover:text-white transition-colors animated-underline"
                      >
                        {link.name}
                      </a>
                    </li>
                  ) : (
                    <li key={i}>
                      <Link
                        to={link.href}
                        className="text-gray-400 hover:text-white transition-colors animated-underline"
                      >
                        {link.name}
                      </Link>
                    </li>
                  )
                ))}
              </ul>
            </div>
          ))}
        </div>

        <Separator className="bg-codenity-accent/20 my-8" />

        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm mb-4 md:mb-0">
            &copy; {currentYear} Codenity. All rights reserved.
          </p>
          <p className="text-gray-400 text-sm">
            Crafted with passion by <span className="gradient-text">Codenity</span>
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer