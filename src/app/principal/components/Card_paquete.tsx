import React from 'react'
import '../componts/Card_paquete.css'

function Card_paquete({imagePaq, namePaq, descriptionPaq}) {
  return (
    <div><Image src={imagePaq}
    width={100} // Ajusta el tamaño aquí
    height={100}
    alt={}/>
    
    <div><h3>{name}</h3>
    <p>{description}</p>
    </div>
  )
}

export default Card_paquete
