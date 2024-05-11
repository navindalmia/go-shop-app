import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import TopBar from './components/TopBar.jsx'
import NavBar from './components/NavBar.jsx'
import {BrowserRouter,Route, Routes} from 'react-router-dom'
import Home from './routes/home/Home.jsx'
function App() {
  

  return (
    <>
    <BrowserRouter >
        <TopBar/>    
        <NavBar/>
        { <Routes>
          <Route path = "/"  element = {<Home/>}/>
          </Routes> }
      </BrowserRouter>
    </>
  )
}

export default App
