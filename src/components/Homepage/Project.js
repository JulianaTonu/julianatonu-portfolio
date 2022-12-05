import React from 'react';
import img1 from '../../image/smile.png'
import img2 from '../../image/learn.png'
import img3 from '../../image/doctor.png'

const Project = () => {
    return (
       <div className='mb-24'>
<h1 className='text-4xl text-center font-serif font-bold text-pink-500 mt-10 animate-bounce'>My Projects</h1>
<p className='text-gray-400 text-center mb-10 text-xl'>This is my recent projects</p>
<div className='grid lg:grid-cols-3 justify-center mx-auto lg:ml-24'>

            <div className="card w-96 glass ">
  <figure><img src={img1} alt="car!"/></figure>
  <div className="card-body ">
    <h2 className="card-title text-white text-2xl mb-2 ">Smile Seekers (photography website)</h2>
    <p className='text-white font-bold mb-5'>Technology used: <span className='font-semibold '> HTML, CSS, Tailwind (daisyUI), React.js, Node.js, Express.js, MongoDB, Firebase , JWT, Context API</span></p>
    <div className="card-actions justify-end">
        <a href="https://github.com/JulianaTonu/service-website" target="_blank">
        <button className="btn btn-outline btn-secondary">Github</button>
        </a>
      <a href="https://smile-seekers.web.app/" target="_blank" >
      <button className="btn bg">Live Project</button>
      </a>
    </div>
  </div>
</div>
            <div className="card w-96 glass">
  <figure><img src={img2} alt="car!"/></figure>
  <div className="card-body">
    <h2 className="card-title text-white text-2xl mb-2 ">Learn Online(Learning website)</h2>
    <p className='text-white font-bold mb-5'>Technology used: <span className='font-semibold '> HTML, CSS, React Bootstrap React.js, Node.js, Express.js, MongoDB, Firebase, Context API</span></p>
    <div className="card-actions justify-end">
        <a href="https://github.com/JulianaTonu/Learn-Online" target="_blank">
        <button className="btn btn-outline btn-secondary">Github</button>
        </a>
      <a href="https://learn-online-aea9c.web.app/" target="_blank">
      <button className="btn bg">Live Project</button>
      </a>
    </div>
  </div>
</div>
            <div className="card w-96 glass">
  <figure><img src={img3} alt="car!"/></figure>
  <div className="card-body">
    <h2 className="card-title text-white text-2xl mb-2">
Doctors-Portal (Doctors appointment Website) 
</h2>
    <p className='text-white font-bold mb-5'>Technology used: <span className='font-semibold '> React js, Nodejs, Express js, mongodb, React Tailwind css, Firebase, React Router Dom, React Hot Toast ,React Query etc</span></p>
    <div className="card-actions justify-end">
        <a href="https://github.com/Porgramming-Hero-web-course/b6a11-service-review-client-side-sayeedhossain2" target="_blank">
        <button className="btn btn-outline btn-secondary">Github</button>
        </a>
      <a href="https://doctors-portal-8a95b.web.app/" target="_blank">
      <button className="btn bg">Live Project</button>
      </a>
    </div>
  </div>
</div>

    

     
        </div>

       </div>
    );
};

export default Project;