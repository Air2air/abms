import {Link} from 'react-router-dom'
import React from 'react'
import Title from '../../components/Title'
import {showDateLong} from '../../utilities/constants'
import Transitions from './../../components/Transition'
import './styles.scss'

const Home = () => (
  <>
    <Transitions>
      <Title
        title={showDateLong}
        subtitle="8:00am to 2:00pm, free to the public"
      />
      <div className="container">
        <div className="row">
          <div className="col d-flex flex-column align-items-center justify-content-center">
            <p align="center">
              See over 180 fine
              <Link to="/marques-automobiles"> automobiles </Link>
              and classic <Link to="/marques-motorcycles">
                {' '}
                motorcycles{' '}
              </Link>{' '}
              from the British Isles at the
              <Link to="/location"> Blackhawk Auto Museum </Link> in Danville.
              Major proceeds of the All British Motor Show go to the Blackhawk
              Museum&apos;s{' '}
              <Link to="https://www.blackhawkmuseum.org/visit/school-tours/">
                Children&apos;s Education and Transportation Fund
              </Link>
              .
            </p>
            <p align="center">
              The show is free to the public, from 9:00am - 2:00pm&nbsp;
              {showDateLong}.
            </p>
            <p align="center">
              The All British Motor Show has been presented by
              <a target="new" href="http://www.moasf.com">
                {' '}
                Mini Owners of America{' '}
              </a>
              since 1991.
            </p>
          </div>
        </div>
      </div>
    </Transitions>
  </>
)

export default Home
