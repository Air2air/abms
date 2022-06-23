import React from 'react'
import {Navigate, Routes, Route} from 'react-router-dom'
import {useLocation} from 'react-router-dom'
import NavBar from './components/NavBar'
import Cards from './components/Cards'
import Footer from './components/Footer'
import Slideshow from './components/Slideshow'
import Schedule from './pages/Schedule'
import Home from './pages/Home'
import Location from './pages/Location'
import About from './pages/About'
import Marques from './pages/Marques'
import Registration from './pages/Registration'

import 'bootstrap/dist/css/bootstrap.min.css'
import './scss/styles.scss'

const App = () => {
  const location = useLocation()
  const path = location.pathname

  return (
    <>
      <NavBar />

      {path.includes('home') ? (
        <Slideshow showTitle={true} />
      ) : (
        <Slideshow showTitle={false} />
      )}

      <Routes>
        <Route path="/*" element={<Navigate replace to="/home" />} />
        <Route exaxt path="/home" element={<Home />} />
        <Route path="/schedule" element={<Schedule />} />
        <Route path="/location" element={<Location />} />
        <Route path="/about" element={<About />} />
        <Route path="/marques" element={<Marques />} />
        <Route path="/register" element={<Registration />} />
      </Routes>

      <Cards />
      <Footer />
    </>
  )
}
export default App
