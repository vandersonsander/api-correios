const listarServicosController = require(
  '../controllers/listarServicosController');

module.exports = (app) => {
    app.post('/v1/listar-servicos/', listarServicosController.calcPrecoPrazo);
};
