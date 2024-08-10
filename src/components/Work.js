import React from 'react';

import {motion} from 'framer-motion'
import {fadeIn} from '../variants'





const Work = () => {

  const services =[
    {
      name: 'Associate Engineer',
      description:
       '07/24 - PRESENT GURGAON, INDIA',
      logo:require('../assets/cnhi.gif')

    },
    {
      name: 'Project Lead (CSM)',
      description:
       '08/23 - 07/24 PUNE, INDIA',
       logo:require('../assets/TATA.gif')
    },
    {
      name: 'Product Development Engineer',
      description:
       '09/21 - 08/23 BENGALURU, INDIA',
       logo:require('../assets/mercedes.gif')
    },
    {
      name: 'Assistant Manager (R&D)',
      description:
       '04/21 - 08/21 HOSHIYARPUR, INDIA',
       logo:require('../assets/sona.gif')
    },
    {
      name: 'Senior Design Engineer',
      description:
       '09/18 - 03/21 PUNE, INDIA',
       logo:require('../assets/force.gif')
    },
    {
      name: 'Junior Manager',
      description:
       '07/16 – 08/18 INDORE, INDIA',
       logo:require('../assets/VE.gif')
    },
  ]

  return(
  <section id='work' className='section mt-[250px] '>
      <div className='container mx-auto items-center'>
        <div className='flex flex-col lg:flex-row items-center lg:items-center lg:gap-x-20 lg:gap-y-0 h-screen'>
          <motion.div 
           variants={fadeIn('up', 0.3)}
           initial='hidden'
           whileInView={'show'}
           viewport={{once: false, amount: 0.3}}
          className='flex-1 mb-8 lg:mb-0 text-center lg:text-left'>
            <h2 className='h2 text-accent mb-2 '>Experience</h2>
            <h3 className='mb-3 '>Work experience I have</h3>
            <button className='btn btn-sm '>See my work</button>
            </motion.div>

          <motion.div 
           variants={fadeIn('up', 0.5)}
           initial='hidden'
           whileInView={'show'}
           viewport={{once: false, amount: 0.3}}
          className='flex-1 mt-[5px] '>
            <div>
              {services.map((service,index)=>{
                const {name, description, logo} = service;

                 return( 
                 <div className='border-b border-white/20 h-[100px] mb-[15px] flex ' key={index}>
                  <div>
                  <img style={{height:'60px', width:'60px', borderRadius:'150px'}} src={logo} alt="" />
                  </div>
                 
                  <div className='max-w-[500px] px-6'>
                    <h4 className='text-[20px] tracking-wider  font-semibold mb-2'>{name}</h4>
                    <p className='font-secondary leading-tight'>{description}</p>
                  </div>
                 </div>
                 )
              })}
            </div>
          </motion.div>
        </div>

      </div>
     
  </section>
  )
};

export default Work;
