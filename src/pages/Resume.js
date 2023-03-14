import React from 'react'

import ResumeCard from '../components/ResumeCard'

const Resume = () => {

    const experienceData = [

    ]

    const educationData = [

    ]

    return (
        <div className='resume page'>
            <h2>Resume</h2>
            <div className='resume-content'>
                <div className='resume-div'>
                    <h3>Skills:</h3>
                    <ul>
                        <li>HTML | ReactJS | Handlebars</li>
                        <li>CSS | Bootstrap</li>
                        <li>JavaScript | NodeJS | Express</li>
                        <li>MySQL | MongoDB</li>
                        <li>Git | GitHub | Markdown</li>
                    </ul>
                </div>
                <div className='resume-div'>
                    <h3>Education</h3>
                    {educationData.map((education) => {
                        <ResumeCard name={education.name} body={education.body} />
                    })}
                </div>
                <div className='resume-div'>
                    <h3>Experience</h3>
                    {experienceData.map((experience) => {
                        <ResumeCard name={experience.name} body={experience.body} />
                    })}
                </div>
            </div>
            <p>A downloadable copy of my resume can also be acquired <a href=''>through this link</a></p>
        </div>
    )
}

export default Resume