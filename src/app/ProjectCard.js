import React from "react";
import Image from "next/image";
import { MdArrowOutward } from "react-icons/md";

export const ProjectCard = ({ icon, title, description, url }) => {
  return (
    <div>
      <li className="mt-4 transition duration-500 rounded-lg hover:bg-cus-tansperant">
        
        <div className="md:w-[594px] md:h-[65px] w-full h-auto flex flex-row md:justify-between px-3 ">
          <div className="flex flex-col items-center md:flex-row md:gap-2">
            <div className="md:w-[40px] md:h-10 ">
              <Image
                className="w-full h-full p-1 bg-white border rounded-lg"
                src={icon}
                width={40}
                height={40}
                alt="project icon"
              />
            </div>

            <div className="mt-2 md:mt-0">
              <h1 className="text-base font-medium leading-4 md:text-lg md:leading-5">
                {title}
              </h1>
              <p className="text-[#444] text-sm md:text-base not-italic font-light leading-6 md:leading-7">
                {description}
              </p>
            </div>
          </div>

          <div className="inline-flex items-center mt-2 md:mt-0">
            <a href={url} target="_blank" rel="noopener noreferrer">
              <MdArrowOutward className="w-6 h-6 md:w-8 md:h-8" />
            </a>
          </div>
        </div>
      </li>
      
    </div>
  );
};