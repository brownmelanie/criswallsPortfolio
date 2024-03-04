import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Main from './components/main/main.jsx'
import Navbar from './components/navbar/navbar.jsx'
import Footer from './components/footer/footer.jsx'


function App() {

  return (
    <BrowserRouter>
      <Main/>
      <Navbar/>
      <Footer/>

      <Routes>
        <Route/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
