'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';

export default function BottomBarMobile() {
  const currentRoute = usePathname();
  return (
    <div className="fixed right-0 left-0 bottom-0 bg-white/60 backdrop-blur-sm border-t-2 border-white md:hidden dark:bg-transparent dark:text-red-300">
      <ul className="px-8 py-3 flex justify-between gap-x-3">
        <li className={`px-2 rounded-md ease-in-out duration-300 ${currentRoute === '/' ? `font-bold text-red-700` : ``}`}>
          <Link href={'/'}>Home</Link>
        </li>
        <li className={`px-2 rounded-md ease-in-out duration-300 ${currentRoute === '/about' ? `font-bold text-red-700` : ``}`}>
          <Link href={'/about'}>About</Link>
        </li>
        <li className={`px-2 rounded-md ease-in-out duration-300 ${currentRoute === '/projects' ? `font-bold text-red-700` : ``}`}>
          <Link href={'/projects'}>Projects</Link>
        </li>
      </ul>
    </div>
  );
}
