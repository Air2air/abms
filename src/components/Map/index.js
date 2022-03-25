import GoogleMapReact from 'google-map-react'

const AnyReactComponent = ({text}) => <div>{text}</div>

const Map = () => (
  <>
    <div style={{height: '700px', width: '100%'}}>
      <GoogleMapReact
        bootstrapURLKeys={{
          key: process.env.REACT_APP_GOOGLE_MAPS_API,
          libraries: ['places', 'geometry', 'drawing', 'visualization'],
        }}
        defaultCenter={{lat: 37.8005, lng: -121.9169}}
        defaultZoom={19}
        mapTypeId="satellite"
        setTilt={45}
        yesIWantToUseGoogleMapApiInternals
      >
        <AnyReactComponent lat={37.8005} lng={-121.9169} text="My Marker" />
      </GoogleMapReact>
    </div>
  </>
)

export default Map
