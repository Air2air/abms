import useWindowSize from '../../utilities/windowSize'
import {breakpoint} from '../../utilities/constants'
import logo from '../../images/site/logo.png'
import './styles.scss'

const Logo = () => {
  const size = useWindowSize()

  return (
    <>
      {size.width >= breakpoint && (
        <div className="logo-wrapper lg">
          <img className="logo-image" src={logo} alt="All British Motor Show" />
        </div>
      )}
      {size.width < breakpoint && (
        <div className="logo-wrapper sm">
          <img className="logo-image" src={logo} alt="All British Motor Show" />
        </div>
      )}
    </>
  )
}

export default Logo
