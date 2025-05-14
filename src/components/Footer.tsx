import React, { CSSProperties } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import '../styles/estilos.css';

interface FooterProps {
  style?: CSSProperties;
  className?: string;
}

const Footer: React.FC<FooterProps> = ({ style, className }) => {
  return (
    <footer className={`mt-5 py-4 footer ${className || ''}`} style={style}>
      <Container>
        <Row className="align-items-center">
          <Col md={8} className="text-left"> {/* El texto de contacto está aquí */}
            <h5>Contacto:</h5>
            <p><i className="fas fa-phone"></i> Teléfono: (2) 2632 4304</p>
            <p><i className="fas fa-envelope"></i> Correo: dentisalud@saluddental.cl </p>
          </Col>
          <Col md={4} className="text-right"> {/* El logo está aquí */}
            <img
              src={`${process.env.PUBLIC_URL}/Imagenes/Icono.png`}
              alt="Logo DentiSalud"
              className="logo-footer-pequeno"
            />
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;