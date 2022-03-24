import {useState, useEffect} from 'react'
import Image from 'react-bootstrap/Image'
import imageList from './imagesList.json'
import './styles.scss'

const envPath = process.env.PUBLIC_URL
const searchDir = `/images/photos/`

const Slideshow = () => {
  const [activeImage, setActiveImage] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      const randomPointer = Math.floor(Math.random() * imageList.length)
      setActiveImage(randomPointer)
    }, 3000)

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="slideshow">
      <Image
        src={`${envPath}${searchDir}${imageList[activeImage]}`}
        alt="doodle"
      />
    </div>
  )
}

export default Slideshow
