const handles = require("./handles")

module.exports = [
  {
    method: 'GET',
    path: '/api/v1/publicacoes',
    handler: handles.listarPublicacoes
  },
  {
    method: 'POST',
    path: '/api/v1/publicacao',
    handler: handles.criarPublicacao
  },
  {
    method: 'POST',
    path: '/api/v1/login',
    handler: handles.logarUsuario
  },
  {
    method: 'POST',
    path: '/api/v1/usuario',
    handler: handles.criarUsuario
  },
]