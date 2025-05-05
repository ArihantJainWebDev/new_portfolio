import React from 'react'
import './About.css'

const About = () => {
  return (
    <div>
      <section className="about">
        <div className="about-content">
          <div className="about-box">
            <h1>About Me</h1>
            <p>I'm a passionate web developer with a knack for creating dynamic and responsive web applications. I love coding and am always eager to learn new technologies.</p>
            <p>With a strong foundation in both front-end and back-end development, I enjoy working on all aspects of web development. My goal is to build user-friendly applications that provide a seamless experience.</p>
            <p>In my spare time, I enjoy exploring new programming languages and frameworks, contributing to open-source projects, and staying updated with the latest trends in web development.</p>
            <p>Feel free to reach out if you want to collaborate on a project or just want to chat about tech!</p>
          </div>
          <div className="skills">
            <h2>Skills</h2>
            <div className='skills-box'>
              <div className="frontend">
                <h3>Frontend</h3>
                <ul className='skills-list'>
                  <li>HTML</li>
                  <li>CSS</li>
                  <li>JavaScript</li>
                  <li>React</li>
                  <li>TailwindCSS</li>
                </ul>
              </div>
              <div className="backend">
                <h3>Backend</h3>
                <ul className="skills-list">
                  <li>Python</li>
                  <li>Node.js</li>
                  <li>Express.js</li>
                  <li>Flask</li>
                  <li>FastAPI</li>
                </ul>
              </div>
              <div className="other">
                <h3>Other skills</h3>
                <ul className="skills-list">
                  <li>MongoDB</li>
                  <li>Postman</li>
                  <li>jwt</li>
                  <li>API creation</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default About
