import React from 'react'
import {IoTime} from 'react-icons/io5'
import {alertMessage, alertMessage2} from '../../utilities/constants'
import './styles.scss'

const Alert = () => (
  <div className="alert-wrapper">
    <div className="container">
      <div className="message">
        <IoTime /> {alertMessage}
      </div>
      <div className="message">{alertMessage2}</div>
    </div>
  </div>
)

export default Alert
