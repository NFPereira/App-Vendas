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
    public class CidadeController : ControllerBase
    {
        private CidadeRepositorio cidadeRepositorio;

        [Route("api/Cidade")]
        public List<CidadeModel> Get()
        {
            cidadeRepositorio = new CidadeRepositorio();
            return cidadeRepositorio.ListarCidade();            
        }
    }
}
