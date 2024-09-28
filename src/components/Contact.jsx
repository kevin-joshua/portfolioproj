import React from 'react'
export const Contact = () => {
  return (
    <>
    <div id="contact" className='flex flex-col items-center'>
    <p className='lg:text-4xl md:text-3xl font-mono font-bold'>Contact</p><br/>
    <p className='lg:text-xl md:text-lg font-mono font-light'>kevinajijoshua@gmail.com</p><br/>
    </div>
    <div className='flex items-center justify-center gap-8 py-20'>
    <a href='https://github.com/kevin-joshua'>
      <i className="fa-brands fa-github text-5xl"></i>
      </a>
      <a href='https://www.linkedin.com/in/kevin-joshua-356691288/'>
      <i className="fa-brands fa-linkedin text-5xl"></i>
      </a>
      <a href='https://www.linkedin.com/in/kevin-joshua-356691288/'>
      <i className="fa-brands fa-square-instagram text-5xl"></i>
      </a>
      <a href='https://x.com/KevinJoshua02'>
      <i className="fa-brands fa-x-twitter text-5xl"></i>
      </a>
    </div>
    </>
  )
}
