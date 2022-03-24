import Slide from './Slide'

const Slideshow = () => (
  <div className="slideshow">
    <Slide timeInterval={7030} />
    <Slide timeInterval={7450} />
    <Slide timeInterval={6300} />
    <Slide timeInterval={7750} />
    <Slide timeInterval={6500} />
  </div>
)

export default Slideshow
