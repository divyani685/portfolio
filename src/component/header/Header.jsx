import React from 'react'
import Cta from './Cta'
import ME from "../../assets/div.jpg"
import HeaderSocial from './HeaderSocial'
import "./header.css"
const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <h5>Hello</h5>
        <h1>I am Divyani Singh</h1>
        <h5 className="text-light">fullstack Developer</h5>
        <Cta/>
        <HeaderSocial/>
        <div className="me">
          <img src={ME} alt="me" />
        </div>
      <a href="#contact " className='scroll__down'>Scroll Down</a>
      </div>
    </header>
  )
}

export default Header
