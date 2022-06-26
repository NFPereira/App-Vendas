using api.Model.Cadastro;
using api.Repositorio.Cadastro;
using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;


namespace api.Controllers.Cadastro
{

    [ApiController]
    public class PaisController : ControllerBase
    {
        private PaisRepositorio paisRepositorio;

        [Route("api/Pais")]
        public List<PaisModel> Get()
        {
            paisRepositorio = new PaisRepositorio();
            return paisRepositorio.ListarPais();
        }

        [Route("api/Pais/{id}")]
        public PaisModel Get(int id)
        {
            paisRepositorio = new PaisRepositorio();
            return paisRepositorio.ListarPaisPeloId(id);
        }

        [HttpPost("api/Pais")]
        public IActionResult Create(PaisModel paisModel)
        {
            try
            {
                paisRepositorio = new PaisRepositorio();
                paisRepositorio.InserirPais(paisModel);

                return StatusCode(200, new { success = true, data = paisModel });
            }
            catch(Exception ex)
            {
                return StatusCode(500, new { success = false, error = ex.Message });
            }
        }

        [HttpPut("api/Pais")]
        public IActionResult Update(PaisModel paisModel)
        {
            try
            {
                paisRepositorio = new PaisRepositorio();
                paisRepositorio.EditarPais(paisModel);

                return StatusCode(200, new { success = true, data = paisModel });
            }
            catch (Exception ex)
            {
                return StatusCode(500, new { success = false, error = ex.Message });
            }
        }

        [HttpDelete("api/Pais/{id}")]
        public IActionResult Delete(int id)
        {
            try
            {
                paisRepositorio = new PaisRepositorio();
                paisRepositorio.DeletarPais(id);

                return StatusCode(200, new { success = true, data = id });
            }
            catch(Exception ex)
            {

                return StatusCode(500, new { success = false, error = ex.Message });
            }
        }

    }
}
