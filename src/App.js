import './App.css';
import React from 'react';
import AboutMe from './Components/AboutMe';
import ContactMe from './Components/ContactMe';
import Navbar from './Components/Navbar';
import ProjectSection from './Components/ProjectSection';
import Skills from './Components/Skills';
import Footer from './Components/Footer';
// import SocialFollow from "./SocialFollow"

export default function App () {
  return (
    <main className='text-black-400 bg-white body-font'>
    <Navbar />
    <AboutMe />
    <ProjectSection />
    <Skills />
    <ContactMe />
    <Footer />
    </main>
  );
}
