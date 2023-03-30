import './App.css';
import React from 'react';
import Home from './Components/Home';
import AboutMe from './Components/AboutMe';
import ContactMe from './Components/ContactMe';
import Navbar from './Components/Navbar';
import ProjectSection from './Components/ProjectSection';
import Skills from './Components/Skills';
// import Footer from './Components/Footer';
// import { ChakraProvider } from '@chakra-ui/react'
import { Routes, Route } from "react-router-dom"


function App () {
  return (
    <div className="App min-h-screen bg-gradient-to-r from-violet-500 to-fuchsia-500">
      <Navbar />
      <Routes>
        <Route path="home" element={ <Home/>} />
        <Route path="aboutme" element={ <AboutMe/>} />
        <Route path="projects" element={ <ProjectSection/>} />
        <Route path="skills" element={ <Skills/>} />
        <Route path="contactme" element={ <ContactMe/>} />

      </Routes>

    </div>
  )
}

export default App
// export default function App () {
//   return (
//     <ChakraProvider>
//     <main className='text-black-400 bg-white body-font'>
//     <Navbar />
//     <AboutMe />
//     <ProjectSection />
//     <Skills />
//     <ContactMe />
//     <Footer />
//     </main>
//     </ChakraProvider>
//   );
// }
