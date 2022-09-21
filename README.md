# Automação de Testes de API com Cypress

O seguinte projeto faz parte do Challenge da Sprint 5 do programa de bolsas "Automação de Testes com Cypress (back-end)" oferecido pela empresa Compass UOL em parceria com a Universidade Virtual do Estado de São Paulo (UNIVESP) em 2022.

O desafio proposto consiste em analisar uma API REST e definir quais testes são prioritários para automatização.

## Apresentação

A seguir, serão listados todos os pré-requisitos, tecnologias e comandos necessários para a execução deste projeto.

### Pré-requisitos e tecnologias utilizadas

<img align="left" alt="Windows-Logo" height="25" width ="25" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/windows8/windows8-original.svg"/>

O computador deverá ter instalado o sistema operacional [Windows 10](https://www.microsoft.com/pt-br/windows/windows-10-specifications) versão 21H2 ou superior ([Windows 11](https://www.microsoft.com/pt-br/windows/windows-11-specifications) é recomendável).

<img align="left" alt="Javascript-Logo" height="25" width ="25" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" />

Conhecimentos em lógica de programação (preferencialmente na linguagem [Javascript](https://github.com/topics/javascript))

<img align="left" alt="Visual-Studio-Logo" height="25" width ="25" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/visualstudio/visualstudio-plain.svg" />

[Visual Studio Code](https://code.visualstudio.com) - Editor de código aberto (versão 1.71.0 ou superior)

<img align="left" alt="Git-Logo" height="25" width ="25" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" />

[GIT](https://git-scm.com/) - Sistema de versionamento de arquivos (versão 2.37.3 ou superior)

<img align="left" alt="NodeJS-Logo" height="25" width ="25" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" />

[NodeJS](https://nodejs.org) - Ambiente para execução dos códigos em Javascript (versão LTS 16.17.0 ou superior)

<img align="left" alt="Cypress-Logo" height="25" width ="25" src="https://iconape.com/wp-content/files/gj/370774/svg/370774.svg" />

[Cypress](https://www.cypress.io/) - Framework de testes automatizados end-to-end (versão 9.7.0)
  
> Instale o framework Cypress como dependência de desenvolvimento: <code> npm install --save-dev cypress@9.7.0</code> Em seguida, execute-o através do comando: <code> npx cypress open </code>

<img align="left" alt="Serverest-Logo" height="25" width ="25" src="https://github.com/ServeRest/ServeRest/blob/trunk/docs/favicon.png" />
  
[API Serverest](https://serverest.dev/) - API que simula uma loja virtual (versão 2.26.2 ou superior)

> Para executar a API Serverest localmente, utilize o comando: <code> npx serverest@latest </code>

<img align="left" alt="Faker-JS-Logo" height="25" width ="25" src="https://github.com/faker-js/faker/blob/main/docs/public/logo.svg" />

[Faker-JS](https://fakerjs.dev/) - Biblioteca para gerar massa de dados aleatória para testes e desenvolvimento. (versão 7.5.0 ou superior)

> Instale a biblioteca Faker-JS como dependência de desenvolvimento: <code> npm install @faker-js/faker --save-dev </code>

<img align="left" alt="AJV-Logo" height="25" width ="25" src="https://ajv.js.org/img/ajv.png" />

[AJV](https://ajv.js.org/) - Validador para utilizar *Schemas* em JSON (versão 8.11.0 ou superior)

> Instale o validador AJV como dependência de desenvolvimento: <code> npm install --save-dev ajv </code>

<img align="left" alt="Mocha-Logo" height="25" width ="25" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mocha/mocha-plain.svg" />

[Mocha](https://mochajs.org/) - Biblioteca utilizada para estruturar os testes (versão 10.0.0 ou superior)

> Instale a biblioteca Mocha como dependência de desenvolvimento: <code> npm install --save-dev mocha </code>

<img align="left" alt="Mochawesome-Logo" height="25" width ="25" src="https://cdn-icons-png.flaticon.com/512/2011/2011750.png" />

[Mochawesome-Reporter](https://github.com/LironEr/cypress-mochawesome-reporter) - Plugin para realizar reports automatizados de testes (versão 3.2.2 ou superior)

> Instale o plugin Mochawesome-Reporter como dependência de desenvolvimento: <code> npm install --save-dev cypress-mochawesome-reporter </code>

### Execução dos testes

Após a instalação dos elementos citados no tópico acima, os arquivos referentes ao projeto deverão ser descompactados em uma pasta e a mesma deverá ser aberta no _Visual Studio Code_.

Para rodar os testes, digite um dos comandos abaixo no terminal:

* <code>npm cy:run</code> (para testes em ambiente de *Desenvolvimento*)

* <code>npm cy:run:prod</code> (para testes em ambiente de *Produção*)

Em seguida, os testes deverão ser automaticamente executados e um report em HTML deverá ser gerado.

## Autores

* **[Patricia Evelmerodach de Oliveira](https://github.com/PatriciaEvilmerodach/LogicalForest_Patricia_Oliveira_Compass)** - *Responsável pela criação dos testes e validações das rotas da API, e versionamento dos arquivos*

## License

Distribuído sob a [MIT License](https://github.com/PatriciaEvilmerodach/ChallengeFinal_PatriciaOliveira_Compass/blob/main/LICENSE)

Copyright (c) 2022 PatriciaEvilmerodach

## Créditos

Gostaria de agradecer aos meus colegas de estágio por diariamente compartilharem seus conhecimentos com o restante do grupo e, juntos, solucionarmos as dúvidas uns dos outros. A conclusão deste desafio tornou-se descomplicada graças ao espírito de equipe.
Agradeço também a equipe do time de desenvolvimento da Compass UOL, em especial nossa Scrum Master, pelo excelente acompanhamento e mentoria.

### Referências

* [Leonardo Kartabil - Equipe Compass UOL](https://compass.uol/pt/home/) - Orientações de como instalar as ferramentas necessárias e, passo-a-passo, de como elaborar os testes automatizados.
* [Mukesh Otwani](https://www.youtube.com/watch?v=aR74j4Hk0vo) - Instruções de como instalar o plugin para reports automatizados.
