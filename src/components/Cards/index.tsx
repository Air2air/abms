import React from 'react'
import {Link} from 'react-router-dom'
import cards from '@/data/nav.json'
import './styles.scss'

const imageConcat = image => `https://abms-image-host.netlify.app/card/${image}`

const Cards = () => (
  <>
    <div className="container card-grid">
      {cards.map(card => (
        <div key={card.id} className="card-item">
          <Link
            className="card-inner"
            to={card.link}
            style={{backgroundImage: `url(${imageConcat(card.image)})`}}
          >
            <div className="card-text">{card.name}</div>
          </Link>
        </div>
      ))}
    </div>
  </>
)

export default Cards
