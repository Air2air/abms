import Slide from './Slide'

const Slideshow = () => (
  <div className="slideshow">
    <Slide timeInterval={7030} seed={11} />
    <Slide timeInterval={7450} seed={2} />
    <Slide timeInterval={6300} seed={3} />
    <Slide timeInterval={7750} seed={41} />
    <Slide timeInterval={6500} seed={45} />
  </div>
)

export default Slideshow
