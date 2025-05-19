import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Separator } from '@/components/ui/separator';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Link } from 'react-router-dom';

interface FAQProps {
  openModal: () => void; // Prop to open the contact modal
}

const FAQ: React.FC<FAQProps> = ({ openModal }) => {
  const faqItems = [
    {
      category: 'General',
      questions: [
        {
          q: 'What is Codenity?',
          a: 'Codenity is a comprehensive platform offering coding resources, tools, tutorials, and a vibrant tech community designed to empower developers of all levels.'
        },
        {
          q: 'Who is Codenity for?',
          a: 'Codenity is for anyone interested in coding, from absolute beginners looking to learn their first programming language to experienced developers seeking to expand their skills and connect with peers.'
        },
        {
          q: 'Is Codenity free to use?',
          a: 'Codenity offers a range of free resources and content. We may introduce premium features or services in the future, which will be clearly indicated.'
        },
      ]
    },
    {
      category: 'Accounts & Access',
      questions: [
        {
          q: 'How do I create an account?',
          a: '[Instructions on creating an account - Placeholder as account functionality is not yet implemented]'
        },
        {
          q: 'Can I use Codenity without signing up?',
          a: 'Yes, you can access many of our resources and browse content without creating an account. However, some features, like community interaction or saving progress, may require registration.'
        },
        {
          q: 'I forgot my password — what should I do?',
          a: '[Instructions on password recovery - Placeholder as account functionality is not yet implemented]'
        },
      ]
    },
    {
      category: 'Content & Resources',
      questions: [
        {
          q: 'What kind of tutorials does Codenity offer?',
          a: 'Codenity offers tutorials covering a wide range of technologies, including web development (React, Vue, Angular), mobile development (React Native, Flutter), backend technologies (Node.js, Python), databases, and more.'
        },
        {
          q: 'Can I contribute my own articles or code snippets?',
          a: 'We are always open to contributions from our community! Please visit our "Contact Us" page or community forum for guidelines on how to submit your content.'
        },
        {
          q: 'How often is new content published?',
          a: 'We strive to publish new tutorials, articles, and resources regularly. Stay tuned to our blog and social media channels for updates.'
        },
      ]
    },
    {
      category: 'Technical',
      questions: [
        {
          q: 'What technologies does Codenity focus on?',
          a: 'Codenity focuses on modern and in-demand technologies relevant to web and app development, data science, and other key areas in the tech industry.'
        },
        {
          q: 'Do I need any software to use the tutorials?',
          a: 'Many of our tutorials can be followed with just a web browser. Some may require setting up a local development environment, and we provide guidance on how to do that.'
        },
        {
          q: 'Is Codenity optimized for mobile devices?',
          a: 'Yes, our website and content are designed to be fully responsive and accessible on mobile devices, allowing you to learn and browse on the go.'
        },
      ]
    },
    {
      category: 'Support & Contact',
      questions: [
        {
          q: 'How can I contact Codenity support?',
          a: 'You can contact our support team through the contact form on our website or by emailing support@codenity.live.'
        },
        {
          q: 'Where can I report a bug or issue?',
          a: 'Please report any bugs or issues you encounter through our contact form or by emailing support@codenity.live. Providing detailed information will help us address it quickly.'
        },
        {
          q: 'Does Codenity have a community or forum?',
          a: 'Yes, we have a growing tech community! [Include link to forum/community platform if available, otherwise mention plans or alternative interaction methods like social media groups].'
        },
      ]
    },
  ];

  return (
    <div className="min-h-screen bg-codenity-dark text-white pt-16">
      <Navbar openModal={openModal} />
      <div className="container mx-auto px-4 py-12 md:py-20">
        <header className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 gradient-text">
            Frequently Asked Questions
          </h1>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Find answers to common questions about Codenity, our platform, resources, and community. If you can't find what you're looking for, feel free to reach out!
          </p>
        </header>

        <div className="max-w-3xl mx-auto">
          {faqItems.map((category, index) => (
            <section key={index} className="mb-12">
              <h2 className="text-2xl md:text-3xl font-semibold mb-6 text-white">{category.category}</h2>
              <Accordion type="single" collapsible className="w-full">
                {category.questions.map((item, qIndex) => (
                  <AccordionItem key={qIndex} value={`item-${index}-${qIndex}`} className="border-b border-codenity-accent/20">
                    <AccordionTrigger className="text-lg font-medium text-gray-200 hover:no-underline hover:text-white transition-colors">
                      {item.q}
                    </AccordionTrigger>
                    <AccordionContent className="text-gray-400 leading-relaxed pb-4">
                      {item.a}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </section>
          ))}
        </div>

        <section className="text-center mt-16">
          <h2 className="text-2xl md:text-3xl font-semibold mb-6 text-white">Still Have Questions?</h2>
          <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
            If you couldn't find the answer you were looking for in our FAQs, please don't hesitate to contact us. Our team is here to help!
          </p>
          <Button
            className="bg-gradient-to-r from-codenity-accent to-codenity-accent2 hover:opacity-90 transition-opacity text-white px-8 py-3 text-lg"
            onClick={openModal} // Use the openModal prop to trigger the modal
          >
            Contact Support
          </Button>
        </section>
      </div>
      <Footer />
    </div>
  );
};

export default FAQ;