import React from 'react'
import marques from '@/data/marques.json'
import './styles.scss'

const imageConcat = image => `https://abms-image-host.netlify.app/images/marque-logos/${image}`

const MarqueList = () => (
  <>
    <div className="container">
      <div className="row">
        <div className="col marque-grid">
          {marques.map(({image, name}) => (
            <div className="marque-item" key={name}>
              <div
                className="marque-image"
                style={{backgroundImage: `url(${imageConcat(image)})`}}
              />
              <p className="marque-label">{name}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  </>
)

export default MarqueList
