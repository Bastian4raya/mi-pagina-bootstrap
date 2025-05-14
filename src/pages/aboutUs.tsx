import React from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';
import '../styles/estilos.css';
import { ImageBlock } from '../interfaces/imageBlock'; 

// Define los datos de los bloques con la interfaz BloqueConImagen
const bloquesSobreNosotros: ImageBlock[] = [
  {
    titulo: 'Nuestra Historia',
    texto: 'Fundada en 2003, Dentisalud comenzó como una clínica dental en la Región Metropolitana, y con el tiempo, ha expandido su presencia a nivel nacional. A lo largo de los años, nos hemos consolidado como una de las empresas más reconocidas en el país, gracias a nuestro enfoque en la calidad, el servicio al cliente y la constante innovación.',
    imagenSrc: 'https://mercuriocentrocomercial.com/wp-content/uploads/2020/09/IMG_2712-scaled.jpg',
    altTexto: 'Dentisalud Historia',
  },
  {
    titulo: 'Nuestro Equipo',
    texto: 'El equipo de Dentisalud está compuesto por dentistas altamente capacitados en diversas especialidades odontológicas, como ortodoncia, periodoncia, cirugía oral, estética dental, entre otras. Además, contamos con un equipo de técnicos y personal administrativo comprometidos en ofrecer la mejor experiencia a nuestros pacientes.',
    imagenSrc: 'https://media.licdn.com/dms/image/v2/C4E22AQF1j4L0khVIVg/feedshare-shrink_800/feedshare-shrink_800/0/1677119522056?e=2147483647&v=beta&t=R4ucHF82vJDUhFgEQ-C5PCKISIluRm2vKIZx_h_1nYI',
    altTexto: 'Dentisalud Equipo',
  },
  {
    titulo: 'Nuestra Misión',
    texto: 'Brindar un servicio odontológico de excelencia, utilizando la tecnología más avanzada y un equipo de profesionales altamente capacitados, con el objetivo de mejorar la salud y el bienestar de nuestros pacientes.',
    imagenSrc: 'https://www.clinicasturrionmonescillo.com/wp-content/uploads/2020/03/img_7092-copy-1024x683.jpg',
    altTexto: 'Dentisalud Misión',
  },
  {
    titulo: 'Nuestra Visión',
    texto: 'Ser la clínica dental más reconocida a nivel nacional, expandiendo nuestra presencia a nuevas ciudades y regiones, y manteniendo siempre nuestro compromiso con la calidad, la innovación y la satisfacción de nuestros pacientes.',
    imagenSrc: 'Imagenes/imagen7.jpeg',
    altTexto: 'Dentisalud Visión',
  },
];

const AboutUs: React.FC = () => {
  return (
    <div>
      <Container className="mt-4">
        <section className="contenido-principal">
          <h2>Sobre Nosotros</h2>
          <p>
            Dentisalud es una empresa líder en el sector odontológico, comprometida con ofrecer soluciones innovadoras y de alta calidad para mejorar la salud dental de nuestros pacientes. Con más de 20 años de experiencia, contamos con un equipo altamente capacitado y la tecnología más avanzada para brindar un servicio personalizado y confiable.
          </p>
        </section>

        {bloquesSobreNosotros.map((bloque, index) => (
          <section key={index} className="bloque-con-imagen">
            <Row>
              <Col md={6}>
                <h3>{bloque.titulo}</h3>
                <p>{bloque.texto}</p>
              </Col>
              <Col md={6}>
                <Image
                  src={bloque.imagenSrc}
                  alt={bloque.altTexto}
                  fluid
                  className="imagen-pequena"
                />
              </Col>
            </Row>
          </section>
        ))}
      </Container>
    </div>
  );
};

export default AboutUs;