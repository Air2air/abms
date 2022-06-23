import React from 'react'
import GoogleMapReact from 'google-map-react'
import logo from '../../images/site/logo.png'

const Marker = () => (
  <img
    className="logo-image"
    style={markerStyle}
    src={logo}
    alt="All British Motor Show"
  />
)

const Map = () => (
  <>
    <div style={{height: '600px', width: '100%'}}>
      <GoogleMapReact
        bootstrapURLKeys={{
          key: process.env.REACT_APP_GOOGLE_MAPS_API,
          libraries: ['places', 'geometry', 'drawing', 'visualization'],
        }}
        defaultCenter={{lat: 37.8005, lng: -121.9169}}
        defaultZoom={18}
        mapTypeId="SATELLITE"
        setTilt={45}
        // yesIWantToUseGoogleMapApiInternals
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
