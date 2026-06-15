import { useState } from 'react'
import NavBar from './Component/NavBar'
import './css/App.css'
import Favorites from './Pages/Favorites'
import Home from "./Pages/Home"
import {Routes, Route} from 'react-router-dom'
import { MoviesProvider } from './Context/MovieContext'


function App() {



  return (
    <MoviesProvider>
    <NavBar />
    <main className="main-contain">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Home" element={<Home />} />
        <Route path="/favorites" element={<Favorites />} />
      </Routes>
    </main>

    </MoviesProvider>
  )
}


export default App
