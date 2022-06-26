using api.Model.Cadastro;
using api.Repositorio.Cadastro;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace api.Controllers.Cadastro
{
    [Route("api/[controller]")]
    [ApiController]
    public class FornecedorController : ControllerBase
    {
        private FornecedorRepositorio fornecedorRepositorio;

        [Route("api/Forncecedor")]
        public List<FornecedorModel> Get()
        {
            fornecedorRepositorio = new FornecedorRepositorio();
            return fornecedorRepositorio.ListarFornecedor();
        }
    }
}
