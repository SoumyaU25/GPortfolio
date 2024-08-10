import React from 'react';

import Image from '../assets/p4.jpg'

import {FaTwitter, FaLinkedin} from 'react-icons/fa'
import { IoMdMail } from "react-icons/io";

import { TypeAnimation } from 'react-type-animation';

import { motion } from 'framer-motion';
import {fadeIn} from '../variants'

import { link } from 'react-router-dom'


const Banner = () => {
  return( 
  <section id='home' className='min-h-[70vh] lg:min-h[75vh] flex items-center'>
    <div className='container mx-auto'>
      <div className='flex flex-col items-center gap-y-8 lg:flex-row lg:items-center lg:gap-x-12'>
        <div  className='flex-1 text-center font-secondary lg:text-left'>
          <motion.h1 
          variants={fadeIn('up',0.3)} 
          initial='hidden' whileInView={'show'} 
          viewport={{once:false, amount: 0.7}} 
          className='text-[48px] mt-10 lg:mt-0 font-semibold leading-[0.8] lg:text-[70px]'>
            Gaurav <span>Upadhyay</span>
          </motion.h1>
        
        <motion.div  
         variants={fadeIn('up',0.4)} 
          initial='hidden' whileInView={'show'} 
          viewport={{once:false, amount: 0.7}} 
         className='mb-6 mt-5 text-[30px] lg:text-[55px] font-secondary font-semibold'>
          <span className='text-white mr-4'>I am a</span>
          <TypeAnimation sequence={[
            'Automotive EDS Expert',
            2000,
            'Wiring Harness Designer',
            2000,
            'Schematics Specialist',
            2000,

          ]}
          speed={50}
          className='text-sec'
          wrapper='span'
          repeat={Infinity}
          
          />
         
        </motion.div>
        <motion.p  
          variants={fadeIn('up',0.5)} 
          initial='hidden' whileInView={'show'} 
          viewport={{once:false, amount: 0.7}}

         className='mb-8 max-w-lg mx-auto lg:mx-0'>
            Reach out if you would like to learn more!
          </motion.p>

          <motion.div 
           variants={fadeIn('up',0.6)} 
           initial='hidden' whileInView={'show'} 
           viewport={{once:false, amount: 0.7}} 

           className='flex max-w-max gap-x-6 items-center mb-12 mx-auto lg:mx-0'>
            <a href="https://drive.google.com/file/d/1LGX7MAbwcFqA7TU9H38SxhvnUUn7bBFs/view?usp=drivesdk"><button className='btn btn-lg'>Get Resume</button></a>
            <a href=" " className='text-gradient btn-link'>
              My Portfolio
              </a>
            
          </motion.div>
          <motion.div
           variants={fadeIn('left',0.7)} 
           initial='hidden' whileInView={'show'} 
           viewport={{once:false, amount: 0.7}} 
           className='flex text-[20px] gap-x-6 max-w-max mx-auto lg:mx-0'>
            <a href="https://www.linkedin.com/in/upadhyay0707?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app">
              <FaLinkedin/>
            </a>
            <a href="https://x.com/b4ugk77">
              <FaTwitter/>
            </a>
            <a href="mailto:mailto.gk77@gmail.com">
              <IoMdMail/>
            </a>
            
          </motion.div>
        </div>

        <motion.div
         variants={fadeIn('down',0.5)} 
         initial='hidden' whileInView={'show'} 
          
         className=' hidden lg:flex flex-1 max-w-[250px] lg:max-w-[250px] bg-contain bg-no-repeat mix-blend-lighten bg-top'>
        
        <img src={Image} alt="" />

        
       </motion.div>
        
        {/* <p>
           An Engineering professional with almost 8 years of OEM product development experience in E&E vehicle architecture 
           and Wiring harness development. And a Certified Scrum Master with 3 years of practice.
          </p> */}
          
      </div>
     

    </div>
  </section>
  )
};

export default Banner;
