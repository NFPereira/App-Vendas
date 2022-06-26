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
    public class SexoController : ControllerBase
    {
        private SexoRepositorio sexoRepositorio;

        [Route("api/Sexo")]
        public List<SexoModel> get()
        {
            sexoRepositorio = new SexoRepositorio();
            return sexoRepositorio.ListarSexo();
        }

    }
}
