import React from 'react';
import Image from 'next/image';
import styles from './eventos.module.css';
import Navbar from '../componts/navbar';

const EventosPage = () => {
  return (
    <div className={styles.eventosPage}>
      {/* Encabezado con imagen de fondo */} 
      <Navbar/>
      <header className={styles.header}>
        <div className={styles.headerOverlay}>
          <h1>Eventos</h1>
          <p>
            “Porque nos apasiona el detalle y nos comprometemos a estar
            presentes en cada uno de tus momentos especiales, creando
            experiencias inolvidables y elevando tus eventos al siguiente nivel.”
          </p>
          <p className={styles.subtext}>
            A LA MEDIDA DE TUS OBJETIVOS
          </p>
          <p>
            Te acompañamos en la elección del formato ideal para tus necesidades,
            implementando estrictas normas de bioseguridad y control de aforo,
            garantizando un entorno seguro y acogedor para todos tus invitados.
          </p>
          <button className={styles.scrollButton}>▼</button>
        </div>
      </header>

      {/* Tipos de Eventos */}
      <section className={styles.tiposEventos}>
        <h2>Tipos de Eventos</h2>

        <div className={styles.eventosGrid}>
          {/* Evento: Bodas */}
          <div className={styles.evento}>
            <Image src="/events/bodas_eventos.png" alt="Bodas" width={300} height={200} />
            <h3>Bodas</h3>
            <p>Queremos ser parte de tu boda soñada...</p>
          </div>

          {/* Evento: 15 años */}
          <div className={styles.evento}>
            <Image src="/events/quince_eventos.png" alt="15 años" width={300} height={200} />
            <h3>15 años</h3>
            <p>En ese día tan importante e inolvidable...</p>
          </div>

          {/* Evento: Eventos Corporativos */}
          <div className={styles.evento}>
            <Image src="/events/empresariales_eventos.png" alt="Eventos Corporativos" width={300} height={200} />
            <h3>Eventos Corporativos</h3>
            <p>Organiza tu evento corporativo...</p>
          </div>

          {/* Evento: Almuerzos, Cenas y Otros */}
          <div className={styles.evento}>
            <Image src="/events/almuerzosetc_eventos.png" alt="Almuerzos, Cenas y Otros" width={300} height={200} />
            <h3>Almuerzos, Cenas y Otros</h3>
            <p>Te ofrecemos amplias opciones...</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default EventosPage;
