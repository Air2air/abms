import Map from '../../components/Map'
import Title from '../../components/Title'

const Location = () => (
  <>
    <Title title="Location" subtitle="blackhawk plaza, danville" />
    <div className="container">
      <div className="row">
        <div className="col">
          <Map
            containerElement={<div style={{height: `400px`}} />}
            mapElement={<div style={{height: `100%`}} />}
          />
        </div>
      </div>
    </div>
  </>
)
export default Location