import {Link} from 'react-router-dom'
import Image from 'react-bootstrap/Image'
import logoArms from '../../images/site/arms.png'
import logoBlackhawk from '../../images/site/logo-blackhawk.svg'
import logoMoasf from '../../images/site/moasf-logo.svg'
import navLinks from '../../data/nav.json'
import './styles.scss'

const Footer = () => (
  <>
    <div className="footer-links-outer">
      <div className="container footer-links-inner">
        {navLinks.map(({id, link, name}) => (
          <Link key={id} className="footer-link" to={link}>
            {name}
          </Link>
        ))}
      </div>
    </div>
    <div className="footer-logos-outer">
      <div className="container footer-logos-inner">
        <Image src={logoArms} className="logo-footer" style={{opacity: 0.5}} />
        <a
          href="http://www.blackhawkmuseum.org/"
          alt="The Blackhawk Museum"
          target="top"
          className="logo-link wide"
        >
          <Image src={logoBlackhawk} className="logo-footer wide" />
        </a>
        <a
          href="http://www.moasf.com"
          alt="Mini Owners of America"
          target="top"
          className="logo-link"
        >
          <Image
            src={logoMoasf}
            className="logo-footer"
            style={{opacity: 0.5}}
          />
        </a>
      </div>
    </div>
  </>
)

export default Footer
