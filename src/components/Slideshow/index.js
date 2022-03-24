import {useState, useEffect} from 'react'
import Image from 'react-bootstrap/Image'
import imageList from './imagesList.json'
import './styles.scss'

const searchDir = '../../../public/images/photos/'

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
        src="../../../public/images/photos/DSC_8324.jpeg"
        alt="slideshow"
      />
      <Image src={`${searchDir}${imageList[activeImage]}`} alt="doodle" />
    </div>
  )
}

export default Slideshow
