import React from 'react'

import ProjectCard from '../components/ProjectCard'

const Projects = () => {
    
    const projectData = [
        {
            name: 'Node README Generator',
            image: '',
            description: 'An easy to use command-line application that uses a markdown template to create professional-looking READMEs.',
            url: 'https://drive.google.com/file/d/1J983OUkVwIzVWd6VdqvW_6bEJa30O7uI/view',
            github: 'https://github.com/MDThomas1/Miles-Thomas-Node-README-generator'
        },
        {
            name: 'Social Media Mongoose Backend',
            image: '',
            description: '',
            url: 'https://drive.google.com/file/d/1E5Uxqcxz7Igb4iprAlt06qs_LE1HqOH9/view',
            github: 'https://github.com/MDThomas1/Miles-Thomas-Social-Media-Backend'
        },
        {
            name: 'Javascript Fundamentals Quiz',
            image: '',
            description: 'A brief quiz about some fundamental concepts relating to JavaScript.',
            url: 'https://mdthomas1.github.io/Miles-Thomas-homework-task-4/',
            github: 'https://github.com/MDThomas1/Miles-Thomas-homework-task-4'
        },
        {
            name: 'Work Day Schedular',
            image: '',
            description: 'An interactive daily planner with added display of the current date.',
            url: 'https://mdthomas1.github.io/Miles-Thomas-homework-task-5/',
            github: 'https://github.com/MDThomas1/Miles-Thomas-homework-task-5'
        },
        {
            name: 'Javascript Password Generator',
            image: '',
            description: 'A password generator that lets you specify the password length and the types of characters you want to include in it.',
            url: 'https://mdthomas1.github.io/Miles-Thomas-homework-task-3/',
            github: 'https://github.com/MDThomas1/Miles-Thomas-homework-task-3'
        },
        {
            name: 'Weather Dashboard',
            image: '',
            description: 'A weather tracker application that uses Open Weather API to display the current weather of a searched city.',
            url: 'https://mdthomas1.github.io/Miles-Thomas-homework-task-6/',
            github: 'https://github.com/MDThomas1/Miles-Thomas-homework-task-6'
        }
    ]

    return (
        <div className='projects page'>
            <h2 className='page-heading'>Projects</h2>
            <p>Here you will find a short list of some of the projects that I have made, both on my own or as part of a group. Links to a deployed site as well as a github repository are provided, along with a short description relating to each project.</p>
            <div className='list'>
                {projectData.map((project) => {
                    <ProjectCard name={project.name} image={project.image} description={project.description} url={project.url} github={project.github} />
                })}
            </div>
        </div>
    )
}

export default Projects