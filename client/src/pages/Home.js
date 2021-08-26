import React from "react";

import ProfilePic from '../assets/img/yeatman-profile.jpg'

import html from '../assets/img/icons/code-icon/code-html.png'
import css from '../assets/img/icons/code-icon/code-css.png'
import js from '../assets/img/icons/code-icon/code-js.png'
import re from '../assets/img/icons/code-icon/code-react.png'
import nd from '../assets/img/icons/code-icon/code-node.png'
import git from '../assets/img/icons/code-icon/code-git-white.png'
import npm from '../assets/img/icons/code-icon/code-npm.png'
import sass from '../assets/img/icons/code-icon/code-sass.png'
import gsap from '../assets/img/icons/code-icon/code-gsap.png'
import bs from '../assets/img/icons/code-icon/code-bs.png'
import tw from '../assets/img/icons/code-icon/code-tw.png'

import figma from '../assets/img/icons/design-icon/design-figma.png'
import ai from '../assets/img/icons/design-icon/adobe-ai.png'
import xd from '../assets/img/icons/design-icon/adobe-xd.png'
import ps from '../assets/img/icons/design-icon/adobe-ps.png'
import id from '../assets/img/icons/design-icon/adobe-id.png'
import lr from '../assets/img/icons/design-icon/adobe-lr.png'
import pr from '../assets/img/icons/design-icon/adobe-pr.png'
import ae from '../assets/img/icons/design-icon/adobe-ae.png'



function Home() {
  return (
    <div>
        <div className="cont-profile-pic">
            <img className="profile-pic" 
            src={ProfilePic} 
            alt="Jon Yeatman Profile"/>
        </div>
        
        <dir className="about-text-home">
            <p>
                Experienced Business Owner with a demonstrated history of working in the computer software and graphics industry. 
                Skilled in Business Planning, Operations Management, Web Design, HTML, CSS, and JavaScript. Strong operations professional with 
                a Certificate focused in Full Stack Web Development from Michigan State University. 
            </p>
        </dir>
        
        <div className="dividers-line"></div>

        <div className="icon-header">
            <h3>
                The development technology and designing software I use at a quick glance
            </h3>
        </div>

        <div className="code-logos-container">
            <div className="code-logos">
                <img src={html} alt="HTML Logo"/>
                <h3>HTML</h3>
            </div>

            <div className="code-logos">
                <img src={css} alt="CSS Logo"/>
                <h3>CSS</h3>
            </div>

            <div className="code-logos">
                <img src={sass} alt="SASS Logo"/>
                <h3>SASS</h3>
            </div>

            <div className="code-logos">
                <img src={js} alt="JavaScript Logo"/>
                <h3>JavaScript</h3>
            </div>

            <div className="code-logos">
                <img src={re} alt="React Logo"/>
                <h3>React JS</h3>
            </div>

            <div className="code-logos">
                <img src={nd} alt="Node Logo"/>
                <h3>NODE</h3>
            </div>

            <div className="code-logos">
                <img src={npm} alt="NPM Logo"/>
                <h3>NPM</h3>
            </div>

            <div className="code-logos">
                <img src={git} alt="Git Logo"/>
                <h3>GIT</h3>
            </div>

            <div className="code-logos">
                <img src={gsap} alt="Greensock Logo"/>
                <h3>Greensock</h3>
            </div>

            <div className="code-logos">
                <img src={bs} alt="Bootstrap Logo"/>
                <h3>Bootstrap</h3>
            </div>

            <div className="code-logos">
                <img src={tw} alt="Tailwind Logo"/>
                <h3>Tailwind</h3>
            </div>
            
        </div>

        <div className="dividers-line"></div>

        <div className="design-logos">
            <div className="code-logos">
                <img src={figma} alt="Figma Logo"/>
                <h3>Figma</h3>
            </div>

            <div className="code-logos">
                <img src={ai} alt="Illustrator Logo"/>
                <h3>Illustrator</h3>
            </div>

            <div className="code-logos">
                <img src={xd} alt="XD Logo"/>
                <h3>XD</h3>
            </div>

            <div className="code-logos">
                <img src={ps} alt="Photoshop Logo"/>
                <h3>Photoshop</h3>
            </div>
        
            <div className="code-logos">
                <img src={id} alt="InDesign Logo"/>
                <h3>InDesign</h3>
            </div>

            <div className="code-logos">
                <img src={lr} alt="Lightroom Logo"/>
                <h3>Lightroom</h3>
            </div>

            <div className="code-logos">
                <img src={pr} alt="Premiere Pro Logo"/>
                <h3>Premiere Pro</h3>
            </div>

            <div className="code-logos">
                <img src={ae} alt="After Effects Logo"/>
                <h3>After Effects</h3>
            </div>

        </div>

        <div className="email">
            <h3>jonlyeatman@gmail.com</h3>
        </div>

    </div>
  
  );
}

export default Home;