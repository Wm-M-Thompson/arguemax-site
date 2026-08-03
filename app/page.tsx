'use client';

import Image from 'next/image';
import Link from 'next/link';
import useEmblaCarousel from 'embla-carousel-react';
import { useCallback } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

export default function Home() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });

  const scrollPrev = useCallback(() => emblaApi && emblaApi.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi && emblaApi.scrollNext(), [emblaApi]);

  const panels = [
    { title: 'Panel 1', href: '/panel1' },
    { title: 'Panel 2', href: '/panel2' },
    { title: 'Panel 3', href: '/panel3' },
    { title: 'Panel 4', href: '/panel4' },
    { title: 'Panel 5', href: '/panel5' },
    { title: 'Panel 6', href: '/panel6' },
    { title: 'Panel 7', href: '/panel7' },
  ];

  return (
    <>
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 bg-gradient-to-b from-[#eaeef6] to-[#d0d8e8]">
          <div className="container px-4 md:px-6 mx-auto">
            <div className="flex flex-col items-center space-y-8 text-center max-w-4xl mx-auto">
              <div className="space-y-6">
                {/* Logo */}
                <div className="relative w-48 h-48 md:w-64 md:h-64 mx-auto">
                  <Image
                    src="/image/logo.png"
                    alt="ArgueMax.com Logo"
                    fill
                    className="object-contain drop-shadow-lg"
                    priority
                  />
                </div>

                <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl text-gray-900">
                  ArgueMax.com
                </h1>


                {/* Carousel */}
                <div className="relative max-w-5xl mx-auto mt-12">
                  <div className="overflow-hidden rounded-xl" ref={emblaRef}>
                    <div className="flex">
                      {panels.map((panel, index) => (
                        <div key={index} className="flex-none w-full px-4">
                          <div className="bg-white rounded-xl shadow-xl p-16 text-center min-h-96 flex flex-col justify-center">
                            <h3 className="text-4xl font-bold mb-8 text-gray-900">{panel.title}</h3>
                            <p className="text-xl text-gray-600 mb-10">
                              Content for {panel.title} will go here.
                            </p>
                            <Link 
                              href={panel.href} 
                              className="inline-block bg-red-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-red-700 transition"
                            >
                              Explore {panel.title}
                            </Link>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Arrows */}
                  <button
                    onClick={scrollPrev}
                    className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white rounded-full p-4 shadow-2xl z-10 transition"
                  >
                    <ChevronLeft className="w-10 h-10 text-gray-800" />
                  </button>
                  <button
                    onClick={scrollNext}
                    className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white rounded-full p-4 shadow-2xl z-10 transition"
                  >
                    <ChevronRight className="w-10 h-10 text-gray-800" />
                  </button>

                  {/* Dots */}
                  <div className="flex justify-center mt-8 space-x-3">
                    {panels.map((_, index) => (
                      <button
                        key={index}
                        onClick={() => emblaApi && emblaApi.scrollTo(index)}
                        className="w-4 h-4 rounded-full bg-gray-400 hover:bg-gray-600 transition"
                      />
                    ))}
                  </div>
                </div>

                {/* Donate Button */}
                <div className="pt-12">
                  <Link
                    href="/donate"
                    className="inline-flex items-center justify-center rounded-md bg-red-600 px-10 py-8 text-2xl font-bold text-white shadow-2xl hover:bg-red-700 transition-all duration-300"
                  >
                    Donate Now →
                  </Link>
                </div>

                {/* Help Page Link */}
                <p className="text-lg text-gray-700 mt-8">
                  More information can be found on the help page
                </p>
                <div className="pb-8">
                  <Link
                    href="/help"
                    className="inline-flex items-center justify-center rounded-md border-4 border-gray-400 bg-white px-10 py-8 text-xl font-medium text-gray-900 hover:bg-gray-50 transition-all duration-300"
                  >
                    Visit Help Page →
                  </Link>
                </div>

                {/* Subtle Future Initiatives Section */}
                <div className="text-base text-gray-600 mt-16 opacity-80 max-w-3xl leading-relaxed space-y-6 border-t pt-8">
                  <p>
                    We invite you to join us:{' '}
                    <a
                      href="https://forum.arguemax.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="underline hover:text-blue-600 font-medium"
                    >
                      forum.arguemax.com
                    </a>
                  </p>
                  <p className="font-bold text-gray-800">
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