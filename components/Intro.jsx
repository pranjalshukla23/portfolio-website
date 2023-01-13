import React, { useEffect, useRef, useState } from "react";
import { useInViewport } from "react-in-viewport";
import { ClipLoader } from "react-spinners";

export const Intro = () => {
  const [loading, setLoading] = useState(true);
  const [showIntro, setShowIntro] = useState(false);
  const myRef = useRef();
  const { inViewport } = useInViewport(myRef);

  useEffect(() => {
    setShowIntro(inViewport);
    getVideo();
  }, [inViewport]);

  const onLoad = () => {
    setLoading(false);
  };

  const getVideo = () => {
    return (
      <>
        <video
          autoPlay
          playsInline
          muted
          className={`video h-full hidden md:block`}
          loop
          src="/images/bg-video-2.mp4"
          onPlay={onLoad}
        />
      </>
    );
  };
  return (
    <section id="intro" ref={myRef} className=" mt-50 text-center relative">
      {loading && (
        <div className="hidden md:block bg-inherit absolute top-0 bottom-0 right-0 left-0 text-center">
          <ClipLoader
            color={"#fff"}
            loading={loading}
            size={150}
            aria-label="Loading Spinner"
            data-testid="loader"
          />
        </div>
      )}
      <div
        className={` h-screen flex justify-center items-center text-white text-center mt-4 relative mb-8 ${
          showIntro
            ? "opacity-100 duration-500 delay-200 md:duration-500" +
              " md:delay-500" +
              " ease-in"
            : "opacity-0 opacity-100 duration-100 ease-in"
        }}`}
      >
        {getVideo()}
        <div
          className={`flex absolute top-0 left-0 right-0 bottom-0  flex-col justify-center items-center bg-gradient-to-br from-black
           via-gray-900 to-black md:bg-none ${
             !loading ? "md:flex" : "md:hidden"
           }`}
        >
          <h1 className="font-Anton font-medium text-4xl md:text-8xl tracking-widest uppercase  py-6">
            Pranjal Shukla
          </h1>
          <h3 className="font-Montserrat font-bold text-xs md:text-xl tracking-widest uppercase">
            Software engineer, Front end & App Developer.
          </h3>
        </div>
      </div>
    </section>
  );
};