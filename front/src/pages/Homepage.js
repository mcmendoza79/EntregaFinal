import React from 'react';
const Homepage= (props) => {
  return (
     
      <main className="holder">
      <div className="homeimg">
        <img src="img/Colegio3.jpg" alt="Colegio3"/>
        </div>
      <div className="columnas">
        <div className="bienvenidos">
          <h2>Bienvenidos</h2>
          <p>El Colegio Provincial Dr. Ernesto Guevara nace como una escuela inclusora en el año 2005.
            El Trayecto Técnico Profesional se une a la escuela en ese mismo año.
            A partir del año 2007, se transforma en una Escuela Técnica, conforme a la Ley de Educación
            Técnica Profesional N° 26058/05, continuando con su mandato de Inclusión y retención, por
            lo que los siguientes años son de transición.
            La nueva escuela secundaria, a partir de las sanciones de la Ley de Educación Nacional N°
            26206/06, Ley de Educación Técnica N° 26058/05, Ley de Protección integral de las niñas,
            niños y adolescentes N° 26061/05, y posteriormente con la Ley de Educación Provincial
            N°1018/14, reconfigura el contrato fundacional de la escuela y se funda en otros pilares que
            son la inclusión y la obligatoriedad.
          </p>

          <div className="testimonios">
            <h2>Testimonios de Ex Alumnos</h2>
            <div className="testimonio">
              <span className="cita">...........</span>
              <span className="autor">Juan Perez</span>
            </div>
          </div>
        </div>
      </div>
    </main>
        );
}
export default Homepage;