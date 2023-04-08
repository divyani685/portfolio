import React from 'react'
import Header from './component/header/Header'
import Navbar from './component/navbar/Navbar'
import About from './component/about/About'
import Experiences from './component/experience/Experience'
import Project from './component/Projects/Project'
import Contact from './component/contact/Contact'
import Footer from './component/footer/Footer'

function App() {
  return (
    <div>
      <Header />
      <Navbar />
      <About />
      <Experiences />
      <Project />
      <Contact />
      <Footer />
    </div>
  )
}

export default App
