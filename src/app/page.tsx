import React from 'react';
import profilePics from '/public/image/profile.jpg';
import Image from 'next/image';
import { HiOutlineArrowLongRight } from 'react-icons/hi2';
import DownloadButton from '@/components/buttons/resume-downloader';

export default function Home() {
  return (
    <div className="px-4 pt-16 pb-20 md:px-8 lg:px-36 lg:pt-20">
      <div className="md:flex">
        <div className="md:w-4/6 lg:w-3/5 my-auto">
          <h2 className="text-3xl md:text-6xl font-bold dark:text-white">
            Hi, I&apos;m <span className="text-red-700">Azmi</span>
          </h2>
          <p className="text-xl mt-2 dark:text-white/80">As a highly motivated and skilled front-end developer, I am excited to bring my passion for coding to a new role.</p>
          <div className="h-10 md:h-20">
            <DownloadButton>
              <span className="flex">
                <HiOutlineArrowLongRight className="text-2xl mr-3" /> Resume
              </span>
            </DownloadButton>
          </div>
        </div>
        <div className="md:w-2/6 lg:w-2/5">
          <div className="rounded-l-md overflow-hidden relative lg:ml-auto lg:w-96">
            <Image priority={true} className="w-full" src={profilePics} alt="Profile Image" />
            <div className="absolute top-0 left-0 right-0 bottom-0 w-full h-full bg-gradient-to-t via-transparent from-transparent to-white md:hidden dark:hidden"></div>
          </div>
        </div>
      </div>
      <div className="flex flex-col items-end justify-end ">
        <div className="w-2/3 h-1 bg-black mt-3 rounded-l-md dark:bg-white"></div>
        <div className="w-4/5 h-1 bg-red-700 mt-3 rounded-l-md"></div>
      </div>
    </div>
  );
}
