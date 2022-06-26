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
    public class FretePorContaController : ControllerBase
    {
        private FretePorContaRepositorio fretePorContaRepositorio;

        [Route("api/FretePorConta")]
        public List<FretePorContaModel> Get()
        {
            fretePorContaRepositorio = new FretePorContaRepositorio();
            return fretePorContaRepositorio.ListarFretePorConta();
        }
    }
}
