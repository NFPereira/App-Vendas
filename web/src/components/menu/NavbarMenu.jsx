import React from 'react';
import { Navbar, Container, Nav, NavDropdown } from 'react-bootstrap';


const NavbarMenu = () => {

    return (

        <Navbar bg="dark" expand="lg" variant="dark" >
            <Container>
                <Navbar.Brand href="/">Sistema de Vendas</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="/">Home</Nav.Link>
                        <NavDropdown title="Cadastros" id="basic-nav-dropdown">
                            <NavDropdown.Item href="/CadCidade">Cidades</NavDropdown.Item>
                            <NavDropdown.Item href="/CadEstado">Estados</NavDropdown.Item>
                            <NavDropdown.Item href="/CadPais">Países</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="/CadTipoPessoa">Tipo Pessoas</NavDropdown.Item>
                            <NavDropdown.Item href="/CadSexo">Sexo</NavDropdown.Item>
                            <NavDropdown.Item href="/CadFretePorConta">Frete por Conta</NavDropdown.Item>
                            <NavDropdown.Item href="/CadCliente">Clientes</NavDropdown.Item>
                            <NavDropdown.Item href="/CadFornecedor">Fornecedores</NavDropdown.Item>
                            <NavDropdown.Item href="/CadFormaPagamento">Formas Pagamentos</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="/CadCategoriaProduto">Categorias de Produtos</NavDropdown.Item>
                            <NavDropdown.Item href="/CadGrupoProduto">Grupos de Produtos</NavDropdown.Item>
                            <NavDropdown.Item href="/CadClassificacaoFiscal">Classificações Fiscais</NavDropdown.Item>
                            <NavDropdown.Item href="/CadCorProduto">Cores Produtos</NavDropdown.Item>
                            <NavDropdown.Item href="/CadLocalArmazenamento">Locais de Armazenamentos</NavDropdown.Item>
                            <NavDropdown.Item href="/CadMarcaProduto">Marcas de Produtos</NavDropdown.Item>
                            <NavDropdown.Item href="/CadNaturezaOperacao">Natureza de Operação</NavDropdown.Item>
                            <NavDropdown.Item href="/CadUnidadeMedida">Unidades de Medidas</NavDropdown.Item>
                            <NavDropdown.Item href="/CadProduto">Produtos</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="/CadNivelUsuario">Níveis de Usuários</NavDropdown.Item>
                            <NavDropdown.Item href="/CadUsuario">Usuários</NavDropdown.Item>
                        </NavDropdown>
                        <NavDropdown title="Operações" id="basic-nav-dropdown">
                            <NavDropdown.Item href="/OperEntradaNota">Entrada Nota</NavDropdown.Item>
                            <NavDropdown.Item href="/OperEntradaNotaXML">Entrada Nota (XML)</NavDropdown.Item>
                            <NavDropdown.Item href="/OperEstornoNota">Estorno Nota</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="/OperVenda">Vendas</NavDropdown.Item>
                            <NavDropdown.Item href="/OperEstornoVenda">Estorno Vendas</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="/OperRecebimento">Recebimento</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="/OperAcertoEstoque">Acerto Estoque</NavDropdown.Item>
                        </NavDropdown>
                        <NavDropdown title="Relatórios" id="basic-nav-dropdown">
                            <NavDropdown.Item href="/RelEstoqueCritico">Estoque Crítico</NavDropdown.Item>
                            <NavDropdown.Item href="/RelClientes">Lista de Clientes</NavDropdown.Item>
                            <NavDropdown.Item href="/RelVencimentosPorPeriodo">Vencimento Parcela por Período</NavDropdown.Item>
                        </NavDropdown>
                        <NavDropdown title="Gráficos" id="basic-nav-dropdown">
                            <NavDropdown.Item href="/GrafVendasPorPeriodo">Vendas por Período</NavDropdown.Item>
                            <NavDropdown.Item href="/GrafEntradasPorPeriodo">Entradas por Período</NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                    <Nav>
                        <Nav.Link>Login</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default NavbarMenu;
