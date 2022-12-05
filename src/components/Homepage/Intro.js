import React from 'react';
import { useTypewriter } from 'react-simple-typewriter';
import img from '../../image/tonu3.png'
import './Intro.css'
import {FaInstagram} from 'react-icons/fa';
import {FaLinkedin} from 'react-icons/fa';
import {FaFacebook} from 'react-icons/fa';
import {FaGithub} from 'react-icons/fa';
const Intro = () => {
  const [text] = useTypewriter({
    words: ['Juliana Tonu','Frontend Developer'],
    loop: 0
  })

  return (
    <div className=''>
      

      <div className="hero min-h-screen bg2">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <img src={img} className=" shadow-2xl lg:mr-10  rounded-full ring ring-pink-500 ring-offset-base-300 ring-offset-2 hover:animate-pulse" alt='' />
    <div>
      <h1 className="text-5xl font-extralight text-white">Hello, I'm </h1>
      <h1 className="lg:text-6xl sm:text-4xl font-bold font-mono mt-3 text-pink-500"> {text}</h1>
      <p className="py-6 text-gray-400 w-3/4 text-2xl">I am a self-motivated <span className="text-pink-500">Frontend Developer</span> from Dhaka, Bangladesh .I am passonate about React js
</p>

<div className='flex my-3'>
  
  <a href="https://www.linkedin.com/in/juliana-tonu-65959a195/" target="_blank" className='text-pink-500 text-5xl mr-3  mb-6'><FaLinkedin/></a>
  <a href="" target="_blank" className='text-pink-500 text-5xl mr-3  mb-6'><FaInstagram></FaInstagram></a>
  <a href=""  target="_blank" className='text-pink-500 text-5xl mr-3  mb-6'><FaFacebook/></a>
  <a href="https://github.com/JulianaTonu" target="_blank" className='text-pink-500 text-5xl mr-3  mb-6'><FaGithub/></a>
  
  
  </div>


      <a href="juliana.pdf" download="">
      <button class="group relative h-16 w-48 overflow-hidden rounded-lg bg-dark  text-white shadow-lg bg-slate-700 uppercase">
    <div class="absolute inset-0 w-3 bg transition-all duration-[250ms] ease-out group-hover:w-full"></div>
    <span class="relative text-white  outline-pink-400 group-hover:text-black">Download Resume!</span>
  </button>
      </a>

     

  {/* <button className="btn btn-primary bg shadow-lg ">Download Resume</button> */}
      {/* <button className="btn btn-outline btn-secondary hover:bg">Download Resume</button> */}
      
    </div>
  </div>
</div>
    </div>
  )
}
export default Intro;