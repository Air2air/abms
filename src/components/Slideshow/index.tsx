import React from 'react'
import useWindowSize from '../../utilities/windowSize'
import {breakpoint} from '../../utilities/constants'
import Slide from './Slide'

const SlideTitle = () => {
  const size = useWindowSize()
  return (
    <>
      {size.width !== undefined && size.width >= breakpoint ? (
        <div className="slidetitle-lg"></div>
      ) : (
        <div className="slidetitle-sm"></div>
      )}
    </>
  )
}

const Slideshow = ({showTitle}) => {
  const size = useWindowSize()

  return (
    <>
      {size.width && size.width >= breakpoint ? (
        <div className="slideshow-lg">
          <Slide timeInterval={5030} seed={11} />
          <Slide timeInterval={5450} seed={2} />
          <Slide timeInterval={4300} seed={3} />
          <Slide timeInterval={5750} seed={41} />
          <Slide timeInterval={4500} seed={45} />
          {showTitle == true ? <SlideTitle /> : null}
          {window.location.pathname}
        </div>
      ) : (
        <div className="slideshow-sm">
          <Slide timeInterval={3030} seed={11} />
          <Slide timeInterval={3450} seed={2} />
          <Slide timeInterval={2300} seed={3} />
          {showTitle == true ? <SlideTitle /> : null}
        </div>
      )}
    </>
  )
}

export default Slideshow
