import {Link} from 'react-router-dom'
import './styles.scss'

const eventBrite =
  'https://www.eventbrite.com/e/2019-moasf-blackhawk-all-british-motor-show-tickets-163495711073'

const Registration = () => (
  <div className="container content">
    <div className="row">
      <div className="col-12 text-center fade-in one">
        <p>
          The show is free to the public. To enter your vehicle, please register
          below.
        </p>
        <p>
          Contact us at
          <Link to="mailto:info@allbritishmotorshow.com">
            info@allbritishmotorshow.com
          </Link>
          with questions.
        </p>
        <Link className="btn btn-default" to={eventBrite} target="_new">
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
        </div>
      </div>
    </div>
  </div>
)

export default Registration
