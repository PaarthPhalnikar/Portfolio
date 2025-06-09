import React from 'react'

export default function Contact() {
    return (
        <section id="ContactUs" className="contact-section">
            <div className="container section-title">
                <div className="row">
                    <div className="text-center text-lg-start">
                        <h3 className="title_shape fade-in-up">Get In Touch</h3>
                    </div>
                </div>
            </div>
            <div className="container">
                <div className="row gy-4">
                    <div className="col-lg-4">
                        <div className="info-item d-flex  justify-content-lg-start align-items-center fade-in-left">
                            <i className="fa-sharp fa-light fa-location-dot"></i>
                            <div>
                                <h3>Address</h3>
                                <p className="hov">Mumbai,Maharashtra</p>
                            </div>
                        </div>
                        <div className="info-item d-flex  justify-content-lg-start align-items-center fade-in-left">
                            <i className="fa-sharp fa-light fa-phone"></i>
                            <div>
                                <h3>Call Me</h3>
                                <p className="hov">+91 8291711081</p>
                            </div>
                        </div>
                        <div className="info-item d-flex justify-content-lg-start align-items-center fade-in-left">
                            <i className="fa-sharp fa-regular fa-envelope"></i>
                            <div>
                                <h3>Email me</h3>
                                <p className="hov">Paarth.phalnikar@gmail.com</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-8">
                        <form className="php-email-form" action="https://formsubmit.co/94056bc813c9ee9075b25073fe86496d"
                            method="post" encType="multipart/form-data">
                            <div className="row gy-4">
                                <div className='fade-in-right d-flex justify-content-between flex-wrap'>
                                    <div className='inputBox'>
                                        <div className='position-relative'>
                                            <input type="text" className="form-control" name="Name"
                                                required />
                                            <span className='txtspan'>Your Name</span>
                                        </div>
                                    </div>
                                    <div className='inputBox'>
                                        <div className='position-relative'>
                                            <input type="text" className="form-control" name="Name"
                                                required />
                                            <span className='txtspan'>Your Email</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-12">
                                    <div className='fade-in-right position-relative'>
                                        <input type="text" className="form-control" name="Subject"
                                            required />
                                        <span className='txtspan'>Subject</span>
                                    </div>
                                </div>
                                <div className="col-md-12">
                                    <div className='fade-in-right position-relative'>
                                        <textarea className="form-control" name="text"></textarea>
                                        <span className='txtspan'>Message</span>
                                    </div>
                                </div>
                                <div className="col-md-12 text-center">
                                    <button type="submit" className='fade-in-right formbtnsubmission'>Send Message</button>
                                </div>
                            </div>
                            <input type="hidden" name="_template" value="table" />
                        </form>
                    </div>
                </div>
            </div>
        </section>
    )
}
