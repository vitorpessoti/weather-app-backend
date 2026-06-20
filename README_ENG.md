<h1  align="center">Weather App API </h1>

<h3  align="center">
☀️ A Javascript API that provides weather information in real time.
</h3>
  
Table of contents

=================

<!--ts-->
* [About the project](#about)
* [Features](#features)
* [Setting up the project](#setting-up)
* [Running the project](#running)
* [Technologies](#technologies)
<!--te-->

<div id="about"></div>

## 💻 About the project

This project will provide real time data about weather, based on the current location (lat/long) or through providing a specific location manually. 
  

---
<div id="features"></div>

## ⚙️ Features

 - Search for a city/location based on the given text input
	 - If there is more than one location with the same name or prefix, a list of the found locations will be returned.
 - Get latitude and longitude of a location through the location name.
 - Get location information through its latitude and longitude.
 - Get current weather information of a location through its latitude and longitude.
 - - You can also provide the output format you prefer, like below:
 - - - `metric`: Celsius (ºC);
 - - - `imperial`: Fahrenheit (ºF);
 - - - `standard`: Kelvin (K).
  
<div id="setting-up"></div>

## 🚀 Setting up the project  
Before you begin, you will need to have the following tools installed on your machine:

- [Git](https://git-scm.com);
- [Node.js](https://nodejs.org/en/);
- In addition, it's good to have an editor to work with the code, such as [VSCode](https://code.visualstudio.com/).

<div id="running"></div>

## 🎲 Running the project

Installation and Execution
Requirements

- Node.js v16.15.0 or higher
- Access keys to the APIs used by the project

1. Cloning the repository

```bash
git  clone  git@github.com:vitorpessoti/weather-app-backend.git
cd  weather-app-backend
```

2. Installing dependencies

```bash
npm  install
```
or

```bash
yarn  install
```

3. Setting up environment variables

Create a `.env` file in the project root:

```bash
cp .env.example .env
```

Fill in the variables using the values ​​from your environment.

Example:

```bash
APP_PORT=3000
API_KEY=YOUR_OPENWEATHERMAP_API_KEY
GEODB_HOST=HOST_GEODB_API
GEODB_KEY=YOUR_GEODB_API_KEY
```

For security reasons, credentials are not versioned in the repository. Please use your own API keys and database settings.

To generate the keys, access the link below.:

- https://openweathermap.org/ (API_KEY)
- https://rapidapi.com/wirefreethought/api/geodb-cities (GEODB_HOST and GEODB_KEY)

4. Run the project

```bash
npm start
```
or
```bash
yarn  start
```

6. Access the application

By default, the server will be available at:

http://localhost:3000


If the APP_PORT variable is changed, use the port configured in the `.env` file.

---

  <div id="technologies"></div>

## 🛠 Technologies

The following tools were used in the project:
  
#### **Server** ([NodeJS](https://nodejs.orgen/))

-  **[Express](https://expressjs.com/)**
-  **[CORS](https://expressjs.com/en/resources/middleware/cors.html)**
-  **[node-fetch](https://www.npmjs.com/package/node-fetch)**
-  **[dotENV](https://github.com/motdotla/dotenv)**