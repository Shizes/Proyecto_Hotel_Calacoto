import React from 'react';
import './OfertasMes.css';

const OfertasMes = () => {
  return (
    <div className="ofertas-mes">
      <h2 className="ofertas-mes-title">Nuestras Ofertas de este Mes</h2>
      <div className="ofertas-mes-image">
        <img src="/Oferts/semana_ofertas.png" alt="Oferta del mes" />
      </div>
    </div>
  );
};

export default OfertasMes;