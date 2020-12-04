const { makeRequest } = require('../utils');

const calcPrecoController = {};

calcPrecoController.calcPreco = async (req, res) => {

    const obj = {
        nCdEmpresa: req.body.nCdEmpresa,
        sDsSenha: req.body.sDsSenha,
        nCdServico: req.body.nCdServico,
        sCepOrigem: req.body.sCepOrigem,
        sCepDestino: req.body.sCepDestino,
        nVlPeso: req.body.nVlPeso,
        nCdFormato: req.body.nCdFormato,
        nVlComprimento: req.body.nVlComprimento,
        nVlAltura: req.body.nVlAltura,
        nVlLargura: req.body.nVlLargura,
        nVlDiametro: req.body.nVlDiametro,
        sCdMaoPropria: req.body.sCdMaoPropria,
        nVlValorDeclarado: req.body.nVlValorDeclarado,
        sCdAvisoRecebimento: req.body.sCdAvisoRecebimento,
    };
    
    const response = await makeRequest('http://ws.correios.com.br/calculador/CalcPrecoPrazo.asmx/CalcPreco', 'POST', obj);
    
    res.json(response);

};

module.exports = calcPrecoController;

