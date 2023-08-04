import React, { useEffect, useRef, useState } from "react";
import { useInViewport } from "react-in-viewport";
import { ClipLoader } from "react-spinners";
import Image from "next/image";

export const Intro = () => {
  const [showIntro, setShowIntro] = useState(false);
  const [blur, setBlur] = useState(true);
  const myRef = useRef();
  const { inViewport } = useInViewport(myRef);

  useEffect(() => {
    setShowIntro(inViewport);
  }, [inViewport]);

  useEffect(() => {
    setTimeout(() => {
      setBlur(false);
    }, 1000);
  }, []);

  return (
    <section
      id='intro'
      ref={myRef}
      className='mt-50 text-center relative flex justify-center items-center'
    >
      <div
        className={` h-screen flex flex-col-reverse md:flex-row justify-center items-center text-white  mt-4 relative mb-8 transition-opacity text-center px-24 gap-4 ${
          showIntro
            ? " opacity-100 duration-500 delay-500 ease-in"
            : " opacity-0 opacity-100 duration-100 ease-in"
        }}`}
      >
        <p className='font-Manrope font-bold text-3xl lg:text-5xl leading-relaxed'>
          I&apos;m <span className='text-teal-400'>Pranjal.</span> I&apos;m a
          Software engineer, Front end and App Developer at Betaflux.
        </p>
        <Image
          src={"/images/profile3.jpg"}
          className='rounded-full'
          width={150}
          height={100}
        />
      </div>
    </section>
  );
};
