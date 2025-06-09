import React from 'react'
import { useSmoothScroll } from './hooks/useSmoothScroll'
import { useNavbarScrollSpy } from './hooks/useNavbarScrollSpy'
import { useHamburgerMenu } from './hooks/useHamburgerMenu'
import { NavLink } from "react-router";
import { motion, AnimatePresence } from "framer-motion";
import './style.css'
export default function Navbar() {
  useSmoothScroll()
  useNavbarScrollSpy()
  // useHamburgerMenu()
  
  return (
    <header className="header d-flex align-items-center fixeds intialdown">
      <div className="container position-relative d-lg-flex align-items-center justify-content-between">
        <div className="d-flex justify-content-between" style={{ width: '100%' }}>
          <a>
            <h1 className="sitename">Paarth Phalnikar</h1>
          </a>
          {/* <i class="fa-sharp fa-light fa-bars d-lg-none" type="button" data-toggle="collapse" data-bs-toggle="collapse" data-target="#navbarSupportedContent" data-bs-target="#navbarSupportedContent" aria-controls="navbarNavALTMarkup" aria-expanded="false" aria-label="Toggle navigation"></i> */}
          <button className="navbar-toggler d-lg-none dow" type="button" data-toggle="collapse"
            data-bs-toggle="collapse" data-target="#navbarSupportedContent"
            data-bs-target="#navbarSupportedContent" aria-controls="navbarNavALTMarkup" aria-expanded="false"
            aria-label="Toggle navigation">
            <label className="hamburger-menu" id="whole">
              <input type="checkbox" id="ch" />
            </label>
          </button>
        </div>
        <div id="navbarSupportedContent" className="navmenu navbar-collapse collapse d-lg-flex maindrop" initial={{ opacity: 0, y: -15 }} animate={{ opacity: 1, y: 5 }} transition={{ duration: 5 }} exit={{ opacity: 0, y: 15 }} mode="wait">

          <ul className="navbar-nav nav-dropdown">
            <NavLink data-target="Hero" className='navigator'><li className="mains-nav-item"><span className="start nav-link link">Home</span></li></NavLink>
            <NavLink to='/About' data-target="About" className='navigator'><li className="mains-nav-item"><span className="start nav-link link">About</span></li></NavLink>
            <NavLink to='/Skills' data-target="Skills" className='navigator'> <li className="mains-nav-item"><span className="start nav-link link">Skills</span></li></NavLink>
            <NavLink to='/Education' data-target="Education" className='navigator'><li className="mains-nav-item"><span className="start nav-link link">Education</span></li></NavLink>
            <NavLink to='/Projects' data-target="Projects" className='navigator'><li className="mains-nav-item"><span className="start nav-link link" >Projects</span></li></NavLink>
            <NavLink to='/Contact' data-target="ContactUs" className='navigator'> <li className="mains-nav-item"><span className="start nav-link link" >Contact Us</span></li></NavLink>
          </ul>

        </div>

      </div>
    </header>
  )
}
