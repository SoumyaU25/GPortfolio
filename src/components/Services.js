import React from 'react';
import meter1 from "../assets/meter1.svg";
import meter2 from "../assets/meter2.svg";
import meter3 from "../assets/meter3.svg";

import colorSharp from "../assets/color-sharp.png"

import { Col, Container, Row } from 'react-bootstrap';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import {motion} from 'framer-motion'
import {fadeIn} from '../variants'

const Services = () => {

  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  return(
  <section id='skills' className='section'>
      <div className="container">
            <div className="row">
                <div className="col-12">
                    <div 
                    className="skill-bx wow zoomIn skill">
                        <motion.div
                         variants={fadeIn('up', 0.3)}
                         initial='hidden'
                         whileInView={'show'}
                         viewport={{once: false, amount: 0.3}}
                        >
                        <h2 className='' style={{color:"#ff56f6"}}>SKILLS</h2>
                        <p className=''>Skills that I have..</p>
                        </motion.div>

                        <motion.div
                          variants={fadeIn('up', 0.5)}
                          initial='hidden'
                          whileInView={'show'}
                          viewport={{once: false, amount: 0.3}}
                        >
                        <Carousel responsive={responsive} infinite={true} className="owl-carousel owl-theme skill-slider">
                            <div className="item">
                                <img src={meter1} alt="Image" />
                                <h5>PreeVision</h5>
                            </div>
                            <div className="item">
                                <img src={meter1} alt="Image" />
                                <h5>CHS</h5>
                            </div>
                            <div className="item">
                                <img src={meter3} alt="Image" />
                                <h5> Catia V5</h5>
                            </div>
                            <div className="item">
                                <img src={meter1} alt="Image" />
                                <h5>JIRA</h5>
                            </div>
                            
                            <div className="item">
                                <img src={meter2} alt="Image" />
                                <h5>Python</h5>
                            </div>
                            <div className="item">
                                <img src={meter3} alt="Image" />
                                <h5> Creo 4.0</h5>
                            </div>
                            <div className="item">
                                <img src={meter1} alt="Image" />
                                <h5>PLM</h5>
                            </div>
                            <div className="item">
                                <img src={meter1} alt="Image" />
                                <h5>AutoCAD</h5>
                            </div>
                            <div className="item">
                                <img src={meter3} alt="Image" />
                                <h5>Various Agile Tools</h5>
                            </div>

                        </Carousel>
                        </motion.div>
                       
                      
                    </div>
                </div>
            </div>
        </div>
        {/* <img className="background-image-left" src={colorSharp} alt="Image" />
     */}
  </section>)
};

export default Services;
