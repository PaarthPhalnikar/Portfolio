import React from 'react'
export default function Education() {
    const educationData = [
        {
            institution: 'Skill Up IT Academy',
            duration: '2024 - Present',
            description: 'Currently doing fullStack course which includes HTML, CSS, JavaScript, React, Python, C++ and SQL.'
        },
        {
            institution: 'London School of Economics',
            duration: '2021 - 2024',
            description: 'BSc Economics and Finance with Second Class Honours (Upper Division).'
        },
        {
            institution: 'A and AS Levels',
            duration: '2020 - 2021',
            description: 'Scored A in Economics and Accounting at Cambridge Assessment International Education.'
        },
        {
            institution: 'IGCSE',
            duration: '2017 - 2018',
            description: 'Completed IGCSE with Merit at Cambridge Assessment International Education.'
        }
    ];

    return (
        <section className="my_education" id="Education">
            <div className="container">
                <div className="row">
                    <div className="hero_section_title text-center">
                        <h1 className='title_shape fade-in-up'>Education</h1>
                    </div>
                    <div>
                        <div className="col-twelve">
                            <div className="timeline-wrap">
                                {educationData.map((edu, index) => (
                                    <div className="timeline-block" key={index}>
                                        <div className="timeline-ico">
                                            <i className="fa-duotone fa-solid fa-graduation-cap"></i>
                                        </div>
                                        <div className="timeline-header fade-in-left">
                                            <h3>{edu.institution}</h3>
                                            <p>{edu.duration}</p>
                                        </div>
                                        <div className="timeline-content fade-in-right">
                                            <p>{edu.description}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
