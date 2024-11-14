import React from 'react'
import Image from 'next/image'
import "./cabezera.css"
import Navbar from './navbar'

const cabezera = () => {
  return (
    <div className='cont-cabezera'>
        <header>
    <Navbar/>
    </header>
    </div>
  )
}

export default cabezera