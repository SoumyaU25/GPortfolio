import React from 'react';
import {motion} from 'framer-motion'
import {fadeIn} from '../variants'

import img1 from '../assets/csmt.png'
import img2 from '../assets/pmit.png'
import img3 from '../assets/NASBAt.png'

const Certification = () => {
  return(
    <div id='certification' className='section mt-[300px] lg:mt-[500px]'>
      <div className='container mx-auto'>
        <div className='flex flex-col items-center gap-x-20'>
          <motion.div 
            variants={fadeIn('up', 0.3)}
            initial='hidden'
            whileInView={'show'}
            viewport={{once: false, amount: 0.3}}
          className='lg:mt-[20px]'> 
          <h2 className='h2 leading-tight text-accent text-center '>
              Certification
            </h2>
            <p className='max-w-sm mb-10 text-center '>Certified by Scrum Alliance, NASBA and PMI.
            </p>      
          </motion.div>
          <motion.div 
           variants={fadeIn('up', 0.4)}
           initial='hidden'
           whileInView={'show'}
           viewport={{once: false, amount: 0.3}}
          className=' flex flex-row gap-x-10 lg:gap-x-40 item-center'>
            <div>
            <img className=' w-[100px] lg:w-[150px]' src={img1} alt="" />
            </div>
            <div>
            <img className='mt-[30px]  w-[100px] lg:w-[150px]' src={img3} alt="" />
           
            </div>
            <div>
            <img className=' w-[100px] lg:w-[150px]' src={img2} alt="" />
            </div>
           
            
          </motion.div>
        </div>
      </div>
      
    </div>

  ) 
}

export default Certification;