import React from 'react';
const Elcolegiopage= (props) => {
  return (
    <main className="holder">
    <div className="descripcion">
        <h2>Cuerpo directivo del Colegio</h2>
        <h2>Director y Vices</h2>
     </div>       
   
    <div className="staff">
           <div className="personas">
            <div className="persona">
               <img src="img/director.jpg" alt="Director"/>
               <h5>Director</h5>
               <h6>Profesor Walter Wozniak</h6>
            </div>
           <div className="persona">
               <img src="img/vicemañana.jpg" alt="Vicemañana"/>
               <h5>Vicedirectora Turno Mañana</h5>
               <h6>Profesora Sonia Perez</h6>
           </div>
           <div className="persona">
               <img src="img/ViceTarde.jpg" alt="ViceTarde"/>
               <h5>Vicedirectora Turno Tarde</h5>
               <h6>Profesora Alejandra Gutierrez</h6>
           </div>
           <div className="persona">
            <img src="img/vicevespertino.jpg" alt="vicevespertino"/>
            <h5>Vicedirectora Turno Vespertino</h5>
            <h6>Profesora Mónica Navarro</h6>
           </div>
           </div>
    </div>
</main>
);
}
export default Elcolegiopage;