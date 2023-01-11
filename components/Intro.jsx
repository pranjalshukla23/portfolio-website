import React from "react";

export const Intro = ({ loading, setLoading }) => {
  const onLoad = () => {
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  };
  return (
    <div
      id="intro"
      className="h-fit md:h-screen flex justify-center items-center text-white text-center mt-4 relative mb-8"
    >
      <video
        autoPlay
        playsInline
        muted
        className="video h-full"
        loop
        src="/images/bg-video-2.mp4"
        onPlay={onLoad}
      />
      <div className="absolute top-0 left-0 right-0 bottom-0 bg-inherit flex flex-col justify-center items-center">
        <h1 className="font-Anton font-medium text-4xl md:text-8xl tracking-widest uppercase mt-4 py-6">
          Pranjal Shukla
        </h1>
        <h3 className="font-Montserrat font-bold text-xs md:text-xl tracking-widest uppercase">
          Software engineer, Front end & App Developer.
        </h3>
      </div>
    </div>
  );
};