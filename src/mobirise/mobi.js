import React from 'react'
import image1 from './15.jpg'
import features10 from './features10.svg'
import features11 from './features11.svg'
import features12 from './features12.svg'
import logo from './logo.svg'
import './mobi.css'
export default function mobi() {
    return (
        <div>
            <section className="fi">
                <nav className="navbar navbar-expand-lg navbar-dropdown opened" >
                    <div className="container">
                        <div className="brand-toggler-wrapper ">
                            <div className="navbar-brand d-flex">
                                <span className="navbar-caption-wrap d-flex">
                                    <a className="navbar-caption display-7" href="#">Mobirise Theme</a>
                                </span>
                            </div>
                            <button className="navbar-toggler " type="button" data-toggle="collapse" data-bs-toggle="collapse" data-target="#navbarSupportedContent" data-bs-target="#navbarSupportedContent" aria-controls="navbarNavALTMarkup" aria-expanded="false" aria-label="Toggle navigation">
                                <label className="mobi-hamburger-menu">
                                    <input type="checkbox" />
                                </label>
                            </button>
                        </div>
                        <div className="collapse navbar-collapse " id="navbarSupportedContent">
                            <ul className="navbar-nav nav-dropdown">
                                <li className="mobi-nav-item">
                                    <a className="mobi-nav-link mobi-link "> About Us</a>
                                </li>
                                <li className="mobi-nav-item">
                                    <a className="mobi-nav-link mobi-link "> Services</a>
                                </li>
                                <li className="mobi-nav-item">
                                    <a className="mobi-nav-link mobi-link " > Contacts</a>
                                </li>
                            </ul>
                            <div className="navbar-buttons mbr-section-btn na">
                                <a className="btn btn-primary display-4 rounded-pill d-inline-block "> Download now</a>
                            </div>
                        </div>
                    </div>
                </nav>
            </section>
            <section className="position-relative t">
                <div className="container ">
                    <div className="row">
                        <div className="col-12 col-lg-6 mt-5 py-5 mt-lg-0 pt-lg-0">
                            <div className="text-wrapper">
                                <h1 className="mbr-section-title mbr-font-size greenish mba-4 display-2">
                                    A Better&nbsp;IT Solution Your&nbsp;Business
                                </h1>
                                <p className="grey display-7">Mobirise is a free offline app for Windows and Mac to easily create small/medium
                                    websites, landing pages, portfolios. 3500+ beautiful website blocks, templates and themes
                                    help you to start easily.</p>
                            </div>
                        </div>
                        <div className="col-12 col-lg-6">
                            <div className="image-wrapper">
                                <img src={image1} className="d-inline"/>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="sec">
                <div className="container">
                    <div>
                        <h4 className="mbr-section-title mbr-font-size  greenish m-0 ">Our featured services</h4>
                    </div>
                    <div className="row mt-5 ">
                        <div className="item features-image col-12 col-md-6 col-lg-4">
                            <div className="element-wrapper">
                                <div className="item-img">
                                    <img src={features10}/>
                                </div>
                                <div className="item-content">
                                    <h5 className="item-title fonts-style display-5">No Coding</h5>
                                    <p className="mt-3 display-7 mbr-text">Mobirise is an easy website builder. Just drop site
                                        elements to your page, add content and style it to look the way you like.</p>
                                </div>
                                <div className="mbr-section-btn section-btn item-footer ">
                                    <a className="btn btn-success item-btn lbtn ">Learn More </a>
                                </div>
                            </div>
                        </div>
                        <div className="item features-image col-12 col-md-6 col-lg-4">
                            <div className="element-wrapper">
                                <div className="item-img">
                                    <img src={features11}/>
                                </div>
                                <div className="item-content">
                                    <h5 className="item-title fonts-style display-5">Mobile Friendly</h5>
                                    <p className="mt-3 display-7 mbr-text">You don't have to code to create your own site. Select
                                        one of available themes in the Mobirise Site Maker.</p>
                                </div>
                                <div className="mbr-section-btn section-btn item-footer ">
                                    <a className="btn btn-success item-btn lbtn">Learn More </a>
                                </div>
                            </div>
                        </div>
                        <div className="item features-image col-12 col-md-6 col-lg-4">
                            <div className="element-wrapper">
                                <div className="item-img">
                                    <img src={features12}/>
                                </div>
                                <div className="item-content">
                                    <h5 className="item-title fonts-style display-5">Unique Styles</h5>
                                    <p className="mt-3 display-7 mbr-text">Select the theme that suits you. Each theme in the
                                        Mobirise Website Software contains a set of unique blocks.</p>
                                </div>
                                <div className=" mbr-section-btn section-btn item-footer ">
                                    <a className="btn btn-success item-btn lbtn">Learn More </a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="item features-image col-12 col-md-6 col-lg-4"></div>
                    <div className="item features-image col-12 col-md-6 col-lg-4"></div>
                    <div className="item features-image col-12 col-md-6 col-lg-4"></div>
                </div>
            </section>
            <section className="thi">
                <div className="container">
                    <div className="card-wrapper pb-lg-4">
                        <div className="card-box align-left">
                            <div className="card-inner">
                                <h4 className="mbr-section-title mbr-font-size greenish ce">
                                    Automated Software
                                </h4>
                            </div>
                        </div>
                    </div>
                    <div className="row content-row mtop-4">
                        <div className="card p-4 pb-md-5 col-12 col-md-6 col-lg-4">
                            <div className="card-box">
                                <div className="card-inner-block">
                                    <div className="title cards">
                                        <span className="num display-5">/01</span>
                                        <h4 className="card-title mbr-font-size mt-3 display-5 gtitle">Specification</h4>
                                        <p className="mbr-text card-text mbr-fonts-style display-7 greyish">Mobirise is perfect for
                                            non-techies who are not familiar with the intricacies of web development.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="card p-4 pb-md-5 col-12 col-md-6 col-lg-4">
                            <div className="card-box">
                                <div className="card-inner-block">
                                    <div className="title">
                                        <span className="num display-5">/02</span>
                                        <h4 className="card-title mbr-font-size mt-3 display-5 gtitle">Project Planning</h4>
                                        <p className="mbr-text card-text mbr-fonts-style display-7 greyish">Mobirise is perfect for
                                            non-techies who are not familiar with the intricacies of web development.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="card p-4 pb-md-5 col-12 col-md-6 col-lg-4">
                            <div className="card-box">
                                <div className="card-inner-block">
                                    <div className="title">
                                        <span className="num display-5">/03</span>
                                        <h4 className="card-title mbr-font-size mt-3 display-5 gtitle">Deployment</h4>
                                        <p className="mbr-text card-text mbr-fonts-style display-7 greyish">Mobirise is perfect for
                                            non-techies who are not familiar with the intricacies of web development.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="card p-4 pb-md-4 col-12 col-md-6 col-lg-4">
                            <div className="card-box">
                                <div className="card-inner-block">
                                    <div className="title">
                                        <span className="num display-5">/04</span>
                                        <h4 className="card-title mbr-font-size mt-3 display-5 gtitle">Our Philosophy</h4>
                                        <p className="mbr-text card-text mbr-fonts-style display-7 greyish">Lorem ipsum dolor sit
                                            amet, consectetur adipisicing elit.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="card p-4 pb-md-4 col-12 col-md-6 col-lg-4 ">
                            <div className="card-box">
                                <div className="card-inner-block">
                                    <div className="title">
                                        <span className="num display-5">/05</span>
                                        <h4 className="card-title mbr-font-size mt-3 display-5 gtitle">Specification</h4>
                                        <p className="mbr-text card-text mbr-fonts-style display-7 greyish">Mobirise is perfect for
                                            non-techies who are not familiar with the intricacies of web development.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="card p-4 pb-md-4 col-12 col-md-6 col-lg-4">
                            <div className="card-box card-box-last">
                                <div className="card-inner-block">
                                    <div className="title">
                                        <h4 className="card-title mbr-font-size mt-3 display-5 ">Project Planning</h4>
                                        <p className="card-text mbr-fonts-style display-7 ">Mobirise is perfect for non-techies who
                                            are not familiar with the intricacies of web development.</p>
                                        <div className="mbr-section-btn pt-4">
                                            <a className="btn btn-success display-4 item-btn lbtn">Create your own site</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="sec">
                <div className="container">
                    <div className="mbr-section-head mba-4">
                        <h3 className="mbr-section-title mbr-fonts-style align-left mb-0 greenish">Map</h3>
                    </div>
                    <div className="google-map">
                        <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d12090.519340298428!2d-73.985008!3d40.74817!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c259a9ac1f1b85%3A0x7e33d1c0e7af3be4!2s350%205th%20Ave%2C%20New%20York%2C%20NY%2010118!5e0!3m2!1sen!2sus!4v1724820149711!5m2!1sen!2sus" width="100%" height="450" allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                    </div>
                </div>
            </section>
            <section className="sec gb">
                <div className="container">
                    <div className="row mbr-white ">
                        <div className="col-6 col-lg-3 mb-3 aut">
                            <div className="media-wrap col-12">
                                <a>
                                    <img src={logo} className="ic"/>
                                </a>
                            </div>
                        </div>
                        <div className="col-12 col-md-6 col-lg-3">
                            <h5 className="mbr-section-subtitle  mbr-fonts-style mb-2 display-7">About</h5>
                            <ul className="list mbr-fonts-style display-4">
                                <li className="mbr-text item-wrap">Help Center</li>
                                <li className="mbr-text item-wrap">Mobirise Forums</li>
                                <li className="mbr-text item-wrap">Mobirise Kit</li>
                            </ul>
                        </div>
                        <div className="col-12 col-md-6 col-lg-3">
                            <h5 className="mbr-section-subtitle  mbr-fonts-style mb-2 display-7">Mobirise Help</h5>
                            <ul className="list mbr-fonts-style display-4">
                                <li className="mbr-text item-wrap">Help Center</li>
                                <li className="mbr-text item-wrap">Mobirise Forums</li>
                                <li className="mbr-text item-wrap">Mobirise Kit</li>
                                <li className="mbr-text item-wrap">Our site</li>
                            </ul>
                        </div>
                        <div className="col-12 col-md-6 col-lg-3">
                            <h5 className="mbr-section-subtitle  mbr-fonts-style mb-2 display-7">Mobirise Extensions</h5>
                            <ul className="list mbr-fonts-style display-4">
                                <li className="mbr-text item-wrap">Code Editor</li>
                                <li className="mbr-text item-wrap">Form Builder</li>
                                <li className="mbr-text item-wrap">Popup Builder</li>
                                <li className="mbr-text item-wrap">Enterprise</li>
                            </ul>
                        </div>
                        <div className="col-12 ">
                            <p className="mbr-text mb-0 mbr-fonts-style copyright align-center display-4 w">
                                © Copyright 2021 Mobirise. All Rights Reserved
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}
