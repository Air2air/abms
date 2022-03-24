import MarqueList from '../../components/MarqueList'
import './styles.scss'

const Marques = () => (
  <>
    <div className="container">
      <div className="row">
        <div className="col">
          <h1>Featured marques</h1>
          <h2>A century of motoring greatness </h2>
          <br />
          <MarqueList />
        </div>
      </div>
    </div>
  </>
)

export default Marques
