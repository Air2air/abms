import {Link} from 'react-router-dom'
import Image from 'react-bootstrap/Image'
import logoMoasf from '../../images/site/moasf-logo.svg'
import logoArms from '../../images/site/arms.png'
import navLinks from '../../data/nav.json'
import './styles.scss'

const Footer = () => (
  <>
    <div className="outer">
      <div className="container footer-inner">
        <Image src={logoArms} className="logo-footer" />
        <div className="footer-links">
          {navLinks.map(({id, link, name}) => (
            <Link key={id} className="footer-link" to={link}>
              {name}
            </Link>
          ))}
        </div>
        <a
          href="http://www.moasf.com"
          alt="Mini Owners of America"
          target="top"
          className="logo-link"
        >
          <Image src={logoMoasf} className="logo-footer" />
        </a>
      </div>
    </div>
  </>
)

export default Footer
