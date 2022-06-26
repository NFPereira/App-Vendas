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
    [ApiController]
    public class ClienteController : ControllerBase
    {
        private ClienteRepositorio clienteRepositorio;

        [Route("api/Cliente")]
        public List<ClienteModel> Get()
        {
            clienteRepositorio = new ClienteRepositorio();
            return clienteRepositorio.ListarCliente();
        }
    }
}
