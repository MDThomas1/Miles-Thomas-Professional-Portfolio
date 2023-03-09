import React from 'react'

const ResumeCard = (props) => {
    return (
        <div className='resume-card' key={props.name}>
            <h3 className='resume-name'>{props.name}</h3>
            <p className='resume-body'>{props.body}</p>
        </div>
    )
}

export default ResumeCard