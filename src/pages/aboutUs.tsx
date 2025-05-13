// src/pages/SobreNosotros.tsx
import React from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';
import '../styles/estilos.css';

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

        <section className="bloque-con-imagen">
          <Row>
            <Col md={6}>
              <h3>Nuestra Historia</h3>
              <p>
                Fundada en 2003, Dentisalud comenzó como una clínica dental en la Región Metropolitana, y con el tiempo, ha expandido su presencia a nivel nacional. A lo largo de los años, nos hemos consolidado como una de las empresas más reconocidas en el país, gracias a nuestro enfoque en la calidad, el servicio al cliente y la constante innovación.
              </p>
            </Col>
            <Col md={6}>
              <Image src="https://mercuriocentrocomercial.com/wp-content/uploads/2020/09/IMG_2712-scaled.jpg" alt="Dentisalud Historia" fluid />
            </Col>
          </Row>
        </section>

        <section className="bloque-con-imagen">
          <Row>
            <Col md={6}>
              <h3>Nuestro Equipo</h3>
              <p>
                El equipo de Dentisalud está compuesto por dentistas altamente capacitados en diversas especialidades odontológicas, como ortodoncia, periodoncia, cirugía oral, estética dental, entre otras. Además, contamos con un equipo de técnicos y personal administrativo comprometidos en ofrecer la mejor experiencia a nuestros pacientes.
              </p>
            </Col>
            <Col md={6}>
              <Image src="https://media.licdn.com/dms/image/v2/C4E22AQF1j4L0khVIVg/feedshare-shrink_800/feedshare-shrink_800/0/1677119522056?e=2147483647&v=beta&t=R4ucHF82vJDUhFgEQ-C5PCKISIluRm2vKIZx_h_1nYI" alt="Dentisalud Equipo" fluid />
            </Col>
          </Row>
        </section>

        <section className="bloque-con-imagen">
          <Row>
            <Col md={6}>
              <h3>Nuestra Misión</h3>
              <p>
                Brindar un servicio odontológico de excelencia, utilizando la tecnología más avanzada y un equipo de profesionales altamente capacitados, con el objetivo de mejorar la salud y el bienestar de nuestros pacientes.
              </p>
            </Col>
            <Col md={6}>
              <Image src="https://www.clinicasturrionmonescillo.com/wp-content/uploads/2020/03/img_7092-copy-1024x683.jpg" alt="Dentisalud Misión" fluid />
            </Col>
          </Row>
        </section>

        <section className="bloque-con-imagen">
          <Row>
            <Col md={6}>
              <h3>Nuestra Visión</h3>
              <p>
                Ser la clínica dental más reconocida a nivel nacional, expandiendo nuestra presencia a nuevas ciudades y regiones, y manteniendo siempre nuestro compromiso con la calidad, la innovación y la satisfacción de nuestros pacientes.
              </p>
            </Col>
            <Col md={6}>
              <Image src="Imagenes/imagen7.jpeg" alt="Dentisalud Visión" fluid />
            </Col>
          </Row>
        </section>
      </Container>
    </div>
  );
};

export default AboutUs;
