import { Folder, Heart, MessageCircle } from 'lucide-react';

export default function ProjectsPage() {
  return (
    <main className="min-h-screen bg-gray-50 pt-20">
      <div className="max-w-5xl mx-auto px-6 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold text-gray-900 mb-4">Projects</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            LikableLogic is a 501(c)(3) nonprofit dedicated to making technical education accessible, clear, and enjoyable.
            These are the open-source and community-driven projects we're currently building.
          </p>
        </div>

        {/* Project Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Project 1 */}
          <div className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition">
            <div className="flex items-center mb-4">
              <Folder className="w-8 h-8 text-indigo-600 mr-3" />
              <h2 className="text-2xl font-semibold text-gray-900">Video Transcription Pipeline</h2>
            </div>
            <p className="text-gray-600 mb-6">
              Fully offline, open-source toolset using whisper.cpp to transcribe educational videos into searchable text and subtitles — perfect for accessibility and content repurposing.
            </p>
            <p className="text-sm text-gray-500">Status: <span className="font-medium text-green-600">Active</span></p>
          </div>

          {/* Project 2 */}
          <div className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition">
            <div className="flex items-center mb-4">
              <MessageCircle className="w-8 h-8 text-indigo-600 mr-3" />
              <h2 className="text-2xl font-semibold text-gray-900">Messages Archive</h2>
            </div>
            <p className="text-gray-600 mb-6">
              Curated collection of the best beginner-friendly explanations from YouTube tutorials on programming, GIS, design patterns, and app development — transcribed and summarized.
            </p>
            <p className="text-sm text-gray-500">Status: <span className="font-medium text-green-600">Active</span></p>
          </div>

          {/* Project 3 - Future/Placeholder */}
          <div className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition opacity-90">
            <div className="flex items-center mb-4">
              <Heart className="w-8 h-8 text-indigo-600 mr-3" />
              <h2 className="text-2xl font-semibold text-gray-900">Virtual Learning Assistant</h2>
            </div>
            <p className="text-gray-600 mb-6">
              An AI-powered guide that helps newcomers navigate technical topics with friendly, step-by-step explanations and real-time Q&A.
            </p>
            <p className="text-sm text-gray-500">Status: <span className="font-medium text-amber-600">In Planning</span></p>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <p className="text-lg text-gray-700 mb-6">
            All projects are open-source and community-supported.
          </p>
          <a
            href="/donate"
            className="inline-flex items-center px-8 py-4 bg-indigo-600 text-white font-medium rounded-xl hover:bg-indigo-700 transition"
          >
            <Heart className="w-5 h-5 mr-2" />
            Support Our Mission
          </a>
        </div>
      </div>
    </main>
  );
}