import React from 'react'
import "./cabezera.css"
import Navbar from './navbar'
import Card from './cardp'
const cabezera = () => {
  return (
    <div className='cont-cabezera'>
        <header>
    <Navbar/>
    
    </header>
    <Card/>
    </div>
  )
}

export default cabezera