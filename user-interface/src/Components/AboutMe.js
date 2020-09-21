import React, { Component } from 'react';
import JS from "../../src/JS.png"

const AboutMe = () => {
    return(
        <div className="about-container">
            <div className="description">
                <h1>Ozzy Lievano</h1>
                <p>My name is Ozzy Lievano, I am currently a part-time lambda school student working full time a startup in Redwood City California. The reason I chose to enroll in Lambda school is because I want to be immersed a community of like-minded individuals that are on the journey to become a developer.</p>
                <p>I hope that once I complete Lambda School I can join a AR/VR company or gaming company as a Software Developer.</p>
            </div>
            <div className="about-img">
                <img src={JS} />
            </div>
        </div>
    )
}

export default AboutMe;