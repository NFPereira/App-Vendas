using api.Model.Cadastro;
using Microsoft.Extensions.Configuration;
using System;
using System.Collections.Generic;
using System.Data;
using System.Data.SqlClient;
using System.IO;
using System.Linq;
using System.Threading.Tasks;

namespace api.Repositorio.Cadastro
{
    public class FornecedorRepositorio
    {
        public IConfigurationRoot GetConnection()
        {
            var build = new ConfigurationBuilder().SetBasePath(Directory.GetCurrentDirectory()).AddJsonFile("appSettings.json").Build();
            return build;
        }

        private SqlConnection con;

        public void Connection()
        {
            con = new SqlConnection(GetConnection().GetSection("ConnectionStrings").GetSection("connectionString").Value);
        }

        public List<FornecedorModel> ListarFornecedor()
        {
            var ret = new List<FornecedorModel>();
            Connection();

            using (SqlCommand cmd = new SqlCommand("st_ListarFornecedor", con))
            {
                cmd.CommandType = CommandType.StoredProcedure;
                con.Open();
                var reader = cmd.ExecuteReader();

                while (reader.Read())
                {
                    ret.Add(new FornecedorModel()
                    {

                    });
                }
                con.Close();
            }
            return ret;
        }
    }
}
