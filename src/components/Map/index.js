import React, {Component} from 'react'

import GoogleMapReact from 'google-map-react'

const AnyReactComponent = ({text}) => <div>{text}</div>

const Map = () => {
  const props = {
    center: {
      lat: 59.95,
      lng: 30.33,
    },
    zoom: 11,
  }

  return (
    <>
      <div style={{height: '500px', width: '100%'}}>
        <GoogleMapReact
          bootstrapURLKeys={{key: process.env.GOOGLE_MAPS_API}}
          defaultCenter={props.center}
          defaultZoom={props.zoom}
        >
          <AnyReactComponent lat={59.955413} lng={30.337844} text="My Marker" />
        </GoogleMapReact>
      </div>
    </>
  )
}

export default Map
