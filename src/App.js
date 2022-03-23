import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import NavBar from './components/NavBar'
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

const App = () => (
  <>
    <Router>
      <NavBar />
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

    <br />
    <br />
  </>
)
export default App
