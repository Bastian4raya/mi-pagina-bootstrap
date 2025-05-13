import React, { CSSProperties } from 'react'; // Importa CSSProperties para tipar la prop style
import { Container, Row, Col } from 'react-bootstrap';

interface FooterProps {
  style?: CSSProperties; // Define una prop opcional style del tipo CSSProperties
}

const Footer: React.FC<FooterProps> = ({ style }) => { // Recibe la prop style
  return (
    <footer className="bg-light mt-5 py-4" style={style}> {/* Aplica la prop style al elemento footer */}
      <Container>
        <Row className="align-items-center justify-content-center">
          <Col md={8} className="text-center">
            <h5>Contacto:</h5>
            <p><i className="fas fa-phone"></i> Teléfono: (2) 2632 4304</p>
            <p><i className="fas fa-envelope"></i> Correo: dentisalud@saluddental.cl </p>
          </Col>
          <Col md={4} className="text-center">
            <img
              src={`${process.env.PUBLIC_URL}/Imagenes/Icono.png`}
              alt="Logo DentiSalud"
              style={{ height: '60px' }}
            />
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;