
import emailjs from '@emailjs/browser';
import { useRef } from 'react';
import toast from 'react-hot-toast';
import { AiOutlineMail } from 'react-icons/ai';
import { BsTelephone } from 'react-icons/bs';

const Contact = () => {
const form =useRef()
    const sendEmail = (e) => {
        e.preventDefault();
        const form1 =e.target
        emailjs.sendForm('service_gg8w64e', 'template_mr9hwyh', form.current, '9MiE1hKbHiGAs4Uea')
          .then((result) => {
            toast.success(' Send Successfully')
            form1.reset('')
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
          });
        }
    return (
        <div  className='mb-24'>
            <h1 className='text-4xl text-center font-serif font-bold text-pink-500 animate-bounce'>Get In Touch</h1>
            
            <p className='text-gray-400 text-center mb-10 text-xl'>Feel free to drop me a line - Contact me</p>


            <div className="mx-auto lg:ml-36">
  <div className="hero-content flex-col lg:flex-row ">
    <div className="text-center lg:text-left lg:w-1/2 sm:w-full">
        
    <div className="card w-96 bg2 text-neutral-content mb-10 hover:border-solid border-2 hover:border-pink-500  hover:animate-pulse">
  <div className="card-body items-center text-center">
    <h2 className="card-title text-2xl"><AiOutlineMail/></h2>
    <h2 className="card-title">Email</h2>
    <p>julianatonu@gmail.com</p>
    <p className='text-sm text-pink-500'>send a message</p>
   
  </div>
</div>

    <div className="card w-96 bg2 text-neutral-content shadow-lg  hover:border-solid border-2 hover:border-pink-500  hover:animate-pulse">
  <div className="card-body items-center text-center">
    <h2 className="card-title text-2xl"><BsTelephone/></h2>
    <h2 className="card-title">Phone</h2>
    <p>+8801630438393</p>
    <p className='text-sm text-pink-500'>send a message</p>
   
  </div>
</div>


    </div>

    <div className="card flex-shrink-0 lg:w-1/2 sm:w-full shadow-2xl">

      <form  ref={form} onSubmit={sendEmail}>
        <div className="form-control my-3">
          
          <input type="text" name='name' placeholder="Name" className="input input-secondary bg-transparent text-white" required/>
        </div>

        <div className="form-control my-3">
         
          <input type="text" name='email' placeholder="Email" className="input input-secondary bg-transparent text-white" required/>
        </div>
        
        <div className="form-control my-3 ">
          {/* <label className="label">
            <span className="label-text">Message</span>
          </label> */}
          
          <textarea className="textarea textarea-secondary bg-transparent text-white" rows='7' name='message' placeholder="Message"></textarea>
        </div>

        <div className="form-control mt-6 w-36 justify-center lg:ml-64">
          <button className="btn bg py-5 hover:animate-pulse">Contact Me</button>
        </div>
      </form>
    </div>
  </div>
</div>

        </div>
    );
};

export default Contact;