import React, { useEffect, useState } from 'react'

export const Home = () => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    setTimeout(() => setShow(true), 100); // delay for smooth animation start
  }, []);

  return (
    <>
      <div
        className={`flex flex-col justify-center max-w-[670px] py-52 px-6 transition-all duration-1000 ease-out transform ${
          show ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}
      >
        <p className="text-black font-mono text-4xl md:text-6xl sm:text-5xl font-bold">
          Kevin Joshua
        </p>
        <br />
        <p className="text-gray-700 font-mono text-2xl font-light">
          Web Developer
        </p>
        <br />
        <p className="text-gray-700 font-mono text-2xl font-light">
          I am a passionate web developer with a strong focus on creating beautiful and functional websites. I have experience in a variety of technologies and am always eager to learn more.
        </p>
      </div>
    </>
  )
}
