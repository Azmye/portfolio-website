import React from "react";
import { FaChevronCircleRight } from "react-icons/fa";
import {
  SiCreatereactapp,
  SiNodedotjs,
  SiGoland,
  SiJavascript,
  SiMysql,
  SiPostgresql,
  SiNextdotjs,
} from "react-icons/si";

export default function About() {
  return (
    <div className="px-4 pt-16 pb-16 md:px-8 lg:px-36 lg:pt-20">
      <div className="md:flex">
        <div className="md:w-1/5 text-start dark:text-white">
          <h2 className="font-bold text-4xl lg:text-6xl">About</h2>
          <p className="text-lg dark:text-white/80">Details about me</p>
        </div>
        <div className="md:w-4/5">
          <div className="mb-5 dark:text-white">
            <h2 className="hidden font-bold text-3xl md:text-4xl md:block lg:text-5xl">
              Let me introduce <span className="text-red-700">myself</span>
            </h2>
            <p className="mt-2 text-md text-justify dark:text-white/80">
              <span className="font-bold">
                My Name is Muhammad{" "}
                <span className="text-red-700 md:text-black md:dark:text-red-500">
                  Azmi
                </span>
              </span>
              , as a Frontend Developer I have actively contributed to the
              development of Electronic Medical Records and various Bootcamp
              Projects. Proficient in ReactJs, TypeScript, and JavaScript, I
              also have hands-on experience with CSS Frameworks including
              Tailwind and Material UI. I am passionate about collaborative
              work, consistently collaborating with fellow engineers to create
              visually appealing and highly functional websites.
            </p>
          </div>
          <div className="mb-5 dark:text-white">
            <h2 className="font-bold text-4xl">Experiences</h2>
            <div className="mt-2">
              <ul className="">
                <li className="border-b-2 pb-2">
                  <div className="flex items-center gap-x-3">
                    <FaChevronCircleRight className="text-red-700" />
                    <h2 className="font-bold text-2xl text-black dark:text-white">
                      Frontend Developer
                    </h2>
                  </div>
                  <div className="pl-7">
                    <h3 className="font-bold">
                      RSUD dr.R.Soedarsono Kota Pasuruan
                    </h3>
                    <ul className="list-disc pl-7">
                      <li>
                        Developing Electronic Medical Records for the Hospital
                        that has Ministry of health standards.
                      </li>
                      <li>
                        Developing attendance app with main features such as
                        face detections, user location and leave request.
                      </li>
                    </ul>
                    <p className="text-black/60 dark:text-white/60">
                      Aug 2023 - Present
                    </p>
                  </div>
                </li>
                <li className="border-b-2 pb-2">
                  <div className="flex items-center gap-x-3">
                    <FaChevronCircleRight className="text-red-700" />
                    <h2 className="font-bold text-2xl text-black dark:text-white">
                      Software Engineer (Internship)
                    </h2>
                  </div>
                  <div className="pl-7">
                    <h3 className="font-bold">Diskominfo Kota Banjarmasin</h3>
                    <p className="text-black/60 dark:text-white/60">
                      Jan 2021 - May 2021
                    </p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
          <div className="mb-5 dark:text-white">
            <h2 className="font-bold text-4xl">Education</h2>
            <div className="mt-2">
              <ul className="">
                <li className="border-b-2 pb-2">
                  <div className="flex items-center gap-x-3">
                    <FaChevronCircleRight className="text-red-700" />
                    <h2 className="font-bold text-2xl text-black dark:text-white">
                      Coding Bootcamp
                    </h2>
                  </div>
                  <div className="pl-7">
                    <h3 className="font-bold">Dumbways Indonesia</h3>
                    <p>Fullstack Developer</p>
                    <p className="text-black/60 dark:text-white/60">
                      FEB 2023 - MAY 2023
                    </p>
                  </div>
                </li>
                <li className="border-b-2 pb-2">
                  <div className="flex items-center gap-x-3">
                    <FaChevronCircleRight className="text-red-700" />
                    <h2 className="font-bold text-2xl text-black dark:text-white">
                      Vocational School
                    </h2>
                  </div>
                  <div className="pl-7">
                    <h3 className="font-bold">SMKN 4 BANJARMASIN</h3>
                    <p>Software Engineering</p>
                    <p className="text-black/60 dark:text-white/60">
                      2019 - 2022
                    </p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
          <div className="dark:text-white">
            <h2 className="font-bold text-4xl">Skills</h2>
            <div className="pt-3 gap-3 text-transparent/80 flex flex-wrap md:flex-row md:gap-x-6 dark:text-white/80">
              <span className="flex gap-x-3 px-2 py-2 items-center justify-start bg-gray-200 dark:bg-gray-700  md:gap-0 md:px-0 md:py-0 md:bg-transparent md:flex-col md:items-start">
                <SiCreatereactapp className="text-xl md:text-5xl lg:text-7xl" />
                <p>React</p>
              </span>
              <span className="flex gap-x-3 px-2 py-2 items-center justify-start bg-gray-200 dark:bg-gray-700  md:gap-0 md:px-0 md:py-0 md:bg-transparent md:flex-col md:items-start">
                <SiCreatereactapp className="text-xl md:text-5xl lg:text-7xl" />
                <p>React Native</p>
              </span>
              <span className="flex gap-x-3 px-2 py-2 items-center justify-start bg-gray-200 dark:bg-gray-700  md:gap-0 md:px-0 md:py-0 md:bg-transparent md:flex-col md:items-start">
                <SiNodedotjs className="text-xl md:text-5xl lg:text-7xl" />
                <p>Node Js</p>
              </span>
              <span className="flex gap-x-3 px-2 py-2 items-center justify-start bg-gray-200 dark:bg-gray-700  md:gap-0 md:px-0 md:py-0 md:bg-transparent md:flex-col md:items-start">
                <SiGoland className="text-xl md:text-5xl lg:text-7xl" />
                <p>GO</p>
              </span>
              <span className="flex gap-x-3 px-2 py-2 items-center justify-start bg-gray-200 dark:bg-gray-700  md:gap-0 md:px-0 md:py-0 md:bg-transparent md:flex-col md:items-start">
                <SiJavascript className="text-xl md:text-5xl lg:text-7xl" />
                <p>Javascript</p>
              </span>
              <span className="flex gap-x-3 px-2 py-2 items-center justify-start bg-gray-200 dark:bg-gray-700  md:gap-0 md:px-0 md:py-0 md:bg-transparent md:flex-col md:items-start">
                <SiNextdotjs className="text-xl md:text-5xl lg:text-7xl" />
                <p>Next Js</p>
              </span>
              <span className="flex gap-x-3 px-2 py-2 items-center justify-start bg-gray-200 dark:bg-gray-700  md:gap-0 md:px-0 md:py-0 md:bg-transparent md:flex-col md:items-start">
                <SiMysql className="text-xl md:text-5xl lg:text-7xl" />
                <p>Mysql</p>
              </span>
              <span className="flex gap-x-3 px-2 py-2 items-center justify-start bg-gray-200 dark:bg-gray-700  md:gap-0 md:px-0 md:py-0 md:bg-transparent md:flex-col md:items-start">
                <SiPostgresql className="text-xl md:text-5xl lg:text-7xl" />
                <p>Postgre</p>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
