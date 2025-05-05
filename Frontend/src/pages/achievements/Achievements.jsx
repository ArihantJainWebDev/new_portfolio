import React from 'react'
import './Achievements.css'

const Achivements = () => {
  return (
    <div className='achievements'>
      <h1>Achievements</h1>
      <div className='achievements__container'>
        <div className='achievements__card'>
          <h2>Achievement 1</h2>
          <p>Description of achievement 1.</p>
        </div>
        <div className='achievements__card'>
          <h2>Achievement 2</h2>
          <p>Description of achievement 2.</p>
        </div>
        <div className='achievements__card'>
          <h2>Achievement 3</h2>
          <p>Description of achievement 3.</p>
        </div>
      </div>
    </div>
  )
}

export default Achivements
