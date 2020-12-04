const { makeRequest, checkIfKeysExists, mountErrorMessage } = require('../utils');

const calcPrecoPrazoRestricaoController = {};

calcPrecoPrazoRestricaoController.calcPrecoPrazoRestricao = async (req, res) => {

    const obj = req.body;
    
    const requiredFields = [
        'nCdEmpresa', 'sDsSenha', 'nCdServico', 'sCepOrigem', 'sCepDestino',
        'nVlPeso', 'nCdFormato', 'nVlComprimento', 'nVlAltura', 'nVlLargura',
        'nVlDiametro', 'sCdMaoPropria', 'nVlValorDeclarado', 'sCdAvisoRecebimento',
        'sDtCalculo',
    ];

    const errors = await checkIfKeysExists(obj, requiredFields);
    
    if (errors) return res.json(mountErrorMessage(errors));
    
    const response = await makeRequest('http://ws.correios.com.br/calculador/CalcPrecoPrazo.asmx/CalcPrecoPrazoRestricao', 'POST', obj);
    
    return res.json(response);

};

module.exports = calcPrecoPrazoRestricaoController;

