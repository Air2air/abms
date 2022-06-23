import React from 'react'
import {Link} from 'react-router-dom'
import Title from '../../components/Title'
import Transitions from './../../components/Transition'
// import {eventBrite} from '../../utilities/constants'
import './styles.scss'

const Registration = () => (
  <>
    {' '}
    <Transitions>
      <Title title="Exhibitor Registration" subtitle="enter your vehicle" />
      <div className="container">
        <div className="row">
          <div className="col">
            <p align="center">
              The show is free to the public. To enter your vehicle, please
              register below.
            </p>
            <p align="center">
              <i>
                We&apos;re still coordinating the 2022 registration page.
                Contact us at &nbsp;
                <Link to="mailto:info@allbritishmotorshow.com">
                  info@allbritishmotorshow.com
                </Link>
                &nbsp; with questions.
              </i>
            </p>
            {/* <Link className="btn btn-default" to={eventBrite} target="_new">
            Register at Eventbrite
          </Link>

          <br />
          <iframe
            src={eventBrite}
            frameBorder="0"
            height="1000"
            width="100%"
            vspace="0"
            hspace="0"
            marginHeight="5"
            marginWidth="5"
            scrolling="auto"
            allowtransparency="true"
            title="Event Registration"
          />
          <div
            style={{
              fontFamily: 'Helvetica, Arial',
              fontSize: '10px',
              padding: '5px 0 5px',
              margin: '2px',
              width: '100%',
              textAlign: 'left',
            }}
          >
            <Link
              className="powered-by-eb"
              style={{color: '#dddddd', textDecoration: 'none'}}
              target="_blank"
              to="http://www.eventbrite.com/r/eweb"
            >
              Powered by Eventbrite
            </Link> 
          </div>*/}
          </div>
        </div>
      </div>{' '}
    </Transitions>
  </>
)

export default Registration
