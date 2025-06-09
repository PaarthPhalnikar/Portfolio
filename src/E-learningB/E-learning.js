import React, { useEffect, useState, useRef } from 'react'
import { NavLink, useLocation } from "react-router";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Autoplay, Pagination } from 'swiper/modules';
import './E-learning.css'
import logo from './logo.jpg'
import sliderBottomPattern from './slider-bottom-pattern.png'
import banner from './banner.png'
import courses1 from './courses1.jpg'
import courses2 from './courses2.jpg'
import courses3 from './courses3.jpg'
import courses4 from './courses4.jpg'
import courses5 from './courses5.jpg'
import courses6 from './courses6.jpg'
import event1 from './event1.jpg'
import event2 from './event2.jpg'
import event3 from './event3.jpg'
import courses from './courses.png'
import user1 from './user1.jpg'
import certifiedteacher from './certified-teachers.png'
import students from './students.png'
import awardwining from './award-winning.png'
import gallery1 from './gallery1.jpg'
import gallery2 from './gallery2.jpg'
import gallery3 from './gallery3.jpg'
import gallery4 from './gallery4.jpg'
import gallery5 from './gallery5.jpg'
import gallery6 from './gallery6.jpg'
import F from './filter'
import teacher1 from './teacher1.jpg'
import teacher2 from './teacher2.jpg'
import teacher3 from './teacher3.jpg'
import teacher4 from './teacher4.jpg'
import teacher5 from './teacher5.jpg'
import teacher6 from './teacher6.jpg'
import teacher7 from './teacher7.jpg'
import teacher8 from './teacher8.jpg'
import blog1 from './blog1.jpg'
import blog2 from './blog2.jpg'
import blog3 from './blog3.jpg'
import logo1 from './logo-1.jpg'
import logo2 from './logo-2.jpg'
import logo3 from './logo-3.jpg'
import logo4 from './logo-4.jpg'
import logo5 from './logo-5.jpg'
import logo6 from './logo-6.jpg'
import footershape from './footer-shape.png'
import playStore from './play-store.png'
import appStore from './app-store.png'

