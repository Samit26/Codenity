import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Separator } from '@/components/ui/separator';

interface CookiePolicyProps {
  openModal: () => void; // Prop to open the contact modal
}

const CookiePolicy: React.FC<CookiePolicyProps> = ({ openModal }) => {
  const lastUpdated = "October 27, 2023"; // Placeholder date

  return (
    <div className="min-h-screen bg-codenity-dark text-white pt-16">
      <Navbar openModal={openModal} />
      <div className="container mx-auto px-4 py-12 md:py-20">
        <article className="max-w-4xl mx-auto">
          <h1 className="text-3xl md:text-5xl font-bold mb-6 text-center gradient-text">
            Cookie Policy
          </h1>
          <p className="text-lg text-gray-300 mb-4 text-center max-w-2xl mx-auto">
            Understanding how we use cookies and your choices.
          </p>
          <p className="text-sm text-gray-400 text-center mb-12">
            Last Updated: {lastUpdated}
          </p>

          <section className="mb-12">
            <h2 className="text-2xl md:text-3xl font-semibold mb-4 text-white">Introduction</h2>
            <Separator className="bg-codenity-accent/30 mb-6" />
            <p className="text-gray-300 leading-relaxed">
              This Cookie Policy explains what cookies are, how Codenity.live uses them, and your choices regarding cookies. Cookies are small pieces of data stored on your device when you visit a website. They are widely used to make websites work more efficiently and to provide reporting information.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl md:text-3xl font-semibold mb-4 text-white">Types of Cookies We Use</h2>
            <Separator className="bg-codenity-accent/30 mb-6" />
            <p className="text-gray-300 leading-relaxed mb-4">
              We may use different types of cookies for various purposes:
            </p>
            <ul className="list-disc list-inside text-gray-300 space-y-2 pl-4">
              <li><span className="font-semibold text-codenity-accent">Essential Cookies:</span> These are necessary for the website to function and cannot be switched off in our systems. They are usually only set in response to actions made by you which amount to a request for services, such as setting your privacy preferences, logging in or filling in forms.</li>
              <li><span className="font-semibold text-codenity-accent2">Performance and Analytics Cookies:</span> These cookies allow us to count visits and traffic sources so we can measure and improve the performance of our site. They help us to know which pages are the most and least popular and see how visitors move around the site. We typically use Google Analytics for this purpose.</li>
              <li><span className="font-semibold text-codenity-accent3">Functionality Cookies:</span> These enable the website to provide enhanced functionality and personalization. They may be set by us or by third-party providers whose services we have added to our pages.</li>
              <li><span className="font-semibold text-codenity-accent">Targeting/Advertising Cookies:</span> [Include this section if you use cookies for advertising. Otherwise, remove.] These cookies may be set through our site by our advertising partners. They may be used by those companies to build a profile of your interests and show you relevant adverts on other sites.</li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl md:text-3xl font-semibold mb-4 text-white">How We Use Cookies</h2>
            <Separator className="bg-codenity-accent/30 mb-6" />
            <p className="text-gray-300 leading-relaxed">
              We use cookies to:
            </p>
            <ul className="list-disc list-inside text-gray-300 space-y-2 pl-4">
              <li>Operate and maintain our website.</li>
              <li>Enhance your user experience by remembering your preferences.</li>
              <li>Analyze website traffic and usage patterns to improve our content and services.</li>
              <li>[Include if using advertising cookies] Deliver targeted advertising.</li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl md:text-3xl font-semibold mb-4 text-white">Managing Cookies</h2>
            <Separator className="bg-codenity-accent/30 mb-6" />
            <p className="text-gray-300 leading-relaxed mb-4">
              You have the right to decide whether to accept or reject cookies. You can manage your cookie preferences through your browser settings. Most browsers allow you to refuse all cookies or to accept only certain types of cookies.
            </p>
            <p className="text-gray-300 leading-relaxed">
              [Include instructions on how to manage cookies via browser settings or mention a cookie consent tool if implemented.] For example, in Chrome, you can go to "Settings" &gt; "Privacy and security" &gt; "Site settings" &gt; "Cookies and site data".
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl md:text-3xl font-semibold mb-4 text-white">Third-Party Cookies</h2>
            <Separator className="bg-codenity-accent/30 mb-6" />
            <p className="text-gray-300 leading-relaxed">
              Some third-party services integrated into our website may also set cookies. These include services like Google Analytics, embedded content from social media platforms, or other external tools. We do not have control over these third-party cookies. Please refer to the respective third party's privacy and cookie policies for more information.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl md:text-3xl font-semibold mb-4 text-white">Updates to This Policy</h2>
            <Separator className="bg-codenity-accent/30 mb-6" />
            <p className="text-gray-300 leading-relaxed">
              We may update our Cookie Policy from time to time to reflect changes in our practices or for other operational, legal, or regulatory reasons. We will notify you of any changes by posting the new Cookie Policy on this page and updating the "Last Updated" date.
            </p>
          </section>

          <section>
            <h2 className="text-2xl md:text-3xl font-semibold mb-4 text-white">Contact Us</h2>
            <Separator className="bg-codenity-accent/30 mb-6" />
            <p className="text-gray-300 leading-relaxed">
              If you have any questions about this Cookie Policy, please contact us:
            </p>
            <p className="text-gray-300 leading-relaxed mt-2">
              Email: <a href="mailto:cookies@codenity.live" className="text-codenity-accent hover:underline">cookies@codenity.live</a>
            </p>
            {/* Or link to a contact form section/page */}
            {/* <Button variant="link" className="text-codenity-accent p-0 mt-2" onClick={openModal}>Contact Us</Button> */}
          </section>
        </article>
      </div>
      <Footer />
    </div>
  );
};

export default CookiePolicy;