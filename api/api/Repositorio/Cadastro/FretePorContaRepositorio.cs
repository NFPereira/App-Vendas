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
    public class FretePorContaRepositorio
    {
        public IConfigurationRoot GetConnection()
        {
            var builder = new ConfigurationBuilder().SetBasePath(Directory.GetCurrentDirectory()).AddJsonFile("appSettings.json").Build();
            return builder;
        }

        private SqlConnection con;

        public void Connection()
        {
            con = new SqlConnection(GetConnection().GetSection("ConnectionStrings").GetSection("connectionString").Value);
        }

        public List<FretePorContaModel> ListarFretePorConta()
        {
            var ret = new List<FretePorContaModel>();
            Connection();

            using(SqlCommand cmd = new SqlCommand("st_ListarFretePorConta", con))
            {
                cmd.CommandType = CommandType.StoredProcedure;
                con.Open();
                var reader = cmd.ExecuteReader();

                while (reader.Read())
                {
                    ret.Add(new FretePorContaModel()
                    {
                        Id     = (int)    reader["Id"]
                       ,Codigo = (string) reader["Codigo"]
                       ,Nome   = (string) reader["Nome"]
                       ,Ativo  = (bool)   reader["Ativo"]
                    });                                           
                }
                con.Close();
            }
            return ret;
        }
    }
}
