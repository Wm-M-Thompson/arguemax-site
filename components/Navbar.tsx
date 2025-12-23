'use client';

import Link from 'next/link';
import { Home, Folders, MessageCircle, Heart, HelpCircle } from 'lucide-react';
import { useRef } from 'react';

const links = [
  { name: 'Home', href: '/', icon: Home },
  { name: 'Projects', href: '/projects', icon: Folders },
  { name: 'Messages', href: '/messages', icon: MessageCircle },
  { name: 'Donate', href: '/donate', icon: Heart },
  { name: 'Help', href: '/help', icon: HelpCircle },
];

export default function Navbar() {
  const itemsRef = useRef<(HTMLLIElement | null)[]>([]);

  return (
    <nav className="fixed left-0 top-0 h-screen w-32 bg-[#eaeef6] flex flex-col items-center py-8 space-y-8 z-10 border-r border-gray-300">
      {links.map((link, index) => {
        const Icon = link.icon;
        return (
          <li
            key={link.name}
            ref={(node) => {
              itemsRef.current[index] = node;
            }}
            className="list-none"
          >
            <Link
              href={link.href}
              className="flex flex-col items-center justify-center w-20 h-20 rounded-lg hover:bg-white/50 transition-all duration-200 group"
            >
              <Icon className="h-10 w-10 text-gray-800 group-hover:text-red-600 transition-colors" />
              <span className="text-xs mt-2 text-gray-800 group-hover:text-red-600 transition-colors">
                {link.name}
              </span>
            </Link>
          </li>
        );
      })}
    </nav>
  );
}