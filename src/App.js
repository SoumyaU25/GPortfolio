import React from 'react';
// components
import Banner from './components/Banner';
import Header from './components/Header';
import Nav from './components/Nav';
import About from './components/About';
import Services from './components/Services';
import Certification from './components/Certification';
import Work from './components/Work';
import Project from './components/Project';
import Contact from './components/Contact';

const App = () => {
  return (
    <div className='bg-site bg-no-repeat bg-cover overflow-hidden'>
      <Header />
      <Banner />
      <Nav />
      <About />
      <Work />
      <Services />
      <Project/>
      <Certification/> 
      <Contact />
      {/* <div className='h-[200px] lg:h-[700px]'></div>  */}
    </div>
  );
};

export default App;
