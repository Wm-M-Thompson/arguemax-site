import Link from 'next/link';

export default function Home() {
  return (
    <>
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 bg-gradient-to-b from-[#eaeef6] to-[#d0d8e8]">
          <div className="container px-4 md:px-6 mx-auto">
            <div className="flex flex-col items-center space-y-8 text-center max-w-4xl mx-auto">
              <div className="space-y-6">
                <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl text-gray-900">
                  LikableLogic.org
                </h1>
                <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
                  LikableLogic.org is a 501(c)(3) nonprofit dedicated to education and the open exchange of important information often overlooked in mainstream discourse.
                </p>
                <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
                  We foster respectful dialogue to build understanding to improve society. This was the goal behind the sale of playing cards successfully sold on Amazon to positive reviews. Links to these pages can be found{' '}
                  <a 
                    href="https://www.amazon.com/People-Fight-Playing-Original-Version/dp/B08V57CZQS" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="underline hover:text-blue-600"
                  >
                    here (Original Version)
                  </a>,{' '}
                  <a 
                    href="https://www.amazon.com/People-Fight-Playing-Cards-Version/dp/B09NHSM6D2" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="underline hover:text-blue-600"
                  >
                    here (Plain Version)
                  </a>, and{' '}
                  <a 
                    href="https://www.amazon.com/People-Fight-Playing-Patriot-Version/dp/B09J48C77H" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="underline hover:text-blue-600"
                  >
                    here (Patriot Version)
                  </a>.
                </p>
                <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
                  We are currently seeking donations to promote and support this venture. All donations are tax deductible.
                </p>

                {/* Donate Button */}
                <div className="pt-8">
                  <Link
                    href="/donate"
                    className="inline-flex items-center justify-center rounded-md bg-red-600 px-8 py-6 text-lg font-semibold text-white shadow-lg hover:bg-red-700 transition-all duration-200"
                  >
                    Donate Now →
                  </Link>
                </div>

                {/* Help Page Link */}
                <p className="text-lg text-gray-700">
                  More information can be found on the help page
                </p>
                <div className="pb-6">
                  <Link
                    href="/help"
                    className="inline-flex items-center justify-center rounded-md border-2 border-gray-400 bg-white px-8 py-6 text-lg font-medium text-gray-900 hover:bg-gray-50 transition-all duration-200"
                  >
                    Visit Help Page →
                  </Link>
                </div>

                {/* Subtle Future Initiatives Section */}
                <div className="text-sm text-gray-600 mt-12 opacity-80 max-w-3xl leading-relaxed space-y-4">
                  <p>
                    Two major new initiatives are now in active development, addressing critical global challenges in peace-building and aviation safety through communication, technology, and collaboration. Participation and detailed discussion happen in our community forum.
                  </p>
                  <p>
                    We invite you to join us:{' '}
                    <a
                      href="https://forum.likablelogic.org"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="underline hover:text-blue-600"
                    >
                      forum.likablelogic.org
                    </a>
                  </p>
                  <p className="font-medium">
                    All donations are tax-deductible • EIN: 46-5434782
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}