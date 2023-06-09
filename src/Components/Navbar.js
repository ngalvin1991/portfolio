import React from "react";



export default function Navbar () {
    return (
        <header className="bg-gray-800 md:sticky top-0 z-10">
        <div className="container mx-auto flex flex-wrap p-9 flex-col md:flex-row items-center">
          <nav className="title-font font-medium text-white mb-4 md:mb-0">
            <a href={'Home'} className="ml-3 text-xl">
              Noel Galvin
            </a>
          </nav>
          <nav className="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-orange-400	flex flex-wrap items-center text-base justify-center">
            <a href={'Projects'} className="mr-5 text-orange-400 hover:text-white">
              Projects
            </a>
            <a href={'Skills'} className="mr-5 text-orange-400  hover:text-white">
              Skills
            </a>
            <a href={'ContactMe'} className="mr-5 text-orange-400  hover:text-white">
              Contact Me
            </a>
          </nav>
          
        </div>
      </header>
    );
  }