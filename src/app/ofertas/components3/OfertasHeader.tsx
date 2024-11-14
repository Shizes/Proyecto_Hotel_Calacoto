"use client";
import React from 'react';
import './OfertasHeader.css';

const OfertasHeader = () => {
  return (
    <div className="header-container">
    <div className="header-text">
      <h1 className="header-title">Hotel Calacoto</h1>
      <h2 className="header-subtitle">"No te pierdas de nuestras ofertas!"</h2>
      <p className="header-description">
        Le invitamos a disfrutar de nuestras exclusivas ofertas diseñadas para celebrar ocasiones especiales, así como de nuestras experiencias únicas cuidadosamente creadas para brindarle momentos memorables en el distinguido Hotel Calacoto.
      </p>
      <div className="scroll-button">
        <img 
          src="/Oferts/scroll_down_ofertas.png" 
          alt="Scroll down" 
          onClick={() => window.scrollTo({ top: 600, behavior: 'smooth' })} 
        />
      </div>
    </div>
  </div>
  );
};

export default OfertasHeader;
