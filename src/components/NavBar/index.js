import {Link} from 'react-router-dom'
import logo from '../../images/site/logo.png'
import navLinks from '../../data/nav.json'
import './styles.scss'

const NavBar = () => (
  <>
    <div className="container-fluid outer">
      <div className="container inner">
        <img className="header-logo" src={logo} alt="logo" />
        {navLinks.map(({id, link, name}) => (
          <Link key={id} className="nav-link" to={link}>
            {name}
          </Link>
        ))}
      </div>
    </div>
  </>
)

export default NavBar
