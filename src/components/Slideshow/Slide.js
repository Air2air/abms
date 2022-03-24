import {useState, useEffect} from 'react'

import imageList from '../../data/imagesList.json'
import './styles.scss'

const envPath = process.env.PUBLIC_URL
const searchDir = `/images/photos/`

const Slide = ({timeInterval}) => {
  const [activeImage, setActiveImage] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      const randomPointer = Math.floor(Math.random() * imageList.length)
      setActiveImage(randomPointer)
    }, timeInterval)

    return () => clearInterval(interval)
  }, [])

  return (
    <div
      className="slide"
      style={{
        backgroundImage: `url(${envPath + searchDir + imageList[activeImage]})`,
      }}
    />
  )
}

export default Slide
