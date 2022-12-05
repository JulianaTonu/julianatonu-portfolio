import React from 'react';
import {FaInstagram} from 'react-icons/fa';
import {FaLinkedin} from 'react-icons/fa';
import {FaFacebook} from 'react-icons/fa';
import {FaGithub} from 'react-icons/fa';

const Footer = () => {
    return (
   <div className='bg'>
     <footer className="footer p-10  text-neutral-content">
  <div>
    <h1 className='text-4xl font-sherif '>Juliana Tonu</h1>
    <p>Dhaka, Bangladesh</p>
  </div> 
  <div>
    <span className="font-bold my-3 uppercase ml-20 text-xl text-white">Social</span> 
    <div className="grid grid-flow-col gap-4">
    <a href="https://www.linkedin.com/in/juliana-tonu-65959a195/" target="_blank" className='text-white text-4xl mr-2  mb-6'><FaLinkedin/></a>
  <a href="" target="_blank" className='text-white text-4xl mr-2  mb-6'><FaInstagram></FaInstagram></a>
  <a href=""  target="_blank" className='text-white text-4xl mr-2  mb-6'><FaFacebook/></a>
  <a href="https://github.com/JulianaTonu" target="_blank" className='text-white text-4xl mr-2  mb-6'><FaGithub/></a>
     
    </div>
  </div>
</footer>


<div className='text-center py-10 text-white text-xl'>
<p>Copyright © 2022 - All right reserved | Juliana Tonu</p>
</div>

   </div>
    );
};

export default Footer;