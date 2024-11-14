import React from 'react';
import Link from 'next/link';
import './OfertasCard.css';

interface OfertaCardProps {
  title: string;
  description: string;
  price: string;
  details: string[];
  imgSrc: string;
}

const OfertaCard: React.FC<OfertaCardProps> = ({ title, description, price, details, imgSrc }) => {
  return (
    <Link href="/reservas">
      <div className="oferta-card">
        <img src={imgSrc} alt={title} className="card-image" />
        <h3 className="card-title">{title}</h3>
        <p className="card-description">{description}</p>
        <ul className="card-details">
          {details.map((detail, index) => (
            <li key={index}>{detail}</li>
          ))}
        </ul>
        <p className="card-price">{price}</p>
      </div>
    </Link>
  );
};

export default OfertaCard;
