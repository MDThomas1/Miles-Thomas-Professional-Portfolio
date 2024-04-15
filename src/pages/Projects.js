import React from 'react'

import ProjectCard from '../components/ProjectCard'

import Password from '../images/password.png'
import Planner from '../images/planner.png'
import Quiz from '../images/quiz.png'
import Readme from '../images/readme.png'
import SocialMedia from '../images/social-media.png'
import Weather from '../images/weather.png'

const Projects = () => {
    
    const projectData = [
        {
            name: 'Javascript Fundamentals Quiz',
            image: Quiz,
            description: 'A brief quiz about some fundamental concepts relating to JavaScript.',
            url: 'https://mdthomas1.github.io/Miles-Thomas-Javascript-Quiz/',
            github: 'https://github.com/MDThomas1/Miles-Thomas-Javascript-Quiz'
        },
        {
            name: 'Work Day Schedular',
            image: Planner,
            description: 'An interactive daily planner using local storage with added display of the current date.',
            url: 'https://mdthomas1.github.io/Miles-Thomas-Daily-Planner-App/',
            github: 'https://github.com/MDThomas1/Miles-Thomas-Daily-Planner-App'
        },
        {
            name: 'Weather Dashboard',
            image: Weather,
            description: 'A weather tracker application that uses Open Weather API to display the current weather of a searched city.',
            url: 'https://mdthomas1.github.io/Miles-Thomas-Forecast-App/',
            github: 'https://github.com/MDThomas1/Miles-Thomas-Forecast-App'
        },
        {
            name: 'Node README Generator',
            image: Readme,
            description: 'An easy to use command-line application that uses a markdown template to create professional-looking READMEs.',
            url: 'https://drive.google.com/file/d/1J983OUkVwIzVWd6VdqvW_6bEJa30O7uI/view',
            github: 'https://github.com/MDThomas1/Miles-Thomas-Node-README-generator'
        },
        {
            name: 'Social Media Mongoose Backend',
            image: SocialMedia,
            description: 'A model for the backend of a social media website using mongoose to format it.',
            url: 'https://drive.google.com/file/d/1E5Uxqcxz7Igb4iprAlt06qs_LE1HqOH9/view',
            github: 'https://github.com/MDThomas1/Miles-Thomas-Social-Media-Backend'
        }
    ]

    return (
        <div className='projects page'>
            <h2 className='page-header'>Projects</h2>
            <p className='page-header'>Here you will find a short list of some of the projects that I have made, both on my own or as part of a group. Links to a deployed site as well as a github repository are provided, along with a short description relating to each project.</p>
            <div className='list'>
                {projectData.map((project) => (
                    <ProjectCard name={project.name} image={project.image} description={project.description} url={project.url} github={project.github} />
                ))}
            </div>
        </div>
    )
}

export default Projects