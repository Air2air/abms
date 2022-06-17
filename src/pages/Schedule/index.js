import Title from '../../components/Title'
import './styles.scss'

const scheduleData = [
  {
    id: 0,
    time: '8-9 am',
    title: 'entrant checkin',
    desc:
      "Drive to the rear of the show - by the entrance to the mall - and you'll be handed your show packet with entry information.  Haven't registered yet?  You can register if we have space available. We'll point out your assigned section for your marque.",
  },
  {
    id: 1,
    time: '10 am',
    title: 'show starts',
    desc:
      "As an entrant you get to vote on your favorites in each class.  Prepare to be interviewed by our roving camera crew. You'll meet friends old and new at this, our biggest show ever after 31 years.",
  },
  {
    id: 2,
    time: '12 pm',
    title: 'ballots due',
    desc:
      "Get your ballots filled out and dropped off at the Show Central booth.  Ogle the raffle prizes and don't let them get away from you.",
  },
  {
    id: 3,
    time: '1-2 pm',
    title: 'awards and prizes',
    desc:
      'Gather at the Show Central booth for awards presentations and raffle winners.  We hope your fine car is center stage.',
  },
]

const Schedule = () => (
  <>
    <Title title="Show Schedule" subtitle="and entrant information" />
    <div className="container">
      {scheduleData.map(({id, time, title, desc}) => (
        <>
          <div className="row" key={id}>
            <div className="col-4 d-flex align-items-start justify-content-center">
              <div>
                <h1>{time}</h1>
                <h2>{title}</h2>
              </div>
            </div>
            <div className="col-8">
              <p>{desc}</p>
            </div>
            <hr />
          </div>
        </>
      ))}
    </div>
  </>
)

export default Schedule
