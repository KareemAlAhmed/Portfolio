import React, { useEffect, useState } from 'react'
import "./Experiences.css"
import { base_url } from '../../utils/url';
import Loading from '../LoadingComp/Loading';
export default function Experiences() {
  let [exp,setExp]=useState([]);
  // let [exp]=useState([
  //   {
  //     "year":2023,
  //     "position":"Inter",
  //     "location":"XpertBot Academy",
  //     "description":"I acquired proficiency in Vue.js, Laravel, and Git to prepare for this internship. I developed a comprehensive full-stack football webpage that monitors daily scores in the top 5 European leagues and provides information on upcoming match dates."
  //   },
  //   {
  //     "year":2023,
  //     "position":"IT Inter",
  //     "location":"Islamic Hospital",
  //     "description":"Collaborated with computer engineers to maintain and troubleshoot electronic and computer devices, ensuring optimal operational efficiency. When any employee encountered problems with their computers or electronics, we helped resolve their issues. We built and maintained the hospital system. We made sure the hospital was kept up to date with the latest machine technology. We maintained the hospital's network."
  //   },
  //   {
  //     "year":2024,
  //     "position":"Inter",
  //     "location":"XpertBot Academy",
  //     "description":"My Project called  Virtual Sports Community and Tournaments, it is a full stack web app for creating a virtual sports community and organizing online tournaments to engage sports enthusiasts . The app includes a social media platform where users can share their experiences through posts and communicate with each other via real-time chatting features. The database is designed using the MySQL language.   The frontend is built using the React.js framework.. The backend and RESTful APIs are developed using the Laravel framework in PHP. Additionally, unit tests and documentation for the APIs have been implemented."
  //   },
  // ])
  // const url="http://localhost:5000/";
  const getData=()=>{
    fetch(base_url+"api/experiences").then(res=>res.json()).then(docs=>setExp(docs))
  }
  useEffect(()=>{getData()},[])
  return (
    <div className='experiences col-lg-6 col-12'>
      <h2 className='mb-5'>Experiences</h2>
      <div className="timeline relative">

        {
          exp.length > 0 ? (
            exp.map((ele,index)=>{
              return <div className="timeline-wrapper py-6 px-0 relative" key={index}>
                        <div className="timeline-yr absolute text-center">
                          <span>{ele.year}</span>
                        </div>
                        <div className="timeline-info">
                          <h3 className='font-bold '>
                            <span>{ele.title}</span><br />
                            <span><h6 className='text-base'>{ele.company}</h6></span>
                          </h3>
                          <p className='text-lg font-light'>{ele.description}</p>
                        </div>
                    </div>
            })
          ) : <Loading />
        }
       
        
      </div>
    </div>
  )
}