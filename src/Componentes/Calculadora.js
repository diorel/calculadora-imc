import React , {useState} from "react";
// import Axios from 'axios';

import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

import '../css/Calculadora.css'

function Calculadora({apiHombre,apiMujer} ){
const [gender, setGender] = React.useState("male");
const [show, setShow] = useState(false);



const[datosUsuario,SetdatosUsuario] = useState({
  Waist: '', 
  Neck: '',
  Height: '',
  Hip:''
});




  function handleInputChange(e) {
    SetdatosUsuario({
       ...datosUsuario,
       [e.target.name]: e.target.value
    })
  }

  async function handleSubmit(e){
    e.preventDefault(); // no refresh
   
    try {

     if(show === false){
      apiHombre(datosUsuario.Waist,datosUsuario.Neck,datosUsuario.Height,datosUsuario.Hip);
   
  
     }else{
      apiMujer(datosUsuario.Waist,datosUsuario.Neck,datosUsuario.Height,datosUsuario.Hip);
    
     } 
    }catch(error){
      console.log('Error');
    }
 
  }
  function clearForm() {
    const inputsArray = Object.entries(datosUsuario);
    const clearInputsArray = inputsArray.map(([key]) => [key, '']);
    const inputsJson = Object.fromEntries(clearInputsArray);
    SetdatosUsuario(inputsJson);
    window.location.reload()
}

    return(
<Form onSubmit={handleSubmit} > 
<p className="textos">Genero</p>  
       <Form.Check 
        type="radio" 
        aria-label="radio 1"
        label="Hombre"
        className="textos"
        name="radioHombre"  
        inline
        checked={gender === "male"}
        onChange={() => setGender("male")}
        onClick={ ()=>setShow(false)} 
       />
       <Form.Check 
          type="radio" 
          inline
          aria-label="radio 2"
          label="Mujer"
          className="textos"
          name="radioMujer" 
          checked={gender === "female"}
          onChange={() => setGender("female")}
          onClick={()=>setShow(true)} 
        />      
      <Form.Group className="mb-3" ontrolId="formBasicAltura">
        <Form.Label className="textos">Altura(cm)</Form.Label>
        <Form.Control  
          type="number"
          name="Height"  
          placeholder="Escribe tu altura"
          className="cajaTexto"
          required
          onChange={handleInputChange}
          value={datosUsuario.Height}
         />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label className="textos">Cintura(cm)</Form.Label>
        <Form.Control 
          type="number" 
          name="Waist"  
          placeholder="Medida de tu cintura" 
          className="cajaTexto"
          required
          onChange={handleInputChange}
          value={datosUsuario.Waist}  
          />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
         <Form.Label className="textos">Cuello(cm)</Form.Label>
         <Form.Control 
            type="number"  
            name="Neck"  
            placeholder="Medida de tu cuello" 
            className="cajaTexto" 
            required
            onChange={handleInputChange}
            value={datosUsuario.Neck}    
           />
       </Form.Group>

      { show &&
        <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label className="textos">Cadera(cm)</Form.Label>
        <Form.Control 
            type="number" 
            name="Hip"  
            placeholder="Medida de tu cadera" 
            className="cajaTexto" 
            onChange={handleInputChange}
            value={datosUsuario.Hip} 
          />
        </Form.Group>
    
      }
      <Button className="botonCalular" variant="primary" type="submit">
        Calcular
      </Button>
      <Button className="botonLimpiar" onClick={clearForm}variant="dark">
       Limpiar
      </Button>
    </Form>
    );
}


export { Calculadora };