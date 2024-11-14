// pages/index.js
import Card_paquete from "./Card_paquete";

export default function HomePage() {
  const tarjetasData = [
    {
      nombre: 'tarjeta 1',
      descripcion: 'Descripción de la tarjeta 1',
      imagen: ''
    },
    {
      nombre: 'Tarjeta 2',
      descripcion: 'Descripción de la tarjeta 2',
      imagen: '/ruta/a/imagen2.jpg'
    },
    {
      nombre: 'Tarjeta 3',
      descripcion: 'Descripción de la tarjeta 3',
      imagen: '/ruta/a/imagen3.jpg'
    }
  ];

  return (
    <div>
      {tarjetasData.map((tarjeta, index) => (
        <Tarjeta
          key={index}
          nombre={Card_paquete.namePaq}
          descripcion={Card_paquete.descriptionPaq}
          imagen={Card_paquete.imagePaq}
        />
      ))}
    </div>
  );
}
