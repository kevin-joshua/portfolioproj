import React, { useState, useEffect } from 'react';

 export const Skills = () => {
  const [isVisible, setIsVisible] = useState([false, false, false]);

  useEffect(() => {
    // Trigger animations for each skill card sequentially
    const timeouts = isVisible.map((_, i) =>
      setTimeout(() => {
        setIsVisible(prev => {
          const updated = [...prev];
          updated[i] = true;
          return updated;
        });
      }, i * 300) // 300ms delay between each card's appearance
    );

    return () => {
      // Clear timeouts if the component unmounts
      timeouts.forEach(timeout => clearTimeout(timeout));
    };
  }, []);
   return (
    <>
    <div className='bg-white py-32'>
      <p className='font-mono lg:text-4xl text-3xl font-bold text-center mb-10'>
        Skills
      </p>
      <div className='grid gap-6 px-6 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1'>
        <div
          className={`bg-gray-200 rounded-md p-5 transform transition duration-500 ease-in-out ${
            isVisible[0] ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
          }`}
        >
          <p className='font-mono text-xl font-semibold mb-2'>Front-end Development</p>
          <p className='text-lg text-gray-700 font-mono font-light'>HTML</p>
          <p className='text-lg text-gray-700 font-mono font-light'>Tailwind CSS</p>
          <p className='text-lg text-gray-700 font-mono font-light'>JavaScript</p>
          <p className='text-lg text-gray-700 font-mono font-light'>React</p>
        </div>

        <div
          className={`bg-gray-200 rounded-md p-5 transform transition duration-500 ease-in-out ${
            isVisible[1] ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
          }`}
        >
          <p className='font-mono text-xl font-semibold mb-2'>Back-end Development</p>
          <p className='text-lg text-gray-700 font-mono font-light'>Node.js</p>
          <p className='text-lg text-gray-700 font-mono font-light'>Express</p>
        </div>

        <div
          className={`bg-gray-200 rounded-md p-5 transform transition duration-500 ease-in-out ${
            isVisible[2] ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
          }`}
        >
          <p className='font-mono text-xl font-semibold mb-2'>Version Control</p>
          <p className='text-lg text-gray-700 font-mono font-light'>
            Familiar with Git and GitHub for version control, collaboration, and managing code repositories.
          </p>
        </div>
      </div>
    </div>
  </>
   )
 }
 