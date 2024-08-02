import React from 'react'
import "./Contactus.css"


export default function ContactUs() {
  return (
    <div className='contactus py-12 ' id='contact'>
        <div className="container mx-auto flex">
            <div className="contactInfo mr-12">
                <div className="map">
                    <iframe width="445" height="300" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" id="gmap_canvas"
                    src="https://maps.google.com/maps?width=445&height=300&hl=en&q=%20Tripoli+(tripoli)&t=&z=12&ie=UTF8&iwloc=B&output=embed"></iframe>
                    <a href='https://www.versicherungen.at/cyber-versicherung/'>Hackerversicherung</a>
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
                <form action="#" className='flex flex-wrap'>
                    <div className="col-lg-6">                    
                        <input type="text" name='name' className='form-control' placeholder='Your Name' />
                    </div>
                    <div className="col-lg-6"> 
                        <input type="email" name='email' className='form-control' placeholder='Email' />
                    </div>
                    <div className="col-13 msg">
                        <textarea name='content' rows="6" className='form-control resize-none' placeholder='Message'/>                      
                    </div>
                    <div className="col-12 ml-auto">
                        <input type='submit' className='form-control submit-btn' value="Send Button" />
                    </div>
                </form>
            </div>
        </div>
    </div>
  )
}
