import React from 'react'
import {BsLinkedin} from "react-icons/bs"
import {BsGithub} from "react-icons/bs"
import {FaWhatsappSquare} from "react-icons/fa"
const HeaderSocial = () => {
  return (
    <div className='header__socials'>
      
      <a href="https://linkedin.com" target='_blank'><BsLinkedin/></a>
     
      <a href="https://github.com" target='_blank'><BsGithub/></a>
       
      <a href="https://whatsapp.com" target='_blank'><FaWhatsappSquare/></a>
    </div>
  )
}

export default HeaderSocial
