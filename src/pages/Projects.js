import React from 'react'

import ProjectCard from '../components/ProjectCard'

const Projects = () => {
    
    const projectData = [
        {
            name: '',
            image: '',
            description: ''
        },
        {
            name: '',
            image: '',
            description: ''
        },
        {
            name: '',
            image: '',
            description: ''
        },
        {
            name: '',
            image: '',
            description: ''
        },
        {
            name: '',
            image: '',
            description: ''
        },
        {
            name: '',
            image: '',
            description: ''
        }
    ]

    return (
        <div className='projects'>
            <h2 className='page-heading'>Projects</h2>
            <p>Here you will find a short list of some of the projects that I have made, both on my own or as part of a group. Links to a deployed site as well as a github repository are provided, along with a short description relating to each project.</p>
            <div className='list'>
                {projectData.map((project) => {
                    <ProjectCard name={project.name} image={project.image} description={project.description} />
                })}
            </div>
        </div>
    )
}

export default Projects