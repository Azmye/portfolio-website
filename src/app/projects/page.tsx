import React from "react";
import playwatch from "/public/image/projects/playwatch.png";
import dumbflix from "/public/image/projects/dumbflix.png";
import waysfood from "/public/image/projects/waysfood.png";
import ProjectCard from "@/components/projects/projectCard";
import MagicMatch from "/public/image/projects/magicMatch.png";
import erm from "/public/image/projects/erm.png";

export default function projects() {
  return (
    <div className="px-4 pt-16 pb-10 md:px-8 lg:px-36 lg:pt-20">
      <div className="lg:flex md:gap-x-5">
        <div className="mb-5 md:w-full md:mb-2 lg:w-1/5 lg:mb-0 dark:text-white">
          <h2 className="font-bold text-4xl lg:text-6xl">Projects</h2>
          <p className="text-lg mt-2 dark:text-white/80">Some of my projects</p>
        </div>
        <div className="md:w-full lg:w-4/5">
          <ProjectCard
            image={erm}
            title={`E-Medical Records`}
            tech={[`React`, `Typescript`]}
            case={`Electronic Medical Records compliant with Ministry of Health standards. (Due to copyright purposes, I cannot show all the screenshots.)`}
          />
          <ProjectCard
            image={playwatch}
            title={`Playwatch`}
            tech={[`React`]}
            live={`https://playwatch-lime.vercel.app/`}
            case={`Learning how to consume Rest API.`}
            repo={`https://github.com/Azmye/playwatch`}
          />
          <ProjectCard
            image={dumbflix}
            title={`Dumbflix`}
            tech={[`React`, `Go-lang`, `Postgree`]}
            live={`https://dw-front-end.vercel.app/`}
            case={`Learning Netflix Flow system.`}
            client={`https://github.com/Azmye/DW-FrontEnd`}
            server={`https://github.com/Azmye/dw-backend`}
          />
          <ProjectCard
            image={waysfood}
            title={`Waysfood`}
            tech={[`React`, `Go-lang`, `Postgree`]}
            live={`https://waysfood-front-end-git-main-azmye.vercel.app/`}
            case={`Learning food ordering system.`}
            client={`https://github.com/Azmye/Waysfood-FrontEnd`}
            server={`https://github.com/Azmye/Waysfood-backend`}
          />
          <ProjectCard
            image={MagicMatch}
            title={`Magic Match`}
            tech={[`NextJs`]}
            live={`https://memory-game-six-peach.vercel.app/`}
            case={`Creating a simple memory game.`}
            repo={`https://github.com/Azmye/memory-game`}
          />
        </div>
      </div>
    </div>
  );
}
