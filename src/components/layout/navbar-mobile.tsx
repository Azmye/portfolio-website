'use client';
import Link from 'next/link';
import React from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { usePathname } from 'next/navigation';

export default function NavbarMobile() {
  const currentRoute = usePathname();
  return (
    <nav className="fixed right-0 left-0 top-0 bg-white/60 backdrop-blur-sm md:hidden">
      <div className="container">
        <div className="px-4 py-3 flex items-center justify-between border-b-2">
          <div className="flex items-center">
            <h2 className="font-bold text-lg">
              mhmmd <span className="text-red-700">azmi</span>
            </h2>
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
