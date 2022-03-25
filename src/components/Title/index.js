import './styles.scss'

const Title = ({title, subtitle}) => (
  <div className="container title-container">
    <div className="row">
      <div className="col">
        <h1>{title}</h1>
        <h2>{subtitle} </h2>
      </div>
    </div>
  </div>
)

export default Title
