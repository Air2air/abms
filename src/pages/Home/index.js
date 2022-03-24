import {Link} from 'react-router-dom'
import {showDateLong, alertMessage} from '../../data/constants'
import './styles.scss'

const Home = () => (
  <div className="container">
    <div className="row">
      <div className="col">
        <h1>{showDateLong}</h1>
        <h2>9:00am to 2:00pm, free to the public</h2>
        <p>
          See over 150 fine <Link to="/marques-automobiles">automobiles</Link>
          and classic <Link to="/marques-motorcycles">motorcycles</Link> from
          the British Isles at the{' '}
          <Link to="/location">Blackhawk Auto Museum</Link> in Danville.
        </p>
        <p>
          The show is free to the public, from 9:00am - 2:00pm on {showDateLong}
          .
        </p>
        <p>
          The ABMS has been presented by
          <a target="new" href="http://www.moasf.com">
            Mini Owners of America
          </a>{' '}
          since 1991.
        </p>
      </div>
    </div>
  </div>
)

export default Home
