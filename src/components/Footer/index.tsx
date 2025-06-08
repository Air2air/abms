import React from 'react'

import './styles.scss'



const logoArms = 'https://abms-image-host.netlify.app/site/arms.png'
const logoBlackhawk = 'https://abms-image-host.netlify.app/site/logo-blackhawk.svg'
const logoMoasf = 'https://abms-image-host.netlify.app/site/moasf-logo.svg'

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

const FooterMap = () => {
  return (
    <div className="footer-logos-outer">
      <div className="footer-email">
        Contact us at: <a className="email-link" href="mailto:abmsmoasf@gmail.com">abmsmoasf@gmail.com</a>
      </div>
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

export default FooterMap
