import React from 'react'
import { Link } from 'react-router-dom'

const Menu = () => {
  return (
    <div className='header__menu'>
        <span className='text'>호스팅 하기</span>
        <span className='icon'><div className='lang__icon'/></span>
        <span className='icon'><div className='menu__icon'/></span>
    </div>
  )
}

export default Menu