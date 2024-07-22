import Image from "next/image";
import Link from "next/link";
import React from "react";
import { IoLink } from "react-icons/io5";
import { FaGithub } from "react-icons/fa";

export default function ProjectCard(props: any) {
  const reposTitle = props.repo || (props.client && props.server);
  return (
    <div className="flex flex-col border-b-2 pb-2 mb-5 md:gap-x-3 md:flex-row">
      <div className="w-full shadow-xl rounded-md overflow-hidden md:w-3/6">
        <Image
          priority={true}
          src={props.image}
          alt={props.title}
          className="w-full h-full"
        />
      </div>
      <div className="flex flex-col justify-between md:w-3/6 dark:text-white">
        <div className="flex items-center justify-between">
          <h2 className="font-bold text-2xl">{props.title}</h2>
          {props.live ? (
            <Link className="hover:text-red-700" href={props.live}>
              <IoLink size={26} />
            </Link>
          ) : null}
        </div>
        <div>
          <h3 className="font-bold">Description : </h3>
          <p>{props.case}</p>
        </div>
        <div>
          <h3 className="font-bold">Technologies : </h3>
          <div className="flex items-center gap-x-3">
            {props.tech?.map((tech: string, index: number) => (
              <span
                key={index}
                className="px-2 py-1 bg-gray-200 rounded-md dark:text-black"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
        <div className="mt-2">
          {reposTitle && <h3 className="font-bold">Repositories : </h3>}
          <ul className="flex gap-x-3 mt-2">
            {props.repo && (
              <li>
                <Link className="" href={props?.repo}>
                  <FaGithub size={26} />
                </Link>
              </li>
            )}
            {props.client && props.server && (
              <>
                <li>
                  <Link
                    className="px-2 py-1 bg-blue-500 text-white rounded-md"
                    href={props?.client}
                  >
                    Client
                  </Link>
                </li>
                <li>
                  <Link
                    className="px-2 py-1 bg-gray-500 text-white rounded-md"
                    href={props?.server}
                  >
                    Server
                  </Link>
                </li>
              </>
            )}
          </ul>
        </div>
      </div>
    </div>
  );
}
