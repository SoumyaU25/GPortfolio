import React from 'react';
//import icon 
import {BiHomeAlt, BiUser, BiBadgeCheck, BiCertification, BiChat,BiClipboard,BiBriefcase,BiAward} from 'react-icons/bi'
import { AiOutlineProject } from "react-icons/ai";
import {BsClipboardData, BsBriefcase, BsChatSquare} from 'react-icons/bs'

import {Link} from 'react-scroll'

const Nav = () => {
  return <nav className='fixed bottom-2 lg:bottom-8 w-full overflow-hidden z-50'>
    <div className='container mx-auto' >
     <div className='w-full bg-black/20 h-[80px] backdrop-blur-2xl rounded-full max-w-[460px] mx-auto px-7 flex justify-between items-center text-2xl text-white/50'>

      <Link to='home' activeClass='active' 
      smooth={true} 
      spy={true}  
      offset={-200}
      className='cursor-pointer w-[70px] h-[60px] flex items-center justify-center'>
        <BiHomeAlt/>
        </Link>

        <Link to='about' activeClass='active' 
        smooth={true} spy={true} className='cursor-pointer w-[70px] h-[60px] flex items-center justify-center'>
        <BiUser/>
        </Link>

        <Link to='work' activeClass='active' 
        smooth={true} spy={true} className='cursor-pointer w-[70px] h-[60px] flex items-center justify-center'>
        <BiBriefcase/>
        </Link>
        
        <Link to='skills' activeClass='active' 
        smooth={true} spy={true} className='cursor-pointer w-[70px] h-[60px] flex items-center justify-center'>
        <BiBadgeCheck/>
        </Link>

        <Link to='project' activeClass='active' 
        smooth={true} spy={true} className='cursor-pointer w-[70px] h-[60px] flex items-center justify-center'>
        <AiOutlineProject/>
        </Link>

        <Link to='certification' activeClass='active' 
        smooth={true} spy={true} className='cursor-pointer w-[70px] h-[60px] flex items-center justify-center'>
        <BiAward/>
        </Link>
        
       

       
        
        <Link to='contact' activeClass='active' 
        smooth={true} spy={true} className='cursor-pointer w-[70px] h-[60px] flex items-center justify-center'>
        <BiChat/>
        </Link>
        
     </div>
    </div>
    </nav>
};

export default Nav;
