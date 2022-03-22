import {Link} from 'react-router-dom'
import './styles.scss'

const Home = () => (
  <div className="container">
    <div className="row">
      <div className="col">
        <p>
          See over 150 fine <Link to="/marques-automobiles">automobiles</Link>
          and classic <Link to="/marques-motorcycles">motorcycles</Link> from
          the British Isles at the world-famous
          <Link to="/location">Blackhawk Auto Museum</Link> in Danville.
        </p>
        <p>
          The show is free to the public, from 9:00am - 2:00pm on
          <Link to="/schedule">October 21, 2018</Link>.
        </p>
        <p>
          The ABMS has been presented by
          <a href="http://www.moasf.com">Mini Owners of America</a> since 1991.
        </p>
      </div>
    </div>
  </div>
)

export default Home
