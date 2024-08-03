import React, { useEffect, useState } from 'react'
import "./Education.css"
import { base_url } from '../../utils/url';

export default function Education() {
  const [list,setList]=useState([]);
  // let [list]=useState([
  //   {
  //     "year":2024,
  //     "degree":"BS",
  //     "title":"Lebanese University",
  //     "description":"I dedicated three years to earn my bachelor's degree, during which I covered various subjects such as networking, object-oriented programming, data structures and algorithms, operating systems (specifically Linux), and database management."
  //   },

  // ])
  // const url="http://localhost:5000/";
  const getData=()=>{
    fetch(base_url+"api/educations").then(res=>res.json()).then(docs=>setList(docs))
  }
  useEffect(()=>{getData()},[])

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
                        <small className='ml-4 text-base font-bold inline-block align-middle'>{ele.level}</small>
                      </h3>
                      <p className='text-lg font-light'>{ele.description}</p>
                    </div>
                </div>
        })}
      </div>
    </div>
  )
}
