import React, {useState, useEffect} from "react";
import axios from "axios";
import NovedadItem from "../components/novedades/novedadItem";

const Novedadespage= (props) => {
     const[loading, setLoading] =useState(false);
     const[novedades, setNovedades] =useState([]);
      useEffect(() => {
        cargarNovedades= async()=> {
          setLoading(true);
          const response= await axios.get("http://localhost:3000/api/novedades");
          setNovedades(response.data);
          setLoading(false);
        };
        cargarNovedades();
      },[]);
      return(
        <section className="holder">
          <h2>Novedades</h2>
          {loading ? (
           <p>Cargando... </p>
          ):(
             novedades.map(item=> <NovedadItem Key={item.id}
             titulo={item.titulo} subtitulo={item.subtitulo} imagen={item.img_id} contenido={item.contenido}/>)
          )}
        </section>
      );
             }

export default Novedadespage;





