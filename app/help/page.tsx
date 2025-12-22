import { HelpCircle, Mail, MessageCircle, Heart } from 'lucide-react';

export default function HelpPage() {
  return (
    <main className="min-h-screen bg-gray-50 pt-20">
      <div className="max-w-4xl mx-auto px-6 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <HelpCircle className="w-16 h-16 text-indigo-600 mx-auto mb-6" />
          <h1 className="text-5xl font-bold text-gray-900 mb-4">Help & Support</h1>
          <p className="text-xl text-gray-600">
            We're here to help you get the most out of LikableLogic.
          </p>
        </div>

        {/* Support Options */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {/* Option 1 */}
          <div className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition">
            <MessageCircle className="w-10 h-10 text-indigo-600 mb-4" />
            <h2 className="text-2xl font-semibold text-gray-900 mb-3">Community Forum</h2>
            <p className="text-gray-600 mb-4">
              Ask questions, share tips, and connect with other learners. Our forum is beginner-friendly and moderated for kindness.
            </p>
            <a
              href="/messages"
              className="text-indigo-600 font-medium hover:text-indigo-700 inline-flex items-center"
            >
              Go to Forum → (Coming Soon)
            </a>
          </div>

          {/* Option 2 */}
          <div className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition">
            <Mail className="w-10 h-10 text-indigo-600 mb-4" />
            <h2 className="text-2xl font-semibold text-gray-900 mb-3">Email Us</h2>
            <p className="text-gray-600 mb-4">
              For direct help, suggestions, or partnership inquiries, reach out anytime.
            </p>
            <a
              href="mailto:help@likablelogic.org"
              className="text-indigo-600 font-medium hover:text-indigo-700"
            >
              help@likablelogic.org
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div className="bg-white rounded-2xl shadow-lg p-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-6">Quick Links</h2>
          <ul className="space-y-4 text-lg">
            <li>
              <a href="/" className="text-indigo-600 hover:underline">Home</a> – Back to the main page
            </li>
            <li>
              <a href="/projects" className="text-indigo-600 hover:underline">Projects</a> – See what we're building
            </li>
            <li>
              <a href="/donate" className="text-indigo-600 hover:underline">Donate</a> – Support our nonprofit mission
            </li>
          </ul>
        </div>

        {/* Footer Note */}
        <div className="text-center mt-12 text-gray-600">
          <p className="flex items-center justify-center">
            Made with <Heart className="w-5 h-5 text-red-500 mx-1" /> for learners everywhere.
          </p>
        </div>
      </div>
    </main>
  );
}