import { useInViewport } from "react-in-viewport";
import { useEffect, useRef, useState } from "react";

export const Expertise = () => {
  const [showExpertise, setShowExpertise] = useState(false);
  const myRef = useRef();
  const { inViewport } = useInViewport(myRef);

  useEffect(() => {
    setShowExpertise(inViewport);
  }, [inViewport]);
  return (
    <section id='expertise' ref={myRef}>
      <div
        className={`flex flex-col justify-center items-center text-center text-white gap-4 transition-opacity h-full ${
          showExpertise
            ? "opacity-100 duration-500 delay-500 ease-in"
            : "opacity-0 opacity-100 duration-100 ease-in"
        } `}
      >
        <h1 className='font-Anton font-extrabold text-2xl md:text-4xl tracking-widest uppercase mb-4'>
          My expertise
        </h1>
        <div className='grid grid-cols-1 md:grid-cols-3 w-3/4 lg:w-2/3 p-12 gap-6 border-2 border-slate-100'>
          <div className='border-0 md:border-r-2 md:border-white pr-4'>
            <h1 className='font-RobotoCondensed font-bold text-xl tracking-widest uppercase mb-4'>
              <i className='fa-brands fa-react text-2xl'></i>
              <span className='underline decoration-4 decoration-blue-500'>
                Frontend Dev
              </span>{" "}
              <br />
              React, NextJS
            </h1>
            <p>
              Possessing over two years of hands-on development expertise in
              prominent JavaScript frameworks such as React, React Native,
              Ionic, and Next.js. Proficient in leveraging UI libraries
              including Tailwind CSS, Bootstrap, and Material UI
            </p>
          </div>
          <div className='border-0 md:border-r-2 md:border-white pr-2'>
            <h1 className='font-RobotoCondensed font-bold text-xl tracking-widest uppercase mb-4'>
              <i className='fa-brands fa-node-js text-2xl'></i>
              <span className='underline decoration-4 decoration-orange-500'>
                Backend Dev
              </span>{" "}
              <br />
              Node, ExpressJS
            </h1>
            <p>
              Over 2 years of development experience in backend development with
              Node and ExpressJS.
            </p>
          </div>
          <div>
            <h1 className='font-RobotoCondensed font-bold text:md md:text-xl tracking-widest uppercase mb-4'>
              <i className='fa-solid fa-business-time'></i>
              <span className='underline decoration-4 decoration-green-500'>
                Product Management
              </span>{" "}
              <br />
            </h1>
            <p>
              Proficient in defining product roadmaps, conducting market
              research, and collaborating across cross-functional teams. Strong
              analytical and problem-solving skills, coupled with effective
              communication and leadership abilities.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
