import Title from '../../components/Title'
import MarqueList from '../../components/MarqueList'
import './styles.scss'

const Marques = () => (
  <>
    <Title
      title="Featured marques"
      subtitle="a century of motoring greatness"
    />
    <div className="container">
      <div className="row">
        <div className="col">
          <MarqueList />
        </div>
      </div>
    </div>
  </>
)

export default Marques
