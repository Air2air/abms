import {useState, useEffect} from 'react'
import imageList from './imagesList.json'
import './styles.scss'

const searchDir = '../../../public/images/photos/'

const Slideshow = () => {
  const [activeImage, setActiveImage] = useState(0)

  const randomImage = () => {
    const randomPointer = Math.floor(Math.random() * imageList.length)
    const imageUri = imageList
    // return `${searchDir}${imageUri}`
    return randomPointer
  }

  useEffect(() => {
    const interval = setInterval(() => {
      const randomPointer = Math.floor(Math.random() * imageList.length)

      console.log('This will run every second!')
      setActiveImage(randomPointer)
    }, 3000)

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="slideshow">
      <img key={activeImage} src={activeImage} alt="doodle" />
    </div>
  )
}

export default Slideshow
