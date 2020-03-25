const express = require('express');
const cors = require('cors'); //5.2k (gzipped: 2.1k)
const routes = require('./routes');

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);

/**
 * Rota / Recurso
 * 
 */

 /**
  * Métodos HTTP:
  * 
  * GET: Buscar/Listar uma informação do back-end
  * POST: Criar uma informação no back-end
  * PUT:  Alterar uma informação no back-end
  * DELETE: Deletar uma informação no back-end
  */

  /**
   * Tipos de parametros:
   * 
   * Query Params: Parâmetros nomeados enviados na rota após "?" (Filtro, paginação)
   * Route Params: Parâmetros utilizados para identificar recursos
   * Request Body: corpo da requisição, utilizada para criar ou alterar recursos   * 
   */

   /**
    * SQL: MySQL, SQLite, PostgreSQL, Oracle, Microsoft SQL Server
    * NoSQL: MongoDB, CouchDB, etc
    */

    /**
     * Driver: SELECT * FROM users
     * Query Builder: table ('user').select('*').where()
     */



app.listen(3333);