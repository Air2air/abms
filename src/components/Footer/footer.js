import {Link} from 'react-router-dom'
import logo from '../../images/site/logo.png'
import './styles.scss'

const navLinks = [
  {id: 0, name: 'Home', link: '/'},
  {id: 9, name: 'Marques', link: 'marques'},
  {id: 4, name: 'Location', link: '/location'},
  {id: 5, name: 'Sponsors', link: '/sponsors'},
  {id: 6, name: 'FAQ', link: '/faq'},
  {id: 7, name: 'Register', link: '/register'},
  {id: 2, name: 'Contact', link: '/contact'},
]

const Footer = () => (
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

export default Footer
