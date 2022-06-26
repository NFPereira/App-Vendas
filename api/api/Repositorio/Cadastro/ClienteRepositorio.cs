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
    public class ClienteRepositorio
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

        public static T ConvertFromDBVal<T>(object obj)
        {
            if(obj == null || obj == DBNull.Value)
            {
                return default(T);
            }
            else
            {
                return (T)obj;
            }
        }

        public List<ClienteModel> ListarCliente()
        {
            var ret = new List<ClienteModel>();
            Connection();

            using(SqlCommand cmd = new SqlCommand("st_ListarCliente", con))
            {
                cmd.CommandType = CommandType.StoredProcedure;
                con.Open();
                var reader = cmd.ExecuteReader();

                while (reader.Read())
                {
                    ret.Add(new ClienteModel()
                    {
                         Id                  = ConvertFromDBVal<int>(reader["Id"])
                        ,IdTipoPessoa        = ConvertFromDBVal<int>(reader["IdTipoPessoa"])
                        ,Nome                = ConvertFromDBVal<string>(reader["Nome"])
                        ,RazaoSocial         = ConvertFromDBVal<string>(reader["RazaoSocial"])
                        ,IdSexo              = ConvertFromDBVal<int>(reader["IdSexo"])
                        ,DataNascimento      = ConvertFromDBVal<string>(reader["DataNascimento"])
                        ,CnpjCpf             = ConvertFromDBVal<string>(reader["CnpjCpf"])
                        ,RgInscricaoEstadual = ConvertFromDBVal<string>(reader["RgInscricaoEstadual"])
                        ,IdEstado            = ConvertFromDBVal<int>(reader["IdEstado"])
                        ,IdCidade            = ConvertFromDBVal<int>(reader["IdCidade"])
                        ,Logradouro          = ConvertFromDBVal<string>(reader["Logradouro"])
                        ,Numero              = ConvertFromDBVal<string>(reader["Numero"])
                        ,Bairro              = ConvertFromDBVal<string>(reader["Bairro"])
                        ,Cep                 = ConvertFromDBVal<string>(reader["Cep"])
                        ,Telefone            = ConvertFromDBVal<string>(reader["Telefone"])
                        ,Celular             = ConvertFromDBVal<string>(reader["Celular"])
                        ,Email               = ConvertFromDBVal<string>(reader["Email"])
                        ,DataCadastro        = ConvertFromDBVal<string>(reader["DataCadastro"])
                        ,DataBloqueio        = ConvertFromDBVal<string>(reader["DataBloqueio"])
                        ,Ativo               = ConvertFromDBVal<bool>( reader["Ativo"])
                    });
                }
                con.Close();
            }
            return ret;
        }
    }
}
