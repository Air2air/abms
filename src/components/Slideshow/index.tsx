import React, {useEffect, useState} from 'react'
import {Carousel} from 'react-responsive-carousel'
import 'react-responsive-carousel/lib/styles/carousel.min.css' // requires a loader

const Slideshow = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth)

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth)
    window.addEventListener('resize', handleResize)

    // Cleanup event listener on unmount
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  const imageHeight = windowWidth > 800 ? '500px' : '300px'

  return (
    <div>
      <Carousel
        autoPlay
        infiniteLoop
        showThumbs={false}
        showIndicators={false}
        interval={2500}
        transitionTime={1500}
        centerMode={true}
        centerSlidePercentage={70}
        dynamicHeight={false}
        stopOnHover={false}
      >
        {photos.map((image, index) => (
          <div key={index} style={{height: imageHeight}}>
            <img
              src={`/images/photos/${image}`}
              alt=""
              style={{height: '100%', objectFit: 'cover', maxWidth: '100%'}}
            />
          </div>
        ))}
      </Carousel>
    </div>
  )
}

const photos = [
  'DSC_1.jpg',
  'DSC_10.jpg',
  'DSC_11.jpg',
  'DSC_12.jpg',
  'DSC_13.jpg',
  'DSC_14.jpg',
  'DSC_15.jpg',
  'DSC_16.jpg',
  'DSC_17.jpg',
  'DSC_18.jpg',
  'DSC_19.jpg',
  'DSC_2.jpg',
  'DSC_20.jpg',
  'DSC_21.jpg',
  'DSC_2186.jpg',
  'DSC_2188.jpg',
  'DSC_2189.jpg',
  'DSC_2193.jpg',
  'DSC_2194.jpg',
  'DSC_2196.jpg',
  'DSC_2197.jpg',
  'DSC_2198.jpg',
  'DSC_22.jpg',
  'DSC_2202.jpg',
  'DSC_2203.jpg',
  'DSC_2204.jpg',
  'DSC_2206.jpg',
  'DSC_2210.jpg',
  'DSC_2212.jpg',
  'DSC_2213.jpg',
  'DSC_2214.jpg',
  'DSC_2215.jpg',
  'DSC_2217.jpg',
  'DSC_2218.jpg',
  'DSC_2219.jpg',
  'DSC_2220.jpg',
  'DSC_2221.jpg',
  'DSC_2222.jpg',
  'DSC_2224.jpg',
  'DSC_2227.jpg',
  'DSC_2230.jpg',
  'DSC_2233.jpg',
  'DSC_2235.jpg',
  'DSC_2242.jpg',
  'DSC_2251.jpg',
  'DSC_2279.jpg',
  'DSC_23.jpg',
  'DSC_24.jpg',
  'DSC_3.jpg',
  'DSC_4.jpg',
  'DSC_5.jpg',
  'DSC_6.jpg',
  'DSC_7.jpg',
  'DSC_8.jpg',
  'DSC_8255.jpg',
  'DSC_8262.jpg',
  'DSC_8268.jpg',
  'DSC_8269.jpg',
  'DSC_8270.jpg',
  'DSC_8282.jpg',
  'DSC_8284.jpg',
  'DSC_8286.jpg',
  'DSC_8288.jpg',
  'DSC_8289.jpg',
  'DSC_8294.jpg',
  'DSC_8296.jpg',
  'DSC_8297.jpg',
  'DSC_8298.jpg',
  'DSC_8300.jpg',
  'DSC_8301.jpg',
  'DSC_8303.jpg',
  'DSC_8304.jpg',
  'DSC_8305.jpg',
  'DSC_8306.jpg',
  'DSC_8307.jpg',
  'DSC_8310.jpg',
  'DSC_8312.jpg',
  'DSC_8315.jpg',
  'DSC_8316.jpg',
  'DSC_8317.jpg',
  'DSC_8320.jpg',
  'DSC_8324.jpg',
  'DSC_8327.jpg',
  'DSC_8345.jpg',
  'DSC_8371.jpg',
  'DSC_8407.jpg',
  'DSC_8571.jpg',
  'DSC_8573.jpg',
  'DSC_8585.jpg',
  'DSC_8587.jpg',
  'DSC_8590.jpg',
  'DSC_8591.jpg',
  'DSC_8592.jpg',
  'DSC_8597.jpg',
  'DSC_8599.jpg',
  'DSC_8604.jpg',
  'DSC_8605.jpg',
  'DSC_8608.jpg',
  'DSC_8609.jpg',
  'DSC_8611.jpg',
  'DSC_8615.jpg',
  'DSC_8616.jpg',
  'DSC_8618.jpg',
  'DSC_8619.jpg',
  'DSC_8621.jpg',
  'DSC_8622.jpg',
  'DSC_8623.jpg',
  'DSC_8624.jpg',
  'DSC_8625.jpg',
  'DSC_8626.jpg',
  'DSC_8627.jpg',
  'DSC_8629.jpg',
  'DSC_8630.jpg',
  'DSC_8631.jpg',
  'DSC_8632.jpg',
  'DSC_8633.jpg',
  'DSC_8635.jpg',
  'DSC_8639.jpg',
  'DSC_9175.jpg',
  'DSC_9177.jpg',
  'DSC_9185.jpg',
  'DSC_9186.jpg',
  'DSC_9187.jpg',
  'DSC_9191.jpg',
  'DSC_9192.jpg',
  'DSC_9196.jpg',
  'DSC_9197.jpg',
  'DSC_9199.jpg',
  'DSC_9201.jpg',
  'DSC_9204.jpg',
  'DSC_9205.jpg',
  'DSC_9206.jpg',
  'DSC_9208.jpg',
  'DSC_9211.jpg',
  'DSC_9214.jpg',
  'DSC_9216.jpg',
  'DSC_9219.jpg',
  'DSC_9221.jpg',
  'DSC_9224.jpg',
  'DSC_9225.jpg',
  'DSC_9226.jpg',
  'DSC_9228.jpg',
  'DSC_9229.jpg',
  'DSC_9231.jpg',
  'DSC_9233.jpg',
  'DSC_9236.jpg',
  'DSC_9237.jpg',
  'DSC_9238.jpg',
  'DSC_9240.jpg',
  'DSC_9241.jpg',
  'DSC_9242.jpg',
  'DSC_9243.jpg',
  'DSC_9244.jpg',
  'DSC_9245.jpg',
  'DSC_9246.jpg',
  'DSC_9247.jpg',
  'DSC_9248.jpg',
  'DSC_9249.jpg',
  'DSC_9250.jpg',
  'DSC_9251.jpg',
  'DSC_9253.jpg',
  'DSC_9254.jpg',
  'DSC_9256.jpg',
  'DSC_9257.jpg',
  'DSC_9258.jpg',
  'DSC_9260.jpg',
  'DSC_9262.jpg',
  'DSC_9263.jpg',
  'DSC_9264.jpg',
  'DSC_9265.jpg',
  'DSC_9268.jpg',
  'DSC_9269.jpg',
  'DSC_9270.jpg',
  'DSC_9271.jpg',
  'DSC_9273.jpg',
  'DSC_9274.jpg',
  'DSC_9275.jpg',
  'DSC_9277.jpg',
  'DSC_9280.jpg',
  'DSC_9281.jpg',
  'DSC_9282.jpg',
  'DSC_9285.jpg',
  'DSC_9286.jpg',
  'DSC_9287.jpg',
  'DSC_9292.jpg',
]

export default Slideshow
