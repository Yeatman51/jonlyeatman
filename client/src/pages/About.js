import React from "react";
import ProfilePic from '../assets/img/yeatman-profile-picture.jpg'
import Resume from '../assets/img/YEATMAN_RESUME.pdf'

function About() {
  return (
    <div>
        <div className="cont-profile-pic">
            <img className="profile-pic"
            src={ProfilePic} 
            alt="Jon Yeatman Profile"/>
        </div>

        <div className="about-text">
            <p>
                I thrive best in an environment that sparks both a challenge and creativity.
                <br/>
                <br/>
                With a keen sense to detail, I bring a unique perspective to projects by thinking outside-the-box. 
                Throughout the process of every project, I take pride in my ability and commitment to provide the 
                best possible outcome for my clients
                <br/>
                <br/>
                My commitment towards excellence will not be satisfied until the job is complete.
            </p>
        </div>

        <a className="resume" href={Resume} 
            target="_blank" rel="noreferrer">My Resume</a>

        <div className="email">
            <h3>jonlyeatman@gmail.com</h3>
        </div>

        <p className="secret-message">
            01001001 00100000 01100001 01101101 00100000 01000010 01100001 01110100 01101101 01100001 01101110
        </p>

    </div>
  
  );
}

export default About;