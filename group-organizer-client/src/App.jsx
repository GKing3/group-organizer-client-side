import './App.css';
import React from 'react';
import { NavBar } from './components/nav-bar/NavBar'
import { Outlet } from 'react-router'
import { Footer } from './components/footer/Footer'

function App() {
  return (
    <React.Fragment>
      <div>
        <NavBar/>
        <Outlet/>
        <Footer/>
      </div>
    </React.Fragment>
  )
}

export default App
