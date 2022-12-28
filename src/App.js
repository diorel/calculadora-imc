import './App.css';
import React, { useState } from "react";
import Navcalculadora from './Componentes/Navcalculadora';
import Principal from './Vistas/Principal'; 
import { Calculadora } from './Componentes/Calculadora';
import Axios from 'axios';

import Grafica from './Componentes/Grafica';
import "bootstrap/dist/css/bootstrap.min.css"
import './css/Principal.css'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';




function App() {
  
const[dato,SetDato]= useState(null);
const [grafica, setgrafica] = useState(false);

 async function CalresultadoHombreApi(Waist,Neck,Height,Hip) {
  setgrafica(false); 
  console.log('hombre es');
  const { data } = await Axios.post('/API/V1/Calculdara/Hombre',{
    Waist, 
    Neck,
    Height,
    Hip
  });
 
  setgrafica(true);
  if(!dato){
    SetDato(dato + data.respuesta);
  }
 return data.respuesta  
}

async function CalresultadoMujerApi(Waist,Neck,Height,Hip) {
  console.log('Mujer es');
  const { data } = await Axios.post('/API/V1/Calculdara/Mujer',{
    Waist, 
    Neck,
    Height,
    Hip
  });
  //oculta grafica
  setgrafica(false);
  setgrafica(true);
  if(!dato){
    SetDato(dato + data.respuesta); 
  }else{
    SetDato(null);
  }
 return data.respuesta  
}

  return (
    <React.Fragment>
     <div className='body'>   
     <Navcalculadora />
     <Container>
        <Row>
          <Col xs lg="12">
            <Principal />
          </Col>
          <Col xs lg="6">
          <Row>
          <Calculadora  apiHombre={CalresultadoHombreApi} apiMujer={CalresultadoMujerApi}/>
          </Row>
          </Col>
          <Col xs lg="6">
             {grafica &&
                <Grafica resultadoApi={dato} />
             }
          </Col>
        </Row>
      </Container>
     </div>
  </React.Fragment>  
  );
}

export default App;
