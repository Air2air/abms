import React from 'react'
import {Link} from 'react-router-dom'
import Alert from '../Alert'
import Logo from '../Logo'
import navLinks from '../../data/nav.json'
import useWindowSize from '../../utilities/windowSize'
import {breakpoint} from '../../utilities/constants'
import './styles.scss'

const NavBar = () => {
  const size = useWindowSize()

  return (
    <>
      <Alert />

      {size.width >= breakpoint && (
        <div className="outer lg">
          <div className="container inner">
            <div className="nav-links left">
              {navLinks.slice(0, 3).map(({id, link, name}) => (
                <Link key={id} className="nav-link" to={link}>
                  {name}
                </Link>
              ))}
            </div>

            <div className="nav-links right">
              {navLinks.slice(3, 6).map(({id, link, name}) => (
                <Link key={id} className="nav-link" to={link}>
                  {name}
                </Link>
              ))}
            </div>
          </div>
          <Logo />
        </div>
      )}
      {size.width < breakpoint && (
        <div className="outer sm">
          <div className="container inner">
            <div className="nav-links">
              {navLinks.map(({id, link, name}) => (
                <Link key={id} className="nav-link" to={link}>
                  {name}
                </Link>
              ))}
            </div>
          </div>
          <Logo />
        </div>
      )}
    </>
  )
}

export default NavBar
