'use client';
import Link from 'next/link';
import React from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { usePathname } from 'next/navigation';

export default function Navbar() {
  const currentRoute = usePathname();
  return (
    <nav className="hidden fixed right-0 left-0 md:block border-b-2 bg-white/60 backdrop-blur-md">
      <div className="md:px-8 lg:px-36 container">
        <div className="py-3 flex items-center justify-between">
          <div className="flex items-center">
            <h2 className="font-bold text-lg">mhmmd azmi</h2>
            <ul className="pl-5 flex gap-x-3">
              <li className={`hover:bg-gray-200 px-2 rounded-md ease-in-out duration-300 ${currentRoute === '/' ? `font-bold text-red-700` : ``}`}>
                <Link href={'/'}>Home</Link>
              </li>
              <li className={`hover:bg-gray-200 px-2 rounded-md ease-in-out duration-300 ${currentRoute === '/about' ? `font-bold text-red-700` : ``}`}>
                <Link href={'/about'}>About</Link>
              </li>
              <li className={`hover:bg-gray-200 px-2 rounded-md ease-in-out duration-300 ${currentRoute === '/projects' ? `font-bold text-red-700` : ``}`}>
                <Link href={'/projects'}>Projects</Link>
              </li>
            </ul>
          </div>
          <div className="border-l-2 pl-4">
            <ul className="flex gap-x-2">
              <li>
                <Link className="hover:text-red-700 duration-150 ease-in-out" href={'https://github.com/Azmye'}>
                  <FaGithub size={28} />
                </Link>
              </li>
              <li>
                <Link className="hover:text-red-700 duration-150 ease-in-out" href={'https://www.linkedin.com/in/mhmmd-azmi/'}>
                  <FaLinkedin size={28} />
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
}
