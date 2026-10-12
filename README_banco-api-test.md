# Banco API Test

Projeto de automação de testes funcionais para a API REST do [Banco
API](https://github.com/juliodelimas/banco-api), utilizando JavaScript e
ferramentas do ecossistema Node.js.

## Objetivo

Validar o comportamento dos endpoints da API REST do Banco API por meio
de testes automatizados, verificando respostas HTTP e regras esperadas.
O projeto também gera um relatório HTML para facilitar a análise dos
resultados da execução.

## Projeto testado

-   **API sob teste:**
    [juliodelimas/banco-api](https://github.com/juliodelimas/banco-api)
-   **Automação de testes:**
    [marianadenarde/banco-api-test](https://github.com/marianadenarde/banco-api-test)
-   **Documentação Swagger da API:** depois de iniciar a API, acesse
    `http://localhost:PORTA/api-docs`, substituindo `PORTA` pela porta
    configurada no projeto da API.

## Stack utilizada

  -----------------------------------------------------------------------------------------------------------
  Tecnologia / biblioteca                                                 Finalidade
  ----------------------------------------------------------------------- -----------------------------------
  [JavaScript](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript)   Linguagem utilizada para
                                                                          implementar os testes

  [Node.js](https://nodejs.org/)                                          Ambiente de execução JavaScript

  [npm](https://docs.npmjs.com/)                                          Instalação de dependências e
                                                                          execução de scripts

  [Mocha](https://mochajs.org/)                                           Framework para organização e
                                                                          execução dos testes

  [SuperTest](https://github.com/ladjs/supertest)                         Envio de requisições HTTP para a
                                                                          API durante os testes

  [Chai](https://www.chaijs.com/)                                         Biblioteca de asserções para
                                                                          validar os resultados

  [dotenv](https://github.com/motdotla/dotenv)                            Carregamento de variáveis de
                                                                          ambiente definidas no arquivo
                                                                          `.env`

  [Mochawesome](https://github.com/adamgruber/mochawesome)                Geração de relatório HTML da
                                                                          execução dos testes
  -----------------------------------------------------------------------------------------------------------

As dependências e versões declaradas estão no arquivo
[`package.json`](https://github.com/marianadenarde/banco-api-test/blob/main/package.json).

## Pré-requisitos

Antes de executar os testes, tenha instalado:

-   Node.js e npm.
-   Git, para clonar os repositórios.
-   A API REST do Banco API instalada e em execução.
-   Acesso à URL base da API que será testada.

> Os testes precisam alcançar uma instância em execução da API. O
> repositório de automação e o repositório da API são projetos
> separados.

## Configuração do ambiente

### 1. Clonar o projeto de automação

``` bash
git clone https://github.com/marianadenarde/banco-api-test.git
cd banco-api-test
```

### 2. Instalar as dependências

Na raiz do projeto, execute:

``` bash
npm install
```

O npm instalará as dependências declaradas no `package.json`, incluindo
Mocha, SuperTest, Chai, dotenv e Mochawesome.

### 3. Criar o arquivo `.env`

O arquivo `.env` não é versionado no repositório. Crie-o manualmente na
**raiz do projeto**, no mesmo nível do `package.json`.

Formato:

``` dotenv
BASE_URL=http://localhost:3000
```

`BASE_URL` deve conter a URL base da instância da API REST que será
testada, sem incluir o caminho específico de um endpoint. O exemplo usa
a porta `3000`; ajuste o valor para corresponder à porta e ao endereço
configurados na sua instância da API.

**Importante:** confirme que a API está em execução e que a variável
`BASE_URL` corresponde ao ambiente desejado antes de executar os testes.

Não coloque senhas, tokens ou outras informações sensíveis no
repositório. Se o projeto utilizar credenciais futuramente, mantenha-as
em variáveis de ambiente e não versione o arquivo `.env`.

## Executar os testes

Com a API em execução e o `.env` configurado, rode na raiz do projeto:

``` bash
npm test
```

O script `test` definido no `package.json` executa os arquivos de teste
que correspondem ao padrão `./test/**/*.test.js`, utilizando Mocha,
timeout de 200.000 milissegundos e o reporter Mochawesome.

## Relatório de testes

Ao executar `npm test`, o Mochawesome gera um relatório HTML. Com a
configuração padrão do reporter, o caminho esperado é:

``` text
mochawesome-report/mochawesome.html
```

Abra esse arquivo em um navegador para consultar os resultados,
incluindo os testes aprovados e reprovados e os detalhes disponíveis
para cada caso.

A pasta e os arquivos de relatório são artefatos gerados durante a
execução; caso não existam, execute os testes novamente e verifique se a
execução terminou e se o reporter foi iniciado corretamente.

## Executar a API sob teste

A API está em um repositório separado:
[juliodelimas/banco-api](https://github.com/juliodelimas/banco-api).

Consulte o README e a configuração desse repositório para instalar suas
dependências e definir as variáveis de ambiente necessárias. O
`package.json` da API disponibiliza o script `rest-api`. Após configurar
o ambiente da API, inicie-a na pasta do repositório dela com:

``` bash
npm install
npm run rest-api
```

A aplicação REST lê suas configurações de ambiente, incluindo a porta de
execução. Configure a porta conforme as instruções do repositório da API
e utilize o mesmo endereço/porta em `BASE_URL` no projeto de automação.

A documentação Swagger é disponibilizada pelo serviço REST no caminho
`/api-docs`; por exemplo, se a API estiver na porta 3000, acesse
`http://localhost:3000/api-docs`.

## Documentação das dependências

-   [Node.js --- documentação
    oficial](https://nodejs.org/docs/latest/api/)
-   [npm --- documentação oficial](https://docs.npmjs.com/)
-   [Mocha --- documentação](https://mochajs.org/)
-   [SuperTest --- repositório e
    documentação](https://github.com/ladjs/supertest)
-   [Chai --- documentação](https://www.chaijs.com/guide/)
-   [dotenv --- repositório e
    instruções](https://github.com/motdotla/dotenv)
-   [Mochawesome --- repositório e opções de
    configuração](https://github.com/adamgruber/mochawesome)
-   [JavaScript --- MDN Web
    Docs](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript)

## Solução de problemas

-   **Erro de conexão:** confira se a API está em execução e se
    `BASE_URL` aponta para o host e a porta corretos.
-   **Variável não carregada:** confirme que o arquivo se chama
    exatamente `.env`, está na raiz do projeto e contém `BASE_URL=...`
    sem espaços em torno do sinal de igual.
-   **Relatório não encontrado:** confirme se `npm test` foi executado e
    verifique a saída no terminal para identificar erros antes da
    geração do relatório.
-   **Dependências ausentes:** execute `npm install` na raiz do projeto.

## Licença

Consulte o arquivo `package.json` e os arquivos do repositório para
informações sobre licenciamento.
