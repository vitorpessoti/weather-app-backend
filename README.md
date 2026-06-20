<h1  align="center"> Weather App API</h1>

## Languages
English version of docs is available [here](https://github.com/vitorpessoti/weather-app/blob/main/README_ENG.md)

---
<h3  align="center">☀️ Uma api desenvolvida em Javascript que fornece informações climáticas em tempo real.</h3>

Tabela de conteúdos
=================

<!--ts-->
* [Sobre o projeto](#sobre-o-projeto)
* [Funcionalidades](#funcionalidades)
* [Configurando o projeto](#configurando-o-projeto)
* [Rodando o projeto](#rodando-o-projeto)
* [Tecnologias](#tecnologias)
<!--te-->

<div id="sobre-o-projeto"></div>

## 💻 Sobre o projeto

Este projeto visa fornecer dados em tempo real sobre informações climáticas, baseado na localizaçao atual (latitude/longitude) ou informando uma localização específica manualmente.

---
<div id="funcionalidades"></div>

## ⚙️ Funcionalidades

- Buscar por uma cidade baseado no nome informado
-- Caso haja mais de uma localidade com o mesmo nome ou prefixo, será retornada uma lista com as localidades encontradas
- Obter latitude e longitude de um local através do nome da localidade
- Obter informações de uma localização através de sua latitude e longitude
- Obter informações em atuais sobre o clima em determinada localidade através de sua latitude e longitude
-- Também pode ser informado em qual formato deseja visualizar as informações, conforme abaixo:
--- `metric`: retorna em Celsius (ºC)
--- `imperial`: retorna em Fahrenheit (ºF)
--- `standard`: retorna em Kelvin (K)

<div id="configurando-o-projeto"></div>

## 🚀 Configurando o projeto

Antes de começar, você vai precisar ter instalado em sua máquina as seguintes ferramentas:

- [Git](https://git-scm.com);
- [Node.js](https://nodejs.org/en/);
- Além disto é bom ter um editor para trabalhar com o código como [VSCode](https://code.visualstudio.com/).

<div id="rodando-o-projeto"></div>

## 🎲 Rodando o projeto
Instalação e execução

Pré-requisitos

- Node.js v16.15.0 ou superior
- Chaves de acesso às APIs utilizadas pelo projeto

1. Clone o repositório

```bash
git  clone  git@github.com:vitorpessoti/weather-app-backend.git
cd  weather-app-backend
```

2. Instale as dependências

```bash
npm install
```
ou
```bash
yarn  install
```

3. Configure as variáveis de ambiente

Crie um arquivo .env na raiz do projeto:

```bash
cp .env.example .env
```

Preencha as variáveis utilizando os valores do seu ambiente.

Exemplo:

```bash
APP_PORT=3000
API_KEY=SUA_API_KEY_OPENWEATHERMAP
GEODB_HOST=HOST_GEODB_API
GEODB_KEY=_SUA_API_KEY_GEODB
```

Por questões de segurança, as credenciais não são versionadas no repositório. Utilize suas próprias chaves de API e configurações de banco de dados.

Para gerar as keys, acesse abaixo:

- https://openweathermap.org/ (API_KEY)
- https://rapidapi.com/wirefreethought/api/geodb-cities (GEODB_HOST e GEODB_KEY)

4. Execute o projeto

```bash
npm start
```
ou

```bash
yarn start
```

6. Acesse a aplicação

Por padrão, o servidor estará disponível em:
http://localhost:3000

Caso a variável APP_PORT seja alterada, utilize a porta configurada no arquivo .env.

---
<div id="tecnologias"></div>

## 🛠 Tecnologias

As seguintes ferramentas foram usadas na construção do projeto:

#### **Server** ([NodeJS](https://nodejs.orgen/))

-  **[Express](https://expressjs.com/)**
-  **[CORS](https://expressjs.com/en/resources/middleware/cors.html)**
-  **[node-fetch](https://www.npmjs.com/package/node-fetch)**
-  **[dotENV](https://github.com/motdotla/dotenv)**