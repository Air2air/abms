import {Link} from 'react-router-dom'
import Alert from '../Alert'
import logo from '../../images/site/logo.png'
import navLinks from '../../data/nav.json'
import './styles.scss'

const NavBar = () => (
  <>
    <div className="outer">
      <Alert />
      <div className="container inner">
        <div className="nav-links left">
          {navLinks.slice(0, 3).map(({id, link, name}) => (
            <Link key={id} className="nav-link" to={link}>
              {name}
            </Link>
          ))}
        </div>
        <img className="header-logo" src={logo} alt="logo" />
        <div className="nav-links right">
          {navLinks.slice(3, 6).map(({id, link, name}) => (
            <Link key={id} className="nav-link" to={link}>
              {name}
            </Link>
          ))}
        </div>
      </div>
    </div>
  </>
)

export default NavBar
