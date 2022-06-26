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
    public class PaisRepositorio
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

        public List<PaisModel> ListarPais()
        {
            var ret = new List<PaisModel>();
            Connection();
            using(SqlCommand cmd = new SqlCommand("st_ListarPais", con))
            {
                cmd.CommandType = CommandType.StoredProcedure;                
                con.Open();               
                var reader = cmd.ExecuteReader();

                while ( reader.Read() )
                {
                    ret.Add(new PaisModel()
                    {
                        Id     = (int)    reader["Id"]
                       ,Codigo = (string) reader["Codigo"]
                       ,Nome   = (string) reader["Nome"]
                       ,Sigla  = (string) reader["Sigla"]
                       ,Ativo  = (bool)   reader["Ativo"]
                    });
                }
                con.Close();
            }
            return ret;
        }

        public PaisModel ListarPaisPeloId(int id)
        {
            PaisModel ret = null;
            Connection();
            using(SqlCommand cmd = new SqlCommand("st_ListarPaisPeloId", con))
            {
                cmd.CommandType = CommandType.StoredProcedure;
                cmd.Parameters.AddWithValue("@Id", SqlDbType.Int).Value = id;
                con.Open();

                var reader = cmd.ExecuteReader();
                if (reader.Read())
                {
                    ret = new PaisModel()
                    {
                        Id     = (int)    reader["Id"]
                       ,Codigo = (string) reader["Codigo"]
                       ,Nome   = (string) reader["Nome"]
                       ,Sigla  = (string) reader["Sigla"]
                       ,Ativo  = (bool)   reader["Ativo"]
                    };
                }                
            }
            return ret;
        }

        public bool InserirPais(PaisModel paisModel)
        {
            var ret = false;
            Connection();

            using(SqlCommand cmd = new SqlCommand("st_IncluirPais", con))
            {
                cmd.CommandType = CommandType.StoredProcedure;
                cmd.Parameters.AddWithValue("@Codigo", SqlDbType.VarChar).Value = paisModel.Codigo;
                cmd.Parameters.AddWithValue("@Nome",   SqlDbType.VarChar).Value = paisModel.Nome;
                cmd.Parameters.AddWithValue("@Sigla",  SqlDbType.VarChar).Value = paisModel.Sigla;
                cmd.Parameters.AddWithValue("@Ativo",  SqlDbType.VarChar).Value = paisModel.Ativo;
                con.Open();

                ret = (int)cmd.ExecuteNonQuery() > 0;
                con.Close();
            }
            return ret;
        }

        public bool EditarPais(PaisModel paisModel)
        {
            var ret = false;
            Connection();

            using(SqlCommand cmd = new SqlCommand("st_EditarPais", con))
            {
                cmd.CommandType = CommandType.StoredProcedure;
                cmd.Parameters.AddWithValue("@Codigo", SqlDbType.VarChar).Value = paisModel.Codigo;
                cmd.Parameters.AddWithValue("@Nome", SqlDbType.VarChar).Value = paisModel.Nome;
                cmd.Parameters.AddWithValue("@Sigla", SqlDbType.VarChar).Value = paisModel.Sigla;
                cmd.Parameters.AddWithValue("@Ativo", SqlDbType.VarChar).Value = paisModel.Ativo;
                cmd.Parameters.AddWithValue("@Id", SqlDbType.Int).Value = paisModel.Id;
                con.Open();
                ret = (int)cmd.ExecuteNonQuery() > 0;
                con.Close();
            }
            return ret;
        }

        public bool DeletarPais(int id)
        {
            var ret = false;
            Connection();

            using(SqlCommand cmd = new SqlCommand("st_DeletarPais", con))
            {
                cmd.CommandType = CommandType.StoredProcedure;
                cmd.Parameters.AddWithValue("@Id", SqlDbType.Int).Value = id;
                con.Open();
                ret = (int)cmd.ExecuteNonQuery() > 0;
                con.Close();
            }
            return ret;

        }
    }
}
