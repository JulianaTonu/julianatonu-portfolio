import React from 'react';
import {FaInstagram} from 'react-icons/fa';
import {FaLinkedin} from 'react-icons/fa';
import {FaFacebook} from 'react-icons/fa';
import {FaGithub} from 'react-icons/fa';

const Footer = () => {
    return (

<footer className="footer footer-center p-10 bg mt-10 text-primary-content ">
  <div>
 
  <div className='flex '>
  
  <a href="https://www.linkedin.com/in/juliana-tonu-65959a195/" target="_blank" className='text-white text-3xl mr-3  mb-3 hover:scale-105 duration-500 hover:text-cyan-700'><FaLinkedin/></a>
  <a href="https://www.instagram.com/_____juliiiiiiiiiiiiiiii_____/" target="_blank" className='text-white text-3xl mr-3  mb-3 hover:scale-105 duration-500 hover:text-cyan-700'><FaInstagram></FaInstagram></a>
  <a href="https://www.facebook.com/juliana.tonu"  target="_blank" className='text-white text-3xl mr-3  mb-3 hover:scale-105 duration-500 hover:text-cyan-700'><FaFacebook/></a>
  <a href="https://github.com/JulianaTonu" target="_blank" className='text-white text-3xl mr-3  mb-3 hover:scale-105 duration-500 hover:text-cyan-700'><FaGithub/></a>
  
  
  </div>
    
    <p>Designed and Developed by <span className='font-serif font-bold '>Juliana Tonu</span></p>
    <p>Copyright © 2022 - All right reserved | Juliana Tonu</p>
  </div> 
  <div>
    <div className="grid grid-flow-col gap-4">
     
    </div>
  </div>
</footer>




  

   
    );
};

export default Footer;