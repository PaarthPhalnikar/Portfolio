import React, { useContext } from 'react'
import Navbar from './Navbar';
import Home from './Home'
import About from './About';
import Skills from './Skills';
import Education from './Education';
import Projects from './Projects';
import Contact from './Contact';
import { Pcontext } from './hooks/Context'
import Remaining from './remaining';
// import './section/style.css'

function Portfolio() {
  const { colorState } = useContext(Pcontext);
  let display;
  display = <div id='s'>
    <div className="preloader">
      <div className="loader_width">
        <div className="dash uno"></div>
        <div className="dash dos"></div>
        <div className="dash tres"></div>
        <div className="dash cuatro"></div>
      </div>
    </div>
    {/* <Swip/> */}
    <Navbar />
    <main className='main'>
      <Home />
      <About />
      <Skills />
      <Education />
      <Projects />
      <Contact />
    </main>
    <Remaining />
  </div>
return (
  <div className={`${colorState.color[0]}`}>
    {display}
  </div>
)
}

export default Portfolio;