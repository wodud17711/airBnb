import React from 'react'
import Menu from '../header/Menu'
import Logo from '../header/Logo'
import Nav from '../header/Nav'

const Header = () => {
  return (
    <div id='header'>
        <div className='header__inner'>
            <Logo/>
            <Nav/>
            <Menu/>
        </div>
    </div>
  )
}

export default Header