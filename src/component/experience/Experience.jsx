import React from 'react'
import "./experience.css"
import { AiOutlineHtml5} from "react-icons/ai"
import { DiCss3Full} from "react-icons/di"
import {IoLogoJavascript} from "react-icons/io"
import {FaBootstrap} from "react-icons/fa"
import {FaReact} from "react-icons/fa"
import {FaNode} from "react-icons/fa"
import {DiMongodb} from "react-icons/di"
import {SiExpress} from "react-icons/si"
import {RxDotFilled} from "react-icons/rx"
const Experience = () => {
  return (
    <section id='experience'>
      {/* <h5>Skills I have</h5> */}
      <h2>My Experience</h2>
      <div className="container exp_container">
        <div className="language">
          <h3>Programming Language</h3>
          <div className="exp_content">
            <article className='exp_details'>
              <RxDotFilled style={{margin:"6px"}}/>
              <h4>C</h4>
            </article>
            <article className='exp_details'>
              <RxDotFilled style={{margin:"6px"}}/>
              <h4>C++</h4>
            </article>
            <article className='exp_details'>
              <RxDotFilled style={{margin:"6px"}}/>
              <h4>Java</h4>
            </article>
            <article className='exp_details'>
              <RxDotFilled style={{margin:"6px"}}/>
              <h4>Python</h4>
            </article>
          </div>
        </div>
        <div className="frontend">
          <h3>
            Frontend Development
          </h3>
          <div className="exp_content">
            <article className='exp_details'>
              <AiOutlineHtml5 style={{margin:"6px"}}/>
              <h4>HTML</h4>
            </article>
            <article className='exp_details'>
              <DiCss3Full style={{margin:"6px"}}/>
              <h4>CSS</h4>
            </article>
            <article className='exp_details'>
              <IoLogoJavascript style={{margin:"6px"}}/>
              <h4>
                Javascript
              </h4>
            </article>
            <article className='exp_details'>
              <FaBootstrap style={{margin:"6px"}}/>
              <h4>Bootstrap</h4>
            </article>
            <article className='exp_details'>
              <FaReact style={{margin:"6px"}}/>
              <h4>React</h4>
            </article>
          </div>
        </div>
        <div className="backend">
        <h3>
            Backend Development
          </h3>
          <div className="exp_content">
            <article className='exp_details'>
              <FaNode style={{margin:"6px"}}/>
              <h4>Node Js</h4>
            </article>
            <article className='exp_details'>
              <DiMongodb style={{margin:"6px"}}/>
              <h4>Mongo DB</h4>
            </article>
            <article className='exp_details'>
              <SiExpress style={{margin:"6px"}}/>
              <h4>
                Express.Js
              </h4>
            </article>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Experience
