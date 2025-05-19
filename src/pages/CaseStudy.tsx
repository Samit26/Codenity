import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Separator } from '@/components/ui/separator';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom'; // Assuming react-router-dom is used for internal links

interface CaseStudyProps {
  openModal: () => void; // Prop to open the contact modal
}

const CaseStudy: React.FC<CaseStudyProps> = ({ openModal }) => {
  return (
    <div className="min-h-screen bg-codenity-dark text-white pt-16"> {/* Added pt-16 for fixed navbar */}
      <Navbar openModal={openModal} /> {/* Pass openModal prop */}
      <div className="container mx-auto px-4 py-12 md:py-20">
        <article className="max-w-4xl mx-auto">
          <h1 className="text-3xl md:text-5xl font-bold mb-6 text-center gradient-text leading-tight">
            How We Built Codenity.live — A High-Performance, SEO-Friendly Web Agency Website
          </h1>
          <p className="text-lg text-gray-300 mb-12 text-center max-w-2xl mx-auto">
            A deep dive into the process, tech stack, and results of creating our own digital home.
          </p>

          <section className="mb-16 p-6 md:p-8 bg-codenity-darker rounded-lg border border-codenity-accent/10 shadow-lg">
            <h2 className="text-2xl md:text-3xl font-semibold mb-4 text-white">Introduction</h2>
            <Separator className="bg-codenity-accent/30 mb-6" />
            <p className="text-gray-300 leading-relaxed">
              When we started building Codenity.live, our goal was clear: create a lightning-fast, beautifully designed web presence that reflects our capabilities as a web development company — while following best practices for performance, SEO, and user experience.
              In this case study, we’ll break down the process and decisions that brought Codenity.live to life.
            </p>
          </section>

          <section className="mb-16 p-6 md:p-8 bg-codenity-darker rounded-lg border border-codenity-accent/10 shadow-lg">
            <h2 className="text-2xl md:text-3xl font-semibold mb-4 text-white">Tech Stack</h2>
            <Separator className="bg-codenity-accent/30 mb-6" />
            <ul className="list-disc list-inside text-gray-300 space-y-3 pl-4">
              <li><span className="font-semibold text-codenity-accent">Frontend:</span> React.js with Vite for fast builds</li>
              <li><span className="font-semibold text-codenity-accent2">Styling:</span> Tailwind CSS + ShadCN UI</li>
              <li><span className="font-semibold text-codenity-accent3">Hosting:</span> Vercel for fast deployment and CDN</li>
              <li><span className="font-semibold text-codenity-accent">Image Handling:</span> Optimized images and lazy loading</li>
              <li><span className="font-semibold text-codenity-accent2">SEO:</span> Custom meta tags, Open Graph tags, and structured data</li>
            </ul>
          </section>

          <section className="mb-16 p-6 md:p-8 bg-codenity-darker rounded-lg border border-codenity-accent/10 shadow-lg">
            <h2 className="text-2xl md:text-3xl font-semibold mb-4 text-white">Performance & SEO Focus</h2>
            <Separator className="bg-codenity-accent/30 mb-6" />
            <ul className="list-disc list-inside text-gray-300 space-y-3 pl-4">
              <li>Added meta tags and descriptions</li>
              <li>Implemented lazy loading for images</li>
              <li>Optimized Core Web Vitals (LCP, CLS, FID)</li>
              <li>Added Open Graph and Twitter Card support</li>
              <li>Created sitemap.xml and robots.txt</li>
              <li>Implemented Schema markup for services and testimonials</li>
            </ul>
          </section>

          <section className="mb-16 p-6 md:p-8 bg-codenity-darker rounded-lg border border-codenity-accent/10 shadow-lg">
            <h2 className="text-2xl md:text-3xl font-semibold mb-4 text-white">Results</h2>
            <Separator className="bg-codenity-accent/30 mb-6" />
            <ul className="list-disc list-inside text-gray-300 space-y-3 pl-4">
              <li><span className="font-semibold text-codenity-accent">Lighthouse Scores:</span> Performance 98, Accessibility 100, Best Practices 100, SEO 100</li>
              <li>Page load time under 1.5 seconds</li>
              <li>Fully responsive and accessible on mobile devices</li>
              <li>Semantic HTML for improved crawlability</li>
            </ul>
          </section>

          <section className="mb-16 p-6 md:p-8 bg-codenity-darker rounded-lg border border-codenity-accent/10 shadow-lg">
            <h2 className="text-2xl md:text-3xl font-semibold mb-4 text-white">Lessons Learned</h2>
            <Separator className="bg-codenity-accent/30 mb-6" />
            <ul className="list-disc list-inside text-gray-300 space-y-3 pl-4">
              <li>Designing for performance from the start saves time</li>
              <li>Proper SEO meta tags and schema boost discoverability</li>
              <li>Single-page apps still need thorough SEO work</li>
            </ul>
          </section>

          <section className="text-center p-6 md:p-8 bg-codenity-darker rounded-lg border border-codenity-accent/10 shadow-lg">
            <h2 className="text-2xl md:text-3xl font-semibold mb-6 text-white">Final Thoughts</h2>
            <p className="text-gray-300 mb-8 leading-relaxed max-w-2xl mx-auto">
              Codenity.live is not just our website; it’s our proof of quality, attention to detail, and dedication to web excellence.
              Want a site like this for your business?
            </p>
            <Button
              className="bg-gradient-to-r from-codenity-accent to-codenity-accent2 hover:opacity-90 transition-opacity text-white px-8 py-3 text-lg"
              onClick={openModal} // Use the openModal prop to trigger the modal
            >
              Contact us
            </Button>
          </section>
        </article>
      </div>
      <Footer />
    </div>
  );
};

export default CaseStudy;