import React, { useEffect } from 'react';
import './About.css'
import { FaUserGraduate} from 'react-icons/fa';
import img from '../../image/tonu3.png'
import AOS from 'aos';
import 'aos/dist/aos.css';

const AboutMe = () => {

     useEffect(() => {
    AOS.init({duration:1500});
}, [])
    return (
        <div className=''>
      

      <div className="hero ">
  <div className="hero-content flex-col lg:flex-row">
   <div className='lg:w-1/2'>
   <img src={img} className=" shadow-2xl lg:ml-44 lg:w-36  rounded-full ring ring-cyan-500 ring-offset-base-300 ring-offset-2 hover:animate-pulse" alt='' />
<div className='lg:ml-10'>
<h1 className="text-3xl font-extralight  mt-3 text-white">Hello, I'm </h1>
      <h1 className="text-4xl  font-bold font-serif mt-3 text-cyan-500"> Juliana Tonu</h1>
      <p className="py-6 text-white text-xl fo2">I am a self-motivated <span className="text-cyan-500">Frontend Developer</span> from Dhaka, Bangladesh .I am passionate about everything related to web development. </p>

      <a href="juliana.pdf" download="">
        <button class="group relative h-16 w-48 overflow-hidden rounded-lg bg-dark  shadow-2xl bg-cyan-200 uppercase">
      <div class="absolute inset-0 w-3 bg-cyan-500 transition-all duration-[250ms] ease-out group-hover:w-full"></div>
      <span class="relative   outline-cyan-400 group-hover:text-black ">Download Resume!</span>
    </button>
        </a>
</div>

   </div>

{/* //skills  */}

    <div className='lg:w-1/2 lg:ml-10'>
    <h1 className='text-3xl text-center font-serif font-bold text-cyan-500 my-5 '>My Skils</h1>

      <div className='grid lg:grid-cols-4 gap-4 mt-5 ' data-aos="zoom-in-left">
        <span className='btn btn-sm skill shadow-cyan-400 shadow-md'>Javascript</span>
        <span className='btn btn-sm skill shadow-cyan-400 shadow-md'>React.js</span>
        <span className=' btn btn-sm skill shadow-cyan-400 shadow-md'>Node.js</span>
        <span className='btn btn-sm skill shadow-cyan-400 shadow-md'>Express.js</span>
        <span className='btn btn-sm skill shadow-cyan-400 shadow-md'>Html 5</span>
        <span className='btn btn-sm skill shadow-cyan-400 shadow-md'>Css 3</span>
        <span className='btn btn-sm skill shadow-cyan-400 shadow-md'>Es6</span>
        <span className='btn btn-sm skill shadow-cyan-400 shadow-md'>Bootstrap</span>
        <span className='btn btn-sm skill shadow-cyan-400 shadow-md'>React Bootstrap</span>
        <span className='btn btn-sm skill shadow-cyan-400 shadow-md'>Tailwind Css</span>
        <span className='btn btn-sm skill shadow-cyan-400 shadow-md'>MongoDB</span>
        <span className='btn btn-sm skill shadow-cyan-400 shadow-md'>React Router</span>
        <span className='btn btn-sm skill shadow-cyan-400 shadow-md'>Firebase</span>
        <span className='btn btn-sm skill shadow-cyan-400 shadow-md'>Vercel</span>
        <span className='btn btn-sm skill shadow-cyan-400 shadow-md'>Github</span>
      </div>
      <h1 className='text-3xl text-center font-serif font-bold text-cyan-500 mt-10 mb-4'>Education</h1>

      <div className="card w-full skill text-neutral-content shadow-lg  hover:border-solid border-2 border-cyan-500  hover:animate-pulse hover:border-white" data-aos="zoom-in-left">
  <div className="card-body items-center text-center">
    <h2 className="card-title text-2xl text-cyan-800"><FaUserGraduate/></h2>
    <h2 className="card-title text-black">
IUBAT - International University of Business Agriculture and Technology</h2>
    <p className='text-black'>Computer Science and Engineering (CGPA: 3.44)</p>
    <p className='text-black'>2018-2022</p>
    
   
  </div>
</div>

    </div>
  </div>
</div>
    </div>
  )
};

export default AboutMe;