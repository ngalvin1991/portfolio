import React from "react";

export default function AboutMe () {
    return (
       <section id="about">
        <div className="container mx-auto flex px-10 py-20 md:flex-row flex-col items-center">
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left
        mb-16 md:mb-0 items-center text-center">
            <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">
                Hey there, I'm Noel!
                <br className="hidden lg:inline-block" /> Front-End Web Developer. 
            </h1>
            <p className="mb-8 leading-relaxed">
                I'm Noel, a Front-End Web Developer from South London. <p>I have a great passion
                for creating immersive and visually pleasing applications. </p>
                <p>Very well organised, a great problem solver and very high attention to detail. </p>
                <p>Besides developing websites, I'm a very big fan of music, films and American Football.</p>

                I'm very interested in all things front-end and want to work on ambitious projects with amazing people.
            </p>
            <div className=" flex justify-center">
                <a 
                href="#contact"
                className="inline-flex text-white bg-orange-500 border-0 py-2 px-6 focus:outline-none hover:bg-green-600 rounded text-lg">
                    Work With Me!
                </a>
                <a
                href="#projects"
                className="ml-4 inline-flex text-white bg-gray-800 border-0 py-2 px-6 focus:outline-none hover:bg-gray-700 hover:text-white rounded text-lg">
                    My Projects
                </a>
            </div>
        </div>
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
        </div>
        </div>
        </section>
    )
}