import React from 'react'
import Profile from '../images/profile.jpg'

const Home = () => {
    return (
        <div className='home page'>
            <h2 className='page-header'>Welcome to my portfolio!</h2>
            <img className='profile-image' src={Profile} />
            <p>Hi! My name is Miles and I am a junior full-stack developer who has recently completed Monash University's full-stack development bootcamp and is looking to enter the industry. I am experienced in multiple configurations of HTML, CSS and JavaScript and have developed entirely front end applications, applications utilizing the MERN stack format and apps that use MySQL databases with Handlebars used to create the front end. </p>
            <p>Before entering into the world of coding I worked primarily as a musician, both working in bands and freelancing for recordings and gigs. Through this I was able to pick up several skills that are essential for success in almost any industry. Some of the most crucial include patience, working in teams, working to a deadline and learning new skills in a short amount of time. I am always looking to learn new skills, meet new people and provide the best possible product that I can.</p>
        </div>
    )
}

export default Home