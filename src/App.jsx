import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Login from './pages/Login'
import Register from './pages/Register'
import { Link } from 'react-router-dom'

function App() {
  return (
    <BrowserRouter>
      <>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </>
    </BrowserRouter>
  )
}

function Navbar() {
  return (
    <nav>
      <Link to="/">Inicio</Link> | 
      <Link to="/about">Sobre mí</Link> | 
    </nav>
  )
}



export default App
