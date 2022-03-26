import useWindowSize from '../../utilities/windowSize'
import {breakpoint} from '../../utilities/constants'
import Slide from './Slide'

const Slideshow = () => {
  const size = useWindowSize()

  return (
    <>
      {size.width >= breakpoint ? (
        <div className="slideshow-lg">
          <Slide timeInterval={7030} seed={11} />
          <Slide timeInterval={7450} seed={2} />
          <Slide timeInterval={6300} seed={3} />
          <Slide timeInterval={7750} seed={41} />
          <Slide timeInterval={6500} seed={45} />
        </div>
      ) : (
        <>
          <div className="slideshow-sm">
            <Slide timeInterval={5030} seed={11} />
            <Slide timeInterval={5450} seed={2} />
            <Slide timeInterval={6300} seed={3} />
          </div>
        </>
      )}
    </>
  )
}

export default Slideshow
