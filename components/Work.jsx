import Link from "next/link";
import { WorkItem } from "./WorkItem";
import { useInViewport } from "react-in-viewport";
import { useEffect, useRef, useState } from "react";

export const Work = ({ projects }) => {
  const [showProjects, setShowProjects] = useState(false);
  const [displayProjects, setDisplayProjects] = useState([]);
  const myRef = useRef();
  const { inViewport } = useInViewport(myRef);

  useEffect(() => {
    setShowProjects(inViewport);
    setDisplayProjects(projects.slice(0));
  }, [inViewport]);

  const filterProjects = (type) => {
    console.log("projects", projects);
    const filteredProjects = projects.filter(
      (project) => project.type === type
    );

    console.log("filtered projects: " + filteredProjects);

    setDisplayProjects(filteredProjects);
  };

  return (
    <section id='projects' ref={myRef}>
      <div
        className={`flex flex-col flex-wrap justify-center items-center text-white mt-24 text-center transition-opacity ${
          showProjects
            ? "opacity-100 duration-500 delay-500 ease-in"
            : "opacity-0 opacity-100 duration-100 ease-in"
        }`}
      >
        <h1 className='font-Anton text-2xl md:text-4xl tracking-widest uppercase'>
          Noteworthy Projects
        </h1>
        {/* <div className='text-white w-2/3 flex justify-end items-center text-gray-400 mt-4 px-0 md:px-12 '>
          <p className='flex gap-4'>
            Filter by{" "}
            <button
              className='hover:text-white text-gray-300'
              onClick={() => filterProjects("website")}
            >
              Web Apps
            </button>{" "}
            /{" "}
            <button
              className='hover:text-white text-gray-300'
              onClick={() => filterProjects("mobile")}
            >
              Mobile Apps
            </button>
          </p>
        </div> */}
        <div className='grid grid-cols-1 md:grid-cols-3 w-full md:w-4/5 p-8 gap-16'>
          {displayProjects &&
            displayProjects.map((project) => (
              <WorkItem project={project} key={project.id} />
            ))}
        </div>
      </div>
    </section>
  );
};
