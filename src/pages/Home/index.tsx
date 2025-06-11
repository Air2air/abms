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
            <p>
              Mini Owners of America - San Francisco is excited to host the 35th
              annual All British Motor Show on Sunday, October 19, 2025 from 9am
              to 2pm. The show is held in honor of the late Nick Becker who
              conceived of and promoted the show for many decades.
            </p>
            <p>
              The show will be held in the Blackhawk Museum parking lot in
              Danville. This year we’re celebrating the Austin/Morris Mini
              Cooper and its kissing cousin the BMW Mini Cooper.
            </p>
            <p>
              Register your car or motorcycle online at motorsportreg.com
              beginning August 1st or go to the All British Motor Show website,
              download a pdf application and send us a check.
            </p>
            <p>
              Since 2015 we’ve partnered with the Blackhawk Museum to support
              their Children’s Education and Transportation Fund. Proceeds from
              our show and raffle are donated to the fund which are used to
              enrich the educational experience of local school children.
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
