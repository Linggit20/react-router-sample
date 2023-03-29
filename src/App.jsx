import React from 'react'
import { Routes, Route } from 'react-router-dom'

// IMPORT ALL COMPONENTS
import Navbar from './components/navbar/Navbar'
import Home from './components/home/Home'
import Footer from './components/footer/Footer'

// IMPORT PAGES
import About from './pages/About'
import Contact from './pages/Contact'
import Project from './pages/Projects'


const App = () => {
  return (
    <>
      <header>
        <Navbar />
      </header>

      <main>
        <Routes>
            <Route path='/' element={<Home />} />                           THIS IS MAIN PAGE IN HOME FOLDER
            <Route path='/about' element={<About />} />                     THIS IS ABOUT PAGE IN PAGES FOLDER
            <Route path='/contact' element={<Contact />} />                 THIS IS CONTACT PAGE IN PAGES FOLDER
            <Route path='/project' element={<Project />} />                 THIS IS PROJECT PAGE IN PAGES FOLDER
        </Routes> 
      </main>

      <footer>
        <Footer />
      </footer>

     
    </>   

  )
}

export default App