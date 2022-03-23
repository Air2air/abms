import {IoTime} from 'react-icons/io5'
import {alertMessage} from '../../data/constants'
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
