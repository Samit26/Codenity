import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Separator } from '@/components/ui/separator';

interface PrivacyPolicyProps {
  openModal: () => void; // Prop to open the contact modal
}

const PrivacyPolicy: React.FC<PrivacyPolicyProps> = ({ openModal }) => {
  return (
    <div className="min-h-screen bg-codenity-dark text-white pt-16">
      <Navbar openModal={openModal} />
      <div className="container mx-auto px-4 py-12 md:py-20">
        <article className="max-w-4xl mx-auto">
          <h1 className="text-3xl md:text-5xl font-bold mb-6 text-center gradient-text">
            Privacy Policy
          </h1>
          <p className="text-lg text-gray-300 mb-12 text-center max-w-2xl mx-auto">
            Your privacy is important to us. This policy explains how we collect, use, and protect your information.
          </p>

          <section className="mb-12">
            <h2 className="text-2xl md:text-3xl font-semibold mb-4 text-white">Introduction</h2>
            <Separator className="bg-codenity-accent/30 mb-6" />
            <p className="text-gray-300 leading-relaxed">
              Welcome to Codenity.live. Codenity is an IT company specializing in website and app development. This Privacy Policy outlines our practices regarding the collection, use, and disclosure of your information when you visit our website or use our services. We are committed to protecting your privacy and handling your data responsibly, in compliance with applicable data protection laws, including GDPR and CCPA.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl md:text-3xl font-semibold mb-4 text-white">Information We Collect</h2>
            <Separator className="bg-codenity-accent/30 mb-6" />
            <p className="text-gray-300 leading-relaxed mb-4">
              We collect information to provide and improve our services. This may include:
            </p>
            <ul className="list-disc list-inside text-gray-300 space-y-2 pl-4">
              <li><span className="font-semibold text-codenity-accent">Personal Data:</span> Information you voluntarily provide, such as your name, email address, phone number, and any other details you include when contacting us or submitting a quote request.</li>
              <li><span className="font-semibold text-codenity-accent2">Technical Data:</span> Information automatically collected when you visit our site, including your IP address, browser type, operating system, referring URLs, pages viewed, and the dates/times of your visits.</li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl md:text-3xl font-semibold mb-4 text-white">How We Use Your Information</h2>
            <Separator className="bg-codenity-accent/30 mb-6" />
            <p className="text-gray-300 leading-relaxed">
              We use the collected information for various purposes, including:
            </p>
            <ul className="list-disc list-inside text-gray-300 space-y-2 pl-4">
              <li>To provide and maintain our services.</li>
              <li>To respond to your inquiries and requests, including quote requests.</li>
              <li>To improve, personalize, and expand our services.</li>
              <li>To understand and analyze how you use our website.</li>
              <li>To communicate with you, including sending updates and promotional materials (with your consent where required).</li>
              <li>For security purposes and to detect and prevent fraud.</li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl md:text-3xl font-semibold mb-4 text-white">Cookies and Tracking Technologies</h2>
            <Separator className="bg-codenity-accent/30 mb-6" />
            <p className="text-gray-300 leading-relaxed">
              We use cookies and similar tracking technologies to track activity on our website and hold certain information. Cookies are files with a small amount of data which may include an anonymous unique identifier. You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent. However, if you do not accept cookies, you may not be able to use some portions of our Service.
              {/* Add a link to a separate cookie policy if you create one */}
              {/* <Link to="/cookie-policy" className="text-codenity-accent hover:underline">Learn more about our Cookie Policy.</Link> */}
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl md:text-3xl font-semibold mb-4 text-white">Data Sharing and Third Parties</h2>
            <Separator className="bg-codenity-accent/30 mb-6" />
            <p className="text-gray-300 leading-relaxed">
              We may share your information with third-party service providers to facilitate our services, perform Service-related services, or assist us in analyzing how our Service is used. These third parties have access to your Personal Data only to perform these tasks on our behalf and are obligated not to disclose or use it for any other purpose. We do not sell your personal data.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl md:text-3xl font-semibold mb-4 text-white">Data Security</h2>
            <Separator className="bg-codenity-accent/30 mb-6" />
            <p className="text-gray-300 leading-relaxed">
              The security of your data is important to us, but remember that no method of transmission over the Internet, or method of electronic storage is 100% secure. While we strive to use commercially acceptable means to protect your Personal Data, we cannot guarantee its absolute security.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl md:text-3xl font-semibold mb-4 text-white">User Rights</h2>
            <Separator className="bg-codenity-accent/30 mb-6" />
            <p className="text-gray-300 leading-relaxed">
              Depending on your location, you may have certain rights regarding your personal data, including:
            </p>
            <ul className="list-disc list-inside text-gray-300 space-y-2 pl-4">
              <li>The right to access the personal data we hold about you.</li>
              <li>The right to request correction of inaccurate personal data.</li>
              <li>The right to request deletion of your personal data.</li>
              <li>The right to object to the processing of your personal data.</li>
              <li>The right to data portability.</li>
            </ul>
            <p className="text-gray-300 leading-relaxed mt-4">
              To exercise any of these rights, please contact us using the information below.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl md:text-3xl font-semibold mb-4 text-white">Contact Information</h2>
            <Separator className="bg-codenity-accent/30 mb-6" />
            <p className="text-gray-300 leading-relaxed">
              If you have any questions about this Privacy Policy, please contact us:
            </p>
            <p className="text-gray-300 leading-relaxed mt-2">
              Email: <a href="mailto:privacy@codenity.live" className="text-codenity-accent hover:underline">privacy@codenity.live</a>
            </p>
            {/* Or link to a contact form section/page */}
            {/* <Button variant="link" className="text-codenity-accent p-0 mt-2" onClick={openModal}>Contact Us</Button> */}
          </section>

          <section>
            <h2 className="text-2xl md:text-3xl font-semibold mb-4 text-white">Updates to This Policy</h2>
            <Separator className="bg-codenity-accent/30 mb-6" />
            <p className="text-gray-300 leading-relaxed">
              We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page. You are advised to review this Privacy Policy periodically for any changes. Changes to this Privacy Policy are effective when they are posted on this page.
            </p>
          </section>
        </article>
      </div>
      <Footer />
    </div>
  );
};

export default PrivacyPolicy;