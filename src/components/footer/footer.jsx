import React from 'react'
import './footer.css'
import  {Logo,Facebook,Twitter,PiInterest,Instagram} from './footericons'

const footer = () => {
  return (
    <div className='short__footer section__padding'>
      <div className='short__footer-container'>
        <Logo/>
        <div className='short__footer-container_linkwrap'>
        <div className='link-items'>
            <h4>Features</h4>
            <div className='links'>
              <p><a href='#'>Link shortenting</a></p>
              <p><a href='#'>Branded Links</a></p>
              <p><a href='#'>Analytics</a></p>
            </div>
          </div>
          <div className='link-items'>
            <h4>Features</h4>
            <div className='links'>
              <p><a href='#'>Link shortenting</a></p>
              <p><a href='#'>Branded Links</a></p>
              <p><a href='#'>Analytics</a></p>
            </div>
          </div> 
          <div className='link-items'>
            <h4>Features</h4>
            <div className='links'>
              <p><a href='#'>Link shortenting</a></p>
              <p><a href='#'>Branded Links</a></p>
              <p><a href='#'>Analytics</a></p>
            </div>
          </div>
          <div className='socials'>
          <a href='#'><Facebook/></a>
          <a href='#'><Twitter/></a>
          <a href='#'><PiInterest/></a>
          <a href='#'><Instagram/></a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default footer