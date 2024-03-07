import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Navbar from './components/navbar/navbar.jsx'
import Footer from './components/footer/footer.jsx'
import Main from './components/main/main.jsx'
import Works from './components/category/works.jsx'
import Videos from './components/category/videos.jsx'
import Cover from './components/category/cover.jsx'
import About from './components/category/about.jsx'
import Contact from './components/category/contact.jsx'
import Error from './components/error/error.jsx'


function App() {

  return (
    <BrowserRouter>
      <Navbar/>

      <Routes>
        <Route path="/" element= {<Main/>}/>
        <Route path="/works" element= {<Works/>}/>
        <Route path="/music-videos" element= {<Videos/>}/>
        <Route path="/cover-arts" element= {<Cover/>}/>
        <Route path="/about-me" element= {<About/>}/>
        <Route path="/contact" element= {<Contact/>}/>

        <Route path='/error' element={<Error/>}/>
      </Routes>

      <Footer/>
    </BrowserRouter>
  )
}

export default App
