import React, {useState} from 'react'
import './navbar.css'
import {RiMenuFill, RiCloseLine} from 'react-icons/ri';
import logo from '../../assets/logo.svg'


const navbar = () => {

  const [toggleMenu, setToggleMenu] = useState(false)

  const Menu = ()=>{
    return  <>
          <div className='short__navbar-wrap_container-links'>
              <p><a href='#'>Features</a></p>
              <p><a href='#'>Pricing</a></p>
              <p><a href='#'>Resources</a></p>
          </div>

        
          <span className='line'></span>
          <div className='short__navbar-wrap_container-sign'>
              <p><a href='#'>login</a></p>
              <p><a href='#' className='cta__button'>Sign up</a></p>
          </div>
      
    </>
  }
  



  return (
    <div className='short__navbar section__padding'>
      <div className='short__navbar-wrap'>
        <div className='short__navbar-wrap_logo'>
          <img src={logo} alt='logo'/>
        </div>
        <div className='short__navbar-wrap_container'>
          <Menu/>
        </div>
      </div>
      
      <div className='short__navbar-menu'>
        {toggleMenu
        ? <RiCloseLine className='short__navbar-menu_icon' color="#9e9aa7" size={35} onClick={()=>setToggleMenu(false)}/>
        :<RiMenuFill className='short__navbar-menu_icon' color="#9e9aa7" size={35} onClick={()=>setToggleMenu(true)}/>
        }
        {toggleMenu && (
          <div className='short__navbar-menu_container scale-up-center'>
            <div className='short__navbar-menu_container-wrap'>
              <Menu/>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default navbar