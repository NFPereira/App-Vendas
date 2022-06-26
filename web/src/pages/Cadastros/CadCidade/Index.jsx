import React,{useState, useEffect} from 'react';
import { Container, Table, Button} from 'react-bootstrap';
import axios from 'axios';

const baseUrl = 'https://localhost:44347/api/Cidade';

const CadCidade = () => {

  const [data, setData] = useState([]);

  const cidadeGet = async () => {
    await axios.get(baseUrl)
      .then(response => {
        setData(response.data);
      })
      .catch(error => {
        console.log(error);
      });
  }

  useEffect(() => {
    cidadeGet();
  });

  
  return (
    <>
      <Container fluid>
        <h1>Lista de Cidades</h1>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>#</th>              
              <th>Nome</th>
              <th>Ativo</th>
              <th>Ações</th>
            </tr>
          </thead>
          <tbody>
            {data.map(cidade =>(
            <tr key={cidade.id}>
              <td>{cidade.codigo}</td>
              <td>{cidade.nome}</td>
              <td>{cidade.ativo ? 'SIM':'NÃO'}</td>
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

export default CadCidade;
