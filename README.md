# Telzir

Projeto utilizando Angular CLI versão 7.3.8.

## Requisitos:

git, angular-cli, npm


## Quick Start

git clone https://github.com/zmdoug/telzir.git

## Instalando as dependências:

npm install

## Rodando a aplicação

Digite o comando `npm start` dentro da pasta do projeto 'telzir'. 
O projeto será carregado em `http://localhost:4200/` no navegador. 

## Build

Digite `ng build` para compilar o projeto. Após a conclusão será criada a pasta `dist/` 
 dentro da pasta raíz do projeto. Use a flag `--prod` para produção.

## Testes

Digite `ng test` para executar os testes via [Karma](https://karma-runner.github.io). 
Uma janela será aberta para acompanhar o resultado.
O teste apresentará 17 validações.

## Estrutura

As pastas do projeto representam:

.
../src - Source do projeto
../src/app/ - Arquivos da aplicação
../src/app/navbar - Componente de navegação
../src/app/pages - Páginas da aplicação
../src/app/services - Serviços
../src/app/shared - Componentes compartilhados
../src/app/app-routing.module.ts - Roteamento de páginas

Arquivos:

*.module.ts - Arquivo de importação, dependências
*.service.ts - Arquivo de services, requisições
*.component.ts - Arquivo de execução do componente
*.component.html - Arquivo estrutural do componente
*.component.scss - Arquivo de estilos do componente
*.component.sec.ts - Arquivo de testes unitário do componente
