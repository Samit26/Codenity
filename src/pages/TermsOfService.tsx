import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Separator } from '@/components/ui/separator';

interface TermsOfServiceProps {
  openModal: () => void; // Prop to open the contact modal
}

const TermsOfService: React.FC<TermsOfServiceProps> = ({ openModal }) => {
  return (
    <div className="min-h-screen bg-codenity-dark text-white pt-16">
      <Navbar openModal={openModal} />
      <div className="container mx-auto px-4 py-12 md:py-20">
        <article className="max-w-4xl mx-auto">
          <h1 className="text-3xl md:text-5xl font-bold mb-6 text-center gradient-text">
            Terms of Service
          </h1>
          <p className="text-lg text-gray-300 mb-12 text-center max-w-2xl mx-auto">
            Please read these terms carefully before using our website.
          </p>

          <section className="mb-12">
            <h2 className="text-2xl md:text-3xl font-semibold mb-4 text-white">Introduction</h2>
            <Separator className="bg-codenity-accent/30 mb-6" />
            <p className="text-gray-300 leading-relaxed">
              Welcome to Codenity.live. We provide a platform offering coding resources, tools, tutorials, and a tech community designed to empower developers. These Terms of Service govern your access to and use of the Codenity.live website and services.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl md:text-3xl font-semibold mb-4 text-white">Acceptance of Terms</h2>
            <Separator className="bg-codenity-accent/30 mb-6" />
            <p className="text-gray-300 leading-relaxed">
              By accessing or using the Codenity.live website, you agree to be bound by these Terms of Service and our Privacy Policy. If you do not agree to these terms, please do not use our website.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl md:text-3xl font-semibold mb-4 text-white">User Responsibilities</h2>
            <Separator className="bg-codenity-accent/30 mb-6" />
            <p className="text-gray-300 leading-relaxed">
              You agree to use Codenity.live responsibly and legally. You must not misuse the site, engage in harmful activities, or violate any applicable laws or regulations.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl md:text-3xl font-semibold mb-4 text-white">Accounts and Registration</h2>
            <Separator className="bg-codenity-accent/30 mb-6" />
            <p className="text-gray-300 leading-relaxed">
              [Include this section if user accounts are implemented. Otherwise, remove or modify.] If you create an account on Codenity.live, you are responsible for maintaining the security of your account and you are fully responsible for all activities that occur under the account.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl md:text-3xl font-semibold mb-4 text-white">Content Ownership and Usage</h2>
            <Separator className="bg-codenity-accent/30 mb-6" />
            <p className="text-gray-300 leading-relaxed">
              All content provided on Codenity.live, unless otherwise stated, is owned by Codenity. You may use the content for personal, non-commercial purposes. [Include details about user-generated content if applicable.]
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl md:text-3xl font-semibold mb-4 text-white">Prohibited Activities</h2>
            <Separator className="bg-codenity-accent/30 mb-6" />
            <p className="text-gray-300 leading-relaxed">
              You are prohibited from engaging in activities such as hacking, spamming, distributing malware, or attempting to reverse-engineer the platform.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl md:text-3xl font-semibold mb-4 text-white">Disclaimers and Limitation of Liability</h2>
            <Separator className="bg-codenity-accent/30 mb-6" />
            <p className="text-gray-300 leading-relaxed">
              Codenity.live is provided "as is" without warranties of any kind. We are not liable for any damages arising from your use of the website, including service interruptions, data loss, or actions of third parties.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl md:text-3xl font-semibold mb-4 text-white">Termination</h2>
            <Separator className="bg-codenity-accent/30 mb-6" />
            <p className="text-gray-300 leading-relaxed">
              We reserve the right to suspend or terminate your access to Codenity.live at our sole discretion, without notice, for any violation of these Terms.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl md:text-3xl font-semibold mb-4 text-white">Changes to Terms</h2>
            <Separator className="bg-codenity-accent/30 mb-6" />
            <p className="text-gray-300 leading-relaxed">
              We may update these Terms of Service from time to time. We will notify you of any changes by posting the new Terms on this page.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl md:text-3xl font-semibold mb-4 text-white">Governing Law</h2>
            <Separator className="bg-codenity-accent/30 mb-6" />
            <p className="text-gray-300 leading-relaxed">
              These Terms shall be governed by and construed in accordance with the laws of [Your Jurisdiction].
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl md:text-3xl font-semibold mb-4 text-white">Contact Information</h2>
            <Separator className="bg-codenity-accent/30 mb-6" />
            <p className="text-gray-300 leading-relaxed">
              If you have any questions about these Terms of Service, please contact us at <a href="mailto:terms@codenity.live" className="text-codenity-accent hover:underline">terms@codenity.live</a>.
            </p>
          </section>
        </article>
      </div>
      <Footer />
    </div>
  );
};

export default TermsOfService;