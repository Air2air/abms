import React from 'react'
import {assetPath} from '@/utilities/assets'

import './styles.scss'

const flourishLeft = assetPath('site/flourish-left.svg')
const flourishRight = assetPath('site/flourish-right.svg')

type TitleProps = {
  title: string
  subtitle?: string
}

const Title = ({title, subtitle}: TitleProps) => (
  <>
    <div className="container title-container">
      <div className="d-flex align-items-center justify-content-center">
        <div className="d-flex align-items-center justify-content-center">
          <img
            height="30px"
            className="flourish-image"
            src={flourishLeft}
            alt="All British Motor Show"
            style={{marginRight: '20px'}}
          />
          <h1>{title}</h1>
          <img
            height="30px"
            className="flourish-image"
            src={flourishRight}
            alt="All British Motor Show"
            style={{marginLeft: '20px'}}
          />
        </div>
      </div>
      <h2>{subtitle} </h2>
    </div>
  </>
)

export default Title
