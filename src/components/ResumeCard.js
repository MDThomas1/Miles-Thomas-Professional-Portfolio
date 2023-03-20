import React from 'react'

const ResumeCard = (props) => {
    return (
        <div className='resume-card' key={props.heading}>
            <h3 className='resume-heading'>{props.heading}</h3>
            <h4 className='resume-subheading'>{props.subheading}</h4>
            <ul>
                <li>{props.pointone}</li>
                <li>{props.pointtwo}</li>
                <li>{props.pointthree}</li>
            </ul>
        </div>
    )
}

export default ResumeCard