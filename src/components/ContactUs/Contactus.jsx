import React, { useState } from 'react'
import "./Contactus.css"
import axios from 'axios';
import { base_url } from '../../utils/url';
import { Bounce, toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function ContactUs() {
    const [email,setEmail]=useState("");
    const [name,setName]=useState("");
    const [content,setContent]=useState("");
    const sentEmail=(e)=>{
        e.preventDefault();
        axios.post(base_url+"email",{email,name,content}).then(res=>{
            setContent("");setEmail("");setName("");
            document.querySelector("body").classList.contains("light-mode")  ? (
                toast.success('Your email has been sent successfully.', {
                    position: "top-right",
                    autoClose: 3000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "colored",
                    transition: Bounce,
                    })
            ) : (
                toast.success('Your email has been sent successfully.', {
                    position: "top-right",
                    autoClose: 3000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "dark",
                    transition: Bounce,
                    })
            )
        }).catch(err=>console.error(err))
    
    }
  return (
    <div className='contactus py-12 ' id='contact'>
        <div className="container mx-auto flex">
            <div className="contactInfo mr-12">
                <div className="map">
                    <iframe width="445" height="300" frameBorder="0" scrolling="no" marginHeight="0" marginWidth="0" id="gmap_canvas"
                    src="https://maps.google.com/maps?width=445&height=300&hl=en&q=%20Tripoli+(tripoli)&t=&z=12&ie=UTF8&iwloc=B&output=embed"></iframe>
         <script type='text/javascript' src='https://embedmaps.com/google-maps-authorization/script.js?id=9c07ef29d1989a17655fca08ff7eab7b3d5c3217'></script>
                    
                    <a href='https://www.versicherungen.at/cyber-versicherung/' className='mapA'>Hackerversicherung</a>
                </div>
                <div className="contact-text py-6 px-12 flex items-center justify-between">
                    <div className="contact-text-items">
                        <h3 className='mb-4'>Say Hello</h3>
                        <p>+961-81258136</p>
                        <p className='mb-4'><a href="mailto:karimahmad2172@gmail.com">karimahmad2172@gmail.com</a></p>
                    </div>
                </div>
            </div>
            <div className="contactForm col-12 pl-4">
                <h2 className='mb-6'>Interested to work together? Let's talk</h2>
                <form action="#" className='flex flex-wrap' onSubmit={(e)=>{sentEmail(e)}}>
                    <div className="col-lg-6">                    
                        <input type="text" name='name' value={name} onChange={(e)=>setName(e.target.value)} className='form-control' placeholder='Your Name' />
                    </div>
                    <div className="col-lg-6"> 
                        <input type="email" name='email' value={email} onChange={(e)=>setEmail(e.target.value)} className='form-control' placeholder='Email' />
                    </div>
                    <div className="col-13 msg">
                        <textarea name='content' rows="6" value={content} onChange={(e)=>setContent(e.target.value)} className='form-control resize-none' placeholder='Message'/>                      
                    </div>
                    <div className="col-12 ml-auto">
                        <input type='submit' className='form-control submit-btn' value="Send Button" />
                    </div>
                </form>
            </div>
        </div>
        <ToastContainer />
    </div>
  )
}
