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
  const isLargeScreen = size.width !== undefined && size.width >= breakpoint

  const renderNavLinks = (start, end) => {
    return (
      <div className="nav-links">
        {navLinks.slice(start, end).map(({id, link, name}) => (
          <Link key={id} className="nav-link" to={link}>
            {name}
          </Link>
        ))}
      </div>
    )
  }

  return (
    <>
      <Alert />

      {isLargeScreen && (
        <div className="outer lg">
          <div className="container inner">
            {renderNavLinks(0, 3)}
            {renderNavLinks(3, 6)}
          </div>
          <Logo />
        </div>
      )}
      {!isLargeScreen && (
        <div className="outer sm">
          <div className="container inner">
            {renderNavLinks(0, navLinks.length)}
          </div>
          <Logo />
        </div>
      )}
    </>
  )
}

export default NavBar
