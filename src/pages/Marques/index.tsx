import React from 'react'
import Title from '@/components/Title'
import MarqueList from '@/components/MarqueList'
import Transitions from '@/components/Transition'
import './styles.scss'

const Marques = () => (
  <>
    <Transitions>
      <Title
        title="Featured marques"
        subtitle="see a century of motoring greatness"
      />
      <div className="container">
        <div className="row">
          <div className="col">
            <MarqueList />
          </div>
        </div>
      </div>
    </Transitions>
  </>
)

export default Marques
