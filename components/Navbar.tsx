'use client';

import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="bg-white shadow-lg sticky top-0 z-50">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <Link href="/" className="text-3xl font-bold text-red-600 hover:text-red-700">
          ArgueMax.com
        </Link>

        <div className="hidden md:flex space-x-10">
          <Link href="/" className="text-gray-800 hover:text-red-600 font-medium text-lg">
            Home
          </Link>
          <Link href="/projects" className="text-gray-800 hover:text-red-600 font-medium text-lg">
            Projects
          </Link>
          <Link href="/messages" className="text-gray-800 hover:text-red-600 font-medium text-lg">
            Messages
          </Link>
          <Link href="/donate" className="text-gray-800 hover:text-red-600 font-medium text-lg">
            Donate
          </Link>
          <Link href="/help" className="text-gray-800 hover:text-red-600 font-medium text-lg">
            Help
          </Link>
        </div>

        {/* Simple mobile menu placeholder – can expand later */}
        <div className="md:hidden text-gray-800">
          Menu
        </div>
      </div>
    </nav>
  );
}
