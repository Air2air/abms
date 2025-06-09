import React from 'react'
import useWindowSize from '@/utilities/windowSize'
import {breakpoint} from '@/utilities/constants'
const logo = 'https://abms-image-host.netlify.app/site/logo.png'
import './styles.scss'

const Logo = () => {
  const size = useWindowSize()

  return (
    <>
      {size && size.width && size.width >= breakpoint && (
        <div className="logo-wrapper lg">
          <img className="logo-image" src={logo} alt="All British Motor Show" />
        </div>
      )}
      {size && size.width && size.width < breakpoint && (
        <div className="logo-wrapper sm">
          <img className="logo-image" src={logo} alt="All British Motor Show" />
        </div>
      )}
    </>
  )
}

export default Logo