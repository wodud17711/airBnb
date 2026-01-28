import React from 'react'
import Search from './Search'
import { Link, useLocation } from 'react-router-dom'
import { navMenus } from '../../data/nav'



const Nav = () => {

  const location = useLocation();

  console.log(location);

  return (
    <div>
        <div className='nav__inner'>
          <ul className='nav__link'>
            {navMenus.map((nav, key)=>(
              <li key={key} className={location.pathname === nav.src ? 'active':''}>
                <Link to={nav.src}>
                  <img src={nav.icon}/><span>{nav.title}</span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <Search/>
    </div>
  )
}

export default Nav