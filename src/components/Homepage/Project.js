import React, { useEffect } from 'react';
import img1 from '../../image/smile.jpg'
import img2 from '../../image/sell.jpg'
import img3 from '../../image/doctor.png'
import AOS from 'aos';
import 'aos/dist/aos.css';
import { FaGithub } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Project = () => {

  useEffect(() => {
    AOS.init({duration:1500});
}, [])

    return (
       <div className='mb-24 mt-24'>
<h1 className='text-4xl text-center font-serif font-bold text-cyan-500 mt-10 '>My Projects</h1>
<p className='text-gray-400 text-center mb-10 text-xl'>This is my recent projects</p>
<div className='grid lg:grid-cols-3 justify-center mx-auto '>

            <div className="card w-76 glass lg:mr-5  hover:scale-105 duration-500 shadow-cyan-400 shadow-md hover:shadow-md hover:shadow-purple-500 mb-6 sm:mx-auto" data-aos="zoom-in-right">
  <figure><img src={img1} alt="car!"/></figure>
  <div className="card-body ">
    <h2 className="card-title text-white  text-2xl mb-2 hover:text-purple-500 ">Smile Seekers (photography website)</h2>
    {/* <p className=' font-bold mb-5'>Technology used: <span className='font-semibold '> HTML, CSS, Tailwind (daisyUI), React.js, Node.js, Express.js, MongoDB, Firebase , JWT, Context API</span></p> */}
    <div className="card-actions justify-end">
        <a href="https://github.com/JulianaTonu/service-website" target="_blank" className='text-4xl text-cyan-500 hover:text-white'><FaGithub/>
        </a>

      <a href="https://smile-seekers.web.app/" target="_blank" >
      <button className="btn bg hover:bg-cyan-600">Live Project</button>
      </a>
    </div>
  </div>
</div>
            <div className="card w-76 glass lg:mr-5 hover:scale-105 duration-500 shadow-cyan-400 shadow-md hover:shadow-md hover:shadow-teal-500 mb-6" data-aos="flip-left">
  <figure><img src={img2} alt="car!"/></figure>
  <div className="card-body">
    <h2 className="card-title text-white  text-2xl mb-2 hover:text-teal-500">BecheDao.com(Resale website)</h2>
    {/* <p className=' font-bold mb-5'>Technology used: <span className='font-semibold '> React,Tailwind , daisyUi,React Icons,React Hot Toast,React Router Dom,React-image-viewer-hook,Firebase,MongoDB,JWT,React Query,Axios,Stripe for Payment method</span></p> */}
    <div className="card-actions justify-end">
        <a href="https://github.com/JulianaTonu/Resale-website-client" target="_blank" className='text-4xl text-cyan-500 hover:text-white'>
        <FaGithub/>
        </a>
      <a href="https://resale-website-8d51b.web.app/" target="_blank">
      <button className="btn bg">Live Project</button>
      </a>
    </div>
  </div>
</div>
            <div className="card w-76 glass  lg:mr-5 hover:scale-105 duration-500 shadow-cyan-400 shadow-md hover:shadow-md hover:shadow-sky-500 mb-6" data-aos="zoom-in-left">
  <figure><img src={img3} alt="car!"/></figure>
  <div className="card-body">
    <h2 className="card-title text-white  text-2xl mb-2 hover:text-sky-500">
Doctors-Portal (Doctors appointment Website) 
</h2>
    {/* <p className=' font-bold mb-5'>Technology used: <span className='font-semibold '> React js, Nodejs, Express js, mongodb, React Tailwind css, Firebase, React Router Dom, React Hot Toast ,React Query etc</span></p> */}
    <div className="card-actions justify-end">
        <a href="https://github.com/Porgramming-Hero-web-course/b6a11-service-review-client-side-sayeedhossain2" target="_blank" className='text-4xl text-cyan-500 hover:text-white'>
        <FaGithub/>
        </a>
      <a href="https://doctors-portal-8a95b.web.app/" target="_blank" >
      <button className="btn bg">Live Project</button>
      </a>
    </div>
  </div>
</div>




     
        </div>
        <div className="form-control mt-6 w-36 flex justify-end">
          <Link to='/allproject'><button className="btn bg py-5 hover:animate-pulse  shadow-2xl ">All Project</button></Link>
        </div>
       </div>
    );
};

export default Project;