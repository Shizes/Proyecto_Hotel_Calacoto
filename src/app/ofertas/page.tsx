import React from 'react';
import Navbar from '../components/navbar';
import OfertasHeader from './components3/OfertasHeader';
import OfertasGrid from './components3/OfertasGrid';
import OfertasMes from './components3/OfertasMes';

const ofertasData = [
  {
    title: 'Luna de Miel',
    description: 'Decoración especial en la habitación.',
    price: 'Bs. 900 por noche.',
    details: [
      'Desayuno en la habitación o buffet.',
      'Botella de Espumante Champagne.',
      'Cocktail de bienvenida en el Bar y/o Karaoke.',
      'Cena Romántica.',
      'Salida Tardía (Hrs. 18:00).'
    ],
    imgSrc: '/Oferts/lunademiel_ofertas.png'
  },
  {
    title: 'Oferta Ejecutiva',
    description: 'Práctica habitación simple.',
    price: 'Bs. 500 por noche (Usd $72)',
    details: [
      'Pensión completa (Desayuno, almuerzo y cena)'
    ],
    imgSrc: '/Oferts/ejecutivas_ofertas.png'
  },
  {
    title: 'Vacación Familiar',
    description: 'Amplia habitación con tres camas.',
    price: 'Bs. 950 por noche (Usd $136)',
    details: [
      'Disponible en los meses de Enero, Junio, Julio, Noviembre y Diciembre.',
      'Para 3 personas.',
      'Pensión completa (Desayuno, almuerzo y cena)'
    ],
    imgSrc: '/Oferts/familiar_ofertas.png'
  }
];

const OfertasPage = () => {
  return (
    <div>
      <Navbar />
      <OfertasHeader/>
      <div id="ofertas-section">
        <OfertasGrid ofertas={ofertasData}/>
      </div>
      <h1>Ofertas Especiales</h1>
      <OfertasMes/>
    </div>
  )
}

export default OfertasPage