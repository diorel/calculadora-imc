import React from 'react';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';

export default function Navcalculadora(){
    return(
      <>
      <Navbar bg="primary" variant="dark">
        <Container>
          <Navbar.Brand href="#home">Health Overview</Navbar.Brand>
        </Container>
      </Navbar>
    </>
    );

}
export { Navcalculadora };