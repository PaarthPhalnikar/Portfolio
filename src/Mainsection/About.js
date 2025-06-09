import React,{useEffect} from 'react'
import { useNavbarScrollSpy } from './hooks/useNavbarScrollSpy';
import { useIntersectionAnimations } from './hooks/useIntersectionAnimations'
import { useSmoothScroll } from './hooks/useSmoothScroll';
import { useHamburgerMenu } from './hooks/useHamburgerMenu';
import details1 from './Pictures/details-1.png'
import resume from './resume.pdf'
export default function About() {
  useIntersectionAnimations()
  useNavbarScrollSpy()
  useSmoothScroll()
  useHamburgerMenu()
  return (
    <section id="About" className="about section">
            <div>
                <div className="container">
                    <div className="row">
                        <div className='col-md-5'>
                            <div className="about-image" >
                                <img className='fade-in-up' src={details1}/>
                            </div>
                        </div>
                        <div className="col-md-6 offset-lg-1">
                            <div className="text-center text-md-start">
                                <h1 className='title_shape fade-in-up'>About Me</h1>
                                <ul className="checkicons">
                                    <li className='intialRightLi'>
                                        <i className="fa-light fa-check"></i>
                                        <span className="fst-italic"> I have completed my <span className="bold">BSC Economics and Finance</span> from
                                            <span className="bold"> London School of Economics</span>. During my three years of undergrad, I learnt how
                                            to analyse scenarios and find solutions for problems.</span>
                                    </li>
                                    <li className='intialRightLi'>
                                        <i className="fa-light fa-check"></i>
                                        <span className="fst-italic">I am currently adding to my software skillset by doing
                                            a full-stack course with <span className="bold">Skill Up IT Academy</span> since 2024 wherein, I have learnt
                                            about web designing and basic programming languages like C++.</span>
                                    </li>
                                    <li className='intialRightLi'>
                                        <i className="fa-light fa-check"></i>
                                        <span>I have learnt about backend using Django and frontend using React.JS. </span>
                                    </li>
                                    <li className='intialRightLi'>
                                        <i className="fa-light fa-check"></i>
                                        <span>I have build this portfolio by using S.O.L.I.D principle </span>
                                    </li>
                                </ul>
                                <a href={resume}><button className='fade-in-up blue_btn btn-primary' type="submit">View My
                                        CV</button></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
  )
}
