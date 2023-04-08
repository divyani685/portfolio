import React from 'react'
import "./about.css"
import ME from "../../assets/div.jpg"
import { FaAward } from "react-icons/fa"
import { VscFolderOpened } from "react-icons/vsc"
const About = () => {
  return (
    <section id='about'>
      <h5 id='get'>Get to know</h5>
      <h2>About me</h2>
      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="about me" />
          </div>
        </div>
        <div className="about__content">
          <div className="about__cards">
            <article className='about__card'>
              <FaAward className='about_icon' />
              <h5>Experience</h5>
              <small>fresher</small>
              <a href="#experience" style={{textDecoration:"underline"}}>view</a>
            </article>
            <article className='about__card'>
              <VscFolderOpened className='about_icon' />
              <h5>Projects</h5>
              <small>4 projects </small>
              <a href="#project" style={{textDecoration:"underline"}}>view</a>
            </article>
          </div>
          <p>Recent Computer Science undergraduate with a passion for
developing scalable web applications and
working across Full stack using MERN Stack.</p>
        <a href="#contact" className='btn btn-primary'>Let's Talk</a>
        </div>
      </div>
    </section>
  )
}

export default About
