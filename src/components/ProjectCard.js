import React from 'react'

const ProjectCard = (props) => {
    return (
        <div className='card' key={props.name}>
            <h3 className='project-name'>{props.name}</h3>
            <img src={props.image} alt='Failed to load' />
            <p className='project-description'>{props.description}</p>
        </div>
    )
}

export default ProjectCard