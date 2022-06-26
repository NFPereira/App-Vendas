import React from 'react';
import {
    BrowserRouter as Router
   ,Routes
   ,Route

} from 'react-router-dom';
import Home from './pages/Home/Index';
import CadCidade from './pages/Cadastros/CadCidade/Index';
import CadEstado from './pages/Cadastros/CadEstado/Index';
import CadPais from './pages/Cadastros/CadPais/Index';
import CadTipoPessoa from './pages/Cadastros/CadTipoPessoa/Index';
import CadSexo from './pages/Cadastros/CadSexo/Index';
import CadFretePorConta from './pages/Cadastros/CadFretePorConta/Index';
import CadCliente from './pages/Cadastros/CadCliente/Index';
import CadFornecedor from './pages/Cadastros/CadFornecedor/Index';
import CadFormaPagamento from './pages/Cadastros/CadFormaPagamento/Index';
import CadCategoriaProduto from './pages/Cadastros/CadCategoriaProduto/Index';
import CadGrupoProduto from './pages/Cadastros/CadGrupoProduto/Index';
import CadClassificacaoFiscal from './pages/Cadastros/CadClassificacaoFiscal/Index';
import CadCorProduto from './pages/Cadastros/CadCorProduto/Index';
import CadLocalArmazenamento from './pages/Cadastros/CadLocalArmazenamento/Index';
import CadMarcaProduto from './pages/Cadastros/CadMarcaProduto/Index';
import CadNaturezaOperacao from './pages/Cadastros/CadNaturezaOperacao/Index';
import CadUnidadeMedida from './pages/Cadastros/CadUnidadeMedida/Index';
import CadProduto from './pages/Cadastros/CadProduto/Index';
import CadNivelUsuario from './pages/Cadastros/CadNivelUsuario/Index';
import CadUsuario from './pages/Cadastros/CadUsuario/Index';

import OperEntradaNota from './pages/Operacoes/OperEntradaNota/Index';
import OperEntradaNotaXml from './pages/Operacoes/OperEntradaNotaXml/Index';
import OperEstornoNota from './pages/Operacoes/OperEstornoNota/Index';
import OperVenda from './pages/Operacoes/OperVenda/Index';
import OperEstornoVenda from './pages/Operacoes/OperEstornoVenda/Index';
import OperRecebimento from './pages/Operacoes/OperRecebimento/Index';
import OperAcertoEstoque from './pages/Operacoes/OperAcertoEstoque/Index';

import RelEstoqueCritico from './pages/Relatorios/RelEstoqueCritico/Index';
import RelClientes from './pages/Relatorios/RelClientes/Index';
import RelVencimentosPorPeriodo from './pages/Relatorios/RelVencimentosPorPeriodo/Filtro';

import GrafEntradasPorPeriodo from './pages/Graficos/GrafEntradasPorPeriodo/Index';
import GrafVendasPorPeriodo from './pages/Graficos/GrafVendasPorPeriodo/Index';
import NavbarMenu from './components/menu/NavbarMenu';


const Root = () => {
    return (
        <>
            <Router>
                <NavbarMenu />
                <Routes>
                    <Route path='/'                         element={<Home />} />
                    <Route path='/CadCidade'                element={<CadCidade />} />
                    <Route path='/CadEstado'                element={<CadEstado />} />
                    <Route path='/CadPais'                  element={<CadPais />} />
                    <Route path='/CadTipoPessoa'            element={<CadTipoPessoa />} />
                    <Route path='/CadSexo'                  element={<CadSexo />} />
                    <Route path='/CadFretePorConta'         element={<CadFretePorConta />} />
                    <Route path='/CadCliente'               element={<CadCliente />} />
                    <Route path='/CadFornecedor'            element={<CadFornecedor />} />
                    <Route path='/CadFormaPagamento'        element={<CadFormaPagamento />} />
                    <Route path='/CadCategoriaProduto'      element={<CadCategoriaProduto /> }/>
                    <Route path='/CadGrupoProduto'          element={<CadGrupoProduto />} />
                    <Route path='/CadClassificacaoFiscal'   element={<CadClassificacaoFiscal />} />
                    <Route path='/CadCorProduto'            element={<CadCorProduto />} />
                    <Route path='/CadLocalArmazenamento'    element={<CadLocalArmazenamento />} />
                    <Route path='/CadMarcaProduto'          element={<CadMarcaProduto />} />
                    <Route path='/CadNaturezaOperacao'      element={<CadNaturezaOperacao />} />
                    <Route path='/CadUnidadeMedida'         element={<CadUnidadeMedida />} />
                    <Route path='/CadProduto'               element={<CadProduto />} />
                    <Route path='/CadNivelUsuario'          element={<CadNivelUsuario />} />
                    <Route path='/CadUsuario'               element={<CadUsuario />} />



;

                    <Route path='/OperEntradaNota'          element={<OperEntradaNota />} />
                    <Route path='/OperEntradaNotaXml'       element={<OperEntradaNotaXml />} />
                    <Route path='/OperEstornoNota'          element={<OperEstornoNota />} />
                    <Route path='/OperVenda'                element={<OperVenda />} />
                    <Route path='/OperEstornoVenda'         element={<OperEstornoVenda />} />
                    <Route path='/OperRecebimento'          element={<OperRecebimento />} />
                    <Route path='/OperAcertoEstoque'        element={<OperAcertoEstoque />} />

                    <Route path='/RelEstoqueCritico'        element={<RelEstoqueCritico />} />
                    <Route path='/RelClientes'              element={<RelClientes />} />
                    <Route path='/RelVencimentosPorPeriodo' element={<RelVencimentosPorPeriodo />} />

                    <Route path='/GrafEntradasPorPeriodo'   element={<GrafEntradasPorPeriodo />} />
                    <Route path='/GrafVendasPorPeriodo'     element={<GrafVendasPorPeriodo />} />                    
                </Routes>
            </Router>
        </>
    )
}

export default Root;
