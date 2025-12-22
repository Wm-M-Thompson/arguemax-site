'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useRef } from 'react';
import { Home, MessageSquare, Folder, Archive, Heart, HelpCircle } from 'lucide-react';

export default function Navbar() {
  const pathname = usePathname();
  const gooeyRef = useRef<HTMLDivElement>(null);
  const itemsRef = useRef<(HTMLLIElement | null)[]>([]);

const links = [
  { name: 'Home', href: '/', icon: Home },
  { name: 'Projects', href: '/projects', icon: Folder },
  { name: 'Messages', href: '/messages', icon: MessageSquare },
  { name: 'Donate', href: '/donate', icon: Heart },  // Changed name + Heart icon for donation
  { name: 'Help', href: '/help', icon: HelpCircle },
];

  useEffect(() => {
    const gooey = gooeyRef.current;
    if (!gooey) return;

    const handleMouseEnter = (index: number) => {
      const item = itemsRef.current[index];
      if (item) {
        const rect = item.getBoundingClientRect();
        const navRect = item.closest('nav')!.getBoundingClientRect();
        gooey.style.top = `${rect.top - navRect.top + rect.height / 2}px`;
        gooey.style.left = `${rect.left - navRect.left + rect.width / 2}px`;
        gooey.style.transform = 'translate(-50%, -50%) scale(1)';
        gooey.style.opacity = '1';
      }
    };

    const handleMouseLeave = () => {
      gooey.style.opacity = '0';
      gooey.style.transform = 'translate(-50%, -50%) scale(1)';
    };

    const items = itemsRef.current;
    items.forEach((item, index) => {
      if (item) {
        item.addEventListener('mouseenter', () => handleMouseEnter(index));
        item.addEventListener('mouseleave', handleMouseLeave);
      }
    });

    return () => {
      items.forEach((item, index) => {
        if (item) {
          item.removeEventListener('mouseenter', () => handleMouseEnter(index));
          item.removeEventListener('mouseleave', handleMouseLeave);
        }
      });
    };
  }, []);

  return (
    <nav className="fixed top-4 left-4 w-24 bg-white rounded-xl py-8 px-4 shadow-2xl h-[calc(100vh-2rem)] flex flex-col z-50">
      <ul className="mt-16 flex flex-col gap-12">
        {links.map((link, index) => {
          const Icon = link.icon;

          return (
            <li key={link.name} ref={el => itemsRef.current[index] = el} className="relative group">
              <Link
                href={link.href}
                className="flex items-center justify-center w-14 h-14"
              >
                <Icon size={24} strokeWidth={1.8} className="text-gray-600 transition-colors duration-200 group-hover:text-white" />
                <span className="absolute left-full ml-6 opacity-0 group-hover:opacity-100 pointer-events-none bg-white text-[#406ff3] font-medium px-5 py-3 rounded-full shadow-lg whitespace-nowrap transition-all duration-300 -translate-x-4 group-hover:translate-x-0">
                  {link.name}
                </span>
              </Link>
            </li>
          );
        })}

        {/* Gooey blob - positioned with JS */}
        <div ref={gooeyRef} className="absolute w-14 h-14 bg-[#406ff3] rounded-full -z-10 pointer-events-none opacity-0 transition-all duration-250" style={{ transform: 'translate(-50%, -50%)' }} />
      </ul>
    </nav>
  );
}