import React from 'react'
import "./navbar.css"
import {AiOutlineHome} from "react-icons/ai"
import {AiOutlineUser} from "react-icons/ai"
import {BsBookmark} from "react-icons/bs"
import {IoMdContact} from "react-icons/io"
import { useState } from 'react'
const Navbar = () => {
  const [activeNav,setActiveNav]=useState("#")
  return (
    <nav>
      <a href="#" onClick={()=>setActiveNav("#")} className={activeNav==="#"?"active":""}><AiOutlineHome/></a>
      <a href="#about" onClick={()=>setActiveNav("#about")} className={activeNav==="#about"?"active":""}><AiOutlineUser/></a>
      <a href="#experience" onClick={()=>setActiveNav("#experience")} className={activeNav==="#experience"?"active":""}><BsBookmark/></a>
      <a href="#contact" onClick={()=>setActiveNav("#contact")} className={activeNav==="#contact"?"active":""}><IoMdContact/></a>
    </nav>
  )
}

export default Navbar
