import {IoTime} from 'react-icons/io5'
import {alertMessage} from '../../utilities/constants'
import './styles.scss'

const Alert = () => (
  <div className="alert-wrapper">
    <div className="container">
      <div className="message">
        <IoTime /> {alertMessage}
      </div>
    </div>
  </div>
)

export default Alert
