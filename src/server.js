require('dotenv').config();
const cors = require('cors');

const consign = require('consign');
const express = require('express');
const port = process.env.PORT || process.env.APP_PORT;
const app = express();
app.use(express.json());
app.use(cors());

consign()
    .include('./controllers')
    .then('./config/routes.js')
    .into(app);

const server = app.listen(port, () => {
    console.log(`Server up and listening at ${port}`)
});