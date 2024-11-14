import React from 'react';
import OfertaCard from './OfertaCard';
import './OfertasGrid.css';
interface Oferta {
  title: string;
  description: string;
  price: string;
  imgSrc: string;
  details: string[]; // Asegúrate de incluir esto
}

interface OfertasGridProps {
  ofertas: Oferta[];
}

const OfertasGrid: React.FC<OfertasGridProps> = ({ ofertas }) => {
  return (
    <div className="ofertas-grid">
      {ofertas.map((oferta, index) => (
        <OfertaCard key={index} {...oferta} />
      ))}
    </div>
  );
};

export default OfertasGrid;