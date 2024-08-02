import React, { useState } from 'react'
import "./Education.css"

export default function Education() {
  let [list]=useState([
    {
      "year":2024,
      "degree":"BS",
      "title":"Lebanese University",
      "description":"I dedicated three years to earn my bachelor's degree, during which I covered various subjects such as networking, object-oriented programming, data structures and algorithms, operating systems (specifically Linux), and database management."
    },

  ])
  return (
    <div className='education col-lg-6 col-12'>
      <h2 className='mb-5'>Educations</h2>
      <div className="timeline">
        {list.map(ele=>{
          return <div className="timeline-wrapper py-6 px-0 relative">
                    <div className="timeline-yr absolute text-center">
                      <span>{ele.year}</span>
                    </div>
                    <div className="timeline-info">
                      <h3 className='font-bold '>
                        <span>{ele.title}</span>
                        <small className='ml-4 text-base font-bold inline-block align-middle'>{ele.degree}</small>
                      </h3>
                      <p className='text-lg font-light'>{ele.description}</p>
                    </div>
                </div>
        })}
      </div>
    </div>
  )
}
