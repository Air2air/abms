import React from 'react'
import Map from '../../components/Map'
import Title from '../../components/Title'
import Transitions from '../../components/Transition'

const Location = () => (
  <>
    <Transitions>
      <Title title="Location" subtitle="blackhawk plaza, danville" />
      <div className="container">
        <div className="row">
          <div className="col">
            <div style={{height: `400px`, width: `100%`}}>
              <Map />
            </div>
          </div>
        </div>
      </div>
    </Transitions>
  </>
)
export default Location
