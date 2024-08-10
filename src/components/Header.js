import React from 'react';
import Logo from '../assets/logo.svg'
import G from '../assets/GU3.png'


const Header = () => {
  return <header  className='py-8'>
    <div className='container mx-auto'>
      <div className='flex justify-between items-center'>
        <a href="#">
          <div style={{display:'flex', flexDirection:'row', justifyContent: 'center', alignItems: 'center'}}>
          <img src={G} style={{width:'55px', height:'55px'}}  alt="" />
          <h1 className='h1 text-gradient' style={{fontWeight:"500px"}}>
            Gaurav 
            </h1>
          </div>
          
            {/* <h1 className='h1' style={{color:"white"}}> */}
              {/* Upadhyay */}
            {/* </h1> */}
            
        </a>

        <a href="mailto:mailto.gk77@gmail.com"><button className='btn btn-sm'>
          Hire Me
          </button></a>

      </div>

    </div>
  </header>;
};

export default Header;
