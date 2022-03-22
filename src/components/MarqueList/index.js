import Image from 'react-bootstrap/Image'
import marques from '../../data/marques.json'
import './styles.scss'

const imageConcat = image => `/images/marque-logos/${image}`

const MarqueList = () => (
  <>
    <div className="container">
      <div className="marque-grid">
        {marques.map(({image, name}) => (
          <div
            className="marque-item"
            key={name}
            style={{backgroundImage: `url(${imageConcat(image)})`}}
          />
        ))}
      </div>
    </div>
  </>
)

export default MarqueList
