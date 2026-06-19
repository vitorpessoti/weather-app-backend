<h1 align="center">
     ☁️ <a href="#" alt="weather app backend"> Weather App API </a>
</h1>

<h3 align="center">
    ☀️ Uma api desenvolvida em Javascript que fornece informações climáticas em tempo real.
</h3>

<h4 align="center">
	🚧   Em andamento 🛠️ 🚧
</h4>

Tabela de conteúdos
=================
<!--ts-->
   * [Sobre o projeto](#-sobre-o-projeto)
   * [Regras de negócio](#-regras-de-negocio)
   * [Funcionalidades](#-funcionalidades)
   * [Como executar o projeto](#-como-executar-o-projeto)
     * [Pré-requisitos](#pré-requisitos)
     * [Rodando o Backend (servidor)](#user-content--rodando-o-backend-servidor)
   * [Tecnologias](#-tecnologias)
     * [Server](#user-content-server--nodejs----typescript)
<!--te-->


## 💻 Sobre o projeto

Este projeto visa fornecer dados em tempo real sobre informações climáticas, baseado na localizaçao atual (latitude/longitude) ou informando uma localização específica manualmente.

---

## ⚙️ Funcionalidades

- Buscar por uma cidade baseado no nome informado
-- Caso haja mais de uma localidade com o mesmo nome ou prefixo, será retornada uma lista com as localidades encontradas

- Obter latitude e longitude de um local através do nome da localidade

- Obter informações de uma localização através de sua latitude e longitude

- Obter informações em atuais sobre o clima em determinada localidade através de sua latitude e longitude
-- Também pode ser informado em qual formato deseja visualizar as informações, conforme abaixo:
--- `metric`: retorna em Celsius (ºC)
--- `imperial`: retorna em Fahrenheit (ºF)
--- `standard`: retorna em Kelvin (ºK)

## 🚀 Como executar o projeto

Este projeto vai ser dividido em:
### Pré-requisitos

Antes de começar, você vai precisar ter instalado em sua máquina as seguintes ferramentas:
[Git](https://git-scm.com), [Node.js](https://nodejs.org/en/); Além disto é bom ter um editor para trabalhar com o código como [VSCode](https://code.visualstudio.com/).

#### 🎲 Rodando o Backend (servidor)

Instalação e execução
Pré-requisitos
- Node.js v16.15.0 ou superior
- Chaves de acesso às APIs utilizadas pelo projeto

1. Clone o repositório
```bash
git clone git@github.com:vitorpessoti/weather-app-backend.git
cd weather-app-backend
```

2. Instale as dependências
```bash
npm install
```

ou

```bash
yarn install
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
npm run dev
```

ou

```bash
yarn dev
```
6. Acesse a aplicação

Por padrão, o servidor estará disponível em:

http://localhost:3000

Caso a variável APP_PORT seja alterada, utilize a porta configurada no arquivo .env.
---

## 🛠 Tecnologias

As seguintes ferramentas foram usadas na construção do projeto:

#### **Server**  ([NodeJS](https://nodejs.orgen/))

-   **[Express](https://expressjs.com/)**
-   **[CORS](https://expressjs.com/en/resources/middleware/cors.html)**
-   **[cosign](https://www.npmjs.com/package/cosign)**
-   **[node-fetch](https://www.npmjs.com/package/node-fetch)**
-   **[dotENV](https://github.com/motdotla/dotenv)**