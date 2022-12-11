import React, { useEffect } from 'react';
import { useTypewriter } from 'react-simple-typewriter';
import img from '../../image/tonu3.png'
import './Intro.css'
import {FaInstagram} from 'react-icons/fa';
import {FaLinkedin} from 'react-icons/fa';
import {FaFacebook} from 'react-icons/fa';
import {FaGithub} from 'react-icons/fa';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Intro = () => {
  const [text] = useTypewriter({
    words: ['Juliana Tonu','Frontend Developer'],
    loop: 0
  })
  useEffect(() => {
    AOS.init({duration:1500});
}, [])

  return (
    <div className="hero   ">
    <div className="hero-content flex-col lg:flex-row-reverse">
     
      <img src={img} className=" shadow-2xl shadow-cyan-300 lg:mr-10  rounded-full ring ring-cyan-400 ring-offset-base-300 ring-offset-2 hover:animate-pulse" alt='' data-aos="fade-left" />
    
      <div className="">
        <h1 className="text-5xl font-extralight text-white">Hello, I'm </h1>
        <h1 className="lg:text-6xl sm:text-4xl font-bold font-mono mt-3 text-cyan-200"> {text}</h1>
        <p className="py-6 text-white w-3/4 text-2xl sm:text-xl fo2">I am a self-motivated <span className="text-cyan-300 font-semibold">Frontend Developer</span> from Dhaka, Bangladesh .I am passionate about everything related to web development.
  </p>
  
  <div className='flex my-3'>
    
    <a href="https://www.linkedin.com/in/juliana-tonu-65959a195/" target="_blank" className='text-cyan-200 text-5xl mr-3  mb-6 hover:scale-105 duration-500 hover:text-cyan-500'><FaLinkedin/></a>
    <a href="https://www.instagram.com/_____juliiiiiiiiiiiiiiii_____/" target="_blank" className='text-cyan-200 text-5xl mr-3  mb-6 hover:scale-105 duration-500 hover:text-cyan-500'><FaInstagram></FaInstagram></a>
    <a href="https://www.facebook.com/juliana.tonu"  target="_blank" className='text-cyan-200 text-5xl mr-3  mb-6 hover:scale-105 duration-500 hover:text-cyan-500'><FaFacebook/></a>
    <a href="https://github.com/JulianaTonu" target="_blank" className='text-cyan-200 text-5xl mr-3  mb-6 hover:scale-105 duration-500 hover:text-cyan-500'><FaGithub/></a>
    
    
    </div>
  
  
        <a href="juliana.pdf" download="">
        <button class="group relative h-16 w-48 overflow-hidden rounded-lg bg-dark  shadow-2xl bg-cyan-200 uppercase">
      <div class="absolute inset-0 w-3 bg-cyan-500 transition-all duration-[250ms] ease-out group-hover:w-full"></div>
      <span class="relative   outline-cyan-400 group-hover:text-black ">Download Resume!</span>
    </button>
        </a>
  
        
      </div>
    </div>
  </div>
  )
}
export default Intro;