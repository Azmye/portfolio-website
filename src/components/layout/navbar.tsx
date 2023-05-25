'use client';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { MdDarkMode, MdLightMode } from 'react-icons/md';
import { usePathname } from 'next/navigation';

export default function Navbar() {
  const currentRoute = usePathname();
  const [theme, setTheme] = useState(null);
  const [localStrg, setLocalStrg] = useState('');

  useEffect(() => {
    const item = localStorage.getItem('theme');
    setLocalStrg(String(item));
  }, [theme]);

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
    <nav className="hidden fixed right-0 left-0 md:block border-b-2 bg-white/60 backdrop-blur-md dark:bg-transparent">
      <div className="md:px-8 lg:px-36 container">
        <div className="py-3 flex items-center justify-between">
          <div className="flex items-center dark:text-white">
            <h2 className="font-bold text-lg">mhmmd azmi</h2>
            <ul className="pl-5 flex gap-x-3">
              <li className={`hover:bg-gray-200 hover:dark:bg-zinc-700 px-2 rounded-md ease-in-out duration-300 ${currentRoute === '/' ? `font-bold text-red-700` : ``}`}>
                <Link href={'/'}>Home</Link>
              </li>
              <li className={`hover:bg-gray-200 hover:dark:bg-zinc-700 px-2 rounded-md ease-in-out duration-300 ${currentRoute === '/about' ? `font-bold text-red-700` : ``}`}>
                <Link href={'/about'}>About</Link>
              </li>
              <li className={`hover:bg-gray-200 hover:dark:bg-zinc-700 px-2 rounded-md ease-in-out duration-300 ${currentRoute === '/projects' ? `font-bold text-red-700` : ``}`}>
                <Link href={'/projects'}>Projects</Link>
              </li>
            </ul>
          </div>
          <div className="flex items-center gap-x-3">
            <div className="flex items-center">
              {theme === 'dark' || localStrg === 'dark' ? (
                <button onClick={() => handleTheme('light')} className="text-white hover:text-red-700">
                  <MdDarkMode size={26} />
                </button>
              ) : (
                <button onClick={() => handleTheme('dark')} className="text-black hover:text-red-700">
                  <MdLightMode size={26} />
                </button>
              )}
            </div>
            <ul className="border-l-2 pl-4 flex gap-x-2 dark:text-white">
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
