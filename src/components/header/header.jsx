import React from 'react'
import './header.css'
import headerImage from '../../assets/illustration-working.svg'

const header = () => {
  return (
    <div className='short__header section__padding'>
      <div className='short__header-text'>
        <h1>More than just shorter links</h1>
        <p className='p__text'> Build your brand’s recognition and get detailed insights 
          on how your links are performing.
        </p>
      <a href='#' className='cta__button'>Get Started</a>

      </div>
      <img src={headerImage} className='short__header-image' alt='banner image'/>
    
    </div>
  )
}

export default header