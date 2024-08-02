import React from 'react'
import "./About.css"

export default function About() {
  return (
    <div className='about pb-32 pt-32' id='about'>
      <div className="container mx-auto pr-4  w-full flex">
        <div className="about-text text-5xl font-bold">
          <h1 className='my-6 mx-0'>Hey folks, I'am <span>Kareem Ahmad</span></h1>  
          <p className='text-lg font-light mb-4'>To obtain a position as a junior web developer where I can leverage my existing skills in Python, HTML, CSS and JavaScript to further develop my technical abilities in computer science and AI . I am eager to gain practical experience in web development and contribute to projects that use cutting-edge technologies. My goal is to continue learning and growing as a developer while making meaningful contributions to a team.</p>           
          <div className="grp-btn flex mt-6">
            <a href='/' className='custome-btn mr-2'>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-5">
              <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z" />
            </svg>

            Download Resume</a>
            <a href='/' className='custome-btn'>Get a free quote</a>
          </div>
        </div>
        <div className="logo">
          <img src="aluit" alt="" />
        </div>
      </div>
    </div>
  )
}
