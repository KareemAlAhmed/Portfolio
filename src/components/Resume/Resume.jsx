import React from 'react'
import "./Resume.css"
import Experiences from '../Experience/Experiences';
import Education from '../Education/Education';

export default function Resume() {
  return (
    <div className='resume py-12 ' id='resume'>
        <div className="container mx-auto flex">
            <Experiences />
            <Education />
        </div>
    </div>
  )
}
