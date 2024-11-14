import React from 'react';
import styles from './page.module.css';

const HabitacionesPage = () => {
  return (
    <div>
      {/* Encabezado con imagen de fondo */}
      <section className={styles.header}>
        <div className={styles.overlay}>
          <h1>Habitaciones y Suites</h1>
          <p>
            Los elegantes dormitorios de lujo, Suites privadas, y apartamentos son
            el alojamiento perfecto para disfrutar de una estancia inolvidable en nuestro hotel.
          </p>
        </div>
      </section>

      {/* Lista de habitaciones */}
      <section className={styles.roomsContainer}>
        <div className={styles.roomCard}>
          <img src="/habitacion/h_depadoble_habitaciones.png" alt="Habitación Simple" className={styles.roomImage} />
          <h2>Habitación Simple</h2>
          <p>$80 / noche</p>
          <button>Más detalles</button>
        </div>
        <div className={styles.roomCard}>
          <img src="/habitacion/h_doble_habitaciones.png" alt="Habitación Doble" className={styles.roomImage} />
          <h2>Habitación Doble/Matrimonial</h2>
          <p>$98 / noche</p>
          <button>Más detalles</button>
        </div>
        {/* Agrega más tarjetas de habitaciones según sea necesario */}
      </section>

      {/* Pie de página */}
      <footer className={styles.footer}>
        <div>
          <p>Hotel Calacoto © 2023</p>
          {/* Agrega enlaces y redes sociales aquí */}
        </div>
      </footer>
    </div>
  );
};

export default HabitacionesPage;
