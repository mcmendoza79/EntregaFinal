import React , {useState} from 'react';
import axios from "axios";


const Contactopage = (props) => {
  const initialForm = {
    nombre: "",
    email: "",
    mensaje: "",
  };

  const [sending, setSending] = useState(false);
  const [msg, setMsg] = useState("");
  const [formData, setFormData] = useState(initialForm);

  const handleChange = e => {
    const { name, value } = e.target;
    setFormData(oldData => ({
      ...oldData,
      [name]: value
    }));
  };

  const handleSubmit = async e => {
    e.preventDefault();
    setMsg("");
    setSending(true); 
    try {
      const response = await axios.post("http://localhost:3000/api/contacto", formData);
      setMsg(response.data.message);
      if (response.data.error === false) {
        setMsg(response.data.message);
        setFormData(initialForm);
        
      }
    } catch (error) {
      console.error('Error al enviar el formulario:', error);
      setMsg('Ocurrió un error al enviar el formulario');
      setFormData(initialForm);
    } finally {
      setSending(false); 
    }
  };

  return (
    <main className="holder">
      <div className="contacto">
        <div>
          <h1>Contacto</h1>
          <form onSubmit={handleSubmit}>
            <div>
              <label htmlFor="nombre">Nombre:</label>
              <input type="text" id="nombre" name="nombre" value={formData.nombre} onChange={handleChange} />
            </div>
            <div>
              <label htmlFor="email">Correo electrónico:</label>
              <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} />
            </div>
            <div>
              <label htmlFor="mensaje">Mensaje:</label>
              <textarea id="mensaje" name="mensaje" value={formData.mensaje} onChange={handleChange}></textarea>
            </div>
            {sending && <p>Enviando...</p>}
            {msg && <p>{msg}</p>}
            <button type="submit" disabled={sending}>Enviar</button>
          </form>
        </div>
      </div>
    </main>
  );
};



export default Contactopage;