import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import '../componts/cardp.css';

const Card = () => {
  return (
    <div className='card'>
        <Link href="/kenti" className="">
        <Image
          src="/kenti.jpg"
          width={1272} // Ajusta el tamaño aquí
          height={570}
          alt="kenti-img"
        />
      </Link>
      <div className='card-content'>
      <div className="kenti-button">
        <Link href="/saberMasKenti"><button>Saber Mas</button></Link>
      </div>
        <div className="card-title">Habitaciones de Lujo</div>
        <div className="card-description">
            Suites privadas, Suites de luna de miel, alojamiento Airbnb-style y apartamentos con cocina. 
            Todas las estadías incluyen uno de los mejores desayunos buffet de la ciudad, estacionamiento gratuito y conserjería 24/7.
        </div>
        </div>
    </div>
  )
}

export default Card