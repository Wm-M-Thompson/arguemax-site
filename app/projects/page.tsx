import { Folders } from 'lucide-react';

export default function ProjectsPage() {
  return (
    <div className="ml-32 min-h-screen bg-gradient-to-b from-[#eaeef6] to-white">
      {/* Hero Section */}
      <section className="py-20 px-10 text-center">
        <div className="flex justify-center mb-8">
          <div className="p-6 bg-white rounded-2xl shadow-lg inline-block">
            <Folders className="h-20 w-20 text-blue-600" />
          </div>
        </div>
        <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
          My Projects
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
          A collection of meaningful work in software, writing, research, and creative endeavors. 
          Each project reflects a commitment to clarity, logic, and positive impact.
        </p>
      </section>

      {/* Projects Grid - Ready for future cards */}
      <section className="px-10 pb-20">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {/* Placeholder cards - you can replace or add real ones later */}
          <div className="bg-white rounded-xl shadow-md p-8 hover:shadow-xl transition-shadow duration-300 border border-gray-200">
            <div className="bg-gray-200 border-2 border-dashed rounded-xl w-full h-48 mb-6" />
            <h3 className="text-2xl font-semibold text-gray-800 mb-3">Project Coming Soon</h3>
            <p className="text-gray-600">
              Detailed descriptions and live demos will be added as projects are completed.
            </p>
          </div>

          <div className="bg-white rounded-xl shadow-md p-8 hover:shadow-xl transition-shadow duration-300 border border-gray-200">
            <div className="bg-gray-200 border-2 border-dashed rounded-xl w-full h-48 mb-6" />
            <h3 className="text-2xl font-semibold text-gray-800 mb-3">Open Source Contributions</h3>
            <p className="text-gray-600">
              Ongoing work in tools for clarity, accessibility, and logical systems.
            </p>
          </div>

          <div className="bg-white rounded-xl shadow-md p-8 hover:shadow-xl transition-shadow duration-300 border border-gray-200">
            <div className="bg-gray-200 border-2 border-dashed rounded-xl w-full h-48 mb-6" />
            <h3 className="text-2xl font-semibold text-gray-800 mb-3">Research & Writing</h3>
            <p className="text-gray-600">
              Essays and technical documents exploring truth, reasoning, and human understanding.
            </p>
          </div>
        </div>

        {/* Optional centered message if you want fewer cards for now */}
        <div className="text-center mt-16">
          <p className="text-lg text-gray-500 italic">
            More projects will be showcased here as they reach completion.
          </p>
        </div>
      </section>
    </div>
  );
}