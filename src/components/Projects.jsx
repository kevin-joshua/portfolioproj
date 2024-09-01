import React from 'react';
import nasaApod from '../assets/nasaApod.png'; // Adjust the path according to your folder structure
import todoList from '../assets/todoList.png';
import weatherApp from '../assets/weatherApp.png';

export const Projects = () => {
  return (
    <>
      <div className='bg-gray-200 pb-96'>
        <div className='flex flex-col items-center py-32'>
          <p className='text-black lg:text-5xl md:text-4xl sm:text-3xl font-mono font-extrabold'>
            Featured Projects
          </p>
          <p className='text-gray-700 lg:text-2xl md:text-xl sm:text-lg font-mono py-4'>
            Check out some of my recent web development projects.
          </p>
        </div>
        <div className='grid gap-6 px-6 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1'>
          <div className='bg-white rounded-lg'>
            <a href='https://nasa-react-app-iota.vercel.app/'>
              <img
                src={nasaApod}
                className='w-full rounded-md px-5 py-5'
                alt='NASA APOD PROJECT'
              />
              <p className='text-xl font-mono font-semibold px-5'>Project 1</p>
              <p className='text-lg text-gray-700 font-mono font-light px-5 pb-5'>
                NASA APOD PROJECT
              </p>
            </a>
          </div>
          <div className='bg-white rounded-lg'>
            <a href='https://to-do-list-nine-chi-40.vercel.app/'>
              <img
                src={todoList}
                className='w-full rounded-md px-5 py-5'
                alt='TO DO LIST'
              />
              <p className='text-xl font-mono font-semibold px-5'>Project 2</p>
              <p className='text-lg text-gray-700 font-mono font-light px-5 pb-5'>
                TO DO LIST
              </p>
            </a>
          </div>
          <div className='bg-white rounded-lg'>
            <a href='https://weatherapp-eight-beige.vercel.app/'>
              <img
                src={weatherApp}
                className='w-full rounded-md px-5 py-5'
                alt='WEATHER WEBAPP'
              />
              <p className='text-xl font-mono font-semibold px-5'>Project 3</p>
              <p className='text-lg text-gray-700 font-mono font-light px-5 pb-5'>
                WEATHER WEBAPP
              </p>
            </a>
          </div>
        </div>
      </div>
    </>
  );
};
