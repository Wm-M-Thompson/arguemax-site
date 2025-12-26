import Link from 'next/link';

export default function HelpPage() {
  return (
    <div className="container mx-auto px-4 py-12 max-w-4xl">
      <h1 className="text-4xl font-bold text-center mb-8">Help & Support</h1>
      
      <div className="prose prose-lg mx-auto text-gray-700 space-y-6">
        <p>
          Welcome to the ArgueMax.com Help page. We&apos;re here to assist you with any questions you may have about our mission, projects, donations, or the community forum.
        </p>
        
        <h2 className="text-2xl font-semibold mt-8">Frequently Asked Questions</h2>
        <ul className="list-disc pl-6 space-y-4">
          <li>
            <strong>What is ArgueMax.com?</strong><br />
            We are a 501(c)(3) nonprofit dedicated to education and the open exchange of important information often overlooked in mainstream discourse.
          </li>
          <li>
            <strong>How can I support your work?</strong><br />
            You can make a tax-deductible donation on our <Link href="/donate" className="underline hover:text-blue-600">Donate page</Link>. Every contribution helps us continue our educational initiatives.
          </li>
          <li>
            <strong>How do I join the community discussion?</strong><br />
            Visit our forum at {' '}
            <a
              href="https://forum.arguemax.com"
              target="_blank"
              rel="noopener noreferrer"
              className="underline hover:text-blue-600"
            >
              forum.arguemax.com
            </a>{' '}
            to participate in conversations about our current and future projects.
          </li>
          <li>
            <strong>Is my donation tax-deductible?</strong><br />
            Yes! ArgueMax.com is a registered 501(c)(3) nonprofit. Our EIN is 46-5434782.
          </li>
        </ul>
        
        <h2 className="text-2xl font-semibold mt-8">Contact Us</h2>
        <p>
          For additional support or inquiries, please join our community forum or use the Donate page contact options. We&apos;re always happy to hear from supporters and participants.
        </p>
        
        <div className="text-center mt-12">
          <Link
            href="/"
            className="inline-flex items-center justify-center rounded-md bg-red-600 px-8 py-4 text-lg font-semibold text-white hover:bg-red-700 transition-all duration-200"
          >
            Return to Home
          </Link>
        </div>
      </div>
    </div>
  );
}