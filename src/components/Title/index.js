import React from 'react'
import flourishLeft from '../../images/site/flourish-left.svg'
import flourishRight from '../../images/site/flourish-right.svg'
import './styles.scss'

const $titleHeight = '50px'
const $titleHeightSm = '40px'
const $subTitleHeight = '40px'
const $flourishHeightPx = '30px'

const Title = ({title, subtitle}) => (
  <>
    <div className="d-none d-sm-block">
      <div className="container mx-auto mt-5" style={{height: $titleHeight}}>
        <div className="row" style={{height: $titleHeight}}>
          <div
            className="d-flex align-items-center justfy-content-center"
            style={{height: $titleHeight}}
          >
            <div className="m-auto d-flex align-items-center justfy-content-center">
              <img
                height={$flourishHeightPx}
                className="flourish-image left"
                src={flourishLeft}
                alt="All British Motor Show"
              />
              <h1 style={{lineHeight: '30%'}} className="mx-3">
                {title}
              </h1>
              <img
                height={$flourishHeightPx}
                className="flourish-image right"
                src={flourishRight}
                alt="All British Motor Show"
              />
            </div>
          </div>{' '}
        </div>{' '}
      </div>
      <div className="container mx-auto mb-5" style={{height: $subTitleHeight}}>
        <div className="row p-0" style={{height: $subTitleHeight}}>
          <div className="col p-0">
            <h2>{subtitle} </h2>
          </div>
        </div>
      </div>
    </div>

    <div className="d-block d-sm-none">
      <div className="container mx-auto mt-2" style={{height: $titleHeightSm}}>
        <div className="row" style={{height: $titleHeightSm}}>
          <div
            className="d-flex align-items-center justfy-content-center"
            style={{height: $titleHeightSm}}
          >
            <div className="m-auto d-flex align-items-center justfy-content-center">
              <img
                height={$flourishHeightPx}
                className="flourish-image left"
                src={flourishLeft}
                alt="All British Motor Show"
              />
              <h1 style={{lineHeight: '30%'}} className="mx-3">
                {title}
              </h1>
              <img
                height={$flourishHeightPx}
                className="flourish-image right"
                src={flourishRight}
                alt="All British Motor Show"
              />
            </div>
          </div>{' '}
        </div>{' '}
      </div>
      <div className="container mx-auto mb-2" style={{height: $subTitleHeight}}>
        <div className="row p-0" style={{height: $subTitleHeight}}>
          <div className="col p-0">
            <h2>{subtitle} </h2>
          </div>
        </div>
      </div>
    </div>
  </>
)

export default Title
