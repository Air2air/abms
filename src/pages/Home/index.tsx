import {Link} from 'react-router-dom'
import React from 'react'
import Image from 'react-bootstrap/Image'
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
              Mini Owners of America - San Francisco is excited to host the 33rd
              annual All British Motor Show on {showDateLong}. The show is held
              in honor of the late <Link to="/new">Nick Becker</Link> who
              conceived and promoted the show for many decades.
            </p>
            <p>
              The show is free to the public, from 9:00am - 2:00pm&nbsp;
              {showDateLong}, at the Blackhawk Museum parking lot in Danville.
            </p>
            <p>
              We are celebrating two <Link to="/marques">marques</Link> this
              year. The Austin Healey Sprite and Triumph Motorcycle!
            </p>

            <hr />
            <div className="row">
              <div className="col-sm-9 col-xs-12">
                <h1>Austin Healey Sprite</h1>
                <h2>Featured Auto Marque</h2>
                <p>
                  The Austin Healey Sprite made its debut 65 years ago in 1958!
                  The Bugeye Sprite (Frogeye in the UK) was envisioned as an
                  entry level sports car designed by the Donald Healey Motor
                  Company and manufactured by BMC. Spartan, even by 1958
                  standards, this iconic British roadster was rapidly adopted by
                  the public for road and race use.
                </p>
              </div>
              <div className="col-sm-3 d-none d-sm-block">
                <Image
                  className="schedule-image pt-3"
                  src="/images/photos/DSC_9231.jpg"
                  alt="Austin Healey Sprite"
                />
              </div>
            </div>

            <hr />
            <div className="row">
              <div className="col-sm-9 col-xs-12">
                <h1>Triumph</h1>
                <h2>Featured Cycle Marque</h2>
                <p>
                  Triumph Engineering Co Ltd began producing Triumph bicycles in
                  1889 and manufacturing in-house designed motorcycles by 1905.
                  The Triumph Speed Twin was brought to life by Edward Turner in
                  1937 and the rest, as they say, is history.
                </p>
              </div>
              <div className="col-sm-3 d-none d-sm-block">
                <Image
                  className="schedule-image pt-3"
                  src="/images/photos/DSC_9269.jpg"
                  alt="Austin Healey Sprite"
                />
              </div>
            </div>
            <hr />
            <p>
              Since 2015 we&apos;ve partnered with the Blackhawk Museum for our
              event. Proceeds from our show and raffle go to support the
              museum&apos;s&nbsp;
              <Link to="https://www.blackhawkmuseum.org/visit/school-tours/">
                Children&apos;s Education and Transportation Fund
              </Link>
              . The museum uses these funds to enrich the educational experience
              of many local school children.
            </p>
            <p>- Bruce Hurlburt, ABMS Committee Chair</p>
          </div>
        </div>
      </div>
    </Transitions>
  </>
)

export default Home
