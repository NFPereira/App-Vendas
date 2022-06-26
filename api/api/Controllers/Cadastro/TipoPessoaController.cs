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
    public class TipoPessoaController : ControllerBase
    {
        private TipoPessoaRepositorio tipoPessoaRepositorio;

        [Route("api/TipoPessoa")]
        public List<TipoPessoaModel> Get()
        {
            tipoPessoaRepositorio = new TipoPessoaRepositorio();
            return tipoPessoaRepositorio.ListarTipoPessoa();
        }
    }
}
