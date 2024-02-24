import React from 'react'
import Image from 'react-bootstrap/Image'
import Title from '@/components/Title'
import Transitions from '@/components/Transition'
import './styles.scss'

const imageConcat = image => `/images/content/${image}`

const About = () => (
  <>
    <Transitions>
      <Title title="About the Show" subtitle="Over 30 years strong" />
      <div className="container">
        <div className="row">
          <div className="col">
            <Image
              className="embed-image right fade-in three"
              src={imageConcat('pa-meet.jpg')}
              alt="image"
            />
            <p>
              Like many things with a long history, the beginnings of the All
              British Motor Show are a little vague. We think it started in
              spring 1991 as an All British Swap Meet in one of the parking lots
              at Cal-State Hayward and was sponsored by the San Francisco Mini
              Owners. It continued in that format for a few years until the Mini
              Club was approached by Rick Feibusch, the very successful promoter
              of the fall Palo Alto All British Field Meet.
            </p>
            <p>
              Rick was not able to hold a swap meet with his Palo Alto show and
              suggested a spring car show to combine with the Mini Club swap
              meet at Hayward. A partnership ensued, lasted several years and
              then dissolved. Rick continued with his Palo Alto show for many
              years then moved it to Brisbane for a few years before giving it
              all up a few years ago.
            </p>
            <p>
              <Image
                className="embed-image left fade-in four"
                src={imageConcat('hayward-6.jpg')}
                alt="image"
              />
              The Mini Owners decided to continue with both the Car Show and
              Swap Meet and somewhere along the line everything moved from the
              parking lot to the grass Practice Field which had the beautiful
              view overlooking the Bay. This was the location through 2014
              except for two years when it was moved to an upper parking lot
              because the field was used for a soccer league on the weekends.
            </p>
            <p>
              A couple of interesting format changes have occurred over the
              years. For one year, European and Japanese classic cars were
              invited but so few showed up that it only lasted that one year.
              Another time we had a large contingent of Smart Cars shortly after
              they came out because one of the Mini Club members was also
              involved with that group.
            </p>
            <p>
              <Image
                className="embed-image right fade-in five"
                src={imageConcat('hayward-1.jpg')}
                alt="image"
              />
              The show moved to Blackhawk Museum in 2015 because the field at
              Hayward was being graded and graveled to use as a parking lot. The
              view would have still been great, but the ambiance of being on
              grass was gone. We realized that the previous year when the lawn
              had been allowed to die because of the drought. Everyone
              understood that situation but the prospect of a gravel parking lot
              prompted a search for a change of venue.
            </p>
            <p>
              Blackhawk welcomed the show, suggested the addition of British
              Motorcycles and that&apos;s where we are now. The first year at
              Blackhawk was very successful in terms of cars and bikes entered,
              but the swap meet was not and has been discontinued. A new aspect
              to the show has been the dedication of a part of the proceeds to
              the Museum Bus Fund which pays for the transportation of school
              groups to visit the Museum&apos;s world class Auto and Western
              Exhibits.
            </p>
            <p>
              <i>- Nick Becker</i>
            </p>
          </div>
        </div>
      </div>
    </Transitions>
  </>
)

export default About
