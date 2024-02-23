import React from 'react'

import './styles.scss'

{
  /* <img src={logoArms} className="logo-footer" style={logoStyle} /> */
}

const logoArms = '/images/site/arms.png'
const logoBlackhawk = '/images/site/logo-blackhawk.svg'
const logoMoasf = '/images/site/moasf-logo.svg'

const footerData = [
  {
    link: '/',
    src: logoArms,
    alt: 'All British Motor Show',
    wide: false,
    opacity: 0.5,
  },
  {
    link: 'http://www.blackhawkmuseum.org/',
    src: logoBlackhawk,
    alt: 'The Blackhawk Museum',
    wide: true,
    opacity: 0.5,
  },
  {
    link: 'http://www.moasf.com',
    src: logoMoasf,
    alt: 'Mini Owners of America',
    wide: false,
    opacity: 0.5,
  },
]

const Footer = () => {
  return (
    <div className="footer-logos-outer">
      <div className="container footer-logos-inner">
        {footerData.map((logo, index) => (
          <a
            key={index}
            href={logo.link}
            target="_top"
            className={`logo-link ${logo.wide ? 'wide' : ''}`}
          >
            <img
              alt={logo.alt}
              src={logo.src}
              className={`logo-footer ${logo.wide ? 'wide' : ''}`}
              style={{opacity: logo.opacity}}
            />
          </a>
        ))}
      </div>
    </div>
  )
}

export default Footer
