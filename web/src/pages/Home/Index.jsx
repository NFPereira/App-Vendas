import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './Home.css';

const Home = () => {
  return (
    <>
      <Container fluid className="containers" >
      <h1>Página Inicial</h1>
        <Row className="rows">
          <Col>Código</Col>
          <Col>Nome</Col>
          <Col>Ativo</Col>
          <Col>Ações</Col>          
        </Row>
      </Container>
      
    </>
  )
}

export default Home;
