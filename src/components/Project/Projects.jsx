import React, { useEffect, useState } from 'react'
import "./Projects.css"
import { base_url } from '../../utils/url';

export default function Projects() {
  const showMoreProjects=()=>{
      let list=document.querySelector(".projectsList")
      if(list.classList.contains("showMoreProjects")){
        list.classList.remove("showMoreProjects")
        document.querySelector(".showMoreBtn").innerHTML="Show More"
        var a = document.createElement('a'); 
        a.href="#projects"
        a.click()
      }else{
        list.classList.add("showMoreProjects")
        document.querySelector(".showMoreBtn").innerHTML="Show Less"
      }
  }
  const [projects,setProjects]=useState([]);
  const getData=()=>{
    fetch(base_url+"api/projects").then(res=>res.json()).then(docs=>setProjects(docs))
  }
  useEffect(()=>{getData()},[])
  return (
    <div className='projects py-12' id='projects'>
      <div className="container mx-auto w-full flex flex-col">
          <h2 className='mb-5'>Projects</h2>
          <div className="flex flex-col">
            <div className="projectsList flex gap-5 flex-wrap">
              {projects.map(ele=>{
               return <div className="project" >
                        <a href={ele.url}>
                          <div dangerouslySetInnerHTML={{ __html: ele.logo }} className="pLogo"></div>
                        </a>       
                      </div>    
              })}
            </div>
            {projects.length > 3 && (
            <button className='showMoreBtn submit-btn' onClick={showMoreProjects}>Show More</button>)}
          </div>
          
      </div>
    </div>
  )
}
