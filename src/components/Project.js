import React from 'react';
import {motion} from 'framer-motion'
import {fadeIn} from '../variants'

import img1 from '../assets/t4.jpg'
import img2 from '../assets/u2.jpg'
import img3 from '../assets/Sonalika.jpg'
import img4 from '../assets/m1.jpg'
import img5 from '../assets/tata3.jpg'
import img6 from '../assets/tracter.jpg'

const Project = () => {
  return (
  <section id='project' className='section mt-[200px] lg:mt-[700px]'>
    <div className='container mx-auto'>
      <div className='flex flex-col lg:flex-row gap-x-10'>
        <div className='flex-1 flex flex-col gap-y-12 mb-10 lg:mb-0'>
          <motion.div
           variants={fadeIn('up', 0.3)}
           initial='hidden'
           whileInView={'show'}
           viewport={{once: false, amount: 0.3}}
           >
            <h2 className='h2 leading-tight text-accent text-center lg:text-left'>
              My Projects
            </h2>
            <p className='max-w-sm mb-16 text-center lg:text-left'>I have worked on multiple projects into passenger vehicles, commercial vehicles and agricultural vehicles & equipments.
            </p>      
           
          </motion.div>

        
        <motion.div 
        variants={fadeIn('up', 0.5)}
        initial='hidden'
        whileInView={'show'}
        viewport={{once: false, amount: 0.3}}
        className='group relative overflow-hidden  border-2 border-white/50 rounded-xl lg:w-[500px]' >
          <div className='group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300'></div>
          <img className='group-hover:scale-125 transition-all duration-500' src={img4} alt="" />
          <div className='absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50'>
            <span className='text-gradient'>Luxury EV</span>
          </div>
          <div className='absolute -bottom-full left-12 group-hover:bottom-14 transition-all duration-700 z-50'>
            <span className='text-3xl text-white'>MB E & S CLASS</span>
          </div>
        </motion.div>

        <motion.div
        variants={fadeIn('up', 0.5)}
        initial='hidden'
        whileInView={'show'}
        viewport={{once: false, amount: 0.3}}
         className='group relative overflow-hidden border-2 border-white/50 rounded-xl lg:w-[500px]' >
          <div className='group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300'></div>
          <img className='group-hover:scale-125 transition-all duration-500' src={img5} alt="" />
          <div className='absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50'>
            <span className='text-gradient'>Luxary EV</span>
          </div>
          <div className='absolute -bottom-full left-12 group-hover:bottom-14 transition-all duration-700 z-50'>
            <span className='text-3xl text-white'>TATA AVINYA</span>
          </div>
        </motion.div>

        <motion.div 
        variants={fadeIn('up', 0.5)}
        initial='hidden'
        whileInView={'show'}
        viewport={{once: false, amount: 0.3}}
        className='group relative overflow-hidden border-2 border-white/50 rounded-xl lg:w-[500px] items-center' >
          <div className='group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300'></div>
          <img className='group-hover:scale-125 transition-all duration-500' src={img2} alt="" />
          <div className='absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50'>
            <span className='text-gradient'>Luxary Van</span>
          </div>
          <div className='absolute -bottom-full left-12 group-hover:bottom-14 transition-all duration-700 z-50'>
            <span className='text-3xl text-white'>FORCE URBANIA</span>
          </div>
        </motion.div>
        
        </div>

       <div className='flex-1 flex flex-col gap-y-10'>
        {/*image*/}
        <motion.div 
        variants={fadeIn('up', 0.5)}
        initial='hidden'
        whileInView={'show'}
        viewport={{once: false, amount: 0.3}}
        className='group relative overflow-hidden border-2 border-white/50 rounded-xl lg:w-[500px]' >
          <div className='group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300'></div>
          <img className='group-hover:scale-125 transition-all duration-500'  src={img6} alt="" />
          <div className='absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50'>
            <span className='text-gradient'>Large Tractor</span>
          </div>
          <div className='absolute -bottom-full left-12 group-hover:bottom-14 transition-all duration-700 z-50'>
            <span className='text-3xl text-white'>T7 & T9 Series</span>
          </div>
        </motion.div>

        <motion.div 
        variants={fadeIn('up', 0.5)}
        initial='hidden'
        whileInView={'show'}
        viewport={{once: false, amount: 0.3}}
        className='group relative overflow-hidden border-2 border-white/50 rounded-xl lg:w-[500px] lg:mt-[10px]' >
          <div className='group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300'></div>
          <img className='group-hover:scale-125 transition-all duration-500' src={img1} alt="" />
          <div className='absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50'>
            <span className='text-gradient'>MD Trucks</span>
          </div>
          <div className='absolute -bottom-full left-12 group-hover:bottom-14 transition-all duration-700 z-50'>
            <span className='text-3xl text-white'>VE PRO 3000
            </span>
          </div>
        </motion.div>

        <motion.div 
        variants={fadeIn('up', 0.5)}
        initial='hidden'
        whileInView={'show'}
        viewport={{once: false, amount: 0.3}}
        className='group relative overflow-hidden border-2 border-white/50 rounded-xl lg:w-[500px]'>
          <div className='group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300'></div>
          <img className='group-hover:scale-125 transition-all duration-500' src={img3} alt="" />
          <div className='absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50'>
            <span className='text-gradient'>Combine Harvester</span>
          </div>
          <div className='absolute -bottom-full left-12 group-hover:bottom-14 transition-all duration-700 z-50'>
            <span className='text-3xl text-white'>SONALIKA SAMRAAT</span>
          </div>
        </motion.div>
       </div>
   

    </div>
    </div>
  </section>)
};

export default Project;