import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Separator } from '@/components/ui/separator';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

interface BlogProps {
  openModal: () => void; // Prop to open the contact modal
}

const Blog: React.FC<BlogProps> = ({ openModal }) => {
  return (
    <div className="min-h-screen bg-codenity-dark text-white pt-16">
      <Navbar openModal={openModal} />
      <div className="container mx-auto px-4 py-12 md:py-20">
        <header className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 gradient-text">Codenity Blog</h1>
          <p className="text-lg text-gray-300">Insights, tutorials, and updates from the world of code.</p>
        </header>

        <article className="max-w-3xl mx-auto bg-codenity-darker rounded-lg border border-codenity-accent/10 shadow-lg p-6 md:p-8">
          <h2 className="text-2xl md:text-3xl font-bold mb-4 text-white">
            Why Codenity is the Ultimate Hub for Developers in 2025
          </h2>
          <p className="text-sm text-gray-400 mb-6">Published on October 27, 2023</p> {/* Placeholder date */}

          <section className="mb-8">
            <h3 className="text-xl font-semibold mb-3 text-white">Introduction</h3>
            <p className="text-gray-300 leading-relaxed">
              In the fast-evolving landscape of technology, developers need a reliable and comprehensive platform to stay ahead. Codenity is designed to be that platform, offering a unique blend of coding tools, high-quality tutorials, robust community support, and a modern learning experience tailored for the future of programming. Discover why Codenity is set to be the ultimate hub for developers in 2025.
            </p>
          </section>

          <section className="mb-8">
            <h3 className="text-xl font-semibold mb-3 text-white">Empowering Developers with Cutting-Edge Resources</h3>
            <p className="text-gray-300 leading-relaxed mb-4">
              Codenity provides a wealth of <span className="font-semibold text-codenity-accent">developer resources</span> designed to support your coding journey from beginner to expert. Our <span className="font-semibold text-codenity-accent2">coding platform</span> offers interactive environments where you can practice and refine your skills. Whether you're looking to <span className="font-semibold text-codenity-accent3">learn to code</span> from scratch or master advanced techniques, Codenity has you covered.
            </p>
            <p className="text-gray-300 leading-relaxed">
              Our <span className="font-semibold text-codenity-accent">coding tutorials 2025</span> are constantly updated to reflect the latest industry trends and technologies, ensuring you're always learning relevant skills.
            </p>
          </section>

          <section className="mb-8">
            <h3 className="text-xl font-semibold mb-3 text-white">A Thriving Tech Community</h3>
            <p className="text-gray-300 leading-relaxed">
              Beyond just tools and tutorials, Codenity fosters a vibrant <span className="font-semibold text-codenity-accent">tech community</span>. Connect with fellow developers, share your projects, ask questions, and collaborate on innovative ideas. This supportive environment is crucial for growth and staying motivated.
            </p>
          </section>

          <section className="mb-8">
            <h3 className="text-xl font-semibold mb-3 text-white">Modern Learning Experience</h3>
            <p className="text-gray-300 leading-relaxed">
              We believe learning should be engaging and effective. Codenity offers a <span className="font-semibold text-codenity-accent2">programming blog</span> with insightful articles and a modern, intuitive interface that makes navigating resources and tutorials seamless. This focus on user experience sets Codenity apart.
            </p>
          </section>

          <section className="mb-8">
            <h3 className="text-xl font-semibold mb-3 text-white">Codenity for Developers: Your Future Starts Here</h3>
            <p className="text-gray-300 leading-relaxed">
              In 2025, the demand for skilled developers will be higher than ever. <span className="font-semibold text-codenity-accent3">Codenity for developers</span> is built to equip you with the knowledge, tools, and connections you need to succeed. Join us and code your future.
            </p>
          </section>

          <section className="text-center mt-10">
            <h3 className="text-xl font-semibold mb-4 text-white">Ready to Elevate Your Coding Skills?</h3>
            <Button
              className="bg-gradient-to-r from-codenity-accent to-codenity-accent2 hover:opacity-90 transition-opacity text-white px-8 py-3 text-lg"
              onClick={openModal}
            >
              Join Codenity Today
            </Button>
          </section>
        </article>
      </div>
      <Footer />
    </div>
  );
};

export default Blog;