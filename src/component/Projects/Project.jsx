import React from 'react'
import "./project.css"
import {BsGithub} from "react-icons/bs"
const Project = () => {
  return (
    <section id='project'>
      <h2>Projects</h2>
      <div className="container project_container">
        <div className="p1">
          <h3>Spotify Clone</h3>
          <div className="p_content">
            <p>It is a simple Spotify-Clone app made by using HTML, CSS, Javascript.</p>
           <div className='social'>
           <BsGithub/>
           <a href="https://divyani685.github.io/Spotify-Clone/">view</a>
           </div>
          </div>
        </div>
        <div className="p2">
          <h3>Resume Builder App</h3>
          <div className="p_content">
            <ul>
              <li>It is a free application that simplifies the task of creating a resume for individuals.</li>
              {/* <li> Individuals just have to fill up a form that specifies questions from all required fields such as personal questions, educational, skills ,projects and so on. After filling the form, Individuals can choose any template and then download it.</li> */}
            </ul>
            <div className='social'>
           <BsGithub/>
           <a href="https://github.com/divyani685/resume-builder-app">view</a>
           </div>
          </div>
        </div>
        <div className="p3">
          <h3>Contact Manager App</h3>
          <div className="p_content">
            <ul>
              <li>
                User based contact Storing
              </li>
              <li>Add ,Delete,Update,view contact details</li>
            </ul>
          </div>
        </div>
        <div className="p4">
          <h3>Quiz Portal App</h3>
          <div className="p_content" style={{fontWeight:"100"}}>
            <ul>
              <li>Through this app, Admin can create,upload,delete,questions with options,and in case of malpractice done by
                students,he/she can block them also.</li>
              <li>Students can appear for quiz for different
                subjects and they can also view their score.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Project
