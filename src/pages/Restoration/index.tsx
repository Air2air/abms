import {Link} from 'react-router-dom'
import React from 'react'
import Title from '@/components/Title'
import {showDateLong} from '@/utilities/constants'
import Transitions from '@/components/Transition'
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
            {/* 
            <p align="center">
              
              See over 180 fine
              <Link to="/marques-automobiles"> automobiles </Link> and classic
              <Link to="/marques-motorcycles">motorcycles</Link> from the
              British Isles at the
              <Link to="/location"> Blackhawk Auto Museum </Link> in Danville.
              Major proceeds of the All British Motor Show go to the Blackhawk
              Museum&apos;s&nbsp;
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
                
                Mini Owners of America
              </a>
              since 1991.
            </p>
            <hr /> */}
            <p>
              Mini Owners of America - San Francisco is excited to host the 34th
              annual All British Motor Show on Sunday, October 20, 2024 from 9am
              to 2pm. The show is held in honor of the late Nick Becker who
              conceived of and promoted the show for many decades.
            </p>
            <p>
              The show will be held in the Blackhawk Museum parking lot in
              Danville. This year we’re celebrating the Centenary of MG! 100
              years ago Cecil Kimber placed the octagonal MG logo on a converted
              Morris and the rest is history!
            </p>
            <p>
              Since 2015 we’ve partnered with the Blackhawk Museum to support
              their Children’s Education and Transportation Fund. &nbsp;
              <a href="https://blackhawkmuseum.org/school-tour-request-form/" target="_blank" rel="noreferrer"> Proceeds from our show and raffle are donated to the fund </a>
              &nbsp; which are used to enrich the educational experience of
              local school children2.
            </p>
            <p>
              So come join us to celebrate all things British! The show is
              always fun and we look forward to seeing you there.
            </p>
            <p>
              - Bruce Hurlburt
              <br />
              ABMS Committee Chair
            </p>
          </div>
        </div>
      </div>
    </Transitions>
  </>
)

export default Home
