import React, { useState, useEffect } from 'react';
import { Table, Container, Button,Col, Row, Form, InputGroup, FormControl} from 'react-bootstrap';
import axios from 'axios';

const baseUrl = 'https://localhost:44347/api/Estado';

const CadEstado = () => {

  const [data, setData] = useState([]);

  const estadoGet = async () => {
    await axios.get(baseUrl)
      .then(response => {
        setData(response.data);
      })
      .catch(error => {
        console.log(error);
      });
  }

  useEffect(() => {
    estadoGet();
  });

  return (
    <>
      <Container className='container-central'>
        <h2>Lista de Estados</h2>
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
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>#</th>
              <th>Nome</th>
              <th>Ativo</th>
              <th>Sigla</th>
              <th>Ações</th>
            </tr>
          </thead>
          <tbody>
            {data.map(estado => (
              <tr key={estado.id}>
                <td>{estado.codigo}</td>
                <td>{estado.nome}</td>
                <td>{estado.sigla}</td>
                <td>{estado.ativo ? "SIM" : "NÃO"}</td>
                <td>
                  <Button className="me-2" variant="warning" id="button-addon2">
                    Editar
                  </Button>
                  <Button variant="danger" id="button-addon2">
                    Excluir
                  </Button></td>
              </tr>
            ))}
          </tbody>
        </Table>
      </Container>
    </>
  )
}

export default CadEstado;
