import React, { useState } from 'react';
import '../styles/estilos.css';

// Definir tipos para los errores
type Error = string;

// Definir el tipo de evento para el formulario
type FormEvent = React.FormEvent<HTMLFormElement>;

const Contactenos = () => {
  // Estado para los errores
  const [errores, setErrores] = useState<Error[]>([]);

  // Validación de email
  const esEmailValido = (email: string): boolean => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  // Validación de campo vacío
  const nombreVacio = (nombre: string): boolean => nombre.trim() === '';

  // Manejo del envío del formulario
  const handleSubmit = (event: FormEvent): void => {
    event.preventDefault();
    setErrores([]); // Resetear los errores al enviar el formulario
    const errores: Error[] = [];

    // Obtener los valores del formulario
    const nombre = (event.target as HTMLFormElement).nombre.value;
    const email = (event.target as HTMLFormElement).email.value;
    const comuna = (event.target as HTMLFormElement).tipoconsulta.value;
    const comentario = (event.target as HTMLFormElement).mensaje.value;

    // Validaciones
    if (nombreVacio(nombre)) errores.push('El campo nombre es obligatorio.');
    if (!email) errores.push('El campo email es obligatorio.');
    else if (!esEmailValido(email)) errores.push('El email ingresado es inválido');
    if (!comuna) errores.push('El tipo de consulta es obligatorio.');
    if (!comentario) errores.push('El campo mensaje es obligatorio.');

    // Mostrar errores si existen
    if (errores.length > 0) {
      setErrores(errores);
    } else {
      alert('Enviando formulario...');
    }
  };

  return (
    <div className="container mt-4">
      <div className="row">
        <div className="col-md-6 offset-md-3">
          <form onSubmit={handleSubmit} className="form" id="miFormulario">
            <h3>Formulario de contacto</h3>
            <div className="form-group">
              <label htmlFor="nombre">Ingrese nombre completo</label>
              <input type="text" className="form-control" name="nombre" id="nombre" placeholder="Nombre Completo" />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input type="email" className="form-control" name="email" id="email" placeholder="tucorreo@ejemplo.com" />
            </div>
            <div className="form-group">
              <label htmlFor="tipoconsulta">Tipo de consulta</label>
              <select className="form-control" name="tipoconsulta" id="tipoconsulta">
                <option value="">Seleccione</option>
                <option>Ortodoncia General</option>
                <option>Urgencia Dental</option>
                <option>Implantología</option>
                <option>Odontopediatría</option>
                <option>Blanqueamiento</option>
                <option>Radiografía Dental</option>
                <option>Reclamos</option>
                <option>Sugerencias</option>
                <option>Felicitaciones</option>
              </select>
            </div>
            <div className="form-group">
              <label htmlFor="mensaje">Mensaje</label>
              <textarea className="form-control" name="mensaje" id="mensaje" rows={3}></textarea>
            </div>
            <div className="form-group">
              <button type="submit" className="btn btn-success">Enviar</button>
            </div>
          </form>

          {/* Mostrar errores si existen */}
          {errores.length > 0 && (
            <div id="errores" className="alert alert-danger mt-3">
              {errores.map((error, index) => (
                <p key={index}>{error}</p>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Sección de mapa */}
      <section className="mapa mt-5">
        <h2>Ubicación</h2>
        <p>Nos ubicamos en Av. Concha y Toro 2730, Puente Alto, cerca del metro Protectora de la Infancia. ¡Te esperamos!</p>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3329.502124484346!2d-70.58131078479757!3d-33.58503878073605!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9662dfe20d143b27%3A0x7c8a64c68ff54611!2sINACAP%20Puente%20Alto!5e0!3m2!1ses-419!2scl!4v1649960000000!5m2!1ses-419!2scl"
          loading="lazy"
          title="Mapa Ubicación"
          width="100%"
          height="300"
          style={{ border: 0 }}
          allowFullScreen={true}
        />
      </section>
    </div>
  );
};

export default Contactenos;