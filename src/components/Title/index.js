import {motion} from 'framer-motion'
import './styles.scss'

const Title = ({title, subtitle}) => (
  <div className="container title-container">
    <div className="row">
      <div className="col">
        <motion.h1>{title}</motion.h1>
        <motion.h2>{subtitle} </motion.h2>
      </div>
    </div>
  </div>
)

export default Title
