import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import './navbar.css';

const Navbar = () => {
  return (
    <div className="navbar">
      {/* Logo como botón a la página principal */}
      <Link href="/principal" className="navbar-logo">
        <Image
          src="/logo_hotel_principal.png"
          width={100} // Ajusta el tamaño aquí
          height={100}
          alt="Logo del Hotel"
        />
      </Link>

      {/* Links de navegación */}
      <div className="navbar-links">
        <Link href="/principal" className="active">Principal</Link>
        <Link href="/ofertas">Ofertas</Link>
        <Link href="/habitaciones">Habitaciones</Link>
        <Link href="/eventos">Eventos</Link>
        <Link href="/contactos">Contactos</Link>
        <Link href="/nosotros">Nosotros</Link>
      </div>

      {/* Botones de registro e inicio de sesión */}
      <div className="navbar-buttons">
        <Link href="/registrar"><button>Registrarse</button></Link>
        <Link href="/sesion"><button>Iniciar Sesión</button></Link>
      </div>
    </div>
  );
};

export default Navbar;
