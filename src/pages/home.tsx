import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import Carousel from '../components/Carousel';
import '../styles/estilos.css';

const Home: React.FC = () => {
  return (
    <div>
      <Carousel />
      <Container className="mt-4">
        <section className="contenido-principal">
          <h2>Tu Sonrisa Sana y Radiante es Nuestra Prioridad</h2>
          <p>En DentiSalud, nos dedicamos a ofrecer una atención dental integral y de calidad en un ambiente cálido y profesional. Nuestro equipo de dentistas experimentados utiliza tecnología de vanguardia para asegurar que tu salud bucal esté en las mejores manos.</p>
        </section>

        <section className="servicios-destacados">
          <h2>Nuestros Servicios Dentales</h2>
          <Row>
            <Col md={4} className="mb-3">
              <div className="servicio text-center">
                <i className="fas fa-tooth fa-3x mb-2"></i>
                <h3>Odontología General</h3>
                <p>Prevención, diagnóstico y tratamiento de problemas dentales comunes.</p>
                <Button href="/services" variant="outline-primary" size="sm">Más Información</Button>
              </div>
            </Col>
            <Col md={4} className="mb-3">
              <div className="servicio text-center">
                <i className="fas fa-tooth fa-3x mb-2"></i>
                <h3>Ortodoncia</h3>
                <p>Corrección de la alineación dental para una sonrisa perfecta.</p>
                <Button href="/services" variant="outline-primary" size="sm">Más Información</Button>
              </div>
            </Col>
            <Col md={4} className="mb-3">
              <div className="servicio text-center">
                <i className="fas fa-tooth fa-3x mb-2"></i>
                <h3>Implantes Dentales</h3>
                <p>Soluciones duraderas para reemplazar dientes perdidos.</p>
                <Button href="/services" variant="outline-primary" size="sm">Más Información</Button>
              </div>
            </Col>
            <Col md={4} className="mb-3">
              <div className="servicio text-center">
                <i className="fas fa-smile fa-3x mb-2"></i>
                <h3>Estética Dental</h3>
                <p>Tratamientos para mejorar la apariencia de tu sonrisa.</p>
                <Button href="/services" variant="outline-primary" size="sm">Más Información</Button>
              </div>
            </Col>
          </Row>
        </section>
      </Container>
    </div>
  );
};

export default Home;
