import React from 'react'
import './Home.css'
import { useNavigate } from 'react-router-dom'

const Home = () => {
  const navigate = useNavigate()

  const redirectToAbout = () => {
    navigate('/about')
  }

  return (
    <div>
      <section className="home">
        <div className="home_container">
          <h1 className="home_title">Arihant Jain</h1>
          <p className='home_profession'>I'm a <span className='typedtext'>Web Developer</span></p>
          <p className="home_description">Hi, I'm Arihant Jain, a passionate web developer. I love to create websites and web
            applications. I'm a quick learner and always ready to learn new technologies.</p>
          <div className="home_buttons">
            <button onClick={redirectToAbout} className="home_button">More about me</button>
          </div>
          <div class="social-icons">
            <a href="https://linkedin.com/in/arihant-jain-411939337" target="_blank">
              <div class="icon"><i class="uil uil-linkedin-alt"></i></div>
            </a>
            <a href="https://github.com/ArihantJainWebDev" target="_blank">
              <div class="icon"><i class="uil uil-github-alt"></i></div>
            </a>
          </div>
        </div>
        <div className="home_image-container">
          <img src="/src/assets/favicon.jpg" alt="Home" className="home_image" />
        </div>
      </section>
    </div>
  )
}

export default Home
