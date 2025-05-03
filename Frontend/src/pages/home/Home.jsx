import React from 'react'
import './Home.css'

const Home = () => {
  return (
    <div>
      <section className="home">
        <div className="home__container">
          <h1 className="home__title">Welcome to the Home Page</h1>
          <p className="home__description">This is a simple home page.</p>
        </div>
        <div className="home__image-container">
          <img src="/path/to/image.jpg" alt="Home" className="home__image" />
        </div>
      </section>
    </div>
  )
}

export default Home
