import React from 'react'




export const Navbar = () => {
  
  return (
    <>
     <header className="bg-white top-0 z-10">
  <div className="container mx-auto flex justify-between py-4 px-6">
    <div className="flex">
      <i className="fa-solid fa-code text-xl"></i>
    </div>
    <nav className="flex space-x-10">
      <a href="#projects" className="text-gray-800 font-mono hover:text-gray-600">Projects</a>
      <a href="#skills" className="text-gray-800 font-mono hover:text-gray-600">Skills</a>
      <a href="#contact" className="text-gray-800 font-mono hover:text-gray-600">Contact</a>
    </nav>
  </div>
</header>

    </>
  )
}

