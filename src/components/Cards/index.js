import {Link} from 'react-router-dom'
import cards from '../../data/cards.json'
import './styles.scss'

const imageConcat = image => `/images/card/${image}`

const Cards = () => (
  <>
    <div className="card-grid">
      {cards.map(card => (
        <Link
          className="card-item"
          key={card.id}
          to={card.link}
          style={{backgroundImage: `url(${imageConcat(card.image)})`}}
        >
          <div className="text">{card.name}</div>
        </Link>
      ))}
    </div>
  </>
)

export default Cards