export default function Elearning() {
    // const { pathname } = useLocation();
    // console.log(pathname)
    // useEffect(() => {
    //     window.scrollTo(0, 0);
    // }, [pathname]);
    useEffect(() => {
        window.onscroll = (e) => {
            const div = document.querySelector('.header-nav-area');
            // console.log(e)
            if (window.scrollY > 250) {
                div.classList.add('fixed');
            }
            else {
                div.classList.remove('fixed');
            }
        }
        const first = Array.from(document.getElementsByClassName('one'))
        const second = Array.from(document.getElementsByClassName('second'))
        const third = Array.from(document.getElementsByClassName('third'))
        const fourth = Array.from(document.getElementsByClassName('fourth'))
        const fifth = Array.from(document.getElementsByClassName('fifth'))
        const sixth = Array.from(document.getElementsByClassName('sixth'))
        const seventh = Array.from(document.getElementsByClassName('seventh'))
        const eighth = Array.from(document.getElementsByClassName('eighth'))
        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible')
                }
                else {
                    entry.target.classList.remove('visible')
                }
            })
        })
        const observer1 = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible')
                }
                else {
                    entry.target.classList.remove('visible')
                }
            })
        })
        const observer2 = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible')
                }
                else {
                    entry.target.classList.remove('visible')
                }
            })
        })
        const observer3 = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible')
                }
                else {
                    entry.target.classList.remove('visible')
                }
            })
        })
        const observer4 = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible')
                }
                else {
                    entry.target.classList.remove('visible')
                }
            })
        })
        const observer5 = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible')
                }
                else {
                    entry.target.classList.remove('visible')
                }
            })
        })
        const observer6 = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible')
                }
                else {
                    entry.target.classList.remove('visible')
                }
            })
        })
        const observer7 = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible')
                }
                else {
                    entry.target.classList.remove('visible')
                }
            })
        })
        first.forEach((element) => {
            observer.observe(element)
        })
        second.forEach((element) => {
            observer1.observe(element)
        })
        third.forEach((element) => {
            observer2.observe(element)
        })
        fourth.forEach((element) => {
            observer3.observe(element)
        })
        fifth.forEach((element) => {
            observer4.observe(element)
        })
        sixth.forEach((element) => {
            observer5.observe(element)
        })
        seventh.forEach((element) => {
            observer6.observe(element)
        })
        eighth.forEach((element) => {
            observer7.observe(element)
        })
    }, [])
    return (

        <div>
            <header className="header-main">
                <div className="header-top">
                    <div className="container">
                        <div className="row">
                            <div className="col-xl-6 col-lg-4 col-md-6 col-sm-6 col-12 pa left">
                                <div className="header-top-content">
                                    <p>Online Education Courses Millions of people learning!</p>
                                </div>
                            </div>
                            <div className="col-xl-6 col-lg-4 col-md-6 col-sm-6 col-12 pa right d-none d-sm-block ">
                                <div className="header-top-menu ">
                                    <ul>
                                        <li>

                                            <i className="fa-brands fa-facebook-f"></i>

                                        </li>
                                        <li>
                                            <i className="fa-brands fa-twitter"></i>

                                        </li>
                                        <li>
                                            <i className="fa-brands fa-linkedin-in"></i>

                                        </li>
                                        <li>

                                            <i className="fa-brands fa-youtube"></i>

                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="header-bottom">
                    <div className="container">
                        <div className="row">
                            <div className="col-xl-3 col-lg-3 col-md-4  col-sm-5 col-12 spaces">
                                <div className="header-logo">
                                    <NavLink to="/"><img src={logo} alt="logo" /></NavLink>
                                </div>
                            </div>
                            <div className="col-xl-9 col-lg-9 col-md-8  col-sm-7 col-12 spaces">
                                <div className="header-contact d-none d-lg-inline">
                                    <div className="header-widget-main">
                                        <div className="header-widget ">
                                            <div className="header-icon">
                                                <i className="fa-solid fa-phone"></i>

                                            </div>
                                            <div className="header-content">
                                                <h3>Call</h3>
                                                <h5>+123 456 78910</h5>
                                            </div>

                                        </div>
                                        <div className="header-widget">
                                            <div className="header-icon">
                                                <i className="fa-solid fa-envelope"></i>

                                            </div>
                                            <div className="header-content">
                                                <h3>Email</h3>
                                                <h5>info@example.com</h5>
                                            </div>

                                        </div>
                                        <div className="header-widget">
                                            <div className="header-icon">
                                                <i className="fas fa-map-marker-alt">

                                                </i>
                                            </div>
                                            <div className="header-content">
                                                <h3>Address</h3>
                                                <h5>24 Fifth st, Los Angeles , USA</h5>
                                            </div>
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="header-nav-area">
                    <div className="container">
                        <div className="row">
                            <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12 ">
                                <div className="header-nav-menu-box">
                                    <div className="header-responsive-menu ">
                                        <button className="navbar-toggler " type="button" data-toggle="collapse"
                                            data-bs-toggle="collapse" data-target="#navbarSupportedContent"
                                            data-bs-target="#navbarSupportedContent" aria-controls="navbarNavALTMarkup"
                                            aria-expanded="true" aria-label="Toggle navigation">
                                            <i className="fas fa-bars"></i>
                                        </button>
                                    </div>
                                    <div className="header-nav-menu-area collapse navbar-collapse d-md-flex"
                                        id="navbarSupportedContent">
                                        <ul className="navbar-nav nav-dropdown itemss">
                                            <li className="nav-item ">Home</li>
                                            <li className="nav-item ">
                                                <span className="activedrop">Pages <i className="fa-solid fa-angle-down"></i></span>
                                                <ul className="theme-dropdown">
                                                    <li className="m-0 float-none"><a className='asc'>About Us</a></li>
                                                    <li className="m-0 float-none"><a className='asc'>FAQ's</a></li>
                                                    <li className="m-0 float-none"><a className='asc'>Support</a></li>
                                                    <li className="m-0 float-none"><a className='asc'>Scholarship</a>
                                                    </li>
                                                </ul>
                                            </li>
                                            <li className="nav-item">COURSES</li>
                                            <li className="nav-item">EVENT</li>
                                            <li className="nav-item">TEACHERS</li>
                                            <li className="nav-item">PRICING</li>
                                            <li className="nav-item">BLOG</li>
                                            <li className="nav-item m-0">Contact</li>
                                        </ul>
                                    </div>
                                    <div className="header-request">
                                        <a className="theme-btn log">Login / Register</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
            <section className="slider-area">
                <div className="slider-shape">
                    <img src={sliderBottomPattern} />
                </div>
                <div className="container">
                    <div className="row">
                        <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 ">
                            <div className="slider-area-box">
                                <div className="slider-box-left wow">
                                    <h1>Start Learning and Embrace New Skills For Better Future</h1>
                                    <p>With the help of E-learning, create your own path and drive on your skills on your
                                        own to achieve what you seek. </p>
                                    <div className="slider-btn">
                                        <a className="theme-btn">View All Courses</a>
                                    </div>
                                </div>
                                <div className="slider-box wow">
                                    <div className="slider-images animate__animated animate__bounceInRight ">
                                        <img src={banner} />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="why-choose-us-area page-paddings">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                            <div className="E-section-title text-center">
                                <h2>Why Choose E-learning</h2>
                                <p>
                                    "Look into yourself know you're ambitious and keep moving forward until you get
                                    something in return as your achievement."
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12">
                            <div className="why-chhouse-us-box wow center one">
                                <div className="why-chhouse-us-box-inner">
                                    <div className="why-chhouse-us-icon icon1">
                                        <i className="fas fa-book"></i>
                                    </div>
                                    <div className="why-chhouse-us-content">
                                        <h3 className="theme-title">Course Accessibility</h3>
                                        <p className="theme-description">
                                            Select a suitable course from the vast area of other courses and access it
                                            anytime and from anywhere.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12">
                            {/* <ReactWOW animation='fadeIn'></ReactWOW> */}
                            <div className="why-chhouse-us-box center second">
                                <div className="why-chhouse-us-box-inner">
                                    <div className="why-chhouse-us-icon icon2">
                                        <i className="fa-solid fa-graduation-cap"></i>
                                    </div>
                                    <div className="why-chhouse-us-content">
                                        <h3 className="theme-title">Scholarship</h3>
                                        <p className="theme-description">To encourage talent, we give up to 100% aid to these
                                            young learners who have the ability to do something</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12">
                            <div className="why-chhouse-us-box center third">
                                <div className="why-chhouse-us-box-inner">
                                    <div className="why-chhouse-us-icon icon3">
                                        <i className="fa-solid fa-globe"></i>
                                    </div>
                                    <div className="why-chhouse-us-content">
                                        <h3 className="theme-title">Practical learning</h3>
                                        <p className="theme-description">Interact yourself with the real-world while doing the
                                            real-world project and other things to master your skills.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12">
                            <div className="why-chhouse-us-box center fourth">
                                <div className="why-chhouse-us-box-inner">
                                    <div className="why-chhouse-us-icon icon4">
                                        <i className="fas fa-user"></i>
                                    </div>
                                    <div className="why-chhouse-us-content">
                                        <h3 className="theme-title">Expert Instruction</h3>
                                        <p className="theme-description">Hold the opportunity to learn from the industry's
                                            expert and learn how to excute thiings like them.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12">
                            <div className="why-chhouse-us-box center fifth">
                                <div className="why-chhouse-us-box-inner">
                                    <div className="why-chhouse-us-icon icon5">
                                        <i className="fas fa-headphones-alt"></i>
                                    </div>
                                    <div className="why-chhouse-us-content">
                                        <h3 className="theme-title">Schedule learning</h3>
                                        <p className="theme-description">Learn at whatever and whenever at your suitable time
                                            and place. Get a part-time study degree.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12">
                            <div className="why-chhouse-us-box center sixth">
                                <div className="why-chhouse-us-box-inner">
                                    <div className="why-chhouse-us-icon icon6">
                                        <i className="fa-solid fa-child-reaching"></i>
                                    </div>
                                    <div className="why-chhouse-us-content">
                                        <h3 className="theme-title">Recorded session</h3>
                                        <p className="theme-description">
                                            Missed the live class? Don't worry about it, access to evey session on the
                                            chosen course.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </section>
            <section className="popular-course-area page-background">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12 ">
                            <div className="E-section-title text-center ">
                                <h2>Discover The Variety Of Courses Here</h2>
                                <p>
                                    Choose one appropriate course for you from over multifarious courses available on this
                                    platform.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-sm-6 col-lg-4 bluu">
                            <div className="content-box wow center one">
                                <div className="content-images">

                                    <img src={courses1} alt="course1" />

                                </div>
                                <div className="content-description">
                                    <h3 className="theme-title">
                                        Data Product Manager
                                    </h3>
                                    <p className="theme-description">
                                        Follow the step by step to learn the data and gain understandability of
                                        software-based products in depth
                                    </p>
                                    <div className="course-info">
                                        <div className="rating-star">
                                            <i className="fa-solid fa-star"></i>
                                            <i className="fa-solid fa-star"></i>
                                            <i className="fa-solid fa-star"></i>
                                            <i className="fa-solid fa-star"></i>
                                            <i className="fa-solid fa-star-half-stroke"></i>
                                        </div>
                                        <ul className="content-meta">
                                            <li>
                                                <i className="fa-solid fa-user"></i>31
                                            </li>
                                            <li>
                                                <i className="fa-solid fa-heart"></i>10
                                            </li>

                                        </ul>
                                    </div>
                                </div>
                                <div className="content-footer">
                                    <div className="teacher">
                                        <img src={user1} />
                                        <span>Alia Noor</span>
                                    </div>
                                    <div className="price">
                                        <span className="alert alert-success">Free</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-6 col-lg-4 bluu">
                            <div className="content-box wow center second" >
                                <div className="content-images">
                                    <img src={courses2} alt="courses2" />
                                </div>
                                <div className="content-description">
                                    <h3 className="theme-title">
                                        Learning SQL
                                    </h3>
                                    <p className="theme-description">
                                        Get a deep knowledge from the beginning and learn how to use essential databases
                                        through SQL.
                                    </p>
                                    <div className="course-info">
                                        <div className="rating-star">
                                            <i className="fa-solid fa-star"></i>
                                            <i className="fa-solid fa-star"></i>
                                            <i className="fa-solid fa-star"></i>
                                            <i className="fa-solid fa-star"></i>
                                            <i className="fa-solid fa-star-half-stroke"></i>
                                        </div>
                                        <ul className="content-meta">
                                            <li>
                                                <i className="fa-solid fa-user"></i>31
                                            </li>
                                            <li>
                                                <i className="fa-solid fa-heart"></i>10
                                            </li>

                                        </ul>
                                    </div>
                                </div>
                                <div className="content-footer">
                                    <div className="teacher">
                                        <img src={user1} />
                                        <span>Alia Noor</span>
                                    </div>
                                    <div className="price">
                                        <span className="alert alert-success">$25.00</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-6 col-lg-4 bluu">
                            <div className="content-box center wow third">
                                <div className="content-images">
                                    <img src={courses3} alt="courses3" />
                                </div>
                                <div className="content-description">
                                    <h3 className="theme-title">
                                        Java Programming
                                    </h3>
                                    <p className="theme-description">
                                        Learn the fundamental programming concept of java. It will open the right doors for
                                        you as a developer.
                                    </p>
                                    <div className="course-info">
                                        <div className="rating-star">
                                            <i className="fa-solid fa-star"></i>
                                            <i className="fa-solid fa-star"></i>
                                            <i className="fa-solid fa-star"></i>
                                            <i className="fa-solid fa-star"></i>
                                            <i className="fa-solid fa-star-half-stroke"></i>
                                        </div>
                                        <ul className="content-meta">
                                            <li>
                                                <i className="fa-solid fa-user"></i>31
                                            </li>
                                            <li>
                                                <i className="fa-solid fa-heart"></i>10
                                            </li>

                                        </ul>
                                    </div>
                                </div>
                                <div className="content-footer">
                                    <div className="teacher">
                                        <img src={user1} />
                                        <span>Alia Noor</span>
                                    </div>
                                    <div className="price">
                                        <span className="alert alert-success">Free</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-6 col-lg-4 bluu">
                            <div className="content-box center wow fourth">
                                <div className="content-images">
                                    <img src={courses4} alt="courses4" />
                                </div>
                                <div className="content-description">
                                    <h3 className="theme-title">
                                        UI/UX Designing
                                    </h3>
                                    <p className="theme-description">
                                        Connect with UI/UX design skills and connect it with your core designing ideas and
                                        shape it in digital form.
                                    </p>
                                    <div className="course-info">
                                        <div className="rating-star">
                                            <i className="fa-solid fa-star"></i>
                                            <i className="fa-solid fa-star"></i>
                                            <i className="fa-solid fa-star"></i>
                                            <i className="fa-solid fa-star"></i>
                                            <i className="fa-solid fa-star-half-stroke"></i>
                                        </div>
                                        <ul className="content-meta">
                                            <li>
                                                <i className="fa-solid fa-user"></i>31
                                            </li>
                                            <li>
                                                <i className="fa-solid fa-heart"></i>10
                                            </li>

                                        </ul>
                                    </div>
                                </div>
                                <div className="content-footer">
                                    <div className="teacher">
                                        <img src={user1} />
                                        <span>Alia Noor</span>
                                    </div>
                                    <div className="price">
                                        <span className="alert alert-success">$15.00</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-6 col-lg-4 bluu">
                            <div className="content-box center wow fifth">
                                <div className="content-images">
                                    <img src={courses5} alt="course5" />
                                </div>
                                <div className="content-description">
                                    <h3 className="theme-title">
                                        Data Analytics
                                    </h3>
                                    <p className="theme-description">
                                        Give your data analytics career a sophisticated start by learning fundamental
                                        concepts of data analysis.
                                    </p>
                                    <div className="course-info">
                                        <div className="rating-star">
                                            <i className="fa-solid fa-star"></i>
                                            <i className="fa-solid fa-star"></i>
                                            <i className="fa-solid fa-star"></i>
                                            <i className="fa-solid fa-star"></i>
                                            <i className="fa-solid fa-star-half-stroke"></i>
                                        </div>
                                        <ul className="content-meta">
                                            <li>
                                                <i className="fa-solid fa-user"></i>31
                                            </li>
                                            <li>
                                                <i className="fa-solid fa-heart"></i>10
                                            </li>

                                        </ul>
                                    </div>
                                </div>
                                <div className="content-footer">
                                    <div className="teacher">
                                        <img src={user1} />
                                        <span>Alia Noor</span>
                                    </div>
                                    <div className="price">
                                        <span className="alert alert-success">$5.00</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-6 col-lg-4 bluu">
                            <div className="content-box center wow sixth">
                                <div className="content-images">
                                    <img src={courses6} alt="courses6" />
                                </div>
                                <div className="content-description">
                                    <h3 className="theme-title">
                                        Cyber Security
                                    </h3>
                                    <p className="theme-description">
                                        Learn the latest cyber trends from the experts and interact with the real-world
                                        projects at a time.
                                    </p>
                                    <div className="course-info">
                                        <div className="rating-star">
                                            <i className="fa-solid fa-star"></i>
                                            <i className="fa-solid fa-star"></i>
                                            <i className="fa-solid fa-star"></i>
                                            <i className="fa-solid fa-star"></i>
                                            <i className="fa-solid fa-star-half-stroke"></i>
                                        </div>
                                        <ul className="content-meta">
                                            <li>
                                                <i className="fa-solid fa-user"></i>31
                                            </li>
                                            <li><i className="fa-solid fa-heart"></i>10
                                            </li>

                                        </ul>
                                    </div>
                                </div>
                                <div className="content-footer">
                                    <div className="teacher">
                                        <img src={user1} />
                                        <span>Alia Noor</span>
                                    </div>
                                    <div className="price">
                                        <span className="alert alert-success">$10.00</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="event-area page-paddings">
                <div className="container">
                    <div className="row">
                        <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12">
                            <div className="E-section-title text-center">
                                <h2>Upcoming Events</h2>
                                <p>To support and empower students, we arrange some of the events where they acknowledge
                                    something which helps them to become a successful person.</p>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12">
                            <div className="event-box center one">
                                <div className="event-image">
                                    <img src={event1} alt='event1' />
                                    <div className="event-data">
                                        <h5>
                                            <span>16</span>June
                                        </h5>
                                    </div>
                                </div>
                                <div className="event-content">
                                    <h3 className="theme-title">Webinar: Data Specialist
                                    </h3>
                                    <p className="theme-description">
                                        Get on the digital seat and hear what Data analysis experts have to say about the
                                        industry and enlighten yourself.
                                    </p>
                                    <ul className="event-list clearfix">
                                        <li>
                                            <i className="fa-solid fa-user"></i>John Wood
                                        </li>
                                        <li>
                                            <i className="fa-solid fa-location-dot"></i>New York City
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12">
                            <div className="event-box center third">
                                <div className="event-image">
                                    <img src={event2} alt='event2' />
                                    <div className="event-data">
                                        <h5>
                                            <span>18</span>June
                                        </h5>
                                    </div>
                                </div>
                                <div className="event-content">
                                    <h3 className="theme-title">
                                        Virtual Java Conference
                                    </h3>
                                    <p className="theme-description">
                                        Grab the opportunity and dive into the ocean of learning and upcoming events coming
                                        in the java world.
                                    </p>
                                    <ul className="event-list clearfix">
                                        <li>
                                            <i className="fa-solid fa-user"></i>John Wood
                                        </li>
                                        <li>
                                            <i className="fa-solid fa-location-dot"></i>New York City
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12">
                            <div className="event-box center fifth">
                                <div className="event-image">
                                    <img src={event3} alt='event3' />
                                    <div className="event-data">
                                        <h5>
                                            <span>18</span>June
                                        </h5>
                                    </div>
                                </div>
                                <div className="event-content">
                                    <h3 className="theme-title">International talk on E-Learning
                                    </h3>
                                    <p className="theme-description">
                                        Come around and listen to the industry experts who have the vision to take
                                        e-learning on another level.
                                    </p>
                                    <ul className="event-list clearfix">
                                        <li>
                                            <i className="fa-solid fa-user"></i>John Wood
                                        </li>
                                        <li>
                                            <i className="fa-solid fa-location-dot"></i>New York City
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="review-area page-paddings">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-3 col-lg-3 col-md-3 col-sm-6 col-12">
                            <div className="review-box text-center wow center one">
                                <div className="review-icon">
                                    <img src={students} />
                                </div>
                                <div className="review-content">
                                    <h3>1800+</h3>
                                    <p>Students</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-3 col-lg-3 col-md-3 col-sm-6 col-12">
                            <div className="review-box text-center wow center second">
                                <div className="review-icon">
                                    <img src={courses} />
                                </div>
                                <div className="review-content">
                                    <h3>1800+</h3>
                                    <p>Courses</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-3 col-lg-3 col-md-3 col-sm-6 col-12">
                            <div className="review-box text-center center wow third">
                                <div className="review-icon">
                                    <img src={certifiedteacher} />
                                </div>
                                <div className="review-content">
                                    <h3>1800+</h3>
                                    <p>Certified Teachers</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-3 col-lg-3 col-md-3 col-sm-6 col-12">
                            <div className="review-box text-center center wow fourth">
                                <div className="review-icon">
                                    <img src={awardwining} />
                                </div>
                                <div className="review-content">
                                    <h3>1800+</h3>
                                    <p>Award Winning</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <F />
            <section className="our-teacher-area page-background">
                <div className="container">
                    <div className="row">
                        <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12">
                            <div className="E-section-title text-center">
                                <h2>Team of experts</h2>
                                <p>Here you will have the team of experts from multifurious industries you will learn from
                                    them under their experience and ethical guidance</p>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                            <div className="teacher-slider owl-loaded owl-drag owl-stage-outer">
                                {/* <div className="teacher-carousel "> */}
                                <Swiper
                                    spaceBetween={10}
                                    slidesPerView={4}
                                    slidesPerGroup={1}
                                    loop={true}
                                    // slidesPerGroup={4}
                                    // centeredSlides={true}
                                    autoplay={{
                                        delay: 2500,
                                        disableOnInteraction: false,
                                    }}
                                    pagination={{
                                        clickable: true
                                    }}
                                    breakpoints={{
                                        0: {
                                            centeredSlides: true,
                                            slidesPerView: 1
                                        },

                                        600: {
                                            slidesPerView: 3
                                        },

                                        1024: {
                                            slidesPerView: 4
                                        },

                                        1366: {
                                            slidesPerView: 4
                                        }
                                    }}
                                    // navigation={true}
                                    modules={[Autoplay, Pagination]}
                                    className="mySwiper"
                                >
                                    <SwiperSlide>
                                        <div className="item">
                                            <div className="teacher-box center wow">
                                                <div className="teacher-image">
                                                    <img src={teacher1} />
                                                    <div className="theme-social-icon">
                                                        <ul>
                                                            <li className="ifacebook"><i className="fa-brands fa-facebook-f"></i>
                                                            </li>
                                                            <li className="itwitter"><i className="fa-brands fa-twitter"></i>
                                                            </li>
                                                            <li className="ilinkedin"><i
                                                                className="fa-brands fa-linkedin-in"></i>
                                                            </li>
                                                            <li className="iyoutube"><i className="fa-brands fa-youtube"></i>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                                <div className="teacher-content">
                                                    <h3 className="theme-title">Aden Smith
                                                    </h3>
                                                    <p className="theme-description">Head Of Department</p>
                                                </div>

                                            </div>
                                        </div>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <div>
                                            <div className="teacher-box center wow">
                                                <div className="teacher-image">
                                                    <img src={teacher2} />
                                                    <div className="theme-social-icon">
                                                        <ul>
                                                            <li className="ifacebook"><i className="fa-brands fa-facebook-f"></i>
                                                            </li>
                                                            <li className="itwitter"><i className="fa-brands fa-twitter"></i>
                                                            </li>
                                                            <li className="ilinkedin"><i
                                                                className="fa-brands fa-linkedin-in"></i>
                                                            </li>
                                                            <li className="iyoutube"><i className="fa-brands fa-youtube"></i>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                                <div className="teacher-content">
                                                    <h3 className="theme-title">Kally Brooks
                                                    </h3>
                                                    <p className="theme-description">Professor</p>
                                                </div>
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <div>
                                            <div className="teacher-box center wow">
                                                <div className="teacher-image">
                                                    <img src={teacher3} />
                                                    <div className="theme-social-icon">
                                                        <ul>
                                                            <li className="ifacebook"><i className="fa-brands fa-facebook-f"></i>
                                                            </li>
                                                            <li className="itwitter"><i className="fa-brands fa-twitter"></i>
                                                            </li>
                                                            <li className="ilinkedin"><i
                                                                className="fa-brands fa-linkedin-in"></i>
                                                            </li>
                                                            <li className="iyoutube"><i className="fa-brands fa-youtube"></i>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                                <div className="teacher-content">
                                                    <h3 className="theme-title">David Clark
                                                    </h3>
                                                    <p className="theme-description">Chemistry Teacher</p>
                                                </div>
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <div>
                                            <div className="teacher-box center wow">
                                                <div className="teacher-image">
                                                    <img src={teacher4} />

                                                    <div className="theme-social-icon">
                                                        <ul>
                                                            <li className="ifacebook"><i className="fa-brands fa-facebook-f"></i>
                                                            </li>
                                                            <li className="itwitter"><i className="fa-brands fa-twitter"></i>
                                                            </li>
                                                            <li className="ilinkedin"><i
                                                                className="fa-brands fa-linkedin-in"></i>
                                                            </li>
                                                            <li className="iyoutube"><i className="fa-brands fa-youtube"></i>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                                <div className="teacher-content">
                                                    <h3 className="theme-title">Rebeka Alig
                                                    </h3>
                                                    <p className="theme-description">English Teacher</p>
                                                </div>
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <div>
                                            <div className="teacher-box center wow">
                                                <div className="teacher-image">
                                                    <img src={teacher5} />

                                                    <div className="theme-social-icon">
                                                        <ul>
                                                            <li className="ifacebook"><i className="fa-brands fa-facebook-f"></i>
                                                            </li>
                                                            <li className="itwitter"><i className="fa-brands fa-twitter"></i>
                                                            </li>
                                                            <li className="ilinkedin"><i
                                                                className="fa-brands fa-linkedin-in"></i>
                                                            </li>
                                                            <li className="iyoutube"><i className="fa-brands fa-youtube"></i>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                                <div className="teacher-content">
                                                    <h3 className="theme-title">Henry Pole
                                                    </h3>
                                                    <p className="theme-description">English Teacher</p>
                                                </div>
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <div>
                                            <div>
                                                <div className="teacher-box center">
                                                    <div className="teacher-image">
                                                        <img src={teacher6} />

                                                        <div className="theme-social-icon">
                                                            <ul>
                                                                <li className="ifacebook"><i
                                                                    className="fa-brands fa-facebook-f"></i>
                                                                </li>
                                                                <li className="itwitter"><i className="fa-brands fa-twitter"></i>
                                                                </li>
                                                                <li className="ilinkedin"><i
                                                                    className="fa-brands fa-linkedin-in"></i>
                                                                </li>
                                                                <li className="iyoutube"><i className="fa-brands fa-youtube"></i>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                    <div className="teacher-content">
                                                        <h3 className="theme-title">John Figery
                                                        </h3>
                                                        <p className="theme-description">Computer Teacher</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <div>
                                            <div>
                                                <div className="teacher-box center wow">
                                                    <div className="teacher-image">
                                                        <img src={teacher7} />

                                                        <div className="theme-social-icon">
                                                            <ul>
                                                                <li className="ifacebook"><i
                                                                    className="fa-brands fa-facebook-f"></i>
                                                                </li>
                                                                <li className="itwitter"><i className="fa-brands fa-twitter"></i>
                                                                </li>
                                                                <li className="ilinkedin"><i
                                                                    className="fa-brands fa-linkedin-in"></i>
                                                                </li>
                                                                <li className="iyoutube"><i className="fa-brands fa-youtube"></i>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                    <div className="teacher-content">
                                                        <h3 className="theme-title">David Clark
                                                        </h3>
                                                        <p className="theme-description">Chemistry Teacher</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <div>
                                            <div>
                                                <div className="teacher-box center wow">
                                                    <div className="teacher-image">
                                                        <img src={teacher8} />

                                                        <div className="theme-social-icon">
                                                            <ul>
                                                                <li className="ifacebook"><i
                                                                    className="fa-brands fa-facebook-f"></i>
                                                                </li>
                                                                <li className="itwitter"><i className="fa-brands fa-twitter"></i>
                                                                </li>
                                                                <li className="ilinkedin"><i
                                                                    className="fa-brands fa-linkedin-in"></i>
                                                                </li>
                                                                <li className="iyoutube"><i className="fa-brands fa-youtube"></i>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                    <div className="teacher-content">
                                                        <h3 className="theme-title">Wendy Core
                                                        </h3>
                                                        <p className="theme-description">Computer Teacher</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                    <div className="custom-pagination text-center mt-4" />
                                </Swiper>
                            </div>

                        </div>
                    </div>
                </div>
            </section>
            <section className="our-pricing-area page-paddings">
                <div className="container">
                    <div className="row">
                        <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12">
                            <div className="E-section-title text-center">
                                <h2>Our Pricing</h2>
                                <p>Join Us And Become A Part Of The Revolution</p>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12">
                            <div className="pricing-box pricing-box-top text-center second">
                                <div className="pricing-header ph1">
                                    <h2>Basic</h2>
                                </div>
                                <div className="pricing-content">
                                    <h3 className="pt1">$99<span>/ Month</span></h3>
                                    <ul>
                                        <li>Unlimited access courses</li>
                                        <li>Progress Report Available</li>
                                        <li>High resolution videos</li>
                                        <li>------</li>
                                        <li>------</li>
                                    </ul>
                                    <div className="pricing-button">
                                        <button className="theme-btn ph1 button">select plan</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12">
                            <div className="pricing-box text-center two one">
                                <div className="pricing-header ph2">
                                    <h2>Standard</h2>
                                </div>
                                <div className="pricing-content">
                                    <h3 className="pt2">$120<span>/ Month</span></h3>
                                    <ul>
                                        <li>Unlimited access courses</li>
                                        <li>Progress Report Available</li>
                                        <li>High resolution videos</li>
                                        <li>Certificate after completion</li>
                                        <li>------</li>
                                    </ul>
                                    <div className="pricing-button">
                                        <button className="theme-btn ph2 button">select plan</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12">
                            <div className="pricing-box pricing-box-top text-center second">
                                <div className="pricing-header ph3">
                                    <h2>Premium</h2>
                                </div>
                                <div className="pricing-content">
                                    <h3 className="pt3">$199<span>/ Month</span></h3>
                                    <ul>
                                        <li>Unlimited access courses</li>
                                        <li>Progress Report Available</li>
                                        <li>High resolution videos</li>
                                        <li>Certificate after completion</li>
                                        <li>Private sessions</li>
                                    </ul>
                                    <div className="pricing-button">
                                        <button className="theme-btn ph3 button">select plan</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="our-blog-area page-background">
                <div className="container">
                    <div className="row">
                        <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 ">
                            <div className="E-section-title text-center">
                                <h2>Our Blog</h2>
                                <p>Read some of the words and know what skilled people work or what technology would become
                                    revolutionary for the world.</p>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col71">
                            <div className="event-box center one">
                                <div className="event-image">
                                    <img src={blog1} />
                                    <div className="event-data">
                                        <h5><span>16</span>May</h5>
                                    </div>
                                </div>
                                <div className="event-content">
                                    <h3 className="theme-title">
                                        How can Elon Musk think?
                                    </h3>
                                    <p className="theme-description">In this pacing world, every billionaire is working on his
                                        vision and ways to make this world a better place...</p>
                                    <ul className="event-list clearfix">
                                        <li><i className="fa-solid fa-calendar-week"></i>16 May, 2019</li>
                                        <li><i className="fa-solid fa-comments"></i>2 Comment</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col71">
                            <div className="event-box center wow second">
                                <div className="event-image">
                                    <img src={blog2} />
                                    <div className="event-data">
                                        <h5><span>16</span>May</h5>
                                    </div>
                                </div>
                                <div className="event-content">
                                    <h3 className="theme-title">
                                        What are the upcoming Technologies?
                                    </h3>
                                    <p className="theme-description">Every new technology takes its place year after year or
                                        maybe a decade, In general, new technologies must...</p>
                                    <ul className="event-list clearfix">
                                        <li><i className="fa-solid fa-calendar-week"></i>16 May, 2019</li>
                                        <li><i className="fa-solid fa-comments"></i>2 Comment</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col71">
                            <div className="event-box center third">
                                <div className="event-image">
                                    <img src={blog3} />
                                    <div className="event-data">
                                        <h5><span>16</span>May</h5>
                                    </div>
                                </div>
                                <div className="event-content">
                                    <h3 className="theme-title">
                                        How to influence yourself to get skilled?
                                    </h3>
                                    <p className="theme-description">Every human’s mind works differently, nevertheless, the
                                        ability to listen is the same conversely perceiving...</p>
                                    <ul className="event-list clearfix">
                                        <li><i className="fa-solid fa-calendar-week"></i>16 May, 2019</li>
                                        <li><i className="fa-solid fa-comments"></i>2 Comment</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="our-client-area ">
                <div className="container">
                    <div className="row">
                        <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12">
                            <div className="our-client-slider theme-slider owl-loaded owl-drag">
                                <Swiper
                                    spaceBetween={15}
                                    slidesPerView={4}
                                    // slidesPerGroup={4}
                                    loop={true}
                                    autoplay={{
                                        delay: 2500,
                                        disableOnInteraction: false,
                                    }}
                                    navigation={true}
                                    modules={[Autoplay]}
                                    className="LogoSwiper"
                                    breakpoints={{
                                        0: {
                                            slidesPerView: 2,
                                            spaceBetween: 80
                                        },

                                        600: {
                                            slidesPerView: 4
                                        },

                                        1024: {
                                            slidesPerView: 4
                                        },

                                        1366: {
                                            slidesPerView: 5
                                        }
                                    }}
                                >
                                    <SwiperSlide><img src={logo1} /></SwiperSlide>
                                    <SwiperSlide><img src={logo2} /></SwiperSlide>
                                    <SwiperSlide><img src={logo3} /></SwiperSlide>
                                    <SwiperSlide><img src={logo4} /></SwiperSlide>
                                    <SwiperSlide><img src={logo5} /></SwiperSlide>
                                    <SwiperSlide><img src={logo6} /></SwiperSlide>
                                </Swiper>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <footer className="footer-main">
                <div className="footer-shape">
                    <img src={footershape} />
                </div>
                <div className="footer-top">
                    <div className="container">
                        <div className="row">
                            <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12">
                                <div className="footer-box contact-list">
                                    <div className="footer-title">
                                        <h3 className="ftitle">Contact Us</h3>
                                    </div>
                                    <div className="footer-content">
                                        <ul>
                                            <li>
                                                <span>
                                                    <i className="fas fa-map-marker-alt"></i>Spring Store London Oxford Street,
                                                    012 United Kingdom
                                                </span>
                                            </li>
                                            <li>
                                                <span>
                                                    <i className="fa-solid fa-phone"></i>+00 1234 456789
                                                </span>
                                            </li>
                                            <li>
                                                <span>
                                                    <i className="fa-solid fa-envelope"></i>info@example.com
                                                </span>
                                            </li>
                                            <li>
                                                <span>
                                                    <i className="fa-solid fa-fax"></i>000 123 2294 089
                                                </span>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-4 col-lg-4 col-md-6 col-sm-6 col-12">
                                <div className="footer-box footer-feature">
                                    <div className="footer-title">
                                        <h3 className="ftitle">Feature Links</h3>
                                    </div>
                                    <div className="footer-content clearfix">
                                        <ul className="space">
                                            <li>
                                                <i className="fa-regular fa-circle-dot"></i>About Us
                                            </li>
                                            <li>
                                                <i className="fa-regular fa-circle-dot"></i>Courses
                                            </li>
                                            <li>
                                                <i
                                                    className="fa-regular fa-circle-dot"></i>scholarship
                                            </li>
                                            <li>
                                                <i className="fa-regular fa-circle-dot"></i>Contact
                                            </li>
                                        </ul>
                                        <ul className="space">
                                            <li>
                                                <i className="fa-regular fa-circle-dot"></i>Teachers
                                            </li>
                                            <li>
                                                <i className="fa-regular fa-circle-dot"></i>Pricing
                                            </li>
                                            <li>
                                                <i className="fa-regular fa-circle-dot"></i>Blog
                                            </li>
                                            <li>
                                                <i className="fa-regular fa-circle-dot"></i>Events
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-2 col-lg-4 col-md-6 col-sm-6 col-12">
                                <div className="footer-box support-box">
                                    <div className="footer-title">
                                        <h3 className="ftitle">Support</h3>
                                    </div>
                                    <div className="footer-content">
                                        <ul>
                                            <li><i className="fa-regular fa-circle-dot"></i>FAQ's</li>
                                            <li><i className="fa-regular fa-circle-dot"></i>Support
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12">
                                <div className="footer-box download-app">
                                    <div className="footer-title">
                                        <h3 className="ftitle">Download Our App</h3>
                                    </div>
                                    <div className="footer-content">
                                        <ul>
                                            <li>
                                                <img src={playStore} />
                                            </li>
                                            <li>
                                                <img src={appStore} />
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 ">
                                <div className="footer-social">
                                    <ul className="clearfix">
                                        <li className="center one">
                                            <a className='facebook'>
                                                <i className="fa-brands fa-facebook-f"></i>facebook
                                            </a>
                                        </li>
                                        <li className="center second">
                                            <a className='twitter'>
                                                <i className="fa-brands fa-twitter"></i>twitter
                                            </a>
                                        </li>
                                        <li className="center third">
                                            <a className='linkedin'>
                                                <i className="fa-brands fa-linkedin-in"></i>linkedin
                                            </a>
                                        </li>
                                        <li className="center fourth">
                                            <a className='youtube'>
                                                <i className="fa-brands fa-youtube"></i>youtube
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="footer-bottom text-center">
                    <div className="container">
                        <div className="row">
                            <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 ">
                                <div className="footer-copyright">
                                    <p>Copyright © 2020  E-learning. All right reserved</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </div>

    )
}
