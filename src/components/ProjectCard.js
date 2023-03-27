import React from 'react'

const ProjectCard = (props) => {
    return (
        <div className='card' key={props.name}>
            <a href={props.url}><img src={props.image} alt='Failed to load' /></a>
            <a href={props.github}><h3 className='project-name'>{props.name}</h3></a>
            <p className='project-description'>{props.description}</p>
            
        </div>
    )
}

export default ProjectCard