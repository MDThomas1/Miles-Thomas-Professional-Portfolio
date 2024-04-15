import React from 'react'

import ResumeCard from '../components/ResumeCard'

const Resume = () => {

    const experienceData = [
        {
            heading: 'Collarts (Australian College of the Arts) - Campus Supervisor',
            subheading: 'Since February 2024',
            pointone: 'Handle student inquiries and day-to-day campus operations.',
            pointtwo: 'Requires working on a flexible schedule for both day and night shifts.',
            pointthree: 'Involves keeping a level head and being ready for both rushes and calm periods.'
        },
        {
            heading: 'Code Camp - Teaching Assistant/After School Facilitator',
            subheading: 'Since May 2023',
            pointone: 'Teaching primary school aged kids basic JavaScript through making video games.',
            pointtwo: 'Worked at various locations throughout South East Melbourne.',
            pointthree: 'Require patience and a strong understanding of JavaScript principles in order to properly explain in an understandable way for kids.'
        },
        {
            heading: 'Dom Brinkley Band - Bass Player',
            subheading: 'Since January 2021',
            pointone: 'Latest of multiple bands I have played in.',
            pointtwo: 'Always working with and meeting new people.',
            pointthree: 'Regularly testing creativity with a diverse range of inspirations.'
        },
        {
            heading: 'Room 10 Media - Video Editor',
            subheading: 'March 2022 - April 2022',
            pointone: 'Worked in Adobe Premiere Pro to create videos for podcasts.',
            pointtwo: 'Learned Premiere Pro in a short amount of time, allowing for maximum efficiency.',
            pointthree: 'Was always flexible with availability due to not working on a strict schedule'
        }
    ]

    const educationData = [
        {
            heading: 'Monash University - Coding Bootcamp',
            subheading: 'August 2022 - February 2023',
            pointone: 'Six month bootcamp designed to give people the skills necessary for a web development career.',
            pointtwo: 'Learned full stack development in the MERN stack as well as MySQL paired with Handlebars.',
            pointthree: 'Completed projects alone and as part of a team.'
        },
        {
            heading: 'Collarts - Bachelor of Arts (Music)',
            subheading: 'February 2019 - May 2022',
            pointone: 'Two year music performance degree focussed on understanding all sides of the industry.',
            pointtwo: 'Developed strong socializing and teamwork through constant need to work with other people.',
            pointthree: 'Learned other essential soft skills such as working to deadlines and continuing to search for new things to learn.'
        },
        {
            heading: 'Mentone Grammar - Victorian Certificate of Education',
            subheading: 'February 2013 - December 2018',
            pointone: 'Took part in several school ensembles, even leading a few.',
            pointtwo: 'Became an officer in the Mentone Grammar Army Cadet Unit, learning various skills related to leadership and teaching.',
            pointthree: 'Went on World Challenge to Nepal in 2017.'
        }
    ]

    return (
        <div className='resume page'>
            <h2 className='page-header'>Resume</h2>
            <p className='page-header'>Below is a snippet of my professional resume including my education, my experience and the coding formats I am familiar with.</p>
            <div>
                <div className='resume-div border-bottom'>
                    <h3>Skills:</h3>
                    <ul>
                        <li>HTML | ReactJS | Handlebars</li>
                        <li>CSS | Bootstrap</li>
                        <li>JavaScript | NodeJS | Express</li>
                        <li>MySQL | MongoDB</li>
                        <li>Git | GitHub | Markdown</li>
                    </ul>
                </div>
                <div className='resume-div border-bottom'>
                    <h3>Experience</h3>
                    {experienceData.map((experience) => (
                        <ResumeCard heading={experience.heading} subheading={experience.subheading} pointone={experience.pointone} pointtwo={experience.pointtwo} pointthree={experience.pointthree} />
                    ))}
                </div>
                <div className='resume-div border-bottom'>
                    <h3>Education</h3>
                    {educationData.map((education) => (
                        <ResumeCard heading={education.heading} subheading={education.subheading} pointone={education.pointone} pointtwo={education.pointtwo} pointthree={education.pointthree} />
                    ))}
                </div>
                <div className='resume-div link-div'>
                    <p className='resume-link'>If you'd like to see more, a downloadable copy of my resume is available by following <a href='https://docs.google.com/document/d/1ako-xs4fxZT7vzMgSk3qRHYfx1-74-dJzbrRlSQt1jw/edit?usp=sharing'>this link</a>.</p>
                </div>
            </div>
        </div>
    )
}

export default Resume