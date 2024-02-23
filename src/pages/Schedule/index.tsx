import React from 'react'
import Title from '@/components/Title'
import Image from 'react-bootstrap/Image'
import imageAwards from '/images/site/awards.jpg'
import imageBallots from '/images/site/ballots.jpg'
import imageFriends from '/images/site/friends.jpg'
import imageInterview from '/images/site/interview.jpg'
import imageRegistration from '/images/site/registration.jpg'
import imageShow from '/images/site/show.jpg'
import Transitions from '@/components/Transition'
import './styles.scss'

const scheduleData = [
  {
    id: 0,
    image: imageRegistration,
    time: '8-9 am',
    title: 'entrant check in',
    desc:
      "From Camino Tassajara, drive up Blackhawk Plaza Circle to the southern mall entrance and receive your show packet with entry information.  Haven't registered yet?  You can if we have space available. We'll point out your assigned section for your marque.",
  },
  {
    id: 1,
    image: imageShow,
    time: '9 am',
    title: 'show starts',
    desc:
      'As an entrant you get to vote on your favorites in each class.  Place your entry card on your windshield to make sure you get votes. Need a break? Enjoy the nearby restaurants or get some raffle tickets at Show Central in the center of the lot.',
  },
  {
    id: 2,
    image: imageFriends,
    time: '9 am - 1 pm',
    title: 'meet friends old and new',
    desc:
      "Enjoy fascinating conversations and camaraderie with the Bay Area's most discerning British car owners, drivers and collectors.  Popular local clubs are represented, giving you a fresh new audience to tell lies to.  ",
  },
  {
    id: 3,
    image: imageBallots,
    time: '12 pm',
    title: 'ballots due',
    desc:
      "Get your ballots completed and dropped off at the Show Central booth.  Ogle the generous raffle prizes, but make sure you buy enough tickets.  Proceeds of raffle sales go to the Blackhawk Museum's Children's Education and Transportation Fund as do major proceeds of the All British Motor Show.",
  },
  {
    id: 4,
    image: imageAwards,
    time: '1-2 pm',
    title: 'awards and prizes',
    desc:
      'Gather at the Show Central booth for awards presentations and raffle winners.  Each class awards three places, and entrant classes may change depending on registrations.  We hope your fine car is center stage.',
  },
  {
    id: 5,
    image: imageInterview,
    time: 'Mic drop!',
    title: 'tell us all about it',
    desc:
      "We don't just want to see your car; we want to hear all about it.  Your tales of blood, sweat and callouses will thrill show visitors with a couple-minute broadcast.  Our roving interviewers can strike the unwary at any time, so be ready with the juicy details of your magnificent machine.  You'll love it.",
  },
]

const Schedule = () => {
  return (
    <>
      <Transitions>
        <Title title="Show Schedule" subtitle="and entrant information" />
        <div className="container">
          {scheduleData.map(({id, image, time, title, desc}) => (
            <>
              <hr />
              <div className="row" key={id}>
                <div className="col-sm-9 col-xs-12">
                  <h1>{time}</h1>
                  <h2>{title}</h2>
                  <p>{desc}</p>
                </div>
                <div className="col-sm-3 d-none d-sm-block">
                  <Image
                    className="schedule-image pt-3"
                    src={image}
                    alt={title}
                  />
                </div>
              </div>
            </>
          ))}
        </div>
      </Transitions>
    </>
  )
}
export default Schedule
