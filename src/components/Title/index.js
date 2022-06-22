import flourishLeft from '../../images/site/flourish-left.svg'
import flourishRight from '../../images/site/flourish-right.svg'
import './styles.scss'

const $titleHeight = '50px'
const $subTitleHeight = 40
const $flourishHeight = $subTitleHeight * 0.7
const $flourishHeightPx = $flourishHeight + 'px'

const Title = ({title, subtitle}) => (
  <div className="container m-5">
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
      </div>
    </div>

    <div className="row p-0" style={{height: $subTitleHeight}}>
      <div className="col p-0">
        <h2>{subtitle} </h2>
      </div>
    </div>
  </div>
)

export default Title
