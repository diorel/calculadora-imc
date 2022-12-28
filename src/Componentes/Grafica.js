import React, { useState , useEffect  }   from 'react';
import '../css/Grafica.css'

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';




export default function Grafica({resultadoApi}){

  const[poscion,Setposcion]= useState(0);

  useEffect(() => {
         
       function cargarDistancia() {
 
        if (resultadoApi <=2 || resultadoApi <=4) 
        {
          Setposcion(poscion + 33)
        }
        if ( resultadoApi <=5 || resultadoApi <=13)
        {
          Setposcion(poscion + 120)
        }
         if( resultadoApi <= 14 || resultadoApi <=17)
         {
           Setposcion(poscion + 214 )
         }
         else{
          Setposcion(poscion + 447)
         }

      }
      cargarDistancia()
  },[]);


    return(   
      <Container>      
          <Row>
          <Col xs lg="12">
          <h1 className="resultadotexto">Tu resultado: {resultadoApi} %</h1>
          <br />
          <br />
            <div className="contedorIndicador" style={{marginLeft:poscion}}>
                <div className="textoIndicador">{resultadoApi}%</div>
                <div className="triangulo"></div>                 
           </div>
          <div className="lineal"></div>
          <br />
          </Col>
        </Row>
        <Row>
        <Col xs lg="2">
          <div className="cuadradoEsencial"></div>
          <div className="textoProcentaje" >2-4%</div>
          <div className="textoEtiqueta" >Esencia</div>
        </Col>
        <Col xs lg="2">
          <div className="cuadradoDeportista"></div>
          <div className="textoProcentaje" >6-13%</div>
          <div className="textoEtiqueta" >Deportista</div>
        </Col>
        <Col xs lg="2">
          <div className="cuadradoFitness"></div>
          <div className="textoProcentaje" >14-17%</div>
          <div className="textoEtiqueta" >Fitness</div>
        </Col>
        <Col xs lg="2">
          <div className="cuadradoAceptable"></div>
          <div className="textoProcentaje" >18-25%</div>
          <div className="textoEtiqueta" >Aceptable</div>
        </Col>
        <Col xs lg="2">
          <div className="textoObeso"></div>
          <div className="textoProcentaje" >25% +</div>
          <div className="textoEtiqueta" >Obeso</div>
        </Col>
        </Row>        
      </Container>         
    )
}

export { Grafica };