import React, {lazy, Suspense} from 'react'
import {Navigate, Routes, Route, useParams} from 'react-router-dom'
import {useLocation} from 'react-router-dom'
import NavBar from './components/NavBar'
import Cards from './components/Cards'
import Footer from './components/Footer'
import Slideshow from './components/Slideshow'
import 'bootstrap/dist/css/bootstrap.min.css'
import './scss/styles.scss'
import Restoration from './pages/Restoration'

// Lazy-load top-level pages
const Schedule = lazy(() => import('./pages/Schedule'))
const Home = lazy(() => import('./pages/Home'))
const Location = lazy(() => import('./pages/Location'))
const About = lazy(() => import('./pages/About'))
const Marques = lazy(() => import('./pages/Marques'))
const Registration = lazy(() => import('./pages/Registration'))

// Lazy-load Marques components
const marqueComponents: {[key: string]: React.ComponentType} = {
  'ac-cars': lazy(() => import('./pages/Marques/ACCars')),
  ajs: lazy(() => import('./pages/Marques/AJS')),
  allard: lazy(() => import('./pages/Marques/Allard')),
  alvis: lazy(() => import('./pages/Marques/Alvis')),
  'aston-martin': lazy(() => import('./pages/Marques/AstonMartin')),
  'austin-healey': lazy(() => import('./pages/Marques/AustinHealey')),
  austin: lazy(() => import('./pages/Marques/Austin')),
  bentley: lazy(() => import('./pages/Marques/Bentley')),
  'british-motor-corporation': lazy(
    () => import('./pages/Marques/BritishMotorCorporation'),
  ),
  bsa: lazy(() => import('./pages/Marques/BSA')),
  excelsior: lazy(() => import('./pages/Marques/Excelsior')),
  'ford-england': lazy(() => import('./pages/Marques/FordEngland')),
  'francis-barnett': lazy(() => import('./pages/Marques/FrancisBarnett')),
  ginetta: lazy(() => import('./pages/Marques/Ginetta')),
  greeves: lazy(() => import('./pages/Marques/Greeves')),
  hrd: lazy(() => import('./pages/Marques/HRD')),
  jaguar: lazy(() => import('./pages/Marques/Jaguar')),
  jensen: lazy(() => import('./pages/Marques/Jensen')),
  'jensen-healey': lazy(() => import('./pages/Marques/JensenHealey')),
  'land-rover': lazy(() => import('./pages/Marques/LandRover')),
  lotus: lazy(() => import('./pages/Marques/Lotus')),
  marcos: lazy(() => import('./pages/Marques/Marcos')),
  matchless: lazy(() => import('./pages/Marques/Matchless')),
  mclaren: lazy(() => import('./pages/Marques/McLaren')),
  mg: lazy(() => import('./pages/Marques/MG')),
  mini: lazy(() => import('./pages/Marques/Mini')),
  morgan: lazy(() => import('./pages/Marques/Morgan')),
  morris: lazy(() => import('./pages/Marques/Morris')),
  norton: lazy(() => import('./pages/Marques/Norton')),
  ogle: lazy(() => import('./pages/Marques/Ogle')),
  panther: lazy(() => import('./pages/Marques/Panther')),
  peel: lazy(() => import('./pages/Marques/Peel')),
  rickman: lazy(() => import('./pages/Marques/Rickman')),
  riley: lazy(() => import('./pages/Marques/Riley')),
  'rolls-royce': lazy(() => import('./pages/Marques/RollsRoyce')),
  rover: lazy(() => import('./pages/Marques/Rover')),
  'royal-enfield': lazy(() => import('./pages/Marques/RoyalEnfield')),
  rudge: lazy(() => import('./pages/Marques/Rudge')),
  singer: lazy(() => import('./pages/Marques/Singer')),
  sunbeam: lazy(() => import('./pages/Marques/Sunbeam')),
  'triumph-automobiles': lazy(
    () => import('./pages/Marques/TriumphAutomobiles'),
  ),
  'triumph-motorcycles': lazy(
    () => import('./pages/Marques/TriumphMotorcycles'),
  ),
  tvr: lazy(() => import('./pages/Marques/TVR')),
  velocette: lazy(() => import('./pages/Marques/Velocette')),
  vincent: lazy(() => import('./pages/Marques/Vincent')),

}

const MarquePage: React.FC = () => {
  const {marque} = useParams<{marque: string}>()
  const marqueKey = marque?.toLowerCase()
  const MarqueComponent = marqueComponents[marqueKey || '']

  if (!MarqueComponent) {
    return <Navigate replace to="/marques" />
  }

  return <MarqueComponent />
}

const App: React.FC = () => {
  const location = useLocation()
  const path = location.pathname

  return (
    <>
      <NavBar />

      <Slideshow showTitle={false} />

      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/*" element={<Navigate replace to="/home" />} />
          <Route path="/home" element={<Home />} />
          <Route path="/schedule" element={<Schedule />} />
          <Route path="/location" element={<Location />} />
          <Route path="/about" element={<About />} />
          <Route path="/marques" element={<Marques />} />
          <Route path="/marques/:marque" element={<MarquePage />} />
          <Route path="/marques/:marque/:model" element={<MarquePage />} />
          <Route path="/register" element={<Registration />} />
          <Route path="/restoration" element={<Restoration />} />
        </Routes>
      </Suspense>
      <Cards />
      <Footer />
    </>
  )
}

export default App
