import React, { useState, useEffect } from 'react';
import { Container, Button, Row, Col, Form, InputGroup, FormControl } from 'react-bootstrap';
import './CadPais.css';
import Table from 'react-bootstrap/Table';
import axios from 'axios';

const CadPais = () => {

  const baseUrl = "https://localhost:44347/api/Pais";

  const [data, setData] = useState([]);

  const paisGet=async()=>{
    await axios.get(baseUrl)
    .then(response=>{
      setData(response.data);
    }).catch(error=>{
      console.log(error);
    })
  }

  useEffect(() =>{
    paisGet();
  })

  return (
    <>
      <Container className='container-central'>
        <h2>Lista de Países</h2>
        <Row>
          <Col xs={6} md={4}>
            <Button variant="success">Inserir</Button>
          </Col>
          <Col xs={6} md={4}>
            <Form.Select aria-label="Default select example">
              <option value="5">5</option>
              <option value="10">10</option>
              <option value="15">15</option>
            </Form.Select>
          </Col>
          <Col xs={6} md={4}>
            <InputGroup
              className="mb-3"
            >
              <FormControl />
              <Button variant="primary" id="button-addon2">
                Pesquisar
              </Button>
            </InputGroup>
          </Col>
        </Row>
        <Table responsive bordered striped hover className='gridPais'>
          <thead>
            <tr>
              <th>#</th>
              <th>Nome</th>
              <th>Sigla</th>
              <th>Ativo</th>
              <th text-align='center'>Ações</th>
            </tr>
          </thead>
          <tbody>
            {data.map(pais =>(
           <tr key={pais.id}>
           <td>{pais.codigo}</td>
           <td>{pais.nome}</td>
           <td>{pais.sigla}</td>
           <td>{pais.ativo ? "SIM": "NÃO"}</td>
           <td>
             <Button className="me-2" variant="warning" id="button-addon2">
               Editar
             </Button>
             <Button variant="danger" id="button-addon2">
               Excluir
             </Button>

           </td>
         </tr>
            ))}
          </tbody>
        </Table>
      </Container>
    </>
  )
}

export default CadPais;
