import React from 'react';
import profilePics from '/public/image/profile.jpg';
import Image from 'next/image';
import { HiOutlineArrowLongRight } from 'react-icons/hi2';

export default function Home() {
  return (
    <div className="px-4 pt-16 pb-20 md:px-8 lg:px-36 lg:pt-8">
      <div className="md:flex">
        <div className="md:w-4/6 lg:w-3/5 my-auto">
          <h2 className="text-3xl md:text-6xl font-bold">
            Hi, I&apos;m <span className="text-red-700">Azmi</span>
          </h2>
          <p className="text-xl mt-2">As a highly motivated and skilled front-end developer, I am excited to bring my passion for coding to a new role.</p>
          <div className="h-10 md:h-20">
            <p className="text-red-600 w-fit md:px-2 py-1 font-bold flex items-center gap-x-2 mt-5 cursor-pointer hover:text-red-700 duration-300 ease-in-out hover:border-b-2 hover:border-r-2 border-red-700 md:bg-transparent md:text-red-900">
              <HiOutlineArrowLongRight className="text-2xl" /> Resume
            </p>
          </div>
        </div>
        <div className="md:w-2/6 lg:w-2/5">
          <div className="rounded-l-md overflow-hidden relative lg:ml-auto lg:w-96">
            <Image className="w-full" src={profilePics} alt="Profile Image" />
            <div className="absolute top-0 left-0 right-0 bottom-0 w-full h-full bg-gradient-to-t from-white/60 via-transparent to-white md:hidden"></div>
          </div>
        </div>
      </div>
      <div className="flex flex-col items-end justify-end ">
        <div className="w-2/3 h-1 bg-black mt-3 rounded-l-md"></div>
        <div className="w-4/5 h-1 bg-red-700 mt-3 rounded-l-md"></div>
      </div>
    </div>
  );
}
