/// <reference types="cypress" />
// ***********************************************************
const fs = require('fs-extra');
const path = require('path');

function buscarArquivoDeConfig(arquivo){
  const caminhoDoArquivo = path.resolve('.','cypress','config',`${arquivo}.json`)
  return fs.readJson(caminhoDoArquivo)
}

module.exports = (on, config) => {

  require('cypress-mochawesome-reporter/plugin')(on);

  const arquivo = config.env.configFile || 'dev'
  return buscarArquivoDeConfig(arquivo)
}