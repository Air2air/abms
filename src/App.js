import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import NavBar from './components/NavBar'
import Slideshow from './components/Slideshow'
import Cards from './components/Cards'
import Faq from './pages/Faq'
import Home from './pages/Home'
import Location from './pages/Location'
import Contact from './pages/Contact'
import About from './pages/About'
import Marques from './pages/Marques'
import Registration from './components/Registration'
import Footer from './components/Footer'
import 'bootstrap/dist/css/bootstrap.min.css'
import './scss/styles.scss'

// const routes = [
//   {path: '/', name: 'Home', element: <Home />},
//   {path: '/about', name: 'About', element: <About />},
//   {path: '/contact', name: 'Contact', element: <Contact />},
//   {path: '/faq', name: 'FAQ', element: <Faq />},
//   {path: '/location', name: 'Location', element: <Location />},
//   {path: '/marques', name: 'Marques', element: <Marques />},
//   {path: '/register', name: 'Registration', element: <Registration />},
// ]

const App = () => (
  <Router>
    <NavBar />
    <Slideshow />
    <Routes>
      <Route exact path="/" element={<Home />} />
      <Route path="/faq" element={<Faq />} />
      <Route path="/location" element={<Location />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/about" element={<About />} />
      <Route path="/marques" element={<Marques />} />
      <Route path="/register" element={<Registration />} />
    </Routes>
    <Cards />
    <Footer />
  </Router>
)
export default App
