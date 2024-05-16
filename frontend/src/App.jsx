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
       <div className = "nav-top"> 
          <TopBar/>    
          <NavBar/>
        </div>
        <div>
        { <Routes>
          <Route path = "/"  element = {<Home/>}/>
          </Routes> }
          </div>
          

      </BrowserRouter>
    </>
  )
}

export default App
