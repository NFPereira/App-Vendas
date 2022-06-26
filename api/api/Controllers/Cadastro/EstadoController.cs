using api.Model.Cadastro;
using api.Repositorio.Cadastro;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace api.Controllers.Cadastro
{
    [ApiController]
    public class EstadoController : Controller
    {
        private EstadoRepositorio estadoRepositorio;
        [Route("api/Estado")]
        public List<EstadoModel> Get()
        {
            estadoRepositorio = new EstadoRepositorio();
            return estadoRepositorio.ListarEstado();
        }
    }
}
