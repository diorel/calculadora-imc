import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


import '../css/Principal.css'

export default function Principal(props){
    return(  
        <Container>
        <Col xs lg="6">
        <br />
        <br />
        <br />
        <Row>
          <h1 className='Titulo'>Calculadora de Grasa</h1>
          <h1 className='Titulo'>Corporal</h1>
          <p className='Texto'>El metodo de la Marina de Estados Unidos (US Navy Method) ofrece una manera <br></br> 
                               sencilla de calcular un aproximado del porcentaje de tejido adiposo en el cuerpo de<br></br>
                               una persona.
                               </p>
          <p className='Texto'>Los valores requeridos por la formula son los siguientes</p>
        </Row>
        <Row>
        </Row>
        </Col>
      </Container>
    );
}

export { Principal };