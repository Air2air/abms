import React from 'react'
// import {Link} from 'react-router-dom'
import Title from '@/components/Title'
import Transitions from '@/components/Transition'
// import {eventBrite} from '@/utilities/constants'
import './styles.scss'

const Registration = () => (
  <>
    <Transitions>
      <Title title="Registration" subtitle="enter your vehicle" />

      {/* <div className="container">
        <div className="row">
          <div className="col">
            <p>
              Registration will open in late July 2023. We look forward to
              seeing you there!
            </p>
          </div>
        </div>
      </div> */}

      <div className="container">
        <div className="row">
          <div className="col">
            <p>
              The show is free to the public. To enter your vehicle, please
              register below.
            </p>
            <br />
            <br />
            <p className="text-center">
              <a
                className="btn btn-register"
                href="https://www.motorsportreg.com/events/all-british-motor-show-blackhawk-museum-mini-owners-of-america-san-francisc-673442"
                target="_new"
              >
                Register at Hagerty MotorsportReg
              </a>
            </p>
            <br />
            <br />
          </div>
        </div>
      </div>

      {/* <p>
              ** Please note that only the following details, together with your
              payment information, are required:
            </p>
            <p>
              <ul>
                <li>First Name</li>
                <li>Last Name</li>
                <li>Email Address</li>
                <li>Physical Address</li>
                <li>Vehicle Details </li>
              </ul>
            </p>
            <p>
              <b>Everything else is an option.</b>
            </p>
            <p>
              If you prefer to register via regular mail or electronically with
              PayPal please send us an email to:{' '}
            </p>
            <p>
              <Link to="mailto:abmsmoasf@gmail.com">
                abmsmoasf@gmail.com
              </Link>
            </p>
            <p>and we will send you instructions.</p>  */}

      {/* <br />
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
              target="_blank" rel="noreferrer"
              to="http://www.eventbrite.com/r/eweb"
            >
              Powered by Eventbrite
            </Link> 
          </div>
          </div>
        </div>
      </div> */}
    </Transitions>
  </>
)

export default Registration
