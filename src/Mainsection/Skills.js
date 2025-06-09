import React, { useEffect } from 'react';
import CountUp from 'react-countup';
export default function Skills() {
    useEffect(() => {
        const a = Array.from(document.getElementsByClassName('barss'))
        let sa = Array.from(document.getElementsByClassName('sa'))
        let sb = Array.from(document.getElementsByClassName('sb'))
        const observer = new IntersectionObserver((entries) => {
            if (entries[0].isIntersecting) {
                entries[0].target.classList.add('animateLeft')
            }
            else {
                entries[0].target.classList.remove('animateLeft')
            }
        })
        const observer1 = new IntersectionObserver((entries) => {
            if (entries[0].isIntersecting) {
                entries[0].target.classList.add('animateRight')
            }
            else {
                entries[0].target.classList.remove('animateRight')
            }
        })
        const observer2 = new IntersectionObserver((entries) => {
            if (entries[0].isIntersecting) {
                entries[0].target.classList.add('animateProgress')
            }
            else {
                entries[0].target.classList.remove('animateProgress')
            }
        })
        sa.forEach((element) => {
            observer.observe(element)
        })
        sb.forEach((element) => {
            observer1.observe(element)
        })
        // a.forEach((element) => {
        //     observer2.observe(element)
        // })
    }, [])
    return (
        <section className="page_scroll my_skill_area section_padding gray_bg" id="Skills">
            <div className="container">
                <div className="row">
                    <div className="col-lg-8 offset-lg-2">
                        <div className="hero_section_title text-center wow">
                            <h1 className='title_shape fade-in-up'>My Skills</h1>
                            {/* <p>These are my skills</p>  */}
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="my_skill_box fade-in-left">
                            <h3>HTML5</h3>
                            <div className="percentCount">
                                <span className='counter'>
                                    <CountUp end={82} duration={2} enableScrollSpy />
                                    {/* <PureIncrement start={0} end={90} duration={1} className="purecounter" />0 */}
                                </span>
                                <span>%</span>
                            </div>
                            <div>
                                <div className="progressbar"
                                    style={{ width: '100%', backgroundColor: 'rgb(238,238,238)', borderRadius: '0px' }}>
                                    <div style={{ width: "82%" }} className='proggress barss fade-in-left'>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="my_skill_box fade-in-left">
                            <h3>CSS3</h3>
                            <div className="percentCount">
                                <span><CountUp end={87} duration={3} enableScrollSpy />
                                </span>
                                <span>%</span>
                            </div>
                            <div>
                                <div className="progressbar"
                                    style={{ width: '100%', backgroundColor: 'rgb(238,238,238)', borderRadius: '0px' }}>
                                    <div style={{ width: '87%' }} className='proggress barss fade-in-left'>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="my_skill_box fade-in-left">
                            <h3>Javascript</h3>
                            <div className="percentCount">
                                <span>
                                    <CountUp end={76} duration={3} enableScrollSpy />
                                </span>
                                <span>%</span>
                            </div>
                            <div>
                                <div className="progressbar"
                                    style={{ width: '100%', backgroundColor: 'rgb(238,238,238)', borderRadius: '0px' }}>
                                    <div style={{ width: '76%' }} className='proggress barss fade-in-left'>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="my_skill_box fade-in-left">
                            <h3>Django</h3>
                            <div className="percentCount">
                                <span>
                                    <CountUp end={72} duration={3} enableScrollSpy />
                                </span>
                                <span>%</span>
                            </div>
                            <div>
                                <div className="progressbar"
                                    style={{ width: '100%', backgroundColor: 'rgb(238,238,238)', borderRadius: '0px' }}>
                                    <div style={{ width: '72%' }} className='proggress barss fade-in-left'>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="my_skill_box fade-in-right">
                            <h3>SQL</h3>
                            <div className="percentCount">
                                <span>
                                    <CountUp end={72} duration={3} enableScrollSpy />
                                </span>
                                <span>%</span>
                            </div>
                            <div>
                                <div className="progressbar"
                                    style={{ width: '100%', backgroundColor: 'rgb(238,238,238)', borderRadius: '0px' }}>
                                    <div style={{ width: '72%' }} className='proggress barss fade-in-left'>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="my_skill_box fade-in-right">
                            <h3>Python</h3>
                            <div className="percentCount">
                                <span>
                                    <CountUp end={67} duration={3} enableScrollSpy />
                                </span>
                                <span>%</span>
                            </div>
                            <div>
                                <div className="progressbar"
                                    style={{ width: '100%', backgroundColor: 'rgb(238,238,238)', borderRadius: '0px' }}>
                                    <div style={{ width: '67%' }} className='proggress barss fade-in-left'>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="my_skill_box fade-in-right">
                            <h3>React</h3>
                            <div className="percentCount">
                                <span>
                                    <CountUp end={80} duration={3} enableScrollSpy />
                                </span>
                                <span>%</span>
                            </div>
                            <div>
                                <div className="progressbar"
                                    style={{ width: '100%', backgroundColor: 'rgb(238,238,238)', borderRadius: '0px' }}>
                                    <div style={{ width: "80%" }} className='proggress barss fade-in-left'>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
