import logo from '../../images/site/logo.png'
import './styles.scss'

const Logo = ({sm}) => (
  <>
    {sm && (
      <div className="logo-wrapper-sm">
        <img className="logo-image" src={logo} alt="All British Motor Show" />
      </div>
    )}
    {!sm && (
      <div className="logo-wrapper">
        <img className="logo-image" src={logo} alt="All British Motor Show" />
      </div>
    )}
  </>
)

export default Logo
