import React from 'react';
import Image from 'next/image';
import playwatch from '/public/image/projects/playwatch.png';
import dumbflix from '/public/image/projects/dumbflix.png';
import waysfood from '/public/image/projects/waysfood.png';
import ProjectCard from '@/components/projects/projectCard';

export default function projects() {
  return (
    <div className="px-4 pt-16 pb-10 md:px-8 lg:px-36 lg:pt-20">
      <div className="lg:flex md:gap-x-5">
        <div className="mb-5 md:w-full md:mb-2 lg:w-1/5 lg:mb-0">
          <h2 className="font-bold text-4xl lg:text-6xl">Projects</h2>
          <p className="text-lg mt-2">Some of my projects</p>
        </div>
        <div className="md:w-full lg:w-4/5">
          <ProjectCard image={playwatch} title={`Playwatch`} tech={[`React`]} live={`https://playwatch-lime.vercel.app/`} case={`Learning how to consume Rest API.`} repo={`https://github.com/Azmye/playwatch`} />
          <ProjectCard image={dumbflix} title={`Dumbflix`} tech={[`React`, `Go-lang`, `Postgree`]} case={`Learning Netflix Flow system.`} client={`https://github.com/Azmye/DW-FrontEnd`} server={`https://github.com/Azmye/dw-backend`} />
          <ProjectCard
            image={waysfood}
            title={`Waysfood`}
            tech={[`React`, `Go-lang`, `Postgree`]}
            case={`Learning food ordering system.`}
            client={`https://github.com/Azmye/Waysfood-FrontEnd`}
            server={`https://github.com/Azmye/Waysfood-backend`}
          />
        </div>
      </div>
    </div>
  );
}
