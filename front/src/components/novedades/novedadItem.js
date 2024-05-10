import React from "react";

const NovedadItem=(props)=>{
    const {titulo, subtitulo, imagen, contenido}= props;
    return(
        <div className="novedades">
            <h1>{titulo}</h1>
            <h2>{subtitulo}</h2>
            <img src={imagen} />
            <div dangerouslySetInnerHTML={{ __html:contenido}}/>
            <hr />
        </div>
    );
}
export default NovedadItem;