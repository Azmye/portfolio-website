'use client';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { usePathname } from 'next/navigation';
import { MdDarkMode, MdLightMode } from 'react-icons/md';

export default function NavbarMobile() {
  const currentRoute = usePathname();
  const [theme, setTheme] = useState(null);

  useEffect(() => {
    if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [theme]);

  const handleTheme = (mode: any) => {
    setTheme(mode);
    localStorage.theme = mode;
  };
  return (
    <nav className="fixed right-0 left-0 top-0 bg-white/60 backdrop-blur-sm md:hidden dark:text-white dark:bg-transparent">
      <div className="container">
        <div className="px-4 py-3 flex items-center justify-between border-b-2">
          <div className="flex items-center">
            <h2 className="font-bold text-lg">
              mhmmd <span className="text-red-700">azmi</span>
            </h2>
          </div>
          <div className="flex items-center gap-x-3">
            <div className="flex items-center">
              {localStorage?.theme === 'dark' ? (
                <button onClick={() => handleTheme('light')} className="text-white hover:text-red-700">
                  <MdDarkMode size={26} />
                </button>
              ) : (
                <button onClick={() => handleTheme('dark')} className="text-black hover:text-red-700">
                  <MdLightMode size={26} />
                </button>
              )}
            </div>
            <ul className="border-l-2 pl-4  flex gap-x-2">
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
