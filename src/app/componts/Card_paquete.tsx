import React from 'react'
import '../componts/Card_paquete.css'

function Card_paquete() {
  return (
    <div><Image src={imagePaq}
    width={100} // Ajusta el tamaño aquí
    height={100}
    alt="imagen paq"/>
    <h4 className='namepaq' >{namePaq}</h4>
    <div>{descriptionPaq}</div>
    </div>
  )
}

export default Card_paquete
