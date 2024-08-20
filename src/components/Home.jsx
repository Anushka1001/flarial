import React from 'react';
import Slideshow from './molecules/Slideshow';
import Welcome from './molecules/Welcome';
import Services from './molecules/Services';
import Contact from './Contact';

function Home() {
    console.log("home on");
  return (
    <>
      <Slideshow />
      <Welcome />
      <Services />
      <Contact />
    </>
  )
}

export default Home