import React from 'react'
import GoogleMapReact from 'google-map-react'

const logo = '/images/site/logo.png'

interface MarkerProps {
  lat: number
  lng: number
  text: string
}

const Marker = ({lat, lng, text}: MarkerProps) => (
  <img
    className="logo-image"
    style={markerStyle}
    src={logo}
    alt="All British Motor Show"
  />
)

const Map = () => (
  <>
    <div style={{height: '450px', width: '100%'}}>
      <GoogleMapReact
        bootstrapURLKeys={{
          key: import.meta.env.VITE_REACT_APP_GOOGLE_MAPS_API,
          libraries: ['places', 'geometry', 'drawing', 'visualization'],
        }}
        defaultCenter={{lat: 37.8005, lng: -121.9169}}
        defaultZoom={18}
        options={{
          mapTypeId: 'satellite',
          tilt: 45,
        }}
      >
        <Marker lat={37.8005} lng={-121.9169} text="My Marker" />
      </GoogleMapReact>
    </div>
  </>
)
const markerStyle = {
  width: 80,
  transform: 'translate(-50%, -50%)',
  // background: 'pink',
}

export default Map
