import React from 'react'
import './App.css'
// import { Routes, Route } from 'react-router-dom'
import Navbar from './Components/Navbar'
import Home from './Components/Home'
import Products from './Components/Products'
import Distributors from './Components/Distributors'
import Manufacturers from './Components/Manufacturers'
import AboutUs from './Components/AboutUs'
import Blog from './Components/Blog'

    function App() {
        return (
          <>
            
            <Navbar />
            <Home />
            {/* <Products />
            <Distributors />
            <Manufacturers />
            <AboutUs />
            <Blog /> */}
          </>
        );
      }
      
    export default App;
  