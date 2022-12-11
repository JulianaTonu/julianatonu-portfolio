import React from 'react';

import img1 from '../../image/smile.jpg'
import img2 from '../../image/sm2.jpg'
import img3 from '../../image/sm3.jpg'
import img4 from '../../image/sm4.jpg'
import img5 from '../../image/sm5.jpg'
import img6 from '../../image/sell.jpg'
import img7 from '../../image/sell2.jpg'
import img8 from '../../image/sell3.jpg'
import img9 from '../../image/sell4.jpg'
import doc1 from '../../image/doctor1.png'

import { FaExternalLinkAlt, FaGithub  } from 'react-icons/fa';

const AllProjects = () => {
  
    return (
       
       <div className=' '>

<h1 className=" hero text-3xl text-cyan-400 font-bold mb-3">Smile Seekers (photography website)</h1>

        <div className=" min-h-screen bg-trans glass">
           
           <div className="hero-content flex-col lg:flex-row">
           <div className="h-96 carousel carousel-vertical rounded-box lg:mt-24">
           <div className="carousel-item h-full">
             <img src={img2} alt='/'/>
           </div> 
           <div className="carousel-item h-full">
             <img src={img1} alt='/' />
           </div> 
           <div className="carousel-item h-full">
             <img src={img3} alt='/' />
           </div> 
           <div className="carousel-item h-full">
             <img src={img4} alt='/' />
           </div> 
           <div className="carousel-item h-full">
             <img src={img5} alt='/' />
           </div> 
           <div className="carousel-item h-full">
             <img src={img3} alt='/'/>
           </div> 
           
         </div>
             <div className='w-1/2'>
             <span className='text-xl text-center font-serif font-bold text-cyan-300 mt-10 mb-4 flex'>Overview <a href="https://github.com/JulianaTonu/service-website" target="_blank" className='text-cyan-200 text-3xl ml-3  hover:scale-105 duration-500 hover:text-cyan-300'><FaGithub/></a>
             <a href="https://smile-seekers.web.app/" target="_blank" className='text-cyan-200 text-3xl ml-3  hover:scale-105 duration-500 hover:text-cyan-300'><FaExternalLinkAlt/></a></span>
             <span></span>


               <p className=" pb-3 text-white">● Users can review services and anyone can view other's reviews.</p>
               <p className="pb-3 text-white">● Added firebase authentication,Private Route, React-hook-form</p>
               <p className="pb-3 text-white">● Implement MongoDB CRUD operations and also JWT.</p>
               <h1 className='text-xl font-serif font-bold text-cyan-300 mt-10 mb-4'>Technology Used</h1>
               <div className='grid lg:grid-cols-4 gap-4 mt-5 '>
                 
                 <span className='btn btn-xs skill shadow-cyan-400 shadow-md'>React.js</span>
                 <span className=' btn btn-xs skill shadow-cyan-400 shadow-md'>Node.js</span>
                 <span className='btn btn-xs skill shadow-cyan-400 shadow-md'>Express.js</span>
                 <span className='btn btn-xs skill shadow-cyan-400 shadow-md'>Html 5</span>
                 <span className='btn btn-xs skill shadow-cyan-400 shadow-md'>Css 3</span>
                 
                
                 
                 <span className='btn btn-xs skill shadow-cyan-400 shadow-md'>Tailwind Css</span>
                 <span className='btn btn-xs skill shadow-cyan-400 shadow-md'>MongoDB</span>
                 <span className='btn btn-xs skill shadow-cyan-400 shadow-md'>React Router</span>
                 <span className='btn btn-xs skill shadow-cyan-400 shadow-md'>Firebase</span>
                 <span className='btn btn-xs skill shadow-cyan-400 shadow-md'>JWT</span>
                 <span className='btn btn-xs skill shadow-cyan-400 shadow-md'>Context Api</span>
                
                 
               </div>
         
               
               
             </div>
           </div>
         </div>
       {/* //2nd project  */}

       <h1 className=" hero text-3xl text-cyan-400 font-bold mb-3">BecheDao.com(Resale website)</h1>
       <div className=" min-h-screen bg-trans glass">
           
           <div className="hero-content flex-col lg:flex-row-reverse">
           <div className="h-96 carousel carousel-vertical rounded-box lg:mt-24">
           <div className="carousel-item h-full">
             <img src={img6} alt='/'/>
           </div> 
           <div className="carousel-item h-full">
             <img src={img7} alt='/' />
           </div> 
           <div className="carousel-item h-full">
             <img src={img8} alt='/' />
           </div> 
           <div className="carousel-item h-full">
             <img src={img9} alt='/' />
           </div> 
           
           
         </div>
             <div className='w-1/2'>
             <span className='text-xl text-center font-serif font-bold text-cyan-200 mt-10 mb-4 flex'>Overview <a href="https://github.com/JulianaTonu/Resale-website-client" target="_blank" className='text-cyan-100 text-3xl ml-3  hover:scale-105 duration-500 hover:text-cyan-300'><FaGithub/></a>
             <a href="https://resale-website-8d51b.web.app/" target="_blank" className='text-cyan-100 text-3xl ml-3  hover:scale-105 duration-500 hover:text-cyan-300'><FaExternalLinkAlt/></a></span>
             <span></span>


               <p className=" pb-3 text-white ">● Admin can see all Sellers, all Buyers & verify Seller</p>
               <p className="pb-3 text-white">● Seller Can Add ,delete and advertise product </p>
               <p className="pb-3 text-white">● User can book, order product & payment for product</p>
               <p className="pb-3 text-white">● Added firebase authentication,Private Route, React-hook-form</p>
               <p className="pb-3  text-white">● Implement MongoDB CRUD operations and also JWT.</p>
               <h1 className='text-xl font-serif font-bold text-cyan-500 mt-10 mb-4'>Technology Used</h1>
               <div className='grid lg:grid-cols-4 gap-4 mt-5 '>
                 
                 <span className='btn btn-xs skill shadow-cyan-400 shadow-md'>React.js</span>
                 <span className=' btn btn-xs skill shadow-cyan-400 shadow-md'>Node.js</span>
                 <span className='btn btn-xs skill shadow-cyan-400 shadow-md'>Express.js</span>
                 <span className='btn btn-xs skill shadow-cyan-400 shadow-md'>Axios</span>
                 <span className='btn btn-xs skill shadow-cyan-400 shadow-md'>Stripe </span> 
                 <span className='btn btn-xs skill shadow-cyan-400 shadow-md'>Tailwind Css</span>
                 <span className='btn btn-xs skill shadow-cyan-400 shadow-md'>MongoDB</span>
                 <span className='btn btn-xs skill shadow-cyan-400 shadow-md'>React Router</span>
                 <span className='btn btn-xs skill shadow-cyan-400 shadow-md'>Firebase</span>
                 <span className='btn btn-xs skill shadow-cyan-400 shadow-md'>JWT</span>
                 <span className='btn btn-xs skill shadow-cyan-400 shadow-md'>React Query</span>
                 <span className='btn btn-xs skill shadow-cyan-400 shadow-md'>Context Api</span>
                
                 
               </div>
         
               
             </div>
           </div>
           </div>
{/* // 3rd project  */}

<h1 className=" hero text-3xl text-cyan-400 font-bold mb-3">Doctors-Portal (Doctors appointment Website)</h1>
       <div className=" min-h-screen bg-trans glass">

<div className="hero-content flex-col lg:flex-row">
           <div className="h-96 carousel carousel-vertical rounded-box lg:mt-24">
           <div className="carousel-item h-full">
             <img src={doc1} alt='/'/>
           </div> 
           {/* <div className="carousel-item h-full">
             <img src={img7} alt='/' />
           </div> 
           <div className="carousel-item h-full">
             <img src={img8} alt='/' />
           </div> 
           <div className="carousel-item h-full">
             <img src={img9} alt='/' />
           </div>  */}
           
           
         </div>
             <div className='w-1/2'>
             <span className='text-xl text-center font-serif font-bold text-cyan-200 mt-10 mb-4 flex'>Overview <a href="https://github.com/JulianaTonu/Resale-website-client" target="_blank" className='text-cyan-100 text-3xl ml-3  hover:scale-105 duration-500 hover:text-cyan-300'><FaGithub/></a>
             <a href="https://resale-website-8d51b.web.app/" target="_blank" className='text-cyan-100 text-3xl ml-3  hover:scale-105 duration-500 hover:text-cyan-300'><FaExternalLinkAlt/></a></span>
             <span></span>


               <p className=" pb-3 text-white ">● User-based private route Admin, users.</p>
               
               <p className="pb-3 text-white">● Added firebase authentication,Private Route, React-hook-form</p>
               <p className="pb-3  text-white">● Implement MongoDB CRUD operations and also JWT.</p>
               <p className="pb-3  text-white">● Use stripe for payment system.</p>
               <h1 className='text-xl font-serif font-bold text-cyan-500 mt-10 mb-4'>Technology Used</h1>
               <div className='grid lg:grid-cols-4 gap-4 mt-5 '>
                 
                 <span className='btn btn-xs skill shadow-cyan-400 shadow-md'>React.js</span>
                 <span className=' btn btn-xs skill shadow-cyan-400 shadow-md'>Node.js</span>
                 <span className='btn btn-xs skill shadow-cyan-400 shadow-md'>Express.js</span>
                 <span className='btn btn-xs skill shadow-cyan-400 shadow-md'>Axios</span>
                 <span className='btn btn-xs skill shadow-cyan-400 shadow-md'>Stripe </span> 
                 <span className='btn btn-xs skill shadow-cyan-400 shadow-md'>Tailwind Css</span>
                 <span className='btn btn-xs skill shadow-cyan-400 shadow-md'>MongoDB</span>
                 <span className='btn btn-xs skill shadow-cyan-400 shadow-md'>React Router</span>
                 <span className='btn btn-xs skill shadow-cyan-400 shadow-md'>Firebase</span>
                 <span className='btn btn-xs skill shadow-cyan-400 shadow-md'>JWT</span>
                 <span className='btn btn-xs skill shadow-cyan-400 shadow-md'>React Query</span>
                 <span className='btn btn-xs skill shadow-cyan-400 shadow-md'>Context Api</span>
                
                 
               </div>
         
               
             </div>
           </div>
           </div>

       </div>
    );
};

export default AllProjects;