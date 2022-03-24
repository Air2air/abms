import imageList from './imagesList.json'
import './styles.scss'

const searchDir = '../../../public/images/photos/'

const Slideshow = () => {
  const randomImage = () => {
    const randomIndex = Math.floor(Math.random() * imageList.length)
    const imageUri = imageList
    // return `${searchDir}${imageUri}`
    return randomIndex
  }
  return (
    <div className="slideshow">
      {imageList.map((name, randomIndex) => (
        <img key={name} src={randomImage(randomIndex)} alt="doodle" />
      ))}
    </div>
  )
}

export default Slideshow
