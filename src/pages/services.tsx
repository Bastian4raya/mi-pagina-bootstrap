// src/pages/Servicios.tsx
import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import '../styles/estilos.css';

const Servicios: React.FC = () => {
  return (
    <div>
      <Container className="mt-4">
        <Row xs={1} md={2} lg={3} className="g-4">
          {/* Ortodoncia General */}
          <Col className="h-100"> {/* Añade la clase h-100 */}
            <Card className="h-100"> {/* Añade la clase h-100 también a la Card */}
              <Card.Img variant="top" src="Imagenes/ortodoncia.jpg" alt="Ortodoncia" style={{ objectFit: 'cover', height: '200px' }} />
              <Card.Body className="d-flex flex-column"> {/* Añade flex-column para alinear el botón al final */}
                <Card.Title>Ortodoncia General</Card.Title>
                <Card.Text>
                  Nos especializamos en proporcionar una amplia gama de servicios dentales para mantener tu salud bucal en óptimas condiciones.
                </Card.Text>
                <h5>Ofrecemos</h5>
                <Card.Text>
                  Exámenes dentales preventivos, Limpieza dental, Rellenos dentales, Extracciones dentales, Tratamiento de conducto, etc.
                </Card.Text>
                <h5>Precios</h5>
                <Card.Text>Precios desde los 150.000$</Card.Text>
                <Button variant="primary" className="mt-auto">Reservar Hora</Button> {/* mt-auto empuja el botón hacia abajo */}
              </Card.Body>
            </Card>
          </Col>

          {/* Urgencia Dental */}
          <Col className="h-100"> {/* Añade la clase h-100 */}
            <Card className="h-100"> {/* Añade la clase h-100 también a la Card */}
              <Card.Img variant="top" src="Imagenes/Imagen9.jpg" alt="Urgencia Dental" style={{ objectFit: 'cover', height: '200px' }} />
              <Card.Body className="d-flex flex-column">
                <Card.Title>Urgencia Dental</Card.Title>
                <Card.Text>
                  En momentos de emergencia dental, estamos aquí para proporcionarte la atención necesaria y aliviar tu malestar lo antes posible.
                </Card.Text>
                <h5>Ofrecemos</h5>
                <Card.Text>
                  Evaluación inicial, Alivio del dolor, Radiografías Dentales, Tratamiento temporal, Educación y prevención, etc.
                </Card.Text>
                <h5>Precios</h5>
                <Card.Text>Precios desde los 25.000$</Card.Text>
                <Button variant="primary" className="mt-auto">Reservar Hora</Button>
              </Card.Body>
            </Card>
          </Col>

          {/* Implantología */}
          <Col className="h-100"> {/* Añade la clase h-100 */}
            <Card className="h-100"> {/* Añade la clase h-100 también a la Card */}
              <Card.Img variant="top" src="Imagenes/imagen8.png" alt="Implantología" style={{ objectFit: 'cover', height: '200px' }} />
              <Card.Body className="d-flex flex-column">
                <Card.Title>Implantología</Card.Title>
                <Card.Text>
                  Nos especializamos en restaurar la funcionalidad y estética de tu sonrisa mediante la colocación de implantes dentales de alta calidad.
                </Card.Text>
                <h5>Ofrecemos</h5>
                <Card.Text>
                  Consulta inicial, Evaluación de salud oral, Procedimiento de colocación de implantes, Cuidado postoperatorio, etc.
                </Card.Text>
                <h5>Precios</h5>
                <Card.Text>Precios desde los 500.000$</Card.Text>
                <Button variant="primary" className="mt-auto">Reservar Hora</Button>
              </Card.Body>
            </Card>
          </Col>

          {/* Odontopediatría */}
          <Col className="h-100"> {/* Añade la clase h-100 */}
            <Card className="h-100"> {/* Añade la clase h-100 también a la Card */}
              <Card.Img variant="top" src="Imagenes/Imagen10.png" alt="Odontopediatría" style={{ objectFit: 'cover', height: '200px' }} />
              <Card.Body className="d-flex flex-column">
                <Card.Title>Odontopediatría</Card.Title>
                <Card.Text>
                  Nos dedicamos a cuidar de la salud dental de los más pequeños de la familia con atención especializada y cariñosa.
                </Card.Text>
                <h5>Ofrecemos</h5>
                <Card.Text>
                  Ambiente amigable, Primera Visita, Prevención de caries, Tratamiento personalizado, Manejo del miedo y la ansiedad, etc.
                </Card.Text>
                <h5>Precios</h5>
                <Card.Text>Precios desde los 75.000$</Card.Text>
                <Button variant="primary" className="mt-auto">Reservar Hora</Button>
              </Card.Body>
            </Card>
          </Col>

          {/* Blanqueamiento */}
          <Col className="h-100"> {/* Añade la clase h-100 */}
            <Card className="h-100"> {/* Añade la clase h-100 también a la Card */}
              <Card.Img variant="top" src="Imagenes/Imagen11.jpg" alt="Blanqueamiento" style={{ objectFit: 'cover', height: '200px' }} />
              <Card.Body className="d-flex flex-column">
                <Card.Title>Blanqueamiento</Card.Title>
                <Card.Text>
                  Mejora tu estética dental a través de un proceso rápido y sencillo, El resultado es muy natural para tus dientes.
                </Card.Text>
                <h5>Ofrecemos</h5>
                <Card.Text>
                  Resultados inmediatos, Dientes más blancos el mismo día, Primera evaluación gratis, Elimina manchas, etc.
                </Card.Text>
                <h5>Precios</h5>
                <Card.Text>Precios desde los 75.000$</Card.Text>
                <Button variant="primary" className="mt-auto">Reservar Hora</Button>
              </Card.Body>
            </Card>
          </Col>

          {/* Radiografía Dental */}
          <Col className="h-100"> {/* Añade la clase h-100 */}
            <Card className="h-100"> {/* Añade la clase h-100 también a la Card */}
              <Card.Img variant="top" src="Imagenes/Imagen12.webp" alt="Radiografía Dental" style={{ objectFit: 'cover', height: '200px' }} />
              <Card.Body className="d-flex flex-column">
                <Card.Title>Radiografía Dental</Card.Title>
                <Card.Text>
                  La radiografía dental es una herramienta clave para nuestros dentistas porque permite detectar problemas rápidamente y de forma eficaz.
                </Card.Text>
                <h5>Ofrecemos</h5>
                <Card.Text>
                  Contamos con una completa sala de rayos con equipos de última tecnología en radiología oral digital.
                </Card.Text>
                <h5>Precios</h5>
                <Card.Text>Precios desde los 5.000$</Card.Text>
                <Button variant="primary" className="mt-auto">Reservar Hora</Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Servicios;