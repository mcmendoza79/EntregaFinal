import React from 'react';
const Contactopage= (props) => {
  return (
    <main className="holder">
    <div className="contacto">       
       <div>
         <h1>Contacto</h1>
        <form>
            <div>
              <label htmlFor="nombre">Nombre:</label>
              <input type="text" id="nombre" name="nombre" />
            </div>
            <div>
              <label htmlFor="email">Correo electrónico:</label>
              <input type="email" id="email" name="email" />
            </div>
            <div>
              <label htmlFor="mensaje">Mensaje:</label>
              <textarea id="mensaje" name="mensaje"></textarea>
            </div>
            <button type="submit">Enviar</button>
          </form>
       </div> 
    </div>
    </main>     
       );
}
export default Contactopage;