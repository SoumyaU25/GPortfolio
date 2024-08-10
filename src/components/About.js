import React from 'react';

import CountUp from 'react-countup';

import {useInView} from 'react-intersection-observer'

import {motion} from 'framer-motion'

import { fadeIn } from '../variants'
import Image from '../assets/p4.jpg'


const About = () => {
  
  const [ref, inView] = useInView({
    threshold: 0.5,
  })

  return( 
  <section id='about' className='section mt-[150px]' ref={ref} >
    <div className='container mx-auto  items-center '>
      <div className='flex flex-col gap-y-10 lg:flex-row lg:gap-x-20 items-center lg:items-center lg:gap-y-0 h-screen'>
      
      <div>
      
      <motion.h2
       variants={fadeIn('up', 0.3)}
       initial='hidden'
       whileInView={'show'}
       viewport={{once: false, amount: 0.3}}
       className='about lg:h2 text-accent '>About me</motion.h2>

       <motion.p
        variants={fadeIn('up', 0.4)}
        initial='hidden'
        whileInView={'show'}
        viewport={{once: false, amount: 0.3}}
        className='text-center'>Who I am?</motion.p>

      </div>
     


        <motion.div 
        variants={fadeIn('up', 0.4)}
        initial='hidden'
        whileInView={'show'}
        viewport={{once: false, amount: 0.3}}
         className='flex-1 max-w-[260px] bg-contain bg-top  lg:hidden'>
        <img  src={Image} alt="" />
        </motion.div>


        <motion.div 
        variants={fadeIn('up', 0.5)}
        initial='hidden'
        whileInView={'show'}
        viewport={{once: false, amount: 0.3}}
         className='flex-1 '>
          
          <h3 className='about2 lg:h3 mb-4'>Wiring Harness Design Specialist</h3>

          <p className='mb-6'>An Engineering professional with almost 8 years of OEM product development experience in E&E vehicle architecture 
          and Wiring harness development. And a Certified Scrum Master with 3 years of practice.</p>
          <div className='flex  gap-x-6 lg:gap-x-10 mb-12'>
            <div className=''>
              <div className='text-[40px] font-tertiary text-gradient mb-2'>

                {/* {inView?<CountUp start={0} end={8} duration={3} />:null}+ */}
                8+
                
              </div>
              <div className='font-primary text-sm tracking-[2px]'>
                Years of <br/>
                Experience
              </div>

            </div>
            <div>
              <div className='text-[40px] font-tertiary text-gradient mb-2'>

                {/* {inView?<CountUp start={0} end={8} duration={3} />:null}+ */}8+
                
              </div>
              <div className='font-primary text-sm tracking-[2px]'>
                Projects<br/>
                Completed
              </div>

            </div>
            <div>
              <div className='text-[40px] font-tertiary text-gradient mb-2'>

                {/* {inView?<CountUp start={0} end={2} duration={3} />:null}+ */} 2+
                
              </div>
              <div className='font-primary text-sm tracking-[2px]'>
                Awards<br/>
                Won
                
              </div>

            </div>

          </div>
          {/* <div className='flex gap-x-8 items-center'>
            <button className='btn btn-lg '>Contact me</button>
            <a href="#" className='text-gradient btn-link '>My Portfolio</a>
          </div> */}
        </motion.div>
        
      </div>
    </div>

  </section>
  )
};

export default About;
