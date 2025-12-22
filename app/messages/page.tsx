export default function MessagesPage() {
  return (
    <main className="min-h-screen bg-gray-50 pt-20">
      <div className="max-w-7xl mx-auto px-6 py-12">
        {/* Header */}
        <div className="text-center mb-10">
          <h1 className="text-5xl font-bold text-gray-900 mb-4">Messages & Community</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Join the conversation! Ask questions, share insights, and connect with others learning programming, GIS, design patterns, and more.
            All discussions are open, friendly, and beginner-welcome.
          </p>
        </div>

        {/* Embedded Discourse Forum */}
         {/* ← REPLACE with your actual Discourse URL */}
        <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
          <iframe
            src="https://discourse.likablelogic.org" 
            title="LikableLogic Community Forum"
            className="w-full h-screen min-h-[800px] border-0"
            allowFullScreen
          />
        </div>

        {/* Fallback note if no Discourse yet */}
        <div className="text-center mt-8 text-gray-500">
          <p>Forum coming soon? No problem — this page is ready when you are.</p>
          <p className="text-sm mt-2">
            Current Discourse URL: <code className="bg-gray-200 px-2 py-1 rounded">https://discourse.likablelogic.org</code>
          </p>
        </div>
      </div>
    </main>
  );
}